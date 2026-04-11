import { defineField, defineType } from "sanity";

export const arquivoInstitucional = defineType({
  name: "arquivoInstitucional",
  title: "Arquivo Institucional",
  type: "document",
  fields: [
    defineField({ name: "nome", title: "Nome", type: "string", validation: (r) => r.required() }),
    defineField({ name: "imagem", title: "Imagem / miniatura", type: "image", options: { hotspot: true } }),
    defineField({ name: "arquivo", title: "Arquivo", type: "file" }),
    defineField({ name: "ordem", title: "Ordem de exibição", type: "number" }),
  ],
  orderings: [{ title: "Ordem", name: "ordemAsc", by: [{ field: "ordem", direction: "asc" }] }],
  preview: { select: { title: "nome", media: "imagem" } },
});
