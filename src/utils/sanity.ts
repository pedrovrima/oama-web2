import { sanityClient } from "sanity:client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { defineQuery } from "groq";

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export const PROGRAM_SLIDES_QUERY = defineQuery(
  `*[_type == "programSlide"] | order(order asc) {
    _id,
    title,
    subtitle,
    image,
    link
  }`
);

export async function getProgramSlides() {
  return sanityClient.fetch(PROGRAM_SLIDES_QUERY);
}

export const HOME_SLIDES_QUERY = defineQuery(
  `*[_type == "homeSlide"] | order(order asc) {
    _id,
    title,
    subtitle,
    image,
    link,
    bg
  }`
);

export async function getHomeSlides() {
  return sanityClient.fetch(HOME_SLIDES_QUERY);
}

export const AGENDA_ITEMS_QUERY = defineQuery(
  `*[_type == "agendaItem"] | order(order asc) {
    _id,
    title,
    label,
    image,
    link
  }`
);

export async function getAgendaItems() {
  return sanityClient.fetch(AGENDA_ITEMS_QUERY);
}

export const MIDIA_ITEMS_QUERY = defineQuery(
  `*[_type == "midiaItem"] | order(order asc) {
    _id,
    title,
    label,
    image,
    link
  }`
);

export async function getMidiaItems() {
  return sanityClient.fetch(MIDIA_ITEMS_QUERY);
}

/**
 * Blog — os posts vivem no mesmo projeto Sanity (1tnejkhf) usado pelo site
 * antigo em Next.js, sob o _type "blog". A migração do blog é só religar a
 * consulta; o conteúdo já está publicado.
 */
export const BLOG_POSTS_QUERY = defineQuery(
  `*[_type == "blog" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    _updatedAt,
    title,
    "slug": slug.current,
    publishedAt,
    mainImage,
    body,
    author->{ name, image }
  }`
);

export async function getBlogPosts() {
  return sanityClient.fetch(BLOG_POSTS_QUERY);
}

/**
 * Linktree (`/links/[slug]`) — vem do site antigo em Next.js. Existe hoje um
 * único documento (`acoes-pro-aves`), usado na bio do Instagram do programa.
 * Os tipos `linkTree` e `link` já existem no dataset `production`.
 */
export const LINK_TREES_QUERY = defineQuery(
  `*[_type == "linkTree" && defined(slug.current)] {
    _id,
    title,
    description,
    "slug": slug.current,
    headerImage,
    links[]->{
      _id,
      title,
      url,
      image
    }
  }`
);

export async function getLinkTrees() {
  return sanityClient.fetch(LINK_TREES_QUERY);
}

/**
 * Reescreve URLs do domínio antigo (oama.eco.br) para as rotas equivalentes
 * do site novo, para o linktree não depender do site antigo continuar no ar.
 *
 * Os links vivem no Sanity apontando para o domínio antigo e não devem ser
 * editados por aqui. Só são reescritos os caminhos com equivalente COMPROVADO
 * neste repositório; qualquer outra URL passa intacta.
 */
const EQUIVALENTES_LOCAIS: Array<{ de: RegExp; para: (caminho: string) => string }> = [
  // /downloads → src/pages/downloads.astro
  { de: /^\/downloads\/?$/, para: () => "/downloads" },
  // /proaves → src/pages/proaves.astro
  { de: /^\/proaves\/?$/, para: () => "/proaves" },
  // PDFs de publicações → public/publicacoes/files/*.pdf (mesmos arquivos)
  { de: /^\/publicacoes\/files\/.+\.pdf$/i, para: (caminho) => caminho },
];

export function reescreverUrlLegado(url: string | undefined | null): string | undefined {
  if (!url) return undefined;

  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    // Não é uma URL absoluta — devolve como veio.
    return url;
  }

  const host = parsed.hostname.replace(/^www\./, "");
  if (host !== "oama.eco.br") return url;

  for (const regra of EQUIVALENTES_LOCAIS) {
    if (regra.de.test(parsed.pathname)) {
      return regra.para(parsed.pathname);
    }
  }

  return url;
}
