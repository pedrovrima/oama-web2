# OAMa Website 2

Novo site do OAMa em **Astro 5 + Tailwind v4 + Sanity**, com implementação orientada por Figma e migração seletiva do site antigo em Next.js.

## Objetivo do repositório
Este projeto está sendo construído página por página, combinando:
- layouts vindos do Figma exportado em `design-assets/`
- conteúdo e comportamento herdados do site antigo em `/Users/anhinga/Projetos/oama-website`
- decisões sobre hardcoded vs Sanity registradas em `AGENT.md`

## Como agentes devem trabalhar aqui
Este repo foi preparado para trabalho dirigido por agentes.

### Ordem de leitura obrigatória
1. `CLAUDE.md`
2. `docs/agent-workflow/README.md`
3. `docs/agent-workflow/STATUS.md`
4. `docs/agent-workflow/REPOS.md`
5. `docs/agent-workflow/SUBTASKS.md`
6. `docs/agent-workflow/HANDOFF.md`
7. `AGENT.md`

## Estrutura principal
```text
src/                      # páginas e componentes Astro
public/                   # assets estáticos
design-assets/            # exportações e análises do Figma
docs/implementation/      # briefs e docs por página
docs/agent-workflow/      # camada de orquestração estilo OmniScience
```

## Comandos principais
```bash
npm install
npm run dev
npm run build
```

Com PATH completo usado nas automações:
```bash
PATH="$HOME/.local/bin:/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin" npm run build
```

## Fontes de verdade possíveis
Cada task precisa dizer explicitamente qual fonte manda:
- **Figma-first**
- **Legacy-first**
- **CMS-first**
- **Hybrid**

## Observação importante
Nem toda rota deste projeto vem da mesma origem.
Algumas páginas devem seguir o Figma; outras precisam ser migradas do site antigo. O agente deve registrar isso antes de implementar.
