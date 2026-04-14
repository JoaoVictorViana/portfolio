'use client'

import { motion } from 'framer-motion'
import { useTilt } from '@/hooks/useTilt'
import { Tag } from '@/components/ui/Tag'
import { ExperienceItem } from '@/types'

interface ExpCardProps {
  item: ExperienceItem
}

export function ExpCard({ item }: ExpCardProps) {
  const { ref, onMouseMove, onMouseLeave, style } = useTilt()

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={style}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative p-6 bg-gradient-to-br from-navy-3/50 to-navy-2/50 border border-blue/20 rounded-xl overflow-hidden group hover:border-blue/50 transition-colors duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue/0 via-blue/5 to-cyan/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue via-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-white">{item.role}</h3>
            <p className="text-blue-bright font-medium">{item.company}</p>
          </div>

          {item.isActive && (
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="px-3 py-1 bg-cyan/20 text-cyan text-xs font-mono rounded border border-cyan/50"
            >
              Ativo
            </motion.div>
          )}
        </div>

        <div className="text-text text-sm flex items-center gap-2">
          <span>{item.period}</span>
          {item.location && (
            <>
              <span>•</span>
              <span>{item.location}</span>
            </>
          )}
        </div>

        <p className="text-text text-sm leading-relaxed">{item.description}</p>

        <div className="flex flex-wrap gap-2 pt-2">
          {item.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
