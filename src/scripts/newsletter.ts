// Envio AJAX dos formulários de newsletter para o mailer self-hosted do OAMa.
// Marque o <form> com `data-newsletter-form` e inclua um elemento de status com
// `data-newsletter-status`. O endpoint faz double opt-in (envia email de
// confirmação), então o sucesso aqui significa "verifique seu email".

import { getCaptchaToken, warmCaptcha } from "./captcha";

const configuredEndpoint = import.meta.env.PUBLIC_NEWSLETTER_ENDPOINT;
const ENDPOINT =
  typeof configuredEndpoint === "string" && configuredEndpoint.trim()
    ? configuredEndpoint.trim()
    : "https://newsletter-oama.vercel.app/api/subscribers";

function wireForm(form: HTMLFormElement) {
  if (form.dataset.wired === "1") return; // idempotente (script é global)
  form.dataset.wired = "1";

  const status = form.querySelector<HTMLElement>("[data-newsletter-status]");
  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');

  const setStatus = (state: string, message: string) => {
    if (!status) return;
    status.dataset.state = state;
    status.textContent = message;
  };

  warmCaptcha(form);

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const payload = Object.fromEntries(new FormData(form).entries());
    setStatus("loading", "Enviando…");
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
        "Quase lá! Enviamos um email de confirmação — confirme para concluir sua inscrição.",
      );
    } catch {
      setStatus(
        "error",
        "Não foi possível inscrever agora. Tente novamente em instantes.",
      );
    } finally {
      if (button) button.disabled = false;
    }
  });
}

export function wireNewsletterForms() {
  document
    .querySelectorAll<HTMLFormElement>("[data-newsletter-form]")
    .forEach(wireForm);
}
