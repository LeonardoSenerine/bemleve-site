'use client'

import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

const testimonials = [
  {
    text: 'Perdi 8kg sem passar fome! As marmitas da Vera são incríveis, tem sabor e são super saudáveis. Não consigo mais imaginar minha semana sem elas.',
    name: 'Mariana S.',
    handle: '@mariana_fit_sp',
    avatar: '👩',
    stars: 5,
  },
  {
    text: 'Praticidade que me salvou! Trabalho o dia todo e quando chego em casa é só descongelar. A qualidade é impecável e o atendimento da Vera é nota 10.',
    name: 'Roberto C.',
    handle: '@roberto_saude',
    avatar: '👨',
    stars: 5,
  },
  {
    text: 'Comprei o ebook de receitas e revolucionou minha cozinha. Aprendi a fazer pratos incríveis com poucos ingredientes. Indico para todo mundo!',
    name: 'Fernanda L.',
    handle: '@fer_cozinha_fit',
    avatar: '👩‍🦱',
    stars: 5,
  },
]

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE, delay } },
})

export default function Testimonials() {
  return (
    <section
      className="section-pad relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #FFFAF5 0%, #F5F0E8 100%)' }}
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
            <span className="h-px w-8" style={{ backgroundColor: '#eb6433' }} />
            <span style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '0.7rem',
              letterSpacing: '0.14em',
              color: '#eb6433',
              fontWeight: 500,
              textTransform: 'uppercase',
            }}>
              Depoimentos
            </span>
            <span className="h-px w-8" style={{ backgroundColor: '#eb6433' }} />
          </motion.div>

          <motion.h2
            variants={fadeUp(0.1)}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 900,
              lineHeight: 1.15,
              color: '#2C1A0E',
            }}
          >
            Quem prova,
            <span style={{ color: '#5a8c2a' }}> não larga.</span>
          </motion.h2>

          {/* Avaliação geral */}
          <motion.div variants={fadeUp(0.2)} className="flex items-center gap-2">
            <div className="flex gap-1">
              {[1,2,3,4,5].map((s) => (
                <span key={s} style={{ color: '#eb6433', fontSize: '1.1rem' }}>★</span>
              ))}
            </div>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.85rem', color: '#6B3F1F' }}>
              5.0 · +500 avaliações
            </span>
          </motion.div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.handle}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp(i * 0.1)}
              className="flex flex-col gap-5 rounded-3xl p-6"
              style={{
                background: '#FDFAF6',
                border: '1px solid rgba(196,82,26,0.12)',
                boxShadow: '0 4px 24px rgba(44,26,14,0.07)',
              }}
            >
              {/* Estrelas */}
              <div className="flex gap-1">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <span key={s} style={{ color: '#eb6433', fontSize: '0.95rem' }}>★</span>
                ))}
              </div>

              {/* Texto */}
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                
                lineHeight: 1.8,
                color: '#6B3F1F',
                flex: 1,
              }}>
                "{t.text}"
              </p>

              {/* Autor */}
              <div className="flex items-center gap-3" style={{ borderTop: '1px solid rgba(196,82,26,0.1)', paddingTop: '1rem' }}>
                <div
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-xl"
                  style={{ background: '#F5DDD2' }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.85rem', fontWeight: 900, color: '#2C1A0E' }}>
                    {t.name}
                  </p>
                  <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.75rem', color: '#eb6433' }}>
                    {t.handle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Instagram */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp(0.3)}
          className="mt-12 flex flex-col items-center gap-3 text-center"
        >
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem',  color: '#9A8E80' }}>
            Faça parte dessa comunidade de
            <strong style={{ color: '#eb6433' }}> +202 mil pessoas</strong>
          </p>
          <motion.a
            href="https://instagram.com/bemleve_marmitafit"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full border px-7 py-3.5 font-medium tracking-wide transition-colors"
            style={{
              borderColor: '#eb6433',
              color: '#eb6433',
              fontFamily: 'var(--font-ui)',
              fontSize: '0.875rem',
            }}
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            Seguir no Instagram
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
