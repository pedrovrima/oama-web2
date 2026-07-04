# Orquestração da implementação — OAMa Website 2

> **Projeto:** `/Users/anhinga/Projetos/oama-web2`  
> **Papel do Hermes:** orquestrador de contexto, documentação, delegação e revisão.

## Objetivo

Completar o novo site do OAMa em Astro, usando:

- o Figma exportado/analisado em `design-assets/` como referência visual;
- o projeto Astro atual como base;
- o Sanity como CMS quando o conteúdo for gerenciável;
- o site antigo em Next.js como fonte para páginas de migração quando necessário.

## Estado verificado

- Projeto Astro em `/Users/anhinga/Projetos/oama-web2`.
- Stack: Astro 5, Tailwind CSS v4, Sanity, React quando necessário.
- Sanity: projectId `1tnejkhf`, dataset `production`.
- `pi` disponível em `/opt/homebrew/bin/pi`.
- `opencode` disponível em `/opt/homebrew/bin/opencode`.
- Node/npm disponíveis com PATH completo:

```bash
PATH="$HOME/.local/bin:/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"
```

## Decisão de modelo/agente

Pesquisa em `https://opencode.ai/go` indica que o OpenCode Go inclui modelos como **GLM-5.1**, **GLM-5**, **Kimi K2.6**, **Kimi K2.5**, **MiniMax M3**, **DeepSeek V4 Pro** e outros. A própria página descreve o Go como acesso a modelos open-source capazes para agentic coding.

Para coding complexo, a pesquisa externa aponta **GLM-5.1** como primeira escolha quando disponível. Porém, no CLI local, os modelos Go pagos não aparecem em `opencode models`; o ambiente atual lista apenas modelos `opencode/*-free` e modelos OpenAI OAuth.

Testes locais executados:

- `opencode run --model opencode/glm-5.1 ...` → modelo não encontrado; CLI sugeriu `glm-5.1`, mas a execução também falhou.
- `opencode run --model opencode/kimi-k2.6 ...` → modelo não encontrado; CLI sugeriu `kimi-k2.6`, mas a execução também falhou.
- `opencode run --model opencode/minimax-m3-free ...` → executou com sucesso.

**Decisão operacional atual:** usar `opencode/minimax-m3-free` como melhor modelo OpenCode disponível localmente, até que o login/assinatura OpenCode Go exponha `glm-5.1` ou `kimi-k2.6` no CLI.

Comando padrão para agentes:

```bash
PATH="$HOME/.local/bin:/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin" \
  opencode run --model opencode/minimax-m3-free "<briefing>"
```

Se `glm-5.1` ficar disponível, trocar para:

```bash
opencode run --model opencode/glm-5.1 "<briefing>"
```

ou pelo identificador exato listado em `opencode models`.

## Regras do projeto

Seguir `AGENT.md`:

- Código/documentação em português.
- Perguntar antes de decisões de design ambíguas.
- Mobile e desktop podem ser designs separados.
- Sanity para conteúdo gerenciável; hardcoded para UI, navegação, labels e SEO.
- Rodar build antes de considerar pronto.

## Fluxo por página

1. Documentar a página em `docs/implementation/pages/<slug>.md`.
2. Criar briefing fechado para agente.
3. Rodar agente com escopo de arquivos permitido.
4. Revisar diff.
5. Rodar build.
6. Atualizar documentação com resultado/pendências.

## Gates

- **Gate 1 — Documentação:** sem doc mínima da página, não delegar.
- **Gate 2 — Escopo:** agente recebe arquivos permitidos e arquivos que não deve tocar.
- **Gate 3 — Build:** `npm run build` precisa passar.
- **Gate 4 — Revisão Hermes:** Hermes revisa diff antes de reportar sucesso.

## Prioridade inicial

1. `areas-de-atuacao` — página hub importante, já aparece no Figma e desbloqueia links da Home.
2. `programas-e-projetos` — hub de programas/projetos.
3. `consultoria` / prestação de serviços — hub + frentes de atuação.
4. `realizacoes` — downloads/documentários/blog/textos acadêmicos.
5. `proaves` e `poi` — migração do antigo Next.js + Sanity.
