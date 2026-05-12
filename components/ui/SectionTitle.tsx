'use client'

import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

interface SectionTitleProps {
  title: string
  subtitle?: string
  centered?: boolean
}

export default function SectionTitle({ title, subtitle, centered = false }: SectionTitleProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="font-display text-brown-deep"
        style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', lineHeight: 1.2 }}
        dangerouslySetInnerHTML={{ __html: title.replace(/\n/g, '<br/>') }}
      />
      {subtitle && (
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-4 max-w-xl font-body text-lg text-brown-mid"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
