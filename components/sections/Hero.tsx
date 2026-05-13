"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { WhatsappIcon, ArrowRightIcon, PinIcon } from "../ui/Icons";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import { smoothScrollToAnchor } from "@/lib/scroll";
import logo from "../../public/images/VeraImage.jpeg";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = (delay: number) => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay },
  },
});

const fadeIn = (delay: number) => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: EASE, delay } },
});

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  return (
    <section
      ref={heroRef}
      id="inicio"
      className="relative flex min-h-[100dvh] items-center overflow-hidden"
      style={{ backgroundColor: "#FBF6EE" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="container-site relative z-10 w-full py-28 lg:py-0">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col gap-8 lg:col-span-7 lg:pr-8">
            <motion.div
              variants={fadeUp(0.05)}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-2"
              style={{ color: "#9A6B4A" }}
            >
              <PinIcon size={14} />
              <span
                style={{
                  fontFamily: "var(--font-ui)",
                  fontSize: "0.78rem",
                  letterSpacing: "0.12em",
                  fontWeight: 500,
                  textTransform: "uppercase",
                }}
              >
                Itatiba, São Paulo
              </span>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(3rem, 6.5vw, 5.6rem)",
                fontWeight: 600,
                color: "#241108",
                letterSpacing: "-0.025em",
                lineHeight: 0.98,
              }}
            >
              <motion.span variants={fadeUp(0.15)} className="block">
                A gente cozinha
              </motion.span>
              <motion.span
                variants={fadeUp(0.28)}
                className="block"
                style={{
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "#C44820",
                }}
              >
                pra sua semana inteira.
              </motion.span>
            </motion.h1>

            <motion.p
              variants={fadeIn(0.42)}
              initial="hidden"
              animate="visible"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.18rem",
                fontWeight: 400,
                lineHeight: 1.65,
                color: "#5C3A1F",
                maxWidth: "34rem",
              }}
            >
              Aqui em Itatiba, a Vera faz marmita congelada na panela — uma a
              uma, com a mão dela e ingrediente fresco da feira. A gente faz
              porque ama fazer. Esse é o trato.
            </motion.p>

            <motion.div
              variants={fadeIn(0.55)}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 transition-all"
                style={{
                  backgroundColor: "#241108",
                  color: "#FBF6EE",
                  fontFamily: "var(--font-ui)",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  letterSpacing: "0.01em",
                  boxShadow: "0 8px 24px rgba(36,17,8,0.18)",
                }}
              >
                <WhatsappIcon size={16} />
                Pedir pelo WhatsApp
              </motion.a>

              <motion.a
                href="#ebooks"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollToAnchor("#ebooks");
                  if (history.pushState) history.pushState(null, "", "#ebooks");
                }}
                whileHover={{ x: 4 }}
                className="group inline-flex items-center gap-2 px-3 py-3.5"
                style={{
                  color: "#5C3A1F",
                  fontFamily: "var(--font-ui)",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  letterSpacing: "0.01em",
                  borderBottom: "1px solid rgba(196,72,32,0.4)",
                  paddingLeft: 0,
                  paddingRight: 4,
                  paddingBottom: 6,
                  cursor: "pointer",
                }}
              >
                Ver ebooks da Vera
                <ArrowRightIcon size={14} />
              </motion.a>
            </motion.div>

            <motion.div
              variants={fadeIn(0.7)}
              initial="hidden"
              animate="visible"
              className="mt-4 flex flex-wrap items-baseline gap-x-8 gap-y-3 pt-6"
              style={{ borderTop: "1px solid rgba(196,72,32,0.15)" }}
            >
              {[
                { num: "+2.000", label: "marmitas por mês" },
                { num: "5 anos", label: "de cozinha" },
                { num: "202k", label: "no Instagram" },
              ].map((s) => (
                <div key={s.label} className="flex items-baseline gap-2">
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.35rem",
                      fontWeight: 600,
                      color: "#241108",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {s.num}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-ui)",
                      fontSize: "0.78rem",
                      fontWeight: 400,
                      color: "#9A6B4A",
                    }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn(0.3)}
            initial="hidden"
            animate="visible"
            className="relative lg:col-span-5"
          >
            <motion.div style={{ y: photoY }} className="relative mx-auto">
              <div
                aria-hidden
                className="absolute"
                style={{
                  inset: 0,
                  transform: "translate(14px, 14px)",
                  border: "1px solid rgba(196,72,32,0.35)",
                  borderRadius: "4px",
                }}
              />
              <div
                className="relative overflow-hidden"
                style={{
                  borderRadius: "4px",
                  boxShadow:
                    "0 30px 60px -20px rgba(36,17,8,0.25), 0 18px 36px -18px rgba(36,17,8,0.15)",
                }}
              >
                <img
                  src={logo.src}
                  alt="Vera Senerine na cozinha da Bem Leve"
                  style={{
                    display: "block",
                    width: "100%",
                    height: "auto",
                    aspectRatio: "4 / 5",
                    objectFit: "cover",
                  }}
                />
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.85, duration: 0.6 }}
                className="absolute -left-4 top-6 hidden lg:block"
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                  fontFamily: "var(--font-ui)",
                  fontSize: "0.68rem",
                  fontWeight: 500,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#9A6B4A",
                }}
              >
                Vera Senerine — fundadora
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
