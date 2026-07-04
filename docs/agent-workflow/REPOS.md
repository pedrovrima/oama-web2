# REPOS

## Repo principal
- base repo: `/Users/anhinga/Projetos/oama-web2`
- worktree: `não configurado atualmente`
- branch: verificar com `git status` / `git branch --show-current` antes de iniciar uma task
- role: implementação do novo site Astro do OAMa
- status: repo ativo principal

## Fonte externa 1 — site antigo
- path: `/Users/anhinga/Projetos/oama-website`
- role: fonte de migração de páginas legadas em Next.js
- usar quando: a task for `Legacy-first` ou `Hybrid`
- cuidado: não assumir que uma página legada equivale automaticamente ao Figma atual

## Fonte externa 2 — Figma exportado
- path base: `/Users/anhinga/Projetos/oama-web2/design-assets/`
- role: fonte visual e estrutural de páginas `Figma-first`
- principais insumos:
  - `design-assets/figma-analysis/selection-analysis.md`
  - `design-assets/figma-exports/selection/`

## CMS
- Sanity projectId: `1tnejkhf`
- dataset: `production`
- usar quando: a task exigir conteúdo gerenciável, conforme `AGENT.md`

## Agentes/CLIs conhecidos
- `pi`: `/opt/homebrew/bin/pi`
- `opencode`: `/opt/homebrew/bin/opencode`

## Build / comandos
```bash
PATH="$HOME/.local/bin:/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin" npm run build
PATH="$HOME/.local/bin:/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin" npm run dev
```

## Observação operacional
Mesmo com um único repo principal, este arquivo existe para deixar claro:
- onde o código vive
- onde buscar o legado
- onde buscar o Figma
- quando usar Sanity
