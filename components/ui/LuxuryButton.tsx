'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import clsx from 'clsx'

interface LuxuryButtonProps {
  label?: string
  href?: string
  className?: string
  theme?: 'light' | 'dark' 
  accentColor?: string // e.g. "#a47b4f"
  animated?: boolean
  shadow?: 'none' | 'soft' | 'strong'
}

export default function LuxuryButton({
  label = 'Explore Our Collection',
  href = '#',
  className = '',
  theme = 'light',
  accentColor = '#a47b4f',
  animated = true,
  shadow = 'soft',
}: LuxuryButtonProps) {
  const isDark = theme === 'dark'
  const baseText = isDark ? 'text-white' : 'text-[#3b2b20]'
  const borderColor = { borderColor: accentColor }

  const shadowClass =
    shadow === 'strong'
      ? `hover:shadow-[0_0_35px_${accentColor.replace('#', '%23')}50]`
      : shadow === 'soft'
      ? `hover:shadow-[0_0_20px_${accentColor.replace('#', '%23')}30]`
      : ''

  return (
    <motion.div
      initial={animated ? { opacity: 0, y: 40 } : false}
      whileInView={animated ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className={clsx('flex justify-center', className)}
    >
      <Link
        href={href}
        style={borderColor}
        className={clsx(
          'group relative px-6 uppercase py-2 overflow-hidden rounded-full border tracking-wide text-sm transition-all duration-700',
          baseText,
          shadowClass
        )}
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out"
          style={{
            background: `linear-gradient(to right, ${accentColor}, ${lightenColor(
              accentColor,
              20
            )}, ${accentColor})`,
          }}
        />

        <span
          className={clsx(
            'relative z-10 transition-all duration-700',
            isDark ? 'group-hover:text-[#2c1e13]' : 'group-hover:text-white'
          )}
        >
          {label}
        </span>
      </Link>
    </motion.div>
  )
}

function lightenColor(hex: string, percent: number) {
  const num = parseInt(hex.replace('#', ''), 16)
  const amt = Math.round(2.55 * percent)
  const R = (num >> 16) + amt
  const G = ((num >> 8) & 0x00ff) + amt
  const B = (num & 0x0000ff) + amt
  return (
    '#' +
    (
      0x1000000 +
      (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
      (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
      (B < 255 ? (B < 1 ? 0 : B) : 255)
    )
      .toString(16)
      .slice(1)
  )
}
