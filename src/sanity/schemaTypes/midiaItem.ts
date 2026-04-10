import { defineType, defineField } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";

export const midiaItem = defineType({
  name: "midiaItem",
  title: "OAMa na Mídia",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "label",
      title: "Veículo",
      type: "string",
      description: "Ex: G1, National Geographic, BBC Brasil",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Imagem",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "url",
    }),
    defineField({
      name: "order",
      title: "Ordem",
      type: "number",
      description: "Número para definir a ordem de exibição",
      validation: (rule) => rule.required().integer().positive(),
    }),
  ],
  orderings: [
    {
      title: "Ordem de exibição",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "label",
      media: "image",
    },
  },
});
