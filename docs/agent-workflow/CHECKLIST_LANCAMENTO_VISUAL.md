# Checklist manual de QA visual — pré-lançamento

Use o deploy de preview da Vercel (ou build local em `127.0.0.1:4322`). Marque cada item em desktop **1440×900** e mobile **390×844**. Compare com Figma quando a rota tiver frame; os frames desktop/mobile podem estar separados no canvas, portanto associe por rota e conteúdo, não por posição.

## Gate antes de começar
- [ ] O deploy mostra o commit esperado.
- [ ] Abrir DevTools: Console sem erros além de avisos conhecidos; Network sem imagens/JS/CSS 404.
- [ ] Testar em janela anônima, sem cache e em conexão mobile simulada.
- [ ] Conferir título, favicon, URL canônica e preview de compartilhamento das páginas principais.

## Em todas as rotas
- [ ] Logo e navegação levam aos destinos corretos.
- [ ] Desktop: nav não colide com título/hero; estados hover e foco visíveis.
- [ ] Mobile: menu abre, fecha no X, fecha após navegar; links dourados e botão Apoie funcionam.
- [ ] Hero: asset, recorte, contraste e posição do título correspondem ao frame aplicável.
- [ ] Não há scroll horizontal, sobreposição de texto, imagens quebradas ou lazy-load permanente.
- [ ] Ondas, cores de fundo, tipografia Oswald/Montserrat, raios e espaçamentos mantêm a composição.
- [ ] Footer: CTA de doação leva a `/apoie`; newsletter mostra estado de carregamento/sucesso/erro; redes e Loja abrem os destinos corretos.
- [ ] Navegação por teclado: foco visível em links, botões, formulário e menu.

## Rotas e fluxos

### Institucionais
- [ ] `/` — hero, números, áreas, monitoramento, mídia, agenda, CTA e footer; confirmar que qualquer conteúdo de agenda/mídia publicado é atual.
- [ ] `/sobre` — hero, Quem Somos, Plano de Voo, membros, parceiros, História e Transparência; abrir ao menos um PDF PT, EN, Pró-Aves, Estatuto e DRE.
- [ ] `/missao` — fotos, ODS, copy e CTA.
- [ ] `/areas-de-atuacao` — hero, três áreas, clusters circulares e colagens.
- [ ] `/realizacoes` — cards Downloads, Documentários, Divulgação Científica e Textos Acadêmicos clicáveis; WikiMudas preservado até URL oficial.

### Consultoria
- [ ] `/consultoria` — hero sem colisão com nav; formulário exige Nome/E-mail/Mensagem; botão prepara e-mail para `contato@oama.eco.br`, feedback e fallback aparecem.
- [ ] `/consultoria/monitoramento-de-aves`
- [ ] `/consultoria/educacao-ambiental`
- [ ] `/consultoria/capacitacao-tecnica`
- [ ] `/consultoria/cursos` — banner, título na faixa amarela, imagens, cursos concluídos e seções finais.

### Programas e projetos
- [ ] `/programas-e-projetos` — hero, mosaico de sete itens, chevrons e links desktop/mobile.
- [ ] `/programas-e-projetos/acoes-pro-aves` — hero teatral, bordado full-width e copy.
- [ ] `/programas-e-projetos/campanha-jacucara`
- [ ] `/programas-e-projetos/fundraising-field-trip`
- [ ] `/programas-e-projetos/monitoramento-de-avifauna`
- [ ] `/programas-e-projetos/treinamento-monitoramento-avifauna`
- [ ] `/programas-e-projetos/projetos-de-pesquisa` — alternância clara/escura dos cards.
- [ ] `/programas-e-projetos/pro-aves`
- [ ] `/proaves` — carrosséis, modais, accordions e contadores.

### Doação e newsletter
- [ ] `/apoie` — planos Stripe, PayPal, carrosséis, links internos e mobile.
- [ ] `/pix` — QR legível, payload copiado, confirmação visual “Código copiado!” e dados bancários.
- [ ] `/newsletter` — validação de campos, honeypot invisível, feedback; confirmar double opt-in com e-mail de teste autorizado.
- [ ] Formulário de newsletter do footer em uma segunda rota.

## Validação de produção externa
- [ ] Mailer publicado com `GET /api/subscribers` protegido (401 sem sessão).
- [ ] Lista `newsletter` existe no Supabase de produção.
- [ ] E-mail de confirmação chega, link confirma e inscrição muda para `subscribed`.
- [ ] Domínio final e CORS aceitam o domínio publicado.
- [ ] Links Stripe/PayPal abrem checkout real; não concluir cobrança durante QA.
- [ ] Validar institucionalmente QR/chave PIX recuperados do legado antes de divulgar campanha.

## Registro de achados
Para cada falha, registrar: rota, viewport, passo de reprodução, screenshot, severidade (P0 bloqueia lançamento; P1 corrigir antes de campanha; P2 pós-lançamento), frame Figma se houver e decisão tomada.

## Aprovação final
- [ ] Nenhum P0/P1 aberto.
- [ ] Build passou.
- [ ] QA desktop/mobile concluído.
- [ ] Newsletter real validada em produção.
- [ ] Responsável OAMa aprovou conteúdo institucional, PIX e links de doação.
