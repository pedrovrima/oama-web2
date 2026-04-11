import { defineField, defineType } from "sanity";

export const relatorioProAves = defineType({
  name: "relatorioProAves",
  title: "Relatório Pró-Aves",
  type: "document",
  fields: [
    defineField({ name: "nome", title: "Nome", type: "string", validation: (r) => r.required() }),
    defineField({ name: "imagem", title: "Imagem de capa", type: "image", options: { hotspot: true } }),
    defineField({ name: "arquivo", title: "Arquivo (PDF)", type: "file", options: { accept: ".pdf" } }),
    defineField({ name: "ordem", title: "Ordem de exibição", type: "number" }),
  ],
  orderings: [{ title: "Ordem", name: "ordemAsc", by: [{ field: "ordem", direction: "asc" }] }],
  preview: { select: { title: "nome", media: "imagem" } },
});
