# TASK-LAUNCH-002 — Newsletter: endpoint de produção e segurança do mailer

- status: `in_progress`
- tipo: `Launch-first` (integração cross-repo; sem CMS)

## Objetivo
Corrigir a integração do `oama-web2` com o endpoint de newsletter que está efetivamente publicado e eliminar a exposição pública da lista de inscritos no repositório `newsletter-oama`. Preservar o fluxo de double opt-in e o contrato do POST existente.

## Fontes de verdade
- últimas mudanças de `~/Projetos/oama-website`: commits `b9d2ddc` e `30ac010`;
- endpoint ativo: `https://newsletter-oama.vercel.app/api/subscribers`;
- `docs/implementation/pages/newsletter.md`;
- código dos dois repositórios.

## Escopo por repositório
### oama-web2
- `src/scripts/newsletter.ts`;
- documentação operacional relacionada à newsletter.

### newsletter-oama
- `app/api/subscribers/route.ts` e testes/arquivos diretamente necessários.

## Critérios de aceite
- [ ] frontend usa endpoint de produção resolvível, com fallback seguro;
- [ ] `GET /api/subscribers` não devolve inscritos sem autenticação;
- [ ] `POST /api/subscribers` continua aceitando o payload atual e o preflight CORS;
- [ ] nenhuma credencial é incluída em código ou logs;
- [ ] validação local de tipo/teste/build para cada repo afetado;
- [ ] deploy e double opt-in real ficam explicitamente pendentes de credenciais/acesso externo.

## Restrições
- Não usar Fable.
- Não criar CMS.
- Não fazer deploy, não enviar email real e não expor dados pessoais.
- Agentes trabalham em arquivos exclusivos; o orquestrador revisa todo diff antes de integrar.

## Implementação realizada (2026-07-20)
- `oama-web2/src/scripts/newsletter.ts`: endpoint configurável por `PUBLIC_NEWSLETTER_ENDPOINT`, com fallback para `https://newsletter-oama.vercel.app/api/subscribers` (CORS preflight 204 verificado).
- `oama-web2/src/components/sections/Footer.astro`: CTA global de doação corrigido de `#doe` para `/apoie`.
- `newsletter-oama/app/api/subscribers/route.ts`: `GET` de inscritos agora exige `requireAdminUser()` e retorna 401 sem sessão; POST/OPTIONS foram preservados. `npx tsc --noEmit` passou no mailer.
- Build do `oama-web2`: passou, 23 páginas. Warnings conhecidos de Sanity/chunks grandes; importações não usadas em `src/components/proaves/ui/acarousel.jsx` seguem como limpeza pós-lançamento.

## Pendências de release
- Fazer deploy do mailer para publicar a proteção do GET.
- Configurar `PUBLIC_NEWSLETTER_ENDPOINT` no ambiente de produção, caso não se queira depender do fallback Vercel.
- Validar lista `newsletter`, envs de e-mail e double opt-in real com uma inscrição controlada.
