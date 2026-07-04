# TASK-XXX — Título da task

- status: `pending`
- tipo: `Figma-first | Legacy-first | CMS-first | Hybrid`

## Objetivo
Descreva em 2–5 linhas o que precisa ser feito.

## Rotas envolvidas
- `/rota-exemplo`

## Fontes de verdade
- `design-assets/...`
- `/Users/anhinga/Projetos/oama-website/...`
- `AGENT.md`
- `docs/implementation/pages/...`

## Arquivos permitidos
- `src/pages/...`
- `docs/implementation/pages/...`

## Arquivos de referência
- `src/pages/...`
- `src/components/...`

## Critérios de aceite
- [ ] Implementação segue a fonte principal declarada
- [ ] Não mistura Figma e legado sem documentar
- [ ] Não cria placeholders proibidos
- [ ] Build passa

## Verificação
```bash
PATH="$HOME/.local/bin:/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin" npm run build
```

## Observações / riscos
- Liste ambiguidades, dependências, assets faltantes e decisões que precisam de validação.
