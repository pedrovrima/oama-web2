# Auditoria completa — OAMa Website 2

Data: 2026-06-07

## Escopo
Auditoria das rotas Astro implementadas em `src/pages/` comparando:
- Figma exportado em `design-assets/figma-exports/selection/`
- análise estrutural em `design-assets/figma-analysis/selection-analysis.md`
- briefs existentes em `docs/implementation/pages/`
- código atual das páginas Astro
- exceções conhecidas de rotas legadas vindas de `/Users/anhinga/Projetos/oama-website`

## Critérios usados
- **Fonte principal**: `Figma-first`, `Legacy-first`, `Hybrid`, `CMS-first`
- **Fidelidade**:
  - `alta` = estrutura e texto principais batem com a fonte
  - `média` = base correta, mas há simplificações ou desvios relevantes
  - `baixa` = a rota diverge estruturalmente, textualmente, ou usa a fonte errada
  - `indeterminada` = falta fonte visual confiável para concluir

## Resumo executivo

### Achados principais
1. O projeto possui **19 rotas Astro implementadas** e cobertura boa de páginas do Figma.
2. O maior risco atual não é ausência de páginas, e sim **mistura de fontes**:
   - `acoes-pro-aves` e `pro-aves` estão conceitualmente cruzadas;
   - `apoie` permanece híbrida e sem frame Figma confiável nas exportações atuais.
3. Há hubs que no Figma são **curtos e altamente visuais**, mas no Astro viraram **páginas longas com conteúdo detalhado**:
   - `/consultoria`
   - `/programas-e-projetos`
4. Algumas páginas estão razoavelmente fiéis em texto, mas usam **estrutura genérica, assets provisórios ou placeholders**:
   - `home`
   - `realizacoes`
   - páginas filhas de consultoria
5. O Linear **já está acessível tecnicamente**. O trabalho pendente é transformar esta auditoria em issues executáveis e sem ambiguidade.

### Prioridade de correção
**Crítica**
- `/programas-e-projetos/acoes-pro-aves`
- `/programas-e-projetos/pro-aves`
- `/consultoria`
- `/programas-e-projetos`

**Alta**
- `/apoie`
- `/realizacoes`
- páginas filhas de consultoria

**Média**
- `home`
- `sobre`
- `areas-de-atuacao`
- páginas filhas de programas/projetos que já seguem o texto do Figma mas ainda precisam revisão visual fina

---

## Inventário auditado por rota

## A. Páginas principais

### `/`
- fonte principal: `Figma-first`
- screenshot principal: `desktop-desktop-homepage-28_383.png`
- brief: `docs/implementation/pages/home.md`
- fidelidade: `média`
- o que bate:
  - hero com “Conservação com Ciência”
  - texto institucional do OAMa
  - bloco “Nossas ações em números`
  - seção de áreas de atuação
  - presença de CTA/newsletter/footer
- divergências textuais/estruturais:
  - o Figma mostra um **carrossel marcante de capacitação profissional**; o código tem histórico de placeholder e implementação ainda não foi auditada como fiel frame a frame
  - a homepage do Figma inclui blocos visuais bem específicos como **monitoramento da avifauna** e **OAMa na mídia**; o código usa componentes, mas a equivalência visual/textual ainda não está documentada com precisão
  - ainda há dependência de assets provisórios em partes da home
- task recomendada:
  - validar seção por seção contra screenshot desktop/mobile e congelar textos definitivos

### `/sobre`
- fonte principal: `Figma-first`
- screenshots principais: `desktop-desktop-sobre-2263_24.png`, `mobile-celular-sobre-2263_140.png`, `mobile-celular-história-do-oama-2275_277.png`
- brief: `docs/implementation/pages/home.md` + componentes específicos
- fidelidade: `média`
- o que bate:
  - estrutura modular compatível com Figma: hero, quem somos, plano de voo, membros/parceiros, história
  - presença da narrativa institucional principal
- divergências:
  - a auditoria atual não confirmou texto fino seção por seção dentro dos componentes `HeroQuemSomos`, `PlanoDeVoo`, `Membros`, `ParceirosColaboracao`, `HistoriaOAMa`, `Transparencia`
  - o Figma mobile mostra CTA de doação/newsletter embutido na página; isso precisa ser verificado nos componentes reais
- task recomendada:
  - auditoria de componentes da rota `sobre` com checklist por seção

### `/missao`
- fonte principal: `Figma-first`
- screenshot principal: `mobile-celular-missão-2215_156.png`
- fidelidade: `alta` estrutural / `média` visual
- o que bate:
  - hero com foto + título “MISSÃO”
  - bloco amarelo com os dois parágrafos principais
  - grid de ODS
  - segunda foto de ave
  - footer simples em vez de newsletter longa
- divergências:
  - assets ainda são provisórios (Unsplash), não os do design final
  - falta validação fina de tipografia/spacing
- task recomendada:
  - trocar assets provisórios e revisar responsividade fina

### `/areas-de-atuacao`
- fonte principal: `Figma-first`
- screenshots principais: `mobile-celular-áreas-de-atuação-2330_176.png`, `desktop-desktop-áreas-de-atuação-2349_350.png`
- brief: `docs/implementation/pages/areas-de-atuacao.md`
- fidelidade: `média`
- o que bate:
  - texto principal da seção de pesquisa/monitoramento está muito próximo do Figma
  - presença dos blocos temáticos principais
- divergências:
  - usa imagens/ornamentos circulares e assets provisórios que não equivalem exatamente ao Figma
  - a equivalência das outras seções além de pesquisa/monitoramento precisa revisão visual fina
- task recomendada:
  - revisão visual completa da rota, preservando o texto já próximo do Figma

### `/realizacoes`
- fonte principal: `Figma-first`
- screenshots principais: `mobile-celular-realizações-2560_450.png`, `desktop-desktop-realizações-2581_454.png`
- brief: `docs/implementation/pages/realizacoes.md`
- fidelidade: `média-baixa`
- o que bate:
  - títulos principais de cards: Downloads, Documentários, Wikimudas, Divulgação Científica, Textos Acadêmicos
  - CTA/newsletter/footer existem
- divergências:
  - o Figma mostra uma página mais enxuta e editorial; o código adiciona intro explicativa e estado “links em breve” em todos os cards
  - há dependência de imagens genéricas/Unsplash
  - a interação real dos cards ainda não está definida
- task recomendada:
  - alinhar layout com o Figma e decidir links reais por card

---

## B. Hub e páginas de consultoria

### `/consultoria`
- fonte principal: `Figma-first`
- screenshots principais: `desktop-desktop-consultoria-2612_1124.png`, `mobile-celular-consultoria-2592_573.png`
- brief: `docs/implementation/pages/consultoria.md`
- fidelidade: `baixa`
- o que bate:
  - hero “CONSULTORIA”
  - introdução institucional
  - cards/frentes principais
- divergências críticas:
  - no Figma, a página é um **hub visual** com:
    - hero
    - intro azul
    - frentes de atuação
    - “Por que escolher o OAMa?”
    - clientes/logos
    - formulário “Fale conosco”
  - no Astro, a rota virou uma **página longa com blocos detalhados das frentes**, o que desloca o papel das páginas filhas
  - faltam clientes/logos e formulário fiel ao Figma
  - a estrutura atual invade escopo das páginas filhas
- task recomendada:
  - reconstruir `/consultoria` como hub curto e visual, deixando o conteúdo detalhado nas rotas filhas

### `/consultoria/monitoramento-de-aves`
- fonte principal: `Figma-first`
- screenshots principais: `desktop-desktop-monitoramento-de-aves-e-estudos-de-avifauna-2620_831.png`, `mobile-celular-monitoramento-de-aves-e-estudos-de-avifauna-2610_569.png`
- brief: `docs/implementation/pages/monitoramento-de-aves-servico.md`
- fidelidade: `média`
- o que bate:
  - hero correto
  - blocos “Serviços”, “Diferenciais do OAMa”, “Público potencial”
  - conteúdo textual principal muito próximo do Figma
- divergências:
  - o Figma desktop desta página é **curto**; o código adiciona CTA/newsletter/footer adicionais fora do recorte principal
  - layout, iconografia e espaçamento precisam ajuste fino
- task recomendada:
  - ajustar a rota ao comprimento e ritmo do Figma, mantendo o texto já bom

### `/consultoria/educacao-ambiental`
- fonte principal: `Figma-first`
- screenshots principais: `mobile-celular-educação-ambiental-e-comunicação-científica-2611_730.png`, `desktop-desktop-monitoramento-de-aves-e-estudos-de-avifauna-2620_878.png`
- brief: `docs/implementation/pages/educacao-ambiental-servico.md`
- fidelidade: `média`
- o que bate:
  - tripé “Serviços / Diferenciais / Público potencial`
  - conteúdo textual alinhado ao Figma
- divergências:
  - usa template genérico muito parecido com as outras páginas filhas
  - precisa checagem de densidade visual, iconografia e comprimento real versus Figma
- task recomendada:
  - revisão visual fina preservando texto

### `/consultoria/capacitacao-tecnica`
- fonte principal: `Figma-first`
- screenshots principais: `mobile-celular-monitoramento-de-aves-e-estudos-de-avifauna-2611_847.png`, `desktop-desktop-monitoramento-de-aves-e-estudos-de-avifauna-2620_940.png`
- brief: `docs/implementation/pages/capacitacao-tecnica-servico.md`
- fidelidade: `média`
- o que bate:
  - estrutura de 3 blocos
  - texto principal alinhado ao Figma
- divergências:
  - mesma observação de template genérico e provável excesso de conteúdo periférico
- task recomendada:
  - revisar visual e consolidar padrões entre as 3 páginas filhas

### `/consultoria/cursos`
- fonte principal: `Figma-first`
- screenshots principais: `mobile-celular-cursos-2465_298.png`, `desktop-desktop-cursos-2513_501.png`
- brief: `docs/implementation/pages/cursos.md`
- fidelidade: `média`
- o que bate:
  - hero com pena
  - título “CURSOS - ONLINE E PRESENCIAL`
  - sequência geral: intro, “Quais os objetivos...”, blocos com imagem, ética, “Sobre as inscrições”, “Cursos concluídos”, CTA/newsletter/footer
- divergências:
  - texto precisa revisão fina: há sinais de redação menos fiel em trechos do curso básico e presencial
  - ainda há placeholder de reCAPTCHA
  - footer interno manual pode divergir do padrão do design system
- task recomendada:
  - revisão textual linha a linha contra Figma/legado e limpeza dos placeholders

---

## C. Hub e páginas de programas e projetos

### `/programas-e-projetos`
- fonte principal: `Figma-first`
- screenshots principais: `desktop-desktop-programas-e-projetos-2497_419.png`, `mobile-celular-programas-e-projetos-2423_234.png`
- brief: `docs/implementation/pages/programas-e-projetos.md`
- fidelidade: `baixa`
- o que bate:
  - hero com título correto
  - presença dos 6 programas/projetos principais
- divergências críticas:
  - no Figma, o hub é **curto, quase uma galeria visual de cards/imagens**
  - no Astro, a página virou **landing longa com descrições detalhadas e seções internas completas**
  - isso sobrecarrega o hub e conflita com o papel das páginas filhas
- task recomendada:
  - reconstruir `/programas-e-projetos` como hub visual curto, preservando detalhes nas rotas filhas

### `/programas-e-projetos/monitoramento-de-avifauna`
- fonte principal: `Figma-first`
- screenshots principais: `desktop-desktop-monitoramento-2498_638.png`, `mobile-celular-monitoramento-2431_492.png`
- brief: `docs/implementation/pages/monitoramento-avifauna.md`
- fidelidade: `média`
- o que bate:
  - texto principal do programa
  - objetivos listados
  - menção a Dr. Cagan Sekercioglu
- divergências:
  - precisa validar ritmo visual, imagens e extensão versus Figma
  - footer/newsletter devem ser conferidos contra o frame efetivo
- task recomendada:
  - revisão visual fina sem reescrever conteúdo do zero

### `/programas-e-projetos/treinamento-monitoramento-avifauna`
- fonte principal: `Figma-first`
- screenshots principais: `desktop-desktop-monitoramento-2502_668.png`, `mobile-celular-treinamento-2446_326.png`
- brief: `docs/implementation/pages/treinamento-monitoramento-avifauna.md`
- fidelidade: `média`
- o que bate:
  - título principal
  - bloco de inscrições
  - intercâmbio de anilhadores / Banders Beyond Borders
- divergências:
  - precisa alinhar a diagramação e extensão visual com o frame do Figma
- task recomendada:
  - revisão visual e textual fina

### `/programas-e-projetos/acoes-pro-aves`
- fonte principal: `Figma-first`
- screenshots principais: `desktop-desktop-ações-pró-aves-2512_624.png`, `mobile-celular-ações-pró-aves-2462_618.png`
- brief: `docs/implementation/pages/acoes-pro-aves.md`
- fidelidade: `baixa`
- divergência crítica:
  - a página atual **não segue o frame curto do Figma**; ela parece incorporar ambições da landing antiga/expandida
  - o Figma de `Ações Pró-Aves` é enxuto: hero + texto + imagem/bloco + CTA/newsletter/footer
  - a rota atual tem seções demais (temas, formatos, parceiros, etc.) para o frame exportado
- risco:
  - forte risco de mistura entre a página Figma e a ideia de landing rica do programa
- task recomendada:
  - reduzir `/acoes-pro-aves` ao escopo real do frame Figma

### `/programas-e-projetos/pro-aves`
- fonte principal: `Legacy-first`
- fonte esperada: `/Users/anhinga/Projetos/oama-website/pages/proaves/index.jsx`
- fidelidade: `baixa`
- divergência crítica:
  - a rota atual está funcionando como uma **versão curta alinhada ao Figma**, mas essa rota deveria ser a **importação da landing antiga**
  - hoje existe confusão conceitual entre `pro-aves` (legado) e `acoes-pro-aves` (Figma)
- task recomendada:
  - restaurar `/pro-aves` a partir do site antigo e manter `/acoes-pro-aves` como página Figma separada

### `/programas-e-projetos/projetos-de-pesquisa`
- fonte principal: `Figma-first`
- screenshots principais: `desktop-desktop-projetos-de-pesquisa-2514_766.png`, `mobile-celular-projetos-de-pesquisa-2473_389.png`
- brief: `docs/implementation/pages/projetos-de-pesquisa.md`
- fidelidade: `média`
- o que bate:
  - título
  - caráter de listagem de projetos
  - conteúdo base alinhado ao Figma
- divergências:
  - validar ordem/lista exata dos projetos e datas
  - revisar visual dos cards/lista
- task recomendada:
  - revisão textual fina e ordenação dos projetos

### `/programas-e-projetos/campanha-jacucara`
- fonte principal: `Figma-first`
- screenshots principais: `desktop-desktop-jacuçara-2517_1052.png`, `mobile-celular-jacuçara-2479_433.png`
- brief: `docs/implementation/pages/campanha-jacucara.md`
- fidelidade: `média`
- o que bate:
  - narrativa central da campanha
  - menção ao documentário e ao PAN
- divergências:
  - revisar rigor textual e diagramação
- task recomendada:
  - revisão de acabamento visual e links

### `/programas-e-projetos/fundraising-field-trip`
- fonte principal: `Figma-first`
- screenshots principais: `desktop-desktop-ações-pró-aves-2517_1092.png`, `mobile-celular-fft-2479_525.png`
- brief: `docs/implementation/pages/fundraising-field-trip.md`
- fidelidade: `média`
- o que bate:
  - narrativa principal da viagem
  - parceria com KBO
- divergências:
  - revisar naming, links e relação entre número de blocos e composição visual do Figma
- task recomendada:
  - revisão visual/textual fina

### `/apoie`
- fonte principal: `Hybrid`
- fonte efetiva atual: majoritariamente legado
- fidelidade: `indeterminada` quanto ao Figma / `média` quanto ao legado
- observação crítica:
  - não há frame exportado claramente confiável de Apoie nas exportações atuais
  - o código atual foi montado principalmente a partir do site antigo
  - portanto, a avaliação correta aqui não é “bate ou não bate com o Figma”, e sim “o que veio do legado e o que ainda está provisório?”
- riscos:
  - a página pode estar útil, mas ainda carece de declaração explícita de fonte por seção
- task recomendada:
  - auditar `/apoie` por seções (hero, narrativa, métodos de doação, custos, projetos, fotos, newsletter) e marcar o que é legado estável versus provisório

---

## D. Diagnóstico transversal

## 1. Mistura de fontes
Casos mais críticos:
- `/programas-e-projetos/acoes-pro-aves`
- `/programas-e-projetos/pro-aves`
- `/apoie`

## 2. Hubs com escopo inflado
Casos mais críticos:
- `/consultoria`
- `/programas-e-projetos`

No Figma, ambos funcionam mais como hubs/galerias. No Astro, foram expandidos para páginas longas. Isso precisa ser corrigido para evitar duplicação de conteúdo com as páginas filhas.

## 3. Placeholders e provisórios
Achados recorrentes:
- imagens Unsplash em várias rotas
- placeholders de reCAPTCHA/newsletter
- alguns links ainda dependem de definição final

## 4. Falta de congelamento de texto
Mesmo quando a estrutura geral está boa, várias páginas ainda precisam de revisão textual linha a linha para garantir fidelidade real.

---

## E. Backlog recomendado para o Linear

### Críticas
1. Restaurar `pro-aves` legado
2. Reduzir `acoes-pro-aves` ao frame Figma real
3. Reconstruir hub `/consultoria`
4. Reconstruir hub `/programas-e-projetos`

### Altas
5. Revisar `/apoie` por origem de conteúdo
6. Revisar `/realizacoes`
7. Revisar páginas filhas de consultoria

### Médias
8. Revisar home
9. Revisar sobre
10. Revisar áreas de atuação
11. Revisar monitoramento de avifauna
12. Revisar treinamento em monitoramento
13. Revisar projetos de pesquisa
14. Revisar campanha Jacuçara
15. Revisar Fundraising Field Trip

---

## Conclusão
O projeto não está “sem base”; ele já tem cobertura ampla das rotas. O problema principal agora é de **fidelidade e governança de fonte**, não de ausência de páginas. A próxima etapa correta é transformar os achados acima em issues do Linear com escopo claro, começando pelos casos de mistura de fonte e pelos hubs que hoje estão mais longos do que o Figma indica.
