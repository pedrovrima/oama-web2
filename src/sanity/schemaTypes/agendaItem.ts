import { defineType, defineField } from "sanity";
import { CalendarIcon } from "@sanity/icons";

export const agendaItem = defineType({
  name: "agendaItem",
  title: "Agenda",
  type: "document",
  icon: CalendarIcon,
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "label",
      title: "Mês",
      type: "string",
      description: "Ex: Junho, Setembro",
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
