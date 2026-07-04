# FALLBACK MODELS PLAYBOOK

## Objetivo
Definir como o projeto `oama-web2` continua andando quando o modelo principal atinge limite de quota/janela, especialmente no caso de uso de **OpenAI como modelo principal** e **OpenCode Go como fallback operacional**.

Este documento existe para evitar três problemas:
1. parar o projeto inteiro quando a quota acaba;
2. continuar trabalhando sem distinguir task estratégica de task mecânica;
3. perder contexto ou recomeçar trabalho desnecessariamente.

---

## Princípio geral

**OpenAI não deve ser a esteira inteira.**

Use:
- **OpenAI** para direção, interpretação, revisão e decisão;
- **OpenCode Go** para continuidade operacional, execução mecânica e avanço controlado;
- **ferramentas locais** sempre que possível para build, leitura, diff, inventário e validações que não exigem LLM.

---

## Papéis por modelo

## 1) OpenAI — modelo principal
Usar preferencialmente para:
- interpretação fina do Figma;
- resolução de ambiguidades entre `Figma-first` e `Legacy-first`;
- decisões de arquitetura de conteúdo;
- revisão editorial e textual mais delicada;
- revisão final de implementações;
- definição de granularidade de tasks;
- síntese executiva para Linear / backlog.

### Sinais de que a task precisa de OpenAI
- há conflito de fontes;
- a página tem nuance visual forte;
- há risco de reinterpretação errada do design;
- a decisão envolve produto, conteúdo ou governança;
- a revisão precisa julgar “fidelidade”, não apenas “funciona”.

---

## 2) OpenCode Go — fallback operacional
Usar preferencialmente para:
- execução de tasks já bem definidas;
- edição localizada em arquivos com briefing claro;
- migração mecânica de blocos já especificados;
- criação/ajuste de docs de workflow;
- organização de backlog local;
- checagem de consistência básica;
- implementação de páginas quando a fonte já foi decidida antes;
- tarefas de acabamento com baixo grau de ambiguidade.

### Sinais de que a task pode ir para OpenCode Go
- a fonte principal já está declarada;
- os arquivos permitidos estão claros;
- a task cabe em uma issue única;
- o critério de aceite é objetivo;
- a revisão final pode ser feita depois por Hermes/OpenAI.

---

## 3) Ferramentas sem LLM
Sempre preferir ferramentas locais para:
- `npm run build`
- leitura de arquivos
- busca de rotas/componentes
- diff
- inventário de páginas
- contagem/listagem
- criação de issues no Linear via API
- leitura de docs do projeto
- verificação de links/placeholders

Essas ações não devem consumir o “orçamento cognitivo” dos modelos.

---

## Tabela de decisão rápida

| Situação | Modelo preferido |
|---|---|
| Decidir se rota é `Figma-first` ou `Legacy-first` | OpenAI |
| Comparar Figma vs página atual com nuance | OpenAI |
| Escrever/ajustar briefing técnico | OpenCode Go ou Hermes |
| Implementar rota já bem especificada | OpenCode Go |
| Revisar texto institucional com cuidado editorial | OpenAI |
| Rodar build e validar artefato | sem LLM |
| Criar/atualizar issues no Linear | sem LLM + Hermes |
| Corrigir placeholders óbvios / links / pequenos blocos | OpenCode Go |
| Revisão final antes de marcar done | OpenAI |

---

## Protocolo quando a quota da OpenAI acabar

## Cenário A — quota acaba antes da task começar
### Ação
1. verificar se a task é estratégica ou operacional;
2. se for operacional, executar com OpenCode Go;
3. se for estratégica, não improvisar: documentar pendência e adiar decisão.

### Regra
**Não usar OpenCode Go para inventar decisão de produto/design quando a task dependia de julgamento fino.**

---

## Cenário B — quota acaba no meio da task
### Ação
1. parar no ponto atual;
2. registrar o estado em `HANDOFF.md`, `STATUS.md` ou doc da página/task;
3. separar o que já está decidido do que ainda depende de julgamento;
4. continuar apenas a parte mecânica com OpenCode Go;
5. deixar revisão final para a volta do modelo principal.

### Exemplo
- decisão já tomada: `/consultoria` precisa virar hub curto;
- implementação mecânica pode seguir com OpenCode Go;
- revisão final da fidelidade visual volta para OpenAI depois.

---

## Cenário C — quota acaba durante revisão
### Ação
1. não marcar a task como concluída apenas por build verde;
2. mover a task para `review` ou equivalente no fluxo;
3. registrar: “implementação pronta, revisão qualitativa pendente”;
4. retomar a revisão com OpenAI quando houver janela.

### Regra
**Build aprovado não substitui revisão de fidelidade.**

---

## Classificação de tasks para fallback

## Classe 1 — pode continuar normalmente com OpenCode Go
- ajustes localizados em uma página já decidida;
- migração mecânica a partir de fonte já escolhida;
- documentação de workflow;
- backlog local;
- limpeza de placeholders conhecidos;
- wiring simples de links internos.

## Classe 2 — pode continuar parcialmente
- páginas com estrutura decidida, mas revisão visual pendente;
- refino de texto com posterior conferência;
- reestruturação técnica cuja direção já foi aprovada.

## Classe 3 — deve pausar
- conflitos entre Figma e legado sem decisão prévia;
- revisão de fidelidade visual fina;
- redefinição de escopo de rota;
- decisões sobre Sanity vs hardcoded sem task explícita;
- tarefas onde a principal entrega é julgamento, não execução.

---

## Regra de handoff obrigatória
Se houver troca de modelo no meio do trabalho, o agente/Hermes deve registrar:
- task atual;
- fonte principal da task;
- o que já foi decidido;
- o que ainda está em aberto;
- se OpenCode Go pode continuar ou se deve aguardar OpenAI;
- qual comando de verificação deve ser rodado no final.

### Formato sugerido
```md
## Handoff de fallback
- task: TASK-XXX / PED-XX
- modelo principal indisponível: OpenAI (quota/janela)
- pode continuar com OpenCode Go?: sim/não
- parte já decidida:
- parte pendente de julgamento:
- arquivos permitidos:
- verificação final:
```

---

## Workflow recomendado por issue

## 1. Planejamento
Preferência:
- OpenAI para clarificar a task
- Hermes para organizar o briefing

## 2. Execução
Preferência:
- OpenCode Go quando a task já estiver delimitada

## 3. Verificação técnica
Preferência:
- ferramentas locais

## 4. Revisão qualitativa final
Preferência:
- OpenAI

---

## Aplicação direta ao backlog atual

### Ideal para OpenCode Go
- PED-35 — auditar `/apoie` por seção e declarar origem legado vs provisório
- PED-36 — refinar `/realizacoes` se o escopo estiver bem fechado
- PED-39 — refinar `/areas-de-atuacao`
- partes de PED-34 e PED-40 com briefing já definido

### Ideal para OpenAI
- PED-31 — separar `acoes-pro-aves` e `pro-aves` quando houver conflito real de fonte
- PED-32 — reconstrução conceitual de `/consultoria`
- PED-33 — reconstrução conceitual de `/programas-e-projetos`
- revisão final das páginas após implementação

### Ideal sem LLM
- criação/atualização de issues no Linear
- build
- validação de arquivos alterados
- inventário do repo

---

## Política operacional

### Regra 1
Nenhuma task estratégica deve ser “resolvida no chute” só porque a OpenAI ficou indisponível.

### Regra 2
Nenhuma task mecânica deve ficar parada esperando OpenAI se a decisão já tiver sido tomada.

### Regra 3
Troca de modelo exige handoff explícito.

### Regra 4
OpenCode Go pode implementar, mas a marcação final de `done` em tasks sensíveis deve vir após revisão consistente.

---

## Resumo executivo

Se a quota de OpenAI acabar:
- **não parar o projeto inteiro**;
- continuar com **OpenCode Go** nas tasks operacionais e bem definidas;
- usar **ferramentas locais** para tudo que não exige LLM;
- **pausar apenas** julgamento fino, ambiguidade de fonte e revisão qualitativa crítica;
- registrar handoff claro para retomada.

Esse é o comportamento esperado para `oama-web2`.
