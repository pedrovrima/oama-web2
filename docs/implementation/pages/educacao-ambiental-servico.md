# Página: Educação Ambiental e Comunicação Científica (Serviço)

Status: **implementada**.

## Rota

- `src/pages/consultoria/educacao-ambiental.astro`
- Rota: `/consultoria/educacao-ambiental`
- Build: rota gerada em `dist/consultoria/educacao-ambiental/index.html`.

## Decisões de implementação

- Seguido **exatamente** o padrão visual de `src/pages/consultoria/monitoramento-de-aves.astro` (irmã):
  - Mesmos 6 blocos com a mesma cadência de cores (`#5ba4d9` → `#dfb553` → `#fbf5e6` → `#5ba4d9` → `#dfb553` → `#fbf5e6`).
  - Mesmas 5 `WaveDark` entre as seções, com os mesmos pares de cores de `path1`/`path2` da página-irmã.
  - Mesma tipografia (Oswald para títulos/eyebrow, Montserrat para corpo).
  - Mesmos ícones SVG inline para o checklist e para os cards de público potencial.
- Hero:
  - Eyebrow `Prestação de Serviços` em amarelo OAMa (mesma classe `text-oama-yellow`).
  - H1 `EDUCAÇÃO AMBIENTAL E COMUNICAÇÃO CIENTÍFICA`, com `Educação Ambiental`/`e Comunicação Científica` quebrando no mobile via `<br class="md:hidden" />` (mesma técnica da irmã).
  - Faixa amarela de 2px no rodapé do hero (`bg-oama-yellow`).
- Seções:
  1. **Serviços** — 6 bullets da spec do Figma, com parágrafo introdutório curto contextualizando a oferta.
  2. **Diferenciais do OAMa** — 5 bullets da spec do Figma.
  3. **Público potencial** — 4 cards em grid responsivo (`sm:grid-cols-2 lg:grid-cols-3`):
     - Escolas, museus e universidades (`building`).
     - Administração pública e organizações do terceiro setor (`shield`).
     - Empresas com programas socioambientais (`industry`).
     - Projetos de compensação ambiental (`tree`).
     - Ícones reaproveitados do mesmo conjunto visual da página-irmã.
  4. **Fale conosco** — CTA `Falar por e-mail` apontando para `mailto:contato@oama.eco.br?subject=Educação Ambiental e Comunicação Científica - Orçamento` + link inline de e-mail de fallback.
  5. **Newsletter visual** — mesmo padrão da página-irmã: `form` com `method="post"`, `onsubmit="event.preventDefault();"` e `aria-label` descritivo. **Sem `action="#"`** (atende regra do briefing).
  6. **Voltar** — link `← Voltar para Prestação de Serviços` apontando para `/consultoria` (rota real, sem `#`).
- `BaseLayout` com `title="Educação Ambiental e Comunicação Científica — OAMa"` para SEO.
- Nenhuma alteração em Sanity, `package.json`, `astro.config.mjs`, `Nav`, `Footer`, `BaseLayout`, `WaveDark` ou em outras páginas.

## Imagem provisória

- Hero usa imagem externa do Unsplash: `https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=1600&q=80` (oficina/atividade educativa, escolhida para casar com o tema "educação ambiental").
- **Pendência:** substituir por imagem definitiva do OAMa (upload em `public/` ou via Sanity) e atualizar `alt` correspondente, conforme `AGENT.md` (imagens gerenciáveis vão para Sanity).

## Pendências

- Trocar imagem provisória do hero por imagem definitiva do OAMa.
- Avaliar migração dos blocos de conteúdo (Serviços, Diferenciais, Público potencial) para Sanity, seguindo a regra de "conteúdo gerenciável" do `AGENT.md`.
- Conectar o card `Educação Ambiental e Comunicação Científica` do hub `/consultoria` (`href` do `frentes[educacao-ambiental]` em `src/pages/consultoria.astro`) ao novo link `/consultoria/educacao-ambiental` (hoje cai em âncora `#educacao-ambiental`).

## Critérios de aceite

- [x] Rota `/consultoria/educacao-ambiental` criada e gerada no build.
- [x] Padrão visual de `consultoria/monitoramento-de-aves.astro` seguido.
- [x] Hero com eyebrow `Prestação de Serviços`.
- [x] Seções: Serviços, Diferenciais, Público potencial.
- [x] CTA `Fale conosco` + newsletter visual, sem `href="#"`/`action="#"` no escopo da página (verificado: o `rg "href=\"#\"|action=\"#\""` na build retornou 1 linha em `dist/consultoria/educacao-ambiental/index.html`, mas todas as ocorrências estão no `Footer` global — pré-existentes e idênticas às da página-irmã `monitoramento-de-aves`, fora do escopo permitido pelo briefing).
- [x] Link `Voltar para Prestação de Serviços` apontando para `/consultoria`.
- [x] Build passa (`npm run build` — 16 páginas geradas, sem erros).

## Resultado do build

Comando: `PATH="/Users/anhinga/.local/bin:/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin" npm run build`

- 16 páginas geradas em ~9.67s.
- Rota `src/pages/consultoria/educacao-ambiental.astro` → `dist/consultoria/educacao-ambiental/index.html` gerada com sucesso (+1ms).
- Nenhum erro de tipo/compilação.
- Aviso de chunks grandes (>500 kB) é pré-existente (Sanity Studio/VideoPlayer) e não está relacionado a esta página.
