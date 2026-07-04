# Página: Programas e Projetos

Status: **revisada e encurtada pela PED-33**.

Issue Linear concluída: `PED-33`

## Frames Figma

Fonte: `design-assets/figma-analysis/selection-analysis.md`.

- Mobile: `Celular_PROGRAMAS E PROJETOS` (`2423:234`), 360 × 4487.
- Desktop: `Desktop_PROGRAMAS E PROJETOS` (`2497:419`), 1024 × 2886.

Frames relacionados/páginas filhas:

- `Celular_Monitoramento` (`2431:492`)
- `Desktop_Monitoramento` (`2498:638`)
- `Celular_Treinamento` (`2446:326`)
- `Desktop_Monitoramento`/treinamento (`2502:668`)
- `Celular_Ações Pró-Aves` (`2462:618`)
- `Desktop_Ações Pró-Aves` (`2512:624`)
- `Celular_Projetos de Pesquisa` (`2473:389`)
- `Desktop_Projetos de Pesquisa` (`2514:766`)
- `Celular_Jacuçara` (`2479:433`)
- `Desktop_Jacuçara` (`2517:1052`)
- `Celular_FFT` (`2479:525`)
- `Desktop_Ações Pró-Aves`/FFT (`2517:1092`)

## Rota proposta

- `src/pages/programas-e-projetos.astro`

## Papel da página

Página hub para listar programas, projetos e campanhas, servindo como porta de entrada para futuras páginas filhas.

## Leitura operacional atual

- O entendimento atualizado do Figma é que `/programas-e-projetos` deve funcionar como **hub visual curto**, não como landing longa editorial.
- A revisão da PED-33 removeu a estrutura longa anterior e reorientou a rota para hero + galeria.

## Resultado da PED-33

- O arquivo `src/pages/programas-e-projetos.astro` foi reescrito para virar um hub curto.
- A página agora tem:
  - hero único;
  - galeria visual com 7 cards;
  - links diretos para rotas filhas;
  - remoção total dos blocos descritivos longos internos.
- A checagem visual local confirmou que ela agora se comporta como hub/índice visual, e não como landing extensa.

## Conteúdo-chave identificado no Figma

Título principal:

- `PROGRAMAS E PROJETOS`

Cards/entradas candidatas:

1. Programa de Monitoramento de Avifauna da Mantiqueira
2. Programa de Treinamento em Monitoramento de Avifauna
3. Programa Ações Pró-Aves
4. Projetos de Pesquisa
5. Campanha Jacuçara
6. Fundraising Field Trip

## Decisão Hardcoded vs Sanity

Para primeira implementação:

- hardcoded: título, cards, descrições resumidas, CTAs e SEO;
- links podem apontar para rotas futuras, mas se a rota ainda não existir usar `aria-disabled`/texto “em breve” ou links para âncoras internas, evitando `href="#"`;
- não criar schemas Sanity nesta tarefa.

## Arquivos permitidos para o agente

Pode criar/modificar:

- `src/pages/programas-e-projetos.astro`
- `docs/implementation/pages/programas-e-projetos.md`
- opcionalmente `src/pages/index.astro` apenas se houver link já existente para programas com placeholder óbvio

Não alterar:

- schemas Sanity;
- `package.json`;
- `astro.config.mjs`;
- páginas `sobre`, `missao`, `areas-de-atuacao`.

## Critérios de aceite

- [x] Página `/programas-e-projetos` criada.
- [x] Hub com cards/entradas dos programas/projetos acima.
- [x] Layout responsivo e consistente com o site atual.
- [x] Sem dependências novas.
- [x] Sem `href="#"` novo.
- [x] Build passa (ver seção “Resultado” abaixo).

## Decisões da implementação

- Hero grande com título centralizado, seguindo a leitura do frame.
- Bloco principal reduzido a uma galeria visual em fundo amarelo.
- Uso de **7 cards** para refletir melhor a composição visual observada nos frames exportados.
- Cada card aponta para uma rota real:
  - monitoramento de avifauna
  - treinamento em monitoramento
  - ações pró-aves
  - projetos de pesquisa
  - fundraising field trip
  - campanha jacuçara
  - pró-aves
- Os textos ficaram mínimos, sobrepostos às imagens, para preservar o papel de hub visual.
- Todo o conteúdo continua **hardcoded** nesta fase.

## Imagens

- A PED-33 substituiu o uso de Unsplash por imagens locais já presentes em `public/`.
- Ainda vale refinar a escolha de fotos se surgir material mais diretamente correspondente ao frame original.

## Pendências

- Refinar imagens e microtipografia caso o Figma completo indique escolhas ainda mais específicas.
- Definir junto ao OAMa quais frentes devem ser gerenciáveis via Sanity
  (provável: descrições longas, lista de projetos de pesquisa, imagens).
- Validar com o time o tom dos textos resumidos nos cards.
- Considerar adicionar CTAs específicos (ex.: link para o documentário
  da Campanha Jacuçara, página da KBO para FFT) quando URLs definitivas
  estiverem disponíveis.

## Resultado do build

`PATH="/Users/anhinga/.local/bin:/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin" npm run build`

- ✅ Build revalidado nesta rodada, sem erros.
- ✅ O hub `/programas-e-projetos` foi encurtado para hero + galeria visual curta.
- ✅ Os blocos descritivos longos foram removidos da rota hub.
- ✅ Os cards apontam para rotas reais, incluindo a camada separada de resultados em `/programas-e-projetos/pro-aves`.
- Avisos existentes (chunks >500 kB de `pane2`, `VideoPlayer`, `SanityVision`) continuam pré-existentes do Sanity Studio e não relacionados a esta página.
