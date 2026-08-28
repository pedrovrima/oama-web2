/**
 * Importa para o Sanity os 6 posts de blog que existiam só como MDX no site
 * antigo (`/Users/anhinga/Projetos/oama-website/_posts`) e nunca foram
 * migrados.
 *
 * Precisa de um token com permissão de ESCRITA:
 *
 *   SANITY_WRITE_TOKEN=sk... node scripts/blog/importar-posts.mjs
 *
 * Sem `--confirmar` o script roda em modo simulação: converte tudo, otimiza as
 * imagens e mostra o que faria, sem enviar nada.
 *
 *   node scripts/blog/importar-posts.mjs            # simulação (não precisa token)
 *   SANITY_WRITE_TOKEN=sk... node scripts/blog/importar-posts.mjs --confirmar
 *
 * É idempotente: os documentos usam `_id` determinístico (`blog-<slug>` e
 * `autor-<slug>`) e `createIfNotExists`, então rodar duas vezes não duplica.
 * Os 2 posts que já existiam no dataset não são tocados.
 */

import "dotenv/config";
import { createClient } from "@sanity/client";
import { readFileSync, mkdirSync, writeFileSync, statSync } from "node:fs";
import { join, extname, basename } from "node:path";
import sharp from "sharp";
import { converterTodos, gerarSlug, DIR_PUBLIC } from "./converter-mdx.mjs";

const CONFIRMAR = process.argv.includes("--confirmar");
// O token pode vir do .env (que é gitignored) ou da variável de ambiente.
// A variável de ambiente ganha, para dar pra sobrescrever numa execução só.
const TOKEN = process.env.SANITY_WRITE_TOKEN;

const PROJECT_ID = "1tnejkhf";
const DATASET = "production";
const API_VERSION = "2024-01-01";

/** Imagens otimizadas ficam aqui antes de subir; não entram no repositório. */
const DIR_TEMP = "/tmp/oama-import-blog";

const cliente = createClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  apiVersion: API_VERSION,
  token: TOKEN,
  useCdn: false,
});

// ---------------------------------------------------------------------------
// Imagens: máximo 2000px no lado maior, JPEG q85 progressivo.
// PNG com transparência é preservado como PNG (converter para JPEG traria
// fundo preto); os PNGs destes posts são gráficos/mapas opacos, então caem
// no caminho JPEG normalmente.
// ---------------------------------------------------------------------------
async function otimizar(caminhoRelativo) {
  const origem = join(DIR_PUBLIC, caminhoRelativo);
  const meta = await sharp(origem).metadata();

  const nomeBase = caminhoRelativo.replace(/^\//, "").replace(/[/\\]/g, "__");
  const temTransparencia = meta.hasAlpha && meta.format === "png";
  const destino = join(
    DIR_TEMP,
    nomeBase.replace(new RegExp(`${extname(nomeBase)}$`), temTransparencia ? ".png" : ".jpg")
  );

  let img = sharp(origem).rotate(); // respeita o EXIF antes de redimensionar
  if (Math.max(meta.width, meta.height) > 2000) {
    img = img.resize({ width: 2000, height: 2000, fit: "inside", withoutEnlargement: true });
  }
  img = temTransparencia
    ? img.png({ compressionLevel: 9, palette: true })
    : img.jpeg({ quality: 85, progressive: true, mozjpeg: true });

  await img.toFile(destino);

  return {
    destino,
    antes: statSync(origem).size,
    depois: statSync(destino).size,
    dimensoes: `${meta.width}x${meta.height}`,
  };
}

// ---------------------------------------------------------------------------
// Upload de asset, com cache por caminho de origem.
// ---------------------------------------------------------------------------
const assetsPorCaminho = new Map();

async function subirImagem(caminhoRelativo, relatorio) {
  if (assetsPorCaminho.has(caminhoRelativo)) return assetsPorCaminho.get(caminhoRelativo);

  const info = await otimizar(caminhoRelativo);
  relatorio.push({ caminho: caminhoRelativo, ...info });

  if (!CONFIRMAR) {
    const falso = { _id: `image-SIMULACAO-${basename(info.destino)}` };
    assetsPorCaminho.set(caminhoRelativo, falso);
    return falso;
  }

  const asset = await cliente.assets.upload("image", readFileSync(info.destino), {
    filename: basename(info.destino),
  });
  assetsPorCaminho.set(caminhoRelativo, asset);
  return asset;
}

function referenciaImagem(assetId) {
  return { _type: "image", asset: { _type: "reference", _ref: assetId } };
}

// ---------------------------------------------------------------------------
// Autores
// ---------------------------------------------------------------------------
async function garantirAutor(nome) {
  const existente = await cliente.fetch(`*[_type == "author" && name == $nome][0]{_id, name}`, {
    nome,
  });
  if (existente) return { ...existente, criado: false };

  const doc = {
    _id: `autor-${gerarSlug(nome)}`,
    _type: "author",
    name: nome,
    slug: { _type: "slug", current: gerarSlug(nome) },
  };
  if (!CONFIRMAR) return { ...doc, criado: true };

  const salvo = await cliente.createIfNotExists(doc);
  return { ...salvo, criado: true };
}

// ---------------------------------------------------------------------------
// Principal
// ---------------------------------------------------------------------------
async function principal() {
  if (CONFIRMAR && !TOKEN) {
    console.error("ERRO: --confirmar exige um token de escrita do Sanity.\n");
    console.error("Onde conseguir: sanity.io/manage -> projeto 1tnejkhf -> API -> Tokens");
    console.error("Permissao necessaria: Editor\n");
    console.error("Onde guardar (escolha um):");
    console.error("  1. No arquivo .env deste repo (ja e gitignored):");
    console.error("       SANITY_WRITE_TOKEN=sk...");
    console.error("  2. So nesta execucao, sem gravar em lugar nenhum:");
    console.error("       SANITY_WRITE_TOKEN=sk... node scripts/blog/importar-posts.mjs --confirmar");
    process.exit(1);
  }
  mkdirSync(DIR_TEMP, { recursive: true });

  const posts = converterTodos();
  const relatorioImagens = [];

  // Trava de segurança: não encostar em documento que já exista com outro _id.
  const slugsExistentes = TOKEN
    ? await cliente.fetch(`*[_type == "blog"]{ "slug": slug.current, _id }`)
    : [];
  const porSlug = new Map(slugsExistentes.map((p) => [p.slug, p._id]));

  console.log(
    CONFIRMAR ? "== IMPORTANDO (escrita real) ==" : "== SIMULAÇÃO (nada é enviado) =="
  );

  for (const post of posts) {
    const idDoc = `blog-${post.slug}`;
    const jaExiste = porSlug.get(post.slug);
    if (jaExiste && jaExiste !== idDoc) {
      console.error(
        `PULANDO ${post.slug}: já existe um post com esse slug (_id ${jaExiste}) que não foi criado por este script.`
      );
      continue;
    }

    const autor = await garantirAutor(post.autor);
    const capa = await subirImagem(post.capa, relatorioImagens);

    // Resolve as imagens do corpo em assets do Sanity.
    const body = [];
    for (const bloco of post.body) {
      if (bloco._type !== "imageWithAlt") {
        body.push(bloco);
        continue;
      }
      const asset = await subirImagem(bloco._imagemOrigem, relatorioImagens);
      const { _imagemOrigem, ...resto } = bloco;
      body.push({ ...resto, image: referenciaImagem(asset._id) });
    }

    const doc = {
      _id: idDoc,
      _type: "blog",
      title: post.title,
      slug: { _type: "slug", current: post.slug },
      author: { _type: "reference", _ref: autor._id },
      publishedAt: post.publishedAt,
      mainImage: referenciaImagem(capa._id),
      body,
    };

    if (CONFIRMAR) {
      await cliente.createOrReplace(doc);
    }
    console.log(
      `  ${CONFIRMAR ? "OK" : "(simulado)"} ${post.slug} — ${body.length} blocos, autor "${autor.name}"${autor.criado ? " (novo)" : ""}`
    );
  }

  // Relatório de peso das imagens.
  const antes = relatorioImagens.reduce((s, i) => s + i.antes, 0);
  const depois = relatorioImagens.reduce((s, i) => s + i.depois, 0);
  const mb = (b) => (b / 1024 / 1024).toFixed(1);
  console.log(
    `\nImagens: ${relatorioImagens.length} — ${mb(antes)} MB -> ${mb(depois)} MB ` +
      `(-${Math.round((1 - depois / antes) * 100)}%)`
  );

  writeFileSync(
    join(DIR_TEMP, "relatorio-imagens.json"),
    JSON.stringify(relatorioImagens, null, 2)
  );
}

principal().catch((e) => {
  console.error(e);
  process.exit(1);
});
