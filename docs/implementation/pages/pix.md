# Página: PIX

Status: **criada pela PED-42**.

Issue Linear: `PED-42`

## Fonte principal

- Tipo: `Hybrid` / `Legacy-derived`
- Fonte confirmada:
  - dados bancários já migrados em `src/pages/apoie.astro`
  - documentação de `/apoie` em `docs/implementation/pages/apoie.md`
- Busca realizada:
  - legado `/Users/anhinga/Projetos/oama-website`
  - assets `public/*pix*` no legado e no Astro
- Resultado da busca: **não foi encontrada chave PIX oficial nem QR code oficial**.

## Rota

- `src/pages/pix.astro`
- URL final: `/pix`

## Decisão de segurança editorial

A página existe porque `/apoie` já aponta para `/pix`, mas a base de dados disponível não contém uma chave PIX ou QR code oficial.

Por isso, a implementação:

- não inventa chave PIX;
- não assume que o CNPJ é chave PIX;
- mostra apenas dados bancários confirmados;
- orienta o usuário a confirmar a chave oficial por e-mail/WhatsApp do OAMa;
- mantém link de retorno para `/apoie`.

## Conteúdo implementado

- Hero `Doação via PIX`.
- Texto de apoio institucional.
- Card `Dados confirmados` com:
  - Banco do Brasil
  - Código 001
  - Agência 0131-7
  - Conta corrente 81487-3
  - CNPJ 35.713.512/0001-80
- Aviso explícito de que a chave PIX/QR code não foi encontrada nos assets/fontes.
- Card `Confirme a chave PIX` com:
  - e-mail `contato@oama.eco.br`
  - WhatsApp `+55 24 99962-7394`
- CTA para voltar a `/apoie`.

## Critérios de aceite

- [x] `/pix` existe como rota Astro.
- [x] `/apoie` não leva mais a uma rota inexistente.
- [x] Nenhuma chave PIX/QR code foi inventado.
- [x] Dados bancários confirmados foram reaproveitados.
- [x] Página tem canais claros para confirmação.
- [x] Build validado.

## Pendências conhecidas

- Substituir a orientação de confirmação por chave PIX/QR code real quando o OAMa fornecer o dado oficial.
- Se houver QR code oficial, adicionar imagem local em `public/apoie/` ou via Sanity.
- Avaliar se esta página deve ser gerenciada pelo Sanity junto com as opções de doação.
