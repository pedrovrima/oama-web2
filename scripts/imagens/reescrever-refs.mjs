/**
 * Reescreve para .webp as referências a imagens de public/ depois que
 * otimizar-public.mjs converteu os arquivos em disco.
 *
 * Duas passadas:
 *  1. troca literal caminho-a-caminho, usando o manifesto (pega a maioria e
 *     também as variantes percent-encoded de nomes com espaço/acento);
 *  2. troca só a extensão em caminhos que começam por uma pasta conhecida de
 *     public/ — é o que resolve as referências montadas por template literal,
 *     onde o caminho completo não existe como string no código.
 *
 * Nunca toca em imports relativos de src/assets: aquelas passam pelo pipeline
 * do Astro e devem continuar no formato original.
 *
 * Uso:  node scripts/imagens/reescrever-refs.mjs [--dry]
 */
import { readdirSync, readFileSync, writeFileSync, existsSync } from "fs";
import { join } from "path";

const DRY = process.argv.includes("--dry");

const manifesto = JSON.parse(
  readFileSync("scripts/imagens/manifesto.json", "utf8"),
);

// Pastas de primeiro nível dentro de public/ que contêm imagens convertidas.
const PASTAS = [
  ...new Set(manifesto.map((m) => m.de.split("/")[1])),
].sort();

const RAIZES = ["src", "scripts/sanity", "scripts/blog"];

function varrer(dir, saida = []) {
  if (!existsSync(dir)) return saida;
  for (const item of readdirSync(dir, { withFileTypes: true })) {
    const caminho = join(dir, item.name);
    if (item.isDirectory()) varrer(caminho, saida);
    else if (/\.(astro|tsx?|jsx?|mjs|md|json)$/i.test(item.name))
      saida.push(caminho);
  }
  return saida;
}

// Passada 2: /<pasta>/<qualquer coisa sem aspas>.png|jpg|jpeg -> .webp
const regexPasta = new RegExp(
  `(/(?:${PASTAS.join("|")})/[^"'\`\\s)]*?)\\.(png|jpe?g)\\b`,
  "gi",
);

const arquivos = RAIZES.flatMap((r) => varrer(r));
const alterados = [];
let trocas = 0;

for (const arquivo of arquivos) {
  const original = readFileSync(arquivo, "utf8");
  let texto = original;

  // Passada 1 — caminho completo, forma crua e forma percent-encoded.
  for (const { de, para } of manifesto) {
    for (const [a, b] of [
      [de, para],
      [encodeURI(de), encodeURI(para)],
    ]) {
      if (a !== b && texto.includes(a)) texto = texto.split(a).join(b);
    }
  }

  // Passada 2 — só a extensão, em caminhos de public/.
  texto = texto.replace(regexPasta, "$1.webp");

  if (texto !== original) {
    const antes = (original.match(/\.(png|jpe?g)\b/gi) || []).length;
    const depois = (texto.match(/\.(png|jpe?g)\b/gi) || []).length;
    trocas += antes - depois;
    alterados.push(`${arquivo}  (${antes - depois} refs)`);
    if (!DRY) writeFileSync(arquivo, texto);
  }
}

console.log(`${DRY ? "[DRY] " : ""}pastas cobertas: ${PASTAS.join(", ")}`);
console.log(`arquivos alterados: ${alterados.length} — refs trocadas: ${trocas}`);
for (const a of alterados) console.log("  " + a);
