"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Nossa História", href: "#historia" },
  { label: "Marmitas congeladas", href: "#produtos" },
  { label: "Ebooks", href: "#ebooks" },
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
            ? "rgba(255,255,255,0.97)"
            : "rgba(255,255,255,1)",
          boxShadow: scrolled
            ? "0 1px 0 rgba(235,100,51,0.15), 0 4px 24px rgba(44,26,14,0.08)"
            : "0 1px 0 rgba(235,100,51,0.1)",
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="container-site flex items-center justify-between ">
          {/* Logo */}
          <a href="#inicio" className="flex items-center">
            <Image
              src="/images/Logo.png"
              alt="Bem Leve Marmita Fit"
              width={90}
              height={90}
              priority
              style={{ objectFit: "contain" }}
            />
          </a>

          {/* Nav desktop */}
          <nav className="hidden items-center font-bold gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "var(--font-ui)",
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "#6B3F1F",
                  transition: "color 0.2s",
                  letterSpacing: "0.01em",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#eb6433";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#6B3F1F";
                }}
              >
                {link.label}
              </a>
            ))}

            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-6 py-2.5 font-medium transition-all"
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: "1rem",
                fontWeight: "700",
                backgroundColor: "#eb6433",
                color: "#fff",
                boxShadow: "0 2px 12px rgba(235,100,51,0.35)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#f94617";
                e.currentTarget.style.boxShadow =
                  "0 4px 20px rgba(249,70,23,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#eb6433";
                e.currentTarget.style.boxShadow =
                  "0 2px 12px rgba(235,100,51,0.35)";
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
                className="block h-0.5 w-6 rounded-full"
                style={{ backgroundColor: "#eb6433" }}
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
              style={{ backgroundColor: "rgba(44,26,14,0.25)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              className="fixed right-0 top-0 z-50 flex h-full w-72 flex-col gap-8 px-8 pt-20"
              style={{
                backgroundColor: "#fff",
                borderLeft: "2px solid rgba(235,100,51,0.15)",
              }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <button
                className="absolute right-6 top-5"
                style={{ color: "#eb6433", fontSize: "1.2rem" }}
                onClick={() => setMobileOpen(false)}
                aria-label="Fechar menu"
              >
                ✕
              </button>

              <a href="#inicio" onClick={() => setMobileOpen(false)}>
                <Image
                  src="/images/Logo.png"
                  alt="Bem Leve"
                  width={100}
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
                    fontSize: "1.15rem",
                    color: "#2C1A0E",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#eb6433";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#2C1A0E";
                  }}
                >
                  {link.label}
                </a>
              ))}

              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full py-3 font-medium"
                style={{
                  backgroundColor: "#eb6433",
                  color: "#fff",
                  fontFamily: "var(--font-ui)",
                  fontSize: "0.9rem",
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
