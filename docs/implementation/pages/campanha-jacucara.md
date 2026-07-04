# Página: Campanha Jacuçara

Status: **revisada na PED-40 (hardcoded, hero e ordem dos blocos mais próximos do Figma)**.

## Frames Figma

Fonte: `design-assets/figma-analysis/selection-analysis.md` e screenshots exportados.

- Mobile: `Celular_Jacuçara` (`2479:433`), 360 × 3697.
- Desktop: `Desktop_Jacuçara` (`2517:1052`), 1024 × 2614.

Screenshots:
- `design-assets/figma-exports/selection/mobile-celular-jacuçara-2479_433.png`
- `design-assets/figma-exports/selection/desktop-desktop-jacuçara-2517_1052.png`

## Observação importante sobre os frames Figma

O frame desktop `Desktop_Jacuçara` (`2517:1052`) tem apenas 15 nós internos — o conteúdo é mais esparso que o mobile. O mobile (`Celular_Jacuçara`, `2479:433`) tem 49 nós e mais seções visuais (newsletter, CTA etc.). O desktop parece ser uma versão resumida ou cortada. **Priorizar o conteúdo completo do mobile** e adaptar para desktop.

O frame `Desktop_Ações Pró-Aves` (`2517:1092`) na verdade é FFT (Fundraising Field Trip), não Pró-Aves — não usar como referência para esta página.

## Rota proposta

- `src/pages/programas-e-projetos/campanha-jacucara.astro`
- Rota final: `/programas-e-projetos/campanha-jacucara`

Nota: o slug usa `jacucara` sem acento para URLs.

## Papel da página

Página filha do hub `/programas-e-projetos`, apresentando a campanha de conservação da jacutinga e da juçara — duas espécies-chave mutualísticas da Mata Atlântica ameaçadas de extinção.

## Conteúdo-chave identificado no Figma

Título principal:
- `CAMPANHA JACUÇARA`

Texto introdutório (mobile):
> A campanha Jacuçara surgiu para divulgar a importância e fortalecer a conservação de duas espécies-chave da Mata Atlântica, que também estão ameaçadas de extinção: a jacutinga e a juçara. Ambas as espécies existem em uma complexa teia de relações ecológicas que as tornam dependentes uma da outra. As jacutingas consomem os frutos da juçara e dispersam suas sementes pela floresta, garantindo a germinação de novas plantas geneticamente diversas e saudáveis, que, por sua vez, produzirão mais frutos para essas aves e muitas outras espécies nativas que dependem dessa fonte de alimento.

Resultados obtidos (desktop):
> Dentre os resultados obtidos, publicamos o documentário "Reconectar pessoas às aves: PAN Aves da Mata Atlântica" (canal do Youtube do ICMBio), lançamos o site da campanha, realizamos ações de educação ambiental com degustação de pratos à base de juçara e visita a sistema agroflorestal, além de doações de sementes e de mudas de juçara para estudantes e produtores rurais. A campanha é uma iniciativa do Plano de Ação Nacional para Conservação das Aves da Mata Atlântica, organizado coletivamente por Associação de Zoológicos e Aquários do Brasil, CEMAVE, Centro Ecológico, Ministério do Meio Ambiente, Centro Nacional de Conservação da Flora, Jardim Botânico do Rio de Janeiro, OAMa, Parque das Aves, SAVE Brasil e Instituto Marcos Daniel. Para saber mais, acesse a página da campanha aqui.

(Cuidado: o link "acesse a página da campanha aqui" é provavelmente externo — não criar link para rota interna que não existe.)

CTA mobile:
- `Doar agora`
- `Sua doação viabiliza nossas ações de comunicação e divulgação científica!`
- `NOS AJUDE A CONSTRUIR PONTES`
- Newsletter: `ASSINE A NEWSLETTER`, `Nome`, `Enviar`

## Decisão Hardcoded vs Sanity

Primeira versão hardcoded. Não criar schemas Sanity ainda. O conteúdo da campanha pode virar Sanity depois.

## Arquivos permitidos para o agente

Pode criar/modificar:
- `src/pages/programas-e-projetos/campanha-jacucara.astro`
- `docs/implementation/pages/campanha-jacucara.md`

Não altere schemas Sanity, `package.json`, `astro.config.mjs`, `Nav`, `Footer`, `BaseLayout`, `WaveDark`, nem outras páginas/hubs.

## Critérios de aceite

- [x] Página `/programas-e-projetos/campanha-jacucara` criada.
- [x] Hero revisado na PED-40 para funcionar como faixa fotográfica; o título `CAMPANHA JACUÇARA` agora vive na primeira seção amarela, sem eyebrow sobreposto.
- [x] Texto sobre a relação mutualística jacutinga–juçara.
- [x] Seção de resultados obtidos com parceiros.
- [x] CTA de doação/contato e newsletter visual sem `action="#"`.
- [x] Layout responsivo e consistente com páginas irmãs.
- [x] Sem dependências novas.
- [x] Sem `href="#"` ou `action="#"` novo.
- [x] Build passa.

## Decisões da implementação

- Página filha criada em `src/pages/programas-e-projetos/campanha-jacucara.astro`,
  consumindo apenas `BaseLayout` e `WaveDark` (sem novos componentes, sem novas
  dependências, sem alterar `Nav`, `Footer`, `astro.config.mjs` ou
  `package.json`).
- Conteúdo 100% **hardcoded** no frontmatter (TS) e no template (HTML/Astro).
  Nada disso é gerenciado por Sanity nesta versão, conforme combinado.
- Estrutura da página segue o padrão visual das páginas irmãs
  (`acoes-pro-aves.astro`, `monitoramento-de-avifauna.astro`):
  - Hero como faixa fotográfica com barra amarela inferior; na revisão da PED-40 o título `Campanha Jacuçara` saiu da imagem e passou para a primeira seção amarela, evitando sobreposição e aproximando a estrutura do Figma.
  - Seções alternando amarelo `#dfb553` e azul `#5ba4d9` com separadores
    `WaveDark` (mesmas combinações de cores já usadas nas outras filhas).
  - Bloco final de CTA em azul-marinho `#1a2e4a` ("Nos ajude a construir
    pontes" + botão "Doar agora" como `mailto:`).
  - Newsletter visual em azul com `onsubmit="event.preventDefault();"`
    (sem `action="#"`).
  - Bloco creme com link "Voltar para Programas e Projetos".
- O texto da Figma menciona "acesse a página da campanha aqui". Como a URL
  externa definitiva não foi confirmada e a restrição é não usar `href="#"`,
  o link foi convertido em um `mailto:contato@oama.eco.br` pedindo
  informações sobre a campanha.
- O link "canal do YouTube do ICMBio" no bloco de Resultados aponta para
  `https://www.youtube.com/@icmbio` (`target="_blank" rel="noopener noreferrer"`).
  É o único link externo real da página. Está documentado como referência
  pública conhecida e pode ser ajustado quando a URL definitiva for passada.
- Imagens são **provisórias** (Unsplash), seguindo o padrão já estabelecido
  em `acoes-pro-aves.astro` e `monitoramento-de-avifauna.astro`. Nenhuma imagem
  foi criada em `public/` nem incorporada via Sanity nesta versão.
- CTA "Doar agora" usa `mailto:contato@oama.eco.br?subject=...` com assunto
  pré-preenchido `Campanha Jacuçara - Doação`. Padrão idêntico ao já usado
  nas páginas irmãs.
- Parceiros listados exatamente conforme briefing do usuário, com
  `sigla` curta para o badge circular e `nome` + `descrição` em
  cada card:
  AZAB, CEMAVE, Centro Ecológico, MMA, CNCFlora, JBRJ, OAMa, Parque das
  Aves, SAVE Brasil, IMD (Instituto Marcos Daniel).
- Acessibilidade:
  - `<form>` com `aria-label` descritivo e `<legend class="sr-only">`.
  - Carrossel de imagens com `aria-label` na `<ul>` e setas decorativas
    marcadas como `aria-hidden="true"`.
  - Imagens com `alt` descritivo em PT-BR.
  - Títulos hierárquicos com `font-oswald`; corpo com `font-montserrat`.
- Tipografia e cores: tokens já existentes em `src/styles/global.css`
  (`font-oswald`, `font-montserrat`, `bg-oama-yellow`, `text-oama-ink`).
  Sem uso de classes Tailwind inventadas.

## Pendências

- Trocar as 5 imagens provisórias (hero + 4 do carrossel) por fotos reais
  da campanha Jacuçara quando o acervo do OAMa permitir. Estão em `public/`
  ou via Sanity. Manter os `alt` textuais já preparados no código.
- Confirmar com o time:
  - URL definitiva do site externo da campanha Jacuçara (substituir o
    `mailto:` atual do bloco de parceiros).
  - URL definitiva do documentário no YouTube (hoje aponta para o canal
    `@icmbio` como referência pública).
- Decidir modelagem Sanity para campanhas (schema reutilizável, ou manter
  hardcoded). Esta página já está pronta para virar Sanity sem grandes
  refactors: o conteúdo está todo em arrays/objetos no frontmatter.
- Conectar o card `Campanha Jacuçara` do hub `/programas-e-projetos` para
  esta rota. Hoje o hub tem `href: undefined` e cai em `#campanha-jacucara`
  (âncora interna do hub). Atualizar o objeto `programas` em
  `src/pages/programas-e-projetos.astro` para apontar para
  `/programas-e-projetos/campanha-jacucara` — tarefa fora do escopo desta
  página.

## Resultado do build

`PATH="/Users/anhinga/.local/bin:/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin" npm run build`

- ✅ Build concluído sem erros em ~8.95s.
- Página gerada: `dist/programas-e-projetos/campanha-jacucara/index.html`.
- 13 páginas geradas no total, incluindo:
  `/`, `/sobre`, `/missao`, `/areas-de-atuacao`, `/consultoria`,
  `/realizacoes`, `/admin`, `/programas-e-projetos`,
  `/programas-e-projetos/acoes-pro-aves`,
  `/programas-e-projetos/campanha-jacucara`,
  `/programas-e-projetos/monitoramento-de-avifauna`,
  `/programas-e-projetos/projetos-de-pesquisa` e
  `/programas-e-projetos/treinamento-monitoramento-avifauna`.
- Sem `href="#"` nem `action="#"` no HTML final (verificado com `grep`).
- Avisos pré-existentes sobre chunks >500 kB de `pane2`, `VideoPlayer` e
  `SanityVision` continuam e não estão relacionados a esta página.