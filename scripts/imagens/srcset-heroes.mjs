/**
 * Gera srcset responsivo para as imagens de hero.
 *
 * Os heroes são full-bleed e foram exportados a 2560px de largura. Sem srcset,
 * um celular de 390px baixa exatamente o mesmo arquivo que um desktop — é o
 * maior desperdício que sobra depois da conversão para WebP, e cai justamente
 * sobre a imagem de LCP da rota.
 *
 * Escopo: só as tags marcadas com fetchpriority="high", que são por construção
 * a imagem principal da rota (ver atributos-img.mjs). As demais são lazy e
 * ficam com `sizes="auto"`, resolvido pelo próprio navegador.
 *
 * Uso:  node scripts/imagens/srcset-heroes.mjs [--dry]
 */
import sharp from "sharp";
import { readdirSync, readFileSync, writeFileSync, existsSync } from "fs";
import { join } from "path";

const DRY = process.argv.includes("--dry");
const LARGURAS = [640, 960, 1280, 1920, 2560];

function varrer(dir, saida = []) {
  for (const item of readdirSync(dir, { withFileTypes: true })) {
    const caminho = join(dir, item.name);
    if (item.isDirectory()) varrer(caminho, saida);
    else if (/\.(astro|jsx|tsx)$/.test(item.name)) saida.push(caminho);
  }
  return saida;
}

/** Gera as variantes em disco e devolve o atributo srcset pronto. */
async function variantes(caminhoPublico) {
  const origem = join("public", caminhoPublico);
  if (!existsSync(origem)) return null;

  const meta = await sharp(origem).metadata();
  const alvos = LARGURAS.filter((l) => l < meta.width);
  if (!alvos.length) return null; // já é pequena, srcset não ajudaria

  const partes = [];
  for (const largura of alvos) {
    const destino = caminhoPublico.replace(/\.webp$/, `-${largura}w.webp`);
    if (!DRY && !existsSync(join("public", destino))) {
      await sharp(origem)
        .resize({ width: largura })
        .webp({ quality: 82, effort: 6, smartSubsample: true })
        .toFile(join("public", destino));
    }
    // encodeURI é obrigatório: srcset separa candidatos por vírgula e usa o
    // espaço para o descritor, então nome de arquivo com espaço quebra o parse.
    // A barra inicial é obrigatória: sem ela o caminho é resolvido relativo à
    // rota atual e quebra em qualquer página aninhada.
    partes.push(`/${encodeURI(destino)} ${largura}w`);
  }
  partes.push(`/${encodeURI(caminhoPublico)} ${meta.width}w`);
  return partes.join(", ");
}

let tags = 0;
const alterados = [];

for (const arquivo of varrer("src")) {
  const original = readFileSync(arquivo, "utf8");
  const encontradas = [
    ...original.matchAll(/<img\b(?:(?!<\/?img)[\s\S])*?\/>/g),
  ].filter(
    (m) =>
      m[0].includes('fetchpriority="high"') &&
      !m[0].includes("srcset") &&
      /src="(\/[^"]+\.webp)"/.test(m[0]),
  );

  let texto = original;
  for (const m of encontradas) {
    const tag = m[0];
    const caminho = tag.match(/src="(\/[^"]+\.webp)"/)[1];
    const srcset = await variantes(caminho.slice(1));
    if (!srcset) continue;

    const indent = (tag.match(/\n(\s*)src=/) || [, "        "])[1];
    const nova = tag.replace(
      /(\s*)src="/,
      `\n${indent}srcset="${srcset}"\n${indent}sizes="100vw"$1src="`,
    );
    texto = texto.replace(tag, nova);
    tags++;
  }

  if (texto !== original) {
    alterados.push(`${arquivo}`);
    if (!DRY) writeFileSync(arquivo, texto);
  }
}

console.log(
  `${DRY ? "[DRY] " : ""}heroes com srcset: ${tags} em ${alterados.length} arquivos`,
);
for (const a of alterados) console.log("  " + a);
