# O que falta o OAMa fornecer — agosto de 2026

Levantado após os lotes 1–5 da revisão Figma. **Tudo que dava para resolver com o
material já existente no repo e na pasta do cliente (`~/Downloads/WEBSITE/`) está
feito.** O que resta depende de informação externa.

Agrupado por **quem fornece**, porque cada grupo é uma conversa diferente.
6 dos 21 itens bloqueiam o lançamento.

## 1. Conteúdo que envelheceu (OAMa / direção)
O site foi escrito com dados de 2025 e estamos em agosto de 2026.

- **[BLOQUEIA] Marcos de 2026 para a timeline.** A história para em 2025 e o
  último parágrafo abre com "Hoje, em 2025, seguimos realizando…". Precisa do
  texto de 2026 e de ajustar 2025 para passado.
  → `src/components/sections/sobre/HistoriaOAMa.astro`
- **[BLOQUEIA] Números institucionais.** Os 5 contadores da home: `+700`
  participantes, `+8200` materiais, `+480` alunos, `+6` anos de monitoramento,
  `+160` espécies. **O de anos já está errado**: monitoramento desde 2018 = 8 anos.
  → `src/pages/index.astro`
- **DRE 2025.** Os relatórios anuais de 2025 (PTBR, EN e Pró-Aves) já foram
  publicados nesta rodada — estavam no repo sem aparecer em `/sobre`. Falta só
  o DRE, que para em 2024 e não existe no repositório.
  → `src/components/sections/Transparencia.astro`
- **Confirmar pessoas e estatuto.** 18 pessoas cadastradas; estatuto é o de 2024.
  → `src/components/sections/sobre/Membros.astro`

## 2. Comunicação e agenda (Otávio)
Enquanto não chegam, as seções **não são renderizadas** (decisão do lote 4).

- **[BLOQUEIA] Matérias reais de "OAMa na Mídia"** — veículo, título, link,
  imagem. O Figma mostra 5. O que havia eram 5 matérias **inventadas** (G1,
  National Geographic, BBC, Globo Rural, Folha), removidas.
- **[BLOQUEIA] Agenda de 2026** — mês, título, link, foto. Decidir também se o
  título fica "Agenda 2026" ou algo perene ("Próximas atividades").

## 3. Arquivos de design (Figma)
Existem como desenho, não vieram nas exportações nem estão na pasta do cliente.

- **Ícones ilustrados de "Clientes"** (9, circulares azuis) → `/consultoria`
- **Ícones de "Público potencial"** → as 3 filhas de consultoria
- **Ícone do bloco Pesquisa** (barras + lupa) → `/areas-de-atuacao`
- **Logos faltantes**: USP, UFJF, Sec. Turismo de Resende, Observatório
  Ecológico, Laboratório de Ornitologia. Os outros 11 já foram aplicados.
- **Logos de clientes**: AGEVAP e Casa Tlalli em imagem (hoje são texto).

## 4. Links (OAMa)
- **Três âncoras da Campanha Jacuçara**: canal do ICMBio no YouTube
  (documentário "Reconectar pessoas às aves"), página do PAN Aves da Mata
  Atlântica e site da campanha. Os parágrafos foram restaurados sem link em vez
  de chutar URL. → `campanha-jacucara.astro`

## 5. Decisões (sem material)
- **[BLOQUEIA] Contraste do CTA azul** — branco sobre `#5ba4d9` dá **2,71**
  (mínimo 3,0 / 4,5). Está em todas as páginas. Escurecer o azul ou usar tinta
  escura; ambas mexem na identidade do Figma. Recomendação: escurecer o azul.
- **Fale Conosco com backend?** Hoje abre `mailto:`. Dá para reaproveitar o
  mailer da AWS; ~meio dia.
- **reCAPTCHA?** Só faz sentido depois do backend.
- **`/programas-e-projetos/pro-aves` e `/proaves` continuam separadas?**
  Duas páginas do mesmo programa, com 2 parágrafos repetidos.
- **Ordem das fotos no mosaico** de `/programas-e-projetos`: as 7 são as do
  frame, mas 2 posições estão trocadas (Cursos entrou por último).

## 6. Verificações que exigem acesso
- **[BLOQUEIA] Abrir `/admin` logado** (porta **4321** — outras dão
  `CorsOriginError`) e confirmar que os tipos novos (blog, autor, categoria,
  linkTree, link) aparecem e que um post existente abre preenchido.
- **Newsletter de ponta a ponta** — não testada porque inscreveria endereço real.
- **Planos do Stripe** — vêm de snapshot; se mudaram, rodar
  `scripts/fetch-apoie-stripe.mjs`.
- **[BLOQUEIA] Domínio e redirects no dia da virada.** 11 redirects 301 prontos
  em `vercel.json`. Atenção ao `/links/acoes-pro-aves`, provavelmente na bio do
  Instagram do programa.

## Resolvidos — não pedir de novo
- **Chave PIX**: já havia payload real (CNPJ 35713512000180) e QR em
  `public/pix/`. Estava marcado como pendência antiga por engano.
- **Wikimudas**: `wikimudas.oama.eco.br` responde 200 e o card já aponta.
- **Fotos dos heroes**: resolvidas com a pasta do cliente.
- **Marcos de 2023 da timeline**: vieram do docx oficial.
