#!/usr/bin/env node
/**
 * Seed da seção Transparência no Sanity (relatorioAnual, annualReport, relatorioProAves).
 * Fonte dos arquivos: site legado (/Users/anhinga/Projetos/oama-website/public/publicacoes).
 *
 * Auth (em ordem de preferência):
 *   1. env SANITY_WRITE_TOKEN
 *   2. token do CLI logado (~/Library/Application Support/sanity/config.json)
 *
 * Idempotente: usa _id determinístico e PULA documentos que já existem.
 * Use --force para recriar (re-upload de assets inclusive).
 */
import { readFileSync, existsSync } from "node:fs";
import { homedir } from "node:os";
import path from "node:path";

const PROJECT = "1tnejkhf";
const DATASET = "production";
const API = `https://${PROJECT}.api.sanity.io/v2024-01-01`;
const LEGACY = "/Users/anhinga/Projetos/oama-website/public/publicacoes";
const FORCE = process.argv.includes("--force");

function getToken() {
  if (process.env.SANITY_WRITE_TOKEN) return process.env.SANITY_WRITE_TOKEN;
  const cliCfg = path.join(homedir(), "Library/Application Support/sanity/config.json");
  if (existsSync(cliCfg)) {
    const cfg = JSON.parse(readFileSync(cliCfg, "utf8"));
    if (cfg.authToken) return cfg.authToken;
  }
  console.error("Sem credencial: defina SANITY_WRITE_TOKEN ou faça `sanity login`.");
  process.exit(1);
}
const TOKEN = getToken();
const HDR = { Authorization: `Bearer ${TOKEN}` };

async function api(url, opts = {}) {
  const res = await fetch(url, { ...opts, headers: { ...HDR, ...(opts.headers || {}) } });
  if (!res.ok) throw new Error(`${opts.method || "GET"} ${url} -> ${res.status}: ${await res.text()}`);
  return res.json();
}

async function docExists(id) {
  const q = encodeURIComponent(`*[_id == "${id}"][0]._id`);
  const r = await api(`${API}/data/query/${DATASET}?query=${q}`);
  return Boolean(r.result);
}

async function uploadAsset(kind, filePath) {
  // kind: "files" | "images"
  const buf = readFileSync(filePath);
  const filename = encodeURIComponent(path.basename(filePath));
  const r = await api(`${API}/assets/${kind}/${DATASET}?filename=${filename}`, {
    method: "POST",
    headers: { "Content-Type": kind === "images" ? "image/png" : "application/pdf" },
    body: buf,
  });
  return r.document._id;
}

async function createDoc(doc) {
  return api(`${API}/data/mutate/${DATASET}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ mutations: [{ createOrReplace: doc }] }),
  });
}

// _id determinístico | tipo | nome | ano | pdf | capa (relativos a LEGACY) | ordem
const ITEMS = [
  // ----- Relatórios Anuais (pt-BR) -----
  ...[
    [2021, "files/Relatório Anual 2021.pdf", "img/mockup relatório anual 2021.png"],
    [2022, "files/Relatório_Anual_2022.pdf", "img/mockup relatório anual 2022.png"],
    [2023, "files/OAMarelatorioAnual2023.pdf", "img/mockup relatório anual 2023.png"],
    [2024, "files/Relatório Anual 2024 - OAMa PTBR.pdf", "img/relatorio_2024.png"],
    [2025, "files/Relatório Anual 2025 - OAMa PTBR.pdf", "img/relatorio_2025.png"],
  ].map(([ano, pdf, capa]) => ({
    _id: `relatorioAnual-${ano}`,
    _type: "relatorioAnual",
    nome: `Relatório Anual ${ano}`,
    ano,
    pdf,
    capa,
  })),
  // ----- Annual Reports (en-US) -----
  ...[
    [2021, "files/AnnualGeneralReport2021-OAMa.pdf", "img/mockup_annual_report_2021.png"],
    [2022, "files/2022Report.pdf", "img/mockup_annual_report_2022.png"],
    [2023, "files/2023 Annual Report - OAMa EN.pdf", "img/mockup_annual_report_2023.png"],
    [2024, "files/2024 Annual Report - OAMa EN.pdf", "img/mockup_annual_report_2024.png"],
    [2025, "files/2025 Annual Report - OAMa EN.pdf", "img/mockup_annual_report_2025.png"],
  ].map(([ano, pdf, capa]) => ({
    _id: `annualReport-${ano}`,
    _type: "annualReport",
    nome: `Annual Report ${ano}`,
    ano,
    pdf,
    capa,
  })),
  // ----- Relatórios Pró-Aves (sem campo ano; usa ordem, mais recente primeiro) -----
  {
    _id: "relatorioProAves-2025",
    _type: "relatorioProAves",
    nome: "Relatório de Atividades 2025 — Programa Ações Pró-Aves",
    pdf: "files/relatorioProAves2025.pdf",
    capa: "assets/capa-proaves-2025.png", // gerada da 1ª página do PDF (sips)
    ordem: 1,
  },
  {
    _id: "relatorioProAves-2024",
    _type: "relatorioProAves",
    nome: "Relatório de Atividades 2024 — Programa Ações Pró-Aves",
    pdf: "files/Relatório Ações Pró-Aves 2024.pdf",
    capa: "assets/capa-proaves-2024.png", // gerada da 1ª página do PDF (sips)
    ordem: 2,
  },
  {
    _id: "relatorioProAves-2023",
    _type: "relatorioProAves",
    nome: "Relatório de Atividades 2023 — Programa Ações Pró-Aves",
    pdf: "files/relatorioProAves2023.pdf",
    capa: "img/mockup pró-aves 2023.png",
    ordem: 3,
  },
  // ----- Arquivos institucionais (PDFs já copiados para public/ do repo novo) -----
  ...[
    ["estatuto-social", "Estatuto Social", "Estatuto_OAMa_2024.pdf", "estatuto-social.jpg", 1],
    ["dre-2022", "DRE 2022", "DRE_2022_OAMa.pdf", "dre-2022.jpg", 2],
    ["dre-2023", "DRE 2023", "DRE_2023_OAMa.pdf", "dre-2023.jpg", 3],
    ["dre-2024", "DRE 2024", "DRE_2024_OAMa.pdf", "dre-2024.jpg", 4],
  ].map(([slug, nome, pdf, capa, ordem]) => ({
    _id: `arquivoInstitucional-${slug}`,
    _type: "arquivoInstitucional",
    nome,
    pdf: `local:public/publicacoes/files/${pdf}`,
    capa: `local:public/midias/sobre/${capa}`,
    ordem,
  })),
];

for (const item of ITEMS) {
  const { _id, _type, nome, ano, pdf, capa, ordem } = item;
  if (!FORCE && (await docExists(_id))) {
    console.log(`SKIP ${_id} (já existe)`);
    continue;
  }
  // prefixos: "local:" = relativo ao repo novo; "assets/" = junto deste script; resto = legado
  const REPO = "/Users/anhinga/Projetos/oama-web2";
  const resolve = (p) =>
    p.startsWith("local:") ? path.join(REPO, p.slice(6))
    : p.startsWith("assets/") ? path.join(import.meta.dirname, p)
    : path.join(LEGACY, p);
  const pdfPath = resolve(pdf);
  const capaPath = resolve(capa);
  if (!existsSync(pdfPath)) { console.error(`FALTA PDF: ${pdfPath}`); continue; }

  console.log(`UPLOAD ${_id} — pdf (${(readFileSync(pdfPath).length / 1e6).toFixed(1)}MB)…`);
  const fileId = await uploadAsset("files", pdfPath);

  let imagem;
  if (existsSync(capaPath)) {
    console.log(`UPLOAD ${_id} — capa…`);
    const imgId = await uploadAsset("images", capaPath);
    imagem = { _type: "image", asset: { _type: "reference", _ref: imgId } };
  } else {
    console.warn(`  sem capa (${capa}) — documento ficará sem imagem`);
  }

  const doc = {
    _id,
    _type,
    nome,
    ...(ano ? { ano } : {}),
    ...(ordem ? { ordem } : {}),
    ...(imagem ? { imagem } : {}),
    arquivo: { _type: "file", asset: { _type: "reference", _ref: fileId } },
  };
  await createDoc(doc);
  console.log(`OK   ${_id}`);
}
console.log("Seed da Transparência concluído.");
