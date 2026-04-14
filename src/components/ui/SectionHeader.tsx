'use client'

import { motion } from 'framer-motion'

interface SectionHeaderProps {
  preLabel: string
  title: string
  highlight?: string
  subtitle?: string
}

export function SectionHeader({
  preLabel,
  title,
  highlight,
  subtitle,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-1 h-6 bg-gradient-to-b from-blue to-cyan" />
        <span className="text-xs font-mono text-blue-bright tracking-wider">
          {preLabel}
        </span>
      </div>

      <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
        {title}
        {highlight && (
          <span className="bg-gradient-to-r from-blue to-cyan bg-clip-text text-transparent">
            {' '}
            {highlight}
          </span>
        )}
      </h2>

      {subtitle && <p className="text-text text-lg">{subtitle}</p>}
    </motion.div>
  )
}
