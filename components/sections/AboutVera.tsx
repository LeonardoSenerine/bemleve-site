"use client";

import { motion } from "framer-motion";
import veraImage2 from "../../public/images/VeraImage2.jpeg";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE, delay },
  },
});

const values = [
  { icon: "🥦", label: "Ingredientes frescos e naturais" },
  { icon: "❄️", label: "Congelado na hora, sabor preservado" },
  { icon: "💛", label: "Feito com amor de verdade" },
];

export default function AboutVera() {
  return (
    <section
      id="historia"
      className="section-pad relative overflow-hidden"
      style={{ background: "#EDE7D9" }}
    >
      <div className="container-site relative z-10">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-20">
          {/* Blob de imagem — esquerda */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp(0)}
            className="flex justify-center lg:w-[44%]"
          >
            <div className="relative">
              <div
                style={{
                  width: "auto",
                  height: "600px",
                  borderRadius: "10%",
                  background:
                    "linear-gradient(145deg, #fff5ee 0%, #fde8d8 60%, rgba(157,205,90,0.08) 100%)",
                  border: "1.5px solid rgba(235,100,51,0.15)",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <img
                  src={veraImage2.src}
                  alt="Vera preparando refeições"
                  style={{
                    width: "150%",
                    height: "150%",
                    objectFit: "contain",
                  }}
                />
              </div>

              {/* Badge de anos */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5, ease: EASE }}
                className="animate-float absolute -bottom-4 -right-4 flex flex-col items-center justify-center rounded-full"
                style={{
                  width: "90px",
                  height: "90px",
                  background: "linear-gradient(135deg, #eb6433, #f94617)",
                  boxShadow: "0 8px 32px rgba(235,100,51,0.4)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-ui)",
                    fontSize: "1.6rem",
                    fontWeight: 900,
                    color: "#fff",
                    lineHeight: 1,
                  }}
                >
                  +5
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-ui)",
                    fontSize: "0.58rem",
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.85)",
                    textAlign: "center",
                    lineHeight: 1.2,
                    marginTop: "2px",
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                  }}
                >
                  anos de
                  <br />
                  experiência
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Conteúdo — direita */}
          <div className="flex flex-col gap-5 lg:w-[56%]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp(0.1)}
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
                Nossa História
              </span>
            </motion.div>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp(0.18)}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.2rem, 4.5vw, 3.2rem)",
                fontWeight: 900,
                lineHeight: 1.05,
                color: "#2C1A0E",
                letterSpacing: "-0.02em",
              }}
            >
              Cozinha com alma,
              <br />
              <span style={{ color: "#eb6433" }}>comida de verdade.</span>
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp(0.26)}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.05rem",
                fontWeight: 400,
                lineHeight: 1.8,
                color: "#6B3F1F",
                maxWidth: "38rem",
              }}
            >
              Tudo começou com uma missão simples: ajudar pessoas a comerem bem
              sem abrir mão do sabor ou da praticidade. A Vera Senerine
              transformou sua paixão pela culinária fit em um negócio que hoje
              alcança mais de
              <strong style={{ color: "#eb6433", fontWeight: 700 }}>
                {" "}
                202 mil pessoas
              </strong>{" "}
              no Instagram e leva marmitas nutritivas para toda a região de
              Itatiba/SP.
            </motion.p>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp(0.33)}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.05rem",
                fontWeight: 400,
                lineHeight: 1.8,
                color: "#6B3F1F",
                maxWidth: "38rem",
              }}
            >
              Cada marmita é preparada com ingredientes frescos, congelada no
              pico do sabor e entregue pronta para você. Sem conservantes, sem
              enrolação.
            </motion.p>

            {/* Valores */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp(0.4)}
              className="flex flex-col gap-3 pt-2"
            >
              {values.map((v) => (
                <div key={v.label} className="flex items-center gap-3">
                  <div
                    className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-base"
                    style={{ background: "#fde8d8" }}
                  >
                    {v.icon}
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-ui)",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      color: "#2C1A0E",
                    }}
                  >
                    {v.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Assinatura */}
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp(0.48)}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.3rem",
                fontWeight: 700,
                color: "#eb6433",
                borderTop: "1px solid rgba(235,100,51,0.2)",
                paddingTop: "1rem",
                marginTop: "0.25rem",
              }}
            >
              — Vera Senerine
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
