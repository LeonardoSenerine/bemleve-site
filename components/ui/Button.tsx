'use client'

import { motion } from 'framer-motion'
import { ComponentPropsWithoutRef } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps extends ComponentPropsWithoutRef<'a'> {
  variant?: Variant
  as?: 'a' | 'button'
}

const styles: Record<Variant, string> = {
  primary:
    'bg-terra text-white hover:bg-terra-light border border-terra',
  secondary:
    'border border-terra text-terra hover:bg-terra-pale bg-transparent',
  ghost:
    'text-brown-mid hover:text-terra hover:bg-terra-pale border border-transparent bg-transparent',
}

export default function Button({
  variant = 'primary',
  children,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <motion.a
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex cursor-pointer items-center gap-2 rounded-full px-7 py-3 font-ui text-sm font-medium tracking-wide transition-colors duration-200 ${styles[variant]} ${className}`}
      {...(props as any)}
    >
      {children}
    </motion.a>
  )
}
