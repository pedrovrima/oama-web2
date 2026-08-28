/**
 * Reencoda em WebP lossless os graficos chapados (logo, icone, QR code).
 *
 * A primeira passada de otimizar-public.mjs aplicou WebP com perda em tudo. Para
 * fotografia isso e certo, mas para arte chapada com aresta dura e o contrario:
 * gera ringing em volta das bordas e ainda costuma ficar MAIOR que o lossless,
 * porque compressao com perda vai mal com area de cor solida. O QR code do PIX
 * era o caso extremo — 119 KB com perda contra 15 KB lossless, e artefato num QR
 * pode literalmente impedir a leitura.
 *
 * Os originais vem do git (a conversao ja foi commitada): reencodar o webp com
 * perda so congelaria os artefatos, entao a fonte precisa ser o arquivo original.
 *
 * Uso:  node scripts/imagens/corrigir-graficos-chapados.mjs [--dry] [--ref=<commit>]
 */
import sharp from "sharp";
import { execFileSync } from "child_process";
import { readFileSync, writeFileSync, statSync, existsSync } from "fs";

const DRY = process.argv.includes("--dry");
const REF =
  (process.argv.find((a) => a.startsWith("--ref=")) || "--ref=HEAD~1").slice(6);

// Caminhos que sao arte chapada, nao fotografia.
const CHAPADO = /(\/logos?\/|\/icones?\/|\/brand\/|\/ods\/|qrcode|\/pix\/)/i;

const manifesto = JSON.parse(
  readFileSync("scripts/imagens/manifesto.json", "utf8"),
);

const alvos = manifesto.filter((m) => CHAPADO.test(m.para));
let ganho = 0;
let trocados = 0;
const linhas = [];

for (const item of alvos) {
  const destino = "public" + item.para;
  if (!existsSync(destino)) continue;
  const atual = statSync(destino).size;

  let original;
  try {
    original = execFileSync("git", ["show", `${REF}:public${item.de}`], {
      maxBuffer: 1 << 30,
    });
  } catch {
    linhas.push(`  ! original ausente em ${REF}: ${item.de}`);
    continue;
  }

  const lossless = await sharp(original, { limitInputPixels: false })
    .resize({ width: item.novaLargura, withoutEnlargement: true })
    .webp({ lossless: true, effort: 6 })
    .toBuffer();

  if (lossless.length < atual) {
    ganho += atual - lossless.length;
    trocados++;
    linhas.push(
      `  ${(atual / 1024).toFixed(0)}KB -> ${(lossless.length / 1024).toFixed(0)}KB  ${item.para}`,
    );
    if (!DRY) writeFileSync(destino, lossless);
  }
}

console.log(
  `${DRY ? "[DRY] " : ""}graficos chapados analisados: ${alvos.length} — reencodados em lossless: ${trocados} — economia: ${(ganho / 1024).toFixed(0)}KB`,
);
for (const l of linhas) console.log(l);
