'use client'

import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

const ebooks = [
  {
    emoji: '📖',
    title: 'Marmitas Fit em Casa',
    subtitle: 'Guia Completo de Receitas',
    description:
      'Mais de 50 receitas fit testadas e aprovadas, com modo de preparo passo a passo, tabela nutricional e dicas de congelamento.',
    price: 'R$ 47',
    oldPrice: 'R$ 97',
    tag: 'Mais Vendido',
    href: '#',
  },
  {
    emoji: '💼',
    title: 'Monte Seu Negócio de Marmitas',
    subtitle: 'Do Zero ao Primeiro Pedido',
    description:
      'O passo a passo que a Vera usou para construir um negócio de marmitas lucrativo, com mais de 202K seguidores e clientes fiéis.',
    price: 'R$ 97',
    oldPrice: 'R$ 197',
    tag: 'Empreendedorismo',
    href: '#',
  },
]

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE, delay } },
})

export default function Ebooks() {
  return (
    <section
      id="ebooks"
      className="section-pad relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #c44820 0%, #eb6433 45%, #f47c52 75%, #f99066 100%)' }}
    >

      <div className="container-site relative z-10">
        {/* Cabeçalho */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-14 flex flex-col items-center text-center gap-4"
        >
          <motion.div variants={fadeUp(0)} className="flex items-center gap-3">
            <span className="h-px w-8" style={{ backgroundColor: 'rgba(253,250,246,0.5)' }} />
            <span style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '0.7rem',
              letterSpacing: '0.14em',
              color: 'rgba(253,250,246,0.75)',
              fontWeight: 700,
              textTransform: 'uppercase',
            }}>
              Ebooks Digitais
            </span>
            <span className="h-px w-8" style={{ backgroundColor: 'rgba(253,250,246,0.5)' }} />
          </motion.div>

          <motion.h2
            variants={fadeUp(0.1)}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 900,
              lineHeight: 1.15,
              color: '#FDFAF6',
            }}
          >
            Aprenda, Crie
            <span style={{ color: '#b6dfa4' }}> e Empreenda</span>
          </motion.h2>

          <motion.p
            variants={fadeUp(0.18)}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              
              lineHeight: 1.75,
              color: 'rgba(253,250,246,0.7)',
              maxWidth: '32rem',
            }}
          >
            O conhecimento que a Vera acumulou em anos de experiência,
            agora acessível para você.
          </motion.p>
        </motion.div>

        {/* Cards de Ebooks */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {ebooks.map((ebook, i) => (
            <motion.div
              key={ebook.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp(i * 0.1)}
              className="flex flex-col overflow-hidden rounded-3xl"
              style={{
                background: 'rgba(0,0,0,0.2)',
                border: '1px solid rgba(253,250,246,0.15)',
                backdropFilter: 'blur(8px)',
              }}
            >
              {/* Capa do ebook */}
              <div
                className="relative flex items-center justify-center"
                style={{
                  height: '200px',
                  background: 'rgba(0,0,0,0.2)',
                  borderBottom: '1px solid rgba(253,250,246,0.1)',
                }}
              >
                {/* "Livro" CSS */}
                <div
                  className="relative flex items-center justify-center"
                  style={{
                    width: '120px',
                    height: '150px',
                    borderRadius: '4px 12px 12px 4px',
                    background: 'linear-gradient(135deg, rgba(253,250,246,0.15), rgba(253,250,246,0.05))',
                    border: '1px solid rgba(253,250,246,0.2)',
                    boxShadow: '6px 6px 24px rgba(0,0,0,0.3), inset -3px 0 8px rgba(0,0,0,0.2)',
                  }}
                >
                  <span style={{ fontSize: '3rem' }}>{ebook.emoji}</span>
                  {/* Lombada */}
                  <div
                    className="absolute left-0 top-0 bottom-0 rounded-l"
                    style={{ width: '10px', background: 'rgba(0,0,0,0.25)' }}
                  />
                </div>

                {/* Tag */}
                <span
                  className="absolute right-4 top-4 rounded-full px-3 py-1"
                  style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    background: 'rgba(253,250,246,0.2)',
                    color: '#FDFAF6',
                    border: '1px solid rgba(253,250,246,0.25)',
                  }}
                >
                  {ebook.tag}
                </span>
              </div>

              {/* Conteúdo */}
              <div className="flex flex-1 flex-col gap-4 p-6">
                <div>
                  <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.7rem', color: 'rgba(253,250,246,0.55)', letterSpacing: '0.08em', marginBottom: '4px' }}>
                    {ebook.subtitle}
                  </p>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.35rem',
                    fontWeight: 900,
                    color: '#FDFAF6',
                    lineHeight: 1.2,
                  }}>
                    {ebook.title}
                  </h3>
                </div>

                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9rem',
                  lineHeight: 1.75,
                  color: 'rgba(253,250,246,0.65)',
                }}>
                  {ebook.description}
                </p>

                {/* Preço e CTA */}
                <div className="mt-auto flex items-center justify-between pt-4" style={{ borderTop: '1px solid rgba(253,250,246,0.1)' }}>
                  <div className="flex flex-col">
                    <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.75rem', color: 'rgba(253,250,246,0.4)', textDecoration: 'line-through' }}>
                      {ebook.oldPrice}
                    </span>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 900, color: '#FDFAF6', lineHeight: 1 }}>
                      {ebook.price}
                    </span>
                  </div>

                  <motion.a
                    href={ebook.href}
                    whileHover={{ scale: 1.04, backgroundColor: 'rgba(253,250,246,0.25)' }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium tracking-wide transition-colors"
                    style={{
                      backgroundColor: 'rgba(253,250,246,0.15)',
                      border: '1px solid rgba(253,250,246,0.3)',
                      color: '#FDFAF6',
                      fontFamily: 'var(--font-ui)',
                      fontSize: '0.875rem',
                    }}
                  >
                    Quero comprar →
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Aviso de entrega digital */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp(0.3)}
          className="mt-10 text-center"
          style={{ fontFamily: 'var(--font-ui)', fontSize: '0.8rem', color: 'rgba(253,250,246,0.45)' }}
        >
          📩 Entrega imediata por e-mail após confirmação do pagamento
        </motion.p>
      </div>
    </section>
  )
}
