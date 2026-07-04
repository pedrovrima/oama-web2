# Página: Home

Status: **implementada em alto nível; próxima ação é QA visual**.

Documento detalhado:

- `design-assets/figma-analysis/home-analysis.md`

## Frames Figma

- Desktop: `Desktop_HOMEPAGE` (`28:383`), 1024 × 6946.
- Mobile: `Celular_HOMEPAGE` (`2212:678`), 360 × 8112.

## Rota Astro

- `src/pages/index.astro`

## Componentes relacionados

- `src/components/sections/ProgramsCarousel.astro`
- `src/components/sections/HomeCarousel.astro`
- `src/components/sections/AgendaSection.astro`
- `src/components/sections/MidiaSection.astro`
- `src/components/sections/WaveTransition.astro`
- `src/components/sections/waveSeparator.astro`
- `src/components/sections/waveSeparator2.astro`

## Pendências

- Validar screenshots reais em 360, 1024 e 1440 px.
- Corrigir/definir links `Saiba mais` nas áreas de atuação após arquitetura das rotas.
- Confirmar se newsletter será componente global, footer ou seção por página.
- Confirmar conteúdo real vindo de Sanity para carrosséis/agenda/mídia.

## Critério de pronto

- Build passa.
- QA visual aprovado pelo usuário.
- Links das áreas deixam de ser placeholder quando as rotas forem decididas.
