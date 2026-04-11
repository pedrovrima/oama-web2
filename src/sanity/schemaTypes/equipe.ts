import { defineField, defineType } from "sanity";

export const equipe = defineType({
  name: "equipe",
  title: "Equipe",
  type: "document",
  fields: [
    defineField({ name: "nome", title: "Nome", type: "string", validation: (r) => r.required() }),
    defineField({ name: "cargo", title: "Cargo", type: "string", validation: (r) => r.required() }),
    defineField({ name: "foto", title: "Foto", type: "image", options: { hotspot: true } }),
    defineField({ name: "email", title: "Email (opcional)", type: "string" }),
    defineField({ name: "ordem", title: "Ordem de exibição", type: "number" }),
  ],
  orderings: [{ title: "Ordem", name: "ordemAsc", by: [{ field: "ordem", direction: "asc" }] }],
  preview: { select: { title: "nome", subtitle: "cargo", media: "foto" } },
});
