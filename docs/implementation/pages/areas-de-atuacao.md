# Página: Áreas de Atuação

Status: **revisada pela PED-39 e alinhada ao Figma em segundo corte**.

Issue Linear: `PED-39`

## Fonte principal

- Tipo: `Figma-first`
- Frames consultados:
  - Desktop: `design-assets/figma-exports/selection/desktop-desktop-áreas-de-atuação-2349_350.png`
  - Mobile: `design-assets/figma-exports/selection/mobile-celular-áreas-de-atuação-2330_176.png`

## Rota

- `src/pages/areas-de-atuacao.astro`

## Papel da página

Página institucional longa que apresenta as três áreas centrais de atuação do OAMa:

1. `Pesquisa e Monitoramento de Avifauna`
2. `Comunicação Científica`
3. `Capacitações Técnicas`

## Estrutura observada no Figma

1. Header padrão.
2. Hero fotográfico com ave e título `ÁREAS DE ATUAÇÃO` centralizado na base.
3. Seção amarela: pesquisa e monitoramento.
   - texto introdutório;
   - cluster circular de fotos com anel branco e ícones;
   - texto complementar;
   - faixa com duas imagens retangulares;
   - texto sobre relatório de monitoramento.
4. Onda de transição para seção azul.
5. Seção azul: comunicação científica.
   - texto institucional;
   - cluster circular de fotos;
   - texto sobre Ações Pró-Aves;
   - faixa com duas imagens retangulares;
   - texto sobre PAN Aves da Mata Atlântica.
6. Onda de transição para seção amarela.
7. Seção amarela: capacitações técnicas.
   - texto institucional;
   - cluster circular de fotos;
   - texto sobre Programa de Treinamento em Monitoramento de Avifauna;
   - faixa com duas imagens retangulares;
   - texto sobre cursos em parceria.
8. Footer global com CTA/newsletter.

## Decisão Hardcoded vs Sanity

- Hardcoded nesta fase:
  - títulos;
  - textos institucionais;
  - composição visual;
  - imagens locais disponíveis.
- Sanity: não criar schema nesta task.

## Arquivos alterados nesta revisão

- `src/pages/areas-de-atuacao.astro`
- `docs/implementation/pages/areas-de-atuacao.md`
- docs de workflow em `docs/agent-workflow/` ao fechar a issue.

## Decisões da revisão PED-39

- A página foi reaproximada do Figma em vez de manter a versão anterior mais genérica.
- O título do hero foi centralizado na base da imagem, como nos frames.
- Os textos das seções passaram a usar cor escura/preta, como no Figma; a versão anterior usava textos brancos em blocos longos.
- Foram adicionadas as faixas retangulares de duas imagens após cada cluster, ausentes no primeiro corte.
- A composição passou a usar clusters circulares maiores, anel branco e ícones por área.
- A maioria das imagens internas foi trocada de Unsplash para assets locais em `public/proaves2/`, `public/treinamento-cursos/` e `public/home/atuacao/`.

## Critérios de aceite

- [x] `/areas-de-atuacao` revisada contra desktop/mobile do Figma.
- [x] Três seções principais representadas na ordem correta.
- [x] Cores principais alinhadas: amarelo → azul → amarelo.
- [x] Texto escuro em blocos institucionais, mais próximo do Figma.
- [x] Clusters circulares e faixas de duas imagens adicionados.
- [x] Imagens internas locais verificadas: nenhum arquivo local referenciado está faltando.
- [x] Sem dependências novas.
- [x] Build validado.

## Pendências conhecidas

- Hero ainda usa imagem remota provisória porque não há asset local equivalente ao pássaro do frame de Áreas de Atuação.
- As fotos locais usadas nos clusters/faixas reduzem placeholders, mas ainda podem ser substituídas pelas imagens exatas exportadas/fornecidas do Figma quando disponíveis.
- QA visual fino em navegador ainda pode ajustar proporções exatas de círculos/ondas/altura das imagens.
- Conteúdo institucional longo pode ser migrado para Sanity em uma etapa futura, se for decidido que essa página deve ser editável via CMS.

## Verificação

Comando executado:

```bash
PATH="$HOME/.local/bin:/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin" npm run build
```

Resultado: **passou**. `/areas-de-atuacao/index.html` foi gerado. Warnings restantes são os pré-existentes do Sanity Studio/chunks grandes e depreciação de `@sanity/image-url`.
