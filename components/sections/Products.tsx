'use client'

import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

const items = [
  {
    label: 'Nutrição de verdade',
    title: 'Ingredientes frescos, carinho de cozinha real.',
    text: 'Cada marmita é montada com ingredientes naturais e selecionados, sem conservantes, sem artificiais. Vera cuida pessoalmente de cada detalhe da composição — para que você coma bem, sinta a diferença no dia a dia e chegue mais perto das suas metas sem abrir mão do sabor.',
    icon: '🥦',
    accent: '#9dcd5a',
    gradient: 'linear-gradient(135deg, #1e3d0f 0%, #2e5a18 60%, #9dcd5a22 100%)',
    pattern: 'radial-gradient(circle at 30% 70%, rgba(157,205,90,0.18) 0%, transparent 60%)',
  },
  {
    label: 'Praticidade real',
    title: 'Do congelador ao prato em menos de 10 minutos.',
    text: 'Chegar em casa depois de um dia longo e ainda ter que cozinhar é estressante. Com a Bem Leve, esse problema não existe. Descongele, aqueça e está pronto — sem preparar, sem sujar louça, sem culpa. Só prazer, leveza e tempo de volta pra você.',
    icon: '⏱️',
    accent: '#eb6433',
    gradient: 'linear-gradient(135deg, #3D1A00 0%, #5a2900 60%, #eb643322 100%)',
    pattern: 'radial-gradient(circle at 70% 30%, rgba(235,100,51,0.2) 0%, transparent 60%)',
  },
  {
    label: 'Qualidade de vida',
    title: 'Comer bem é cuidar de quem você é.',
    text: 'Alimentação de qualidade não é luxo — é a base de como você se sente, dorme, rende e vive. A Bem Leve existe para tornar esse cuidado acessível e contínuo, sem esforço extra no seu dia. Pequenas escolhas, feitas toda semana, que mudam como você se sente por inteiro.',
    icon: '💚',
    accent: '#5dd0d8',
    gradient: 'linear-gradient(135deg, #0f2e30 0%, #1a4a4e 60%, #5dd0d822 100%)',
    pattern: 'radial-gradient(circle at 50% 80%, rgba(93,208,216,0.18) 0%, transparent 60%)',
  },
]


export default function Products() {
  return (
    <section
      id="produtos"
      className="section-pad relative overflow-hidden"
      style={{ background: 'linear-gradient(170deg, #3D1A00 0%, #2D1200 100%)' }}
    >
      <div className="container-site relative z-10">

        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-20 flex flex-col items-center text-center gap-4"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 rounded-full" style={{ backgroundColor: '#eb6433' }} />
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.72rem', letterSpacing: '0.16em', color: '#eb6433', fontWeight: 700, textTransform: 'uppercase' }}>
              Por que marmita fit?
            </span>
            <span className="h-px w-8 rounded-full" style={{ backgroundColor: '#eb6433' }} />
          </div>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', fontWeight: 900, lineHeight: 1.05, color: '#FDFAF6', letterSpacing: '-0.02em' }}>
            Comer bem nunca foi
            <span style={{ color: '#9dcd5a' }}> tão fácil.</span>
          </h2>

          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', fontWeight: 400, lineHeight: 1.75, color: 'rgba(253,250,246,0.55)', maxWidth: '36rem' }}>
            A vida é corrida, mas a alimentação não precisa ser descuidada.
            Veja por que milhares de pessoas escolheram a Bem Leve.
          </p>
        </motion.div>

        {/* Itens alternados */}
        <div className="flex flex-col gap-16 lg:gap-24">
          {items.map((item, i) => {
            const isEven = i % 2 === 0
            return (
              <div
                key={item.label}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
              >
                {/* Painel visual */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, ease: EASE }}
                  className={`relative rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-square ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                  style={{ background: item.gradient }}
                >
                  <div className="absolute inset-0" style={{ background: item.pattern }} />

                  {/* Círculos decorativos */}
                  <div
                    className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full opacity-10"
                    style={{ background: item.accent }}
                  />
                  <div
                    className="absolute -top-8 -left-8 w-32 h-32 rounded-full opacity-10"
                    style={{ background: item.accent }}
                  />

                  {/* Ícone central */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                    <motion.div
                      initial={{ scale: 0.7, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.55, ease: EASE, delay: 0.2 }}
                      className="text-7xl lg:text-8xl"
                      style={{ filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.4))' }}
                    >
                      {item.icon}
                    </motion.div>
                    <div
                      className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
                      style={{ background: `${item.accent}22`, color: item.accent, border: `1px solid ${item.accent}44`, fontFamily: 'var(--font-ui)' }}
                    >
                      {item.label}
                    </div>
                  </div>
                </motion.div>

                {/* Bloco de texto */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
                  className={`flex flex-col gap-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <span
                    className="text-xs font-bold uppercase tracking-widest"
                    style={{ color: item.accent, fontFamily: 'var(--font-ui)' }}
                  >
                    {item.label}
                  </span>

                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, lineHeight: 1.15, color: '#FDFAF6', letterSpacing: '-0.01em' }}>
                    {item.title}
                  </h3>

                  <div
                    className="w-12 h-0.5 rounded-full"
                    style={{ background: `linear-gradient(90deg, ${item.accent}, transparent)` }}
                  />

                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', fontWeight: 400, lineHeight: 1.85, color: 'rgba(253,250,246,0.65)' }}>
                    {item.text}
                  </p>
                </motion.div>
              </div>
            )
          })}
        </div>

        {/* Frase de impacto */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mt-24 flex justify-center"
        >
          <div
            className="rounded-2xl px-8 py-7 max-w-2xl text-center"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1.5px solid rgba(235,100,51,0.25)' }}
          >
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.1rem, 2.5vw, 1.45rem)', fontWeight: 700, lineHeight: 1.55, color: 'rgba(253,250,246,0.9)' }}>
              "Você merece chegar em casa e ter uma refeição gostosa esperando por você —
              sem culpa e sem esforço."
            </p>
            <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.9rem', fontWeight: 700, color: '#eb6433', marginTop: '0.75rem' }}>
              — Vera Senerine, fundadora da Bem Leve
            </p>
          </div>
        </motion.div>

        {/* CTA WhatsApp */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          className="mt-10 flex flex-col items-center gap-4 text-center"
        >
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', fontWeight: 400, color: 'rgba(253,250,246,0.45)' }}>
            Pronto para experimentar? Monte seu kit semanal agora.
          </p>
          <motion.a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, background: 'linear-gradient(135deg, #f94617, #eb6433)' }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 rounded-full px-9 py-4 transition-all"
            style={{
              background: 'linear-gradient(135deg, #eb6433, #f94617)',
              color: '#fff',
              fontFamily: 'var(--font-ui)',
              fontSize: '0.9rem',
              fontWeight: 700,
              letterSpacing: '0.02em',
              boxShadow: '0 8px 32px rgba(235,100,51,0.4)',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Fazer Pedido pelo WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
