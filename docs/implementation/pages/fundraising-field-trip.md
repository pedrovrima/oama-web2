# Página: Fundraising Field Trip (FFT)

Status: **revisada na PED-40 (hardcoded, hero e ritmo visual mais próximos do Figma)**.

## Frames Figma

Fonte: `design-assets/figma-analysis/selection-analysis.md` e screenshots exportados.

- Mobile: `Celular_FFT` (`2479:525`), 360 × 3519.
- Desktop: `Desktop_Ações Pró-Aves` (`2517:1092`) — NOTA: este frame está com rótulo enganoso; seu conteúdo real é FFT. 1024 × 2614.

Screenshots:

- `design-assets/figma-exports/selection/mobile-celular-fft-2479_525.png`
- `design-assets/figma-exports/selection/desktop-desktop-ações-pró-aves-2517_1092.png` (conteúdo FFT, não Pró-Aves)

## Observação importante sobre os frames Figma

O frame `Desktop_Ações Pró-Aves` (`2517:1092`) tem apenas 15 nós e conteúdo de FFT. O frame `Celular_Ações Pró-Aves` (`2462:618`) já foi usado na página Pró-Aves. O mobile FFT (`Celular_FFT`) tem 49 nós e é mais rico. Priorizar o mobile para conteúdo.

## Rota

- `src/pages/programas-e-projetos/fundraising-field-trip.astro`
- Rota final: `/programas-e-projetos/fundraising-field-trip`

## Papel da página

Página filha do hub `/programas-e-projetos`, apresentando a viagem anual de captação de recursos em parceria com o Klamath Bird Observatory (KBO), unindo turismo de conservação, ciência e cultura.

## Conteúdo-chave identificado no Figma

Título principal:

- `FUNDRAISING FIELD TRIP`

Texto introdutório (mobile + desktop):

> A "FUNdraising Field Trip" é uma ação de colaboração entre OAMa e o Observatório de Aves de Klamath, KBO. Esse projeto anual, que começou em 2023, junta captação de recursos para os observatórios com ações de sensibilização e educação ambiental e fomento ao turismo de conservação. A ação acontece em forma de uma viagem internacional, em que o KBO conecta pequenos grupos de visitantes que chegam ao Brasil para passear por cerca de 10 dias, vivenciando territórios, gastronomia, cultura, vida silvestre, paisagens naturais preservadas e projetos de conservação pela Serra da Mantiqueira.

Texto complementar (desktop):

> A cada ano, a viagem trilha caminhos levemente diferentes. Já percorremos localidades como São Francisco Xavier (SP), Serrinha do Alambari (RJ), Vila de Visconde de Mauá (RJ), Bocaina de Minas (MG) e Itamonte (MG). Ao longo do trajeto, proporcionamos aos turistas trilhas e passarinhadas únicas em diversas unidades de conservação; e conversas inspiradoras com cientistas, produtores rurais, ambientalistas e artistas locais. A "FUNdraising Field Trip" é uma viagem que cria momentos inesquecíveis para conectar os visitantes às aves, aos habitats e às pessoas que os protegem. As doações realizadas pelos turistas financiam os programas de pesquisa, de treinamento, de educação ambiental e de restauração de habitats do OAMa e do KBO.

CTA mobile:

- `Doar agora`
- `Sua doação viabiliza nossas ações de comunicação e divulgação científica!`
- `NOS AJUDE A CONSTRUIR PONTES`
- Newsletter: `Seja o primeiro a saber das próximas atividades do OAMa`, `ASSINE A NEWSLETTER`, `Nome`, `Enviar`

## Decisão Hardcoded vs Sanity

Primeira versão hardcoded. Não criar schemas Sanity ainda.

## Arquivos permitidos para o agente

Pode criar/modificar:

- `src/pages/programas-e-projetos/fundraising-field-trip.astro`
- `docs/implementation/pages/fundraising-field-trip.md`

Não altere Sanity, package.json, astro.config.mjs, Nav, Footer, BaseLayout, WaveDark, nem outras páginas/hubs.

## Critérios de aceite

- [x] Página `/programas-e-projetos/fundraising-field-trip` criada.
- [x] Hero revisado na PED-40 para funcionar como faixa fotográfica; o título `FUNDRAISING FIELD TRIP` agora vive na primeira seção amarela, sem eyebrow sobreposto.
- [x] Texto sobre KBO, viagem de 10 dias, localidades (São Francisco Xavier, Serrinha do Alambari, Visconde de Mauá, Bocaina de Minas, Itamonte).
- [x] Seção de resultados/impacto (doações financiam programas).
- [x] CTA de doação/contato e newsletter visual sem `action="#"`.
- [x] Layout responsivo e consistente com páginas irmãs.
- [x] Sem dependências novas.
- [x] Sem `href="#"` ou `action="#"` novo.
- [x] Build passa (ver seção “Resultado” abaixo).

## Decisões da implementação

- Reuso de `BaseLayout` e do mesmo padrão visual das páginas irmãs
  `src/pages/programas-e-projetos/campanha-jacucara.astro` e
  `src/pages/programas-e-projetos/acoes-pro-aves.astro`:
  hero com foto + barra amarela inferior, seções coloridas alternando
  `#dfb553` (amarelo) e `#5ba4d9` (azul), separadores `WaveDark`,
  CTA “Nos ajude a construir pontes” em fundo `#1a2e4a` e newsletter em
  fundo `#5ba4d9`.
- Estrutura final, no mesmo padrão das páginas-irmãs:
  1. Hero.
  2. Seção amarela “A viagem de captação” (parceria OAMa+KBO, 10 dias, turismo de conservação).
  3. Carrossel horizontal de imagens (estilo “destaques” da Jacuçara / Pró-Aves).
  4. WaveDark amarelo → azul.
  5. Seção azul “Caminhos pela Mantiqueira” com lista das 5 localidades
     (São Francisco Xavier, Serrinha do Alambari, Visconde de Mauá,
     Bocaina de Minas, Itamonte) e parágrafo complementar sobre trilhas,
     passarinhadas e conversas locais.
  6. WaveDark azul → amarelo.
  7. Seção amarela “Onde as doações chegam” com 4 cartões de impacto
     (Pesquisa, Treinamento, Educação, Restauração).
  8. WaveDark amarelo → azul-marinho.
  9. CTA “Nos ajude a construir pontes” em `#1a2e4a` com botão
     `Doar agora` apontando para `mailto:contato@oama.eco.br?subject=...`.
  10. Newsletter visual (form ilustrativo com `onsubmit="event.preventDefault();"`,
      sem `action="#"`).
  11. Voltar “← Voltar para Programas e Projetos” em fundo creme.
- Todo o conteúdo é **hardcoded** nesta primeira versão, conforme
  combinado: títulos, descrições, lista de localidades, eixos de impacto,
  CTAs e SEO.
- Tipografia segue tokens existentes (`font-oswald` para títulos,
  `font-montserrat` para corpo) e cores via hex literais no mesmo padrão
  das páginas-irmãs (`#dfb553`, `#5ba4d9`, `#1a2e4a`, `#fbf5e6`).
- Newsletter visual usa o mesmo padrão da `campanha-jacucara.astro` e
  `acoes-pro-aves.astro` (form sem `action` definido,
  `method="post"` + `onsubmit="event.preventDefault();"`).

## Imagens

- Todas as imagens da página estão como **placeholders Unsplash**, mesmo
  padrão já em uso em `campanha-jacucara.astro` e `acoes-pro-aves.astro`.
- Substituir por fotos reais do OAMa (edições passadas da FFT) quando
  disponíveis em `public/` ou via Sanity.
- Hero, carrossel e qualquer thumbnail devem ser tratados como
  **imagens provisórias** (a documentar com tag de “placeholder” em versão
  futura).

## Pendências

- Trocar imagens provisórias (Unsplash) por fotos reais das edições
  passadas da FFT.
- Confirmar com o OAMa se há link externo oficial para inscrição / próximas
  edições (KBO) e, se houver, conectar no CTA principal.
- Decidir modelagem Sanity para a FFT (provável: hero, texto
  introdutório, lista de localidades por edição, galeria, resultados).
- Conectar o card do hub `/programas-e-projetos` (`#fundraising-field-trip`
  → `Saiba mais`) ao link real desta rota (essa alteração é no hub
  `programas-e-projetos.astro` e foge do escopo desta tarefa).
- Decidir com o OAMa se a FFT terá link próprio (ex.: página do KBO) em
  vez de CTA via `mailto:`.

## Resultado do build

`PATH="/Users/anhinga/.local/bin:/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin" npm run build`

- ✅ Build concluído sem erros.
- 7 páginas geradas (`/`, `/sobre`, `/missao`, `/areas-de-atuacao`,
  `/programas-e-projetos`, `/programas-e-projetos/fundraising-field-trip`,
  `/admin`).
- Arquivo gerado: `dist/programas-e-projetos/fundraising-field-trip/index.html`.
- Avisos existentes (chunks >500 kB de `pane2`, `VideoPlayer`,
  `SanityVision`) são pré-existentes do Sanity Studio e não relacionados
  a esta página.
