/**
 * Rolagem suave editorial — mais lenta e fluida que o smooth nativo do navegador.
 * Usa o mesmo easing do resto do site (cubic-bezier 0.22, 1, 0.36, 1).
 */

const HEADER_OFFSET = 100; // compensar o header fixo

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Easing equivalente ao cubic-bezier(0.22, 1, 0.36, 1) — strong easeOut. */
function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4);
}

/** Roda até a posição Y indicada, com duração e easing controlados. */
export function smoothScrollTo(targetY: number, duration = 1100): void {
  if (typeof window === "undefined") return;

  // Respeita preferência do sistema do usuário
  if (prefersReducedMotion()) {
    window.scrollTo(0, targetY);
    return;
  }

  const startY = window.scrollY;
  const distance = targetY - startY;
  if (Math.abs(distance) < 2) return;

  const startTime = performance.now();

  function step(now: number) {
    const elapsed = now - startTime;
    const t = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + distance * easeOutQuart(t));
    if (t < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

/**
 * Resolve um href de âncora ("#historia", "#inicio") e rola até o destino,
 * já compensando a altura do header fixo.
 */
export function smoothScrollToAnchor(href: string): void {
  if (typeof window === "undefined") return;

  if (href === "#" || href === "#inicio" || href === "#top") {
    smoothScrollTo(0);
    return;
  }

  const id = href.replace(/^#/, "");
  const el = document.getElementById(id);
  if (!el) return;

  const targetY =
    el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  smoothScrollTo(Math.max(0, targetY));
}
