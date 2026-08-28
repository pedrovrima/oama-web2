# Handoff operacional — OAMa Website v2

## Credenciais (leia antes de dizer que algo está bloqueado)

`.env.example` na raiz lista todas as variáveis, o que cada uma faz e onde gerar.
Os valores reais ficam em `.env` (gitignored).

Build e dev rodam sem segredo nenhum. Só scripts de escrita precisam de token —
hoje `scripts/blog/importar-posts.mjs`, que exige `SANITY_WRITE_TOKEN` e roda em
simulação sem ele.


## Estado em 2026-08-27 — pendencias pontuais (leia isto primeiro)

Build limpo: **35 paginas**. Varredura das 35 rotas em 1440 e 390 (serial,
com `img.decode()` antes de medir): **0 imagens quebradas, 0 overflow**.
Auditoria estatica do `dist`: 0 links internos quebrados, 0 assets faltando,
0 `href="#"`, 0 aspas curvas em atributo. Dos 175 links externos, todos
respondendo.

### O que entrou nesta frente
- **/jacucara:** 4 links externos que davam 404 trocados pelo endereco oficial
  atual (CNCFlora institucional e ficha de Euterpe edulis no ProFlora, Maple
  Leaf, blog do Parque das Aves).
- **Home, secao Midia:** os 2 cards de video ganharam capa vinda da thumbnail
  que o YouTube serve por ID. Os 4 restantes sao materias de G1/ICMBio e
  seguem sem foto de proposito — o comentario no topo de `MidiaSection.astro`
  registra isso.
- **Icones do Figma:** os 9 icones ilustrados de publico foram exportados e
  centralizados em `src/data/icones-publico.ts`; usados em `/consultoria`
  (Clientes) e no "Publico potencial" das 3 filhas, cada pagina na ordem do
  seu proprio frame. Capacitacao tecnica passou de 4 para 6 icones.
- **/programas-e-projetos/projetos-de-pesquisa:** os 9 projetos ganharam a
  descricao completa do documento de redacao, dentro de `<details>` no card.
  Componente novo `TextoRico.astro` para `**negrito**` e `*italico*`.
- **/realizacoes:** entraram os cards **Webapp Xara** (xara.oama.eco.br) e
  **Webapp Colisoes com Vidros** (colisoes.oama.eco.br). O documento nao dava
  URL; os enderecos foram descobertos pelo padrao de subdominio do Wikimudas
  e confirmados no navegador antes de virar link.
- **Blog:** `overflow-wrap: anywhere` no corpo do post — duas paginas rolavam
  na horizontal no celular por causa de URL crua no texto.
- **3 links externos mortos** no resto do site resolvidos (handle do YouTube,
  Saltator e acaijucara.com.br).

### Armadilha nova confirmada
**QA visual em paralelo mente.** Quatro subagentes varrendo o mesmo
`python3 -m http.server` reportaram 37 imagens quebradas. Todas serviam 200
quando testadas direto: o servidor e single-thread e engasgava, e o eval media
`naturalWidth===0` antes da decodificacao. Use `ThreadingHTTPServer`, varra em
**serie** e espere `img.decode()` antes de medir. Nao aceite lista de imagem
quebrada sem conferir o HTTP do asset.

### Pendencias que continuam abertas (precisam do cliente ou de decisao)
- 4 cards de Midia e 2 da Agenda sem arte (materias de terceiros / arte do cliente).
- Contraste do CTA azul (2,71, abaixo do minimo WCAG) — mexer muda a identidade.
- "Apresentacoes e participacao em eventos": aparece so no indice do documento,
  sem corpo; o conteudo hoje vive em `/downloads#academico`. Contradicao do
  proprio documento, nao inventar.
- Depoimentos dos trainees, secao Equipe, fotos da Estacao de Pesquisa e logos
  de USP/UFJF/Secretaria de Turismo seguem fora por decisao do usuario ou por
  falta de material.


## Estado em 2026-08-20 — lote 4 (leia isto primeiro)

Branch `revisao-figma-lote-1`, **11 commits, não enviados ao remoto**.

**A pasta de mídias do cliente existe** em `/Users/anhinga/Downloads/WEBSITE/`
(7,4 GB). Dentro dela, `mídias PROGRAMAS E PROJETOS website/Programas e Projetos
(atualizado)/` tem as fotos dos frames nomeadas por seção, e
`A história do OAMa (NÃO RESUMIDA_2025).docx` é a história oficial completa.
**Comece por aí antes de declarar qualquer coisa bloqueada por falta de asset.**
Doc de referência: `docs/agent-workflow/REVISAO_FIGMA_2026-08-19.md`.

Build limpo: **28 páginas**. QA nas 24 rotas públicas (1440 e 390): 0 imagens
quebradas, 0 overflow horizontal, 0 links internos quebrados, 0 assets faltando,
0 `href="#"`, 0 aspas curvas em atributo.

O site **não depende mais do domínio antigo**: `/downloads` e `/blog` foram
migrados e os 9 PDFs de relatório de `/sobre` são servidos localmente.

### Armadilhas confirmadas (não repita)
1. **Componentes do Figma fora dos frames.** Carrosséis, ODS, agenda e a timeline
   real vivem soltos no canvas (`design-assets/figma-analysis/selection-raw.json`).
   Não concluir "não existe no Figma" pelo PNG do frame.
2. **Captura com `loading="lazy"` mente** — force `eager` e role antes do screenshot.
3. **Autorrelato de subagente infla.** Um relatou "4 blocos de texto branco sobre
   amarelo"; só 1 estava. Outro sugeriu trocar hero e card de projetos-de-pesquisa
   — a foto do card é uma ave morta sobre jornal; a troca teria posto isso no topo.
   **Sempre verificar antes de aplicar.**
4. **Builds concorrentes** de vários agentes sobre o mesmo `dist/` geram
   `Cannot find module dist/renderers.mjs`. Não é defeito do código.
5. **RTK**: `git status --short` retornou vazio havendo 10 arquivos alterados.
   Para qualquer saída usada para decidir, prefixe `rtk proxy`.
6. **O Figma tem erros próprios**: o bloco de 2023 da timeline repete a lista de
   2022. Não copiar o erro nem inventar substituto.


## O que foi feito na última frente (2026-08-19/20): revisão + lote 1

Nova revisão completa contra o Figma (a de junho estava desatualizada: T1/T2/T4/T5/T6
já tinham sido executadas). Produtos:

- `docs/agent-workflow/REVISAO_FIGMA_2026-08-19.md` — diagnóstico atual, auditoria
  de links, decisões do usuário e backlog do lote 2. **Leia este antes do de junho.**
- Checklist interativo entregue ao usuário (267 itens, marcação corrigir/ignorar +
  comentário). As decisões dele já estão no doc acima.
- **Lote 1 implementado** na branch `revisao-figma-lote-1` — 9 arquivos, build ok
  (23 páginas), render conferido no navegador com lazy-load forçado.
  **Ainda não commitado** (aguardando o usuário).

### Armadilhas confirmadas nesta rodada
1. **Componentes fora do frame.** O Figma tem nós soltos no canvas, ao lado dos
   frames. Carrosséis, ODS, agenda e a timeline real do OAMa estão lá
   (`design-assets/figma-analysis/selection-raw.json`, nós `2302:*` para a timeline).
2. **Captura com `loading="lazy"` mente.** Screenshots full-page mostram imagens em
   branco que existem. Forçar `loading='eager'` + scroll antes de capturar.
3. **Autorrelato de subagente infla.** Um relatou "4 blocos de texto branco sobre
   amarelo" em `projetos-de-pesquisa`; só 1 estava sobre amarelo. Sempre conferir.
4. **Não inventar URL.** Os 3 links do frame da Jacuçara ficaram sem âncora,
   registrados como pendência, em vez de chutar destino.

### Próximo passo recomendado
Lote 2, na ordem do backlog: hero transversal (altura + posição do título),
depois `/sobre` (remover Equipe, timeline correta dos nós `2302:*`).


## O que foi feito na última frente (2026-06-12, parte 2): T5 + T2

Tasks transversais **T5 (Nav/hero)** e **T2 (descardificação)** executadas. O
orquestrador fez o componente global; 4 subagentes haiku fizeram as páginas
(arquivos sem sobreposição), com revisão e QA visual do orquestrador.

- **T5 global (Nav.astro):** a variante `overlay` agora é transparente sobre o
  hero (links brancos, hambúrguer branco, pill "Apoie" amarela) e vira sólida
  branca no scroll (>24px) via classe `is-scrolled` + `<style>` + script. Labels
  já estavam corretos ("Prestação de Serviços", "Loja").
- **Por página (T5 hero + T2 bandas):** hero vira full-bleed alto (`min-h-[85vh]`)
  com a foto de fundo, título branco sobreposto e `navVariant="overlay"`; cards
  arredondados viram faixas full-bleed coloridas (amarelo/creme/azul/navy/branco)
  separadas pelas ondas EXISTENTES (`WaveDark`/`WaveTransition`/`waveSeparator`).
  Páginas tocadas (12): hubs `/consultoria` e `/programas-e-projetos`; filhas de
  consultoria (`capacitacao-tecnica`, `monitoramento-de-aves`, `educacao-ambiental`,
  `cursos`); filhas de programas (`acoes-pro-aves`, `campanha-jacucara`,
  `fundraising-field-trip`, `monitoramento-de-avifauna`,
  `treinamento-monitoramento-avifauna`, `projetos-de-pesquisa`).
- **Verificação:** build limpo OK (22 páginas); auditoria estrutural das 12
  páginas (overlay aplicado, hero alto, zero `href="#"`); QA visual em 6 páginas
  (consultoria, programas hub, acoes-pro-aves, jacucara, fft, treinamento).
- **Bug pego no QA (NÃO confiar no autorrelato/build):** o subagente escreveu
  `campanha-jacucara.astro` inteiro com **aspas curvas** (`class=”…”`, `src=”…”`).
  O build PASSOU mas o browser não parseava os atributos → hero e imagens
  quebrados. Corrigido (58 delimitadores de atributo → aspas retas, preservando
  as aspas curvas legítimas da prosa). Mesmo erro já tinha quebrado `cursos.astro`
  antes (corrigido na mesma rodada). **Lição: sempre conferir render, não só build.**

### Pendências/decisões abertas desta frente (precisam do usuário)
- **Conteúdo removido dos frames-curtos** (acoes-pro-aves, jacucara, fft): os
  subagentes reduziram ao escopo do frame e **apagaram** seções extras (Parceiros
  da Campanha, "Caminhos pela Mantiqueira", "Impacto das Doações", Temas Focais,
  Formatos e Ações, Parceiros Citados). Isso é a decisão pendente §6.5 da revisão
  ("descartar ou realocar?"). Como esses arquivos são **untracked** (sem baseline
  git), o conteúdo só existe nos relatórios dos subagentes — confirmar com o
  usuário se algo deve voltar/ir para `/proaves`.
- **CTA padrão pontes/newsletter:** não está nessas páginas (nem em
  `/areas-de-atuacao` etc.) — a decisão "CTA em todas as páginas (uma vez)" segue
  como task pendente separada, não foi aplicada nesta frente.
- **TODOs deixados nos arquivos:** "bloco azul final" (T7) nas 3 filhas de
  consultoria e em `cursos`; slot de logos em Clientes do hub `/consultoria`;
  reCAPTCHA NÃO implementado (decisão §6.1); posição do 7º item ("Resultados
  Pró-Aves") no mosaico do hub de programas.

## Estado atual

- **TASK-LAUNCH-001 está em andamento (2026-07-20):** lançamento antes de CMS. Escopo: auditoria de rotas/links/assets/responsividade/newsletter e correções estritamente bloqueadoras. Brief em `docs/implementation/pages/lancamento.md`. Topologia Herdr: abas Coordenação, Triagem e evidências, Newsletter e integração, QA e release; Pi usa a conta `openai-pedro`, Claude Code faz auditorias focadas. **Fable proibido.**
- Linear é a fonte oficial de gestão.
- Docs locais em `docs/agent-workflow/` são a camada operacional do orquestrador.
- Regra ativa: uma issue em progresso por vez.
- Por direção do usuário, **não tocar em home (`PED-37`) nem sobre (`PED-38`) nesta rodada**.
- Não há issue ativa no Linear neste momento.

## Concluído no fluxo recente

- `PED-31` — separação conceitual de `pro-aves` / `acoes-pro-aves`.
- `PED-32` — `/consultoria` hub visual curto.
- `PED-33` — `/programas-e-projetos` hub visual curto.
- `PED-34` — filhas de consultoria.
- `PED-40` — filhas de programas/projetos.
- `PED-41` — `/missao`.
- `PED-39` — `/areas-de-atuacao`.
- `PED-36` — `/realizacoes`.
- `PED-35` — `/apoie`.
- `PED-42` — `/pix`.

## O que foi feito na última frente (2026-06-12): revisão Figma vs implementação

Por diretiva direta do usuário ("grande projeto de revisão de todas as páginas"),
todas as rotas Figma-first foram comparadas frame a frame com o build atual.
**Nada foi implementado** — o produto é o documento de planejamento
`docs/agent-workflow/REVISAO_FIGMA_2026-06-12.md`, que é a fonte operacional desta
frente daqui em diante. Pontos-chave:

- 7 padrões transversais (CTA duplicado, "cardificação", assets errados — há até
  onça-pintada e robin europeu em heroes —, footer com X/Twitter inexistente no
  Figma, nav/hero, link "Voltar" extra, fins de frame ambíguos).
- Divergências por rota com frames/node IDs e o que refazer em cada uma.
- Seção 6 do documento lista 8 decisões pendentes do usuário — não implementar
  esses pontos sem resposta.
- Ordem recomendada: componentes globais (Footer/Nav/CTA) antes das páginas.
- Scripts de captura/comparação reutilizáveis: `scripts/revisao/` (README incluso).
- Home/Sobre: a revisão delas foi feita, mas a implementação segue precisando de
  liberação explícita do usuário (PED-37/PED-38 pausadas).

Atualização (2026-06-12, mesma data): **T1, T4 e T6 já foram executadas** com
subagentes + revisão do orquestrador (ver SUBTASKS "Concluídas em 2026-06-12").
Build ok (22 páginas); verificação por varredura no dist e screenshot do footer.
Decisões novas do usuário: (a) o CTA pontes/newsletter padrão fica em TODAS as
páginas — frames do Figma sem o bloco são falha de design; (b) T3 (troca de
fotos erradas) aguarda pasta de assets que o usuário vai fornecer.

## O que foi feito na frente anterior (2026-06-11, parte 2): `/proaves`

Migração `Legacy-first` da página de **resultados** do Pró-Aves
(`oama-website/pages/proaves/index.jsx`) com todas as animações, por diretiva
direta do usuário. Distinta da descritiva `/programas-e-projetos/pro-aves`.

- Implementada como ilha React (`client:load`): `src/components/proaves/`
  (ProAvesApp + 7 modais + ui shadcn portada + shims de next/image).
- Novas deps: framer-motion, radix dialog/accordion/slot, cva, clsx,
  tailwind-merge, lucide-react, react-icons, embla-carousel-react,
  react-responsive-carousel, tw-animate-css.
- global.css ganhou: import de tw-animate-css, `.font-montserratsemi`,
  keyframes accordion-down/up.
- Assets: `public/proaves/` copiada inteira; `public/proaves2/` completada
  (tsurus t-*.png, ap*.png); 8 PDFs novos em `public/publicacoes/files/`.
- Em `/apoie`, o item "Pró-Aves" voltou a apontar para `/proaves` (destino do legado).
- Verificado em browser: modais, accordions, contadores, carrosséis, mobile.
- Detalhes e diferenças intencionais em `docs/implementation/pages/proaves.md`.

## O que foi feito na frente anterior (2026-06-11, parte 1)

`/apoie` foi **reimplementada como migração Legacy-first pixel perfect** do site antigo
(`oama-website/pages/apoie/index.js`), por direção direta do usuário ("quero pixel
perfect, tudo tem que funcionar"). Supersede a versão Hybrid da PED-35.

Decisões importantes:

- Planos de doação recorrente do Stripe agora vêm de snapshot estático commitado
  (`src/data/apoie-stripe.json`), gerado por `scripts/fetch-apoie-stripe.mjs`.
  O script reutiliza payment links ativos existentes; o build na Vercel **não**
  precisa de `STRIPE_KEY`. A chave vive no `.env` local (gitignored).
- Carrosséis usam `embla-carousel` (vanilla, nova dependência) com script client-side.
- CSS custom do legado (`hero`, `hero-small`, `md:hero-path`, embla) portado verbatim
  em `<style is:global>` na própria página, preservando a ordem de cascata.
- Typos do legado corrigidos e links internos remapeados — lista completa de
  diferenças intencionais em `docs/implementation/pages/apoie.md`.
- PDFs da lista de ações copiados para `public/publicacoes/files/`.
- Cuidado operacional: o hook RTK reescreve comandos shell e já **corrompeu o `.env`**
  uma vez nesta frente (output truncado do RTK foi parar dentro do arquivo, via
  redirect `>>`). Para appends/edições de arquivos sensíveis, usar os tools de
  Write/Edit ou `rtk proxy`.

Verificação: build ok (21 páginas); screenshots desktop/mobile conferidos seção a
seção; carrosséis testados com clique no browser; payment links, PDFs e rotas
internas checados (HTTP 200 / 6 links `buy.stripe.com` no HTML).

## Próximo passo mais seguro

1. Adicionar a chave PIX/QR code oficial em `/pix` quando o OAMa fornecer.
2. Se os planos de doação mudarem no Stripe, rodar `node scripts/fetch-apoie-stripe.mjs`
   e commitar o JSON atualizado.
3. Resolver o 404 global de `/logo-oama.svg` referenciado pelo Nav (pré-existente).
4. Iniciar a trilha Sanity/CMS somente depois de decidir quais conteúdos devem ser editáveis.
5. Retomar `PED-37` ou `PED-38` apenas se o usuário liberar home/sobre.

## Verificação obrigatória

Último build executado com sucesso:

```bash
PATH="$HOME/.local/bin:/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin" npm run build
```

Resultado: build passou, 21 páginas geradas. Warnings restantes são pré-existentes do Sanity Studio/chunks grandes e depreciação de `@sanity/image-url`.
