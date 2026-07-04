# Newsletter — integração com o mailer self-hosted

Fonte: direção do usuário (2026-06-13). Resolve a pendência §6.2 da revisão Figma
("endpoint real da newsletter").

## Arquitetura

A newsletter é um app **separado** (`~/Projetos/newsletter-oama`, nome
`oama-mailer`): Next.js + Supabase (Postgres) + envio via Resend/SES. Deploy em
`https://mailer.oama.eco.br`.

Fluxo **double opt-in**:
1. Site → `POST https://mailer.oama.eco.br/api/subscribers`
2. Mailer cria/atualiza o subscriber, registra a inscrição como `pending` com
   `confirmation_token` assinado, e envia email de confirmação.
3. Usuário clica no link → `GET /confirm/[token]` (página amigável) marca
   `subscribed`.

## O que foi feito

### No mailer (`newsletter-oama`) — NÃO commitado/deployado ainda
- `app/api/subscribers/route.ts`: **adicionado handler `POST`** (antes só tinha
  `GET`; a página pública `/subscribe/[listSlug]` postava para um endpoint
  inexistente → 405). O POST:
  - aceita JSON (fetch do site) **e** form nativo (`application/x-www-form-urlencoded`);
  - valida com zod (email obrigatório; `list_slug` default `newsletter`);
  - **honeypot** anti-spam (campo `website`); sem reCAPTCHA (decisão §6.1 em aberto);
  - upsert do subscriber + `list_subscriptions` `pending` + token;
  - envia email de confirmação (reusa `sendTransactionalEmail`, provider via
    `EMAIL_PROVIDER`, default Resend);
  - **CORS**: libera origem `*.oama.eco.br`, `oama.eco.br`, `localhost`/`127.0.0.1`
    (handler `OPTIONS` + headers). Responde JSON (fetch) ou redirect (form nativo).
  - `tsc --noEmit` limpo.

### No site (`oama-web2`)
- `src/scripts/newsletter.ts`: handler AJAX compartilhado. Liga qualquer
  `<form data-newsletter-form>` (idempotente). POST JSON → mostra status em
  `[data-newsletter-status]`. Endpoint **hardcoded** `https://mailer.oama.eco.br/api/subscribers`.
- `src/components/sections/Footer.astro`: o form do rodapé (global, em todas as
  páginas) agora envia de verdade (era `onsubmit="return false"`). Campo `name`
  virou `first_name`; adicionados honeypot, `list_slug` e elemento de status.
  Um `<script>` global liga os forms (cobre rodapé + página /newsletter).
- `src/pages/newsletter.astro`: **página dedicada** `/newsletter` (hero overlay +
  faixa amarela com form Nome/Sobrenome/Email). Reusa o script global do Footer.
- Verificado: build 23 páginas; submit testado com endpoint **mockado** (route
  intercept) → mensagem de sucesso e `data-state="success"`.

## PENDÊNCIAS DE DEPLOY (necessárias para funcionar em produção)
1. **Deployar o `newsletter-oama`** com o novo `POST` (working tree, não commitado).
2. Garantir que a **lista slug `newsletter`** exista no Supabase do mailer
   (script `scripts/seed.ts` cria "Newsletter principal" / slug `newsletter`).
3. Conferir as **env** do mailer em produção: `SUPABASE_*`, `RESEND_API_KEY`
   (ou SES), `SES_FROM_EMAIL`/from da lista, `NEXT_PUBLIC_APP_URL`.
4. **CORS / domínio do site:** o POST libera `*.oama.eco.br`. Se o oama-web2 em
   produção rodar em outro domínio (ex.: `*.vercel.app`), incluir essa origem em
   `isAllowedOrigin` no route do mailer.
5. (Opcional) tornar o endpoint configurável via `import.meta.env.PUBLIC_NEWSLETTER_ENDPOINT`
   em vez de hardcoded, se quiser apontar para staging.

## Aberto (decisão do usuário)
- reCAPTCHA real (§6.1): hoje só honeypot.
