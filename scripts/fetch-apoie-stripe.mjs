// Gera o snapshot estático dos planos de doação recorrente da página /apoie.
//
// O site antigo (Next.js) buscava os produtos do Stripe em getServerSideProps e
// criava um payment link novo a cada clique (/api/getLink). Como o site novo é
// estático, este script resolve tudo em tempo de geração:
//   1. lista produtos ativos e seus preços recorrentes;
//   2. reutiliza um payment link ativo existente para o preço, se houver;
//   3. cria um payment link apenas se o preço ainda não tiver nenhum;
//   4. grava src/data/apoie-stripe.json (commitado no repo).
//
// Uso:
//   STRIPE_KEY=sk_... node scripts/fetch-apoie-stripe.mjs
//   (ou defina STRIPE_KEY no .env — o script carrega dotenv)
//
// Rode novamente sempre que os planos de doação mudarem no Stripe.

import "dotenv/config";
import { writeFile } from "node:fs/promises";
import path from "node:path";

const KEY = process.env.STRIPE_KEY;
if (!KEY) {
  console.error("STRIPE_KEY não definido (defina no .env ou no ambiente).");
  process.exit(1);
}

const API = "https://api.stripe.com/v1";
const headers = {
  Authorization: `Bearer ${KEY}`,
  "Content-Type": "application/x-www-form-urlencoded",
};

async function stripeGet(pathname, params = {}) {
  const url = new URL(`${API}${pathname}`);
  for (const [k, v] of Object.entries(params)) url.searchParams.set(k, v);
  const res = await fetch(url, { headers });
  if (!res.ok) throw new Error(`${pathname}: ${res.status} ${await res.text()}`);
  return res.json();
}

async function stripeGetAll(pathname, params = {}) {
  const data = [];
  let starting_after;
  for (;;) {
    const page = await stripeGet(pathname, {
      limit: "100",
      ...params,
      ...(starting_after ? { starting_after } : {}),
    });
    data.push(...page.data);
    if (!page.has_more) return data;
    starting_after = page.data[page.data.length - 1].id;
  }
}

async function stripePost(pathname, body) {
  const res = await fetch(`${API}${pathname}`, {
    method: "POST",
    headers,
    body: new URLSearchParams(body),
  });
  if (!res.ok) throw new Error(`${pathname}: ${res.status} ${await res.text()}`);
  return res.json();
}

const [products, prices, paymentLinks] = await Promise.all([
  stripeGetAll("/products", { active: "true" }),
  stripeGetAll("/prices", { active: "true" }),
  stripeGetAll("/payment_links", { active: "true" }),
]);

console.log(
  `${products.length} produtos, ${prices.length} preços, ${paymentLinks.length} payment links ativos`
);

// Mapeia price -> payment link existente (1 line item, quantidade 1)
const linkByPrice = new Map();
for (const link of paymentLinks) {
  if (linkByPrice.size >= prices.length) break;
  const items = await stripeGet(`/payment_links/${link.id}/line_items`, {
    limit: "10",
  });
  const item = items.data[0];
  if (items.data.length === 1 && item?.price?.id && !linkByPrice.has(item.price.id)) {
    linkByPrice.set(item.price.id, link.url);
  }
}

const plans = [];
for (const product of products) {
  // Replica o site antigo: primeiro preço do produto; só entra se for recorrente
  const price = prices.find((p) => p.product === product.id);
  if (!price || !price.recurring) continue;

  let url = linkByPrice.get(price.id);
  if (!url) {
    console.log(`Criando payment link para ${product.name} (${price.id})…`);
    const link = await stripePost("/payment_links", {
      "line_items[0][price]": price.id,
      "line_items[0][quantity]": "1",
    });
    url = link.url;
  }

  plans.push({
    name: product.name,
    image: product.images[0] ?? null,
    currency: price.currency,
    unit_amount: price.unit_amount,
    url,
  });
}

plans.sort((a, b) => a.unit_amount - b.unit_amount);

const outFile = path.resolve("src/data/apoie-stripe.json");
await writeFile(
  outFile,
  JSON.stringify({ generated_at: new Date().toISOString(), plans }, null, 2) + "\n"
);
console.log(`${plans.length} planos recorrentes gravados em ${outFile}:`);
for (const p of plans)
  console.log(`  - ${p.name}: ${p.currency.toUpperCase()} ${p.unit_amount / 100}/mês — ${p.url}`);
