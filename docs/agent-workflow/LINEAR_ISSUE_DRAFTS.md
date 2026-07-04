# Drafts de issues — Linear / projeto `oama-web2`

Base: `docs/agent-workflow/AUDITORIA_FIGMA_LEGADO_2026-06-07.md`
Projeto Linear: `oama-web2`
Team: `PED`

## Convenções sugeridas
- prioridade 2 = alta
- prioridade 3 = média
- estado inicial = `Backlog`
- todas as issues devem linkar para a auditoria consolidada

---

## 1) Corrigir mistura entre `acoes-pro-aves` e `pro-aves`
**Prioridade:** alta
**Tipo:** implementação / arquitetura de conteúdo

### Título sugerido
Separar as fontes de `acoes-pro-aves` e `pro-aves` e restaurar a landing legada correta

### Descrição sugerida
A auditoria mostrou que as rotas `/programas-e-projetos/acoes-pro-aves` e `/programas-e-projetos/pro-aves` estão conceitualmente cruzadas.

- `acoes-pro-aves` deveria seguir o frame curto do Figma
- `pro-aves` deveria ser restaurada a partir do site antigo em Next.js

#### Critérios de aceite
- `/programas-e-projetos/acoes-pro-aves` siga o frame Figma exportado
- `/programas-e-projetos/pro-aves` seja restaurada a partir do legado
- o conteúdo de uma rota não invada o escopo da outra
- links internos entre hub/programa/landing estejam coerentes

#### Referências
- `docs/agent-workflow/AUDITORIA_FIGMA_LEGADO_2026-06-07.md`
- `docs/implementation/pages/acoes-pro-aves.md`
- legado: `/Users/anhinga/Projetos/oama-website/pages/proaves/index.jsx`

---

## 2) Reconstruir hub `/consultoria` para o papel correto de hub visual
**Prioridade:** alta
**Tipo:** UI / conteúdo / informação

### Título sugerido
Reconstruir `/consultoria` como hub visual curto fiel ao Figma

### Descrição sugerida
No Figma, `/consultoria` funciona como hub visual com hero, introdução, cards de frentes, bloco “Por que escolher o OAMa?”, clientes/logos e formulário “Fale conosco”.

No Astro atual, a rota virou uma landing longa com conteúdo detalhado das frentes, o que conflita com o papel das páginas filhas.

#### Critérios de aceite
- manter hero e introdução alinhados ao Figma
- manter cards de frentes com navegação clara para páginas filhas
- incluir bloco “Por que escolher o OAMa?”
- incluir logos/clientes
- incluir formulário “Fale conosco” fiel ao design
- remover da rota hub os blocos detalhados que pertencem às páginas filhas

#### Referências
- `desktop-desktop-consultoria-2612_1124.png`
- `mobile-celular-consultoria-2592_573.png`
- `docs/implementation/pages/consultoria.md`

---

## 3) Reconstruir hub `/programas-e-projetos` como galeria curta
**Prioridade:** alta
**Tipo:** UI / informação

### Título sugerido
Reconstruir `/programas-e-projetos` como hub visual curto alinhado ao Figma

### Descrição sugerida
O Figma mostra `/programas-e-projetos` como um hub curto e visual, praticamente uma galeria de imagens/cards que direcionam para páginas próprias. O Astro atual expande esse hub para uma landing longa com muito conteúdo detalhado.

#### Critérios de aceite
- hero fiel ao Figma
- grid/galeria de cards com a mesma lógica do design
- remoção das seções detalhadas internas do hub
- conteúdo detalhado mantido apenas nas páginas filhas

#### Referências
- `desktop-desktop-programas-e-projetos-2497_419.png`
- `mobile-celular-programas-e-projetos-2423_234.png`
- `docs/implementation/pages/programas-e-projetos.md`

---

## 4) Revisar e consolidar páginas filhas de consultoria
**Prioridade:** alta
**Tipo:** conteúdo / design fidelity

### Título sugerido
Revisar páginas filhas de consultoria contra o Figma e reduzir excesso de template genérico

### Escopo
- `/consultoria/monitoramento-de-aves`
- `/consultoria/educacao-ambiental`
- `/consultoria/capacitacao-tecnica`
- `/consultoria/cursos`

### Descrição sugerida
As páginas filhas têm base textual boa, mas ainda carregam simplificações visuais, uso de template repetitivo e placeholders. A de cursos também precisa revisão textual linha a linha e limpeza de reCAPTCHA placeholder.

#### Critérios de aceite
- cada página reflita seu frame específico do Figma
- revisar texto linha a linha onde houver divergência
- remover placeholders restantes
- alinhar footer/CTA apenas quando fizer sentido para o frame

---

## 5) Auditar `/apoie` por origem de conteúdo e marcar provisórios
**Prioridade:** alta
**Tipo:** auditoria / conteúdo

### Título sugerido
Auditar `/apoie` por seção e declarar origem: legado estável vs provisório

### Descrição sugerida
`/apoie` foi migrada majoritariamente do legado, mas sem frame Figma confiável nas exportações atuais. Precisamos transformar a página em algo auditável por origem.

#### Critérios de aceite
- cada seção marcada como `legado confirmado`, `adaptado`, ou `provisório`
- revisar hero, narrativa institucional, métodos de doação, custos, projetos financiados, newsletter
- listar pendências externas (ex.: integrações reais)

---

## 6) Alinhar `/realizacoes` ao Figma e definir links reais
**Prioridade:** alta
**Tipo:** conteúdo / UX

### Título sugerido
Refinar `/realizacoes` para a estrutura editorial do Figma e ativar destinos reais dos cards

### Descrição sugerida
A rota está próxima no inventário de temas, mas ainda depende de imagens genéricas, cards com “links em breve” e layout mais verboso que o frame Figma.

#### Critérios de aceite
- estrutura visual mais próxima do Figma
- decidir e implementar links reais dos cards
- remover estados provisórios de “links em breve” se já houver destino

---

## 7) Revisar homepage seção por seção contra o Figma
**Prioridade:** média
**Tipo:** QA visual / conteúdo

### Título sugerido
Auditar e ajustar homepage seção por seção contra os frames desktop/mobile

### Descrição sugerida
A homepage já cobre as grandes seções, mas ainda precisa validação frame a frame, especialmente no carrossel principal, bloco de monitoramento, OAMa na mídia e eventuais assets provisórios.

#### Critérios de aceite
- checklist completo por seção
- textos congelados
- lista de assets finais pendentes zerada ou explicitada

---

## 8) Revisar `/sobre` por componentes
**Prioridade:** média
**Tipo:** conteúdo / QA estrutural

### Título sugerido
Auditar os componentes de `/sobre` contra Figma e confirmar CTA/newsletter

### Descrição sugerida
A estrutura modular está coerente, mas faltou validar texto fino e presença/ausência fiel de CTA/newsletter dentro dos componentes.

#### Critérios de aceite
- checklist por componente
- validação de textos institucionais
- confirmação da composição final da página

---

## 9) Refinar `/areas-de-atuacao`
**Prioridade:** média
**Tipo:** visual / assets

### Título sugerido
Refinar `/areas-de-atuacao` para reduzir provisórios e aproximar o layout do Figma

### Descrição sugerida
A base textual está boa, mas a rota ainda depende de assets e ornamentos provisórios e precisa de revisão visual mais fiel.

#### Critérios de aceite
- revisar as três frentes principais
- substituir assets provisórios quando possível
- ajustar spacing/composição mobile e desktop

---

## 10) Revisar páginas filhas de programas/projetos já bem encaminhadas
**Prioridade:** média
**Tipo:** QA visual / conteúdo

### Título sugerido
Revisar páginas filhas de programas/projetos com foco em acabamento visual e fidelidade textual

### Escopo
- `/programas-e-projetos/monitoramento-de-avifauna`
- `/programas-e-projetos/treinamento-monitoramento-avifauna`
- `/programas-e-projetos/projetos-de-pesquisa`
- `/programas-e-projetos/campanha-jacucara`
- `/programas-e-projetos/fundraising-field-trip`

### Descrição sugerida
Essas rotas parecem ter base correta, mas ainda precisam revisão de ritmo visual, ordenação de blocos, links e conferência fina de texto.

#### Critérios de aceite
- validar cada rota contra screenshots Figma
- revisar links e chamadas externas
- documentar qualquer ponto ainda dependente de asset ou integração

---

## Sugestão de ordem de criação no Linear
1. separar `acoes-pro-aves` / `pro-aves`
2. reconstruir hub `consultoria`
3. reconstruir hub `programas-e-projetos`
4. revisar páginas filhas de consultoria
5. auditar `apoie`
6. alinhar `realizacoes`
7. homepage
8. sobre
9. áreas de atuação
10. páginas filhas de programas/projetos
