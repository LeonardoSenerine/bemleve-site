"use client";

import { motion } from "framer-motion";
import { SprigIcon, SnowflakeIcon, HeartLineIcon, Squiggle } from "../ui/Icons";
import veraImage2 from "../../public/images/VeraCozinha.jpeg";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay },
  },
});

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

export default function AboutVera() {
  return (
    <section
      id="historia"
      className="section-pad relative overflow-hidden"
      style={{ background: "#F1E9D9" }}
    >
      <div className="container-site relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Foto — esquerda */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp(0)}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto" style={{ maxWidth: "420px" }}>
              {/* Sombra-moldura editorial */}
              <div
                aria-hidden
                className="absolute"
                style={{
                  inset: 0,
                  transform: "translate(-12px, 12px)",
                  border: "1px solid rgba(92,58,31,0.3)",
                  borderRadius: "2px",
                }}
              />
              <div
                className="relative overflow-hidden"
                style={{
                  borderRadius: "2px",
                  boxShadow:
                    "0 24px 48px -16px rgba(36,17,8,0.22), 0 12px 24px -16px rgba(36,17,8,0.12)",
                }}
              >
                <img
                  src={veraImage2.src}
                  alt="Vera preparando refeições na cozinha"
                  style={{
                    display: "block",
                    width: "100%",
                    height: "auto",
                    aspectRatio: "4 / 5",
                    objectFit: "cover",
                  }}
                />
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
                <span>A Vera, na cozinha onde tudo começou.</span>
              </div>
            </div>
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

            {/* Valores — agora com ícones próprios */}
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

            {/* Assinatura */}
          
          </div>
        </div>
      </div>
    </section>
  );
}
