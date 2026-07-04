# Análise específica — Home

## Artefatos consultados

- Figma desktop: `Desktop_HOMEPAGE`  
  Screenshot: `design-assets/figma-exports/selection/desktop-desktop-homepage-28_383.png`
- Figma mobile: `Celular_HOMEPAGE`  
  Screenshot: `design-assets/figma-exports/selection/mobile-celular-homepage-2212_678.png`
- Código atual: `src/pages/index.astro`
- Componentes usados na Home:
  - `src/components/sections/ProgramsCarousel.astro`
  - `src/components/sections/HomeCarousel.astro`
  - `src/components/sections/AgendaSection.astro`
  - `src/components/sections/MidiaSection.astro`
  - `src/components/sections/WaveTransition.astro`
  - `src/components/sections/waveSeparator.astro`
  - `src/components/sections/waveSeparator2.astro`

## Passos executados

1. Usei a seleção capturada do Figma em `selection-raw.json` e o resumo em `selection-analysis.md`.
2. Isolei os frames principais da Home:
   - `Desktop_HOMEPAGE` — id `28:383`, 1024 × 6946.
   - `Celular_HOMEPAGE` — id `2212:678`, 360 × 8112.
3. Conferi os screenshots exportados para a pasta `design-assets/figma-exports/selection/`.
4. Li `src/pages/index.astro` integralmente.
5. Li os componentes dinâmicos principais (`ProgramsCarousel`, `AgendaSection`, `MidiaSection`) para entender o que vem de Sanity/fallback e o que está hardcoded.
6. Comparei estrutura, texto e intenção visual entre Figma e Astro.

---

## Estrutura da Home no Figma

### Frame desktop

- **Nome:** `Desktop_HOMEPAGE`
- **ID:** `28:383`
- **Dimensões:** 1024 × 6946
- **Nós internos:** 114
- **Texto/chamadas principais identificadas:**
  - “Conservação com Ciência”
  - “Gerando dados e engajamento para a conservação das aves da Mata Atlântica”
  - “CAPACITAÇÃO PROFISSIONAL”
  - “Formando profissionais conscientes e que almejam coletar dados de altíssima qualidade, com ética e segurança.”
  - “NOSSAS AÇÕES EM NÚMEROS”
  - “Os resultados e impactos do OAMa”
  - “NOSSAS ÁREAS DE ATUAÇÃO”

### Frame mobile

- **Nome:** `Celular_HOMEPAGE`
- **ID:** `2212:678`
- **Dimensões:** 360 × 8112
- **Nós internos:** 121
- **Texto/chamadas principais identificadas:**
  - “CONSERVAÇÃO COM CIÊNCIA”
  - “Gerando dados e engajamento para a conservação das aves da MAtaAtlântica”
  - bloco institucional do Observatório de Aves da Mantiqueira
  - “Clique aqui para saber mais...”
  - bloco de programas/carrossel
  - “Os resultados e impactos do OAMa”
  - áreas de atuação
  - CTA de doação/newsletter

> Observação: o frame mobile contém alguns erros/inconsistências aparentes do próprio Figma, como “MAtaAtlântica” e “Serviçõs”. O código atual já corrige ou evita parte desses problemas.

---

## Estrutura da Home no Astro atual

Arquivo: `src/pages/index.astro`

A página já possui as seguintes seções:

1. **Hero full-bleed**
   - imagem `index-hero.jpg`
   - título “Conservação com ciência”
   - subtítulo sobre dados, engajamento e Mata Atlântica
   - navegação em modo overlay via `BaseLayout navVariant="overlay"`

2. **Bloco institucional OAMa**
   - fundo amarelo
   - logo redondo
   - texto institucional do Observatório
   - link mobile “Clique aqui para saber mais...”
   - bloco desktop de missão/ODS

3. **`ProgramsCarousel`**
   - vem de Sanity via `getProgramSlides()`
   - fallback hardcoded caso o Sanity não tenha slides
   - visual com imagem, overlay, título, subtítulo, setas e dots

4. **Nossas ações em números**
   - `+700`
   - `+8200`
   - `+480`
   - `+6`
   - `+160`
   - ícones em `/home/acoes/`

5. **CTA de doação**
   - “Toda ajuda faz a diferença”
   - texto sobre doações e filiações
   - botão “Doar agora” apontando para `/apoie`
   - imagens diferentes para mobile/desktop

6. **Separadores em onda**
   - `WaveSeparator`
   - `WaveSeparator2`
   - `WaveTransition`

7. **Nossas áreas de atuação**
   - Pesquisa
   - Comunicação Científica
   - Capacitações
   - links “Saiba mais” ainda com `href="#"`

8. **`HomeCarousel`**
   - seção adicional de carrossel/home

9. **Agenda**
   - `AgendaSection`
   - vem de Sanity via `getAgendaItems()`
   - fallback hardcoded

10. **Mídia**
    - `MidiaSection`
    - vem de Sanity via `getMidiaItems()`
    - fallback hardcoded

---

## Comparação Figma × Astro

| Área | Figma | Astro atual | Estado |
|---|---|---|---|
| Hero | Presente, com imagem e texto inferior | Presente | Implementado |
| Header/nav | Presente no topo | Via `BaseLayout`/Nav | Implementado |
| Bloco institucional | Presente | Presente | Implementado |
| Missão/ODS na Home | Aparece no fluxo mobile/desktop | Presente sobretudo no desktop | Parcial/ok |
| Carrossel/programas | Presente como destaque | `ProgramsCarousel` | Implementado, depende Sanity/fallback |
| Números de impacto | Presente | Presente | Implementado |
| Áreas de atuação | Presente | Presente | Implementado, mas links pendentes |
| CTA doação | Presente | Presente | Implementado |
| Agenda/cards | Presente em variantes do Figma | `AgendaSection` | Implementado via Sanity/fallback |
| Mídia/notícias | Presente em variantes/cards | `MidiaSection` | Implementado via Sanity/fallback |
| Newsletter | Presente em várias páginas mobile | Não aparece explicitamente no `index.astro`; pode estar em footer/layout ou ausente | Verificar |

---

## Gaps identificados na Home

### 1. Links “Saiba mais” ainda não apontam para rotas reais

Em `src/pages/index.astro`, os links das áreas de atuação usam `href="#"`.

Prováveis destinos futuros:

- Pesquisa → `/areas-de-atuacao` ou `/areas-de-atuacao/pesquisa-e-monitoramento-de-avifauna`
- Comunicação Científica → `/areas-de-atuacao/comunicacao-cientifica`
- Capacitações → `/areas-de-atuacao/capacitacao` ou `/servicos/capacitacao-tecnica`

A decisão deve esperar a arquitetura final das rotas.

### 2. Home desktop do Figma é 1024px

O frame chamado desktop tem largura 1024px. Portanto ele é mais próximo de um layout desktop médio/tablet-large do que de um desktop widescreen de 1440px.

Recomendação: validar também em:

- 360px mobile
- 768px tablet
- 1024px desktop do Figma
- 1440px desktop real

### 3. Densidade/ordem mobile precisa de QA visual

O código usa bastante responsividade por Tailwind (`md:block`, `hidden md:block`, grids responsivos etc.). A estrutura está correta, mas a aderência fina ao Figma precisa ser validada com screenshot real do navegador.

### 4. Conteúdo de carrossel/agenda/mídia depende do Sanity

A comparação textual direta não deve ser feita só contra `index.astro`, porque parte do conteúdo vem de:

- `getProgramSlides()`
- `getAgendaItems()`
- `getMidiaItems()`

Os fallbacks existem, mas a versão real do site depende do dataset Sanity.

### 5. Newsletter recorrente no Figma

O Figma mostra padrão recorrente de newsletter/CTA em várias páginas. Na Home atual, a newsletter não aparece explicitamente em `index.astro`; pode estar no layout/footer ou ainda precisar ser criada como componente compartilhado.

---

## Decisão recomendada para a Home

A Home deve ser tratada como **já implementada em alto nível**.

Antes de mexer nela, eu recomendo fazer uma etapa de QA visual:

1. Rodar o projeto localmente.
2. Abrir a Home em navegador.
3. Capturar screenshots reais em 360px, 1024px e 1440px.
4. Comparar com:
   - `desktop-desktop-homepage-28_383.png`
   - `mobile-celular-homepage-2212_678.png`
5. Só então fazer ajustes finos de espaçamento, altura, ondas, links e comportamento mobile.

---

## Próximo passo sugerido

Depois da Home, a próxima página mais importante para analisar é **Áreas de Atuação**, porque ela parece ser uma página-hub e define a arquitetura das rotas seguintes:

- Pesquisa e monitoramento de avifauna
- Comunicação científica
- Capacitação técnica
- Serviços/consultoria
- Programas e projetos relacionados

