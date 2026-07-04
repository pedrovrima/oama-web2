# Inventário de páginas — Figma para Astro

Fonte principal: `design-assets/figma-analysis/selection-analysis.md`.

## Já implementadas / em revisão

| Página | Rota Astro | Status | Documento |
|---|---|---|---|
| Home | `/` | Implementada em alto nível; precisa QA visual e links finais | `design-assets/figma-analysis/home-analysis.md` |
| Sobre | `/sobre` | Existe; precisa revisão visual/conteúdo | a criar |
| Missão | `/missao` | Existe; precisa revisão visual/conteúdo | a criar |

## Primeira leva de implementação

| Prioridade | Página | Rota proposta | Frames Figma | Status |
|---|---|---|---|---|
| 1 | Áreas de Atuação | `/areas-de-atuacao` | `Celular_ÁREAS DE ATUAÇÃO`, `Desktop_ÁREAS DE ATUAÇÃO` | briefing criado |
| 2 | Programas e Projetos | `/programas-e-projetos` | `Celular_PROGRAMAS E PROJETOS`, `Desktop_PROGRAMAS E PROJETOS` | pendente briefing |
| 3 | Consultoria / Prestação de Serviços | `/consultoria` ou `/prestacao-de-servicos` | `Celular_CONSULTORIA`, `Desktop_CONSULTORIA` | pendente decisão de rota |
| 4 | Realizações | `/realizacoes` | `Celular_REALIZAÇÕES`, `Desktop_REALIZAÇÕES` | pendente briefing |

## Páginas filhas / detalhes identificados

| Grupo | Página | Rota candidata | Observação |
|---|---|---|---|
| Programas | Programa de Monitoramento | `/programas-e-projetos/monitoramento-de-avifauna` | Figma tem mobile e desktop |
| Programas | Programa de Treinamento | `/programas-e-projetos/treinamento-em-monitoramento` | Figma aparece como treinamento/capacitação |
| Programas | Ações Pró-Aves | `/programas-e-projetos/acoes-pro-aves` ou `/proaves` | também será migração do site antigo |
| Programas | Projetos de Pesquisa | `/programas-e-projetos/projetos-de-pesquisa` | Figma tem lista de projetos |
| Campanhas | Jacuçara | `/campanhas/jacucara` | página curta no Figma |
| Campanhas | Fundraising Field Trip | `/campanhas/fundraising-field-trip` | página curta no Figma |
| Serviços | Monitoramento de aves e estudos de avifauna | `/consultoria/monitoramento-de-aves` | página de serviço |
| Serviços | Educação ambiental e comunicação científica | `/consultoria/educacao-ambiental-comunicacao-cientifica` | página de serviço |
| Serviços | Capacitação técnica | `/consultoria/capacitacao-tecnica` | página de serviço |

## Regra de execução

Implementar uma página por vez com agente externo, revisar e rodar build antes de seguir para a próxima, salvo quando forem somente documentos sem conflito de arquivos.
