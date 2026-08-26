# /jacucara — página principal do projeto Jacuçara

- **Tipo:** `Legacy-first`
- **Fonte de verdade:** `/Users/anhinga/Projetos/oama-website/pages/jacucara/index.js` (1107 linhas, conteúdo hardcoded, sem CMS)
- **Figma:** não existe frame para esta rota. Nada aqui foi derivado do Figma.
- **Arquivo:** `src/pages/jacucara.astro`
- **Assets:** `public/jacucara/{figs,logos,pags}` — 31 arquivos, otimizados de 14 MB para 4,6 MB

## Relação com `/programas-e-projetos/campanha-jacucara`
Mesmo par conceitual de `/proaves` ↔ `/programas-e-projetos/pro-aves`:

- `/programas-e-projetos/campanha-jacucara` — página **descritiva**, `Figma-first`. **Não foi alterada** nesta task, exceto pelo link de fecho.
- `/jacucara` — página **completa do projeto**, migrada do legado.

O fecho da descritiva ("Para saber mais, acesse a página da campanha") apontava para
`https://www.oama.eco.br/jacucara` (site antigo) e agora aponta para `/jacucara`.

## Decisões
- Sem dependência nova. A sanfona do legado (Radix Accordion) virou `<details>/<summary>` nativo.
- Paleta do legado (magenta `#8f1858`/`#c02176`) substituída pela casca do site novo:
  faixas full-bleed em roxo `#9b8ab6` (cor da campanha), títulos `font-oswald` em `oama-ink`,
  régua `oama-yellow`, seções alternando branco/`oama-cream`, fecho com `WaveDark`.
- Nomes de arquivo com espaço/acento foram slugificados (`PN Iguaçu.png` → `pn-iguacu.png`)
  para evitar problema de normalização NFC/NFD em URL. Os `pags/*.png` (todos opacos)
  viraram JPG; os `logos/*` e `figs/12` têm transparência real e continuam PNG.
- Os dois PDFs citados no legado por URL absoluta do site antigo já existem em
  `public/publicacoes/files/` e passaram a ser referenciados por caminho interno.
- `/jacucara` foi adicionada a `src/pages/sitemap.xml.ts` e o redirect de `/jacucara`
  foi removido de `vercel.json` (a rota existe de verdade agora).

## Pendências herdadas do legado
- Links externos mortos (404), mantidos como estão porque remover seria cortar conteúdo:
  `cncflora.jbrj.gov.br` (portal inteiro fora do ar, 2 links), `mapleleafecovillage.com`,
  o post do blog do Parque das Aves e `acaijucara.com.br` (sem resposta).
- O legado repetia "não seja realizada completamente" duas vezes na mesma frase (bug de
  copy/paste); a duplicação foi removida.
- O erro de digitação "Destamatamento" e "Ás palmeiras" foi mantido fiel ao legado.
- `/jucara` (44 linhas no legado) é só um hero genérico + um embed do YouTube
  (`FtL8dOPeu6U`), sem conteúdo próprio. Esse mesmo vídeo já está dentro de `/jacucara`.
  Não foi migrado; o redirect de `/jucara` em `vercel.json` foi mantido.
