# Página: Programa de Treinamento em Monitoramento de Avifauna

Status: **revisada na PED-40 (hardcoded, hero e ritmo visual mais próximos do Figma)**.

## Frames Figma

Fonte: `design-assets/figma-analysis/selection-analysis.md` e screenshots exportados.

- Mobile: `Celular_Treinamento` (`2446:326`), 360 × 7946.
- Desktop: `Desktop_Monitoramento` (`2502:668`), 1024 × 5543 — apesar do nome genérico, os snippets mostram que este frame é a página de treinamento.

Screenshots de referência:

- `design-assets/figma-exports/selection/mobile-celular-treinamento-2446_326.png`
- `design-assets/figma-exports/selection/desktop-desktop-monitoramento-2502_668.png`

## Rota proposta

- `src/pages/programas-e-projetos/treinamento-monitoramento-avifauna.astro`
- Rota final: `/programas-e-projetos/treinamento-monitoramento-avifauna`

## Papel da página

Página filha do hub `/programas-e-projetos`, detalhando o programa de formação técnica e treinamento supervisionado de ornitólogos de campo, especialmente em monitoramento/anilhamento de avifauna.

## Conteúdo-chave identificado no Figma

Título principal:

- `PROGRAMA DE TREINAMENTO EM MONITORAMENTO DE AVIFAUNA`

Objetivos resumidos do mobile:

- Contribuir para a capacitação e formação técnica de novos cientistas, biólogos, profissionais educadores e interessados em ornitologia e conservação.
- Oferecer um programa de treinamento e capacitação para ornitólogos de campo que atenda à demanda nacional e internacional.

Texto introdutório desktop:

> O monitoramento de avifauna, em especial a técnica de anilhamento, exige um treinamento supervisionado para a formação de ornitólogos de campo habilidosos, com uma atuação ética e altamente qualificada. Este tipo de treinamento é oferecido em diferentes partes do mundo, em especial na América do Norte, mas não existia no Brasil até muito recentemente. Acreditando na importância desse treinamento para o desenvolvimento dos estudos ornitológicos em campo com alta qualidade no Brasil, o OAMa iniciou o programa de treinamento em monitoramento de avifauna em 2022.

Seção “Sobre inscrições”:

> O lançamento de edital de seleção é realizado uma vez por ano, normalmente, no qual selecionamos em torno de quatro trainees para um ciclo de atividades de no mínimo 12 semanas. A divulgação é realizada em nossas redes sociais. SEM CHAMADAS ABERTAS NO MOMENTO.

Coordenação/equipe:

> O programa é coordenado e supervisionado por Luiza Figueira. Luiza é co-fundadora e Diretora Executiva do OAMa, anilhadora e treinadora certificada pelo NABC desde 2015, anilhadora sênior do CEMAVE e responsável técnica pelas licenças de pesquisa do OAMa no SISBIO e SNA/CEMAVE. A realização conta com a participação de diversos colaboradores da equipe OAMa. Affonso Souza, Danielle Santos, Karine Resende, Otávio Rocha, Pedro Martins, Rachel Fidelis e Victor Sanchez fazem parte da equipe qualificada do OAMa para atuar no monitoramento e treinamento do OAMa.

Seção “Intercâmbio de anilhadores”:

> O OAMa e o Observatório de Aves de Klamath (KBO), localizado no Oregon, Estados Unidos, promovem um intercâmbio de seis meses entre trainees das duas organizações. O objetivo dessas viagens é proporcionar a continuidade da capacitação profissional de anilhadores de aves para além das fronteiras nacionais (“Banders Beyond Borders”). Durante o intercâmbio, os trainees continuam seus estudos e atividades práticas, como o uso seguro e ético de redes de neblina, o levantamento de avifauna, o anilhamento de aves, as técnicas avançadas de identificação de idade e sexo, e a entrada e o gerenciamento de dados. Os participantes também têm oportunidade de atuar como monitores em workshops e atividades de educação ambiental. E, ao fim da experiência, os intercambistas são testados em seus conhecimentos, em busca de certificações internacionais de anilhadores e de treinadores pelo Conselho Norte-americano de Anilhamento (NABC). Esse projeto de partilhas técnicas e culturais só é possível graças aos recursos obtidos nas “Fundraising Field Trips”.

Depoimento:

> “Participar do intercâmbio no KBO tem sido uma das experiências mais intensas da minha vida. Viver imersa na rotina de campo não é fácil, mas tenho aprendido muito sobre a ética no anilhamento de aves, trabalho de campo e liderança. Para além do crescimento profissional, conheci outras culturas, idiomas e criei preciosas amizades com pessoas de várias partes do mundo. Uma oportunidade como essa, para alguém que vem de tão distante, não é fácil, afinal, muitos custos estão envolvidos. É por meio de doações, filiações e de viagens de arrecadações de fundos que esses sonhos se tornam reais. Essa é uma experiência que pode moldar e mudar caminhos, e que eu desejo a todos que puderem ter a oportunidade.”

Crédito:

- Andreza Freitas, voluntária de divulgação científica do OAMa e doutoranda no Laboratório de Ecologia de Aves e comportamento da UERJ pelo programa de pós-graduação em Ecologia da UFRJ.

## Decisão Hardcoded vs Sanity

Primeira versão hardcoded. Não criar schemas Sanity ainda.

## Arquivos permitidos para o agente

Pode criar/modificar:

- `src/pages/programas-e-projetos/treinamento-monitoramento-avifauna.astro`
- `docs/implementation/pages/treinamento-monitoramento-avifauna.md`

Não alterar:

- schemas Sanity;
- `package.json`;
- `astro.config.mjs`;
- `Nav`, `Footer`, `BaseLayout`, `WaveDark`;
- outras páginas/hubs, salvo leitura.

## Critérios de aceite

- [x] Página `/programas-e-projetos/treinamento-monitoramento-avifauna` criada.
- [x] Hero com título do programa.
- [x] Conteúdo com intro, objetivos, inscrições, coordenação/equipe, intercâmbio e depoimento.
- [x] Layout responsivo e consistente com `/programas-e-projetos/monitoramento-de-avifauna`.
- [x] Sem dependências novas.
- [x] Sem `href="#"` ou `action="#"` novo.
- [x] Build passa (ver seção "Resultado" abaixo).

## Decisões da implementação

- Página irmã de `monitoramento-de-avifauna.astro`: reusa `BaseLayout`,
  `WaveDark` e o mesmo ritmo de seções coloridas alternando
  `#dfb553` (amarelo) e `#5ba4d9` (azul), com fechamento em
  `#1a2e4a` (azul-marinho) e CTA em `#fbf5e6` (creme).
- Na revisão da PED-40, o hero foi encurtado e perdeu o título sobreposto:
  a imagem abre a página e o H1 passa a começar na primeira seção amarela,
  alinhando melhor com o frame desktop `2502:668`.
- A primeira seção mantém o texto introdutório e a lista de 2 objetivos,
  mas ganhou uma galeria horizontal logo abaixo dos bullets para aproximar
  o ritmo visual do Figma, que mostra imagens grandes antes dos blocos de
  inscrições e intercâmbio.
- Seção 2 — Sobre inscrições (azul): texto sobre o edital anual,
  destaque centralizado em `font-oswald` uppercase para a frase
  obrigatória **"SEM CHAMADAS ABERTAS NO MOMENTO"**, seguido do bloco
  de coordenação (Luiza Figueira com mini-bio do Figma) e grid de 7
  cards (Affonso Souza, Danielle Santos, Karine Resende, Otávio Rocha,
  Pedro Martins, Rachel Fidelis, Victor Sanchez) fechando a frase
  "fazem parte da equipe qualificada do OAMa para atuar no
  monitoramento e treinamento do OAMa".
- Seção 3 — Intercâmbio de anilhadores (amarelo): layout em grid com
  foto circular à esquerda no desktop e acima no mobile, à direita
  três parágrafos sobre o intercâmbio com o KBO (Banders Beyond
  Borders), incluindo o período de 6 meses, atividades práticas
  (redes de neblina, levantamento, anilhamento, identificação de
  idade/sexo, gestão de dados, monitoramento de workshops) e
  certificações NABC ao fim, com fechamento creditando as
  "Fundraising Field Trips".
- Seção 4 — Depoimento (azul-marinho): bloco destacado em
  `figure`/`blockquote` com foto de fundo, gradiente preto, ícone
  de aspas OAMa em amarelo, depoimento completo da Andreza Freitas
  extraído do Figma e legenda com crédito
  (voluntária de divulgação científica do OAMa e doutoranda no
  Laboratório de Ecologia de Aves e comportamento da UERJ pelo
  programa de pós-graduação em Ecologia da UFRJ).
- Seção 5 — CTA "Nos ajude a construir pontes" (creme): título
  `font-oswald` uppercase, parágrafo introdutório, botão "Quero
  apoiar" em `mailto:` para `contato@oama.eco.br` com subject
  pré-preenchido, parágrafo de contato e link de retorno para
  `/programas-e-projetos` (sem `href="#"`).
- Tipografia segue tokens existentes (`font-oswald` para títulos,
  `font-montserrat` para corpo) e cores via tokens `--color-oama-*`
  definidos em `src/styles/global.css`.
- Todo o conteúdo é **hardcoded** nesta primeira versão, conforme
  combinado: títulos, parágrafos, lista de equipe, depoimento, CTAs e
  SEO. Nada de Sanity nesta entrega.

## Imagens

- **Todas as imagens da página são provisórias (Unsplash)**, mesmo
  padrão já em uso em `monitoramento-de-avifauna.astro` e
  `programas-e-projetos.astro`.
  - Hero: `unsplash.com/photo-1456926631375-92c8ce872def` (anilhamento
    em campo).
  - Foto circular do intercâmbio: `unsplash.com/photo-1551522435-a13afa10f103`
    (atividade prática em campo).
  - Foto de fundo do depoimento: `unsplash.com/photo-1518715308788-3005759c61d3`
    (trabalho de campo em floresta).
- Substituir por fotos reais do OAMa (sessões de treinamento,
  intercâmbio no KBO, equipe) quando disponíveis em `public/` ou
  via Sanity.

## Pendências

- Trocar imagens provisórias (Unsplash) por fotos reais do OAMa /
  KBO / treinamento supervisionado.
- Confirmar periodicamente o status atual de chamadas/inscrições
  antes de publicação (a frase "SEM CHAMADAS ABERTAS NO MOMENTO" pode
  precisar ser atualizada para "INSCRIÇÕES ABERTAS" com link para
  edital quando houver chamada ativa).
- Conectar o card "Treinamento em Monitoramento" do hub
  `/programas-e-projetos` (que hoje aponta para `#treinamento`) para
  esta rota `/programas-e-projetos/treinamento-monitoramento-avifauna`.
- Avaliar conversão futura para Sanity dos campos que podem mudar
  (status de chamadas, lista nominal da equipe, texto do depoimento,
  imagens de hero/intercâmbio/depoimento), seguindo a regra de
  Hardcoded vs Sanity do `AGENT.md`.
- Adicionar metadados SEO e `og:image` dedicado à página
  (hoje herda apenas o `<title>` do `BaseLayout`).
- Confirmar tom/ortografia com o time para "anilhadores" (singular
  "anilhador" no original do Figma; plural mantido por consistência).

## Resultado do build

`PATH="/Users/anhinga/.local/bin:/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin" npm run build`

- ✅ Build concluído sem erros.
- Página gerada em
  `dist/programas-e-projetos/treinamento-monitoramento-avifauna/index.html`.
- 10 páginas geradas no total (incluindo a nova rota).
- Avisos existentes (chunks >500 kB de `pane2`, `VideoPlayer`,
  `SanityVision`) são pré-existentes do Sanity Studio e não
  relacionados a esta página.
