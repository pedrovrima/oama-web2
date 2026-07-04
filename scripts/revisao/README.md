# Scripts de revisão visual (Figma vs implementação)

Usados na revisão de 2026-06-12 (`docs/agent-workflow/REVISAO_FIGMA_2026-06-12.md`).

## Pré-requisitos
- Build servido em `localhost:4321` (`npm run build` + `npx astro preview --port 4321`,
  ou qualquer servidor estático sobre `dist/`).
- `playwright-cli` instalado (`/opt/homebrew/bin/playwright-cli`).
- Python 3 com Pillow (para as composições).

## Uso
```bash
# 1. Screenshots full-page de todas as rotas (desktop 1440 e mobile 390)
#    Saída: /tmp/rev/desktop/*.png e /tmp/rev/mobile/*.png
zsh scripts/revisao/shoot.sh

# 2. Composições lado a lado (Figma à esquerda | implementação à direita),
#    fatiadas verticalmente. Saída: /tmp/rev/compare/<rota>--{d,m}NN.png
python3 scripts/revisao/gen-compare.py
```

Os exports do Figma ficam em `design-assets/figma-exports/selection/`
(node IDs no nome do arquivo). O mapeamento rota → frame está dentro de
`gen-compare.py` e na seção 5 do documento de revisão.

Nota: os frames desktop do Figma têm 1024px de largura; as capturas locais são
feitas a 1440px — comparar composição e proporção, não pixels absolutos.
