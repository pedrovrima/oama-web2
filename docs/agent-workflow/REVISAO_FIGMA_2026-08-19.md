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

## Auditoria de contraste (2026-08-20, medida no navegador)

Medição real de WCAG por nó de texto contra o fundo efetivo (não heurística de
classe CSS). A maioria dos "reprovados" é **falso positivo**: texto branco sobre
foto de hero, que o medidor não consegue avaliar. Conferidos visualmente um a um.

**Achado real e global:** o CTA "Nos Ajude a Construir Pontes" / "Assine a
Newsletter" usa branco sobre o azul `#5ba4d9` → contraste **2,71**.
- títulos (30–40px, bold): exigido 3,0 → reprovado por pouco
- corpo e botões (18px): exigido 4,5 → reprovado com folga
- afeta **todas as páginas** (o CTA é global)

As duas saídas divergem do Figma, então isto é **decisão do usuário**:
1. escurecer o azul do CTA (ex.: `#2c6e9b` atinge 4,5 com branco) — muda a
   identidade visual em todas as páginas;
2. manter o azul e passar o texto para tinta escura `#1e1702` — resolve a
   legibilidade preservando a cor, mas o Figma desenha o texto em branco.

Não foi alterado unilateralmente por mexer na identidade aprovada do cliente.

**Verificado e OK:** zero imagens sem `alt` em todo o `src/`.

## Lote 3 — 2026-08-20, executado com 5 subagentes em paralelo

Por diretiva do usuário ("faça todas as correções encontradas e óbvias, mesmo as
que eu não aprovei"). Arquivos disjuntos por agente; revisão e QA final do
orquestrador.

**Migrações do legado (as 2 rotas que o site novo referenciava)**
- **`/downloads`** — 45 cards (23 Divulgação Científica, 14 Institucional,
  8 Acadêmico), 43 PDFs locais + 2 vídeos do YouTube. Assets copiados do legado:
  `public/publicacoes/img/` 0 → 57 e `files/` 14 → 63. Os 43 PDFs e as 45 capas
  foram testados por HTTP: todos 200.
- **`/blog`** — listagem + post individual, direto do Sanity (`1tnejkhf`,
  `_type: "blog"`), **o mesmo projeto que este repo já usava**. 2 posts reais.
  Renderizador de Portable Text escrito à mão, sem nova dependência.
- `/realizacoes` deixou de apontar para `oama.eco.br`: agora `/downloads`,
  `/downloads#academico` e `/blog`.

**Fale Conosco nas 3 filhas de consultoria** — implementado (o frame mobile
mostra o formulário no fim). Campos do Figma, botão "Enviar", mesmo
comportamento `mailto:` do hub, sem reCAPTCHA e sem texto placeholder.
Nos pills o texto ficou em tinta escura, não branco: branco sobre amarelo é
ilegível (é o mesmo defeito corrigido no lote 1).

**Outros**
- Filhas de consultoria: "Diferenciais" ganha faixa amarela própria no mobile.
- Footer: os 6 ícones sociais padronizados em glifo sólido, mesmo viewBox e peso.
  Destinos preservados. (Sem referência no Figma — decisão de consistência.)
- `monitoramento-de-avifauna`: carrossel full-bleed de 3 fotos.
- `/realizacoes`: hero reenquadrado (`object-position 35%`), mostrando ave e
  galho inteiros. Reduzir a altura pioraria o corte — a foto é 3:2.
- `/sobre`: os 9 PDFs de relatório passaram a ser servidos **localmente**;
  o site não depende mais do domínio antigo para eles.
- `/consultoria/cursos`: o item do curso presencial ficou sem foto, porque a
  que estava lá era a mesma do hero (md5 idêntico).

**Verificação final** (build limpo, sem concorrência): 27 páginas.
Nas 24 rotas públicas, desktop 1440 e mobile 390: **0 imagens quebradas,
0 overflow horizontal, 0 links internos quebrados, 0 assets faltando,
0 `href="#"`, 0 aspas curvas em atributo.**

### Achados que ficam registrados
- O erro de build `Cannot find module dist/renderers.mjs` relatado pelos agentes
  era **corrida entre builds concorrentes** no mesmo `dist/`, não defeito do
  código. Com `dist` limpo e um build por vez, passa.
- `_type: "blog"` (e `author`, `imageWithAlt`) **não têm schema** em
  `src/sanity/schemaTypes/`: os posts existem no dataset mas não são editáveis
  pelo Studio em `/admin`. Portar os schemas é task separada.
- `/blog/old/[slug]` do legado (posts em markdown) não foi migrado.
- Em `monitoramento-de-avifauna` as 3 fotos do carrossel são as mesmas da faixa
  de imagens no fim da página — decidir se a faixa sai.

## Lote 4 — 2026-08-20 (segunda rodada, 6 subagentes)

### Descoberta que destravou quase tudo
**A pasta de mídias do cliente existe**: `/Users/anhinga/Downloads/WEBSITE/`,
7,4 GB, 1.060 imagens organizadas por página. E dentro de
`mídias PROGRAMAS E PROJETOS website/Programas e Projetos (atualizado)/` estão
**as fotos que o designer usou nos frames**, nomeadas por seção (`Cursos.png`,
`Monitoramento.png`, `Treinamento.png`, `FFT.png`, `Pesquisas.png`…).
A mesma pasta tem `A história do OAMa (NÃO RESUMIDA_2025).docx`, a história
oficial completa — fonte melhor que o Figma para a timeline.

### Conteúdo fabricado removido (achado grave)
- "OAMa na Mídia" trazia **5 matérias inventadas** atribuídas a G1, National
  Geographic, BBC Brasil, Globo Rural e Folha, com fotos do Unsplash. Imprensa
  fictícia no site de uma ONG científica é dano de credibilidade.
- "Agenda 2025" trazia eventos de exemplo, também com Unsplash.
- `/sobre` tinha **5 imagens de `placehold.co`** (serviço externo).
Todas as três seções agora só renderizam com conteúdo real; os parceiros sem
logo caem no fallback de texto. **Zero dependência de serviço externo de imagem.**

### Timeline
2023 preenchido com os marcos reais do docx; demais anos complementados onde o
docx acrescenta fato (Assembleia de Fundação com os fundadores nomeados, saída
da Raquel Justo, números de cada edição do Treinamento). Título de 2024
atualizado para a versão do docx.

### Fotos
Heroes de cursos, treinamento, monitoramento-de-avifauna e sobre; as 7 fotos do
mosaico do hub; hero e os 9 cards de projetos-de-pesquisa remapeados 1:1;
carrossel do FFT com a placa do Itatiaia; cluster Pesquisa de áreas-de-atuação.
Espécies conferidas uma a uma. **17 assets órfãos removidos.**

Registro: `pesquisa-card-1.jpg` (ave morta sobre jornal) **é do frame** — é o
card "Colisões de aves com vidro". O defeito era estar no card 1. Um relatório
anterior sugeria trocá-la com o hero; teria posto um espécime no topo da página.

### Rotas novas
- **`/links/[slug]`** — existe 1 linktree no Sanity (`acoes-pro-aves`, 9 links),
  provavelmente na bio do Instagram do programa. Sem essa rota, quebraria no
  lançamento. URLs do domínio antigo com equivalente local são reescritas em
  código; o Sanity não foi editado.
- **`vercel.json`** com 11 redirects **301** das rotas do site antigo
  (`/quem-somos`, `/projetos`, `/jacucara`, `/jucara`, `/treinamento-cursos`,
  `/camci`, `/estacao-de-pesquisa`, `/anilhamento-demonstrativo`,
  `/blog/old/:slug`, `/whatsapp`). Nota: `"permanent": true` na Vercel emite
  **308**, por isso `"statusCode": 301` explícito.

### Schemas do Studio
`blog`, `author`, `category`, `imageWithAlt`, `linkTree`, `link`, modelados
sobre os documentos reais do dataset. Sem eles o OAMa não conseguia publicar
post pelo `/admin`.

### SEO (não existia)
O `BaseLayout` tinha só charset, viewport e title. Agora: meta description por
página, Open Graph + Twitter card, canonical absoluto, favicon linkado (o
arquivo existia sem link), theme-color, `site` no astro.config,
`src/pages/sitemap.xml.ts` (sem dependência nova, inclui os posts do blog) e
`public/robots.txt` com `Disallow: /admin`.

### Performance
**73 imagens de 440 MB → 85 MB (-81%)**. O site servia fotos em resolução de
câmera (9071×6803, uma com 23 MB), o que inviabilizava `/apoie` e `/proaves` em
conexão móvel. Redimensionadas para 2000px, JPG q82 progressivo, formato e nome
preservados. Qualidade comparada antes/depois na resolução real: indistinguível.

### Verificação final
Build limpo: **28 páginas**. As 25 rotas públicas respondem 200 com **0 imagens
faltando** (411 imagens verificadas por HTTP), 0 links internos quebrados,
0 `href="#"`, 0 aspas curvas em atributo.

### O que continua bloqueado (material ou decisão)
- **Ícones ilustrados** de Clientes e Público potencial: não estão na pasta do
  cliente; precisam ser exportados do Figma.
- **Logos** de USP, UFJF, Turismo Resende e Observatório Ecológico: idem.
- **Conteúdo real** de "OAMa na Mídia" e "Agenda" (as seções somem até chegar).
- **Contraste do CTA azul**: 2,71, abaixo do WCAG. As duas saídas mudam a
  identidade visual em todas as páginas — decisão do usuário.
- **Studio**: um humano com login precisa abrir `/admin` (na porta **4321** — em
  outras portas dá `CorsOriginError`) e confirmar que os tipos novos aparecem.
- **Fale Conosco** com backend + reCAPTCHA: caminho descrito, não implementado.
- Ícone do cluster Pesquisa em `/areas-de-atuacao` diverge do frame.
