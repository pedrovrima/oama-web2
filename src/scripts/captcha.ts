// Proteção anti-bot dos formulários com Cloudflare Turnstile (modo invisível).
//
// Desenho:
// - A chave pública vem de PUBLIC_TURNSTILE_SITE_KEY. Sem chave configurada,
//   getCaptchaToken() resolve para null e o formulário segue funcionando
//   normalmente (o servidor também é fail-open sem a chave secreta).
// - O script oficial da Cloudflare só é carregado de forma preguiçosa, na
//   primeira interação com um formulário protegido — não pesa o carregamento
//   das páginas nem dispara requisições de terceiro para quem não usa o form.
// - O widget é renderizado com appearance "interaction-only": não ocupa espaço
//   nem aparece, salvo quando a Cloudflare decide desafiar o visitante
//   (sem layout shift no fluxo normal).
// - O token é de uso único; após cada envio o widget é resetado.

declare global {
  interface Window {
    turnstile?: {
      render: (
        el: HTMLElement,
        opts: Record<string, unknown>,
      ) => string;
      reset: (widgetId: string) => void;
      execute: (widgetId: string) => void;
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

let scriptPromise: Promise<void> | null = null;

function loadScript(): Promise<void> {
  if (window.turnstile) return Promise.resolve();
  if (scriptPromise) return scriptPromise;
  scriptPromise = new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = SCRIPT_SRC;
    s.async = true;
    s.defer = true;
    s.onload = () => resolve();
    s.onerror = () => {
      scriptPromise = null; // permite nova tentativa num próximo envio
      reject(new Error("turnstile script"));
    };
    document.head.appendChild(s);
  });
  return scriptPromise;
}

interface WidgetState {
  widgetId: string;
  pending: Array<(token: string | null) => void>;
}

const widgets = new WeakMap<HTMLFormElement, WidgetState>();

function ensureWidget(form: HTMLFormElement): WidgetState | null {
  const existing = widgets.get(form);
  if (existing) return existing;
  if (!window.turnstile) return null;

  // Container criado via JS: nenhum markup extra nos .astro e zero espaço
  // reservado (o widget só aparece se a Cloudflare desafiar o visitante).
  const slot = document.createElement("div");
  slot.dataset.captchaSlot = "";
  const button = form.querySelector('button[type="submit"]');
  (button?.parentElement ?? form).insertAdjacentElement("beforebegin", slot);

  const state: WidgetState = { widgetId: "", pending: [] };
  state.widgetId = window.turnstile.render(slot, {
    sitekey: SITE_KEY,
    execution: "execute", // só roda quando chamamos turnstile.execute()
    appearance: "interaction-only",
    callback: (token: string) => {
      const waiters = state.pending.splice(0);
      waiters.forEach((fn) => fn(token));
    },
    "error-callback": () => {
      const waiters = state.pending.splice(0);
      waiters.forEach((fn) => fn(null));
    },
    "timeout-callback": () => {
      const waiters = state.pending.splice(0);
      waiters.forEach((fn) => fn(null));
    },
  });
  widgets.set(form, state);
  return state;
}

// Pré-carrega o script na primeira interação com o formulário, para o envio
// não pagar a latência do carregamento do terceiro.
export function warmCaptcha(form: HTMLFormElement) {
  if (!SITE_KEY) return;
  const warm = () => {
    loadScript().catch(() => {});
  };
  form.addEventListener("focusin", warm, { once: true });
  form.addEventListener("pointerdown", warm, { once: true });
}

// Obtém um token do Turnstile para enviar junto do formulário.
// Resolve para null quando não há chave configurada ou quando o serviço
// falhou — nesses casos o envio segue sem token (o servidor decide).
export async function getCaptchaToken(
  form: HTMLFormElement,
): Promise<string | null> {
  if (!SITE_KEY) return null;
  try {
    await loadScript();
  } catch {
    return null;
  }
  const state = ensureWidget(form);
  if (!state || !window.turnstile) return null;

  return new Promise<string | null>((resolve) => {
    // Não deixa o formulário travado para sempre se o desafio não resolver.
    const timer = setTimeout(() => resolve(null), 30000);
    state.pending.push((token) => {
      clearTimeout(timer);
      resolve(token);
    });
    if (state.pending.length === 1) {
      window.turnstile!.reset(state.widgetId); // token é de uso único
      window.turnstile!.execute(state.widgetId);
    }
  });
}
