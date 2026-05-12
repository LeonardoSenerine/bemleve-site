import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Fundos escuros
        deep: {
          DEFAULT: '#100400',
          mid: '#1C0A00',
          light: '#2D1400',
        },
        // Laranja — cor principal da marca
        terra: {
          DEFAULT: '#C4521A',
          light:   '#E8744A',
          bright:  '#F0884A',
          pale:    '#F5DDD2',
          dark:    '#8C3610',
          50:      '#FFF3E8',
          100:     '#FFE0C2',
        },
        // Cream — seções claras
        cream: {
          DEFAULT: '#F5F0E8',
          dark:    '#EDE7D9',
          warm:    '#FFF3E8',
        },
        // Texto escuro
        brown: {
          deep: '#2C1A0E',
          mid:  '#6B3F1F',
          soft: '#9A6B4A',
        },
        // Sage — acento natural
        sage: {
          DEFAULT: '#5C7A4E',
          light:   '#8EAD7E',
          pale:    '#E8F0E4',
        },
        'warm-gray': '#9A8E80',
        border:      '#DDD5C8',
        offwhite:    '#FDFAF6',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body:    ['var(--font-lora)', 'Georgia', 'serif'],
        ui:      ['var(--font-dm-sans)', 'sans-serif'],
        roboto:  ['var(--font-roboto)', 'sans-serif'],
      },
      animation: {
        float:        'float 4s ease-in-out infinite',
        'float-slow': 'float 7s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.5' },
          '50%':      { opacity: '0.85' },
        },
      },
    },
  },
  plugins: [],
}

export default config
