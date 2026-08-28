import type { APIRoute } from "astro";
import { getBlogPosts } from "../utils/sanity";

// Sitemap gerado em tempo de build, sem dependência extra.
// Rotas estáticas listadas à mão + as dinâmicas do blog vindas do Sanity.
// Fora do sitemap de propósito: /admin (Studio) e /newsletter (página de apoio,
// sem valor de busca).
const ROTAS_ESTATICAS = [
  "/",
  "/sobre",
  "/missao",
  "/areas-de-atuacao",
  "/realizacoes",
  "/downloads",
  "/blog",
  "/consultoria",
  "/consultoria/cursos",
  "/consultoria/monitoramento-de-aves",
  "/consultoria/educacao-ambiental",
  "/consultoria/capacitacao-tecnica",
  "/programas-e-projetos",
  "/programas-e-projetos/monitoramento-de-avifauna",
  "/programas-e-projetos/treinamento-monitoramento-avifauna",
  "/programas-e-projetos/acoes-pro-aves",
  "/programas-e-projetos/projetos-de-pesquisa",
  "/programas-e-projetos/campanha-jacucara",
  "/programas-e-projetos/fundraising-field-trip",
  "/proaves",
  "/jacucara",
  "/apoie",
  "/pix",
];

export const GET: APIRoute = async ({ site }) => {
  const origem = site?.origin ?? "https://oama.eco.br";

  let posts: Array<{ slug?: string; publishedAt?: string }> = [];
  try {
    posts = await getBlogPosts();
  } catch {
    // Sanity indisponível no build: o sitemap sai sem os posts em vez de quebrar.
    posts = [];
  }

  const entradas = [
    ...ROTAS_ESTATICAS.map((rota) => ({ url: new URL(rota, origem).href, data: undefined })),
    ...posts
      .filter((p) => p.slug)
      .map((p) => ({
        url: new URL(`/blog/${p.slug}`, origem).href,
        data: p.publishedAt,
      })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entradas
  .map(
    (e) =>
      `  <url>\n    <loc>${e.url}</loc>${
        e.data ? `\n    <lastmod>${new Date(e.data).toISOString().split("T")[0]}</lastmod>` : ""
      }\n  </url>`,
  )
  .join("\n")}
</urlset>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
