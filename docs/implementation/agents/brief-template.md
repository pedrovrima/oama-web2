# Template de briefing para subagentes — OAMa Website 2

```markdown
Você está trabalhando no projeto Astro do OAMa em `/Users/anhinga/Projetos/oama-web2`.

## Contexto obrigatório

Leia antes de alterar arquivos:

- `AGENT.md`
- `docs/implementation/orchestration.md`
- `docs/implementation/pages/<pagina>.md`
- `design-assets/figma-analysis/selection-analysis.md`

Stack:

- Astro 5
- Tailwind CSS v4
- Sanity CMS
- React islands apenas se necessário

Regras:

- Código e documentação em português.
- Mobile-first, mas respeitando diferenças mobile/desktop do Figma.
- Reutilizar componentes existentes quando possível.
- Não criar schema Sanity novo sem necessidade clara.
- Não adicionar `href="#"` sem registrar pendência.
- Não tocar arquivos fora do escopo.

## Tarefa

[descrever tarefa exata]

## Arquivos permitidos

[listar]

## Arquivos de referência

[listar]

## Critérios de aceite

- [ ] Página/rota implementada.
- [ ] Layout responsivo mobile/desktop.
- [ ] Conteúdo principal do Figma representado.
- [ ] Componentes existentes reaproveitados.
- [ ] Decisões hardcoded vs Sanity seguem `AGENT.md`.
- [ ] Build passa:

```bash
PATH="$HOME/.local/bin:/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin" npm run build
```

## Saída esperada

Responder com:

1. Arquivos alterados.
2. Decisões tomadas.
3. Pendências/dúvidas.
4. Resultado do build.
```
