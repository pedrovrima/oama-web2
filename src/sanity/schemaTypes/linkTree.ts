import { defineArrayMember, defineField, defineType } from "sanity";
import { ThLargeIcon } from "@sanity/icons";

/**
 * Página de links (estilo "linktree") publicada em `/links/[slug]`.
 * O _type "linkTree" e os nomes dos campos vêm do site antigo em Next.js e já
 * existem no dataset `production` — não renomear.
 */
export const linkTree = defineType({
  name: "linkTree",
  title: "Página de links",
  type: "document",
  icon: ThLargeIcon,
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Descrição",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "headerImage",
      title: "Imagem de cabeçalho",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "links",
      title: "Links",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: [{ type: "link" }] })],
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "slug.current", media: "headerImage" },
  },
});
