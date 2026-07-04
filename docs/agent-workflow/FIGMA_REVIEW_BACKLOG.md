# Figma Review Backlog — OAMa Website 2

Backlog local para revisão completa do site contra as fontes corretas.

## Regra-mãe desta fase
- **Tudo que tiver frame no Figma deve ser implementado/revisado com fidelidade ao Figma.**
- Não puxar blocos do legado para “completar” páginas Figma-first.
- `apoie` fica para uma etapa posterior de auditoria híbrida.
- Em ProAves, separar explicitamente:
  - a página principal/descritiva;
  - a camada de resultados do projeto hoje visível no legado.

## Trilha A — Auditoria estrutural mínima

### TASK-101 — Consolidar matriz de fonte por rota com viés Figma-first
- status: `pending`
- tipo: `Hybrid`
- objetivo: mapear cada rota existente para sua fonte principal (`Figma-first`, `Legacy-first`, `Hybrid`, `CMS-first`) aplicando a decisão do usuário de priorizar todas as rotas que já existem no Figma.
- rotas: todas
- critérios de aceite:
  - inventário completo de rotas
  - fonte principal definida por rota
  - conflitos registrados
  - ordem de execução refletindo a prioridade Figma-first

## Trilha B — Páginas principais

### TASK-020 — Revisar Home
- status: `in_progress`
- tipo: `Figma-first`
- rota: `/`

### TASK-021 — Revisar Sobre
- status: `pending`
- tipo: `Figma-first`
- rota: `/sobre`

### TASK-022 — Revisar Missão
- status: `pending`
- tipo: `Figma-first`
- rota: `/missao`

### TASK-023 — Revisar Áreas de Atuação
- status: `pending`
- tipo: `Figma-first`
- rota: `/areas-de-atuacao`

### TASK-024 — Revisar Realizações
- status: `pending`
- tipo: `Figma-first`
- rota: `/realizacoes`

## Trilha C — Hub e páginas de consultoria

### TASK-030 — Revisar hub Consultoria
- status: `pending`
- tipo: `Figma-first`
- rota: `/consultoria`

### TASK-031 — Revisar Monitoramento de Aves
- status: `pending`
- tipo: `Figma-first`
- rota: `/consultoria/monitoramento-de-aves`

### TASK-032 — Revisar Educação Ambiental
- status: `pending`
- tipo: `Figma-first`
- rota: `/consultoria/educacao-ambiental`

### TASK-033 — Revisar Capacitação Técnica
- status: `pending`
- tipo: `Figma-first`
- rota: `/consultoria/capacitacao-tecnica`

### TASK-034 — Revisar Cursos
- status: `pending`
- tipo: `Figma-first`
- rota: `/consultoria/cursos`
- observação: rota já teve divergência forte; revisar com atenção redobrada.

## Trilha D — Hub e páginas de programas e projetos

### TASK-040 — Revisar hub Programas e Projetos
- status: `pending`
- tipo: `Figma-first`
- rota: `/programas-e-projetos`

### TASK-041 — Revisar Monitoramento de Avifauna
- status: `done`
- tipo: `Figma-first`
- rota: `/programas-e-projetos/monitoramento-de-avifauna`

### TASK-042 — Revisar Treinamento em Monitoramento
- status: `done`
- tipo: `Figma-first`
- rota: `/programas-e-projetos/treinamento-monitoramento-avifauna`

### TASK-043 — Revisar Ações Pró-Aves (Figma)
- status: `pending`
- tipo: `Figma-first`
- rota: `/programas-e-projetos/acoes-pro-aves`
- observação: esta é a rota que deve representar a camada descritiva curta guiada pelo Figma se esse for o frame correspondente.

### TASK-044 — Revisar Projetos de Pesquisa
- status: `done`
- tipo: `Figma-first`
- rota: `/programas-e-projetos/projetos-de-pesquisa`

### TASK-045 — Revisar Campanha Jacuçara
- status: `done`
- tipo: `Figma-first`
- rota: `/programas-e-projetos/campanha-jacucara`

### TASK-046 — Revisar Fundraising Field Trip
- status: `done`
- tipo: `Figma-first`
- rota: `/programas-e-projetos/fundraising-field-trip`

## Trilha E — ProAves e rotas legadas/híbridas

### TASK-110 — Corrigir a separação conceitual de ProAves
- status: `pending`
- tipo: `Hybrid`
- objetivo: separar claramente a página principal/descritiva de ProAves da camada de “resultado do projeto” hoje observada no legado.
- critérios de aceite:
  - a página principal/descritiva siga o Figma sem contaminação do legado;
  - o material de resultado do projeto seja isolado em estrutura própria;
  - se necessário, a camada de resultado pode virar outra página/rota ou seção explicitamente separada;
  - links internos fiquem coerentes com a separação.
- referências:
  - Figma/exportações correspondentes de programas e projetos
  - legado: `/Users/anhinga/Projetos/oama-website/pages/proaves/index.jsx`

### TASK-050 — Revisar Pro-Aves legado / camada de resultados
- status: `pending`
- tipo: `Legacy-first`
- rota: `/programas-e-projetos/pro-aves`
- observação: esta task só entra depois de estabilizar a leitura Figma-first da página principal/descritiva.

### TASK-051 — Revisar Apoie
- status: `pending`
- tipo: `Hybrid`
- rota: `/apoie`
- observação: adiado por decisão do usuário; revisar depois da trilha principal Figma-first.

## Trilha F — Conteúdo gerenciável / Sanity

### TASK-060 — Mapear conteúdo que deve sair do hardcoded
- status: `pending`
- tipo: `CMS-first`
- objetivo: decidir o que deve virar conteúdo gerenciável no Sanity após a revisão visual/textual.
- observação: não iniciar esta trilha para fugir da decisão de layout/fidelidade.

## Ordem recomendada de execução nesta fase
1. TASK-101 — matriz de fonte por rota
2. TASK-110 — separação conceitual de ProAves
3. TASK-040 — hub Programas e Projetos
4. TASK-030 — hub Consultoria
5. TASK-031 a TASK-046 — páginas filhas Figma-first
6. TASK-020 a TASK-024 — páginas principais restantes
7. TASK-050 — camada legado/resultados de ProAves
8. TASK-051 — Apoie
9. TASK-060 — Sanity
