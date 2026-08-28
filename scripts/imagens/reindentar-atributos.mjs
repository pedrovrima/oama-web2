/**
 * Realinha os atributos inseridos por atributos-img.mjs à indentação dos
 * atributos irmãos da mesma tag. Puramente cosmético e idempotente.
 *
 * Uso:  node scripts/imagens/reindentar-atributos.mjs
 */
import { readdirSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";

function varrer(dir, saida = []) {
  for (const item of readdirSync(dir, { withFileTypes: true })) {
    const caminho = join(dir, item.name);
    if (item.isDirectory()) varrer(caminho, saida);
    else if (/\.(astro|jsx|tsx)$/.test(item.name)) saida.push(caminho);
  }
  return saida;
}

const ALVO = /^\s*(decoding="async"|loading="lazy")\s*$/;
let ajustadas = 0;
const alterados = [];

for (const arquivo of varrer("src")) {
  const linhas = readFileSync(arquivo, "utf8").split("\n");
  let mudou = false;

  for (let i = 0; i < linhas.length; i++) {
    const m = linhas[i].match(ALVO);
    if (!m) continue;

    // Indentação de referência: a linha anterior que não seja outro atributo
    // inserido, ou seja, o atributo irmão imediatamente acima.
    let j = i - 1;
    while (j >= 0 && ALVO.test(linhas[j])) j--;
    if (j < 0) continue;
    const indent = (linhas[j].match(/^\s*/) || [""])[0];

    // Se o irmão é a própria abertura `<img`, os atributos ficam um nível dentro.
    const dentro = /<img\s*$/.test(linhas[j]) ? indent + "  " : indent;
    const nova = dentro + m[1];
    if (nova !== linhas[i]) {
      linhas[i] = nova;
      ajustadas++;
      mudou = true;
    }
  }

  if (mudou) {
    alterados.push(arquivo);
    writeFileSync(arquivo, linhas.join("\n"));
  }
}

console.log(`arquivos: ${alterados.length} — linhas realinhadas: ${ajustadas}`);
