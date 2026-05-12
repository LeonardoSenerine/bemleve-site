'use client'

import { motion } from 'framer-motion'
import { InstagramIcon, Squiggle, StarIcon } from '../ui/Icons'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

const testimonials = [
  {
    text:
      'Comprei a primeira semana só pra testar. Faz quase um ano que não faço mais o jantar. A de estrogonofe de frango com arroz integral é a que minha filha pede.',
    name: 'Mariana Souza',
    role: 'Cliente desde 2024',
    place: 'Itatiba, SP',
    initials: 'MS',
  },
  {
    text:
      'Trabalho na obra e levo marmita todo dia. A diferença é que dá pra esquentar no microondas mesmo, no café da padaria. Não fica feio, não fica seco. É comida, comida.',
    name: 'Roberto Carneiro',
    role: 'Cliente há 2 anos',
    place: 'Bragança Paulista, SP',
    initials: 'RC',
  },
  {
    text:
      'Comprei o ebook esperando umas dez receitas e umas dicas. Acabei montando um cardápio mensal pra família inteira. Vale dez vezes o que custa.',
    name: 'Fernanda Lima',
    role: 'Comprou o ebook',
    place: 'Jundiaí, SP',
    initials: 'FL',
  },
]

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE, delay } },
})

export default function Testimonials() {
  return (
    <section
      className="section-pad relative overflow-hidden"
      style={{ background: '#FBF6EE' }}
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
        {/* Cabeçalho */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-14 flex flex-col items-start gap-5 lg:max-w-2xl"
        >
          <motion.div
            variants={fadeUp(0)}
            className="flex items-center gap-3"
            style={{ color: '#C44820' }}
          >
            <Squiggle width={42} stroke="#C44820" />
            <span style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '0.74rem',
              letterSpacing: '0.18em',
              color: '#C44820',
              fontWeight: 500,
              textTransform: 'uppercase',
            }}>
              Quem já provou
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp(0.1)}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 2.85rem)',
              fontWeight: 600,
              lineHeight: 1.05,
              color: '#241108',
              letterSpacing: '-0.02em',
            }}
          >
            Comida que volta a ser
            <span style={{ fontStyle: 'italic', fontWeight: 400 }}>
              {' '}o assunto da casa.
            </span>
          </motion.h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp(i * 0.1)}
              className="flex flex-col gap-6 p-7"
              style={{
                background: '#FFFCF6',
                border: '1px solid rgba(92,58,31,0.14)',
                borderRadius: '4px',
              }}
            >
              {/* Aspas decorativas */}
              <div
                aria-hidden
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '3rem',
                  fontWeight: 600,
                  color: '#C44820',
                  lineHeight: 0.5,
                  height: '1rem',
                }}
              >
                “
              </div>

              {/* Texto */}
              <blockquote style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                lineHeight: 1.7,
                color: '#3D2817',
                flex: 1,
              }}>
                {t.text}
              </blockquote>

              {/* Autor */}
              <figcaption
                className="flex items-center gap-3 pt-5"
                style={{ borderTop: '1px solid rgba(92,58,31,0.14)' }}
              >
                <div
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center"
                  style={{
                    background: '#F1E0CF',
                    color: '#C44820',
                    borderRadius: '50%',
                    fontFamily: 'var(--font-ui)',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                  }}
                >
                  {t.initials}
                </div>
                <div className="flex flex-col">
                  <span style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: '0.86rem',
                    fontWeight: 600,
                    color: '#241108',
                  }}>
                    {t.name}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: '0.72rem',
                    color: '#9A6B4A',
                  }}>
                    {t.role} · {t.place}
                  </span>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* Linha-base com Instagram, sem stat-flex de "+500 avaliações" */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
          className="mt-12 flex flex-col items-center gap-4 text-center"
        >
          <div className="flex items-center gap-1" style={{ color: '#C44820' }}>
            {[1,2,3,4,5].map(s => <StarIcon key={s} size={14} stroke="#C44820" />)}
          </div>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontStyle: 'italic',
            fontSize: '1rem',
            color: '#5C3A1F',
            maxWidth: '28rem',
          }}>
            Mais 202 mil pessoas acompanham o dia a dia da Vera por lá.
          </p>
          <motion.a
            href="https://instagram.com/bemleve_marmitafit"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            className="inline-flex items-center gap-2.5 rounded-full px-7 py-3"
            style={{
              border: '1px solid rgba(36,17,8,0.4)',
              color: '#241108',
              fontFamily: 'var(--font-ui)',
              fontSize: '0.86rem',
              fontWeight: 600,
              letterSpacing: '0.01em',
            }}
          >
            <InstagramIcon size={15} />
            @bemleve_marmitafit
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
