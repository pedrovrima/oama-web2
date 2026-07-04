# Homepage — auditoria inicial PED-37

Status: **auditoria iniciada**.

## Frames Figma de referência

Fonte principal: `design-assets/figma-analysis/selection-analysis.md`

- Desktop: `Desktop_HOMEPAGE` (`28:383`)
  - screenshot: `design-assets/figma-exports/selection/desktop-desktop-homepage-28_383.png`
- Mobile: `Celular_HOMEPAGE` (`2212:678`)
  - screenshot: `design-assets/figma-exports/selection/mobile-celular-homepage-2212_678.png`

## Arquivo atual

- `src/pages/index.astro`

## Leitura rápida do Figma

### Desktop
Ordem visual observada no screenshot exportado:
1. Hero com foto full-bleed, nav sobreposta, título `Conservação com Ciência` no canto inferior esquerdo e subtítulo logo abaixo.
2. Bloco amarelo com **card/carrossel de destaque** `Capacitação profissional`.
3. Ainda no amarelo, seção `Nossas ações em números` com 5 métricas e ícones.
4. Transição ondulada escura/amarela.
5. Bloco claro com `Nossas Áreas de Atuação` em 3 cards lado a lado.
6. Grande faixa clara em branco/creme antes da próxima seção azul.
7. Bloco azul `Monitoramento da Avifauna` com card/carrossel e setas.
8. Bloco amarelo `OAMa na mídia` em cards.
9. Bloco azul de CTA + newsletter.
10. Footer amarelo com links e ícones sociais.

### Mobile
Ordem visual observada no screenshot exportado:
1. Hero full-bleed.
2. Bloco amarelo com logo redonda do OAMa + texto institucional.
3. Link `Clique aqui para saber mais...`.
4. Card/carrossel `Capacitação profissional`.
5. `Nossas ações em números`.
6. Card `Toda ajuda faz a diferença`.
7. `Nossas áreas de atuação` em cards empilhados.
8. `Monitoramento da Avifauna`.
9. `Agenda 2025`.
10. `OAMa na mídia`.
11. CTA + newsletter.
12. Footer.

## Diferenças já visíveis entre código atual e Figma

### 1) Divergência forte de ordem no desktop
No `index.astro` atual, após o hero entra um bloco institucional grande com:
- logo do OAMa
- texto institucional
- trecho adicional de missão
- bloco ODS em desktop

No screenshot desktop do Figma, o pós-hero visível vai direto para o **card de destaque `Capacitação profissional`** e depois para `Nossas ações em números`.

**Leitura provisória:**
- esse bloco institucional parece fazer sentido no **mobile**,
- mas está estruturalmente desalinhado no **desktop**.

### 2) Bloco institucional mobile parece coerente
No mobile, o screenshot mostra explicitamente:
- logo redonda
- parágrafo institucional
- link `Clique aqui para saber mais...`

Ou seja, o bloco introdutório existe no mobile e provavelmente deve ser tratado com comportamento/layout diferente entre breakpoints, em vez de reutilizar a mesma solução do desktop.

### 3) Card de destaque do hero / capacitação
O Figma mostra um card visual de destaque logo após o hero.
No código atual isso parece estar delegado a `ProgramsCarousel`, então a auditoria da PED-37 precisa confirmar:
- se o conteúdo exibido pelo componente bate com `Capacitação profissional`
- se altura, margens, setas, raio e hierarquia tipográfica estão fiéis
- se no desktop o card entra imediatamente após o hero, sem o bloco institucional intermediário

### 4) `Nossas ações em números`
O bloco já existe no `index.astro`, mas precisa checagem de fidelidade em:
- espaçamento vertical
- contraste dos textos menores
- ordem e ritmo dos 5 números
- integração com o fundo amarelo e a onda seguinte

### 5) `Nossas Áreas de Atuação`
O bloco já existe no `index.astro`, mas no Figma ele aparece como uma seção mais limpa e mais claramente separada da parte de cima.
Pontos para revisar:
- proporção entre título e cards
- crop das imagens
- altura dos cards
- densidade do texto dentro dos cards
- distância entre a onda e o heading

### 6) CTA `Toda ajuda faz a diferença`
No screenshot mobile esse card aparece claramente antes de `Nossas Áreas de Atuação`.
No screenshot desktop exportado ele **não aparece com a mesma evidência**; no lugar há uma grande área clara antes do bloco azul de `Monitoramento da Avifauna`.

**Hipótese de trabalho:**
- o card de apoio pode ser **mobile-first / mobile-only** nessa posição,
- ou o desktop atual está usando uma interpretação que não bate com o frame exportado.

Isso precisa ser confirmado antes de mexer no layout final.

### 7) Seções inferiores da homepage
O Figma mostra com clareza, depois das áreas:
- `Monitoramento da Avifauna` (azul)
- `OAMa na mídia` (amarelo)
- CTA + newsletter (azul)
- footer (amarelo)

No código atual existem `HomeCarousel`, `AgendaSection` e `MidiaSection`, então a próxima auditoria precisa mapear:
- qual componente corresponde a qual frame/seção
- se `AgendaSection` deveria ficar entre `Monitoramento` e `OAMa na mídia` também no desktop
- se a ordem atual dos componentes bate com o export visual

## Prioridades da implementação na PED-37

1. Corrigir a **ordem estrutural desktop** do pós-hero.
2. Preservar o bloco institucional no **mobile**, ajustando sua apresentação sem contaminar o desktop.
3. Validar `ProgramsCarousel` como bloco `Capacitação profissional`.
4. Revisar a presença/posição do card `Toda ajuda faz a diferença` no desktop.
5. Só depois refinar detalhes de espaçamento, crops e tipografia.

## Próximo passo operacional

Comparar os componentes atuais da homepage (`ProgramsCarousel`, `HomeCarousel`, `AgendaSection`, `MidiaSection`) com os screenshots para identificar:
- o que já está fiel,
- o que precisa só de reorder,
- e o que precisa ser reconstruído.
