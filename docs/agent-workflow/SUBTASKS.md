# SUBTASKS

## Legenda de status
- `pending` — ainda não iniciada
- `in_progress` — sendo trabalhada agora
- `blocked` — depende de decisão ou material
- `review` — implementada, aguardando revisão humana
- `done` — concluída e documentada

## Diretriz atual do usuário
- **Foco agora: tudo que está no Figma.**
- **Fidelidade ao Figma > aproximação > inferência.**
- `apoie` fica para depois.
- O status oficial vive no Linear; este arquivo é a camada operacional local.
- Nesta fase, manter **uma única issue do Linear em progresso por vez**.

## Fila serial oficial

### Concluídas nesta fase
- `PED-31` — `done` — separar `acoes-pro-aves` e `pro-aves`
- `PED-32` — `done` — `/consultoria`
- `PED-33` — `done` — `/programas-e-projetos`
- `PED-34` — `done` — filhas de consultoria
- `PED-40` — `done` — filhas de programas/projetos
- `PED-41` — `done` — `/missao`

### Em execução
- Home (`PED-37`) e Sobre (`PED-38`) seguem pausadas por direção do usuário.

### Newsletter 2026-06-13: integração com o mailer self-hosted (§6.2)
Endpoint real da newsletter implementado (atravessa 2 repos). Detalhes completos
em `docs/implementation/pages/newsletter.md`.
- **`newsletter-oama`** (repo separado, NÃO deployado): adicionado `POST
  /api/subscribers` (antes só `GET` — a página de inscrição postava para endpoint
  inexistente). Double opt-in, honeypot, CORS para `*.oama.eco.br`. tsc limpo.
- **`oama-web2`**: `src/scripts/newsletter.ts` (AJAX compartilhado), form do
  rodapé (`Footer.astro`) agora envia de verdade, e nova página `/newsletter`.
  Build 23 páginas; submit verificado com endpoint mockado.
- **Pendências de deploy** (ver doc): deployar o mailer; garantir lista slug
  `newsletter` no Supabase; conferir envs/CORS por domínio. reCAPTCHA (§6.1) segue
  aberto (só honeypot hoje).

### Varredura de fidelidade 2026-06-13: /areas-de-atuacao, /realizacoes, /missao
Comparação render (desktop+mobile, escala real) vs exports do Figma. **Resultado:
as 3 rotas já estão alinhadas ao Figma — nenhuma precisou de rework.** As queixas
da revisão §5.3–5.5 já tinham sido resolvidas nas ondas de assets (T3):
- `/areas-de-atuacao` (§5.4): hero correto (saíra, não mais robin); as 3 seções
  (Pesquisa amarela / Comunicação azul / Capacitações amarela) têm clusters de
  fotos circulares REAIS + anel branco/logo + ícone, batendo as faixas de cor do
  frame; colagens duplas presentes. (A 1ª leitura de "anéis vazios" foi artefato
  de thumbnail reduzido — em escala real as fotos aparecem.)
- `/realizacoes` (§5.5): hero (saíra no galho) + título sobreposto; faixa amarela
  com 5 cards brancos 2-col (Downloads/Documentários/Wikimudas/Divulgação
  Científica/Textos Acadêmicos). Cards não têm `href` (informativos) — destino
  real de cada um segue pendência de conteúdo (não inventar).
- `/missao` (§5.3): hero ave amarela + "MISSÃO", texto, ODS 13/15, parágrafo da
  Década da ONU, 2ª foto (gavião em tronco) — as 2 fotos do frame já trocadas.
Zero `href="#"` nas 3. CTA padrão presente via Footer.

### Concluídas em 2026-06-12 (parte 3): QA responsivo + menu mobile
- **QA responsivo (item 1)** — `done` — screenshots mobile (390px, full-page) das
  12 páginas refeitas. 11 renderizam limpas, footer/CTA presente em todas. 1
  defeito corrigido: `acoes-pro-aves` tinha placeholder visível "Imagem
  ilustrativa: foto de atividade artística" (TODO do bordado) → removido, texto
  passou a ocupar a faixa (carrossel real logo abaixo).
  **Correção de registro (2026-06-13):** as 2 "nuances" que eu havia anotado NÃO
  existem — eram leitura errada dos thumbnails mobile reduzidos. Reverificado com
  screenshots em escala real: (a) Serviços/Diferenciais das filhas de consultoria
  É `bg-white` com texto escuro (o bloco escuro abaixo é o "Público Potencial",
  navy por design no Figma); (b) o mosaico do hub de programas é uniforme — os 7
  tiles têm foto (inclusive "Resultados Pró-Aves"). Nenhuma mudança necessária.
- **CTA padrão (item 2)** — `não era necessário`: o CTA "NOS AJUDE A CONSTRUIR
  PONTES / ASSINE A NEWSLETTER" É o `Footer.astro`, incluído no `BaseLayout` →
  já está em TODAS as páginas, uma vez. Adicionar in-page recriaria a duplicação
  que o T1 removeu. Decisão T1 já satisfeita estruturalmente.
- **T5.16 menu mobile (item 3)** — `done` — drawer do `Nav.astro` refeito conforme
  `mobile-celular-menu-2214_169.png`: fundo com foto (hero importado) + wash
  branco, logo centralizado + X, links alinhados à esquerda em teal `#13414f`,
  pill Apoie à esquerda, bloco de título "CONSERVAÇÃO COM CIÊNCIA" + subtítulo no
  rodapé. Verificado no browser.

### Concluídas em 2026-06-12 (parte 2)
- `REV-T5` — `done` — Nav/hero. Nav.astro: variante `overlay` agora transparente
  sobre o hero (links/hambúrguer brancos, pill Apoie amarela) e sólida no scroll.
  Por página: hero full-bleed alto + título sobreposto + `navVariant="overlay"`.
- `REV-T2` — `done` — descardificação: cards arredondados → faixas full-bleed
  coloridas com ondas existentes, nas 12 páginas Figma-first (2 hubs + 10 filhas).
  Build limpo OK; QA visual em 6 páginas; bug de aspas curvas em campanha-jacucara
  pego e corrigido. Decisões abertas registradas no HANDOFF (conteúdo removido dos
  frames-curtos §6.5, CTA padrão, TODOs T7/Clientes/reCAPTCHA).

### Concluídas em 2026-06-12 (frente de revisão Figma)
- `REV-T1+T6` — `done` — CTAs duplicados, placeholder "Formulário ilustrativo" e
  links "← Voltar para…" removidos das filhas (subagente + revisão do orquestrador).
  Verificado no build: 21 páginas com exatamente 1 CTA, zero "voltar"/placeholder.
  Decisão do usuário registrada: o CTA padrão fica em TODAS as páginas (uma vez).
- `REV-T4` — `done` — footer: X/Twitter removido, ícone Loja (sacola) adicionado,
  ordem IG/YT/LinkedIn/FB/WhatsApp/Loja; URLs sociais reais aplicados (legado +
  LinkedIn oficial via busca); links "Loja" do nav e do footer agora apontam para
  `https://use.oama.eco.br` (antes: `/loja`, rota inexistente).
- `REV-T3` (assets) — **onda 1 `done`** (2026-06-12, 4 subagentes + auditoria do
  orquestrador): mídias oficiais de `/Users/anhinga/Downloads/WEBSITE/` espalhadas
  em /areas-de-atuacao, /realizacoes, /consultoria (+3 filhas e /cursos) e
  /programas-e-projetos (hub + 6 filhas). ~50 imagens otimizadas (sips, JPEG
  ≤1920px) em `public/midias/<rota>/`; zero Unsplash restante nessas rotas;
  heroes errados (onça, maçã/ABC, pisco europeu) corrigidos; logo do Nav
  consertado (`/brand/logo-round.png` no lugar do 404 `/logo-oama.svg`).
  Logos de clientes otimizados em `public/midias/consultoria/` aguardando o
  redesign da seção Clientes (sem slot hoje).
  **Onda 2 `done`** (2026-06-12, home/sobre/missão liberadas pelo usuário —
  PED-37/38 deixam de estar pausadas para troca de mídia): carrosséis da home
  com fotos reais e links reais (`#` removidos); /sobre com hero, retratos de
  Luiza/Pedro, ~12 logos de parceiros/colaborações e capas da Transparência;
  /missao com as fotos OFICIAIS (`capa_missão`/`rodapé_missão`, achadas na
  pasta "mídias HOME website"). Zero Unsplash exceto fallbacks de
  MidiaSection/AgendaSection (Sanity, intencional). Build válido.
  **Pendências da onda 2 — RESOLVIDAS em 2026-06-12 (mesma data):**
  - Equipe do /sobre agora é REAL: 11 retratos curados da pasta
    "mídias SOBRE website" (Luiza, Pedro, Affonso, Otávio, Danielle,
    Rafaella Vitti, Andreza Freitas, Juliana Costa Villa, Mariana Franciscão,
    Matheus Pinheiro, Rachel Fidelis); cargos verificados no legado/Figma.
    Cargos de Juliana/Mariana/Matheus/Rachel ficaram vazios — confirmar com OAMa.
  - Logo AVISTAR aplicado. Capas: Relatório Anual 2021 (mockup do legado),
    Estatuto Social e DREs 2022–2024 (PDFs achados em
    "mídias ÁREAS DE ATUAÇÃO website"; copiados para
    public/publicacoes/files/ com links reais nos cards; adicionados ao seed
    do Sanity como arquivoInstitucional).
  - Timeline da História: picsum substituído pelas fotos reais 1–7.png
    mapeadas por ano via frame Celular_História (2275:277): 2017→1, 2018→2,
    2019→3, 2021→4, 2022→5, 2023→6, 2024→7; 2020 sem foto (igual ao design).
  **Pendências que SEGUEM abertas:**
  - Logos sem arquivo em lugar nenhum: Turismo Resende, "Observatório
    Ecológico", "Lab Ornitologia", UFJF, USP — e esses NOMES podem ser
    invenções de placeholder; o redesign §5.2 deve reconstruir a lista de
    parceiros a partir dos logos do frame. Logo não identificado disponível:
    logo-lab-interacoes.jpg ("Nectar-feeding vertebrates and flowers").
  - Textos da timeline da História divergem dos textos longos do frame
    mobile (2275:277) — revisar copy no redesign §5.2.
  - Pasta "mídias HOME website" tem thumbnails do OAMa na Mídia, badges ODS,
    fotos de capacitação e saíra-amarela transparente.png — usar no redesign
    da home e no seed do Sanity (midiaItem/homeSlide).
  - Servidor de preview local: porta 4321 pertence ao `astro dev` do projeto
    use-oama (desde 2026-06-08); o preview do oama-web2 está em
    `localhost:4330` (nohup, log em /tmp/oama-preview.log).
- Sanity/seed Transparência: script pronto (`scripts/sanity/seed-transparencia.mjs`),
  aguardando login do Sanity CLI (falhou em modo não-interativo; usuário decidiu
  esperar). Pendência extra: PDFs de Estatuto Social e DREs não existem nos repos.

### Próximas, em ordem fixa
1. `PED-37` — `skip por direção do usuário nesta rodada`
   - rota: `/`
2. `PED-38` — `skip por direção do usuário nesta rodada`
   - rota: `/sobre`
3. trilha Sanity/CMS — `planejada` (2026-06-12)
   - o mapeamento do que é CMS vs hardcoded está em
     `docs/agent-workflow/PLANO_SANITY_2026-06-12.md` (cumpre a TASK-060 no nível
     de planejamento); implementação por seção, sincronizada com a frente Figma
     (ver §5.3 e §6 do plano).

### Recém-concluída
- `PED-39` — status local: `done`
  - rota: `/areas-de-atuacao`
  - tipo: `Figma-first`
  - observação: revisada contra desktop/mobile, imagens internas locais verificadas e build válido.
- `PED-36` — status local: `done`
  - rota: `/realizacoes`
  - tipo: `Figma-first`
  - observação: revisada contra desktop/mobile, CTA duplicado removido e build válido.
- `PED-35` — status local: `done` (superseded)
  - rota: `/apoie`
  - tipo: ~~`Hybrid`~~ → **`Legacy-first`** desde 2026-06-11, por direção do usuário
  - observação: página reescrita fiel ao legado (`pages/apoie/index.js`), com Stripe
    estático via `src/data/apoie-stripe.json` e carrosséis embla. Build e verificação
    em browser válidos. Ver `docs/implementation/pages/apoie.md`.
- `PED-42` — status local: `done`
  - rota: `/pix`
  - tipo: `Hybrid` / `Legacy-derived`
  - observação: rota criada sem inventar chave PIX/QR code; build válido.
- (sem issue Linear — diretiva direta do usuário 2026-06-11) — status local: `done`
  - rota: `/proaves`
  - tipo: `Legacy-first`
  - observação: página de resultados do Pró-Aves migrada do legado com animações
    (ilha React). Distinta de `/programas-e-projetos/pro-aves`. Build e verificação
    em browser válidos. Ver `docs/implementation/pages/proaves.md`.
5. `TASK-130` — `pending`
   - tipo: `CMS-first`
   - observação: só depois da estabilização visual

## Backlog detalhado
Ver (em ordem de atualidade):
- **`docs/agent-workflow/REVISAO_FIGMA_2026-06-12.md`** — revisão frame a frame
  mais recente; fonte operacional da frente de fidelidade ao Figma (tasks T1–T7
  transversais + seções 5.1–5.16 por rota + ordem de execução na seção 8).
- `docs/agent-workflow/FIGMA_REVIEW_BACKLOG.md`
- `docs/agent-workflow/LINEAR_LOCAL_ALIGNMENT.md`
- `docs/agent-workflow/AUDITORIA_FIGMA_LEGADO_2026-06-07.md` (superseded em
  detalhe pela revisão de 2026-06-12)

## Modelo de operação
Ao iniciar uma task nova:
1. mova o status para `in_progress`
2. registre a fonte principal
3. compare com o frame/exportação correspondente antes de editar
4. limite o escopo de arquivos
5. ao terminar, atualize este arquivo e o `HANDOFF.md`
6. mantenha o status oficial sincronizado no Linear
