"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { SprigIcon, SnowflakeIcon, HeartLineIcon, Squiggle } from "../ui/Icons";
import cozinha1 from "../../public/images/VeraCozinha.jpeg";
import cozinha2 from "../../public/images/VeraCozinha2.jpeg";
import cozinha3 from "../../public/images/VeraCozinha3.jpeg";
import cozinha4 from "../../public/images/VeraCozinha4.jpeg";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay },
  },
});

const photos = [
  { src: cozinha1.src, alt: "A Vera na cozinha — onde tudo começou" },
  { src: cozinha2.src, alt: "Detalhe da preparação de uma marmita" },
  { src: cozinha3.src, alt: "Tempero, técnica e cuidado" },
  { src: cozinha4.src, alt: "Marmita pronta, feita à mão" },
];

const values = [
  {
    Icon: SprigIcon,
    label: "Ingredientes frescos e saudáveis",
    text: "A gente escolhe cada fornecedor a dedo, e só usa o que a gente comeria na nossa casa.",
  },
  {
    Icon: SnowflakeIcon,
    label: "Congelado no ponto certo",
    text: "Embalado quando ainda está quente da panela — o sabor não escapa.",
  },
  {
    Icon: HeartLineIcon,
    label: "Feito por uma cozinheira",
    text: "Todos os nossos preparos são feitos à mão, com cuidado e atenção, por uma mulher que ama cozinhar.",
  },
];

function PhotoCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % photos.length);
    }, 5000);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <div
      className="relative mx-auto"
      style={{ maxWidth: "420px" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Sombra-moldura editorial */}
      <div
        aria-hidden
        className="absolute"
        style={{
          inset: 0,
          transform: "translate(-12px, 12px)",
          border: "1px solid rgba(92,58,31,0.3)",
          borderRadius: "2px",
          pointerEvents: "none",
        }}
      />

      {/* Stage da foto com crossfade */}
      <div
        className="relative overflow-hidden"
        style={{
          borderRadius: "2px",
          aspectRatio: "4 / 5",
          background: "#F1E9D9",
          boxShadow:
            "0 24px 48px -16px rgba(36,17,8,0.22), 0 12px 24px -16px rgba(36,17,8,0.12)",
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={photos[index].src}
            src={photos[index].src}
            alt={photos[index].alt}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4, ease: EASE }}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </AnimatePresence>

        {/* Setas — discretas, só aparecem no hover */}
        <button
          type="button"
          aria-label="Foto anterior"
          onClick={() =>
            setIndex((i) => (i - 1 + photos.length) % photos.length)
          }
          className="absolute left-3 top-1/2 -translate-y-1/2 opacity-0 transition-opacity hover:opacity-100 group-hover:opacity-100"
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: "rgba(36,17,8,0.45)",
            color: "#FBF6EE",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(6px)",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Próxima foto"
          onClick={() => setIndex((i) => (i + 1) % photos.length)}
          className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 transition-opacity hover:opacity-100 group-hover:opacity-100"
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: "rgba(36,17,8,0.45)",
            color: "#FBF6EE",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(6px)",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>

        {/* Contador discreto no canto */}
        <div
          className="absolute bottom-3 right-3 rounded-full px-2.5 py-1"
          style={{
            background: "rgba(36,17,8,0.5)",
            color: "#FBF6EE",
            fontFamily: "var(--font-ui)",
            fontSize: "0.7rem",
            fontWeight: 500,
            letterSpacing: "0.04em",
            backdropFilter: "blur(6px)",
          }}
        >
          {String(index + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
        </div>
      </div>

      {/* Indicadores em pílula */}
      <div className="mt-4 flex justify-center gap-2">
        {photos.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Ir para foto ${i + 1}`}
            style={{
              height: 6,
              width: i === index ? 28 : 6,
              borderRadius: 999,
              background: i === index ? "#C44820" : "rgba(92,58,31,0.25)",
              border: "none",
              padding: 0,
              cursor: "pointer",
              transition: "all 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          />
        ))}
      </div>

      {/* Microcaption — como rodapé de foto de revista */}
      <div
        className="mt-3 flex items-center gap-2"
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "0.72rem",
          color: "#9A6B4A",
          letterSpacing: "0.04em",
        }}
      >
        <span style={{ fontWeight: 600, color: "#5C3A1F" }}>
          Itatiba, 2020 →
        </span>
        <span>Onde tudo começou.</span>
      </div>
    </div>
  );
}

export default function AboutVera() {
  return (
    <section
      id="historia"
      className="section-pad relative overflow-hidden"
      style={{ background: "#F1E9D9" }}
    >
      <div className="container-site relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Carrossel — esquerda */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp(0)}
            className="group lg:col-span-5"
          >
            <PhotoCarousel />
          </motion.div>

          {/* Texto — direita */}
          <div className="flex flex-col gap-7 lg:col-span-7">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp(0.05)}
              className="flex items-center gap-3"
              style={{ color: "#C44820" }}
            >
              <Squiggle width={42} stroke="#C44820" />
              <span
                style={{
                  fontFamily: "var(--font-ui)",
                  fontSize: "0.74rem",
                  letterSpacing: "0.18em",
                  fontWeight: 500,
                  textTransform: "uppercase",
                }}
              >
                A nossa história
              </span>
            </motion.div>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp(0.15)}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4.2vw, 3rem)",
                fontWeight: 600,
                lineHeight: 1.05,
                color: "#241108",
                letterSpacing: "-0.02em",
                maxWidth: "30rem",
              }}
            >
              Nós começamos
              <span style={{ fontStyle: "italic", fontWeight: 400 }}>
                {" "}
                em um apartamento de 40m²
              </span>
            </motion.h2>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp(0.25)}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.06rem",
                lineHeight: 1.75,
                color: "#5C3A1F",
                maxWidth: "34rem",
              }}
            >
              <p style={{ marginBottom: "1.1rem" }}>
                Em 2020, com a pandemia, tive que me reiventar. A cozinha era meu lugar favorito da casa, então comecei a fazer marmitas congeladas para vender. O que era um plano B virou o que eu amo fazer de verdade — cozinhar para outras pessoas.
              </p>
              <p style={{ marginBottom: "1.1rem" }}>
               Comecei em um apartamento de 40m², com uma panela só. Hoje, a gente tem uma cozinha maior, mas o cuidado e o amor continuam os mesmos. Cada marmita é feita à mão, com ingredientes frescos e muito carinho, pra chegar na casa de cada cliente com gostinho de comida caseira.
              </p>
              <p>
                A gente faz isso porque ama fazer. Não tem segredo — é só
                cuidado, ingrediente bom e o tempo que cada receita pede.
              </p>
            </motion.div>

            {/* Valores — com ícones próprios */}
            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp(0.35)}
              className="mt-2 flex flex-col"
              style={{ borderTop: "1px solid rgba(92,58,31,0.18)" }}
            >
              {values.map(({ Icon, label, text }) => (
                <li
                  key={label}
                  className="flex items-start gap-4 py-4"
                  style={{ borderBottom: "1px solid rgba(92,58,31,0.18)" }}
                >
                  <span
                    className="flex-shrink-0"
                    style={{ color: "#C44820", marginTop: "2px" }}
                  >
                    <Icon size={22} />
                  </span>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-ui)",
                        fontSize: "0.92rem",
                        fontWeight: 600,
                        color: "#241108",
                        marginBottom: "2px",
                      }}
                    >
                      {label}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.92rem",
                        lineHeight: 1.55,
                        color: "#7A553A",
                      }}
                    >
                      {text}
                    </p>
                  </div>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}
