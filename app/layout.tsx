import type { Metadata } from 'next'
import { Roboto, Playfair_Display, Lora, DM_Sans } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-roboto',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-body',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-ui',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Bem Leve Marmitafit — Marmitas Fit Congeladas em Itatiba/SP',
  description:
    'Alimentação saudável e prática com marmitas fit congeladas. Entregamos em Itatiba e região. Conheça também nossos ebooks de receitas e negócio.',
  keywords:
    'marmita fit, marmita congelada, itatiba, alimentação saudável, ebook receitas fit',
  openGraph: {
    title: 'Bem Leve Marmitafit',
    description:
      'Marmitas fit congeladas feitas com carinho por Vera Senerine em Itatiba/SP.',
    images: ['/og-image.jpg'],
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${roboto.variable} ${playfair.variable} ${lora.variable} ${dmSans.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  )
}
