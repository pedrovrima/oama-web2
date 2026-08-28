// Envio AJAX dos formulários "Fale Conosco" para o mailer self-hosted do OAMa
// (rota POST /api/contato). Marque o <form> com `data-contato-form` e inclua:
//   - um elemento de status com `data-contato-status` (aria-live)
//   - um link com `data-contato-fallback` (mailto: de plano B, mostrado no erro)
// Opcional: `data-contato-origem` no form identifica a página de origem no email.

import { getCaptchaToken, warmCaptcha } from "./captcha";

const configuredEndpoint = import.meta.env.PUBLIC_CONTATO_ENDPOINT;
const ENDPOINT =
  typeof configuredEndpoint === "string" && configuredEndpoint.trim()
    ? configuredEndpoint.trim()
    : "https://newsletter-oama.vercel.app/api/contato";

const EMAIL_OAMA = "contato@oama.eco.br";

function montarMailto(payload: Record<string, string>) {
  const assunto = payload.assunto || "Contato pelo site do OAMa";
  const linhas = [
    "Olá, equipe OAMa!",
    "",
    `Nome: ${payload.nome || ""}`,
    `E-mail: ${payload.email || ""}`,
    `Telefone: ${payload.telefone || "Não informado"}`,
  ];
  if (payload.cargo) linhas.push(`Cargo / organização: ${payload.cargo}`);
  if (payload.assunto) linhas.push(`Assunto: ${payload.assunto}`);
  linhas.push("", "Mensagem:", payload.mensagem || "");
  return `mailto:${EMAIL_OAMA}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(linhas.join("\n"))}`;
}

function wireForm(form: HTMLFormElement) {
  if (form.dataset.wired === "1") return; // idempotente (script pode ser global)
  form.dataset.wired = "1";

  const status = form.querySelector<HTMLElement>("[data-contato-status]");
  const fallback = form.querySelector<HTMLAnchorElement>(
    "[data-contato-fallback]",
  );
  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');

  const setStatus = (state: string, message: string) => {
    if (!status) return;
    status.dataset.state = state;
    status.textContent = message;
    status.hidden = false;
  };

  warmCaptcha(form);

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const payload: Record<string, string> = {};
    new FormData(form).forEach((value, key) => {
      payload[key] = String(value).trim();
    });
    if (form.dataset.contatoOrigem) {
      payload.origem = form.dataset.contatoOrigem;
    }

    setStatus("loading", "Enviando…");
    if (fallback) fallback.hidden = true;
    if (button) button.disabled = true;

    // Anti-bot: token do Turnstile, quando configurado (null = sem captcha).
    const captchaToken = await getCaptchaToken(form);
    if (captchaToken) payload.captcha_token = captchaToken;

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus(
        "success",
        "Mensagem enviada! Em breve a equipe do OAMa entra em contato.",
      );
    } catch {
      setStatus(
        "error",
        `Não foi possível enviar agora. Tente novamente em instantes ou escreva direto para ${EMAIL_OAMA} usando o link abaixo.`,
      );
      if (fallback) {
        fallback.href = montarMailto(payload);
        fallback.hidden = false;
      }
    } finally {
      if (button) button.disabled = false;
    }
  });
}

export function wireContatoForms() {
  document
    .querySelectorAll<HTMLFormElement>("[data-contato-form]")
    .forEach(wireForm);
}
