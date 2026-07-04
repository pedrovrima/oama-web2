# Página: Pro-Aves

Status: **implementada como camada legado/resultados**.

## Fonte principal
- **Legacy-first**
- Base: `/Users/anhinga/Projetos/oama-website/pages/proaves/index.jsx`

## Rota
- `src/pages/programas-e-projetos/pro-aves.astro`
- Rota final: `/programas-e-projetos/pro-aves`

## Papel da página
Esta rota **não** deve disputar o papel da página principal/descritiva do programa no novo site.

No estado atual do projeto, a interpretação correta é:
- `/programas-e-projetos/acoes-pro-aves` = página principal/descritiva, guiada pelo Figma;
- `/programas-e-projetos/pro-aves` = camada legada de resultados, materiais e memória do projeto.

## Regra operacional
- Não puxar blocos desta rota para completar a página Figma-first.
- Não renomear esta rota como se ela fosse a apresentação principal do programa.
- Se a arquitetura final pedir outra URL para a camada de resultados, isso pode ser feito depois; por enquanto, a separação conceitual precisa ficar explícita.

## Mudança aplicada nesta etapa
- Ajustado o título/SEO para `Resultados do Programa Pró-Aves`.
- Inserido contexto explícito no topo da página informando que esta rota preserva a camada legada/resultados.
- Criado link claro para a rota principal guiada pelo Figma: `/programas-e-projetos/acoes-pro-aves`.
- Mantido o restante do corpo legado como acervo separado, sem contaminar a página descritiva.

## Pendências
- Decidir, em etapa futura, se a camada de resultados merece slug/rota própria mais explícita.
- Revisar visualmente esta rota com calma depois da estabilização das páginas Figma-first.
- Avaliar o que daqui deve ir para Sanity e o que deve permanecer como acervo estático.

## Verificação
Executar:

```bash
PATH="$HOME/.local/bin:/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin" npm run build
```
