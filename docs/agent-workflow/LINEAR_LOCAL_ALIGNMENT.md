# Alinhamento Linear ↔ Workflow local

## Objetivo
Manter o **Linear como sistema oficial de gestão** e o diretório `docs/agent-workflow/` como **camada operacional para orquestração de agentes**.

## Regra operacional desta fase
- Trabalhar **uma issue do Linear por vez**.
- Só deixar **uma issue em `In Progress`** por vez.
- Toda issue ativa deve ter reflexo local em `SUBTASKS.md` e `HANDOFF.md`.
- O backlog local pode ser mais descritivo que o Linear, mas não pode contradizer o status oficial.

## Estado validado nesta rodada
- `PED-31` foi verificada no código e no build.
- A separação entre:
  - `/programas-e-projetos/acoes-pro-aves`
  - `/programas-e-projetos/pro-aves`
  já está materializada.
- Build validado com sucesso em `npm run build`.

## Matriz de fonte por rota
| Rota | Fonte principal | Observação |
|---|---|---|
| `/` | `Figma-first` | revisar frame a frame depois dos hubs |
| `/sobre` | `Figma-first` | revisão por componentes |
| `/missao` | `Figma-first` | revisar fidelidade visual/textual |
| `/areas-de-atuacao` | `Figma-first` | reduzir provisórios |
| `/realizacoes` | `Figma-first` | precisa links reais e estrutura mais fiel |
| `/consultoria` | `Figma-first` | hub visual curto |
| `/consultoria/monitoramento-de-aves` | `Figma-first` | filha |
| `/consultoria/educacao-ambiental` | `Figma-first` | filha |
| `/consultoria/capacitacao-tecnica` | `Figma-first` | filha |
| `/consultoria/cursos` | `Figma-first` | filha sensível; revisar com atenção |
| `/programas-e-projetos` | `Figma-first` | hub visual curto |
| `/programas-e-projetos/monitoramento-de-avifauna` | `Figma-first` | filha |
| `/programas-e-projetos/treinamento-monitoramento-avifauna` | `Figma-first` | filha |
| `/programas-e-projetos/acoes-pro-aves` | `Figma-first` | camada descritiva principal |
| `/programas-e-projetos/projetos-de-pesquisa` | `Figma-first` | filha |
| `/programas-e-projetos/campanha-jacucara` | `Figma-first` | filha |
| `/programas-e-projetos/fundraising-field-trip` | `Figma-first` | filha |
| `/programas-e-projetos/pro-aves` | `Legacy-first` | camada de resultados/acervo legado |
| `/apoie` | `Hybrid` | adiada; sem frame Figma confiável atual |
| conteúdo Sanity futuro | `CMS-first` | só após estabilização visual |

## Mapeamento local → Linear

### Faixa 0 — concluída
- `TASK-110` → `PED-31`
  - status operacional: **concluída e validada**
  - observação: manter possibilidade futura de slug ainda mais explícito para a camada legado/resultados, sem bloquear a fase atual.

### Faixa 1 — hubs principais Figma-first
- `TASK-040` → `PED-33`
  - rota: `/programas-e-projetos`
  - papel: primeiro hub da fila serial
- `TASK-030` → `PED-32`
  - rota: `/consultoria`
  - papel: segundo hub da fila serial

### Faixa 2 — páginas filhas
- `TASK-031` + `TASK-032` + `TASK-033` + `TASK-034` → `PED-34`
- `TASK-041` + `TASK-042` + `TASK-044` + `TASK-045` + `TASK-046` → `PED-40`

### Faixa 3 — páginas principais restantes
- `TASK-020` → `PED-37`
- `TASK-021` → `PED-38`
- `TASK-023` → `PED-39`
- `TASK-024` → `PED-36`
- `TASK-022` → `PED-41`
  - rota: `/missao`
  - criada no Linear por direção do usuário e aberta como issue ativa.

### Faixa 4 — híbrido e CMS
- `TASK-051` / `TASK-140` → `PED-35`
- `TASK-060` / `TASK-130` → trilha Sanity local (sem issue ativa nesta fase)

## Fila serial recomendada para orquestração
### Já concluídas nesta fase
1. `PED-31` — separar `acoes-pro-aves` e `pro-aves`
2. `PED-32` — reconstruir `/consultoria`
3. `PED-33` — reconstruir `/programas-e-projetos`
4. `PED-34` — revisar filhas de consultoria

### Fila restante
5. `PED-40` — revisar filhas de programas e projetos — concluída
6. `PED-41` — missão — concluída
7. `PED-39` — áreas de atuação — concluída nesta rodada
8. `PED-36` — realizações — concluída nesta rodada
9. `PED-35` — apoie — concluída nesta rodada
10. `PED-37` — homepage — pular nesta rodada por direção do usuário
11. `PED-38` — sobre — pular nesta rodada por direção do usuário
12. `PED-42` — criar `/pix` referenciada por `/apoie` — concluída
13. trilha Sanity (`TASK-060` / `TASK-130`)

## Regra do orquestrador
Quando uma issue fechar:
1. atualizar status no Linear
2. atualizar `SUBTASKS.md`
3. atualizar `HANDOFF.md`
4. puxar a próxima issue da fila serial
5. só então abrir uma nova frente

## Próxima issue ativa
- Nenhuma. `PED-37` home e `PED-38` sobre permanecem pausadas por direção do usuário.
