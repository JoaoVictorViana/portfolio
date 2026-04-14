'use client'

import { motion } from 'framer-motion'
import { useCounter } from '@/hooks/useCounter'
import { Stat } from '@/types'

interface HeroStatsProps {
  items: Stat[]
}

function StatItem({ label, value, suffix }: Stat) {
  const { ref, currentValue } = useCounter(value)

  return (
    <motion.div
      ref={ref}
      className="flex flex-col gap-1"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="text-3xl md:text-4xl font-bold text-blue-bright">
        {currentValue}
        {suffix}
      </div>
      <div className="text-sm text-text">{label}</div>
    </motion.div>
  )
}

export function HeroStats({ items }: HeroStatsProps) {
  return (
    <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-blue/20">
      {items.map((stat) => (
        <StatItem key={stat.label} {...stat} />
      ))}
    </div>
  )
}
