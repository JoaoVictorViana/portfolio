'use client'

import { motion } from 'framer-motion'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { TechCategory } from '@/types'

interface TechCategoryCardProps {
  category: TechCategory
  index?: number
}

const categoryIcons: Record<string, React.ReactNode> = {
  frontend: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  backend: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  database: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  devops: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 20V10" />
      <path d="M12 20V4" />
      <path d="M6 20v-6" />
    </svg>
  ),
  messaging: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  ),
  cms: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  ),
}

export function TechCategoryCard({ category, index = 0 }: TechCategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="relative p-6 bg-navy-3/60 border border-blue/20 rounded-xl overflow-hidden group hover:border-blue/45 transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue/0 via-blue/3 to-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-blue via-cyan to-blue-bright scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

      <div className="relative z-10 space-y-5">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-blue/10 border border-blue/20 flex items-center justify-center text-blue-bright group-hover:bg-blue/20 group-hover:text-cyan transition-colors duration-300">
            {categoryIcons[category.icon] ?? categoryIcons.frontend}
          </div>
          <h3 className="text-sm font-bold text-white uppercase tracking-wider">
            {category.name}
          </h3>
        </div>

        <div className="space-y-3.5">
          {category.items.map((item, i) => (
            <ProgressBar key={item.name} name={item.name} level={item.level} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
