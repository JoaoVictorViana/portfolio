'use client'

import { motion } from 'framer-motion'
import { useIntersection } from '@/hooks/useIntersection'

interface ProgressBarProps {
  name: string
  level: number
  delay?: number
}

export function ProgressBar({ name, level, delay = 0 }: ProgressBarProps) {
  const [ref, isVisible] = useIntersection<HTMLDivElement>({ threshold: 0.3 })

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="text-sm text-text">{name}</span>
        <span className="text-xs font-mono text-blue-bright/70">
          {Math.round(level * 100)}%
        </span>
      </div>

      <div className="h-1 bg-navy-2 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-blue to-cyan"
          initial={{ scaleX: 0 }}
          animate={isVisible ? { scaleX: level } : { scaleX: 0 }}
          style={{ transformOrigin: 'left' }}
          transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  )
}
