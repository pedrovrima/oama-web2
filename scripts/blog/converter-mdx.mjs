/**
 * Converte os posts em MDX do site antigo (Next.js) para Portable Text,
 * no subconjunto que o renderizador `src/utils/portableText.ts` sabe exibir.
 *
 * Uso isolado (dry-run, não toca no Sanity):
 *   node scripts/blog/converter-mdx.mjs > /tmp/posts.json
 *
 * Decisões de conversão:
 *  - <h2> -> bloco `h2`; parágrafos e itens de lista -> bloco `normal`.
 *  - <sup>3,4</sup> -> "[3,4]" no texto. O renderizador do site não tem
 *    sobrescrito e o schema só permite as marcas strong/em; os colchetes são a
 *    convenção acadêmica usual e mantêm a numeração das referências legível e
 *    casando com a bibliografia no fim dos posts.
 *  - <a href> -> marca `link` (só o campo `href`, que é o que o site lê).
 *    Em legenda de imagem, que é string simples, o link vira "texto (url)".
 *  - **negrito** / _itálico_ -> strong / em, aplicados só fora das tags.
 *  - <Image> + o <p> irmão seguinte -> `imageWithAlt` {image, alt, caption}.
 *  - <div> é só embrulho (figura ou "callout"): sempre percorrido por dentro,
 *    para não perder o texto de um callout que contenha uma figura.
 *  - <p class="text-2xl font-bold"> (citação em destaque) -> parágrafo em
 *    negrito; <p> com <br /> (poema em 994) -> um bloco por verso.
 *  - Nada é resumido: bibliografia, DOIs e URLs vão inteiros.
 */

import { readFileSync, readdirSync } from "node:fs";
import { basename, join } from "node:path";

export const DIR_POSTS = "/Users/anhinga/Projetos/oama-website/_posts";
export const DIR_PUBLIC = "/Users/anhinga/Projetos/oama-website/public";

// ---------------------------------------------------------------------------
// Chaves determinísticas: rodar duas vezes gera exatamente o mesmo documento.
// ---------------------------------------------------------------------------
function criarContadorDeChaves() {
  let n = 0;
  return () => `k${(n++).toString(36).padStart(4, "0")}`;
}

// ---------------------------------------------------------------------------
// Frontmatter
// ---------------------------------------------------------------------------
function lerFrontmatter(texto) {
  const m = texto.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!m) throw new Error("frontmatter ausente");
  const dados = {};
  for (const linha of m[1].split(/\r?\n/)) {
    const par = linha.match(/^(\w+):\s*(.*)$/);
    if (!par) continue;
    dados[par[1]] = par[2].trim().replace(/^['"]|['"]$/g, "");
  }
  return { dados, corpo: texto.slice(m[0].length) };
}

/** `DD/MM/AAAA` -> ISO 8601 (meio-dia UTC, para não escorregar de dia). */
function dataParaIso(br) {
  const m = br.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if (!m) throw new Error(`data fora do formato DD/MM/AAAA: ${br}`);
  return `${m[3]}-${m[2]}-${m[1]}T12:00:00.000Z`;
}

export function gerarSlug(titulo) {
  return titulo
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// ---------------------------------------------------------------------------
// Inline: HTML + markdown -> spans do Portable Text
// ---------------------------------------------------------------------------

/** Normaliza o inline para um HTML mínimo (strong/em/a) antes de tokenizar. */
function normalizarInline(bruto) {
  let s = bruto;

  // <sup>3,4</sup> -> [3,4]. O renderizador do site não tem sobrescrito; os
  // colchetes preservam a referência acadêmica de forma legível.
  s = s.replace(/<sup[^>]*>\s*([^<]*?)\s*<\/sup>/gi, (_, n) => `[${n}]`);

  // <span class='font-bold'> vira negrito; os demais spans só somem,
  // preservando o texto interno (ex.: nomes científicos em <span non-italic>).
  s = s.replace(
    /<span[^>]*class=["'][^"']*font-bold[^"']*["'][^>]*>([\s\S]*?)<\/span>/gi,
    "<strong>$1</strong>"
  );
  s = s.replace(/<\/?span[^>]*>/gi, "");

  // Links markdown -> <a href>
  s = s.replace(/\[([^\]]+)\]\(([^)\s]+)[^)]*\)/g, (_, t, u) => `<a href="${u}">${t}</a>`);

  // Ênfase markdown, aplicada só FORA das tags: senão um `_` dentro de uma
  // URL em href viraria itálico. Negrito antes de itálico para casar **_x_**.
  const enfase = (t) =>
    t
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/__([^_]+)__/g, "<strong>$1</strong>")
      .replace(/(^|[^A-Za-z0-9_])_([^_\n]+)_(?=[^A-Za-z0-9_]|$)/g, "$1<em>$2</em>")
      .replace(/(^|[^A-Za-z0-9*])\*([^*\n]+)\*(?=[^A-Za-z0-9*]|$)/g, "$1<em>$2</em>");
  s = s
    .split(/(<[^>]*>)/)
    .map((parte, idx) => (idx % 2 === 1 ? parte : enfase(parte)))
    .join("");

  // Restos de JSX do MDX: `{' '}` é só um espaço.
  s = s.replace(/\{['"]\s*['"]\}/g, " ");

  return s;
}

function decodificarEntidades(t) {
  return t
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

/**
 * Tokeniza o inline normalizado em spans do Portable Text.
 * Retorna { children, markDefs }.
 */
function inlineParaSpans(bruto, novaChave) {
  const s = normalizarInline(bruto);
  const children = [];
  const markDefs = [];
  const pilha = []; // marcas ativas

  let buffer = "";
  const descarregar = () => {
    if (!buffer) return;
    const texto = decodificarEntidades(buffer).replace(/\s+/g, " ");
    if (texto) {
      children.push({
        _type: "span",
        _key: novaChave(),
        text: texto,
        marks: [...pilha],
      });
    }
    buffer = "";
  };

  const re = /<\/?([a-zA-Z][a-zA-Z0-9]*)((?:[^>"']|"[^"]*"|'[^']*')*)\/?>/g;
  let pos = 0;
  let m;
  while ((m = re.exec(s)) !== null) {
    buffer += s.slice(pos, m.index);
    pos = m.index + m[0].length;

    const fechando = m[0].startsWith("</");
    const tag = m[1].toLowerCase();

    if (tag === "br") {
      descarregar();
      children.push({ _type: "span", _key: novaChave(), text: " ", marks: [] });
      continue;
    }

    if (tag === "strong" || tag === "b") {
      descarregar();
      if (fechando) {
        const i = pilha.lastIndexOf("strong");
        if (i >= 0) pilha.splice(i, 1);
      } else pilha.push("strong");
      continue;
    }

    if (tag === "em" || tag === "i") {
      descarregar();
      if (fechando) {
        const i = pilha.lastIndexOf("em");
        if (i >= 0) pilha.splice(i, 1);
      } else pilha.push("em");
      continue;
    }

    if (tag === "a") {
      descarregar();
      if (fechando) {
        // Remove a última marca de link da pilha.
        for (let i = pilha.length - 1; i >= 0; i--) {
          if (markDefs.some((d) => d._key === pilha[i])) {
            pilha.splice(i, 1);
            break;
          }
        }
      } else {
        const href = (m[2].match(/href\s*=\s*["']([^"']+)["']/) || [])[1];
        if (href) {
          const chave = novaChave();
          markDefs.push({ _key: chave, _type: "link", href: href.trim() });
          pilha.push(chave);
        }
      }
      continue;
    }

    // Qualquer outra tag inline: some, o texto interno é preservado.
  }
  buffer += s.slice(pos);
  descarregar();

  return { children, markDefs };
}

function blocoTexto(estilo, bruto, novaChave, extras = {}) {
  const { children, markDefs } = inlineParaSpans(bruto, novaChave);
  if (!children.length) return null;
  // Junta espaços nas bordas dos spans vizinhos sem perder o conteúdo.
  const texto = children.map((c) => c.text).join("").trim();
  if (!texto) return null;
  return {
    _type: "block",
    _key: novaChave(),
    style: estilo,
    markDefs,
    children,
    ...extras,
  };
}

/** Remove todas as tags, devolvendo texto puro (usado em `caption`). */
function textoPuro(bruto) {
  let s = bruto.replace(/<sup[^>]*>\s*([^<]*?)\s*<\/sup>/gi, (_, n) => `[${n}]`);
  // Em legenda, `caption` é string simples: preserva o link como "texto (url)".
  s = s.replace(
    /<a[^>]*href\s*=\s*["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi,
    (_, url, txt) => `${txt.replace(/<[^>]*>/g, "").trim()} (${url.trim()})`
  );
  s = s.replace(/\{['"]\s*['"]\}/g, " ");
  s = s.replace(/<[^>]*>/g, "");
  s = s.replace(/\*\*([^*]+)\*\*/g, "$1").replace(/_([^_]+)_/g, "$1");
  return decodificarEntidades(s).replace(/\s+/g, " ").trim();
}

// ---------------------------------------------------------------------------
// Blocos
// ---------------------------------------------------------------------------

/** Consome um elemento HTML balanceado a partir de `i`. Devolve o índice final. */
function fimDoElemento(texto, i, tag) {
  const abre = new RegExp(`<${tag}(?=[\\s/>])`, "gi");
  const fecha = new RegExp(`</${tag}\\s*>`, "gi");
  // Auto-fechado no próprio tag de abertura?
  const primeiro = texto.slice(i).match(new RegExp(`^<${tag}((?:[^>"']|"[^"]*"|'[^']*')*)>`, "i"));
  if (primeiro && primeiro[1].trimEnd().endsWith("/")) return i + primeiro[0].length;

  let nivel = 0;
  let pos = i;
  while (pos < texto.length) {
    abre.lastIndex = pos;
    fecha.lastIndex = pos;
    const a = abre.exec(texto);
    const f = fecha.exec(texto);
    if (!f) {
      // Tag sem fechamento (acontece em alguns <p> de legenda no MDX antigo):
      // encerra no </div> do pai em vez de engolir o resto do documento.
      const pai = texto.slice(pos).search(/<\/div\s*>/i);
      return pai === -1 ? texto.length : pos + pai;
    }
    if (a && a.index < f.index) {
      nivel++;
      pos = a.index + a[0].length;
      continue;
    }
    nivel--;
    pos = f.index + f[0].length;
    if (nivel === 0) return pos;
  }
  return texto.length;
}

/** Normaliza o `src` do MDX para caminho dentro de `public/`. */
export function normalizarSrc(src) {
  const limpo = src.trim();
  // Alguns posts esqueceram o prefixo `/blog/` (ex.: `o_que_e_ciencia/img3.jpg`).
  return limpo.startsWith("/") ? limpo : `/blog/${limpo}`;
}

function blocoImagem(html, novaChave, imagens) {
  const tagImg = html.match(/<Image((?:[^>"']|"[^"]*"|'[^']*')*)>/i);
  if (!tagImg) return null;
  const src = (tagImg[1].match(/src\s*=\s*["']([^"']+)["']/) || [])[1];
  if (!src) return null;
  const alt = (tagImg[1].match(/alt\s*=\s*["']([\s\S]*?)["']/) || [])[1] || "";

  // A legenda é o <p> irmão logo depois do <Image> (itálico no site antigo).
  const depois = html.slice(html.indexOf(tagImg[0]) + tagImg[0].length);
  const pLegenda = depois.match(/<p((?:[^>"']|"[^"]*"|'[^']*')*)>([\s\S]*?)<\/p>/i);
  const caption = pLegenda ? textoPuro(pLegenda[2]) : "";

  const caminho = normalizarSrc(src);
  imagens.add(caminho);

  return {
    _type: "imageWithAlt",
    _key: novaChave(),
    _imagemOrigem: caminho, // resolvido para asset no import
    alt: textoPuro(alt),
    ...(caption ? { caption } : {}),
  };
}

function blocosDeMarkdown(trecho, novaChave) {
  const blocos = [];
  const linhas = trecho.split(/\r?\n/);
  let paragrafo = [];

  const fecharParagrafo = () => {
    if (!paragrafo.length) return;
    const b = blocoTexto("normal", paragrafo.join(" "), novaChave);
    if (b) blocos.push(b);
    paragrafo = [];
  };

  for (const linha of linhas) {
    const s = linha.trim();
    if (!s) {
      fecharParagrafo();
      continue;
    }
    const numerada = s.match(/^(\d+)\.\s+(.*)$/);
    const marcador = s.match(/^[-*]\s+(.*)$/);
    if (numerada || marcador) {
      fecharParagrafo();
      const b = blocoTexto("normal", (numerada ? numerada[2] : marcador[1]), novaChave, {
        listItem: numerada ? "number" : "bullet",
        level: 1,
      });
      if (b) blocos.push(b);
      continue;
    }
    paragrafo.push(s);
  }
  fecharParagrafo();
  return blocos;
}

// Erros de digitação do conteúdo original que corrigimos na importação.
// Confirmados com o usuário em 2026-08-27. Só entram aqui erros evidentes de
// digitação — nada de reescrever conteúdo.
// NÃO incluir o título "Observatórios de Aves promovem": parece truncado, mas o
// usuário confirmou que está correto.
const CORRECOES_DE_DIGITACAO = [
  // O parágrafo começa com "ara se tornar um filiado" — faltou o "P".
  { de: "ara se tornar um filiado", para: "Para se tornar um filiado" },
];

export function corrigirDigitacao(texto) {
  let saida = texto;
  for (const { de, para } of CORRECOES_DE_DIGITACAO) {
    saida = saida.split(de).join(para);
  }
  return saida;
}

export function converterCorpo(corpo, novaChave, imagens) {
  corpo = corrigirDigitacao(corpo);
  const blocos = [];
  let i = 0;
  let acumuladoMd = "";
  // Ligado logo após um <Image>: o próximo <p> irmão é a legenda dela.
  let aguardandoLegenda = false;

  const descarregarMd = () => {
    if (acumuladoMd.trim()) {
      aguardandoLegenda = false;
      blocos.push(...blocosDeMarkdown(acumuladoMd, novaChave));
    }
    acumuladoMd = "";
  };

  while (i < corpo.length) {
    const resto = corpo.slice(i);
    // Pula espaço/quebras antes de um bloco HTML (o corpo costuma começar assim).
    const espacos = resto.match(/^\s+(?=<(?:div|h2|p|Image)(?=[\s/>]))/i);
    if (espacos) {
      i += espacos[0].length;
      continue;
    }
    const inicio = resto.match(/^<(div|h2|p|Image)(?=[\s/>])/i);

    if (inicio) {
      descarregarMd();
      const tag = inicio[1];
      const fim = fimDoElemento(corpo, i, tag);
      const html = corpo.slice(i, fim);
      i = fim;

      const tagBaixa = tag.toLowerCase();

      if (tagBaixa === "div") {
        // Os <div> do MDX antigo são só embrulho (figura, "callout" amarelo) e
        // podem estar aninhados. Sempre percorre o conteúdo interno: assim um
        // callout que contém uma figura não é reduzido à figura.
        const interno = html.replace(/^<div[^>]*>/i, "").replace(/<\/div>\s*$/i, "");
        blocos.push(...converterCorpo(interno, novaChave, imagens));
        continue;
      }

      if (tagBaixa === "image") {
        const b = blocoImagem(html, novaChave, imagens);
        if (b) {
          blocos.push(b);
          // A legenda é o <p> irmão logo depois: capturada na próxima volta.
          aguardandoLegenda = true;
        }
        continue;
      }

      if (tagBaixa === "h2") {
        aguardandoLegenda = false;
        const interno = html.replace(/^<h2[^>]*>/i, "").replace(/<\/h2>\s*$/i, "");
        const b = blocoTexto("h2", interno, novaChave);
        if (b) blocos.push(b);
        continue;
      }

      // <p>: pode ser legenda de figura, citação em destaque ou poema com <br />.
      const attrs = html.match(/^<p((?:[^>"']|"[^"]*"|'[^']*')*)>/i)?.[1] || "";
      const interno = html.replace(/^<p[^>]*>/i, "").replace(/<\/p>\s*$/i, "");

      if (aguardandoLegenda) {
        aguardandoLegenda = false;
        const ultima = blocos[blocos.length - 1];
        const legenda = textoPuro(interno);
        if (ultima && ultima._type === "imageWithAlt" && legenda) {
          ultima.caption = legenda;
          continue;
        }
      }

      if (/<br\s*\/?>/i.test(interno)) {
        // Poema/estrofe: cada verso vira um bloco próprio, em itálico.
        const italico = /italic/.test(attrs);
        for (const verso of interno.split(/<br\s*\/?>/i)) {
          const b = blocoTexto("normal", italico ? `<em>${verso}</em>` : verso, novaChave);
          if (b) blocos.push(b);
        }
        continue;
      }

      // Citação em destaque (`text-2xl font-bold`) -> parágrafo em negrito.
      const destaque = /font-bold/.test(attrs) && /text-(xl|2xl|3xl)/.test(attrs);
      const b = blocoTexto("normal", destaque ? `<strong>${interno}</strong>` : interno, novaChave);
      if (b) blocos.push(b);
      continue;
    }

    // Texto markdown até o próximo bloco HTML no começo de uma linha.
    const proximo = resto.search(/\n\s*<(?:div|h2|p|Image)(?=[\s/>])/i);
    if (proximo === -1) {
      acumuladoMd += resto;
      i = corpo.length;
    } else {
      acumuladoMd += resto.slice(0, proximo);
      i += proximo;
    }
  }
  descarregarMd();
  return blocos;
}

// ---------------------------------------------------------------------------
// Entrada principal
// ---------------------------------------------------------------------------

export function converterTodos() {
  const arquivos = readdirSync(DIR_POSTS)
    .filter((f) => f.endsWith(".mdx"))
    .sort();

  return arquivos.map((arquivo) => {
    const texto = readFileSync(join(DIR_POSTS, arquivo), "utf8");
    const { dados, corpo } = lerFrontmatter(texto);
    const novaChave = criarContadorDeChaves();
    const imagens = new Set();
    const body = converterCorpo(corpo, novaChave, imagens);

    const capa = `/blog/${dados.hero}`;
    imagens.add(capa);

    return {
      arquivo: basename(arquivo),
      title: dados.title,
      autor: dados.author,
      slug: gerarSlug(dados.title),
      publishedAt: dataParaIso(dados.date),
      capa,
      body,
      imagens: [...imagens],
    };
  });
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(JSON.stringify(converterTodos(), null, 2));
}
