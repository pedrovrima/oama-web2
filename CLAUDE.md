# CLAUDE.md — OAMa Website 2

Leia este arquivo **sempre** antes de começar qualquer trabalho neste repositório.

## Idioma
- Conversa com o usuário: **português**.
- Código e documentação do projeto: **português**, salvo quando houver motivo forte para usar inglês (API externa, nomes de campos, libs, etc.).
- Commits: preferencialmente em português.

## Papel do agente neste projeto
Você está trabalhando no novo site do **OAMa** em Astro.
Seu papel aqui não é “sair implementando páginas” sem contexto: você deve atuar como um **agente dirigido por documentação**, com retomada fácil por outros agentes.

Este projeto deve funcionar no estilo OmniScience:
1. Ler o contexto local.
2. Entender a task ativa.
3. Consultar Figma/exportações/site antigo/Sanity quando necessário.
4. Executar uma task com escopo fechado.
5. Registrar o resultado de forma reutilizável.

## Ordem obrigatória de leitura ao iniciar ou retomar trabalho
Antes de implementar qualquer coisa, leia nesta ordem:

1. `docs/agent-workflow/README.md`
2. `docs/agent-workflow/STATUS.md`
3. `docs/agent-workflow/REPOS.md`
4. `docs/agent-workflow/SUBTASKS.md`
5. `docs/agent-workflow/HANDOFF.md`
6. `AGENT.md`
7. `docs/implementation/orchestration.md`
8. o documento específico da página/task, se existir em `docs/implementation/pages/`

## Credenciais e variáveis de ambiente

**`.env.example`** (versionado) lista TODAS as variáveis que o projeto usa, com o
que cada uma faz e onde gerar. **`.env`** (gitignored, nunca versionado) guarda os
valores reais.

- Build e `astro dev` funcionam **sem nenhum segredo**: o Sanity é lido do dataset
  público e o snapshot do Stripe está commitado.
- Só precisam de credencial os scripts que **escrevem** em serviço externo —
  hoje `scripts/blog/importar-posts.mjs` (precisa de `SANITY_WRITE_TOKEN`).
- Se um script falhar por falta de credencial: **pare e avise o usuário.** Não
  contorne, não invente valor, não desabilite a verificação.
- **Nunca** imprima o valor de um segredo em log, relatório ou mensagem, nem
  commite `.env`.

## Fontes de verdade
Use esta prioridade:

1. Mensagem mais recente do usuário
2. Este `CLAUDE.md`
3. `docs/agent-workflow/*.md`
4. `AGENT.md`
5. `docs/implementation/pages/*.md`
6. Figma exportado/analisado em `design-assets/`
7. Site antigo em `/Users/anhinga/Projetos/oama-website`

Se duas fontes conflitarem, **não invente**. Registre o conflito e peça direção do usuário se necessário.

## Regra de ouro deste repo
**Não tratar aproximação como fidelidade.**
Se a página precisa seguir Figma, siga o Figma. Se a página precisa ser migrada do site antigo, siga o site antigo. Se houver as duas coisas, documente claramente qual fonte está sendo usada para cada rota.

## Estrutura operacional
A coordenação de trabalho deste repo vive em:

- `docs/agent-workflow/README.md` — como trabalhar aqui
- `docs/agent-workflow/STATUS.md` — estado atual real
- `docs/agent-workflow/REPOS.md` — repo/base, build, Sanity, site antigo
- `docs/agent-workflow/SUBTASKS.md` — fila priorizada de tasks
- `docs/agent-workflow/HANDOFF.md` — contexto de retomada
- `docs/agent-workflow/templates/TASK_TEMPLATE.md` — template de nova task

## Regras de execução

### 1) Toda task precisa ser documentável
Antes de despachar outro agente ou fazer mudança grande:
- localizar a task em `docs/agent-workflow/SUBTASKS.md`; ou
- criar uma nova entrada de task usando o template.

### 2) Implementação orientada por fonte
Cada task deve declarar explicitamente uma destas categorias:
- **Figma-first** — implementar conforme exportações/análise do Figma
- **Legacy-first** — migrar do site antigo em Next.js
- **CMS-first** — estruturar com foco em Sanity
- **Hybrid** — combinar fontes, com decisão explícita por seção

### 3) Build obrigatório
Antes de declarar sucesso:
```bash
PATH="$HOME/.local/bin:/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin" npm run build
```

### 4) Revisão obrigatória
Se um agente externo implementar algo, não aceite o autorrelato. Revise:
- arquivo alterado
- aderência à fonte correta
- placeholders proibidos (`href="#"`, `action="#"`)
- resultado do build

### 5) Sanity não é padrão automático
Sanity só entra quando o conteúdo for de fato gerenciável e isso estiver claro na task. Caso contrário, manter hardcoded conforme `AGENT.md`.

## Workflow recomendado por task
1. Ler contexto obrigatório.
2. Escolher a task ativa em `SUBTASKS.md`.
3. Confirmar a fonte principal (Figma / legado / Sanity).
4. Atualizar ou criar doc da task/página.
5. Implementar com escopo fechado.
6. Rodar build.
7. Atualizar `STATUS.md`, `HANDOFF.md` e `SUBTASKS.md`.

## O que evitar
- Não sobrescrever uma rota de “migração do site antigo” com uma versão derivada do Figma sem registrar isso.
- Não afirmar fidelidade visual sem checar a exportação correspondente.
- Não tratar docs antigos como atualizados por padrão.
- Não abrir várias frentes conflitantes ao mesmo tempo se elas mexem no mesmo hub/rota.

## Definição de pronto
Uma task só está pronta quando:
- a fonte de verdade usada está explícita;
- os arquivos afetados estão claros;
- o build passou;
- o estado foi registrado em `docs/agent-workflow/`;
- pendências e ambiguidades foram documentadas.
