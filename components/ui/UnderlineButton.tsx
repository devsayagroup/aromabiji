'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import clsx from 'clsx'

interface LuxuryUnderlineButtonProps {
  label?: string
  href?: string
  className?: string
  theme?: 'light' | 'dark'
  accentColor?: string
  animated?: boolean
  underlineWeight?: 'thin' | 'medium' | 'thick'
}

export default function UnderlineButton({
  label = 'Discover More',
  href = '#',
  className = '',
  theme = 'light',
  accentColor = '#a47b4f',
  animated = true,
  underlineWeight = 'medium',
}: LuxuryUnderlineButtonProps) {
  const isDark = theme === 'dark'
  const textColor = isDark ? 'text-white' : 'text-[#3b2b20]'
  const hoverText = isDark ? 'hover:text-[#d7b37c]' : 'hover:text-[#a47b4f]'
  const lineHeight =
    underlineWeight === 'thick'
      ? 'h-[3px]'
      : underlineWeight === 'medium'
      ? 'h-[2px]'
      : 'h-[1px]'

  return (
    <motion.div
      initial={animated ? { opacity: 0, y: 20 } : false}
      whileInView={animated ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true }}
      className={clsx('inline-block', className)}
    >
      <Link
        href={href}
        className={clsx(
          'group relative text-md transition-all duration-700',
          textColor,
          hoverText
        )}
      >
        {/* Text */}
        <span className="relative z-10">{label}</span>

        {/* Underline animation */}
        <span
          className={clsx(
            'absolute left-0 bottom-0 w-0 group-hover:w-full transition-all duration-700 ease-out',
            lineHeight
          )}
          style={{
            background: `linear-gradient(to right, ${accentColor}, ${lightenColor(
              accentColor,
              20
            )}, ${accentColor})`,
          }}
        ></span>
      </Link>
    </motion.div>
  )
}

// Utility: lighten color for subtle gradient tone
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
