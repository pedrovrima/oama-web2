# Página: Missão

Status: **concluída pela PED-41 e validada por build**.

Issue Linear concluída: `PED-41`

## Fonte principal

- Tipo: `Figma-first`
- Frame disponível:
  - Mobile: `mobile-celular-missão-2215_156.png`
- Observação: não há export desktop específico de Missão em `design-assets/figma-exports/selection/`; a revisão priorizou o frame mobile disponível e manteve extrapolação responsiva conservadora para desktop.

## Rota

- `src/pages/missao.astro`

## Papel da página

Página institucional curta que explica a missão científica do OAMa, relaciona a atuação aos ODS e fecha com uma imagem forte antes do footer global.

## Estrutura implementada

1. Hero fotográfico alto com ave.
2. Título `MISSÃO` em branco, centralizado na base da imagem.
3. Bloco amarelo com texto institucional justificado.
4. Destaque para ODS:
   - ODS 13 e ODS 15 grandes.
   - ODS 4, 11 e 12 menores abaixo.
5. Segundo parágrafo institucional sobre a Década da ONU e os Objetivos de Desenvolvimento Sustentável.
6. Segunda imagem grande antes do footer.

## Resultado da PED-41

- A página foi mantida como `Figma-first`.
- Imagens remotas provisórias foram removidas.
- Assets locais foram usados para hero e imagem de fechamento.
- Não foi usado conteúdo legado para completar a página.
- Não há `href="#"`, `action="#"`, textos “em breve” ou dependências novas.
- Build validado com sucesso após a alteração.

## Decisão Hardcoded vs Sanity

- Hardcoded nesta fase:
  - título;
  - textos institucionais;
  - imagens ODS;
  - SEO da página.
- Não criar schemas Sanity nesta task.

## Pendências conhecidas

- Se surgir export desktop específico de Missão, revisar proporção do hero e recorte das imagens contra esse frame.
- Refinar escolha das fotos se o Figma completo indicar assets específicos diferentes.
