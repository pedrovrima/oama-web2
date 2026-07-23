# STATUS

## Estado geral
- Projeto: `oama-web2`
- Stack confirmada: Astro 5 + Tailwind v4 + Sanity + Vercel
- Fonte visual principal: Figma exportado em `design-assets/figma-exports/selection/`
- Fonte de migração: site antigo em `/Users/anhinga/Projetos/oama-website`
- Linear: acesso válido confirmado para `Pedro Martins` no time `PED`
- Backlog Linear já existe; a orquestração local continua em `docs/agent-workflow/`

## Estado operacional atual
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
