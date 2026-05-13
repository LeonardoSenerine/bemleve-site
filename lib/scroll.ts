const HEADER_OFFSET = 100;

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function smoothScrollToAnchor(href: string): void {
  if (typeof window === "undefined") return;

  const behavior: ScrollBehavior = prefersReducedMotion() ? "instant" : "smooth";

  if (href === "#" || href === "#inicio" || href === "#top") {
    window.scrollTo({ top: 0, behavior });
    return;
  }

  const id = href.replace(/^#/, "");
  const el = document.getElementById(id);
  if (!el) return;

  const targetY = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({ top: Math.max(0, targetY), behavior });
}
