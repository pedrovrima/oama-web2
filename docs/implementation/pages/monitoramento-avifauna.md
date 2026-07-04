# Página: Programa de Monitoramento de Avifauna da Mantiqueira

Status: **revisada na PED-40 (hardcoded, hero e estrutura ajustados para maior fidelidade ao Figma)**.

## Frames Figma

Fonte: `design-assets/figma-analysis/selection-analysis.md` e screenshots exportados.

- Mobile: `Celular_Monitoramento` (`2431:492`), 360 × 5204.
- Desktop: `Desktop_Monitoramento` (`2498:638`), 1024 × 4476.

Screenshots de referência:

- `design-assets/figma-exports/selection/mobile-celular-monitoramento-2431_492.png`
- `design-assets/figma-exports/selection/desktop-desktop-monitoramento-2498_638.png`

Atenção: há outros frames chamados “Monitoramento de aves e estudos de avifauna” (`2610:569`, `2620:831` etc.) que pertencem à página de **Consultoria/Prestação de Serviços**, não a este programa. Não usar esses como fonte principal aqui.

## Rota proposta

- `src/pages/programas-e-projetos/monitoramento-de-avifauna.astro` ✅ criada
- Rota final: `/programas-e-projetos/monitoramento-de-avifauna`

## Papel da página

Página filha do hub `/programas-e-projetos`, detalhando o programa central de monitoramento padronizado e de longo prazo da avifauna na Serra da Mantiqueira.

## Conteúdo-chave identificado no Figma

Título principal:

- `PROGRAMA DE MONITORAMENTO DE AVIFAUNA DA MANTIQUEIRA`

Texto introdutório desktop:

> O monitoramento padronizado e de longo-prazo da avifauna na Serra da Mantiqueira é uma atividade central na construção do OAMa. Como um observatório de aves, o OAMa foi fundado com o objetivo de estabelecer e realizar este monitoramento. Os observatórios têm a missão de acompanhar um processo ou fenômeno ao longo do tempo e do espaço, e os observatórios de aves fazem isso com as aves e seus habitats, utilizando a avifauna como ferramenta para entender e avaliar as condições e processos ambientais. Nosso monitoramento é focado no acompanhamento de padrões demográficos e nos efeitos das mudanças ambientais e climáticas na avifauna. Mas com os dados coletados de forma padronizada e periódica, aprendemos muito mais.

Histórico/áreas:

> Iniciamos o monitoramento padronizado e de longo prazo da avifauna na Serra da Mantiqueira em 2018. Desde então realizamos amostragens em seis diferentes áreas amostrais entre São Paulo, Rio de Janeiro e Minas Gerais. Mantemos uma área modelo fixa, com mais de 6 anos de monitoramento continuado no mesmo local. Nosso objetivo é expandir nossa área de alcance e manter o acompanhamento fixo em diferentes áreas da Mantiqueira.

Técnicas:

> Utilizamos três técnicas complementares para a amostragem padrão do monitoramento: anilhamento com redes de neblina, pontos de escuta, e gravadores autônomos.

Objetivos principais:

- Identificar e descrever a composição de avifauna e sua sazonalidade de forma representativa para a Serra da Mantiqueira.
- Estimar padrões demográficos (sobrevivência, produtividade) para as espécies da Mantiqueira em diferentes áreas de ocorrência.
- Avaliar a relação entre condições ambientais e climáticas com as taxas demográficas e distribuição das espécies.
- Descrever a biologia e ecologia das espécies de aves na Mantiqueira.

Citação:

> “Programas de monitoramento de longo prazo da biodiversidade local são essenciais para entendermos e mitigarmos os efeitos das mudanças globais na biodiversidade tropical, ao mesmo tempo em que promovem capacitação profissional, educação ambiental e divulgação científica”.

Crédito:

- Dr. Cagan Sekercioglu, Universidade de Utah, Estados Unidos.
- Tradução livre de trecho do artigo “Promoting community-based bird monitoring in the tropics: Conservation, research, environmental education, capacity-building, and local incomes”, publicado em 2011 na revista Biological Conservation.

## Decisão Hardcoded vs Sanity

Primeira versão hardcoded. Não criar schemas Sanity ainda.

## Arquivos criados/modificados

- `src/pages/programas-e-projetos/monitoramento-de-avifauna.astro` (criado)
- `docs/implementation/pages/monitoramento-avifauna.md` (atualizado)

Nenhum outro arquivo foi tocado (`package.json`, `astro.config.mjs`, `BaseLayout`, `Nav`, `Footer`, `WaveDark`, Sanity, demais páginas e hubs permanecem inalterados).

## Decisões da implementação

- **Ajuste posterior na PED-40:** o topo foi corrigido para ficar estruturalmente mais fiel ao Figma. O hero agora é apenas a faixa fotográfica, e o título principal passou a viver no bloco amarelo logo abaixo, em vez de ficar sobreposto à imagem.
- Reuso de `BaseLayout` e do padrão visual de `src/pages/areas-de-atuacao.astro`, `src/pages/programas-e-projetos.astro` e `src/pages/consultoria.astro`:
  - hero com foto full-bleed + barra amarela inferior de 2 px;
  - seções coloridas alternando `#dfb553` (amarelo) e `#5ba4d9` (azul);
  - separadores `WaveDark` entre as seções principais;
  - tipografia `font-oswald` (títulos) e `font-montserrat` (corpo) via tokens de `src/styles/global.css`.
- Estrutura de seções, seguindo o Figma:
  1. **Hero** como faixa fotográfica provisória de ave, com barra amarela inferior; o título principal do programa foi movido para a primeira seção amarela logo abaixo, em alinhamento com a revisão da PED-40.
  2. **Introdução + 4 objetivos principais** em seção amarela. Os 4 objetivos são apresentados como lista com checkmark circular branco (SVG inline) — referência visual do Figma.
  3. **Citação em destaque** (Dr. Cagan Sekercioglu) em bloco tipo `figure` com imagem provisória ao fundo, gradiente escuro, aspas SVG em amarelo e `blockquote` em itálico branco, sobre o mesmo fundo do Figma.
  4. **Crédito de tradução** em seção azul curta, logo abaixo da citação.
  5. **Início (2018) e áreas amostrais** em seção amarela, com foto circular à esquerda e texto à direita, com destaque em **strong** para “2018” e “seis diferentes áreas amostrais”.
  6. **Técnicas complementares** em seção azul, em grid responsivo de 3 cards (1 coluna mobile, 2 tablet, 3 desktop). Cada card tem imagem provisória + título + descrição breve. As descrições foram redigidas em linguagem técnica neutra e sem alegações não suportadas pelo briefing — descrevem o uso geral de cada método em monitoramento ornitológico padronizado, mas devem ser revisadas com a equipe do OAMa antes de publicação definitiva.
  7. **CTA “Nos ajude a construir pontes”** em seção azul-ink (`#1a2e4a`), com botão “Doar agora” e link de e-mail para contato, seguido de link “Voltar para Programas e Projetos” apontando para `/programas-e-projetos` (rota real do hub).
- Hero usa título do Figma com quebra de linha no mobile (`<br class="md:hidden" />`) para não estourar a largura, seguindo o mesmo padrão de outras seções.
- A página inteira é **hardcoded** (título, parágrafos, lista de objetivos, citação, créditos, técnicas, CTAs, links e SEO) — coerente com o que foi combinado em `programas-e-projetos.md` (primeira versão hardcoded).
- Cores, espaçamentos e proporções replicam o ritmo visual de `programas-e-projetos.astro` e `consultoria.astro` (mesma escala de títulos `text-[22px] md:text-[28px]`, mesmo `text-justify` em parágrafos, mesmas proporções de `max-w-4xl`/`max-w-5xl`, mesmos botões arredondados com `bg-oama-yellow`/`bg-oama-ink`).
- Nenhum `href="#"` ou `action="#"` foi adicionado. Os únicos links externos da página são `mailto:contato@oama.eco.br` e o link interno real `/programas-e-projetos` (rota existente).
- Sem dependências novas: reuso de `BaseLayout`, `WaveDark`, classes Tailwind já em uso no site e tokens de cor do `global.css`.

## Imagens (todas provisórias)

Todas as imagens são placeholders do Unsplash no mesmo padrão já usado em `areas-de-atuacao.astro`, `programas-e-projetos.astro` e `consultoria.astro`. Devem ser substituídas por fotos reais do OAMa:

- Hero: `photo-1444930694458-01babe71870e` (detalhe de ave).
- Citação: `photo-1591608971362-f08b2a75731a` (mão segurando ave em campo).
- Seção Início/áreas: `photo-1469474968028-56623f02e42e` (paisagem da Mantiqueira).
- Card 1 (anilhamento): `photo-1591608971362-f08b2a75731a` (mão segurando ave).
- Card 2 (pontos de escuta): `photo-1444464666168-49d633b86797` (ave).
- Card 3 (gravadores autônomos): `photo-1453738773917-9c3eff1db985` (ambiente de floresta / equipamento).

Lista de pendência explícita: substituir todos os placeholders Unsplash por fotos reais do acervo OAMa (anilhamento em campo, redes de neblina, paisagens da Mantiqueira, gravadores autônomos instalados, etc.).

## Pendências

- Trocar todas as imagens provisórias (Unsplash) por fotos reais do monitoramento/anilhamento do OAMa.
- Validar com a equipe do OAMa o texto descritivo das 3 técnicas (anilhamento, pontos de escuta, gravadores autônomos) — frases atuais foram redigidas de forma neutra e compatível com o briefing, mas devem ser revisadas antes de publicação definitiva.
- Confirmar a URL do artigo de Sekercioglu (DOI/citation) e, se desejado, adicionar link externo para a referência completa na seção de crédito.
- Atualizar o card “Monitoramento de Avifauna” em `/programas-e-projetos` para apontar para a nova rota `/programas-e-projetos/monitoramento-de-avifauna` em vez de `#monitoramento-avifauna` (esta tarefa está fora do escopo desta página — feita em uma próxima passagem).
- Avaliar se o conteúdo longo (intro, histórico, objetivos) deve ser gerenciável via Sanity (provável: textos e imagens).

## Resultado do build

`PATH="/Users/anhinga/.local/bin:/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin" npm run build`

- ✅ Build concluído em ~8s, sem erros.
- 9 páginas geradas (`/`, `/sobre`, `/missao`, `/areas-de-atuacao`, `/programas-e-projetos`, `/programas-e-projetos/monitoramento-de-avifauna`, `/consultoria`, `/realizacoes`, `/admin`).
- Arquivo gerado: `dist/programas-e-projetos/monitoramento-de-avifauna/index.html`.
- Avisos de chunks >500 kB (`pane2`, `VideoPlayer`, `SanityVision`) são pré-existentes do Sanity Studio e não relacionados a esta página.
