# Revisão Figma vs Implementação — 2026-06-12

Documento de referência para a frente de **revisão de todas as páginas contra o Figma**.
Escrito pelo orquestrador para os agentes implementadores. Leia inteiro antes de pegar
qualquer task desta frente. Em caso de conflito entre este documento e o frame vivo no
Figma, **o Figma vence** — este documento diz *onde olhar*, não substitui o design.

## 1. Método usado nesta revisão

- Build atual (22 páginas) servido localmente; screenshots full-page de todas as rotas
  em desktop **1440px** e mobile **390px** (scripts em `scripts/revisao/`).
- Frames do Figma: exports já commitados em
  `design-assets/figma-exports/selection/` (mesmos node IDs do arquivo vivo,
  conferidos via MCP `figma-mcp-go` em 2026-06-12 — estão atuais).
- Comparação visual lado a lado por fatias + extração de copy exata via
  `scan_text_nodes` (MCP) quando necessário.
- **Atenção**: os frames desktop do Figma têm **1024px** de largura (o frame
  `Desktop maior - 2`, 1280px, está vazio). Não tratar 1024 como breakpoint
  literal; tratar como proporção/composição para telas ≥ md.
- Limitação declarada: a revisão mobile foi feita por amostragem (home, missão).
  Cada task deve comparar também o frame `Celular_*` correspondente.

## 2. Ferramentas para o agente implementador

- Figma vivo: MCP `figma-mcp-go` (exige o plugin rodando no Figma Desktop,
  ponte em `127.0.0.1:1994`). Ferramentas úteis: `get_screenshot`,
  `save_screenshots`, `scan_text_nodes` (copy exata), `get_node` /
  `get_design_context` (cores, fontes, espaçamentos exatos).
- Screenshots do site local: `scripts/revisao/shoot.sh` (requer
  `playwright-cli` e o build servido em `localhost:4321`).
- Composições lado a lado: `scripts/revisao/gen-compare.py`.
- Tipografia já configurada em `src/styles/global.css`:
  `--font-oswald` (títulos; Figma usa **Oswald Bold**, geralmente caixa alta,
  30px em títulos de seção e 48px em hero/números) e `--font-montserrat`
  (corpo; SemiBold em subtítulos/destaques).

## 3. Veredicto geral

Nenhuma rota Figma-first está pixel-fiel hoje. Os problemas se dividem em
**7 padrões transversais** (seção 4) que se repetem em quase todas as páginas e
**divergências específicas por rota** (seção 5). Corrigir os transversais primeiro
em componentes compartilhados resolve a maior parte do desvio com menor custo.

| Rota | Fidelidade | Prioridade | Esforço |
|---|---|---|---|
| `/` (home) | média-baixa | P1 | L |
| `/sobre` | média | P1 | L |
| `/areas-de-atuacao` | média-baixa | P1 | L |
| `/consultoria` (hub) | média-baixa | P1 | M |
| `/programas-e-projetos/acoes-pro-aves` | baixa | P1 | M |
| `/programas-e-projetos/treinamento-monitoramento-avifauna` | média-baixa | P1 | M |
| `/programas-e-projetos/monitoramento-de-avifauna` | média-baixa | P2 | M |
| `/programas-e-projetos` (hub) | média | P2 | M |
| `/consultoria/{monitoramento,educacao,capacitacao}` | média | P2 | M (3×S) |
| `/consultoria/cursos` | média | P2 | M |
| `/programas-e-projetos/projetos-de-pesquisa` | média | P2 | S |
| `/programas-e-projetos/campanha-jacucara` | média-baixa | P2 | M |
| `/programas-e-projetos/fundraising-field-trip` | média-baixa | P2 | M |
| `/realizacoes` | média | P2 | S |
| `/missao` | média-alta | P3 | S |
| Menu mobile (`Celular_Menu`) | não auditado | P3 | S |

Fora desta frente (sem frame no Figma; fonte = legado, validadas em 2026-06-11):
`/apoie`, `/proaves`, `/pix`. A rota `/programas-e-projetos/pro-aves` é camada
descritiva/legado — não tocar sem task explícita (ver STATUS itens 2–3).

## 4. Padrões transversais (corrigir como tasks globais, antes das páginas)

### T1 — CTA "Nos Ajude a Construir Pontes"/"Assine a Newsletter" duplicado e/ou indevido
- Nas filhas de programas (`acoes-pro-aves`, `projetos-de-pesquisa`,
  `campanha-jacucara`, `fundraising-field-trip`, `monitoramento-de-avifauna`)
  existe **duas vezes**: um bloco interno (navy + azul com campos brancos
  "NOME"/"E-MAIL") e logo abaixo o bloco padrão do layout (azul com pássaro
  ilustrado e campos amarelos). O Figma tem **um** padrão único (o segundo).
  Remover o bloco interno em todas.
- O bloco interno traz o texto placeholder visível
  *"Formulário ilustrativo — integração com provedor de e-mail e captcha será
  adicionada em versão futura"* — **proibido em produção**, remover.
- ~~Páginas cujo frame não tem o CTA/newsletter…~~ **DECISÃO DO USUÁRIO
  (2026-06-12): a ausência do bloco em alguns frames é falha de design do Figma.
  TODAS as páginas devem ter o CTA pontes/newsletter padrão (uma única vez).**
  Não remover de `/missao`, `/consultoria`, `/cursos` etc.; apenas eliminar as
  duplicatas internas.
- O padrão correto (frame da home, nós `2012:1882`–`2012:1904`): títulos Oswald
  Bold caps; campos pill amarelos com placeholders exatos
  `Seu Nome: Saíra-amarela` e `Seu Email: passarinho@oama.eco.br`; botão branco
  "Enviar"; **reCAPTCHA presente no Figma** — decidir com o usuário se entra
  agora ou se documenta como pendência (não inventar).

### T2 — "Cardificação" indevida
O Figma compõe seções **full-bleed** alternando faixas de cor (amarelo `#E8B33C`
aprox., azul claro, azul-marinho, creme, branco) separadas por **ondas**; o impl
envelopa quase tudo em cards de cantos arredondados sobre fundos neutros.
Regra para todas as tasks: reproduzir a faixa/onda do frame, não criar card.
Cards só onde o Figma tem card (ex.: grid de projetos de pesquisa, cards de
realizações, "Por que escolher o OAMa?").

### T3 — Assets provisórios ou ERRADOS (grave para uma ONG de ornitologia)
- `/areas-de-atuacao` hero: **pisco-de-peito-ruivo europeu** (robin) — espécie
  que não ocorre no Brasil. Trocar pela foto do frame (saíra-sete-cores na mão).
- `/programas-e-projetos/treinamento-...` hero: **onça-pintada**. Trocar pela
  foto do frame (pessoa examinando ave em anilhamento).
- `/programas-e-projetos/acoes-pro-aves`: foto stock de **maçã + cubos ABC**.
  Trocar pelas fotos do frame (crianças com fantoches; bordado).
- Martim-pescador repetido como hero em várias rotas (`/realizacoes`, `/sobre`,
  banner da home) — cada frame tem foto própria; usar `get_screenshot` do nó da
  imagem ou pedir o asset ao usuário se a exportação não tiver resolução.
- Como obter: **a pasta de assets do usuário está em
  `/Users/anhinga/Downloads/WEBSITE/`** (consolidada em 2026-06-12; 7,4GB,
  1.111 arquivos), organizada por página: `mídias HOME website`,
  `mídias ÁREAS DE ATUAÇÃO website`, `mídias CONSULTORIA website`,
  `mídias CURSOS-TREINAMENTO website`, `mídias PRÓ-AVES website`,
  `mídias PROGRAMAS E PROJETOS website`, `mídias QUEM SOMOS website`,
  `mídias REALIZAÇÕES website`, `mídias SOBRE website`, além de
  `Textos (_)`, `BLOG`, `editais TREINAMENTO`, `Fotos Biociclos` e
  `arquivos PRODUÇÕES website`. **Toda task de página deve buscar fotos
  primeiro nessa pasta** (na subpasta da página), comparando com o frame.
  Para referência de enquadramento: exportar o nó de imagem do Figma vivo
  (`save_screenshots`, scale 2). Não usar stock.

### T4 — Footer divergente
Figma (rodapé de todas as páginas): links de nav; bloco de contato; ícones
sociais **Instagram, YouTube, LinkedIn, Facebook, WhatsApp e Sacola (Loja)**.
Impl atual: inclui **X/Twitter** (não existe no Figma), não tem o ícone Loja,
ordem diferente, e adiciona logo OAMa circular centralizado abaixo (não aparece
nos frames — conferir no Figma vivo antes de remover). Corrigir em
`src/components/sections/Footer.astro` (corrige todas as rotas de uma vez).
Aproveitar e resolver o 404 de `/logo-oama.svg` no Nav (pré-existente).

### T5 — Nav/hero
- Figma: nav **transparente sobreposto ao hero** (links brancos, botão "Apoie"
  pill amarelo), hero ocupa quase a viewport inteira com a foto full-bleed e o
  título sobre ela (Oswald Bold, com barra/sublinhado amarelo na home).
- Impl: nav branco sólido (`bg-white/90`) e heroes baixos (faixa de ~40% da
  viewport, às vezes com fundo cinza e título fora da foto).
- `Nav.astro` já tem `navVariant="overlay"` — usar overlay nas páginas em que o
  frame mostra nav sobre foto (todas as Figma-first analisadas) e conferir cor
  dos links por página.
- Itens do nav no Figma: `Sobre / Áreas de Atuação / Programas e Projetos /`
  `Prestação de Serviços / Realizações / Loja / [Apoie]` (nó `2003:1241`).
  Conferir rótulo atual de "Prestação de Serviços" (impl usa "Consultoria"?) —
  **não renomear rota**, só o rótulo se divergir.

### T6 — Link "← Voltar para …"
As filhas no impl têm um link "← VOLTAR PARA PRESTAÇÃO DE SERVIÇOS/PROGRAMAS E
PROJETOS" sobre faixa creme. Não aparece nos frames correspondentes.
**Remoção aprovada pelo usuário em 2026-06-12** (a navegação volta pelo nav/hub).

### T7 — Fim de frame ambíguo (verificação obrigatória no Figma vivo)
Vários frames terminam numa **área escura/marrom grande** sem conteúdo visível no
export (`areas-de-atuacao`, `cursos`, `monitoramento-de-avifauna`,
filhas de consultoria — bloco azul liso). Antes de implementar o final dessas
páginas, abrir o frame no Figma e ver o que são esses blocos (pode ser fundo de
frame, pode ser seção sem export). **Não inventar conteúdo para preencher.**

## 5. Divergências por rota

Formato: frames-fonte → o que bate → o que refazer.

### 5.1 `/` — home — P1, esforço L
Frames: `Desktop_HOMEPAGE` (28:383) → `desktop-desktop-homepage-28_383.png`;
`Celular_HOMEPAGE` (2212:678) → `mobile-celular-homepage-2212_678.png`.

Ordem de seções no Figma **desktop**:
1. Hero full-viewport (foto mão soltando pássaro) + "Conservação com Ciência"
   (Oswald Bold 48, sublinhado amarelo) + "Gerando dados e engajamento para a
   conservação das aves da Mata Atlântica" (Montserrat SemiBold 24).
2. **Capacitação Profissional** — faixa amarela com lettering decorativo, carrossel
   de foto grande com setas; texto exato: "Formando profissionais conscientes e
   que almejam coletar dados de altíssima qualidade, com ética e segurança."
3. **Nossas Ações em Números** — faixa **preta** com onda e silhueta de pássaro;
   5 contadores (Oswald Bold 48): `+700` crianças e adolescentes participantes em
   ações educativas; `+8200` materiais educativos distribuídos; `+480` alunos em
   cursos e treinamentos; `+6` anos de monitoramento ativo e contínuo; `+160`
   espécies de aves estudadas. Frase de fechamento: "Transformamos o olhar das
   pessoas sobre as aves e o meio ambiente, e multiplicamos os esforços para a
   conservação."
4. **Nossas Áreas de Atuação** — selo central (pássaro), depois **3 colunas
   full-bleed de foto escurecida** (não cards): PESQUISA / COMUNICAÇÃO CIENTÍFICA /
   CAPACITAÇÕES TÉCNICAS, cada uma com parágrafo e link "Saiba mais"
   (copy exata nos nós `2004:1442`+, `2103:163`+).
5. **Monitoramento da Avifauna** — faixa azul; subtítulo "Os dados coletados no
   presente são ferramentas para prevermos e explicarmos eventos futuros"; card
   grande de foto com citação "Monitorando o presente, preservando o futuro";
   setas de carrossel; régua de logos (Realização/Apoio/Produção — SNA etc.).
6. **OAMa na Mídia** — faixa amarela; "Acompanhe nosso trabalho"; carrossel de
   cards com thumbnail real. Títulos exatos no frame: "PAF (Re)Floresta Água e
   Carbono: Encontro pelas Florestas e a Água"; "Percepções sobre conservação das
   aves e os desafios ambientais na Mata Atlântica"; "Novo website do programa
   Ações Pró-Aves"; "Programa Ações Pró-Aves reúne informações sobre colisão de
   aves em vidros"; "Captura de ave migratória do hemisfério norte surpreende equipe".
7. **Nos Ajude a Construir Pontes** + **Assine a Newsletter** — faixa azul com
   pássaro ilustrado, botão "Doar agora", campos pill amarelos, reCAPTCHA, "Enviar".
8. Footer (ver T4).

O que refazer no impl desktop:
- Remover da home desktop: bloco institucional "O OBSERVATÓRIO… (OAMa) é…" com
  logo + selos ODS (**isso pertence ao frame mobile e à missão**; no desktop o
  Figma não tem); card "Toda Ajuda Faz a Diferença"; faixa roxa "Consumo e
  conservação da Juçara"; seção "Agenda 2025" (não existe no frame desktop —
  conferir o frame vivo antes de descartar de vez; se o usuário quiser manter,
  registrar como decisão consciente fora do Figma).
- Restaurar a seção 2 (Capacitação Profissional) que hoje não existe no desktop.
- Reordenar para a ordem acima; números já corretos, mas trocar o fundo amarelo
  pela faixa preta com onda; adicionar frase de fechamento.
- Áreas de atuação: substituir os 3 cards coloridos pelas 3 colunas de foto.
- OAMa na Mídia: usar os 5 itens/thumbnails do frame (hoje impl mostra G1/NatGeo/
  BBC com cards vazios — origem desconhecida; se esses itens forem desejados,
  precisa decisão do usuário; default = seguir Figma).
- Mobile (frame 2212:678): a estrutura atual está mais próxima; manter o bloco
  institucional + "Clique aqui para saber mais…" no mobile conforme frame;
  validar fatia a fatia ao final.
- Obs.: entre as seções 4 e 5 o frame tem ~2 telas brancas — tratar como
  espaçamento de design, conferir no Figma vivo (T7).

### 5.2 `/sobre` — P1, esforço L
Frames: `Desktop_SOBRE` (2263:24); `Celular_SOBRE` (2263:140);
`Celular_História do OAMa` (2275:277 — página/seção mobile própria da história).

Ordem do Figma desktop: Hero (saíra na natureza, título "SOBRE O OBSERVATÓRIO DE
AVES DA MANTIQUEIRA" sobre a foto) → **Quem Somos** (faixa amarela, texto corrido)
→ **Nosso Plano de Voo** (faixa azul-marinho: missão + objetivos numerados com
ícones) → **Membros** (faixa azul-marinho: Fundadores/Associados/Diretoria
Executiva em listas; **Equipe em grid de retratos**; Colaboradores; silhuetas de
aves decorativas) → **Parceiros** + **Colaboração Científica** (fundo branco,
logos grandes) → **A História do OAMa** (faixa amarela, timeline por ano
2017–2024 com marcos) → **Transparência** (fundo creme, **capas reais** dos
documentos: Relatórios Anuais 2021–2024, botão amarelo "Annual Reports",
Relatórios de Atividades Pró-Aves 2023/2024, Estatuto Social, DRE 2022–2024)
→ Construir Pontes/Newsletter → Footer.

O que refazer:
- Hero: foto e composição do frame (impl usa foto provisória + faixa amarela).
- Converter cards em faixas full-bleed (T2) nas seções Quem Somos/Plano de
  Voo/Membros/História.
- História: aplicar o layout timeline amarelo do frame (impl tem card azul).
- Transparência: substituir os retângulos coloridos por thumbnails das capas
  reais (os PDFs já existem no legado/`public/`; gerar thumbs das capas).
- Conferir copy seção a seção com `scan_text_nodes` (2263:24).
- Mobile: usar `Celular_SOBRE`; a história tem frame mobile próprio (2275:277) —
  decidir na task se vira âncora/rota ou seção (registrar decisão).

### 5.3 `/missao` — P3, esforço S
Frame: `Celular_Missão` (2215:156) — **não há frame desktop**; extrapolar o
desktop a partir do mobile mantendo as faixas (registrar como decisão).
- Estrutura central já bate (texto missão em faixa amarela, ODS, parágrafo da
  Década da ONU, foto de ave).
- Refazer: trocar as 2 fotos pelas do frame (ave amarela no hero; gavião em
  tronco na segunda); CTA pontes/newsletter **fica** (decisão do usuário em T1,
  2026-06-12 — frame sem o bloco é falha de design); footer conforme T4.

### 5.4 `/areas-de-atuacao` — P1, esforço L
Frames: `Desktop_ÁREAS DE ATUAÇÃO` (2349:350); `Celular_…` (2330:176).
Figma: hero (saíra-sete-cores na mão, título sobre faixa amarela) → **Pesquisa e
Monitoramento de Avifauna** (faixa amarela; texto longo; **composição de fotos
circulares em cluster** com ícone de binóculos) → foto full-width de campo →
**Comunicação Científica** (faixa azul; cluster circular de fotos; ícone
megafone) → **Capacitações Técnicas** (faixa amarelo-escuro; cluster circular;
ícone ferramenta) → colagem dupla de fotos (treinamento/material em campo) →
texto de fechamento sobre cursos presenciais → ondas (fim ambíguo, T7).
O que refazer:
- Hero: foto correta (T3 — hoje é robin europeu).
- Reconstituir os **clusters circulares de fotos reais** (impl tem anéis
  decorativos vazios no lugar — é o desvio visual mais visível da página).
- Faixas de cor por seção conforme frame (azul na Comunicação Científica).
- Colagem dupla + texto final faltam no impl.
- Conferir se o frame termina com CTA/newsletter ou direto no footer (T7).

### 5.5 `/realizacoes` — P2, esforço S
Frames: `Desktop_REALIZAÇÕES` (2581:454); `Celular_…` (2560:450).
Figma: hero (ave em galho; título central) → faixa amarela com **cards brancos
grandes em 2 colunas, foto em cima, título Oswald caps + descrição**: DOWNLOADS,
DOCUMENTÁRIOS, WIKIMUDAS(?), DIVULGAÇÃO CIENTÍFICA, TEXTOS ACADÊMICOS (conferir
lista exata com `scan_text_nodes` 2581:454) → fim (ondas; conferir T7).
O que refazer: foto do hero; cards no formato do frame (impl usa grid menor com
thumbnails estilo vídeo); decidir destino real de cada card (links hoje "em
breve" — pendência de conteúdo a listar na task, não inventar).

### 5.6 `/consultoria` (hub) — P1, esforço M
Frames: `Desktop_CONSULTORIA` (2612:1124); `Celular_CONSULTORIA` (2592:573).
Figma: hero (pássaro preto; "CONSULTORIA") → "Serviços baseados em ciência e
conservação" (texto intro fundo branco com destaques) → **Frentes de Atuação**
(3 cards full-bleed de foto com título) → **Por que escolher o OAMa?** (grid de
~10 cards coloridos azul/amarelo alternados, texto curto cada) → **Clientes**
(9 categorias com **ícones circulares azuis** + carrossel de **logos** com setas:
AGEVAP, Casa Tlalli, …) → **Fale Conosco** (faixa azul; campos pill amarelos
Nome Completo/E-mail/Telefone com DDD/Assunto/Escreva sua mensagem; botão Enviar
branco; reCAPTCHA) → footer. **Sem** CTA pontes/newsletter.
O que refazer:
- Hero (foto do frame), intro sem card.
- "Por que escolher": cards coloridos grandes do frame (impl usa cards brancos
  pequenos com check).
- Clientes: ícones circulares por categoria + carrossel de logos (impl usa
  pills de texto; logos viraram texto).
- Fale Conosco: faixa azul com campos amarelos (impl inverteu as cores);
  reCAPTCHA (mesma decisão de T1).
- CTA pontes/newsletter **fica** nesta rota (decisão do usuário em T1, 2026-06-12).

### 5.7 Filhas de consultoria (3 rotas) — P2, esforço S cada
Frames (nomes no Figma são todos "Monitoramento de aves…", diferenciar por ID):
- monitoramento-de-aves: desktop 2620:831, mobile 2610:569
- educacao-ambiental: desktop 2620:878, mobile 2611:730
- capacitacao-tecnica: desktop 2620:940, mobile 2611:847

Figma (padrão comum): hero foto + título → seção branca em **duas colunas
lado a lado**: "Serviços" | "Diferenciais do OAMa" (listas) → faixa decorativa
azul-escura → **Público potencial** (lista + ícones circulares azuis) → bloco
azul final (conteúdo não visível no export — **T7, verificar no Figma vivo**).
O que refazer (nas 3):
- Listas em 2 colunas (impl empilha em cards azul/amarelo).
- Público potencial com ícones circulares do frame.
- Remover "← Voltar…" se não existir no frame (T6); CTA/newsletter: conferir o
  bloco azul final no Figma vivo antes de decidir manter/remover.
- Texto já está próximo; conferir linha a linha com `scan_text_nodes`.

### 5.8 `/consultoria/cursos` — P2, esforço M
Frames: `Desktop_Cursos` (2513:501); `Celular_Cursos` (2465:298).
Figma: hero verde (pena/folha) "CURSOS - ONLINE E PRESENCIAL" → intro → "Quais os
objetivos e como funcionam os cursos" com **fotos grandes intercaladas ao texto**
(pessoa com ave; dupla em campo; close instrutora) → "Sobre as inscrições" →
botão azul "CURSOS CONCLUÍDOS" → fim (T7).
O que refazer: remover os 2 cards promocionais de cursos no topo (não estão no
frame — se forem requisito de negócio, registrar como decisão fora do Figma);
recompor as fotos intercaladas conforme frame; manter copy (revisar linha a
linha); CTA/newsletter **fica** (decisão do usuário em T1, 2026-06-12).

### 5.9 `/programas-e-projetos` (hub) — P2, esforço M
Frames: `Desktop_PROGRAMAS E PROJETOS` (2497:419); `Celular_…` (2423:234).
Figma: hero (pesquisador com ave; título sobre faixa amarela) → **mosaico/galeria
de fotos** dos programas (grid ~3 colunas, foto full-bleed por item) → ondas azuis
→ fim. Hub **curto e visual**.
O que refazer: substituir os cards pretos com botão amarelo pelo mosaico de fotos
do frame (título sobre a foto; conferir hover/labels no Figma vivo); remover o
texto intro longo se não estiver no frame; manter os 7 destinos atuais (6 + a
entrada "Resultados do Programa Pró-Aves" → decidir com o usuário como ela entra
no mosaico, pois o frame pode ter só 6 itens — **não remover o link para
`/proaves` sem decisão**); CTA/newsletter: conferir no frame.

### 5.10 `/programas-e-projetos/monitoramento-de-avifauna` — P2, esforço M
Frames: `Desktop_Monitoramento` (2498:638); `Celular_Monitoramento` (2431:492).
Figma: página em **faixas amarelas/creme** (não azul): hero com ave; intro;
**objetivos como lista numerada com ícones circulares**; citação destacada em
itálico (Dr. Cagan Sekercioglu) sobre fundo amarelo; foto full-width; texto
"Coletamos 7 tipos de dados complementares…"; ondas; fim (T7).
O que refazer: paleta — impl está dominada por azul-escuro/cards; refazer em
faixas claras conforme frame; objetivos numerados como no frame; remover bloco
interno pontes/newsletter duplicado (T1); conferir copy.

### 5.11 `/programas-e-projetos/treinamento-monitoramento-avifauna` — P1, esforço M
Frames: `Desktop_Monitoramento` (2502:668 — segundo frame com esse nome);
`Celular_Treinamento` (2446:326).
Figma: hero foto **pessoa examinando ave** + título → texto + lista → **carrossel
de 3 fotos com setas** → "Sobre inscrições" → "Quem já participou" → **Intercâmbio
de Anilhadores** (fotos de grupo + texto; Banders Beyond Borders) → **depoimento
longo em itálico sobre faixa amarela** (Andreza Freitas, voluntária/doutoranda
UERJ/UFRJ) → ondas → fim.
O que refazer: hero (T3 — onça!); carrossel de fotos real; depoimento como faixa
amarela (impl usa card); remover CTA duplicado (T1); conferir copy completa.

### 5.12 `/programas-e-projetos/acoes-pro-aves` — P1, esforço M
Frames: `Desktop_Ações Pró-Aves` (2512:624); `Celular_Ações Pró-Aves` (2462:618).
**Frame curto**: hero (crianças com fantoches) + "PROGRAMA AÇÕES PRÓ-AVES" →
faixa amarela com texto em 2 colunas + foto (bordado) + carrossel com setas →
parágrafo final com link ("Desde 2022, o OAMa…") → fim.
O que refazer: **reduzir a página ao escopo do frame**. Remover: carrossel "Ações
do Programa" com fotos stock (maçã/ABC — T3), seções de temas/cards coloridos,
"Parceiros Citados" (4 cards), CTA duplicado. Se algum desses conteúdos precisar
sobreviver, o destino correto é `/proaves` (resultados, legado) ou decisão
explícita do usuário. Obs: existe um segundo frame desktop "Ações Pró-Aves"
(2517:1092) — esse é o do **Fundraising Field Trip** (nome enganoso, conferido
visualmente), não usar aqui.

### 5.13 `/programas-e-projetos/projetos-de-pesquisa` — P2, esforço S
Frames: `Desktop_Projetos de Pesquisa` (2514:766); `Celular_…` (2473:389).
Figma: hero (mão com ave preta) → intro em faixa amarela com trecho em destaque →
**grid 2 colunas de cards BRANCOS** com foto, título e período ("2018 - atual"
etc.). Projetos visíveis no frame incluem: Pesquisa de Percepção Socioambiental
ODS…; Migração altitudinal…; Levantamento de aves…; Ciclo de muda e classificação
de idade de *Chiroxiphia caudata*; Aves seguidoras de frutificações de bambu;
Colisões de aves com vidro: Enxergando soluções para uma ameaça invisível
(extrair lista completa com `scan_text_nodes` 2514:766 e usar ordem do frame).
O que refazer: cards claros conforme frame (impl usa cards escuros com botão);
ordem e períodos conferidos; remover CTA duplicado (T1).

### 5.14 `/programas-e-projetos/campanha-jacucara` — P2, esforço M
Frames: `Desktop_Jacuçara` (2517:1052); `Celular_Jacuçara` (2479:433).
**Frame curto**: hero (jacu na palmeira) + "CAMPANHA JACUÇARA" → texto branco em
2 colunas com foto dos frutos da juçara → ondas azul-escuras → fim.
O que refazer: reduzir ao escopo do frame (impl adicionou: card amarelo com
carrossel, card azul de checkmarks, "Parceiros da Campanha" com 4 cards, CTA
duplicado). Mesmo critério da 5.12: excedente só sobrevive com decisão explícita.

### 5.15 `/programas-e-projetos/fundraising-field-trip` — P2, esforço M
Frames: `Desktop_Ações Pró-Aves` **2517:1092** (nome enganoso — é o FFT);
`Celular_FFT` (2479:525).
**Frame curto**: hero (grupo na montanha) → texto 2 colunas → **carrossel de fotos
(grupo com banner)** → texto final → fim.
O que refazer: reduzir ao frame; carrossel de fotos reais; remover cards de
checkmarks/edições e CTA duplicado.

### 5.16 Menu mobile — P3, esforço S
Frame: `Celular_Menu` (2214:169): menu fullscreen com foto de fundo (hero),
título "CONSERVAÇÃO COM CIÊNCIA" e itens empilhados (Sobre/Áreas/Programas/
Prestação de Serviçõs*/Realizações/Loja/Apoie). *typo do Figma — usar grafia
correta "Serviços" e registrar a correção.
Task: comparar com o drawer atual do `Nav.astro` e alinhar.

## 6. Pendências que exigem decisão do usuário (não implementar sem resposta)
1. reCAPTCHA real nos formulários (newsletter, Fale Conosco) — integrar agora ou
   manter sem captcha (sem texto placeholder, em todo caso)?
2. Newsletter: qual provedor/endpoint real? Hoje o form não envia para lugar nenhum.
3. Home: manter "Agenda 2025", "Toda Ajuda Faz a Diferença" e faixa "Juçara"
   (não existem no frame desktop) ou remover?
4. Hub programas: como representar a entrada "Resultados Pró-Aves" (→ `/proaves`)
   no mosaico do Figma?
5. Conteúdo excedente de `acoes-pro-aves`/`jacucara`/`fft` (parceiros, temas):
   descartar ou realocar?
6. Cards de cursos promocionais no topo de `/consultoria/cursos`: manter?
7. Realizações: links reais de cada card (Downloads, Documentários, …).
8. Fotos dos frames cuja origem/licença não estiver clara: usuário fornece os
   originais?

## 7. Processo obrigatório por task (resumo operacional)
1. Ler `CLAUDE.md`, `docs/agent-workflow/README.md`, `STATUS.md`, este documento
   (a seção da rota) e o brief em `docs/implementation/pages/`.
2. Abrir o frame vivo no Figma (MCP) e exportar/medir o que faltar:
   `scan_text_nodes` para copy, `get_node`/`get_design_context` para cores e
   espaçamentos, `save_screenshots` para assets.
3. Implementar **um escopo fechado** (uma rota, ou uma task transversal T1–T7).
4. Build obrigatório:
   `PATH="$HOME/.local/bin:/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin" npm run build`
5. Screenshot da rota nos dois viewports e comparação com o export
   (`scripts/revisao/`).
6. Atualizar `STATUS.md`, `HANDOFF.md`, `SUBTASKS.md` e o doc da página com:
   fonte usada, divergências intencionais, pendências.

## 8. Ordem recomendada de execução
1. **T4 + T5** (Footer e Nav/hero — componentes globais, destravam todas as páginas)
2. **T1** (remover CTAs duplicados/indevidos + placeholder de formulário)
3. `/` home (5.1)
4. `/areas-de-atuacao` (5.4) — inclui o asset errado mais visível
5. `/programas-e-projetos/treinamento-…` (5.11 — onça) e `/acoes-pro-aves` (5.12)
6. `/consultoria` hub (5.6) e filhas (5.7, 5.8)
7. `/programas-e-projetos` hub (5.9) e demais filhas (5.10, 5.13–5.15)
8. `/sobre` (5.2), `/realizacoes` (5.5), `/missao` (5.3), menu mobile (5.16)

> Home e Sobre estavam pausadas (PED-37/PED-38) por direção anterior do usuário.
> A diretiva de 2026-06-12 ("grande projeto de revisão de todas as páginas")
> reabre a revisão delas **neste planejamento**; a implementação de home/sobre
> ainda deve ser confirmada com o usuário antes de começar.
