# Plano Sanity — o que é CMS e o que é hardcoded (2026-06-12)

Cumpre a TASK-060 ("mapear conteúdo que deve sair do hardcoded") com base na
revisão Figma de 2026-06-12 (`REVISAO_FIGMA_2026-06-12.md`) e no estado real do
Studio. Princípio do `CLAUDE.md`: **Sanity não é padrão automático** — só entra
o que é de fato gerenciado pela equipe do OAMa com frequência.

## 1. Critério de decisão (aplicar em qualquer dúvida futura)

Conteúdo vai para o Sanity somente se responder **sim às três**:
1. **Muda com frequência** (mensal/semanal) ou **cresce como lista** (item N+1
   tem a mesma cara dos anteriores)?
2. Quem atualiza é a **equipe do OAMa** (não-dev), sem precisar de deploy manual?
3. A mudança **não altera o design** (texto/foto/link dentro de um molde fixo)?

Se a mudança exige decisão de layout, é código. Se muda uma vez por ano ou menos
e dá trabalho de modelar, é código (com exceções de lista anual, ver §3).

> Nota: o `AGENT.md` sugere pôr "títulos de seções" e "parágrafos descritivos
> longos" no Sanity. A revisão Figma mostrou que títulos e textos institucionais
> são parte da composição visual (Oswald caps, faixas, ondas) e mudam junto com
> o design — **este plano os mantém hardcoded**, refinando a regra do AGENT.md.

## 2. Estado atual do Studio (não partir do zero)

Schemas já existentes em `src/sanity/schemaTypes/` (13):
`homeSlide`, `programSlide`, `midiaItem`, `agendaItem` — **já consumidos** pela
home (`HomeCarousel`, `ProgramsCarousel`, `MidiaSection`, `AgendaSection`);
`equipe`, `colaborador`, `parceiro`, `colaboracaoCientifica`, `historiaOAMa`,
`relatorioAnual`, `relatorioProAves`, `arquivoInstitucional`, `annualReport` —
criados mas (a confirmar na implementação) ainda não ligados às páginas.

Atenção: `annualReport` e `relatorioAnual` **não são duplicados** — são as
versões en-US e pt-BR dos relatórios anuais (confirmado pelo usuário em
2026-06-12; o frame de Transparência tem os cards "Relatório Anual 20XX" em
português e o botão amarelo "Annual Reports" para as versões em inglês).
Manter os dois schemas.

## 3. VAI para o Sanity

### Já tem schema — manter e consolidar
| Conteúdo | Onde aparece | Schema | Frequência |
|---|---|---|---|
| OAMa na Mídia (matérias/vídeos) | home §5.1 | `midiaItem` | alta — cada matéria nova |
| Agenda de eventos | home (pendência §6.3 da revisão*) | `agendaItem` | alta — sazonal |
| Slides Capacitação Profissional | home | `homeSlide` | média |
| Slides Monitoramento da Avifauna | home | `programSlide` | média |
| Equipe (retratos + nomes) | sobre §5.2 | `equipe` | média — entradas/saídas |
| Colaboradores (lista de nomes) | sobre | `colaborador` | média |
| Parceiros (logos) | sobre | `parceiro` | média |
| Colaboração científica (logos) | sobre | `colaboracaoCientifica` | baixa-média |
| Transparência (relatórios anuais pt-BR e en-US, DREs, estatuto, relatórios Pró-Aves) | sobre | `relatorioAnual` (pt-BR) + `annualReport` (en-US) + `relatorioProAves` + `arquivoInstitucional` | 1×/ano, mas é lista que SÓ cresce e é a cara de upload por não-dev (PDF + capa) |
| História do OAMa (timeline por ano) | sobre | `historiaOAMa` | 1×/ano — schema já existe, usar |

*Se o usuário decidir cortar a Agenda da home (não está no frame desktop), o
schema fica dormindo — não apagar.

### Schema novo necessário
| Conteúdo | Onde aparece | Schema novo | Justificativa |
|---|---|---|---|
| Projetos de pesquisa (foto, título, período "2019 – atual", ordem) | §5.13 | `projetoPesquisa` | lista que cresce; períodos mudam; molde fixo de card |
| Cursos (título, foto, status inscrições abertas/fechadas, link de inscrição, datas) | §5.8 + cards de "cursos concluídos" | `curso` | o status abre/fecha várias vezes por ano — é o conteúdo mais "vivo" do site |
| Clientes da consultoria (logos do carrossel) | §5.6 | `clienteConsultoria` (ou `parceiro` com campo `categoria`) | cresce a cada contrato |
| Itens de Realizações (título do card, foto, **link de destino**) | §5.5 | `realizacaoItem` | os destinos hoje são "em breve"; quando existirem, a equipe vai querer apontar/trocar links sem deploy |

### Fase 2 (borderline — implementar só se a equipe pedir)
- **Números "Nossas Ações em Números"** (+700, +8200, +480, +6, +160) —
  singleton `estatisticas`. Muda ~1×/ano; barato de modelar; evita deploy para
  atualizar um número. Recomendo fazer, mas não bloqueia nada.
- **Depoimentos** (Andreza Freitas no treinamento; futuros) — `depoimento`.
  Hoje há 1; só vale se virarem rotativos.

## 4. NÃO vai para o Sanity (hardcoded, com motivo)

| Conteúdo | Motivo |
|---|---|
| Textos institucionais (missão, quem somos, intros de áreas/consultoria/programas, textos das filhas) | mudam raramente e são compostos com o design (destaques, quebras, faixas); editar fora do contexto visual quebra a página |
| Títulos de seção ("Nossas Ações em Números" etc.) | parte da identidade visual (Oswald caps); mudar = decisão de design |
| Nav, footer, labels de botões, placeholders, SEO/meta | regra já existente no AGENT.md |
| Heroes e fotos de composição (clusters circulares, colagens) | troca de foto de design = decisão de design; assets virão da pasta do usuário (REV-T3) |
| `/apoie` — planos de doação | já resolvido com snapshot Stripe (`src/data/apoie-stripe.json` + script); a fonte de verdade é o Stripe, não um segundo CMS |
| `/proaves` (resultados, ilha React) | conteúdo congelado de campanha; migração verbatim do legado |
| `/pix` | estático por natureza |
| ODS, ícones, ilustrações (pássaro do CTA, ondas) | design system |
| Formulários (newsletter, fale conosco) | são integração (provedor de e-mail/captcha — pendências §6.1–6.2 da revisão), não conteúdo |

## 5. Regras operacionais (valem para toda task de CMS)

1. **Site é estático**: conteúdo novo do Sanity só aparece após rebuild.
   Configurar **webhook Sanity → Vercel deploy hook** na primeira task desta
   trilha (sem isso, "constantemente atualizado" não funciona na prática).
2. **Fallback obrigatório**: toda query precisa lidar com dataset vazio sem
   quebrar o build (seção some ou usa fallback hardcoded — decidir por seção e
   documentar).
3. **Sequenciamento com a frente Figma**: não ligar Sanity a uma seção que a
   revisão manda refazer — fazer **junto** com o redesign da seção (ex.: mídia
   da home entra quando a seção 5.1-mídia for refeita). Evita modelar duas vezes.
4. Studio já está em `/admin` (hash router). Schemas novos entram em
   `src/sanity/schemaTypes/` + registro no `index.ts`.
5. Conteúdo inicial: ao ligar cada seção, fazer seed com o conteúdo atual
   (hardcoded/legado) para o site não regredir.

## 6. Ordem de implementação sugerida

1. Webhook de rebuild (infra).
2. **Transparência** (sobre) — schemas prontos, conteúdo real já existe (PDFs),
   maior ganho imediato para a equipe.
3. **Equipe/Colaboradores/Parceiros** (sobre) — junto com o redesign §5.2.
4. **Mídia + slides da home** — junto com o redesign da home §5.1 (depende da
   liberação de PED-37 e das decisões §6.3 da revisão).
5. **Cursos** (`curso`) — junto com §5.8.
6. **Projetos de pesquisa** (`projetoPesquisa`) — junto com §5.13.
7. **Clientes consultoria** — junto com §5.6.
8. **Realizações** (`realizacaoItem`) — quando os links reais existirem (§6.7).
9. Fase 2: `estatisticas`, `depoimento`.

## 7. Decisões pendentes do usuário (adicionar às da revisão §6)
1. Agenda fica na home? (define se `agendaItem` continua em uso)
2. Números da home no CMS (fase 2) — quer poder editar sem deploy?
3. Equipe do OAMa vai mesmo operar o Studio? (define o investimento em
   validações/preview por schema)
