# STATUS

## Estado geral
- Projeto: `oama-web2`
- Stack confirmada: Astro 5 + Tailwind v4 + Sanity + Vercel
- Fonte visual principal: Figma exportado em `design-assets/figma-exports/selection/`
- Fonte de migração: site antigo em `/Users/anhinga/Projetos/oama-website`
- Linear: acesso válido confirmado para `Pedro Martins` no time `PED`
- Backlog Linear já existe; a orquestração local continua em `docs/agent-workflow/`

## Estado operacional atual
- **Captcha Cloudflare Turnstile nos formulários (2026-08-27, sem commit):** novo `src/scripts/captcha.ts` (carregamento preguiçoso do script oficial no primeiro foco no form; widget invisível `appearance: interaction-only`, sem layout shift; fail-open sem `PUBLIC_TURNSTILE_SITE_KEY`). Integrado em `newsletter.ts` e `contato.ts` — enviam `captcha_token` no payload quando há chave. No mailer (`newsletter-oama`, sem commit): `lib/turnstile.ts` (verificação server-side no siteverify da Cloudflare, fail-open com warn sem `TURNSTILE_SECRET_KEY`) plugado em `/api/subscribers` e `/api/contato` (403 em token inválido/ausente quando a chave existe). Escolha Turnstile em vez do reCAPTCHA do Figma: sem interação do usuário e melhor privacidade (ONG). Pendente: criar conta Cloudflare Turnstile, configurar `PUBLIC_TURNSTILE_SITE_KEY` (Vercel do site) e `TURNSTILE_SECRET_KEY` (Vercel do mailer). Honeypot e rate limit continuam ativos.
- **Formulários "Fale Conosco" com envio real (2026-08-27, sem commit):** os forms de `/consultoria` (hub) e das 3 filhas (`ConsultoriaServico.astro`) deixaram de usar `mailto:` e passaram a fazer POST para `POST /api/contato` do mailer (`newsletter-oama`, rota nova em `app/api/contato/route.ts`, envia via SES para `contato@oama.eco.br` com Reply-To do visitante; honeypot `website`, rate limit por IP, CORS igual ao de `/api/subscribers`). Script compartilhado `src/scripts/contato.ts` (padrão de `newsletter.ts`; endpoint via `PUBLIC_CONTATO_ENDPOINT`, fallback para produção; erro exibe mailto de plano B). Botão do hub agora diz "Enviar" (Figma). QA: build 29 páginas + três estados (enviando/sucesso/erro) verificados no navegador com mock 200/500. Pendências de deploy: deploy do mailer com `CONTACT_TO_EMAIL` (opcional) e SES já configurado; reCAPTCHA é task separada (campo `captcha_token` já aceito e ignorado).
- **Google Analytics 4 instalado (2026-08-26):** snippet gtag (`G-78XYNN79L7`) no `<head>` de `src/layouts/BaseLayout.astro`, condicionado a `import.meta.env.PROD` — não carrega em `astro dev`. Cobre todas as páginas (layout único).
- **TASK-LAUNCH-001 está em andamento (2026-07-20):** preparação para lançamento sem CMS; auditoria por abas/painéis Herdr, com Pi (`openai-pedro`) e Claude Code. Fable é proibido. Brief: `docs/implementation/pages/lancamento.md`.
- O repo já possui uma camada de briefs em `docs/implementation/pages/`.
- O repo já possui `AGENT.md` com regras de hardcoded vs Sanity.
- O repo possui uma camada estilo OmniScience para retomada e orquestração por agentes em `docs/agent-workflow/`.
- A auditoria Figma/legado já foi realizada e virou backlog operacional.
- A decisão mais recente do usuário redefine a postura de execução: **prioridade total para fidelidade ao Figma**.
- O alinhamento entre backlog local e Linear foi consolidado em `docs/agent-workflow/LINEAR_LOCAL_ALIGNMENT.md`.
- A operação desta fase passa a ser **serial por issue**: uma issue do Linear ativa por vez.

## Regra operacional vigente
1. **Se existe no Figma, respeitar o Figma.**
2. Não “melhorar”, reinterpretar ou completar uma página com blocos do legado se a rota atual for `Figma-first`.
3. `apoie` não é foco imediato; pode ficar para depois do bloco principal de páginas Figma-first.
4. `pro-aves`/ProAves exige separação conceitual explícita:
   - uma página descritiva principal, guiada pelo Figma;
   - um conteúdo de “resultado do projeto” hoje presente no legado, que não deve contaminar a página descritiva por acidente;
   - se a camada de resultado fizer mais sentido como página/rota separada, isso é aceitável e preferível a misturar conceitos.

## Situação de implementação conhecida
- Várias páginas e hubs já foram criados no Astro.
- Parte do trabalho anterior misturou, em alguns pontos, interpretação de Figma com conteúdo do site antigo.
- A principal cautela agora é **não confundir rota Figma-first com rota de migração**.
- O foco imediato deve ser limpar o backlog visual e estrutural das páginas que já têm frame no Figma.

## Pontos de atenção atuais
1. `acoes-pro-aves` e `pro-aves` não podem continuar semanticamente cruzadas.
2. A separação conceitual de ProAves foi validada no código e no build nesta rodada.
3. O conteúdo de “resultado do projeto” vindo do legado está explicitado em `src/pages/programas-e-projetos/pro-aves.astro` como camada separada da página principal.
4. `apoie` continua útil, mas sai da frente principal por enquanto.
5. Páginas/hubs já implementados devem ser revisados página por página com comparação direta à exportação correspondente.
6. Build foi reexecutado com sucesso nesta rodada; permanece um warning pré-existente de chunks grandes do Studio e um aviso deprecatório em `@sanity/image-url`.
7. `PED-32`, `PED-33`, `PED-34`, `PED-40` e `PED-41` já estão concluídas no Linear/local com build válido no fluxo recente.
8. Por direção do usuário, **não tocar em home (`PED-37`) nem sobre (`PED-38`) nesta rodada**.
9. `PED-39` (`/areas-de-atuacao`) foi revisada contra Figma e validada com build.
10. `PED-36` (`/realizacoes`) foi revisada contra Figma e validada com build.
11. `/apoie` foi **reimplementada em 2026-06-11** como migração `Legacy-first` fiel ao site antigo, por direção direta do usuário (supersede a versão Hybrid da PED-35). Planos Stripe via snapshot estático (`src/data/apoie-stripe.json` + `scripts/fetch-apoie-stripe.mjs`); carrosséis com `embla-carousel`; verificação visual e funcional feita no browser. Ver `docs/implementation/pages/apoie.md`.
12. `PED-37` home e `PED-38` sobre continuam pausadas por direção do usuário.
13. `PED-42` (`/pix`) foi criada e validada com build; a rota interna apontada por `/apoie` agora existe.
14. Não há issue ativa no Linear; home (`PED-37`) e sobre (`PED-38`) seguem pausadas por direção do usuário.
15. `/proaves` foi **criada em 2026-06-11** como migração `Legacy-first` da página de
    **resultados** do Pró-Aves do site antigo (`pages/proaves/index.jsx`), com todas as
    animações, por direção direta do usuário. É uma ilha React (`client:load`) — modais
    Radix, framer-motion, contadores e carrosséis. **Não confundir** com a descritiva
    `/programas-e-projetos/pro-aves` (a separação prevista no item 24 do bloco acima foi
    concretizada como rota própria). Ver `docs/implementation/pages/proaves.md`.

16. **2026-06-12 — Revisão Figma vs implementação concluída** (diretiva direta do
    usuário). Todas as rotas Figma-first foram comparadas frame a frame com o build
    atual (desktop 1440 + amostragem mobile). Resultado consolidado em
    `docs/agent-workflow/REVISAO_FIGMA_2026-06-12.md`: 7 padrões transversais
    (T1–T7), divergências por rota com node IDs, 8 pendências que exigem decisão
    do usuário e ordem recomendada de execução. **Nenhuma implementação foi feita
    nesta frente** — só diagnóstico. Scripts reutilizáveis em `scripts/revisao/`.
    Esta revisão supersede, no nível de detalhe, a auditoria de 2026-06-07.

17. **2026-08-19/20 — Nova revisão Figma vs implementação + lote 1 executado.**
    Diagnóstico consolidado em `docs/agent-workflow/REVISAO_FIGMA_2026-08-19.md`
    (supersede o estado do doc de 2026-06-12). Inclui auditoria de links/rotas,
    as decisões do usuário vindas do checklist interativo e o backlog do lote 2.
    Descoberta de método: **há componentes do Figma fora dos frames exportados**
    (nós soltos no canvas) — não concluir "não existe no Figma" pelo PNG do frame.
    Lote 1 implementado na branch `revisao-figma-lote-1` (build ok, render
    conferido): AGEVAP/Casa Tlalli, contraste em treinamento e projetos-de-pesquisa,
    Jacuçara refeita conforme o frame (faixa roxa + 3 parágrafos restaurados),
    FFT com os 3 parágrafos do frame, temas focais em acoes-pro-aves, copy de
    agente removida de pro-aves, WIKIMUDAS com destino, card de Cursos no hub.

18. **2026-08-20 — Lotes 2 e 3 executados** (branch `revisao-figma-lote-1`,
    5 commits). Hero transversal, timeline real de `/sobre`, copy do Figma em
    `/consultoria`, e as migrações de **`/downloads`** (45 cards, 43 PDFs) e
    **`/blog`** (Sanity `1tnejkhf`, 2 posts). O site **não depende mais do
    domínio antigo** para os PDFs de relatório nem para blog/downloads.
    Build limpo: **27 páginas**. Verificação nas 24 rotas em 1440 e 390:
    0 imagens quebradas, 0 overflow, 0 links quebrados, 0 `href="#"`.
    Detalhes e pendências em `REVISAO_FIGMA_2026-08-19.md`.

19. **2026-08-20 (lote 4)** — Removido conteúdo fabricado (5 matérias de
    imprensa inventadas em "OAMa na Mídia", eventos de exemplo na Agenda,
    5 imagens de `placehold.co`). Migradas `/links/[slug]` e os redirects 301
    do site antigo. Fotos dos frames aplicadas (a pasta de mídias do cliente
    existe e tem as capas do designer). SEO criado do zero (Open Graph,
    canonical, sitemap, robots). **Imagens: 440 MB → 85 MB.**
    Build: 28 páginas; 25 rotas com 0 imagens faltando.

20. `/jacucara` foi **criada em 2026-08-25** como migração `Legacy-first` da página
    PRINCIPAL do projeto Jacuçara do site antigo (`pages/jacucara/index.js`), por direção
    direta do usuário. Não há frame no Figma para esta rota. **Não confundir** com a
    descritiva `/programas-e-projetos/campanha-jacucara` (Figma-first), que só teve o link
    de fecho trocado de `https://www.oama.eco.br/jacucara` para `/jacucara`. Página 100%
    Astro, sem dependência nova (sanfona via `<details>`). Assets otimizados de 14 MB para
    4,6 MB. Redirect de `/jacucara` removido de `vercel.json`; rota adicionada ao sitemap.
    Ver `docs/implementation/pages/jacucara.md`.

## Saúde do projeto
- Build: passando no último ciclo conhecido.
- Estrutura de documentação:
  - `AGENT.md` → regras de implementação
  - `docs/implementation/` → briefs e inventário
  - `docs/agent-workflow/` → orquestração, backlog, handoff e playbooks

## Próxima postura recomendada
- Trabalhar sempre por task explícita.
- Priorizar a trilha `Figma-first` antes das rotas híbridas/legadas.
- Resolver primeiro as páginas e hubs que já possuem frames claros no Figma.
- Seguir a fila serial definida em `LINEAR_LOCAL_ALIGNMENT.md`, sem abrir múltiplas issues de implementação ao mesmo tempo.
- Em ProAves, manter a separação já validada e só revisitar a camada legado/resultados se isso voltar a virar requisito explícito.
- Deixar `apoie` para a etapa posterior de acabamento/auditoria híbrida.
