import { urlFor } from "./sanity";

/**
 * Renderizador mínimo de Portable Text para os posts do blog (_type == "blog").
 * Escrito à mão de propósito: os posts usam apenas um subconjunto pequeno do
 * Portable Text (blocos normal/h2, marcas em/strong/link, listas numeradas e
 * o tipo customizado `imageWithAlt`), então não vale a pena adicionar uma
 * dependência nova ao projeto.
 */

type Span = {
  _type: "span";
  _key?: string;
  text?: string;
  marks?: string[];
};

type MarkDef = {
  _key: string;
  _type: string;
  href?: string;
};

type Block = {
  _type: string;
  _key?: string;
  style?: string;
  listItem?: string;
  level?: number;
  children?: Span[];
  markDefs?: MarkDef[];
  // imageWithAlt
  image?: unknown;
  alt?: string;
  caption?: string;
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Só permite esquemas seguros em links vindos do CMS. */
function safeHref(href: string | undefined): string | null {
  if (!href) return null;
  const trimmed = href.trim();
  if (/^(https?:|mailto:|tel:|\/|#)/i.test(trimmed)) return trimmed;
  return null;
}

function renderSpans(block: Block): string {
  const markDefs = block.markDefs ?? [];

  return (block.children ?? [])
    .map((span) => {
      let html = escapeHtml(span.text ?? "");
      if (!html) return "";

      for (const mark of span.marks ?? []) {
        if (mark === "strong") {
          html = `<strong class="font-semibold">${html}</strong>`;
          continue;
        }
        if (mark === "em") {
          html = `<em>${html}</em>`;
          continue;
        }
        if (mark === "underline") {
          html = `<span class="underline">${html}</span>`;
          continue;
        }
        if (mark === "code") {
          html = `<code class="rounded bg-black/5 px-1 py-0.5 text-[0.9em]">${html}</code>`;
          continue;
        }

        // Marca por referência (markDefs): hoje só existe "link" nos posts.
        const def = markDefs.find((d) => d._key === mark);
        if (def?._type === "link") {
          const href = safeHref(def.href);
          if (href) {
            const externo = /^https?:/i.test(href);
            const attrs = externo
              ? ' target="_blank" rel="noopener noreferrer"'
              : "";
            html = `<a href="${escapeHtml(href)}"${attrs} class="font-semibold text-[#1e1702] underline decoration-[#e9b130] decoration-2 underline-offset-4 hover:text-[#8a6a12]">${html}</a>`;
          }
        }
      }

      return html;
    })
    .join("");
}

function renderImage(block: Block): string {
  if (!block.image) return "";

  let src: string;
  try {
    src = urlFor(block.image as never)
      .width(1200)
      .fit("max")
      .auto("format")
      .url();
  } catch {
    return "";
  }

  const alt = escapeHtml(block.alt ?? "");
  const caption = block.caption ? escapeHtml(block.caption) : "";

  return [
    '<figure class="my-10">',
    `<img src="${escapeHtml(src)}" alt="${alt}" loading="lazy" class="w-full rounded-[18px] object-cover" />`,
    caption
      ? `<figcaption class="mt-3 text-center text-[14px] leading-[20px] text-[#1e1702]/70">${caption}</figcaption>`
      : "",
    "</figure>",
  ].join("");
}

function renderBlock(block: Block): string {
  if (block._type === "imageWithAlt" || block._type === "image") {
    return renderImage(block);
  }

  if (block._type !== "block") return "";

  const conteudo = renderSpans(block);
  // Blocos vazios existem no conteúdo real e servem só de respiro.
  if (!conteudo.trim()) return "";

  switch (block.style) {
    case "h1":
    case "h2":
      return `<h2 class="mt-12 mb-4 font-oswald text-[26px] font-bold uppercase leading-[32px] text-[#1e1702] md:text-[32px] md:leading-[38px]">${conteudo}</h2>`;
    case "h3":
      return `<h3 class="mt-10 mb-3 font-oswald text-[22px] font-bold uppercase leading-[28px] text-[#1e1702]">${conteudo}</h3>`;
    case "h4":
      return `<h4 class="mt-8 mb-3 font-montserrat text-[18px] font-bold text-[#1e1702]">${conteudo}</h4>`;
    case "blockquote":
      return `<blockquote class="my-8 border-l-4 border-[#e9b130] pl-5 text-[19px] italic leading-[30px] text-[#1e1702]/85">${conteudo}</blockquote>`;
    default:
      return `<p class="my-5 text-[17px] leading-[29px] text-[#1e1702] md:text-[18px] md:leading-[31px]">${conteudo}</p>`;
  }
}

/** Converte o array de Portable Text em HTML pronto para `set:html`. */
export function portableTextToHtml(blocks: Block[] | undefined | null): string {
  if (!Array.isArray(blocks)) return "";

  const partes: string[] = [];
  let listaAberta: "ol" | "ul" | null = null;

  const fecharLista = () => {
    if (listaAberta) {
      partes.push(`</${listaAberta}>`);
      listaAberta = null;
    }
  };

  for (const block of blocks) {
    if (block?._type === "block" && block.listItem) {
      const tag = block.listItem === "number" ? "ol" : "ul";
      if (listaAberta !== tag) {
        fecharLista();
        const classe =
          tag === "ol"
            ? "my-5 list-decimal space-y-2 pl-6 text-[17px] leading-[29px] text-[#1e1702] md:text-[18px] md:leading-[31px]"
            : "my-5 list-disc space-y-2 pl-6 text-[17px] leading-[29px] text-[#1e1702] md:text-[18px] md:leading-[31px]";
        partes.push(`<${tag} class="${classe}">`);
        listaAberta = tag;
      }
      partes.push(`<li>${renderSpans(block)}</li>`);
      continue;
    }

    fecharLista();
    partes.push(renderBlock(block));
  }

  fecharLista();
  return partes.join("");
}

/** Texto puro dos primeiros parágrafos — usado como resumo na listagem. */
export function portableTextToPlainText(
  blocks: Block[] | undefined | null,
  maxChars = 180
): string {
  if (!Array.isArray(blocks)) return "";

  const texto = blocks
    .filter((b) => b?._type === "block" && !b.listItem)
    .map((b) => (b.children ?? []).map((c) => c.text ?? "").join(""))
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();

  if (texto.length <= maxChars) return texto;
  const corte = texto.slice(0, maxChars);
  const ultimoEspaco = corte.lastIndexOf(" ");
  return `${(ultimoEspaco > 60 ? corte.slice(0, ultimoEspaco) : corte).trim()}…`;
}
