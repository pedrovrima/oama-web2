import { defineField, defineType } from "sanity";
import { LinkIcon } from "@sanity/icons";

/**
 * Link individual usado pelo linktree (`/links/[slug]`). O _type "link" e os
 * nomes dos campos vêm do site antigo em Next.js e já existem no dataset
 * `production` — não renomear.
 */
export const link = defineType({
  name: "link",
  title: "Link",
  type: "document",
  icon: LinkIcon,
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "url",
      validation: (Rule) =>
        Rule.uri({ scheme: ["http", "https", "mailto", "tel"] }),
    }),
    defineField({
      name: "image",
      title: "Imagem",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "url", media: "image" },
  },
});
