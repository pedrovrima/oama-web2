# Página: ProAves (resultados da campanha)

Status: **migrada do site antigo em 2026-06-11, Legacy-first, com todas as animações**.

Diretiva do usuário: "fazer a mesma coisa [que /apoie] com a página pro-aves do app
antigo... ela é uma página principal de resultado do Pró-Aves, diferente da sub-página
proaves dentro de projetos. Traga todo o conteúdo, incluindo animações."

## Separação conceitual (importante)

- **`/proaves`** (esta página) — página-resultado/campanha do programa, migrada
  do legado `oama-website/pages/proaves/index.jsx`. Interativa, com modais.
- **`/programas-e-projetos/pro-aves`** — página descritiva do programa (Figma-first).
- **`/programas-e-projetos/acoes-pro-aves`** — ações do programa.
- Esta separação já estava prevista em STATUS.md ("camada de resultado como
  rota separada é aceitável e preferível").

## Arquitetura

A página é uma **ilha React** (`client:load`) porque o legado depende de
React para tudo: modais Radix, framer-motion, carrosséis embla e contadores.

- `src/pages/proaves.astro` — rota (BaseLayout + `<ProAvesApp client:load />`)
- `src/components/proaves/ProAvesApp.jsx` — página inteira, porte ~verbatim do legado
- `src/components/proaves/content/*.jsx` — os 7 conteúdos de modal, verbatim
  (intro, trafico, colisao, pets, comedouro, sonora, luminosa)
- `src/components/proaves/ui/` — dialog, accordion, button, acarousel (shadcn do
  legado, verbatim) + `utils.js` (cn)
- `src/components/proaves/legacy-image.jsx` — shim de `next/legacy/image`
  (layouts fill/responsive/fixed/intrinsic)
- `src/components/proaves/fig.jsx` — Fig sem `require()` (URL direta + encodeURI)
- `src/components/proaves/components.jsx` — H3/P/H4/Carroussel
  (react-responsive-carousel, igual ao legado)
- `src/components/proaves/increasing-number.jsx` — contador animado (framer-motion)

Dependências novas: framer-motion, @radix-ui/react-dialog, @radix-ui/react-accordion,
@radix-ui/react-slot, class-variance-authority, clsx, tailwind-merge, lucide-react,
react-icons, embla-carousel-react, react-responsive-carousel, tw-animate-css.

CSS global (src/styles/global.css): `@import "tw-animate-css"` (animate-in/out dos
dialogs), utilitário `.font-montserratsemi` e keyframes `accordion-down/up` no `@theme`.

## Assets copiados do legado

- `public/proaves/` — diretório inteiro (figuras fig*.jpg dos 7 modais, incl.
  `intro (copy)/` com espaço no nome — os src usam `encodeURI`)
- `public/proaves2/` — completado (faltavam os 6 tsurus `t-*.png`, `ap1/ap3.png` etc.)
- `public/publicacoes/files/` — 8 PDFs: colisao, sonora, luminosa, predacao,
  comedouro, engaiolamento, "BF Coalition Brochure Traduzido" e
  "Relatório Ações Pró-Aves 2024"

## Animações preservadas

- framer-motion `whileInView` (fade + slide-up) nos parágrafos do card e no bento grid
- Contadores `IncreasingNumber` (+41000, +4000, +400, 49) animando ao entrar na viewport
- Hover scale 1.06 nos cards bento e nos blocos de estatísticas
- Dialogs Radix com animate-in/out (fade+zoom+slide) — via tw-animate-css
- Accordions Radix com animação de altura
- Carrossel de créditos (embla) e carrosséis internos dos modais
  (react-responsive-carousel com autoplay/loop)
- Fundo do hero `position: fixed` (efeito parallax do legado)

## Diferenças intencionais vs legado

1. Nav/Footer/Head → chrome do site novo via BaseLayout (`navVariant="overlay"`;
   nav legado era `fixed top-0`).
2. Código morto do legado omitido: calendários 2022–2024 (todo o bloco estava
   comentado no JSX), `RenderOnClient`, imports não usados (AutoScroll,
   IoArrowUpCircle no page-level, next/dynamic).
3. Card "Resultados do programa em 2024": `router.push` → `<a target="_blank">`
   para o PDF (mesmo destino).
4. `require()` de imagens → URLs diretas de `/proaves/...`.
5. Card "Perda de habitat" continua fora (estava comentado no legado).
6. O item "Pró-Aves" da lista de ações em `/apoie` voltou a apontar para
   `/proaves` (destino original do legado), em vez do mapeamento provisório
   para `/programas-e-projetos/acoes-pro-aves`.

## Verificação (2026-06-11)

- Build: 22 páginas, `/proaves/index.html` gerado; bundle da ilha ~286KB gzip ~91KB.
- Browser (dev server): hero, tsurus pendurados, bento grid, contadores (valores
  finais corretos), modais Tráfico e Intro abertos com imagens ok (0 quebradas,
  7 links de PDF no grid do intro), accordion "Referências" abre, carrossel de
  créditos navega, Escape fecha modal. Mobile (390px) conferido.
- PDF de resultados responde 200.

## Pendências

- Bundle da ilha é pesado (~286KB) — aceitável; otimizar só se virar requisito.
- Imagens de `public/proaves` e `proaves2` são grandes (herdadas do legado, que
  usava o otimizador do Next; aqui servem diretas). Otimização futura opcional.
- Sanity não usado.
