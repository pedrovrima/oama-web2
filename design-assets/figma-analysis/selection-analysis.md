# Análise do Figma — abas-website-oama

## Passos executados
1. Conectado ao arquivo Figma via figma-mcp-go com o plugin no Figma Desktop.
1. Lido o metadata do arquivo e confirmada a página ativa.
1. Capturada a seleção atual do usuário no Figma.
1. Gerado resumo estrutural de cada nó raiz selecionado (tipo, dimensões, contagem de nós, snippets de texto).
1. Exportados screenshots dos nós raiz exportáveis para `design-assets/figma-exports/selection/`.
1. Comparado o conteúdo do Figma com as páginas Astro já existentes no repositório.
1. Salvos artefatos brutos e relatório nesta pasta para referência futura.

## Metadata do arquivo

- **Arquivo:** Abas Website  OAMa
- **Página atual:** Page 1 (0:1)
- **Total de páginas no arquivo:** 1
- **Frames/grupos principais analisados:** 37

## Comparação rápida com o Astro atual

- ✅ **Home (`src/pages/index.astro`)** já aparece implementado ou parcialmente implementado no Astro.
- ✅ **Sobre (`src/pages/sobre.astro`)** já aparece implementado ou parcialmente implementado no Astro.
- ✅ **Missão (`src/pages/missao.astro`)** já aparece implementado ou parcialmente implementado no Astro.
- 🆕 **Páginas de serviços/áreas específicas** aparece no Figma e ainda não existe como página dedicada no Astro atual.
- 🆕 **Página editorial/listagem de mídia ou notícias mais robusta** aparece no Figma e ainda não existe como página dedicada no Astro atual.
- 🆕 **Páginas extras presentes como variantes no Figma e ainda ausentes no Astro** aparece no Figma e ainda não existe como página dedicada no Astro atual.

## Nós raiz selecionados

### 1. Tablet

- **ID:** `2:4`
- **Tipo:** FRAME
- **Viewport inferido:** tablet
- **Dimensões:** 744 × 4500
- **Posição:** x=-5245, y=8103
- **Página inferida:** indefinida
- **Total de nós internos:** 1
- **Contagem por tipo:** `{"FRAME": 1}`
- **Snippets de texto relevantes:**

### 2. Desktop_HOMEPAGE

- **ID:** `28:383`
- **Tipo:** FRAME
- **Viewport inferido:** desktop
- **Dimensões:** 1024 × 6946
- **Posição:** x=-4757, y=-9
- **Página inferida:** home
- **Total de nós internos:** 114
- **Contagem por tipo:** `{"FRAME": 3, "VECTOR": 5, "RECTANGLE": 51, "ELLIPSE": 1, "TEXT": 53, "GROUP": 1}`
- **Snippets de texto relevantes:**
  - Sobre Áreas de Atuação Programas e Projetos Prestação de Serviços Realizações Loja Apoie
  - Conservação com Ciência
  - Gerando dados e engajamento para a conservação das aves da Mata Atlântica
  - CAPACITAÇÃO PROFISSIONAL
  - Formando profissionais conscientes e que almejam coletar dados de altíssima qualidade, com ética e segurança.
  - NOSSAS AÇÕES EM NÚMEROS
  - NOSSAS ÁREAS DE ATUAÇÃO
  - Os resultados e impactos do OAMa

### 3. Desktop maior - 2

- **ID:** `29:2`
- **Tipo:** FRAME
- **Viewport inferido:** desktop
- **Dimensões:** 1280 × 5413
- **Posição:** x=-4405, y=8103
- **Página inferida:** indefinida
- **Total de nós internos:** 1
- **Contagem por tipo:** `{"FRAME": 1}`
- **Snippets de texto relevantes:**

### 4. Celular_HOMEPAGE

- **ID:** `2212:678`
- **Tipo:** FRAME
- **Viewport inferido:** mobile
- **Dimensões:** 360 × 8112
- **Posição:** x=-12956, y=-9
- **Página inferida:** home
- **Total de nós internos:** 121
- **Contagem por tipo:** `{"FRAME": 2, "RECTANGLE": 46, "VECTOR": 9, "ELLIPSE": 1, "INSTANCE": 5, "TEXT": 55, "GROUP": 3}`
- **Snippets de texto relevantes:**
  - CONSERVAÇÃO COM CIÊNCIA
  - Gerando dados e engajamento para a conservação das aves da MAtaAtlântica
  - Font Size: 1.125rem | Line Height: 1.75rem
  - O OBSERVATÓRIO DE AVES DA MANTIQUEIRA (OAMa) é uma organização independente e sem fins lucrativos que tem como missão construir pontes entre ciência, sociedade e natureza, por meio de educação, conscientização e pesquisa para preservar a biodiversidade. Desde 2018, nossa equipe atua em três frentes: Comunicação científica, Capacitações técnicas, e Pesquisa e monitoramento da avifauna. Nossas áreas de atuação convergem na conservação da biodiversidade.
  - Font Size: 1rem | Line Height: 1.5rem
  - Clique aqui para saber mais...
  - Formando profissionais conscientes e que almejam coletar dados de altíssima qualidade, com ética e segurança.
  - Os resultados e impactos do OAMa

### 5. Celular_Menu

- **ID:** `2214:169`
- **Tipo:** FRAME
- **Viewport inferido:** mobile
- **Dimensões:** 360 × 640
- **Posição:** x=-12556, y=-9
- **Página inferida:** menu-mobile
- **Total de nós internos:** 17
- **Contagem por tipo:** `{"FRAME": 1, "VECTOR": 3, "RECTANGLE": 3, "INSTANCE": 3, "TEXT": 6, "ELLIPSE": 1}`
- **Snippets de texto relevantes:**
  - Gerando dados e engajamento para a conservação das aves da MAtaAtlântica
  - Font Size: 1.125rem | Line Height: 1.75rem
  - CONSERVAÇÃO COM CIÊNCIA
  - Sobre Áreas de Atuação Programas e Projetos Prestação de Serviçõs Realizações Loja Apoie

### 6. Celular_Missão

- **ID:** `2215:156`
- **Tipo:** FRAME
- **Viewport inferido:** mobile
- **Dimensões:** 360 × 2388
- **Posição:** x=-12156, y=-9
- **Página inferida:** missão
- **Total de nós internos:** 34
- **Contagem por tipo:** `{"FRAME": 2, "RECTANGLE": 15, "ELLIPSE": 2, "GROUP": 2, "VECTOR": 2, "TEXT": 8, "INSTANCE": 3}`
- **Snippets de texto relevantes:**
  - MISSÃO
  - Utilizamos o processo científico como método transversal em nossas áreas de atuação. Entendemos a ciência como uma ferramenta necessária e poderosa, e que deve ser utilizada com a ciência de vivermos em constante transformação, inovação, e mudanças de paradigmas. Reforçamos uma visão crítica, questionadora e aberta a novas visões ao pensar e fazer ciência.
  - Font Size: 1rem | Line Height: 1.5rem
  - Como uma instituição comprometida com a Década da ONU para a Restauração de Ecossistemas (2021-2030), os programas e projetos do OAMa contemplam nove Objetivos de Desenvolvimento Sustentável.
  - Observatório de Aves da Mantiqueira contato@oama.eco.br +55 24 99962-7394 Resende - RJ CNPJ: 35.713.512/0001-80
  - Sobre Áreas de Atuação Programas e Projetos Prestação de Serviçõs Realizações Loja
  - Font Size: 1.125rem | Line Height: 1.75rem

### 7. Desktop_SOBRE

- **ID:** `2263:24`
- **Tipo:** FRAME
- **Viewport inferido:** desktop
- **Dimensões:** 1024 × 7563
- **Posição:** x=3905, y=-9
- **Página inferida:** sobre
- **Total de nós internos:** 162
- **Contagem por tipo:** `{"FRAME": 3, "RECTANGLE": 71, "VECTOR": 3, "ELLIPSE": 10, "TEXT": 62, "INSTANCE": 13}`
- **Snippets de texto relevantes:**
  - Sobre Áreas de Atuação Programas e Projetos Prestação de Serviços Realizações Loja Apoie
  - SOBRE O OBSERVATÓRIO DE AVES DA MANTIQUEIRA
  - QUEM SOMOS
  - Missão
  - NOSSO PLANO DE VOO
  - PARCEIROS
  - Programa Ações Pró-Aves reúne informações sobre colisão de aves em vidros
  - O Observatório de Aves da Mantiqueira (OAMa) é uma Organização Não Governamental - ONG, sendo assim uma iniciativa independente e sem fins lucrativos. Iniciado em 2018 e fundado em agosto de 2019, o OAMa realiza monitoramento padronizado e de longo prazo da avifauna na Serra da Mantiqueira, pesquisas científicas colaborativas, capacitação de jovens cientistas e também promove conservação por meio da comunicação científica e da educação ambiental. O observatório atua na democratização da ciência, criando experiências transformadoras para informar, sensibilizar e engajar pessoas para a conservação da Mata Atlântica.

### 8. Celular_SOBRE

- **ID:** `2263:140`
- **Tipo:** FRAME
- **Viewport inferido:** mobile
- **Dimensões:** 360 × 14093
- **Posição:** x=2536, y=-9
- **Página inferida:** sobre
- **Total de nós internos:** 213
- **Contagem por tipo:** `{"FRAME": 1, "VECTOR": 10, "RECTANGLE": 65, "ELLIPSE": 10, "INSTANCE": 34, "TEXT": 91, "GROUP": 1, "COMPONENT": 1}`
- **Snippets de texto relevantes:**
  - SOBRE O OBSERVATÓRIO DE AVES DA MANTIQUEIRA
  - O Observatório de Aves da Mantiqueira (OAMa) é uma Organização Não Governamental - ONG, sendo assim uma iniciativa independente e sem fins lucrativos. Iniciado em 2018 e fundado em agosto de 2019, o OAMa realiza monitoramento padronizado e de longo prazo da avifauna na Serra da Mantiqueira, pesquisas científicas colaborativas, capacitação de jovens cientistas e também promove conservação por meio da comunicação científica e da educação ambiental. O observatório atua na democratização da ciência, criando experiências transformadoras para informar, sensibilizar e engajar pessoas para a conservação da Mata Atlântica.
  - Font Size: 1rem | Line Height: 1.5rem
  - Missão
  - QUEM SOMOS
  - Doar agora
  - Sua doação viabiliza nossas ações de comunicação e divulgação científica!
  - NOS AJUDE A CONSTRUIR PONTES

### 9. Celular_História do OAMa

- **ID:** `2275:277`
- **Tipo:** FRAME
- **Viewport inferido:** mobile
- **Dimensões:** 360 × 7853
- **Posição:** x=3420, y=-9
- **Página inferida:** sobre
- **Total de nós internos:** 75
- **Contagem por tipo:** `{"FRAME": 2, "RECTANGLE": 8, "INSTANCE": 18, "TEXT": 37, "ELLIPSE": 9, "VECTOR": 1}`
- **Snippets de texto relevantes:**
  - Os primeiros passos do OAMa iniciaram-se quando nossos co-fundadores Luiza Figueira e Pedro Martins trabalharam como Pesquisadores Visitantes do Klamath Bird Observatory (KBO), no Oregon, EUA. Lá, eles foram inspirados pelo modelo de um Observatório de Aves: uma organização focada em pesquisa ornitológica, educação e conservação, e que geralmente realiza monitoramento de longo prazo e sistemático de aves. A ideia de um observatório de aves da Mantiqueira foi apresentada por Pedro e Luiza na Conferência Internacional de Observatórios de Aves (IBOC), em Cape May, New Jersey, EUA. Voltando ao Brasil, eles se uniram a Raquel Justo, nossa terceira co-fundadora, e elaboraram o que seria a base do OAMa: uma organização independente, sem fins lucrativos, conectando os pilares de ciência, sociedade e conservação, com a finalidade de preservar a biodiversidade.
  - Font Size: 1rem | Line Height: 1.5rem
  - 2017 A ideia de um observatório de aves
  - A HISTÓRIA DO OAMa
  - Primeiros delineamentos e esforços amostrais do que viria a ser o Programa de Monitoramento Padronizado e de Longo Prazo de Avifauna.
  - 2018 Os primeiros passos
  - OAMa registrado oficialmente como uma Organização do Terceiro Setor, em 28 de agosto de 2019. “Dia de campo: conhecendo as aves”, realizado em parceria com a ONG Silo - Arte e Latitude Rural com apoio do edital CAMP do Instituto Serrapilheira. Livreto Ornitologia para todo dia. Estação de Pesquisa (EP) estabelecida como a base onde reúne-se a estrutura física do OAMa, funcionando como uma casa, laboratório, escritório e sala de aula. I Curso Prático de Análise de Muda e Classificação de Idade em Aves.
  - 2019 A materialização do sonho

### 10. Celular_ÁREAS DE ATUAÇÃO

- **ID:** `2330:176`
- **Tipo:** FRAME
- **Viewport inferido:** mobile
- **Dimensões:** 360 × 8632
- **Posição:** x=10387, y=-9
- **Página inferida:** apoie/contato
- **Total de nós internos:** 94
- **Contagem por tipo:** `{"FRAME": 1, "VECTOR": 8, "RECTANGLE": 29, "ELLIPSE": 1, "INSTANCE": 14, "TEXT": 40, "GROUP": 1}`
- **Snippets de texto relevantes:**
  - O monitoramento padronizado e de longo prazo tem como objetivo acompanhar um fenômeno, um grupo de seres vivos ou uma área ao longo do tempo e, muitas vezes, através do espaço. No OAMa, nosso foco é a avifauna na Serra da Mantiqueira. É por meio desse tipo de monitoramento que coletamos dados de parâmetros populacionais e ecológicos das aves. Com tais dados é possível avaliar como as mudanças nas populações de aves se relacionam com as mudanças no ambiente e no clima.
  - Font Size: 1rem | Line Height: 1.5rem
  - Dessa forma, o monitoramento da avifauna funciona como um termômetro da saúde não só das aves, mas de todo o ecossistema local. Além disso, torna-se uma relevante ferramenta para o avanço do conhecimento ornitológico brasileiro e para o planejamento de iniciativas de conservação e preservação ambiental. Nosso monitoramento da avifauna, realizado desde 2018, utiliza de dois métodos complementares: a captura-marcação-recaptura com redes de neblina e anilhas; e a detecção visual e sonora das aves com os pontos fixos. O programa é reconhecido e autorizado pelos órgãos competentes com licenças atualizadas regularmente no SISBIO e CEMAVE.
  - Disponibilizamos um Relatório de Dados do Monitoramento (2018 - 2024), mantendo a transparência com nosso público. Nele, você acessará as áreas de estudos, o esforço amostral e algumas análises básicas do perfil das capturas e da fenologia das aves estudadas. Reforçamos nosso interesse em pesquisas colaborativas Para saber mais sobre como acessar nossos dados, entre em contato com nossa Coordenadora de Pesquisa, Luiza Figueira.
  - PESQUISA E MONITORAMENTO DE AVIFAUNA
  - ÁREAS DE ATUAÇÃO
  - Doar agora
  - Sua doação viabiliza nossas ações de comunicação e divulgação científica!

### 11. Desktop_ÁREAS DE ATUAÇÃO

- **ID:** `2349:350`
- **Tipo:** FRAME
- **Viewport inferido:** desktop
- **Dimensões:** 1024 × 8632
- **Posição:** x=10861, y=-9
- **Página inferida:** home
- **Total de nós internos:** 35
- **Contagem por tipo:** `{"FRAME": 1, "VECTOR": 1, "RECTANGLE": 18, "ELLIPSE": 1, "TEXT": 14}`
- **Snippets de texto relevantes:**
  - Sobre Áreas de Atuação Programas e Projetos Prestação de Serviços Realizações Loja Apoie
  - ÁREAS DE ATUAÇÃO
  - PESQUISA E MONITORAMENTO DE AVIFAUNA
  - O monitoramento padronizado e de longo prazo tem como objetivo acompanhar um fenômeno, um grupo de seres vivos ou uma área ao longo do tempo e, muitas vezes, através do espaço. No OAMa, nosso foco é a avifauna na Serra da Mantiqueira. É por meio desse tipo de monitoramento que coletamos dados de parâmetros populacionais e ecológicos das aves. Com tais dados é possível avaliar como as mudanças nas populações de aves se relacionam com as mudanças no ambiente e no clima.
  - Dessa forma, o monitoramento da avifauna funciona como um termômetro da saúde não só das aves, mas de todo o ecossistema local. Além disso, torna-se uma relevante ferramenta para o avanço do conhecimento ornitológico brasileiro e para o planejamento de iniciativas de conservação e preservação ambiental. Nosso monitoramento da avifauna, realizado desde 2018, utiliza de dois métodos complementares: a captura-marcação-recaptura com redes de neblina e anilhas; e a detecção visual e sonora das aves com os pontos fixos. O programa é reconhecido e autorizado pelos órgãos competentes com licenças atualizadas regularmente no SISBIO e CEMAVE.
  - Disponibilizamos um Relatório de Dados do Monitoramento (2018 - 2024), mantendo a transparência com nosso público. Nele, você acessará as áreas de estudos, o esforço amostral e algumas análises básicas do perfil das capturas e da fenologia das aves estudadas. Reforçamos nosso interesse em pesquisas colaborativas Para saber mais sobre como acessar nossos dados, entre em contato com nossa Coordenadora de Pesquisa, Luiza Figueira.
  - COMUNICAÇÃO CIENTÍFICA
  - Entendemos que a conservação ambiental é uma missão de toda a sociedade, e que deve estar presente na vida de cada cidadão. Por isso, o diálogo com as pessoas é uma ação contínua, na qual visamos informá-las e sensibilizá-las sobre a perda de biodiversidade e o nosso papel na busca pela reversão desse cenário atual. A comunicação científica do OAMa permeia todas nossas iniciativas. Utilizamos das redes sociais para manter um canal aberto e abrangente de conversa. Além do meio virtual, realizamos, desde 2019, ações interativas para conectar e aproximar o público da “Conservação com Ciência”. Exposições, documentários, campanhas, passarinhadas com roda de conversa, aulas e apresentações em escolas são algumas formas pelas quais buscamos compartilhar o conhecimento com a sociedade.

### 12. Celular_PROGRAMAS E PROJETOS

- **ID:** `2423:234`
- **Tipo:** FRAME
- **Viewport inferido:** mobile
- **Dimensões:** 360 × 4487
- **Posição:** x=15215, y=-9
- **Página inferida:** programas-e-projetos
- **Total de nós internos:** 57
- **Contagem por tipo:** `{"FRAME": 1, "RECTANGLE": 30, "VECTOR": 8, "INSTANCE": 2, "TEXT": 14, "ELLIPSE": 1, "GROUP": 1}`
- **Snippets de texto relevantes:**
  - PROGRAMAS E PROJETOS
  - Doar agora
  - Sua doação viabiliza nossas ações de comunicação e divulgação científica!
  - NOS AJUDE A CONSTRUIR PONTES
  - Seja o primeiro a saber das próximas atividades do OAMa
  - ASSINE A NEWSLETTER
  - Enviar
  - Nome

### 13. Celular_Monitoramento

- **ID:** `2431:492`
- **Tipo:** FRAME
- **Viewport inferido:** mobile
- **Dimensões:** 360 × 5204
- **Posição:** x=16381, y=-9
- **Página inferida:** apoie/contato
- **Total de nós internos:** 74
- **Contagem por tipo:** `{"FRAME": 1, "RECTANGLE": 23, "INSTANCE": 9, "TEXT": 28, "ELLIPSE": 1, "VECTOR": 10, "GROUP": 2}`
- **Snippets de texto relevantes:**
  - PROGRAMA DE MONITORAMENTO DE AVIFAUNA DA MANTIQUEIRA
  - Identificar e descrever a composição de avifauna e sua sazonalidade de forma representativa para a Serra da Mantiqueira; Estimar padrões demográficos (sobrevivência, produtividade) para as espécies da Mantiqueira em diferentes áreas de ocorrência; Avaliar a relação entre condições ambientais e climáticas com as taxas demográficas e distribuição das espécies; Descrever a biologia e ecologia das espécies de aves na Mantiqueira;
  - Font Size: 1rem | Line Height: 1.5rem
  - "Programas de monitoramento de longo prazo da biodiversidade local são essenciais para entendermos e mitigarmos os efeitos das mudanças globais na biodiversidade tropical, ao mesmo tempo em que promovem capacitação profissional, educação ambiental e divulgação científica".
  - – Dr. Cagan Sekercioglu, da Universidade de Utah, nos Estados Unidos.
  - Tradução livre de trecho do artigo "Promoting community-based bird monitoring in the tropics: Conservation, research, environmental education, capacity-building, and local incomes", publicado em 2011 na revista científica Biological Conservation.
  - Doar agora
  - Sua doação viabiliza nossas ações de comunicação e divulgação científica!

### 14. Celular_Treinamento

- **ID:** `2446:326`
- **Tipo:** FRAME
- **Viewport inferido:** mobile
- **Dimensões:** 360 × 7946
- **Posição:** x=16862, y=-9
- **Página inferida:** serviços-capacitacao
- **Total de nós internos:** 80
- **Contagem por tipo:** `{"FRAME": 1, "RECTANGLE": 24, "INSTANCE": 11, "TEXT": 32, "ELLIPSE": 1, "VECTOR": 8, "GROUP": 3}`
- **Snippets de texto relevantes:**
  - PROGRAMA DE TREINAMENTO EM MONITORAMENTO DE AVIFAUNA
  - Contribuir para a capacitação e formação técnica de novos cientistas, biólogos e profissionais educadores e interessados em ornitologia e conservação; Oferecer um programa de treinamento e capacitação para ornitólogos de campo que atenda à demanda nacional e internacional.
  - Font Size: 1rem | Line Height: 1.5rem
  - Doar agora
  - Sua doação viabiliza nossas ações de comunicação e divulgação científica!
  - NOS AJUDE A CONSTRUIR PONTES
  - Seja o primeiro a saber das próximas atividades do OAMa
  - ASSINE A NEWSLETTER

### 15. Celular_Ações Pró-Aves

- **ID:** `2462:618`
- **Tipo:** FRAME
- **Viewport inferido:** mobile
- **Dimensões:** 360 × 3538
- **Posição:** x=17772, y=-9
- **Página inferida:** proaves
- **Total de nós internos:** 51
- **Contagem por tipo:** `{"FRAME": 1, "RECTANGLE": 17, "INSTANCE": 4, "TEXT": 18, "ELLIPSE": 1, "VECTOR": 8, "GROUP": 2}`
- **Snippets de texto relevantes:**
  - PROGRAMA AÇÕES PRÓ-AVES
  - Doar agora
  - Sua doação viabiliza nossas ações de comunicação e divulgação científica!
  - NOS AJUDE A CONSTRUIR PONTES
  - Seja o primeiro a saber das próximas atividades do OAMa
  - ASSINE A NEWSLETTER
  - Enviar
  - Nome

### 16. Celular_Cursos

- **ID:** `2465:298`
- **Tipo:** FRAME
- **Viewport inferido:** mobile
- **Dimensões:** 360 × 6410
- **Posição:** x=18682, y=-9
- **Página inferida:** serviços-capacitacao
- **Total de nós internos:** 77
- **Contagem por tipo:** `{"FRAME": 1, "RECTANGLE": 22, "INSTANCE": 11, "TEXT": 32, "ELLIPSE": 1, "VECTOR": 8, "GROUP": 2}`
- **Snippets de texto relevantes:**
  - CURSOS - ONLINE E PRESENCIAL
  - QUAIS OS OBJETIVOS E COMO FUNCIONAM OS CURSOS
  - Doar agora
  - Sua doação viabiliza nossas ações de comunicação e divulgação científica!
  - NOS AJUDE A CONSTRUIR PONTES
  - Seja o primeiro a saber das próximas atividades do OAMa
  - ASSINE A NEWSLETTER
  - Enviar

### 17. Celular_Projetos de Pesquisa

- **ID:** `2473:389`
- **Tipo:** FRAME
- **Viewport inferido:** mobile
- **Dimensões:** 360 × 5654
- **Posição:** x=19553, y=-9
- **Página inferida:** programas-e-projetos
- **Total de nós internos:** 91
- **Contagem por tipo:** `{"FRAME": 1, "RECTANGLE": 33, "INSTANCE": 12, "TEXT": 35, "ELLIPSE": 1, "VECTOR": 8, "GROUP": 1}`
- **Snippets de texto relevantes:**
  - O crescente banco de dados oriundo, principalmente, do nosso monitoramento padronizado e de longo prazo da avifauna da Mantiqueira, impulsiona estudos sobre a história natural e a ecologia das espécies e populações locais. Tendo isso como parte dos nossos objetivos, compreendemos que a colaboração no meio científico funciona como uma relação mutualística, onde todas as partes têm algo a ganhar, inclusive a sociedade. O OAMA disponibiliza dados científicos para que estudantes e colaboradores parceiros – de diversas instituições de pesquisa, como USP, UFRGS, UFRJ e UFSC – possam analisá-los para responder perguntas que impulsionem o conhecimento ornitológico e de ecologia no Brasil. Esses esforços convertem-se em mais estudos publicados, que podem ser traduzidos em narrativas socioambientais marcantes – por meio da divulgação científica – e em ferramentas de gestão ambiental para tomadas de decisões informadas. A seguir, confira alguns de nossos projetos de pesquisa em desenvolvimento ou já concluídos.
  - Font Size: 1rem | Line Height: 1.5rem
  - PROJETOS DE PESQUISA
  - Doar agora
  - Sua doação viabiliza nossas ações de comunicação e divulgação científica!
  - NOS AJUDE A CONSTRUIR PONTES
  - Seja o primeiro a saber das próximas atividades do OAMa
  - ASSINE A NEWSLETTER

### 18. Celular_Jacuçara

- **ID:** `2479:433`
- **Tipo:** FRAME
- **Viewport inferido:** mobile
- **Dimensões:** 360 × 3697
- **Posição:** x=23181, y=-9
- **Página inferida:** campanhas
- **Total de nós internos:** 49
- **Contagem por tipo:** `{"FRAME": 1, "RECTANGLE": 17, "INSTANCE": 3, "TEXT": 17, "ELLIPSE": 1, "VECTOR": 8, "GROUP": 2}`
- **Snippets de texto relevantes:**
  - A campanha Jacuçara surgiu para divulgar a importância e fortalecer a conservação de duas espécies-chave da Mata Atlântica, que também estão ameaçadas de extinção: a jacutinga e a juçara. Ambas as espécies existem em uma complexa teia de relações ecológicas que as tornam dependentes uma da outra. As jacutingas consomem os frutos da juçara e dispersam suas sementes pela floresta, garantindo a germinação de novas plantas geneticamente diversas e saudáveis, que, por sua vez, produzirão mais frutos para essas aves e muitas outras espécies nativas que dependem dessa fonte de alimento.
  - Font Size: 1rem | Line Height: 1.5rem
  - CAMPANHA JACUÇARA
  - Doar agora
  - Sua doação viabiliza nossas ações de comunicação e divulgação científica!
  - NOS AJUDE A CONSTRUIR PONTES
  - Seja o primeiro a saber das próximas atividades do OAMa
  - ASSINE A NEWSLETTER

### 19. Celular_FFT

- **ID:** `2479:525`
- **Tipo:** FRAME
- **Viewport inferido:** mobile
- **Dimensões:** 360 × 3519
- **Posição:** x=24101, y=-9
- **Página inferida:** campanhas
- **Total de nós internos:** 49
- **Contagem por tipo:** `{"FRAME": 1, "RECTANGLE": 16, "INSTANCE": 4, "TEXT": 17, "ELLIPSE": 1, "VECTOR": 8, "GROUP": 2}`
- **Snippets de texto relevantes:**
  - A “FUNdraising Field Trip” é uma ação de colaboração entre OAMa e o Observatório de Aves de Klamath, KBO. Esse projeto anual, que começou em 2023, junta captação de recursos para os observatórios com ações de sensibilização e educação ambiental e fomento ao turismo de conservação. A ação acontece em forma de uma viagem internacional, em que o KBO conecta pequenos grupos de visitantes que chegam ao Brasil para passear por cerca de 10 dias, vivenciando territórios, gastronomia, cultura, vida silvestre, paisagens naturais preservadas e projetos de conservação pela Serra da Mantiqueira.
  - Font Size: 1rem | Line Height: 1.5rem
  - FUNDRAISING FIELD TRIP
  - Doar agora
  - Sua doação viabiliza nossas ações de comunicação e divulgação científica!
  - NOS AJUDE A CONSTRUIR PONTES
  - Seja o primeiro a saber das próximas atividades do OAMa
  - ASSINE A NEWSLETTER

### 20. Desktop_PROGRAMAS E PROJETOS

- **ID:** `2497:419`
- **Tipo:** FRAME
- **Viewport inferido:** desktop
- **Dimensões:** 1024 × 2886
- **Posição:** x=25021, y=-9
- **Página inferida:** programas-e-projetos
- **Total de nós internos:** 25
- **Contagem por tipo:** `{"FRAME": 1, "RECTANGLE": 20, "VECTOR": 1, "ELLIPSE": 1, "TEXT": 2}`
- **Snippets de texto relevantes:**
  - Sobre Áreas de Atuação Programas e Projetos Prestação de Serviços Realizações Loja Apoie
  - PROGRAMAS E PROJETOS

### 21. Desktop_Monitoramento

- **ID:** `2498:638`
- **Tipo:** FRAME
- **Viewport inferido:** desktop
- **Dimensões:** 1024 × 4476
- **Posição:** x=26199, y=-9
- **Página inferida:** missão
- **Total de nós internos:** 30
- **Contagem por tipo:** `{"FRAME": 1, "RECTANGLE": 14, "VECTOR": 3, "ELLIPSE": 1, "TEXT": 10, "INSTANCE": 1}`
- **Snippets de texto relevantes:**
  - Sobre Áreas de Atuação Programas e Projetos Prestação de Serviços Realizações Loja Apoie
  - PROGRAMA DE MONITORAMENTO DE AVIFAUNA DA MANTIQUEIRA
  - O monitoramento padronizado e de longo-prazo da avifauna na Serra da Mantiqueira é uma atividade central na construção do OAMa. Como um observatório de aves, o OAMa foi fundado com o objetivo de estabelecer e realizar este monitoramento. Os observatórios têm a missão de acompanhar um processo ou fenômeno ao longo do tempo e do espaço, e os observatórios de aves fazem isso com as aves e seus habitats, utilizando a avifauna como ferramenta para entender e avaliar as condições e processos ambientais. Nosso monitoramento é focado no acompanhamento de padrões demográficos e nos efeitos das mudanças ambientais e climáticas na avifauna. Mas com os dados coletados de forma padronizada e periódica, aprendemos muito mais. Nossos objetivos principais com o monitoramento são os seguintes:
  - Iniciamos o monitoramento padronizado e de longo prazo da avifauna na Serra da Mantiqueira em 2018. Desde então realizamos amostragens em seis diferentes áreas amostrais entre São Paulo, Rio de Janeiro e Minas Gerais. Mantemos uma área modelo fixa, com mais de 6 anos de monitoramento continuado no mesmo local. Nosso objetivo é expandir nossa área de alcance e manter o acompanhamento fixo em diferentes áreas da Mantiqueira.
  - Utilizamos três técnicas complementares para a amostragem padrão do monitoramento: anilhamento com redes de neblina, pontos de escuta, e gravadores autônomos.
  - Identificar e descrever a composição de avifauna e sua sazonalidade de forma representativa para a Serra da Mantiqueira; Estimar padrões demográficos (sobrevivência, produtividade) para as espécies da Mantiqueira em diferentes áreas de ocorrência; Avaliar a relação entre condições ambientais e climáticas com as taxas demográficas e distribuição das espécies; Descrever a biologia e ecologia das espécies de aves na Mantiqueira;
  - "Programas de monitoramento de longo prazo da biodiversidade local são essenciais para entendermos e mitigarmos os efeitos das mudanças globais na biodiversidade tropical, ao mesmo tempo em que promovem capacitação profissional, educação ambiental e divulgação científica".
  - – Dr. Cagan Sekercioglu, da Universidade de Utah, nos Estados Unidos.

### 22. Desktop_Monitoramento

- **ID:** `2502:668`
- **Tipo:** FRAME
- **Viewport inferido:** desktop
- **Dimensões:** 1024 × 5543
- **Posição:** x=28443, y=-9
- **Página inferida:** indefinida
- **Total de nós internos:** 33
- **Contagem por tipo:** `{"FRAME": 1, "VECTOR": 1, "RECTANGLE": 15, "ELLIPSE": 1, "TEXT": 13, "INSTANCE": 1, "GROUP": 1}`
- **Snippets de texto relevantes:**
  - Sobre Áreas de Atuação Programas e Projetos Prestação de Serviços Realizações Loja Apoie
  - PROGRAMA DE TREINAMENTO EM MONITORAMENTO DE AVIFAUNA
  - SOBRE INSCRIÇÕES
  - O monitoramento de avifauna, em especial a técnica de anilhamento, exige um treinamento supervisionado para a formação de ornitólogos de campo habilidosos, com uma atuação ética e altamente qualificada. Este tipo de treinamento é oferecido em diferentes partes do mundo, em especial na América do Norte, mas não existia no Brasil até muito recentemente. Acreditando na importância desse treinamento para o desenvolvimento dos estudos ornitológicos em campo com alta qualidade no Brasil, o OAMa iniciou o programa de treinamento em monitoramento de avifauna em 2022. Os objetivos deste programa são principalmente os seguintes:
  - O lançamento de edital de seleção é realizado uma vez por ano, normalmente, no qual selecionamos em torno de quatro trainees para um ciclo de atividades de no mínimo 12 semanas. A divulgação é realizada em nossas redes sociais. SEM CHAMADAS ABERTAS NO MOMENTO. O programa é coordenado e supervisionado por Luiza Figueira. Luiza é co-fundadora e Diretora Executiva do OAMa, anilhadora e treinadora certificada pelo NABC desde 2015, anilhadora sênior do CEMAVE e responsável técnica pelas licenças de pesquisa do OAMa no SISBIO e SNA/CEMAVE. A realização conta com a participação de diversos colaboradores da equipe OAMa. Affonso Souza, Danielle Santos, Karine Resende, Otávio Rocha, Pedro Martins, Rachel Fidelis e Victor Sanchez fazem parte da equipe qualificada do OAMa para atuar no monitoramento e treinamento do OAMa.
  - INTERCÂMBIO DE ANILHADORES
  - O OAMa e o Observatório de Aves de Klamath (KBO), localizado no Oregon, Estados Unidos, promovem um intercâmbio de seis meses entre trainees das duas organizações. O objetivo dessas viagens é proporcionar a continuidade da capacitação profissional de anilhadores de aves para além das fronteiras nacionais (“Banders Beyond Borders"). Durante o intercâmbio, os trainees continuam seus estudos e atividades práticas, como o uso seguro e ético de redes de neblina, o levantamento de avifauna, o anilhamento de aves, as técnicas avançadas de identificação de idade e sexo, e a entrada e o gerenciamento de dados. Os participantes também têm oportunidade de atuar como monitores em workshops e atividades de educação ambiental. E, ao fim da experiência, os intercambistas são testados em seus conhecimentos, em busca de certificações internacionais de anilhadores e de treinadores pelo Conselho Norte-americano de Anilhamento (NABC). Esse projeto de partilhas técnicas e culturais só é possível graças aos recursos obtidos nas “Fundraising Field Trips”.
  - “Participar do intercâmbio no KBO tem sido uma das experiências mais intensas da minha vida. Viver imersa na rotina de campo não é fácil, mas tenho aprendido muito sobre a ética no anilhamento de aves, trabalho de campo e liderança. Para além do crescimento profissional, conheci outras culturas, idiomas e criei preciosas amizades com pessoas de várias partes do mundo. Uma oportunidade como essa, para alguém que vem de tão distante, não é fácil, afinal, muitos custos estão envolvidos. É por meio de doações, filiações e de viagens de arrecadações de fundos que esses sonhos se tornam reais. Essa é uma experiência que pode moldar e mudar caminhos, e que eu desejo a todos que puderem ter a oportunidade.” – Andreza Freitas, voluntária de divulgação científica do OAMa e doutoranda no Laboratório de Ecologia de Aves e comportamento da UERJ pelo programa de pós-graduação em Ecologia da UFRJ.

### 23. Desktop_Ações Pró-Aves

- **ID:** `2512:624`
- **Tipo:** FRAME
- **Viewport inferido:** desktop
- **Dimensões:** 1024 × 2614
- **Posição:** x=30714, y=-9
- **Página inferida:** proaves
- **Total de nós internos:** 15
- **Contagem por tipo:** `{"FRAME": 1, "VECTOR": 1, "RECTANGLE": 8, "ELLIPSE": 1, "TEXT": 4}`
- **Snippets de texto relevantes:**
  - Sobre Áreas de Atuação Programas e Projetos Prestação de Serviços Realizações Loja Apoie
  - PROGRAMA AÇÕES PRÓ-AVES
  - O Programa Ações Pró-Aves se consolidou como um pilar do OAMa para atingir nossa missão de criar pontes com a sociedade e promover a conservação da biodiversidade. Esse programa tem como objetivo promover o reconhecimento individual de cada cidadão sobre os impactos decorrentes do nosso modo de vida e como podemos, como indivíduos e como sociedade, transformar nossos hábitos para promover ações para a conservação das aves. Os temas focais em pauta são colisão de aves em vidros, tráficos e caça de animais silvestres, poluição sonora, poluição luminosa, uso correto de comedouros e bebedouros e os impactos de pets sobre as aves.
  - O programa reúne esforços para transpor o conhecimento científico e acadêmico em linguagem acessível para a sociedade por meio de mídias digitais em redes sociais, exposições em áreas públicas e escolas, elaboração e distribuição de materiais informativos impressos, oficinas de artes, teatro, ciência cidadã e outras produções. O programa Ações Pró-Aves impulsiona o potencial de cada pessoa para tornar o mundo melhor para as aves e para nós. Desde 2022, o OAMa tem realizado diversas atividades, produtos e projetos com o apoio de inúmeros parceiros, entre eles o PAN Aves da Mata Atlântica, CEMAVE/ICMBio, o CRBio-04, entre outros. Se quiser saber mais, acesse a página do programa aqui ou baixe os materiais informativos na aba Downloads.

### 24. Desktop_Cursos

- **ID:** `2513:501`
- **Tipo:** FRAME
- **Viewport inferido:** desktop
- **Dimensões:** 1024 × 4797
- **Posição:** x=32985, y=-9
- **Página inferida:** serviços-capacitacao
- **Total de nós internos:** 36
- **Contagem por tipo:** `{"FRAME": 1, "VECTOR": 1, "RECTANGLE": 13, "ELLIPSE": 1, "TEXT": 15, "INSTANCE": 4, "GROUP": 1}`
- **Snippets de texto relevantes:**
  - Sobre Áreas de Atuação Programas e Projetos Prestação de Serviços Realizações Loja Apoie
  - CURSOS - ONLINE E PRESENCIAL
  - SOBRE AS INSCRIÇÕES
  - QUAIS OS OBJETIVOS E COMO FUNCIONAM OS CURSOS
  - Nossos cursos de curta duração em anilhamento e em análise de mudas em aves (foco em passeriformes) são uma forma de promover a formação, o treinamento, e atualização de técnicas de campo para o estudo ornitológico. Cursos e oficinas de extensão, em temas correlatos à ornitologia, à conservação e à observação de aves são promovidos pelo OAMa em parceria com profissionais de variadas áreas de atuação (artistas, fotógrafos, educadores e pesquisadores), visando conectar pessoas e natureza.
  - As aberturas de inscrições dos cursos teóricos e do curso prático acontecem uma vez por ano, e a divulgação acontece pelas redes sociais e por campanhas de email do OAMa (Inscreva-se aqui para não perder as chamadas). Os valores arrecadados com os cursos pagos são 100% convertidos em doações para ações de pesquisa e conservação das aves, sendo assim, uma forma de viabilizar a continuação do OAMa.
  - Deixamos claro que nenhuma ave será colocada em risco para priorizar a experiência prática dos estudantes. Caso haja a necessidade, os instrutores poderão intervir a qualquer momento para garantir o bem estar da ave. Seguimos o código de ética e recomendações de práticas pelo NABC (North American Banding Council) e CEMAVE (Centro Nacional de Pesquisa e Conservação de Aves Silvestres).
  - No curso ONLINE Básico de Anilhamento, realizado em parceria com o Projeto Aves de Noronha (Instituto Retriz), abordamos da introdução a uma revisão aprofundada sobre a aplicação de anilhas em aves. Fundamental no monitoramento da avifauna e em pesquisas com identificação do indivíduo, o anilhamento é um método de estudo de grande importância para a conservação das espécies. E assim como qualquer atividade que implica na captura e manuseio de organismos vivos, existe um risco associado ao método. Esse risco é minimizado com o treinamento rigoroso e continuado de cada integrante da equipe de trabalho. Realizamos este curso teórico em geral uma vez por ano pela plataforma Sympla.

### 25. Desktop_Projetos de Pesquisa

- **ID:** `2514:766`
- **Tipo:** FRAME
- **Viewport inferido:** desktop
- **Dimensões:** 1024 × 3735
- **Posição:** x=35094, y=-9
- **Página inferida:** programas-e-projetos
- **Total de nós internos:** 56
- **Contagem por tipo:** `{"FRAME": 1, "RECTANGLE": 23, "INSTANCE": 9, "TEXT": 21, "VECTOR": 1, "ELLIPSE": 1}`
- **Snippets de texto relevantes:**
  - Pesquisa de Percepção Socioambiental - PAN Aves da Mata Atlântica 2024 - atual
  - Font Size: 1rem | Line Height: 1.5rem
  - Use da corrugação de bico para auxiliar a classificação de idade de beija-flores 2022 - 2025
  - Colisões de aves com vidro: Enxergando soluções para uma ameaça invisível 2024 - atual
  - Dinâmicas populacionais de beija-flores 2023 - 2025
  - Aves seguidoras de frutificações de bambu 2024 - atual
  - Sobre Áreas de Atuação Programas e Projetos Prestação de Serviços Realizações Loja Apoie
  - PROJETOS DE PESQUISA

### 26. Desktop_Jacuçara

- **ID:** `2517:1052`
- **Tipo:** FRAME
- **Viewport inferido:** desktop
- **Dimensões:** 1024 × 2614
- **Posição:** x=36297, y=-9
- **Página inferida:** campanhas
- **Total de nós internos:** 15
- **Contagem por tipo:** `{"FRAME": 1, "VECTOR": 1, "RECTANGLE": 8, "ELLIPSE": 1, "TEXT": 4}`
- **Snippets de texto relevantes:**
  - Sobre Áreas de Atuação Programas e Projetos Prestação de Serviços Realizações Loja Apoie
  - CAMPANHA JACUÇARA
  - A campanha Jacuçara surgiu para divulgar a importância e fortalecer a conservação de duas espécies-chave da Mata Atlântica, que também estão ameaçadas de extinção: a jacutinga e a juçara. Ambas as espécies existem em uma complexa teia de relações ecológicas que as tornam dependentes uma da outra. As jacutingas consomem os frutos da juçara e dispersam suas sementes pela floresta, garantindo a germinação de novas plantas geneticamente diversas e saudáveis, que, por sua vez, produzirão mais frutos para essas aves e muitas outras espécies nativas que dependem dessa fonte de alimento.
  - Dentre os resultados obtidos, publicamos o documentário “Reconectar pessoas às aves: PAN Aves da Mata Atlântica" (canal do Youtube do ICMBio), lançamos o site da campanha, realizamos ações de educação ambiental com degustação de pratos à base de juçara e visita a sistema agroflorestal, além de doações de sementes e de mudas de juçara para estudantes e produtores rurais. A campanha é uma iniciativa do Plano de Ação Nacional para Conservação das Aves da Mata Atlântica, organizado coletivamente por Associação de Zoológicos e Aquários do Brasil, CEMAVE, Centro Ecológico, Ministério do Meio Ambiente, Centro Nacional de Conservação da Flora, Jardim Botânico do Rio de Janeiro, OAMa, Parque das Aves, SAVE Brasil e Instituto Marcos Daniel. Para saber mais, acesse a página da campanha aqui.

### 27. Desktop_Ações Pró-Aves

- **ID:** `2517:1092`
- **Tipo:** FRAME
- **Viewport inferido:** desktop
- **Dimensões:** 1024 × 2614
- **Posição:** x=38560, y=-9
- **Página inferida:** proaves
- **Total de nós internos:** 15
- **Contagem por tipo:** `{"FRAME": 1, "VECTOR": 1, "RECTANGLE": 8, "ELLIPSE": 1, "TEXT": 4}`
- **Snippets de texto relevantes:**
  - Sobre Áreas de Atuação Programas e Projetos Prestação de Serviços Realizações Loja Apoie
  - FUNDRAISING FIELD TRIP
  - A “FUNdraising Field Trip” é uma ação de colaboração entre OAMa e o Observatório de Aves de Klamath, KBO. Esse projeto anual, que começou em 2023, junta captação de recursos para os observatórios com ações de sensibilização e educação ambiental e fomento ao turismo de conservação. A ação acontece em forma de uma viagem internacional, em que o KBO conecta pequenos grupos de visitantes que chegam ao Brasil para passear por cerca de 10 dias, vivenciando territórios, gastronomia, cultura, vida silvestre, paisagens naturais preservadas e projetos de conservação pela Serra da Mantiqueira.
  - A cada ano, a viagem trilha caminhos levemente diferentes. Já percorremos localidades como São Francisco Xavier (SP), Serrinha do Alambari (RJ), Vila de Visconde de Mauá (RJ), Bocaina de Minas (MG) e Itamonte (MG). Ao longo do trajeto, proporcionamos aos turistas trilhas e passarinhadas únicas em diversas unidades de conservação; e conversas inspiradoras com cientistas, produtores rurais, ambientalistas e artistas locais. A “FUNdraising Field Trip” é uma viagem que cria momentos inesquecíveis para conectar os visitantes às aves, aos habitats e às pessoas que os protegem. As doações realizadas pelos turistas financiam os programas de pesquisa, de treinamento, de educação ambiental e de restauração de habitats do OAMa e do KBO.

### 28. Celular_REALIZAÇÕES

- **ID:** `2560:450`
- **Tipo:** FRAME
- **Viewport inferido:** mobile
- **Dimensões:** 360 × 4488
- **Posição:** x=43572, y=-9
- **Página inferida:** realizações
- **Total de nós internos:** 64
- **Contagem por tipo:** `{"FRAME": 1, "RECTANGLE": 27, "ELLIPSE": 1, "VECTOR": 7, "TEXT": 20, "GROUP": 6, "INSTANCE": 2}`
- **Snippets de texto relevantes:**
  - Doar agora
  - Sua doação viabiliza nossas ações de comunicação e divulgação científica!
  - NOS AJUDE A CONSTRUIR PONTES
  - Seja o primeiro a saber das próximas atividades do OAMa
  - ASSINE A NEWSLETTER
  - Enviar
  - Nome
  - E-mail

### 29. Desktop_REALIZAÇÕES

- **ID:** `2581:454`
- **Tipo:** FRAME
- **Viewport inferido:** desktop
- **Dimensões:** 1024 × 3339
- **Posição:** x=44114, y=-9
- **Página inferida:** realizações
- **Total de nós internos:** 29
- **Contagem por tipo:** `{"FRAME": 1, "RECTANGLE": 16, "VECTOR": 1, "ELLIPSE": 1, "TEXT": 7, "GROUP": 3}`
- **Snippets de texto relevantes:**
  - Sobre Áreas de Atuação Programas e Projetos Prestação de Serviços Realizações Loja Apoie
  - REALIZAÇÕES
  - DOWNLOADS Baixe livros, cartilhas, pôsteres ilustrados, adesivos anti colisão e muito mais
  - DOCUMENTÁRIOS Assista às produções audiovisuais do OAMa
  - WIKIMUDAS Conheça nossa enciclopédia colaborativa de muda e idade de aves brasileiras
  - DIVULGAÇÃO CIENTÍFICA Um blog para compartilhar e aproximar a ciência de você
  - TEXTOS ACADÊMICOS Leia artigos e resumos científicos de pesquisas lideradas pela equipe OAMa

### 30. Celular_CONSULTORIA

- **ID:** `2592:573`
- **Tipo:** FRAME
- **Viewport inferido:** mobile
- **Dimensões:** 360 × 8112
- **Posição:** x=47934, y=-9
- **Página inferida:** serviços-monitoramento
- **Total de nós internos:** 132
- **Contagem por tipo:** `{"FRAME": 1, "VECTOR": 10, "RECTANGLE": 34, "ELLIPSE": 10, "INSTANCE": 15, "TEXT": 50, "GROUP": 12}`
- **Snippets de texto relevantes:**
  - Além de promover a confluência entre ciência, conservação e a sociedade brasileira, o OAMa também oferece serviços técnicos para terceiros nas áreas de 1. monitoramento de aves e estudos de avifauna, 2. educação ambiental e comunicação científica e 3. capacitação técnica e formação profissional em ornitologia. Em mais de seis anos de atuação, o OAMa acumulou preciosas experiências, seja em campo, coletando dados que fomentam estudos técnicos sobre impactos ambientais na conservação e treinando uma nova geração de pesquisadores, ou em escolas e espaços não-formais de educação divulgando a ciência por meio de linguagem acessível a públicos diversos. O compromisso do OAMa é com a ética e a excelência profissional, e com o envolvimento e a democratização do saber científico para com as pessoas. Tudo convergindo para a aplicação de técnicas e metodologias padronizadas. Gerando, assim, conhecimento científico capaz de fomentar soluções para os desafios atuais da conservação da biodiversidade e o enfrentamento das mudanças climáticas globais, com foco especial na Mata Atlântica do sudeste brasileiro.
  - Font Size: 1rem | Line Height: 1.5rem
  - Juntos, multiplicando e potencializando impactos socioambientais reais
  - SERVIÇOS BASEADOS EM CIÊNCIA E CONSERVAÇÃO
  - MONITORAMENTO DE AVES E ESTUDOS DE AVIFAUNA
  - FRENTES DE ATUAÇÃO
  - Saiba mais
  - EDUCAÇÃO AMBIENTAL E COMUNICAÇÃO CIENTÍFICA

### 31. Celular_Monitoramento de aves e estudos de avifauna

- **ID:** `2610:569`
- **Tipo:** FRAME
- **Viewport inferido:** mobile
- **Dimensões:** 360 × 3653
- **Posição:** x=48476, y=-9
- **Página inferida:** serviços-monitoramento
- **Total de nós internos:** 57
- **Contagem por tipo:** `{"FRAME": 1, "RECTANGLE": 17, "INSTANCE": 5, "TEXT": 22, "ELLIPSE": 1, "VECTOR": 10, "GROUP": 1}`
- **Snippets de texto relevantes:**
  - MONITORAMENTO DE AVES E ESTUDOS DE AVIFAUNA
  - Inventários e levantamentos; Monitoramento de longo prazo; Estudos para diagnóstico ambiental e avaliação de impactos; Assistência técnica em manejo de avifauna relacionada à conflitos humanos; Relatórios técnicos e pareceres (planos de manejos e diagnósticos ambientais); Análise, manejo e gestão de dados biológicos.
  - Font Size: 1rem | Line Height: 1.5rem
  - Serviços
  - Equipe qualificada para a coleta de dados padronizados em ornitologia; Foco no bem estar animal e profissional; Realização de metodologias sistematizadas e padronizadas.
  - Diferenciais do OAMa
  - Empresas de consultoria ambiental; Órgãos ambientais; Universidades e institutos de pesquisa; Empreendimentos; Unidades de conservação.
  - Público potencial

### 32. Celular_Educação ambiental e comunicação científica

- **ID:** `2611:730`
- **Tipo:** FRAME
- **Viewport inferido:** mobile
- **Dimensões:** 360 × 3822
- **Posição:** x=49018, y=-9
- **Página inferida:** serviços-educacao
- **Total de nós internos:** 57
- **Contagem por tipo:** `{"FRAME": 1, "RECTANGLE": 17, "INSTANCE": 5, "TEXT": 22, "ELLIPSE": 1, "VECTOR": 10, "GROUP": 1}`
- **Snippets de texto relevantes:**
  - EDUCAÇÃO AMBIENTAL E COMUNICAÇÃO CIENTÍFICA
  - Programas de educação ambiental; Oficinas, palestras, cursos e exposições sobre aves silvestres e impactos humanos; Produção de materiais educativos e informativos; Mobilização comunitária para mitigar impactos urbanos sobre as aves; Educação ambiental e ensino do meio com foco em biodiversidade; Práticas de observação de aves visando a sensibilização ambiental.
  - Font Size: 1rem | Line Height: 1.5rem
  - Serviços
  - Design original e personalizado de materiais gráficos e de atividades didáticas; Conteúdo pautado na transposição didática da ciência para todas as idades; Abordagens participativas; Atividades em espaços formais e não-formais de educação; Práticas que integram a arte ao conhecimento científico e à educação.
  - Diferenciais do OAMa
  - Escolas, museus e universidades; Administração pública e organizações do terceiro setor; Empresas com programas socioambientais; Projetos de compensação ambiental.
  - Público potencial

### 33. Celular_Monitoramento de aves e estudos de avifauna

- **ID:** `2611:847`
- **Tipo:** FRAME
- **Viewport inferido:** mobile
- **Dimensões:** 360 × 3808
- **Posição:** x=49560, y=-9
- **Página inferida:** serviços-monitoramento
- **Total de nós internos:** 57
- **Contagem por tipo:** `{"FRAME": 1, "RECTANGLE": 17, "INSTANCE": 5, "TEXT": 22, "ELLIPSE": 1, "VECTOR": 10, "GROUP": 1}`
- **Snippets de texto relevantes:**
  - CAPACITAÇÃO TÉCNICA E FORMAÇÃO PROFISSIONAL EM ORNITOLOGIA
  - Treinamento em métodos de coleta de dados; Treinamento em análise de mudas e classificação de idade; Formação para guias e condutores de observação de aves; Cursos e oficinas em ornitologia e ecologia das aves; Assistência técnica para coleta de dados de campo para projetos de pesquisa (iniciação científica, mestrado e doutorado).
  - Font Size: 1rem | Line Height: 1.5rem
  - Serviços
  - Instrutores habilitados e certificados nacional e internacionalmente; Sistema padronizado de ensino-aprendizagem; Práticas realizadas seguindo ética profissional; Formação baseada em atividades práticas supervisionadas; Integração entre teoria e campo.
  - Diferenciais do OAMa
  - Estudantes e profissionais da área ambiental; Observadores de aves e da natureza; Universidades e institutos de pesquisa; Administração pública e organizações do terceiro setor; Empresas de consultoria ambiental.
  - Público potencial

### 34. Desktop_CONSULTORIA

- **ID:** `2612:1124`
- **Tipo:** FRAME
- **Viewport inferido:** desktop
- **Dimensões:** 1024 × 6547
- **Posição:** x=50102, y=-9
- **Página inferida:** serviços-monitoramento
- **Total de nós internos:** 131
- **Contagem por tipo:** `{"FRAME": 1, "RECTANGLE": 30, "VECTOR": 8, "ELLIPSE": 9, "TEXT": 60, "GROUP": 4, "INSTANCE": 19}`
- **Snippets de texto relevantes:**
  - Sobre Áreas de Atuação Programas e Projetos Prestação de Serviços Realizações Loja Apoie
  - CONSULTORIA
  - Além de promover a confluência entre ciência, conservação e a sociedade brasileira, o OAMa também oferece serviços técnicos para terceiros nas áreas de 1. monitoramento de aves e estudos de avifauna, 2. educação ambiental e comunicação científica e 3. capacitação técnica e formação profissional em ornitologia. Em mais de seis anos de atuação, o OAMa acumulou preciosas experiências, seja em campo, coletando dados que fomentam estudos técnicos sobre impactos ambientais na conservação e treinando uma nova geração de pesquisadores, ou em escolas e espaços não-formais de educação divulgando a ciência por meio de linguagem acessível a públicos diversos. O compromisso do OAMa é com a ética e a excelência profissional, e com o envolvimento e a democratização do saber científico para com as pessoas. Tudo convergindo para a aplicação de técnicas e metodologias padronizadas. Gerando, assim, conhecimento científico capaz de fomentar soluções para os desafios atuais da conservação da biodiversidade e o enfrentamento das mudanças climáticas globais, com foco especial na Mata Atlântica do sudeste brasileiro.
  - SERVIÇOS BASEADOS EM CIÊNCIA E CONSERVAÇÃO
  - FRENTES DE ATUAÇÃO
  - POR QUE ESCOLHER O OAMa?
  - Juntos, multiplicando e potencializando impactos socioambientais reais
  - MONITORAMENTO DE AVES E ESTUDOS DE AVIFAUNA

### 35. Desktop_Monitoramento de aves e estudos de avifauna

- **ID:** `2620:831`
- **Tipo:** FRAME
- **Viewport inferido:** desktop
- **Dimensões:** 1024 × 2614
- **Posição:** x=51308, y=-9
- **Página inferida:** serviços-monitoramento
- **Total de nós internos:** 29
- **Contagem por tipo:** `{"FRAME": 1, "VECTOR": 2, "RECTANGLE": 8, "ELLIPSE": 4, "TEXT": 11, "INSTANCE": 3}`
- **Snippets de texto relevantes:**
  - Sobre Áreas de Atuação Programas e Projetos Prestação de Serviços Realizações Loja Apoie
  - MONITORAMENTO DE AVES E ESTUDOS DE AVIFAUNA
  - Serviços
  - Inventários e levantamentos; Monitoramento de longo prazo; Estudos para diagnóstico ambiental e avaliação de impactos; Assistência técnica em manejo de avifauna relacionada à conflitos humanos; Relatórios técnicos e pareceres (planos de manejos e diagnósticos ambientais); Análise, manejo e gestão de dados biológicos.
  - Font Size: 1rem | Line Height: 1.5rem
  - Equipe qualificada para a coleta de dados padronizados em ornitologia; Foco no bem estar animal e profissional; Realização de metodologias sistematizadas e padronizadas.
  - Diferenciais do OAMa
  - Empresas de consultoria ambiental; Órgãos ambientais; Universidades e institutos de pesquisa; Empreendimentos; Unidades de conservação.

### 36. Desktop_Monitoramento de aves e estudos de avifauna

- **ID:** `2620:878`
- **Tipo:** FRAME
- **Viewport inferido:** desktop
- **Dimensões:** 1024 × 2614
- **Posição:** x=52514, y=-9
- **Página inferida:** serviços-monitoramento
- **Total de nós internos:** 29
- **Contagem por tipo:** `{"FRAME": 1, "VECTOR": 2, "RECTANGLE": 8, "ELLIPSE": 4, "TEXT": 11, "INSTANCE": 3}`
- **Snippets de texto relevantes:**
  - Sobre Áreas de Atuação Programas e Projetos Prestação de Serviços Realizações Loja Apoie
  - EDUCAÇÃO AMBIENTAL E COMUNICAÇÃO CIENTÍFICA
  - Serviços
  - Programas de educação ambiental; Oficinas, palestras, cursos e exposições sobre aves silvestres e impactos humanos; Produção de materiais educativos e informativos; Mobilização comunitária para mitigar impactos urbanos sobre as aves; Educação ambiental e ensino do meio com foco em biodiversidade; Práticas de observação de aves visando a sensibilização ambiental.
  - Font Size: 1rem | Line Height: 1.5rem
  - Design original e personalizado de materiais gráficos e de atividades didáticas; Conteúdo pautado na transposição didática da ciência para todas as idades; Abordagens participativas; Atividades em espaços formais e não-formais de educação; Práticas que integram a arte ao conhecimento científico e à educação.
  - Diferenciais do OAMa
  - Escolas, museus e universidades; Administração pública e organizações do terceiro setor; Empresas com programas socioambientais; Projetos de compensação ambiental.

### 37. Desktop_Monitoramento de aves e estudos de avifauna

- **ID:** `2620:940`
- **Tipo:** FRAME
- **Viewport inferido:** desktop
- **Dimensões:** 1024 × 2614
- **Posição:** x=53720, y=-9
- **Página inferida:** serviços-monitoramento
- **Total de nós internos:** 31
- **Contagem por tipo:** `{"FRAME": 1, "VECTOR": 2, "RECTANGLE": 8, "ELLIPSE": 6, "TEXT": 11, "INSTANCE": 3}`
- **Snippets de texto relevantes:**
  - Sobre Áreas de Atuação Programas e Projetos Prestação de Serviços Realizações Loja Apoie
  - CAPACITAÇÃO TÉCNICA E FORMAÇÃO PROFISSIONAL EM ORNITOLOGIA
  - Serviços
  - Treinamento em métodos de coleta de dados; Treinamento em análise de mudas e classificação de idade; Formação para guias e condutores de observação de aves; Cursos e oficinas em ornitologia e ecologia das aves; Assistência técnica para coleta de dados de campo para projetos de pesquisa (iniciação científica, mestrado e doutorado).
  - Font Size: 1rem | Line Height: 1.5rem
  - Instrutores habilitados e certificados nacional e internacionalmente; Sistema padronizado de ensino-aprendizagem; Práticas realizadas seguindo ética profissional; Formação baseada em atividades práticas supervisionadas; Integração entre teoria e campo.
  - Diferenciais do OAMa
  - Estudantes e profissionais da área ambiental; Observadores de aves e da natureza; Universidades e institutos de pesquisa; Administração pública e organizações do terceiro setor; Empresas de consultoria ambiental.

## Screenshots exportados

- `/Users/anhinga/Projetos/oama-web2/design-assets/figma-exports/selection/tablet-tablet-2_4.png` ← 2:4
- `/Users/anhinga/Projetos/oama-web2/design-assets/figma-exports/selection/desktop-desktop-homepage-28_383.png` ← 28:383
- `/Users/anhinga/Projetos/oama-web2/design-assets/figma-exports/selection/desktop-desktop-maior-2-29_2.png` ← 29:2
- `/Users/anhinga/Projetos/oama-web2/design-assets/figma-exports/selection/mobile-celular-homepage-2212_678.png` ← 2212:678
- `/Users/anhinga/Projetos/oama-web2/design-assets/figma-exports/selection/mobile-celular-menu-2214_169.png` ← 2214:169
- `/Users/anhinga/Projetos/oama-web2/design-assets/figma-exports/selection/mobile-celular-missão-2215_156.png` ← 2215:156
- `/Users/anhinga/Projetos/oama-web2/design-assets/figma-exports/selection/desktop-desktop-sobre-2263_24.png` ← 2263:24
- `/Users/anhinga/Projetos/oama-web2/design-assets/figma-exports/selection/mobile-celular-sobre-2263_140.png` ← 2263:140
- `/Users/anhinga/Projetos/oama-web2/design-assets/figma-exports/selection/mobile-celular-história-do-oama-2275_277.png` ← 2275:277
- `/Users/anhinga/Projetos/oama-web2/design-assets/figma-exports/selection/mobile-celular-áreas-de-atuação-2330_176.png` ← 2330:176
- `/Users/anhinga/Projetos/oama-web2/design-assets/figma-exports/selection/desktop-desktop-áreas-de-atuação-2349_350.png` ← 2349:350
- `/Users/anhinga/Projetos/oama-web2/design-assets/figma-exports/selection/mobile-celular-programas-e-projetos-2423_234.png` ← 2423:234
- `/Users/anhinga/Projetos/oama-web2/design-assets/figma-exports/selection/mobile-celular-monitoramento-2431_492.png` ← 2431:492
- `/Users/anhinga/Projetos/oama-web2/design-assets/figma-exports/selection/mobile-celular-treinamento-2446_326.png` ← 2446:326
- `/Users/anhinga/Projetos/oama-web2/design-assets/figma-exports/selection/mobile-celular-ações-pró-aves-2462_618.png` ← 2462:618
- `/Users/anhinga/Projetos/oama-web2/design-assets/figma-exports/selection/mobile-celular-cursos-2465_298.png` ← 2465:298
- `/Users/anhinga/Projetos/oama-web2/design-assets/figma-exports/selection/mobile-celular-projetos-de-pesquisa-2473_389.png` ← 2473:389
- `/Users/anhinga/Projetos/oama-web2/design-assets/figma-exports/selection/mobile-celular-jacuçara-2479_433.png` ← 2479:433
- `/Users/anhinga/Projetos/oama-web2/design-assets/figma-exports/selection/mobile-celular-fft-2479_525.png` ← 2479:525
- `/Users/anhinga/Projetos/oama-web2/design-assets/figma-exports/selection/desktop-desktop-programas-e-projetos-2497_419.png` ← 2497:419
- `/Users/anhinga/Projetos/oama-web2/design-assets/figma-exports/selection/desktop-desktop-monitoramento-2498_638.png` ← 2498:638
- `/Users/anhinga/Projetos/oama-web2/design-assets/figma-exports/selection/desktop-desktop-monitoramento-2502_668.png` ← 2502:668
- `/Users/anhinga/Projetos/oama-web2/design-assets/figma-exports/selection/desktop-desktop-ações-pró-aves-2512_624.png` ← 2512:624
- `/Users/anhinga/Projetos/oama-web2/design-assets/figma-exports/selection/desktop-desktop-cursos-2513_501.png` ← 2513:501
- `/Users/anhinga/Projetos/oama-web2/design-assets/figma-exports/selection/desktop-desktop-projetos-de-pesquisa-2514_766.png` ← 2514:766
- `/Users/anhinga/Projetos/oama-web2/design-assets/figma-exports/selection/desktop-desktop-jacuçara-2517_1052.png` ← 2517:1052
- `/Users/anhinga/Projetos/oama-web2/design-assets/figma-exports/selection/desktop-desktop-ações-pró-aves-2517_1092.png` ← 2517:1092
- `/Users/anhinga/Projetos/oama-web2/design-assets/figma-exports/selection/mobile-celular-realizações-2560_450.png` ← 2560:450
- `/Users/anhinga/Projetos/oama-web2/design-assets/figma-exports/selection/desktop-desktop-realizações-2581_454.png` ← 2581:454
- `/Users/anhinga/Projetos/oama-web2/design-assets/figma-exports/selection/mobile-celular-consultoria-2592_573.png` ← 2592:573
- `/Users/anhinga/Projetos/oama-web2/design-assets/figma-exports/selection/mobile-celular-monitoramento-de-aves-e-estudos-de-avifauna-2610_569.png` ← 2610:569
- `/Users/anhinga/Projetos/oama-web2/design-assets/figma-exports/selection/mobile-celular-educação-ambiental-e-comunicação-científica-2611_730.png` ← 2611:730
- `/Users/anhinga/Projetos/oama-web2/design-assets/figma-exports/selection/mobile-celular-monitoramento-de-aves-e-estudos-de-avifauna-2611_847.png` ← 2611:847
- `/Users/anhinga/Projetos/oama-web2/design-assets/figma-exports/selection/desktop-desktop-consultoria-2612_1124.png` ← 2612:1124
- `/Users/anhinga/Projetos/oama-web2/design-assets/figma-exports/selection/desktop-desktop-monitoramento-de-aves-e-estudos-de-avifauna-2620_831.png` ← 2620:831
- `/Users/anhinga/Projetos/oama-web2/design-assets/figma-exports/selection/desktop-desktop-monitoramento-de-aves-e-estudos-de-avifauna-2620_878.png` ← 2620:878
- `/Users/anhinga/Projetos/oama-web2/design-assets/figma-exports/selection/desktop-desktop-monitoramento-de-aves-e-estudos-de-avifauna-2620_940.png` ← 2620:940

## Leitura geral

- O arquivo mistura versões **desktop/tablet/mobile** e também várias páginas/abas dentro de uma única página do Figma.
- A home está claramente presente, com hero, bloco institucional, números, áreas de atuação, agenda/mídia e CTA de apoio.
- Há também páginas de **serviços/áreas** com estrutura mais editorial: hero, blocos de serviços, diferenciais e público potencial.
- O Figma mostra um design system relativamente consistente em **Oswald + Montserrat**, amarelo OAMa, azul OAMa, fundo creme e ondas como separadores.
- Alguns elementos do Figma parecem rascunhos, variantes duplicadas ou cards isolados fora dos frames principais; esses pontos precisam ser filtrados na implementação.

## Próximos passos sugeridos

1. Escolher um frame/página prioritário para análise detalhada.
2. Cruzar esse frame com o que já existe em `src/pages/` e `src/components/sections/`.
3. Decidir o que será hardcoded versus Sanity, seguindo o `AGENT.md`.
4. Implementar ou refatorar a página no Astro com base no screenshot exportado e na estrutura textual capturada.
