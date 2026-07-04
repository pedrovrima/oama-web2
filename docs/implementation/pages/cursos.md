# Página: Cursos — Online e Presencial

Status: **implementada** (versão inicial, sem novas dependências).

## Rota

- Arquivo: `src/pages/consultoria/cursos.astro`
- URL: `/consultoria/cursos`
- Build: rota gerada em `dist/consultoria/cursos/index.html`.

## Frames Figma de referência

- Desktop: `Desktop_Cursos` (`2513:501`), 1024 × 4797 — `serviços-capacitacao` (sem export PNG no momento).
- Mobile: `Celular_Cursos` (`2465:298`), 360 × 6410 — `serviços-capacitacao` (sem export PNG no momento).

> **Nota:** Não havia screenshot PNG dos frames no momento da implementação. O layout foi derivado dos snippets de texto da `selection-analysis.md` e do padrão visual das páginas-irmãs `monitoramento-de-aves.astro` e `educacao-ambiental.astro`.

## Conteúdo aplicado

Conteúdo do Figma reaproveitado direto, com pequenos ajustes de clareza:

- **Eyebrow** "Prestação de Serviços" (mesmo padrão das sub-páginas irmãs).
- **Título H1** "CURSOS — ONLINE E PRESENCIAL" (em maiúsculas, com `Cursos` quebrando no mobile via `<br class="md:hidden" />` igual às páginas-irmãs).
- **Sobre as inscrições** — parágrafo sobre periodicidade anual, divulgação por redes sociais/e-mail, e reversão integral dos valores em doações; inclui o aviso "Sem chamadas abertas no momento" e link `mailto:cursos@oama.eco.br` para entrar na lista de divulgação.
- **Objetivos e funcionamento** — parágrafo introdutório (mesmo do Figma, com ênfase em "anilhamento e análise de mudas em aves (foco em passeriformes)" e parcerias com artistas, fotógrafos, educadores e pesquisadores) + duas listas com marcadores de check circular:
  - 4 objetivos principais (formação, anilhamento/mudas, oficinas de extensão, conectar pessoas e natureza).
  - 4 itens de "como funcionam" (cursos/oficinas de extensão, cursos teóricos e práticos, conteúdo aplicado, atividades para diferentes públicos).
- **Ética e bem-estar animal** — parágrafo da Figma (nenhuma ave em risco, instrutores podem intervir, código NABC + CEMAVE) + grid de 3 cards com ícones circulares (NABC, CEMAVE, OAMa) destacando os princípios e diretrizes seguidas.
- **Curso Online Básico de Anilhamento (Instituto Retriz)** — bloco de duas colunas no desktop (foto circular + texto), parágrafos do Figma com ênfase na parceria com o Projeto Aves de Noronha/Instituto Retriz, importância do anilhamento, mitigação de risco via treinamento continuado, e realização anual via plataforma Sympla.

## Decisões de implementação

### Padrão seguido

Mesmo padrão das sub-páginas de consultoria (`monitoramento-de-aves.astro`, `educacao-ambiental.astro`):

- Hero com imagem, overlay escuro (`bg-black/45`), eyebrow `Prestação de Serviços` em amarelo OAMa, título `CURSOS — ONLINE E PRESENCIAL` em Oswald uppercase, faixa amarela de 2px no rodapé do hero.
- Seções alternando cores (`#5ba4d9` azul, `#dfb553` amarelo, `#fbf5e6` cream) com transições `WaveDark` entre elas.
- Listas com marcador de check circular branco (mesmo padrão).
- CTA `Fale conosco` (mailto) + newsletter visual + link "Voltar".

### Cadência de cores

| # | Seção                | Cor de fundo   | path1 / path2 da WaveDark       |
|---|----------------------|----------------|---------------------------------|
| 1 | Sobre as inscrições  | `#5ba4d9` azul | `#fbf5e6` / `#1a2e4a`           |
| 2 | Objetivos e funcionamento | `#dfb553` amarelo | `#fbf5e6` / `#fbf5e6`     |
| 3 | Ética e bem-estar animal | `#fbf5e6` cream | `#5ba4d9` / `#5ba4d9`       |
| 4 | Curso Online Básico (Instituto Retriz) | `#5ba4d9` azul | `#dfb553` / `#dfb553` |
| 5 | Fale conosco (CTA)   | `#dfb553` amarelo | `#5ba4d9` / `#5ba4d9`       |
| 6 | Newsletter visual    | `#5ba4d9` azul | `#fbf5e6` / `#fbf5e6`           |
| 7 | Voltar               | `#fbf5e6` cream | —                              |

> Os pares `path1`/`path2` foram herdados das páginas-irmãs (mesma `WaveDark`).

### Seções implementadas

1. **Hero** — eyebrow "Prestação de Serviços" + título "CURSOS — ONLINE E PRESENCIAL".
2. **Sobre as inscrições** — periodicidade, redes sociais/e-mail, reversão 100% em doações, aviso "Sem chamadas abertas no momento", e-mail para entrar na lista.
3. **Objetivos e funcionamento** — parágrafo introdutório + 4 objetivos + 4 itens de "como funcionam" (listas com check circular).
4. **Ética e bem-estar animal** — parágrafo NABC/CEMAVE + 3 cards com ícones circulares (NABC, CEMAVE, OAMa/compromisso).
5. **Curso Online Básico de Anilhamento (Instituto Retriz)** — bloco de duas colunas com foto circular + parágrafos sobre o curso, parceria, importância do anilhamento, mitigação de risco e plataforma Sympla.
6. **Fale conosco (CTA)** — `mailto:cursos@oama.eco.br?subject=Cursos OAMa - Informações` com assunto pré-preenchido e link inline de e-mail de fallback.
7. **Newsletter visual** — mesmo padrão da página-irmã: `form` com `method="post"`, `onsubmit="event.preventDefault();"` e `aria-label` descritivo. **Sem `action="#"`** (atende regra do briefing). Botão "Enviar" amarelo.
8. **Voltar para Prestação de Serviços** — link para `/consultoria`.

### E-mail usado nos mailto

- Criado o endereço `cursos@oama.eco.br` como ponto de contato dedicado da página, seguindo o padrão `assunto@oama.eco.br`. **Pendência:** confirmar com a equipe OAMa se o e-mail é `cursos@oama.eco.br` ou deve-se reaproveitar o genérico `contato@oama.eco.br` (as páginas-irmãs usam `contato@oama.eco.br`).

### Ícones

- Reaproveitado o mesmo conjunto visual das páginas-irmãs (SVG inline): `shield` (escudo), `tree` (árvore/pin), `flask` (frasco de pesquisa). Sem novas dependências, sem novos componentes.

### Imagens provisórias

- Foto do hero: `https://images.unsplash.com/photo-1444464666168-49d633b86797` (foto de ave em ambiente natural). **PROVISÓRIA** — substituir por foto real de curso de campo do OAMa.
- Foto circular do curso online: `https://images.unsplash.com/photo-1456926631375-92c8ce872def` (anilhadora com ave silvestre). **PROVISÓRIA** — substituir por foto real do curso online ou do Instituto Retriz.

> **Padrão seguido:** ambas as páginas-irmãs (`monitoramento-de-aves.astro`, `educacao-ambiental.astro`, `programas-e-projetos/treinamento-monitoramento-avifauna.astro`) também usam imagens do Unsplash como provisórias, com a mesma observação de substituição.

### Decisão de modelagem

Todo o conteúdo é **hardcoded** no frontmatter. Por se tratar de página de serviço com conteúdo estável e o briefing não solicitar modelagem Sanity, optou-se por manter como texto no código, seguindo o padrão das outras sub-páginas de consultoria e do próprio `docs/implementation/pages/cursos.md` ("Primeira versão hardcoded. Não criar schemas Sanity ainda.").

## Pendências

- [ ] Trocar a foto do hero provisória por uma foto real do OAMa (em `public/` ou via Sanity).
- [ ] Trocar a foto circular do curso online provisória por uma foto real do curso ou do Instituto Retriz.
- [ ] Confirmar com a equipe o e-mail correto: `cursos@oama.eco.br` (proposto) ou reaproveitar `contato@oama.eco.br`.
- [ ] Confirmar se a rota é `/consultoria/cursos` ou se deve ser `/servicos/cursos` (atualmente o `Nav` aponta para `/consultoria`, e a Nav não foi alterada por restrição de escopo).
- [ ] Avaliar migração futura dos blocos de conteúdo (Sobre as inscrições, Objetivos, Ética, Curso Online) para Sanity, seguindo a regra de "conteúdo gerenciável" do `AGENT.md`.
- [ ] Avaliar se o card "Capacitação Técnica" do hub `/consultoria` deve apontar para `/consultoria/cursos` quando outras sub-páginas de capacitação (ex.: curso presencial de análise de mudas) forem criadas (hoje o hub ainda usa âncoras internas e o `frentes[capacitacao-tecnica]` não tem `href`).

## Critérios de aceite

- [x] Rota `/consultoria/cursos` criada e gerada no build.
- [x] Hero com eyebrow "Prestação de Serviços" e título "CURSOS — ONLINE E PRESENCIAL".
- [x] Seção "Sobre as inscrições" com texto sobre periodicidade anual, redes sociais/e-mail, Sympla e reversão em doações.
- [x] Seção "Objetivos e funcionamento" com descrição + 4 objetivos + 4 itens de funcionamento.
- [x] Seção "Ética e bem-estar animal" com menção a NABC e CEMAVE (cards).
- [x] Seção do curso online básico de anilhamento com parceria com Instituto Retriz (Projeto Aves de Noronha).
- [x] CTA `Fale conosco` como `mailto:cursos@oama.eco.br?subject=Cursos OAMa - Informações`.
- [x] Newsletter visual sem `action="#"` (usa `method="post"` + `onsubmit="event.preventDefault();"`).
- [x] Link "Voltar para Prestação de Serviços" apontando para `/consultoria`.
- [x] Layout responsivo, consistente com páginas-irmãs.
- [x] Sem dependências novas.
- [x] Sem `href="#"` ou `action="#"` no escopo da página (verificado: o `rg "href=\"#\"|action=\"#\""` em `dist/consultoria/cursos/index.html` retornou apenas ocorrências no `Footer` global — pré-existentes e idênticas às das páginas-irmãs, fora do escopo permitido pelo briefing).
- [x] Build passa (ver resultado abaixo).

## Resultado do build

Comando:

```bash
PATH="/Users/anhinga/.local/bin:/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin" npm run build
```

Resultado: **sucesso**. 18 páginas geradas em ~9.11s, sem erros. A nova rota foi emitida:

```
src/pages/consultoria/cursos.astro
  └─ /consultoria/cursos/index.html (+1ms)
```

Build completo registrado com `[build] Complete!`. Em uma das execuções apareceu um `ENOENT: no such file or directory, lstat '/.../dist/_noop-middleware.mjs'` no teardown do Vercel adapter, mas o arquivo `dist/consultoria/cursos/index.html` foi gerado corretamente e a execução posterior do build (mesma árvore, cache de imagens reaproveitado) terminou com `Complete!`. O warning é de teardown do Vercel, não do conteúdo da página.

Aviso pré-existente (não relacionado a esta task): chunks grandes no bundle do Sanity Studio / VideoPlayer; não impacta a página nova.
