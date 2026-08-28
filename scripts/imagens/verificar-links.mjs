/**
 * Varre o HTML gerado em dist/ e confere que todo caminho de imagem/PDF
 * apontado existe em disco. Rede de segurança para a migração para WebP:
 * o build do Astro passa mesmo com src="" apontando para arquivo inexistente.
 *
 * Uso:  node scripts/imagens/verificar-links.mjs
 */
import { readdirSync, readFileSync, existsSync } from "fs";
import { join } from "path";

function varrer(dir, filtro, saida = []) {
  for (const item of readdirSync(dir, { withFileTypes: true })) {
    const caminho = join(dir, item.name);
    if (item.isDirectory()) varrer(caminho, filtro, saida);
    else if (filtro.test(item.name)) saida.push(caminho);
  }
  return saida;
}

const paginas = varrer("dist", /\.html$/);
const quebrados = new Map();
let verificados = 0;

const EXT = "webp|png|jpe?g|svg|gif|avif|pdf|ico";
// src="...", href="..." e content="..." (og:image)
const regexSimples = new RegExp(
  `(?:src|href|content)="(/[^"]*?\\.(?:${EXT}))"`,
  "gi",
);
// srcset="a.webp 640w, b.webp 960w" — cada candidato precisa existir.
const regexSrcset = /srcset="([^"]+)"/gi;

function* caminhosDe(html) {
  for (const [, c] of html.matchAll(regexSimples)) yield c;
  for (const [, lista] of html.matchAll(regexSrcset))
    for (const item of lista.split(","))
      yield item.trim().split(/\s+/)[0];
}

for (const pagina of paginas) {
  const html = readFileSync(pagina, "utf8");
  for (const caminho of caminhosDe(html)) {
    if (!caminho.startsWith("/")) {
      // Candidato relativo resolve contra a rota atual e quebra em páginas
      // aninhadas — trata como erro, não como caminho a conferir em disco.
      if (!quebrados.has(caminho)) quebrados.set(caminho, new Set());
      quebrados.get(caminho).add(pagina + " (sem barra inicial)");
      continue;
    }
    verificados++;
    const emDisco = join("dist", decodeURIComponent(caminho));
    if (!existsSync(emDisco)) {
      if (!quebrados.has(caminho)) quebrados.set(caminho, new Set());
      quebrados.get(caminho).add(pagina);
    }
  }
}

console.log(`páginas: ${paginas.length} — referências checadas: ${verificados}`);
if (quebrados.size === 0) {
  console.log("OK: nenhuma referência quebrada.");
} else {
  console.log(`\nQUEBRADAS (${quebrados.size}):`);
  for (const [caminho, origens] of quebrados) {
    console.log(`  ${caminho}`);
    for (const o of [...origens].slice(0, 3)) console.log(`      em ${o}`);
  }
  process.exitCode = 1;
}
