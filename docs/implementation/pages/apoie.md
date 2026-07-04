# Página: Apoie

Status: **reimplementada como migração Legacy-first fiel (pixel perfect) do site antigo — 2026-06-11**.

Issue Linear: `PED-35` (auditoria anterior) + diretiva direta do usuário em 2026-06-11:
"migrar a página apoie do repo /oama-website para cá, pixel perfect, tudo tem que funcionar".

## Fonte principal

- Tipo: `Legacy-first` (substituiu a versão `Hybrid` anterior por direção explícita do usuário)
- Fonte: `/Users/anhinga/Projetos/oama-website/pages/apoie/index.js` (rota ativa do legado)
- `pages/__apoie__/index.js` é versão morta no legado; ignorada.
- Frames Figma específicos para `/apoie`: continuam inexistentes.

## Rota e arquivos

- `src/pages/apoie.astro` — página (estrutura e classes espelham o JSX legado 1:1)
- `src/data/apoie-stripe.json` — snapshot estático dos planos recorrentes do Stripe (commitado)
- `scripts/fetch-apoie-stripe.mjs` — gera/atualiza o snapshot
- `public/apoie/*` — assets já copiados do legado (capa, aves decorativas, fotos 51–61, ícones)
- `public/publicacoes/files/ornito_todo_dia_OAMa.pdf` e `Oama_Livreto_Colorir_AvesAmeaçadas.pdf` — copiados do legado para os links da lista de ações

## Stripe — como funciona agora

O legado usava `getServerSideProps` (lista produtos com `STRIPE_KEY`) e `/api/getLink`
(criava um payment link novo **a cada clique** — a conta tem 285 links ativos por causa disso).
O site novo é estático, então:

1. `scripts/fetch-apoie-stripe.mjs` lista produtos ativos + preços recorrentes,
   **reutiliza** payment links ativos existentes (só cria se o preço não tiver nenhum)
   e grava `src/data/apoie-stripe.json`.
2. A página renderiza os círculos a partir do JSON; cada círculo é um `<a>` direto
   para o payment link com `?locale=pt` (mesmo destino do legado).
3. O build na Vercel **não precisa** de `STRIPE_KEY` (o JSON é commitado).
4. `STRIPE_KEY` vive no `.env` local (gitignored) só para rodar o script.

**Manutenção**: se os planos mudarem no Stripe, rodar
`node scripts/fetch-apoie-stripe.mjs` e commitar o JSON.

Snapshot atual (2026-06-11): Patinho R$6, Tico-tico R$20, Sai-andorinha R$50,
Saíra-lagarta R$100, Saira-amarela R$250, Cauré R$500 (nomes como estão no Stripe).

## Origem por seção (tudo legado)

| Seção | Observação |
|---|---|
| Hero "Venha pro bando..." | `capa.png` + clip-path `hero`/`hero-small` portados verbatim |
| Intro + Comunicando ciência | copy migrada; typos do legado corrigidos |
| Doador recorrente (círculos Stripe) | snapshot estático, ver acima |
| Doação única (PIX/PayPal/Cartão) | mesmos destinos do legado; `/pix` abre na mesma aba (correção da PED-35 mantida) |
| Seu apoio faz a diferença | `34.png` fundo, `grafico.png`, pílula de custos R$205.769/R$447.975, aves 4/15.png |
| Conheça algumas de nossas ações | lista + carrossel embla de materiais (28–33.png), ave 8.png |
| Carrossel final de fotos | embla com 51.jpg–61.jpg, aves 5/16.png |
| Nav/Footer | chrome do site novo (BaseLayout, `navVariant="overlay"` — nav legado era `fixed top-0`) |

## Diferenças intencionais vs legado (registradas)

1. Typos corrigidos: "Seu apio" → "Seu apoio"; "para para a" → "para a";
   "Vem somar com a gente.!" → "Vem somar com a gente!".
2. `;` literal renderizado por engano no JSX do legado (SecondSection) — omitido.
3. Links remapeados para rotas do site novo: `/proaves` → `/programas-e-projetos/acoes-pro-aves`;
   `/jacucara` → `/programas-e-projetos/campanha-jacucara`; URL do Saltator corrigida
   (`hhtps://` → `https://`); PDFs servidos localmente de `/publicacoes/files/`.
4. Fonte: o legado declarava `font-euphoria` ('euphoria-black'), que **não tinha @font-face**
   e caía no sans-serif do sistema; a página nova usa o sans default (equivalente na prática).
5. Carrosséis embla inicializados via script client-side (`embla-carousel` vanilla,
   mesma lib do legado) em vez de React.
6. A seção Catarse, newsletter, dados bancários e "voltar" da versão Hybrid anterior
   **não existem no legado** e foram removidas. Os dados bancários continuam em `/pix`.

## Verificação realizada (2026-06-11)

- Build: passou (21 páginas), `/apoie/index.html` gerado.
- HTML inspecionado: 6 payment links `buy.stripe.com`, 2 carrosséis, 17 slides,
  clip-paths e gradientes presentes.
- Browser (playwright, dev server 4321): screenshots desktop (1440px) e mobile (390px)
  conferidos seção a seção contra o legado; ambos carrosséis testados com clique
  (transform anima para o slide seguinte).
- Links verificados com HTTP 200: os 2 PDFs, `/pix/`, `/programas-e-projetos/acoes-pro-aves/`,
  `/programas-e-projetos/campanha-jacucara/`.

## Pendências conhecidas

- 404 pré-existente e global de `/logo-oama.svg` (referenciado pelo Nav novo) — não é desta página.
- Newsletter não existe mais nesta página (não existia no legado).
- Sanity não usado; decidir depois se planos/textos viram CMS.
- Se o Figma ganhar frame para `/apoie`, exigirá redecisão de fonte.
