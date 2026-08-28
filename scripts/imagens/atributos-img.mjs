/**
 * Garante `loading` e `decoding` em toda tag <img> escrita à mão.
 *
 * `decoding="async"` tira a decodificação da imagem do caminho crítico de
 * render; `loading="lazy"` evita baixar o que está fora da viewport. Tags que
 * já declaram `loading` são respeitadas (algumas são LCP e precisam de eager).
 *
 * Não toca em <Image>: o componente do Astro já emite os dois.
 *
 * Uso:  node scripts/imagens/atributos-img.mjs [--dry]
 */
import { readdirSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";

const DRY = process.argv.includes("--dry");

function varrer(dir, saida = []) {
  for (const item of readdirSync(dir, { withFileTypes: true })) {
    const caminho = join(dir, item.name);
    if (item.isDirectory()) varrer(caminho, saida);
    else if (/\.(astro|jsx|tsx)$/.test(item.name)) saida.push(caminho);
  }
  return saida;
}

let addLoading = 0;
let addDecoding = 0;
const alterados = [];

for (const arquivo of varrer("src")) {
  const original = readFileSync(arquivo, "utf8");

  // Casa uma tag <img ...> inteira, inclusive multilinha.
  const texto = original.replace(/<img\b[^>]*?\/?>/g, (tag) => {
    let nova = tag;
    const indent = "\n" + " ".repeat(4);

    if (!/\bdecoding=/.test(nova)) {
      nova = nova.replace(/(\s*\/?>)$/, `${indent}decoding="async"$1`);
      addDecoding++;
    }
    if (!/\bloading=/.test(nova)) {
      nova = nova.replace(/(\s*\/?>)$/, `${indent}loading="lazy"$1`);
      addLoading++;
    }
    return nova;
  });

  if (texto !== original) {
    alterados.push(arquivo);
    if (!DRY) writeFileSync(arquivo, texto);
  }
}

console.log(
  `${DRY ? "[DRY] " : ""}arquivos: ${alterados.length} — loading: +${addLoading}, decoding: +${addDecoding}`,
);
