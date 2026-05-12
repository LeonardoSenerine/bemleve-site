type BadgeVariant = 'terra' | 'sage' | 'neutral'

interface BadgeProps {
  children: React.ReactNode
  variant?: BadgeVariant
  className?: string
}

const styles: Record<BadgeVariant, string> = {
  terra: 'bg-terra-pale text-terra',
  sage: 'bg-sage-pale text-sage',
  neutral: 'bg-cream-dark text-warm-gray',
}

export default function Badge({ children, variant = 'neutral', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 font-ui text-xs font-medium tracking-wide ${styles[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
