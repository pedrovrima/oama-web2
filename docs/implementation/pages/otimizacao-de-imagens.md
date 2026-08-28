# Otimização de imagens — 2026-08-28

**Categoria:** transversal (não é uma rota). Não altera conteúdo nem layout de
nenhuma página; só o formato, o tamanho e a política de carregamento das
imagens.

**Fonte de verdade:** os próprios arquivos em `public/` e `src/`. Nada foi
buscado no Figma nem no site antigo — nenhum enquadramento, recorte ou escolha
de imagem mudou.

## O problema

Astro só otimiza imagem importada de `src/assets` e renderizada com `<Image>`.
Tudo que vive em `public/` é servido byte a byte como está. O site tinha 440
rasters em `public/` somando **207 MB**, contra 14 arquivos passando pelo
pipeline do Astro.

O desperdício vinha de duas fontes somadas:

1. **Superdimensionamento.** `midias/sobre/annual-report-2024.png` era um PNG de
   4535×3402 e 6,3 MB exibido como miniatura de card.
2. **Formato errado.** Fotografia salva em PNG. PNG é sem perdas e não tem
   nenhuma vantagem para foto — só o peso.

## O que foi feito

### 1. Conversão para WebP (`scripts/imagens/otimizar-public.mjs`)

Todos os 440 rasters de `public/` convertidos para WebP q82, com o lado maior
limitado a 2000px (2560px para hero/capa/cover/bg/banner, que ocupam a viewport
inteira). Os originais foram apagados e as referências reescritas.

**207 MB → 49 MB (-76%).** Maior arquivo: de 6,3 MB para 896 KB.

### 2. Reescrita das referências (`scripts/imagens/reescrever-refs.mjs`)

276 referências reescritas em 41 arquivos. Duas passadas: caminho completo
(inclusive a forma percent-encoded, para os nomes com espaço e acento) e depois
só a extensão, em caminhos que começam por pasta conhecida de `public/` — é o
que resolve as referências montadas por template literal, onde o caminho inteiro
não existe como string no código.

Cinco casos precisaram de tratamento manual, registrados aqui porque são
exatamente onde uma varredura automática erra:

- `downloads.astro` — o nome do arquivo vive na chave `img:` e é concatenado com
  `/publicacoes/img/`. A chave vizinha `arquivo:` aponta para **PDF** e não podia
  ser tocada.
- `jacucara.astro` — `arquivo:` alimenta `/jacucara/logos/` e `/jacucara/pags/`.
- `index.astro` — `src="home/acoes/*.png"` estava sem barra inicial.
- `ProAvesApp.jsx` e `intro.jsx` — template literals com espaço e parêntese
  dentro do caminho.

O comentário em `MidiaSection.astro` cita `maxresdefault.jpg` de propósito: é a
thumbnail que o YouTube serve, URL externa, e continua `.jpg`.

### 3. Atributos de carregamento

- `decoding="async"` em 118 tags (nenhuma tinha).
- `loading="lazy"` nas 33 que não declaravam nada.
- `fetchpriority="high"` nos 22 heroes de rota (as tags já marcadas `eager`).
  O QR code do PIX foi deliberadamente excluído: fica abaixo da dobra e
  disputaria prioridade com o hero, atrasando o LCP.

### 4. srcset responsivo nos heroes (`scripts/imagens/srcset-heroes.mjs`)

18 heroes ganharam variantes em 640/960/1280/1920px com `sizes="100vw"`. Sem
isso um celular de 390px baixava o mesmo arquivo de 2560px que o desktop — e
justo na imagem de LCP da rota. Todos os 18 são full-bleed
(`absolute inset-0 w-full`), então `100vw` está correto.

### 5. Cache no `vercel.json`

- `public/`: `max-age=604800, stale-while-revalidate=2592000`. Não pode ser
  `immutable` — os arquivos não têm hash no nome, então trocar a imagem mantém o
  caminho. O CDN da Vercel é purgado a cada deploy; o TTL vale para o navegador.
- `/_astro/`: `immutable`, porque ali o nome já carrega o hash do conteúdo.

## Verificação

- Build: 34 páginas, verde.
- `scripts/imagens/verificar-links.mjs`: 706 referências no `dist` (incluindo
  cada candidato de `srcset`), **0 quebradas**. Vale rodar sempre que mexer em
  imagem — o build do Astro passa mesmo com `src` apontando para arquivo
  inexistente.
- QA no navegador, 33 rotas em 1440px e 390px, em série, com `img.decode()`
  antes de medir: ~510 imagens, **0 quebradas**. Cobre as ilhas React
  (`/proaves` 53 imgs, `/apoie` 35 imgs), que montam `src` em runtime e por isso
  não aparecem na auditoria estática do HTML.

## Pendências

- **470 MB de PDFs** em `public/publicacoes/files/` seguem sem tratamento, por
  decisão do usuário nesta rodada. Não afetam Core Web Vitals (são links de
  download), mas dominam o peso do repo e do deploy. Comprimir com Ghostscript
  ou mover para storage externo são as duas saídas.
- `Celular_SOBRE.png` e `Mask group.png` (7,5 MB somados) estão versionados na
  **raiz** do repo, fora de `public/`. São exportações do Figma que não são
  servidas pelo site; o lugar delas seria `design-assets/`.
- As imagens não-hero de `public/` não têm `srcset`. Ficaram com `loading="lazy"`
  apenas. Estender o srcset a elas é o próximo ganho, mas exige decidir o `sizes`
  correto card a card.
