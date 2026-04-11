import { defineField, defineType } from "sanity";

export const historiaOAMa = defineType({
  name: "historiaOAMa",
  title: "História do OAMa",
  type: "document",
  fields: [
    defineField({
      name: "ano",
      title: "Ano",
      type: "number",
      validation: (Rule) => Rule.required().integer().min(2000).max(2100),
    }),
    defineField({
      name: "titulo",
      title: "Título",
      type: "string",
    }),
    defineField({
      name: "texto",
      title: "Texto",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "foto",
      title: "Foto",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  orderings: [
    {
      title: "Ano",
      name: "anoAsc",
      by: [{ field: "ano", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "titulo", subtitle: "ano", media: "foto" },
    prepare({ title, subtitle, media }) {
      return { title: title || "(sem título)", subtitle: String(subtitle), media };
    },
  },
});
