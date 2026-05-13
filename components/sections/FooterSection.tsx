'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { WhatsappIcon, InstagramIcon, PinIcon } from '../ui/Icons'
import { WHATSAPP_URL } from '@/lib/whatsapp'
import { smoothScrollToAnchor } from '@/lib/scroll'
import logo from "../../public/images/Logo.png"

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

const navLinks = [
  { label: 'História',   href: '#historia' },
  { label: 'Princípios', href: '#produtos' },
  { label: 'Cadernos',   href: '#ebooks'   },
]

const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault()
  smoothScrollToAnchor(href)
  if (history.pushState) history.pushState(null, '', href)
}

export default function FooterSection() {
  return (
    <footer
      id="footer"
      className="relative overflow-hidden"
      style={{ background: '#241108' }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="container-site flex flex-col items-center gap-6 py-20 text-center"
        >
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.85rem, 3.6vw, 2.6rem)',
            fontWeight: 600,
            lineHeight: 1.1,
            color: '#FBF6EE',
            letterSpacing: '-0.02em',
            maxWidth: '24rem',
          }}>
            Manda uma mensagem.
            <br />
            <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#E8A572' }}>
              A Vera responde.
            </span>
          </h2>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            color: 'rgba(251,246,238,0.6)',
            maxWidth: '26rem',
            lineHeight: 1.6,
          }}>
            Combine seu kit semanal direto pelo WhatsApp — sem formulário,
            sem espera, sem chatbot.
          </p>

          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="mt-2 inline-flex items-center gap-2.5 rounded-full px-8 py-4 transition-all"
            style={{
              backgroundColor: '#FBF6EE',
              color: '#241108',
              fontFamily: 'var(--font-ui)',
              fontSize: '0.9rem',
              fontWeight: 600,
              letterSpacing: '0.01em',
              boxShadow: '0 12px 30px rgba(0,0,0,0.25)',
            }}
          >
            <WhatsappIcon size={16} stroke="#241108" />
            Falar com a Vera
          </motion.a>
        </motion.div>
      </div>

      <div
        aria-hidden
        className="container-site"
        style={{ borderTop: '1px solid rgba(251,246,238,0.12)' }}
      />

      <div className="container-site flex flex-col items-start gap-10 py-12 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-3">
          <a
            href="#inicio"
            onClick={(e) => handleAnchor(e, '#inicio')}
            style={{ cursor: 'pointer' }}
          >
            <Image
              src={logo.src}
              alt="Bem Leve"
              width={120}
              height={120}
            />
          </a>
          <div
            className="flex items-center gap-1.5"
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '0.78rem',
              color: 'rgba(251,246,238,0.5)',
              letterSpacing: '0.04em',
            }}
          >
            <PinIcon size={13} />
            Itatiba, São Paulo
          </div>
        </div>

        <nav className="flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleAnchor(e, link.href)}
              style={{
                fontFamily: 'var(--font-ui)',
                fontSize: '0.86rem',
                color: 'rgba(251,246,238,0.65)',
                fontWeight: 500,
                transition: 'color 0.2s',
                letterSpacing: '0.01em',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#E8A572' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(251,246,238,0.65)' }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://instagram.com/bemleve_marmitafit"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-10 w-10 items-center justify-center rounded-full transition-colors"
            style={{
              border: '1px solid rgba(251,246,238,0.2)',
              color: 'rgba(251,246,238,0.7)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(251,246,238,0.1)'
              e.currentTarget.style.color = '#FBF6EE'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = 'rgba(251,246,238,0.7)'
            }}
          >
            <InstagramIcon size={15} />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex h-10 w-10 items-center justify-center rounded-full transition-colors"
            style={{
              border: '1px solid rgba(251,246,238,0.2)',
              color: 'rgba(251,246,238,0.7)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(251,246,238,0.1)'
              e.currentTarget.style.color = '#FBF6EE'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = 'rgba(251,246,238,0.7)'
            }}
          >
            <WhatsappIcon size={15} />
          </a>
        </div>
      </div>

      <div
        className="container-site pb-8 pt-4 text-center"
        style={{ borderTop: '1px solid rgba(251,246,238,0.08)' }}
      >
        <p style={{
          fontFamily: 'var(--font-ui)',
          fontSize: '0.74rem',
          color: 'rgba(251,246,238,0.35)',
          letterSpacing: '0.02em',
        }}>
          © {new Date().getFullYear()} Bem Leve · Marmitas feitas em Itatiba/SP
        </p>
      </div>
    </footer>
  )
}
