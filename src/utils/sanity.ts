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
