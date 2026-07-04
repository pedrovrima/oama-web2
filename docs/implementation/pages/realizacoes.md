# Página: Realizações

Status: **revisada pela PED-36 e alinhada ao Figma em segundo corte**.

Issue Linear: `PED-36`

## Fonte principal

- Tipo: `Figma-first`
- Frames consultados:
  - Desktop: `design-assets/figma-exports/selection/desktop-desktop-realizações-2581_454.png`
  - Mobile: `design-assets/figma-exports/selection/mobile-celular-realizações-2560_450.png`

## Rota

- `src/pages/realizacoes.astro`

## Papel da página

Hub visual de materiais e produtos de conhecimento do OAMa.

## Estrutura observada no Figma

1. Header padrão.
2. Hero fotográfico alto com título `REALIZAÇÕES` centralizado na base.
3. Fundo amarelo com cinco cards brancos arredondados:
   - Downloads
   - Documentários
   - Wikimudas
   - Divulgação Científica
   - Textos Acadêmicos
4. Grid 2 colunas no desktop; 1 coluna no mobile.
5. Quinto card ocupa a coluna esquerda no desktop, mantendo vazio à direita.
6. Onda de transição para o footer global azul.
7. Footer global entrega CTA de doação/newsletter; não há CTA local adicional antes dele.

## Decisão Hardcoded vs Sanity

- Hardcoded nesta fase:
  - títulos dos cards;
  - descrições curtas;
  - imagens locais disponíveis;
  - estrutura visual.
- Sanity: não criar schema nesta task.

## Decisões da revisão PED-36

- Removida a introdução editorial extra que não aparecia no Figma.
- Removido o bloco local de CTA/newsletter para evitar duplicação com o Footer global.
- Cards deixados como `<article>`, sem `href="#"`, porque ainda não há rotas reais para downloads/documentários/wikimudas/blog/artigos.
- Removido o selo “Links em breve”, que não aparece no Figma.
- Troca das imagens internas de Unsplash por assets locais disponíveis.
- Mantido apenas o hero com imagem remota provisória, por falta de asset local equivalente ao frame.

## Critérios de aceite

- [x] Hero com título centralizado na base.
- [x] Fundo amarelo logo após o hero.
- [x] Cinco cards representados na ordem correta.
- [x] Cards brancos, arredondados, com imagem no topo e texto centralizado.
- [x] Sem seção introdutória extra.
- [x] Sem CTA/newsletter local duplicado.
- [x] Sem `href="#"` ou placeholder textual no código da página.
- [x] Imagens locais dos cards verificadas: nenhum arquivo faltando.
- [x] Sem dependências novas.
- [x] Build validado.

## Pendências conhecidas

- Hero ainda usa imagem remota provisória; substituir pela foto exata do Figma/acervo quando disponível.
- Destinos reais dos cinco cards ainda não existem como rotas locais. Quando forem definidos, converter os `<article>` em links reais ou adicionar CTA acessível.
- QA visual fino pode ajustar alturas exatas dos cards e recorte das fotos contra o Figma.
- Se os materiais forem gerenciados pela equipe, modelar cards no Sanity em etapa futura.

## Verificação

Comando executado:

```bash
PATH="$HOME/.local/bin:/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin" npm run build
```

Resultado: **passou**. `/realizacoes/index.html` foi gerado. Warnings restantes são os pré-existentes do Sanity Studio/chunks grandes e depreciação de `@sanity/image-url`.
