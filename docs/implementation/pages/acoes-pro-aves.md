# Página: Programa Ações Pró-Aves

Status: **implementada (versão hardcoded)**.

## Frames Figma

Fonte: `design-assets/figma-analysis/selection-analysis.md` e screenshots exportados.

- Mobile: `Celular_Ações Pró-Aves` (`2462:618`), 360 × 3538.
- Desktop: `Desktop_Ações Pró-Aves` (`2512:624`), 1024 × 2614.

Screenshots de referência:

- `design-assets/figma-exports/selection/mobile-celular-ações-pró-aves-2462_618.png`
- `design-assets/figma-exports/selection/desktop-desktop-ações-pró-aves-2512_624.png`

Atenção: existe outro screenshot `desktop-desktop-ações-pró-aves-2517_1092.png`, mas o conteúdo dele é `FUNDRAISING FIELD TRIP`. **Não usar** esse frame para esta página.

## Rota

- `src/pages/programas-e-projetos/acoes-pro-aves.astro`
- Rota final: `/programas-e-projetos/acoes-pro-aves`

## Papel da página

Página filha do hub `/programas-e-projetos`, detalhando o programa de comunicação, educação ambiental e mobilização cidadã do OAMa.

## Decisão Hardcoded vs Sanity

Primeira versão **100% hardcoded** (textos, listas, CTAs e SEO no `.astro`), conforme combinado. Não criar schemas Sanity nesta tarefa.

## Estrutura implementada

1. **HERO** — foto full-bleed, `Programas e Projetos` (eyebrow amarelo) + `Programa Ações Pró-Aves`, tarja amarela inferior.
2. **Missão do programa** (`#dfb553`) — título + parágrafo com o trecho em **bold** `promover o reconhecimento individual de cada cidadão sobre os impactos decorrentes do nosso modo de vida` (igual ao Figma).
3. **Carrossel de atividades** (`#dfb553`) — galeria horizontal com **CSS scroll-snap** (sem JS, sem dependência nova) + 4 fotos de atividades. Setas visuais decorativas; rolagem é nativa.
4. **Como atuamos** (`#dfb553`) — segundo parágrafo, com **bold** `O programa Ações Pró-Aves impulsiona o potencial de cada pessoa para tornar o mundo melhor para as aves e para nós.`, e parágrafo `Desde 2022…` sem links provisórios; os destinos oficiais de página do programa/downloads ficam como pendência.
5. **Temas focais** (`#5ba4d9`) — lista com 6 itens, ícones circulares brancos com check azul, em grid 2 colunas no desktop.
6. **Formatos e ações** (`#dfb553`) — 6 cards translúcidos (mídias digitais, exposições, materiais informativos, oficinas e teatro, ciência cidadã, outras produções).
7. **Parceiros citados** (`#5ba4d9`) — 4 cards com sigla em pílula circular e descrição curta (PAN Aves da Mata Atlântica, CEMAVE/ICMBio, CRBio-04, outros parceiros).
8. **CTA / Apoie** (`#1a2e4a`) — `Nos ajude a construir pontes`, `Sua doação viabiliza nossas ações de comunicação e divulgação científica!`, botão `Doar agora` → `mailto:contato@oama.eco.br` + e-mail de contato.
9. **Newsletter visual** (`#5ba4d9`) — `Assine a newsletter` + `Seja o primeiro a saber das próximas atividades do OAMa` + formulário com `Nome`, `E-mail` e `Enviar`. Formulário usa `onsubmit="event.preventDefault();"` (sem `action="#"`); nota visível informa que é ilustrativo.
10. **Voltar** (`#fbf5e6`) — link para `/programas-e-projetos`.

Transições entre seções feitas com `WaveDark` reutilizado, seguindo o mesmo padrão de `monitoramento-de-avifauna.astro` e `treinamento-monitoramento-avifauna.astro`.

## Decisões da implementação

- **Reuso de `BaseLayout` e `WaveDark`** — sem novos componentes.
- **Tipografia e cores** — tokens já existentes (`font-oswald` para títulos, `font-montserrat` para corpo, `--color-oama-yellow`, hex `#dfb553` / `#5ba4d9` / `#1a2e4a` / `#fbf5e6`).
- **Carrossel sem dependência nova** — `flex` + `overflow-x-auto` + `snap-x snap-mandatory` + `scroll-smooth`. Setas são `pointer-events-none` puramente decorativas. Sem JS.
- **CTA de doação** — `mailto:contato@oama.eco.br?subject=…` (rota real, consistente com páginas irmãs).
- **Newsletter visual sem `action="#"`** — `<form method="post" onsubmit="event.preventDefault();">`, padrão idêntico ao já usado em `src/pages/realizacoes.astro`.
- **Links "página do programa" e "aba Downloads"** — removidos da primeira versão para não apontarem para rotas genéricas como se fossem destinos oficiais. O texto agora registra que os destinos definitivos serão conectados quando existirem.
- **Card do hub conectado** — o item `Ações Pró-Aves` em `/programas-e-projetos` agora aponta para `/programas-e-projetos/acoes-pro-aves`.
- **Voltar** — `href="/programas-e-projetos"`, rota real.
- **Sem `href="#"` ou `action="#"` novos** (auditado por `grep`).

## Imagens

Todas as imagens desta página são **placeholders Unsplash provisórios** (mesmo padrão das páginas irmãs), marcadas mentalmente como:

- Hero: sala de aula/atividade educativa.
- Carrossel: 4 cenas de atividades educativas, oficinas, ação cultural e roda de conversa.

Substituir por fotos reais do Programa Ações Pró-Aves (acervo da OAMa) em versão futura, idealmente servidas via Sanity.

## Pendências

- Trocar placeholders Unsplash por fotos reais das atividades do programa (acervo OAMa).
- Confirmar URL externa definitiva de "página do programa" e "aba Downloads" antes de criar links públicos para esses destinos.
- Decidir se o conteúdo da página (missão, temas focais, formatos, parceiros, fotos) entra no Sanity.
- Integrar o formulário de newsletter com provedor de e-mail + captcha.
- Se a rota/slug mudar, atualizar o card do hub `/programas-e-projetos` que hoje aponta para `/programas-e-projetos/acoes-pro-aves`.

## Resultado do build

`PATH="/Users/anhinga/.local/bin:/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin" npm run build`

- ✅ Build concluído sem erros.
- 7 páginas geradas (incluindo `/programas-e-projetos/acoes-pro-aves`).
- Arquivo gerado: `dist/programas-e-projetos/acoes-pro-aves/index.html`.
- Avisos existentes (chunks >500 kB de `pane2`, `VideoPlayer`, `SanityVision`) são pré-existentes do Sanity Studio e não relacionados a esta página.
