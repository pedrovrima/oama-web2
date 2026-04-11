import { defineField, defineType } from "sanity";

export const colaborador = defineType({
  name: "colaborador",
  title: "Colaboradores",
  type: "document",
  fields: [
    defineField({ name: "nome", title: "Nome", type: "string", validation: (r) => r.required() }),
    defineField({ name: "cargo", title: "Cargo / Função", type: "string", validation: (r) => r.required() }),
    defineField({ name: "ordem", title: "Ordem de exibição", type: "number" }),
  ],
  orderings: [{ title: "Ordem", name: "ordemAsc", by: [{ field: "ordem", direction: "asc" }] }],
  preview: { select: { title: "nome", subtitle: "cargo" } },
});
