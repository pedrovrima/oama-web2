import { defineField, defineType } from "sanity";

/**
 * Objeto de imagem usado dentro do corpo (`body`) dos posts do blog.
 * Os campos abaixo espelham exatamente o que já existe nos documentos
 * publicados no dataset (image, alt, caption e, em posts antigos, width/height).
 */
export const imageWithAlt = defineType({
  name: "imageWithAlt",
  title: "Imagem com texto alternativo",
  type: "object",
  fields: [
    defineField({
      name: "image",
      title: "Imagem",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "alt",
      title: "Texto alternativo",
      type: "string",
      description: "Descrição da imagem para leitores de tela",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "caption",
      title: "Legenda",
      type: "string",
      description: "Legenda exibida abaixo da imagem (inclui créditos)",
    }),
    defineField({
      name: "width",
      title: "Largura (px)",
      type: "number",
      description: "Campo legado, vindo do site antigo. Opcional.",
    }),
    defineField({
      name: "height",
      title: "Altura (px)",
      type: "number",
      description: "Campo legado, vindo do site antigo. Opcional.",
    }),
  ],
  preview: {
    select: { title: "caption", subtitle: "alt", media: "image" },
    prepare({ title, subtitle, media }) {
      return { title: title || subtitle || "(imagem)", subtitle: title ? subtitle : undefined, media };
    },
  },
});
