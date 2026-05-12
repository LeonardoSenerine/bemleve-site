"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = (delay: number) => ({
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE, delay },
  },
});

const fadeIn = (delay: number) => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.55, ease: EASE, delay } },
});

const fadeLeft = (delay: number) => ({
  hidden: { opacity: 0, x: 48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: EASE, delay },
  },
});
import logo from "../../public/images/VeraImage.jpeg";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const blobY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);

  return (
    <section
      ref={heroRef}
      id="inicio"
      className="relative flex min-h-[100dvh] items-center overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #FFFAF5 0%, #F5F0E8 100%)",
      }}
    >
      <div className="container-site relative z-10 w-full py-28 lg:py-0">
        <div className="flex flex-col items-center gap-14 lg:flex-row lg:gap-16">
          {/* ─── Coluna esquerda ─── */}
          <div className="flex flex-col gap-7 lg:w-[56%]">
            {/* Label */}
            <motion.div
              variants={fadeUp(0.1)}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-3"
            >
              <span
                className="h-0.5 w-8 rounded-full"
                style={{ backgroundColor: "#eb6433" }}
              />
              <span
                style={{
                  fontFamily: "var(--font-ui)",
                  fontSize: "0.72rem",
                  letterSpacing: "0.16em",
                  color: "#eb6433",
                  fontWeight: 700,
                  textTransform: "uppercase",
                }}
              >
                Itatiba · SP — Marmitas Fit Congeladas
              </span>
            </motion.div>

            {/* Título */}
            <motion.h1
              initial="hidden"
              animate="visible"
              style={{ lineHeight: 1.0 }}
            >
              <motion.span
                variants={fadeUp(0.18)}
                className="block"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(3.2rem, 7vw, 5.8rem)",
                  fontWeight: 900,
                  color: "#2C1A0E",
                  letterSpacing: "-0.02em",
                }}
              >
                Alimentação
              </motion.span>
              <motion.span
                variants={fadeUp(0.3)}
                className="block"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(3.2rem, 7vw, 5.8rem)",
                  fontWeight: 900,
                  color: "#eb6433",
                  letterSpacing: "-0.02em",
                }}
              >
                que abraça.
              </motion.span>
            </motion.h1>

            {/* Subtítulo */}
            <motion.p
              variants={fadeIn(0.44)}
              initial="hidden"
              animate="visible"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.15rem",
                fontWeight: 400,
                lineHeight: 1.7,
                color: "#6B3F1F",
                maxWidth: "36rem",
              }}
            >
              Marmitas fit congeladas feitas com carinho — para quem quer comer
              bem sem abrir mão da praticidade.
            </motion.p>

            {/* Botões */}
            <motion.div
              variants={fadeIn(0.56)}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, backgroundColor: "#f94617" }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2.5 rounded-full px-8 py-4 transition-colors"
                style={{
                  backgroundColor: "#eb6433",
                  color: "#fff",
                  fontFamily: "var(--font-ui)",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  letterSpacing: "0.02em",
                  boxShadow: "0 6px 24px rgba(235,100,51,0.35)",
                }}
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Pedir pelo WhatsApp
              </motion.a>

              <motion.a
                href="#ebooks"
                whileHover={{
                  scale: 1.03,
                  backgroundColor: "rgba(157,205,90,0.12)",
                }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full border-2 px-8 py-4 transition-colors"
                style={{
                  borderColor: "#9dcd5a",
                  color: "#5a8c2a",
                  fontFamily: "var(--font-ui)",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  letterSpacing: "0.02em",
                }}
              >
                Ver Ebooks
              </motion.a>
            </motion.div>

            {/* Chips de estatísticas */}
            <motion.div
              variants={fadeIn(0.68)}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-3"
            >
              {[
                {
                  num: "+202K",
                  label: "seguidores",
                  color: "#eb6433",
                  bg: "rgba(235,100,51,0.1)",
                  bd: "rgba(235,100,51,0.3)",
                },
                {
                  num: "5 ★",
                  label: "avaliação média",
                  color: "#b07d08",
                  bg: "rgba(255,222,89,0.22)",
                  bd: "rgba(255,200,50,0.5)",
                },
                {
                  num: "Itatiba/SP",
                  label: "entregas na região",
                  color: "#5a8c2a",
                  bg: "rgba(157,205,90,0.15)",
                  bd: "rgba(157,205,90,0.4)",
                },
              ].map((s) => (
                <div
                  key={s.num}
                  className="flex items-center gap-2 rounded-full px-4 py-2"
                  style={{ background: s.bg, border: `1.5px solid ${s.bd}` }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-ui)",
                      fontSize: "0.9rem",
                      fontWeight: 900,
                      color: s.color,
                    }}
                  >
                    {s.num}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-ui)",
                      fontSize: "0.72rem",
                      fontWeight: 500,
                      color: "#9A8E80",
                    }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ─── Coluna direita ─── */}
          <motion.div
            variants={fadeLeft(0.28)}
            initial="hidden"
            animate="visible"
            className="relative flex justify-center lg:w-[44%]"
          >
            <motion.div style={{ y: blobY }} className="relative">
              {/* Blob de imagem */}
              <div
                className="relative flex items-center justify-center overflow-hidden"
                style={{
                  width: "380px",
                  height: "460px",
                  borderRadius: "100%",
                  background:
                    "linear-gradient(145deg, #fff5ee 0%, #fde8d8 50%, #fef9f5 100%)",
                  border: "2px solid rgba(235,100,51,0.15)",
                  boxShadow:
                    "0 24px 80px rgba(235,100,51,0.15), 0 4px 24px rgba(44,26,14,0.06)",
                }}
              >
                <div className="flex flex-col items-center gap-3 ">
                  <img src={logo.src} alt="" />
                </div>
              </div>

              {/* Anéis */}
              <div
                className="absolute pointer-events-none"
                style={{
                  bottom: "-16px",
                  right: "-16px",
                  width: "130px",
                  height: "130px",
                  borderRadius: "50%",
                  border: "2px solid rgba(235,100,51,0.2)",
                  zIndex: -1,
                }}
              />
              <div
                className="absolute pointer-events-none"
                style={{
                  top: "-24px",
                  left: "-24px",
                  width: "88px",
                  height: "88px",
                  borderRadius: "50%",
                  border: "1.5px solid rgba(157,205,90,0.3)",
                  zIndex: -1,
                }}
              />

              {/* Badge flutuante */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5, ease: EASE }}
                className="animate-float absolute -bottom-2 -left-8 rounded-2xl px-5 py-4 lg:-left-10"
                style={{
                  background: "#fff",
                  border: "1.5px solid rgba(235,100,51,0.2)",
                  boxShadow: "0 8px 32px rgba(44,26,14,0.1)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-ui)",
                    fontSize: "1.7rem",
                    fontWeight: 900,
                    color: "#eb6433",
                    lineHeight: 1,
                  }}
                >
                  +202K
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-ui)",
                    fontSize: "0.7rem",
                    fontWeight: 500,
                    color: "#9A8E80",
                    marginTop: "2px",
                  }}
                >
                  pessoas já conhecem a Bem Leve 💚
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span
          style={{
            fontFamily: "var(--font-ui)",
            fontSize: "0.62rem",
            fontWeight: 700,
            letterSpacing: "0.16em",
            color: "rgba(44,26,14,0.3)",
            textTransform: "uppercase",
          }}
        >
          Role para ver mais
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: "1.5px",
            height: "40px",
            background: "linear-gradient(to bottom, #eb6433, transparent)",
            borderRadius: "2px",
          }}
        />
      </motion.div>
    </section>
  );
}
