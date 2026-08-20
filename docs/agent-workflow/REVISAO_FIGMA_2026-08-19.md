# Revisão Figma vs implementação — 2026-08-19/20

Supersede, no nível de estado, a revisão de 2026-06-12 (que continua válida como
método e como referência de frames/node IDs).

## Método desta rodada
- Build atual (23 páginas) servido em `localhost:4321`; capturas full-page em
  desktop 1440 e mobile 390 **com lazy-load forçado** (a rodada de junho gerou
  falsos "imagem faltando" porque o `loading="lazy"` não carregava na captura).
- 3 subagentes compararam fatia a fatia contra os exports em
  `design-assets/figma-exports/selection/`; **os achados graves foram
  re-verificados pelo orquestrador no código** antes de virar task.
- Auditoria automática de links/rotas/assets sobre o `dist`.
- Checklist interativo entregue ao usuário (267 itens); decisões dele
  incorporadas abaixo.

## Descoberta de método (importante para as próximas rodadas)
Vários itens marcados como "seção faltando" **não estão faltando**: são
componentes que no Figma vivem **fora do frame**, soltos no canvas ao lado.
`design-assets/figma-analysis/selection-raw.json` contém 640 nós, muitos deles
fora dos frames exportados. **Não concluir "não existe no Figma" só porque não
está no PNG do frame.**

Exemplos confirmados pelo usuário: carrossel de Capacitação Profissional,
carrossel de documentários (Monitoramento da Avifauna), bloco institucional/ODS,
Agenda 2025 e a **timeline real do OAMa** (nós `2302:319`–`2302:424`, anos
2017–2025) — esta última completamente diferente da que está hoje em `/sobre`.

## Auditoria de links (2026-08-19)
- **Órfãs**: `/consultoria/cursos` (resolvida nesta rodada), `/newsletter`
  (usuário: manter, serve de referência externa), `/admin` (Studio, por design).
- **Links internos quebrados**: nenhum. **Assets faltando**: nenhum.
- **Apontam para o domínio antigo**: 9 PDFs de relatório em `/sobre`;
  `/realizacoes` → `oama.eco.br/blog` e `/downloads`; `/apoie` → `saltator`.
- **Rotas do legado sem equivalente**: `/blog`, `/downloads`,
  `/anilhamento-demonstrativo`, `/camci`, `/estacao-de-pesquisa`, `/projetos`,
  `/treinamento-cursos`, `/links/[slug]`, `/whatsapp`.
  **Decisão do usuário: migrar só as que o site novo usa; as outras não.**
- **`href="#"`**: 10, todas na home (cards de "OAMa na Mídia").

## Decisões do usuário (2026-08-20)
**Ignorar / manter como está:**
- Home: "Nossas Áreas de Atuação" em cards (não converter em colunas de foto);
  rótulos curtos dos contadores.
- Sobre: "Missão" pode ficar na faixa azul.
- Consultoria: "Frentes de Atuação" podem ficar cardificadas.
- Cursos: texto centralizado pode ficar.
- Treinamento: mosaico de 3 fotos do Intercâmbio não é necessário.
- Footer: logo OAMa circular **fica**.
- `/newsletter`: fica órfã de propósito.

**Direções novas:**
- **Hero (transversal, 7+ rotas): diminuir a altura (não ocupar a tela toda) e
  levar o título para o lugar do frame** (abaixo da foto, sobre a faixa de cor).
- WIKIMUDAS → `https://wikimudas.oama.eco.br`.
- Cursos entra no mosaico do hub de Programas e Projetos.
- `/sobre`: **comentar (remover) a seção Equipe**.
- `/sobre`: timeline atual está errada → usar os nós `2302:*` do Figma.
- `/missao`: é só mobile mesmo, não extrapolar desktop.
- Footer: conferir ícones "estranhos" (Instagram).
- Home (Mídia, Agenda): conteúdo real virá do Otávio.

## Lote 1 — executado nesta rodada (branch `revisao-figma-lote-1`)
Fonte: **Figma-first**. Build ok (23 páginas), render conferido no navegador.

1. `consultoria.astro` — `AEGVAP` → **AGEVAP**, `Casa Latalli` → **Casa Tlalli**.
2. `treinamento-monitoramento-avifauna.astro` — 14 blocos de texto branco sobre
   faixa amarela (`#dfb553`) passaram a tinta escura. Mantidos brancos: o H1 do
   hero (sobre foto) e o card azul.
3. `projetos-de-pesquisa.astro` — 1 bloco (a intro). **O relato do subagente
   dizia 4; só 1 estava sobre amarelo** — o H1 está sobre foto e os outros dois
   em cards escuros.
4. `campanha-jacucara.astro` — reescrita conforme o frame: faixa **roxa
   `#9b8ab6`** (amostrada do export), título centralizado na faixa, hero contido,
   carrossel full-bleed de 3 fotos e os **3 parágrafos que faltavam**
   (documentário/resultados, PAN Aves com os 10 organizadores, link da campanha).
5. `fundraising-field-trip.astro` — fechamento restaurado com os **3 parágrafos**
   do frame (localidades, definição da viagem, destino das doações).
6. `acoes-pro-aves.astro` — restaurada a frase dos **temas focais**.
7. `pro-aves.astro` — removida a copy de documentação de agente exposta ao
   público; contraste do título corrigido.
8. `realizacoes.astro` — WIKIMUDAS ganhou destino.
9. `programas-e-projetos.astro` — card de **Cursos** (resolve a orfandade) e
   subtítulo meta do card de resultados reescrito para linguagem de site.

### Pendências abertas pelo lote 1
- **Jacuçara**: o frame marca 3 links (canal do ICMBio, página do PAN Aves,
  página da campanha). Os destinos não estão no export — texto restaurado **sem
  âncora**. Precisa das URLs.
- A tipografia do corpo continua menor que a do frame em várias rotas.

## Backlog priorizado (lote 2 em diante)
1. **Hero transversal** (altura + posição do título) — 7+ rotas.
2. `/sobre`: remover Equipe; refazer a timeline com os nós `2302:*`; hero;
   logos de parceiros que viraram texto.
3. **"Fale Conosco" nas 3 filhas de consultoria** (o bloco azul do fim do frame
   é esse formulário — mistério T7 resolvido). Usuário perguntou se é necessário.
4. Home: carrosséis que estão fora do frame (capacitação, documentários, ODS,
   agenda) + conteúdo real de Mídia/Agenda.
5. Fotos trocadas/duplicadas: `cursos` (`curso-presencial.jpg` é byte a byte
   igual a `capa-cursos.jpg`), hero de `projetos-de-pesquisa` trocado com o card
   1, heroes de monitoramento/treinamento/cursos.
6. Migrar `/downloads` e `/blog` do legado.
7. Copy de `/consultoria` (cards "Por que escolher" e "Clientes") — a do Figma
   e a implementada são versões diferentes; usuário marcou para corrigir
   seguindo o Figma.

## Lote 2 — executado em 2026-08-20 (branch `revisao-figma-lote-1`)

**Hero transversal** (direção do usuário): foto contida `h-[300px] md:h-[620px]`
e título movido para a faixa de cor, centralizado — em `/consultoria`, nas 3
filhas (via `ConsultoriaServico.astro`), `fundraising-field-trip`,
`projetos-de-pesquisa`, `treinamento-...` e `monitoramento-de-avifauna`.
`acoes-pro-aves` já tinha o padrão; só o contraste do H1 foi corrigido.

**`/sobre`**
- Seção **Equipe removida** (decisão do usuário). O array `equipe` fica no
  arquivo, desativado, para retomada.
- **Timeline refeita** com a copy real dos nós `2302:322`–`2302:424`. O texto
  anterior era inventado de 2020 em diante.
- **Achado**: no Figma o bloco de **2023 repete literalmente a lista de 2022**
  (conferido no frame `Celular_História do OAMa` 2275:277). É erro do design —
  não foi copiado. 2023 ficou só com o título, aguardando os marcos reais.

**`/consultoria`**
- Copy de "Por que escolher o OAMa?" (8 itens) e de "Clientes" (8 categorias)
  substituída pela do Figma (nós `I2616:*`, `I2593:*`, `I2594:813`, `I2619:*`).
- Ícone de check removido dos cards (não existe no frame).

**`/programas-e-projetos/monitoramento-de-avifauna`**
- Citação do Dr. Sekercioglu agora sobre **foto full-width** com nota de
  tradução em faixa azul, como no frame. O asset
  `monitoramento-citacao-fundo.jpg` já existia no repo e não era usado.
- "Técnicas complementares": 3 cards com descrições inventadas viraram o
  **parágrafo corrido do frame** + faixa das 3 fotos.

**Outros**
- Hub de programas: **mosaico mobile corrigido** — tinha `w-[134px]` fixo, o que
  espremia os tiles num terço da tela.
- `/consultoria/educacao-ambiental`: enquadramento do hero (nova prop `heroPos`).
- `ContentCard`: **sem destino real o card não vira mais link**. Com isso o site
  ficou com **zero `href="#"`** (eram 10 na home).
- Cursos: títulos de seção passaram de azul para branco, como no frame.

### Pendências do lote 2
- **Footer**: o usuário reportou "ícones estranhos (insta)". O footer **não existe
  nos exports nem no JSON do Figma**, então não há referência para comparar.
  Hoje os 6 ícones misturam estilo sólido e contorno. Precisa de direção.
- Marcos reais de **2023** para a timeline.
- Conteúdo real de "OAMa na Mídia" e "Agenda" (virá do Otávio).
- Fotos: hero de treinamento/monitoramento/cursos, duplicata em cursos, hero e
  card 1 trocados em projetos-de-pesquisa.
- Carrossel de fotos grandes em `monitoramento-de-avifauna` (o frame tem, a
  implementação não).
