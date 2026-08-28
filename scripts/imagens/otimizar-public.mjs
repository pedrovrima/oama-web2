/**
 * Converte todos os rasters de public/ para WebP.
 *
 * Astro só otimiza imagens importadas de src/assets. Tudo que vive em public/
 * é servido byte a byte como está — por isso a conversão é feita aqui, no
 * arquivo em disco, e as referências no código são reescritas para .webp
 * (ver scripts/imagens/reescrever-refs.mjs).
 *
 * Uso:  node scripts/imagens/otimizar-public.mjs [--dry]
 */
import sharp from "sharp";
import { readdirSync, statSync, unlinkSync, writeFileSync } from "fs";
import { join } from "path";

const DRY = process.argv.includes("--dry");

// Cap do lado maior. Imagens de fundo/hero ocupam a viewport inteira e
// merecem mais pixels; o resto nunca passa de meia tela.
const CAP_PADRAO = 2000;
const CAP_GRANDE = 2560;
const REGEX_GRANDE = /(hero|capa|cover|bg|banner|fundo)/i;

const QUALIDADE = 82;

function varrer(dir, saida = []) {
  for (const item of readdirSync(dir, { withFileTypes: true })) {
    const caminho = join(dir, item.name);
    if (item.isDirectory()) varrer(caminho, saida);
    else if (/\.(png|jpe?g)$/i.test(item.name)) saida.push(caminho);
  }
  return saida;
}

const arquivos = varrer("public");
const manifesto = [];
let bytesAntes = 0;
let bytesDepois = 0;
const falhas = [];

for (const origem of arquivos) {
  const destino = origem.replace(/\.(png|jpe?g)$/i, ".webp");
  const tamanhoAntes = statSync(origem).size;
  bytesAntes += tamanhoAntes;

  try {
    const meta = await sharp(origem, { limitInputPixels: false }).metadata();
    const cap = REGEX_GRANDE.test(origem) ? CAP_GRANDE : CAP_PADRAO;
    const maiorLado = Math.max(meta.width, meta.height);
    const largura =
      maiorLado > cap ? Math.round(meta.width * (cap / maiorLado)) : meta.width;

    const buffer = await sharp(origem, { limitInputPixels: false })
      .resize({ width: largura, withoutEnlargement: true })
      .webp({ quality: QUALIDADE, effort: 6, smartSubsample: true })
      .toBuffer();

    bytesDepois += buffer.length;
    manifesto.push({
      de: "/" + origem.replace(/^public\//, ""),
      para: "/" + destino.replace(/^public\//, ""),
      antes: tamanhoAntes,
      depois: buffer.length,
      dimensoes: `${meta.width}x${meta.height}`,
      novaLargura: largura,
      altura: Math.round((meta.height * largura) / meta.width),
    });

    if (!DRY) {
      writeFileSync(destino, buffer);
      unlinkSync(origem);
    }
  } catch (erro) {
    bytesDepois += tamanhoAntes;
    falhas.push(`${origem}: ${erro.message}`);
  }
}

if (!DRY) {
  writeFileSync(
    "scripts/imagens/manifesto.json",
    JSON.stringify(manifesto, null, 2),
  );
}

const mb = (n) => (n / 1048576).toFixed(1) + "MB";
console.log(
  `${DRY ? "[DRY] " : ""}convertidos: ${manifesto.length}/${arquivos.length}`,
);
console.log(`antes:  ${mb(bytesAntes)}`);
console.log(
  `depois: ${mb(bytesDepois)}  (-${(100 - (100 * bytesDepois) / bytesAntes).toFixed(0)}%)`,
);
if (falhas.length) {
  console.log(`\nFALHAS (${falhas.length}) — originais mantidos:`);
  for (const f of falhas) console.log("  " + f);
}
