'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface LuxuryButtonProps {
  label?: string
  href?: string
  className?: string
}

export default function LuxuryButton({
  label = 'Explore Our Collection',
  href = '#',
  className = '',
}: LuxuryButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className={`flex justify-center ${className}`}
    >
      <Link
        href={href}
        className="group relative px-9 py-3 overflow-hidden rounded-full border border-[#a47b4f] text-[#3b2b20] font-medium tracking-wide text-lg transition-all duration-700 hover:shadow-[0_0_25px_rgba(164,123,79,0.3)]"
      >
        {/* Hover Background Animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#b8925d] via-[#caa875] to-[#b8925d] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out" />

        {/* Text */}
        <span className="relative z-10 transition-all duration-700 group-hover:text-white">
          {label}
        </span>
      </Link>
    </motion.div>
  )
}
