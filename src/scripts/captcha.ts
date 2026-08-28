// Proteção anti-bot dos formulários com Cloudflare Turnstile (widget visível).
//
// Desenho:
// - A chave pública vem de PUBLIC_TURNSTILE_SITE_KEY. Sem chave configurada,
//   nada é carregado e o formulário funciona normalmente, sem captcha — o
//   servidor do mailer também é fail-open nesse caso.
// - O widget é renderizado dentro do <CaptchaSlot />, que fica logo acima do
//   botão de envio. O slot já reserva a altura no HTML, então o widget não
//   causa deslocamento de layout ao aparecer.
// - Enquanto a verificação não é resolvida, o botão de envio fica desabilitado
//   e uma dica para leitores de tela explica o motivo.
// - Se o Turnstile falhar (indisponibilidade, domínio não autorizado), o botão
//   é liberado: o visitante nunca fica preso num formulário que não envia.
//   Quem decide aceitar ou recusar o envio é o servidor.
// - O token é de uso único: depois de cada envio o widget é resetado.

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: Record<string, unknown>) => string;
      reset: (widgetId: string) => void;
    };
  }
}

const configuredKey = import.meta.env.PUBLIC_TURNSTILE_SITE_KEY;
const SITE_KEY =
  typeof configuredKey === "string" && configuredKey.trim()
    ? configuredKey.trim()
    : "";

const SCRIPT_SRC =
  "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

const DICA =
  "Conclua a verificação de segurança acima do botão para habilitar o envio.";

let scriptPromise: Promise<void> | null = null;

function carregarScript(): Promise<void> {
  if (window.turnstile) return Promise.resolve();
  if (scriptPromise) return scriptPromise;
  scriptPromise = new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = SCRIPT_SRC;
    s.async = true;
    s.defer = true;
    s.onload = () => resolve();
    s.onerror = () => {
      scriptPromise = null;
      reject(new Error("turnstile script"));
    };
    document.head.appendChild(s);
  });
  return scriptPromise;
}

interface Estado {
  widgetId: string;
  token: string | null;
  botao: HTMLButtonElement | null;
  dica: HTMLElement | null;
}

const estados = new WeakMap<HTMLFormElement, Estado>();

function bloquear(estado: Estado) {
  if (!estado.botao) return;
  estado.botao.disabled = true;
  if (estado.dica) estado.botao.setAttribute("aria-describedby", estado.dica.id);
}

function liberar(estado: Estado) {
  if (!estado.botao) return;
  // Envio em andamento: quem manda no botão é o botao-envio, não o captcha.
  if (estado.botao.dataset.enviando === "1") return;
  estado.botao.disabled = false;
  estado.botao.removeAttribute("aria-describedby");
}

// Prepara o captcha de um formulário: renderiza o widget no slot e mantém o
// botão de envio desabilitado até a verificação ser concluída.
export function setupCaptcha(form: HTMLFormElement) {
  if (!SITE_KEY) return;

  const slot = form.querySelector<HTMLElement>("[data-captcha-slot]");
  if (!slot) return;

  const botao = form.querySelector<HTMLButtonElement>('button[type="submit"]');

  // Dica lida por leitores de tela, explicando por que o botão está travado.
  const dica = document.createElement("span");
  dica.className = "sr-only";
  dica.id = `captcha-dica-${Math.random().toString(36).slice(2, 8)}`;
  dica.textContent = DICA;
  form.appendChild(dica);

  const estado: Estado = { widgetId: "", token: null, botao, dica };
  estados.set(form, estado);
  bloquear(estado);

  carregarScript()
    .then(() => {
      if (!window.turnstile) {
        liberar(estado);
        return;
      }
      estado.widgetId = window.turnstile.render(slot, {
        sitekey: SITE_KEY,
        theme: "light",
        // O token vai no payload por getCaptchaToken(); sem isto o Turnstile
        // injetaria um input escondido e o campo iria duplicado no envio.
        "response-field": false,
        action: form.dataset.captchaAcao || "formulario",
        callback: (token: string) => {
          estado.token = token;
          liberar(estado);
        },
        "expired-callback": () => {
          estado.token = null;
          bloquear(estado);
        },
        // Falha do serviço não pode impedir o envio: libera e deixa o
        // servidor decidir (ele responde com uma mensagem clara se recusar).
        "error-callback": () => {
          estado.token = null;
          liberar(estado);
        },
        "timeout-callback": () => {
          estado.token = null;
          liberar(estado);
        },
      });
    })
    .catch(() => liberar(estado));
}

// Token atual do formulário (null quando não há captcha ou ele não resolveu).
export function getCaptchaToken(form: HTMLFormElement): string | null {
  return estados.get(form)?.token ?? null;
}

// Descarta o token usado e pede um novo — tokens do Turnstile são de uso único.
export function resetCaptcha(form: HTMLFormElement) {
  const estado = estados.get(form);
  if (!estado || !estado.widgetId || !window.turnstile) return;
  estado.token = null;
  bloquear(estado);
  window.turnstile.reset(estado.widgetId);
}
