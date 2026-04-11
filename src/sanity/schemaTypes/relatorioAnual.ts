import { defineField, defineType } from "sanity";

export const relatorioAnual = defineType({
  name: "relatorioAnual",
  title: "Relatório Anual",
  type: "document",
  fields: [
    defineField({ name: "nome", title: "Nome", type: "string", validation: (r) => r.required() }),
    defineField({ name: "ano", title: "Ano", type: "number", validation: (r) => r.required().integer() }),
    defineField({ name: "imagem", title: "Imagem de capa", type: "image", options: { hotspot: true } }),
    defineField({ name: "arquivo", title: "Arquivo (PDF)", type: "file", options: { accept: ".pdf" } }),
  ],
  orderings: [{ title: "Ano (mais recente)", name: "anoDesc", by: [{ field: "ano", direction: "desc" }] }],
  preview: { select: { title: "nome", subtitle: "ano", media: "imagem" } },
});
