# Página: Projetos de Pesquisa

Status: **revisada na PED-40 (hardcoded, alinhamento com Figma desktop/mobile)**.

## Frames Figma

Fonte: `design-assets/figma-analysis/selection-analysis.md` e screenshots exportados.

- Mobile: `Celular_Projetos de Pesquisa` (`2473:389`), 360 × 5654.
- Desktop: `Desktop_Projetos de Pesquisa` (`2514:766`), 1024 × 3735.

Screenshots de referência:

- `design-assets/figma-exports/selection/mobile-celular-projetos-de-pesquisa-2473_389.png`
- `design-assets/figma-exports/selection/desktop-desktop-projetos-de-pesquisa-2514_766.png`

## Rota proposta

- `src/pages/programas-e-projetos/projetos-de-pesquisa.astro`
- Rota final: `/programas-e-projetos/projetos-de-pesquisa`

## Papel da página

Página filha do hub `/programas-e-projetos`, apresentando o banco de dados científico do OAMa, as colaborações acadêmicas e os projetos de pesquisa em desenvolvimento/concluídos.

## Conteúdo-chave identificado no Figma

Título principal:

- `PROJETOS DE PESQUISA`

Texto introdutório mobile:

> O crescente banco de dados oriundo, principalmente, do nosso monitoramento padronizado e de longo prazo da avifauna da Mantiqueira, impulsiona estudos sobre a história natural e a ecologia das espécies e populações locais. Tendo isso como parte dos nossos objetivos, compreendemos que a colaboração no meio científico funciona como uma relação mutualística, onde todas as partes têm algo a ganhar, inclusive a sociedade. O OAMA disponibiliza dados científicos para que estudantes e colaboradores parceiros – de diversas instituições de pesquisa, como USP, UFRGS, UFRJ e UFSC – possam analisá-los para responder perguntas que impulsionem o conhecimento ornitológico e de ecologia no Brasil. Esses esforços convertem-se em mais estudos publicados, que podem ser traduzidos em narrativas socioambientais marcantes – por meio da divulgação científica – e em ferramentas de gestão ambiental para tomadas de decisões informadas. A seguir, confira alguns de nossos projetos de pesquisa em desenvolvimento ou já concluídos.

Projetos listados no desktop:

- `Pesquisa de Percepção Socioambiental - PAN Aves da Mata Atlântica` — `2024 - atual`
- `Uso da corrugação de bico para auxiliar a classificação de idade de beija-flores` — `2022 - 2025` (o Figma parece trazer “Use”, mas tratar como provável typo/transcrição: “Uso”)
- `Colisões de aves com vidro: Enxergando soluções para uma ameaça invisível` — `2024 - atual`
- `Dinâmicas populacionais de beija-flores` — `2023 - 2025`
- `Aves seguidoras de frutificações de bambu` — `2024 - atual`

CTA mobile:

- `Doar agora`
- `Sua doação viabiliza nossas ações de comunicação e divulgação científica!`
- newsletter visual: `Seja o primeiro a saber das próximas atividades do OAMa`, `ASSINE A NEWSLETTER`, `Nome`, `Enviar`.

## Decisão Hardcoded vs Sanity

Primeira versão hardcoded. Não criar schemas Sanity ainda. Projetos e anos provavelmente devem virar conteúdo Sanity depois.

## Arquivos permitidos para o agente

Pode criar/modificar:

- `src/pages/programas-e-projetos/projetos-de-pesquisa.astro`
- `docs/implementation/pages/projetos-de-pesquisa.md`

Não alterar:

- schemas Sanity;
- `package.json`;
- `astro.config.mjs`;
- `Nav`, `Footer`, `BaseLayout`, `WaveDark`;
- outras páginas/hubs, salvo leitura.

## Critérios de aceite

- [ ] Página `/programas-e-projetos/projetos-de-pesquisa` criada.
- [ ] Hero com título `PROJETOS DE PESQUISA`.
- [ ] Texto introdutório sobre banco de dados, colaboração científica e instituições USP/UFRGS/UFRJ/UFSC.
- [ ] Grid/lista dos projetos refletindo o conjunto visível no Figma desktop (9 cards na revisão atual).
- [ ] CTA de doação/contato e newsletter visual sem `action="#"`.
- [ ] Layout responsivo e consistente com páginas irmãs.
- [ ] Sem dependências novas.
- [ ] Sem `href="#"` ou `action="#"` novo.
- [ ] Build passa.

## Decisões da implementação

- Reuso de `BaseLayout` e do padrão visual das páginas irmãs em
  `src/pages/programas-e-projetos/` (especialmente
  `acoes-pro-aves.astro`), com ajuste na PED-40 para aproximar o hero do
  Figma: imagem full-bleed mais curta, sem título sobreposto, com o título
  principal começando na primeira faixa amarela da página; CTA final em
  azul-marinho (`#1a2e4a`).
- A primeira seção amarela traz o H1 `PROJETOS DE PESQUISA` abaixo da
  imagem, como no frame desktop `2514:766`, seguido do texto introdutório
  sobre o banco de dados do monitoramento da Mantiqueira, a colaboração
  científica como relação mutualística e as instituições parceiras (USP,
  UFRGS, UFRJ, UFSC).
- Lista de projetos implementada como **grid de 2 colunas** com **9
  cards** (misturando fundos claros e escuros, imagens com cantos
  arredondados e tipografia mais próxima do card do Figma). A revisão da
  PED-40 passou a refletir o conjunto visível no desktop `2514:766`:
  - Pesquisa de Percepção Socioambiental — PAN Aves da Mata Atlântica (2024 — atual)
  - Migração altitudinal de aves na Mantiqueira (2023 — 2025)
  - Levantamento de aves da Serra da Mantiqueira (2021 — atual)
  - Dinâmicas populacionais de beija-flores (2023 — 2025)
  - Uso da corrugação de bico para auxiliar a classificação de idade de beija-flores (2022 — 2025)
  - Variação na taxa de captura com redes de neblina (2025 — atual)
  - Ciclo de muda e classificação de idade de *Chiroxiphia caudata* (2019 — atual)
  - Aves seguidoras de frutificações de bambu (2024 — atual)
  - Colisões de aves com vidro: enxergando soluções para uma ameaça invisível (2024 — atual)
- CTA "Nos ajude a construir pontes" segue o padrão da seção
  equivalente de `monitoramento-de-avifauna.astro` /
  `acoes-pro-aves.astro`: fundo `#1a2e4a`, botão amarelo
  `Doar agora` apontando para `mailto:contato@oama.eco.br` com
  `subject` específico, parágrafo de contato e e-mail clicável.
- Newsletter visual (azul) replica a estrutura de
  `acoes-pro-aves.astro`: `onsubmit="event.preventDefault();"` (sem
  `action="#"`), campos Nome + E-mail, botão `Enviar` e aviso
  explícito de formulário ilustrativo.
- Link "Voltar para Programas e Projetos" aponta para a rota real
  `/programas-e-projetos` (não usa `href="#"`).
- Tipografia segue os tokens existentes (`font-oswald` para títulos,
  `font-montserrat` para corpo); cores via tokens
  `--color-oama-*` / hex literais iguais aos das páginas irmãs
  (`#dfb553`, `#5ba4d9`, `#1a2e4a`, `#fbf5e6`).
- Conteúdo **100% hardcoded** nesta primeira versão, conforme
  combinado. Nenhum schema Sanity criado.

## Imagens

- Hero e imagens dos cards estão como **placeholders Unsplash**, mesmo
  padrão já em uso em `monitoramento-de-avifauna.astro`,
  `treinamento-monitoramento-avifauna.astro` e
  `acoes-pro-aves.astro`.
- **Provisório:** as fotos de placeholder devem ser substituídas por
  imagens reais de campo/pesquisa do OAMa assim que o acervo estiver
  disponível em `public/` ou via Sanity. Documentei aqui para
  rastreabilidade.

## Pendências

- [ ] Trocar imagens provisórias (Unsplash) por fotos reais de
      campo/pesquisa do acervo do OAMa.
- [ ] Confirmar com o OAMa se os 4 cards extras visíveis no desktop do
      Figma (`Migração Altitudinal de Aves na Mantiqueira`,
      `Levantamento de Aves da Serra da Mantiqueira`,
      `Variação na taxa de captura com redes de neblina`,
      `Ciclo de muda e classificação de idade de *Chiroxiphia
      caudata*`) devem entrar em uma próxima revisão da página.
- [ ] Confirmar nomes oficiais e períodos dos 5 projetos canônicos
      diretamente com a Coordenação de Pesquisa.
- [ ] Decidir modelagem Sanity para projetos de pesquisa/publicações
      (provavelmente um schema com título, período, descrição,
      instituições parceiras, imagens e link para publicação).
- [x] Card "Projetos de Pesquisa" do hub `/programas-e-projetos`
      conectado para `/programas-e-projetos/projetos-de-pesquisa`.
- [ ] Quando existir provedor real de newsletter, substituir o
      `onsubmit="event.preventDefault();"` por integração real e
      adicionar captcha.
- [ ] Quando existir página de doações, substituir o `mailto:` do
      CTA "Doar agora" por link/integração real.

## Resultado do build

`PATH="/Users/anhinga/.local/bin:/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin" npm run build`

- ✅ Build concluído sem erros.
- 12 páginas geradas (`/`, `/sobre`, `/missao`, `/areas-de-atuacao`,
  `/programas-e-projetos`, `/programas-e-projetos/monitoramento-de-avifauna`,
  `/programas-e-projetos/treinamento-monitoramento-avifauna`,
  `/programas-e-projetos/acoes-pro-aves`,
  `/programas-e-projetos/projetos-de-pesquisa`, `/admin`).
- Arquivo gerado: `dist/programas-e-projetos/projetos-de-pesquisa/index.html`.
- Sem `href="#"` ou `action="#"` novos na página.
- Avisos existentes (chunks >500 kB de `pane2`, `VideoPlayer`,
  `SanityVision`) são pré-existentes do Sanity Studio e não
  relacionados a esta página.
