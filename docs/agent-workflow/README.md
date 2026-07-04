# Agent Workflow Hub — OAMa Website 2

Este diretório adapta para o `oama-web2` o estilo de trabalho que você usa na OmniScience: contexto centralizado, retomada limpa, tasks explícitas e handoff entre agentes.

## Objetivo
Permitir que qualquer agente trabalhe neste repo sem depender de contexto implícito da conversa.

## Arquivos deste hub
- `README.md` — como trabalhar aqui
- `STATUS.md` — estado atual real do projeto
- `REPOS.md` — mapa dos repositórios, build e fontes externas
- `SUBTASKS.md` — fila de trabalho priorizada
- `HANDOFF.md` — memória operacional curta para retomada
- `templates/TASK_TEMPLATE.md` — template para criar ou resetar uma task

## Como iniciar uma nova task
1. Ler `CLAUDE.md` e este diretório.
2. Procurar a task em `SUBTASKS.md`.
3. Se não existir, criar uma nova entrada inspirada no template.
4. Declarar a categoria da task:
   - Figma-first
   - Legacy-first
   - CMS-first
   - Hybrid
5. Registrar arquivos-alvo e critérios de aceite.

## Como retomar uma task existente
1. Ler `STATUS.md`
2. Ler `SUBTASKS.md`
3. Ler `HANDOFF.md`
4. Abrir o doc específico da página/task em `docs/implementation/pages/`
5. Só então editar código

## Convenção para tarefas deste projeto
Como este repo não é Jira-driven por padrão, use IDs simples e estáveis, por exemplo:
- `TASK-001-hub-programas`
- `TASK-002-pro-aves-legacy`
- `TASK-003-cursos-figma`

## Critérios mínimos de uma task boa
Toda task deve declarar:
- objetivo
- fonte principal
- rotas envolvidas
- arquivos permitidos
- critérios de aceite
- verificação final

## Verificação final padrão
```bash
PATH="$HOME/.local/bin:/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin" npm run build
```

## Regra de atualização do hub
Sempre que uma task mudar o estado do projeto, atualizar:
- `STATUS.md`
- `SUBTASKS.md`
- `HANDOFF.md`

Sem isso, a task não está realmente pronta para outro agente continuar.
