// Estado de "enviando" do botão de submit, compartilhado pelos formulários.
//
// Em vez de escrever "Enviando…" numa mensagem separada, o próprio botão
// comunica o estado: troca o texto, desabilita (evita envio duplicado) e ganha
// um pulso suave — a animação está em global.css, em `button[data-enviando]`,
// e é desligada para quem pede prefers-reduced-motion.

const textosOriginais = new WeakMap<HTMLButtonElement, string>();

export function iniciarEnvio(botao: HTMLButtonElement | null) {
  if (!botao) return;
  if (!textosOriginais.has(botao)) {
    textosOriginais.set(botao, botao.textContent ?? "");
  }
  botao.disabled = true;
  botao.dataset.enviando = "1";
  botao.textContent = "Enviando…";
}

export function terminarEnvio(botao: HTMLButtonElement | null) {
  if (!botao) return;
  const original = textosOriginais.get(botao);
  if (original !== undefined) botao.textContent = original;
  delete botao.dataset.enviando;
  botao.disabled = false;
}
