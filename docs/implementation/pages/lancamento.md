# TASK-LAUNCH-001 — Auditoria e preparação para lançamento

- status: `in_progress`
- tipo: `Launch-first` (integração + QA; não introduz CMS)

## Objetivo
Preparar o OAMa Website 2 para lançamento, priorizando defeitos que bloqueiem uso em produção: rotas, links, assets, responsividade e inscrição na newsletter. Conteúdo sem operação editorial definida permanece hardcoded. Esta task não cria schemas, não migra conteúdo ao Sanity e não reabre Home ou Sobre.

## Rotas envolvidas
- todas as rotas públicas do build;
- `/newsletter` e formulário global do rodapé;
- `/pix` apenas para validar estados e links já existentes.

## Fontes de verdade
- mensagem do usuário: foco em lançamento; CMS posterior;
- Figma MCP Go, documento ativo `Abas Website OAMa` (Page 1): auditar frames desktop e celular pela composição/rota e proximidade no canvas, nunca por suposição de que são redimensionamentos ou por nomes inconsistentes;
- `CLAUDE.md`, `AGENT.md`;
- `docs/agent-workflow/REVISAO_FIGMA_2026-06-12.md`;
- `docs/implementation/pages/newsletter.md`;
- repositório irmão `/Users/anhinga/Projetos/newsletter-oama` para o endpoint real.

## Escopo inicial
> Atualização 2026-07-20: o usuário autorizou implementar o restante do site para lançamento, mas determinou que **nenhum conteúdo ou bloco visual seja omitido**. Quando faltar dado oficial, preservar a estrutura e registrar a necessidade de conteúdo para preenchimento posterior; não inventar destinos, dados PIX, logos ou copy. O usuário também autorizou recuperar todo conteúdo verificável do legado (`/Users/anhinga/Projetos/oama-website`); em conflitos visuais, Figma continua vencendo e o legado fornece conteúdo, destinos e assets.

1. Inventariar rotas, links, formulários e dependências externas.
2. Verificar a preparação/deploy do mailer e o fluxo real de double opt-in.
3. Executar QA visual e funcional desktop/mobile das rotas públicas.
4. Corrigir exclusivamente defeitos bloqueadores de lançamento, após revisão.
5. Registrar bloqueadores externos (credenciais, domínio, dados PIX ou destinos ainda não fornecidos).

## Arquivos permitidos
- `src/**`, `public/**`, `scripts/**` somente quando o diagnóstico justificar;
- `docs/agent-workflow/{STATUS,SUBTASKS,HANDOFF}.md`;
- `docs/implementation/pages/lancamento.md`;
- no mailer: somente arquivos necessários à newsletter, em task explícita e revisão separada.

## Arquivos proibidos nesta task
- `src/sanity/**` e schemas do Sanity;
- layout/conteúdo da Home e Sobre;
- mudanças cosméticas que não sejam bloqueadoras;
- uso de Fable sob qualquer hipótese.

## Critérios de aceite
- [ ] build de produção passa;
- [ ] não há `href="#"`, formulários falsos ou placeholders de produção nas rotas auditadas;
- [ ] rotas, links internos, PDFs, loja, redes e doações foram verificados ou classificados como dependência externa;
- [ ] newsletter tem fluxo de produção validado ou bloqueador de deploy documentado com precisão;
- [ ] QA browser desktop e mobile não revela quebra de renderização;
- [ ] CMS permanece fora do escopo;
- [ ] documentação operacional atualizada.

## Verificação
```bash
PATH="$HOME/.local/bin:/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin" npm run build
```

## Orquestração e modelos
- Pi: conta `openai-pedro`, para scouts, inventário e revisão objetiva.
- Claude Code: auditoria independente e correções pequenas, sempre com escopo fechado. Todo novo painel Claude deve ser iniciado com `claude --dangerously-skip-permissions`, por direção do usuário; painéis Claude já iniciados sem essa flag exigem supervisão contínua de prompts/bloqueios.
- Não usar Fable sob qualquer hipótese.
- Nenhum agente pode declarar sucesso sem evidência revisável; build não substitui QA no browser.

## Riscos e dependências
- O endpoint da newsletter depende do deploy do repositório `newsletter-oama`, lista `newsletter` no Supabase, envs de e-mail e CORS do domínio final.
- Chave/QR PIX e destinos reais de alguns cards dependem de informação do OAMa; não inventar substitutos.
