'use client'

import { motion } from 'framer-motion'
import { ArrowRightIcon, Squiggle } from '../ui/Icons'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

const ebooks = [
  {
    coverTitle: 'Marmitas\nFit em Casa',
    coverSubtitle: 'um caderno de cozinha',
    coverBg: '#F1E9D9',
    coverInk: '#241108',
    coverAccent: '#C44820',
    chapter: 'I',
    title: 'Marmitas Fit em Casa',
    pitch:
      'O método que a Vera usa toda semana para deixar sete dias de marmita prontos numa tarde — com cinquenta receitas, lista de compras e cronograma.',
    pages: '142 páginas',
    price: 'R$ 47',
    href: '#',
  },
  {
    coverTitle: 'Do zero\nà primeira\nmarmita',
    coverSubtitle: 'guia para empreender',
    coverBg: '#3D2817',
    coverInk: '#FBF6EE',
    coverAccent: '#E8A572',
    chapter: 'II',
    title: 'Do Zero à Primeira Marmita',
    pitch:
      'Como sair de não-ter-nada para o primeiro cliente fiel. O passo a passo real — preço, fornecedor, Instagram, WhatsApp — sem rodeio motivacional.',
    pages: '98 páginas',
    price: 'R$ 97',
    href: '#',
  },
]

export default function Ebooks() {
  return (
    <section
      id="ebooks"
      className="section-pad relative overflow-hidden"
      style={{ background: '#A04923' }}
    >
      {/* Textura sobre o fundo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="container-site relative z-10">
        {/* Cabeçalho */}
        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="lg:col-span-6"
          >
            <div
              className="flex items-center gap-3"
              style={{ color: 'rgba(251,246,238,0.7)' }}
            >
              <Squiggle width={42} stroke="rgba(251,246,238,0.7)" />
              <span
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '0.74rem',
                  letterSpacing: '0.18em',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                }}
              >
                Os cadernos da Vera
              </span>
            </div>

            <h2
              className="mt-6"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 600,
                lineHeight: 1.05,
                color: '#FBF6EE',
                letterSpacing: '-0.02em',
              }}
            >
              O que cabe num livro,
              <br />
              <span style={{ fontStyle: 'italic', fontWeight: 400 }}>
                cabe na sua cozinha.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            className="lg:col-span-6 lg:pt-14"
          >
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.05rem',
                lineHeight: 1.7,
                color: 'rgba(251,246,238,0.78)',
                maxWidth: '28rem',
              }}
            >
              Dois ebooks escritos pela Vera depois de cinco anos cozinhando
              para gente real. Um sobre fazer marmita em casa. Outro sobre
              transformar isso num negócio.
            </p>
          </motion.div>
        </div>

        {/* Cards de Ebooks */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
          {ebooks.map((ebook, i) => (
            <motion.article
              key={ebook.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.1 }}
              className="group flex flex-col gap-7"
            >
              {/* Capa do ebook — peça tipográfica real */}
              <a
                href={ebook.href}
                className="block"
                style={{ perspective: '1200px' }}
              >
                <motion.div
                  whileHover={{ rotateY: -6, rotateX: 2, y: -6 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="relative mx-auto"
                  style={{
                    width: '100%',
                    maxWidth: '320px',
                    aspectRatio: '3 / 4',
                    background: ebook.coverBg,
                    color: ebook.coverInk,
                    boxShadow:
                      '0 30px 60px -20px rgba(0,0,0,0.45), 0 18px 36px -18px rgba(0,0,0,0.25)',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Lombada — faixa lateral esquerda */}
                  <div
                    aria-hidden
                    className="absolute left-0 top-0 bottom-0"
                    style={{
                      width: '14px',
                      background: 'rgba(0,0,0,0.18)',
                      boxShadow: 'inset -2px 0 6px rgba(0,0,0,0.25)',
                    }}
                  />

                  {/* Filete decorativo */}
                  <div
                    aria-hidden
                    className="absolute"
                    style={{
                      top: '20px',
                      bottom: '20px',
                      left: '28px',
                      right: '20px',
                      border: `1px solid ${ebook.coverAccent}55`,
                    }}
                  />

                  {/* Conteúdo da capa */}
                  <div className="absolute inset-0 flex flex-col justify-between px-9 py-10 pl-12">
                    <div
                      style={{
                        fontFamily: 'var(--font-ui)',
                        fontSize: '0.65rem',
                        letterSpacing: '0.22em',
                        fontWeight: 500,
                        textTransform: 'uppercase',
                        color: ebook.coverAccent,
                      }}
                    >
                      Bem Leve · {ebook.chapter}
                    </div>

                    <div>
                      <p
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                          fontWeight: 600,
                          lineHeight: 1.05,
                          letterSpacing: '-0.02em',
                          whiteSpace: 'pre-line',
                        }}
                      >
                        {ebook.coverTitle}
                      </p>
                      <p
                        className="mt-3"
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontStyle: 'italic',
                          fontSize: '0.9rem',
                          fontWeight: 400,
                          color: ebook.coverAccent,
                        }}
                      >
                        {ebook.coverSubtitle}
                      </p>
                    </div>

                    <div
                      style={{
                        fontFamily: 'var(--font-ui)',
                        fontSize: '0.7rem',
                        fontWeight: 500,
                        letterSpacing: '0.08em',
                        opacity: 0.65,
                      }}
                    >
                      por Vera Senerine
                    </div>
                  </div>
                </motion.div>
              </a>

              {/* Texto descritivo abaixo da capa */}
              <div className="flex flex-col gap-3">
                <div className="flex items-baseline gap-3">
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontStyle: 'italic',
                      fontSize: '1rem',
                      color: 'rgba(251,246,238,0.55)',
                    }}
                  >
                    {ebook.chapter}.
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.5rem',
                      fontWeight: 600,
                      color: '#FBF6EE',
                      lineHeight: 1.15,
                      letterSpacing: '-0.015em',
                    }}
                  >
                    {ebook.title}
                  </h3>
                </div>

                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.96rem',
                    lineHeight: 1.65,
                    color: 'rgba(251,246,238,0.72)',
                  }}
                >
                  {ebook.pitch}
                </p>

                {/* Linha-base: páginas, preço, CTA */}
                <div
                  className="mt-4 flex items-center justify-between pt-4"
                  style={{ borderTop: '1px solid rgba(251,246,238,0.18)' }}
                >
                  <div className="flex items-baseline gap-3">
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.5rem',
                        fontWeight: 600,
                        color: '#FBF6EE',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {ebook.price}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-ui)',
                        fontSize: '0.74rem',
                        color: 'rgba(251,246,238,0.5)',
                      }}
                    >
                      {ebook.pages}
                    </span>
                  </div>

                  <motion.a
                    href={ebook.href}
                    whileHover={{ x: 4 }}
                    className="inline-flex items-center gap-2"
                    style={{
                      color: '#FBF6EE',
                      fontFamily: 'var(--font-ui)',
                      fontSize: '0.86rem',
                      fontWeight: 600,
                      borderBottom: '1px solid rgba(251,246,238,0.4)',
                      paddingBottom: '4px',
                    }}
                  >
                    Quero esse caderno
                    <ArrowRightIcon size={14} />
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Aviso de entrega — sutil */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 text-center"
          style={{
            fontFamily: 'var(--font-ui)',
            fontSize: '0.8rem',
            color: 'rgba(251,246,238,0.5)',
            letterSpacing: '0.04em',
          }}
        >
          Entrega digital, no e-mail, logo após o pagamento.
        </motion.p>
      </div>
    </section>
  )
}
