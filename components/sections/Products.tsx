"use client";

import { motion } from "framer-motion";
import {
  SprigIcon,
  ClockIcon,
  HeartLineIcon,
  WhatsappIcon,
  Squiggle,
} from "../ui/Icons";
import { WHATSAPP_URL } from "@/lib/whatsapp";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const principles = [
  {
    n: "01",
    Icon: SprigIcon,
    label: "Aqui na cozinha",
    title: "Selecionamos ingredientes frescos e de alta qualidade",
    body: "Toda semana, escolhemos cuidadosamente cada ingrediente utilizado nas nossas marmitas. Priorizamos produtos frescos, saborosos e de qualidade, garantindo refeições mais saudáveis, bem preparadas e com aquele gostinho de comida feita na hora.",
  },
  {
    n: "02",
    Icon: ClockIcon,
    label: "Como chega à sua mesa",
    title: "Sete minutos entre o freezer e a fome.",
    body: "A praticidade que você precisa, sem abrir mão da qualidade. Nossas marmitas foram pensadas para quem tem a rotina corrida, não gosta de cozinhar ou simplesmente quer ganhar tempo no dia a dia. É só tirar do congelador, aquecer e aproveitar uma refeição saborosa, equilibrada e pronta em minutos.",
  },
  {
    n: "03",
    Icon: HeartLineIcon,
    label: "Por que fazemos isso",
    title: "Marmita é cuidado — e cuidado a gente leva a sério.",
    body: "Alimentação não é dieta, é a base de como você se sente todos os dias. A gente acredita nisso, e por isso faz cada marmita como se fosse pra alguém da família. É o jeito da Bem Leve. Sempre foi.",
  },
];

export default function Products() {
  return (
    <section
      id="produtos"
      className="section-pad relative overflow-hidden"
      style={{ background: "#FBF6EE" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="container-site relative z-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="lg:col-span-5"
          >
            <div
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
                Três princípios
              </span>
            </div>

            <h2
              className="mt-6"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 2.85rem)",
                fontWeight: 600,
                lineHeight: 1.05,
                color: "#241108",
                letterSpacing: "-0.02em",
              }}
            >
              O que a gente leva
              <span style={{ fontStyle: "italic", fontWeight: 400 }}>
                {" "}
                a sério aqui dentro.
              </span>
            </h2>

            <p
              className="mt-6"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.05rem",
                lineHeight: 1.9,
                color: "#5C3A1F",
                maxWidth: "38rem",
              }}
            >
              Tudo começou com uma ideia simples: criar refeições que
              facilitassem a vida das pessoas sem abrir mão da qualidade. Desde
              a primeira marmita preparada, definimos princípios que nunca
              mudaram — comida feita com cuidado, ingredientes de verdade e
              praticidade que realmente ajuda na rotina.
            </p>

            <p
              className="mt-5"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.05rem",
                lineHeight: 1.9,
                color: "#5C3A1F",
                maxWidth: "38rem",
              }}
            >
              Aqui, a gente acredita que alimentação saudável não precisa ser
              complicada, sem gosto ou distante da realidade de quem trabalha,
              estuda e vive na correria. Cada marmita é pensada para entregar
              equilíbrio, sabor e conforto no dia a dia, sem exigir tempo na
              cozinha ou esforço depois de um dia cansativo.
            </p>

            <p
              className="mt-5"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.05rem",
                lineHeight: 1.9,
                color: "#5C3A1F",
                maxWidth: "38rem",
              }}
            >
              Mais do que vender marmitas, nosso compromisso é oferecer uma
              rotina mais leve. Por isso, escolhemos ingredientes frescos
              semanalmente, cuidamos de cada preparo com atenção e mantemos o
              foco naquilo que realmente importa: comida saborosa, prática e
              leve para ser consumida.
            </p>
          </motion.div>

          <div className="flex flex-col lg:col-span-7">
            {principles.map(({ n, Icon, label, title, body }, i) => (
              <motion.article
                key={n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.65, ease: EASE, delay: i * 0.08 }}
                className="grid grid-cols-12 gap-5 py-8"
                style={{
                  borderTop: i === 0 ? "1px solid rgba(92,58,31,0.2)" : "none",
                  borderBottom: "1px solid rgba(92,58,31,0.2)",
                }}
              >
                <div className="col-span-2">
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontStyle: "italic",
                      fontSize: "2.4rem",
                      fontWeight: 400,
                      color: "#C44820",
                      lineHeight: 1,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {n}
                  </span>
                </div>

                <div className="col-span-10 flex flex-col gap-3">
                  <div
                    className="flex items-center gap-2"
                    style={{ color: "#9A6B4A" }}
                  >
                    <Icon size={16} />
                    <span
                      style={{
                        fontFamily: "var(--font-ui)",
                        fontSize: "0.7rem",
                        letterSpacing: "0.14em",
                        fontWeight: 500,
                        textTransform: "uppercase",
                      }}
                    >
                      {label}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.4rem, 2.4vw, 1.7rem)",
                      fontWeight: 600,
                      lineHeight: 1.2,
                      color: "#241108",
                      letterSpacing: "-0.015em",
                    }}
                  >
                    {title}
                  </h3>

                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "1rem",
                      lineHeight: 1.7,
                      color: "#5C3A1F",
                    }}
                  >
                    {body}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mt-20 flex flex-col items-center gap-4 text-center"
        >
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "clamp(1.15rem, 2vw, 1.35rem)",
              fontWeight: 400,
              color: "#5C3A1F",
              maxWidth: "32rem",
              lineHeight: 1.5,
            }}
          >
            Fala com a gente no WhatsApp e monta seu kit do jeito que fizer
            sentido pra sua rotina. Tudo de forma simples, prática e sem
            burocracia.
          </p>

          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2.5 rounded-full px-8 py-3.5 transition-all"
            style={{
              backgroundColor: "#241108",
              color: "#FBF6EE",
              fontFamily: "var(--font-ui)",
              fontSize: "0.9rem",
              fontWeight: 600,
              boxShadow: "0 8px 24px rgba(36,17,8,0.18)",
            }}
          >
            <WhatsappIcon size={16} />
            "Quero montar meu kit semanal"
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
