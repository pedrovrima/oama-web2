import { defineArrayMember, defineField, defineType } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";

/**
 * Post do blog. O _type "blog" e os nomes dos campos vêm do site antigo em
 * Next.js e já existem no dataset `production` — não renomear.
 */
export const blog = defineType({
  name: "blog",
  title: "Blog",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "author",
      title: "Autor",
      type: "reference",
      to: [{ type: "author" }],
    }),
    defineField({
      name: "publishedAt",
      title: "Publicado em",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mainImage",
      title: "Imagem principal",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "categories",
      title: "Categorias",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: [{ type: "category" }] })],
    }),
    defineField({
      name: "body",
      title: "Conteúdo",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          // Só os estilos/marcas realmente usados nos posts existentes.
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Título 2", value: "h2" },
          ],
          lists: [{ title: "Lista numerada", value: "number" }],
          marks: {
            decorators: [
              { title: "Negrito", value: "strong" },
              { title: "Itálico", value: "em" },
            ],
            annotations: [
              {
                name: "link",
                title: "Link",
                type: "object",
                fields: [
                  defineField({
                    name: "href",
                    title: "URL",
                    type: "url",
                    validation: (Rule) =>
                      Rule.uri({ scheme: ["http", "https", "mailto", "tel"] }),
                  }),
                ],
              },
            ],
          },
        }),
        defineArrayMember({ type: "imageWithAlt" }),
      ],
    }),
  ],
  orderings: [
    {
      title: "Mais recentes",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "author.name", media: "mainImage" },
  },
});
