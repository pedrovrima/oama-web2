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
