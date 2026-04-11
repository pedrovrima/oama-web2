import { defineField, defineType } from "sanity";

export const parceiro = defineType({
  name: "parceiro",
  title: "Parceiros",
  type: "document",
  fields: [
    defineField({ name: "nome", title: "Nome", type: "string", validation: (r) => r.required() }),
    defineField({ name: "site", title: "Site (URL)", type: "url" }),
    defineField({ name: "logo", title: "Logo", type: "image", options: { hotspot: true } }),
    defineField({ name: "ordem", title: "Ordem de exibição", type: "number" }),
  ],
  orderings: [{ title: "Ordem", name: "ordemAsc", by: [{ field: "ordem", direction: "asc" }] }],
  preview: { select: { title: "nome", subtitle: "site", media: "logo" } },
});
