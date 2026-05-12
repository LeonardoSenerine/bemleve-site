"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "História", href: "#historia" },
  { label: "Princípios", href: "#produtos" },
  { label: "Cadernos", href: "#ebooks" },
  { label: "Contato", href: "#footer" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        className="fixed left-0 top-0 z-50 w-full"
        animate={{
          backgroundColor: scrolled
            ? "rgba(251,246,238,0.96)"
            : "rgba(251,246,238,1)",
          boxShadow: scrolled
            ? "0 1px 0 rgba(196,72,32,0.12), 0 6px 24px rgba(36,17,8,0.06)"
            : "0 1px 0 transparent",
        }}
        transition={{ duration: 0.3 }}
        style={{ backdropFilter: scrolled ? "blur(8px)" : "none" }}
      >
        <div className="container-site flex items-center justify-between py-2">
          {/* Logo */}
          <a href="#inicio" className="flex items-center">
            <Image
              src="/images/Logo.png"
              alt="Bem Leve Marmita Fit"
              width={84}
              height={84}
              priority
              style={{ objectFit: "contain" }}
            />
          </a>

          {/* Nav desktop */}
          <nav className="hidden items-center gap-9 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "var(--font-ui)",
                  fontSize: "0.92rem",
                  fontWeight: 500,
                  color: "#3D2817",
                  transition: "color 0.2s",
                  letterSpacing: "0.01em",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#C44820";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#3D2817";
                }}
              >
                {link.label}
              </a>
            ))}

            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-6 py-2.5 transition-all"
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: "0.88rem",
                fontWeight: 600,
                backgroundColor: "#241108",
                color: "#FBF6EE",
                boxShadow: "0 4px 14px rgba(36,17,8,0.18)",
                letterSpacing: "0.01em",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#3D2817";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#241108";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Pedir agora
            </a>
          </nav>

          {/* Hamburger mobile */}
          <button
            className="flex flex-col gap-1.5 p-2 md:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Abrir menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block h-px w-6 rounded-full"
                style={{ backgroundColor: "#241108", height: "2px" }}
              />
            ))}
          </button>
        </div>
      </motion.header>

      {/* Drawer mobile */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 backdrop-blur-sm"
              style={{ backgroundColor: "rgba(36,17,8,0.35)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              className="fixed right-0 top-0 z-50 flex h-full w-72 flex-col gap-7 px-8 pt-20"
              style={{
                backgroundColor: "#FBF6EE",
                borderLeft: "1px solid rgba(196,72,32,0.18)",
              }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <button
                className="absolute right-6 top-5"
                style={{ color: "#241108", fontSize: "1.2rem" }}
                onClick={() => setMobileOpen(false)}
                aria-label="Fechar menu"
              >
                ✕
              </button>

              <a href="#inicio" onClick={() => setMobileOpen(false)}>
                <Image
                  src="/images/Logo.png"
                  alt="Bem Leve"
                  width={96}
                  height={48}
                  style={{ objectFit: "contain" }}
                />
              </a>

              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.25rem",
                    fontWeight: 500,
                    color: "#241108",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#C44820";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#241108";
                  }}
                >
                  {link.label}
                </a>
              ))}

              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto mb-8 inline-flex items-center justify-center rounded-full py-3"
                style={{
                  backgroundColor: "#241108",
                  color: "#FBF6EE",
                  fontFamily: "var(--font-ui)",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                }}
              >
                Pedir pelo WhatsApp
              </a>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
