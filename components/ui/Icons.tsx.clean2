/**
 * Ícones line-art próprios — substituem emojis e ícones genéricos.
 * Stroke fluido, peso fino (1.5), terminações arredondadas.
 * Inspiração: caderno de receitas ilustrado à mão.
 */

type IconProps = {
  size?: number
  stroke?: string
  className?: string
}

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  strokeWidth: 1.5,
})

export const SprigIcon = ({ size = 28, stroke = 'currentColor', className }: IconProps) => (
  <svg {...base(size)} stroke={stroke} className={className}>
    <path d="M12 21c0-6 0-10 5-15" />
    <path d="M12 17c-2-.5-4-2-4.5-5" />
    <path d="M13 14c-.5-2 .5-4 3-5" />
    <path d="M13 10c-.5-2 0-3.5 2-4.5" />
    <path d="M11 13c-1.5-1-3-1-4.5 0" />
  </svg>
)

export const PotIcon = ({ size = 28, stroke = 'currentColor', className }: IconProps) => (
  <svg {...base(size)} stroke={stroke} className={className}>
    <path d="M4 9h16" />
    <path d="M5 9v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V9" />
    <path d="M3 9h-1" />
    <path d="M22 9h-1" />
    <path d="M9 5c-.5 1 0 2 1 2.5" />
    <path d="M13 4c-.5 1 0 2 1 2.5" />
  </svg>
)

export const ClockIcon = ({ size = 28, stroke = 'currentColor', className }: IconProps) => (
  <svg {...base(size)} stroke={stroke} className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
)

export const HeartLineIcon = ({ size = 28, stroke = 'currentColor', className }: IconProps) => (
  <svg {...base(size)} stroke={stroke} className={className}>
    <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
  </svg>
)

export const SnowflakeIcon = ({ size = 28, stroke = 'currentColor', className }: IconProps) => (
  <svg {...base(size)} stroke={stroke} className={className}>
    <path d="M12 3v18" />
    <path d="M3 12h18" />
    <path d="M5.5 5.5l13 13" />
    <path d="M18.5 5.5l-13 13" />
    <path d="M9 6l3-3 3 3" />
    <path d="M9 18l3 3 3-3" />
    <path d="M6 9l-3 3 3 3" />
    <path d="M18 9l3 3-3 3" />
  </svg>
)

export const PinIcon = ({ size = 18, stroke = 'currentColor', className }: IconProps) => (
  <svg {...base(size)} stroke={stroke} className={className}>
    <path d="M12 21s-7-7-7-12a7 7 0 0 1 14 0c0 5-7 12-7 12z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
)

export const StarIcon = ({ size = 16, stroke = 'currentColor', className }: IconProps) => (
  <svg {...base(size)} stroke={stroke} fill={stroke} className={className} strokeWidth={1}>
    <path d="M12 3l2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.8 1-6.1L3.2 9.4l6.1-.9z" />
  </svg>
)

export const ArrowRightIcon = ({ size = 16, stroke = 'currentColor', className }: IconProps) => (
  <svg {...base(size)} stroke={stroke} className={className}>
    <path d="M5 12h14" />
    <path d="M13 6l6 6-6 6" />
  </svg>
)

export const WhatsappIcon = ({ size = 18, stroke = 'currentColor', className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={stroke} className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

export const InstagramIcon = ({ size = 18, stroke = 'currentColor', className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={stroke} className={className} aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
)

/** Ondinha decorativa — substitui as linhinhas retas que aparecem antes de cada título */
export const Squiggle = ({ width = 56, stroke = 'currentColor', className }: { width?: number; stroke?: string; className?: string }) => (
  <svg width={width} height={10} viewBox="0 0 56 10" fill="none" stroke={stroke} strokeWidth={1.5} strokeLinecap="round" className={className}>
    <path d="M1 5 Q 8 1, 14 5 T 28 5 T 42 5 T 55 5" />
  </svg>
)
