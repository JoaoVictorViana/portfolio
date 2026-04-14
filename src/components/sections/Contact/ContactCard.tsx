'use client'

import { motion } from 'framer-motion'
import { useMagnetic } from '@/hooks/useMagnetic'
import { ContactItem } from '@/types'

interface ContactCardProps {
  item: ContactItem
}

const icons: Record<string, React.ReactNode> = {
  mail: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  phone: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  ),
  linkedin: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
}

export function ContactCard({ item }: ContactCardProps) {
  const { ref, onMouseMove, onMouseLeave, style } = useMagnetic<HTMLAnchorElement>()

  return (
    <motion.a
      ref={ref}
      href={item.href}
      target={item.id === 'linkedin' ? '_blank' : undefined}
      rel={item.id === 'linkedin' ? 'noopener noreferrer' : undefined}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={style}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative flex items-center gap-4 p-6 bg-navy-3/60 border border-blue/20 rounded-xl overflow-hidden group hover:border-blue/50 transition-colors duration-300 block"
      aria-label={`${item.label}: ${item.value}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue/0 to-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-blue via-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10 flex-shrink-0 w-11 h-11 rounded-xl bg-blue/10 border border-blue/20 flex items-center justify-center text-blue-bright group-hover:bg-blue/20 group-hover:text-cyan transition-colors duration-300">
        {icons[item.icon]}
      </div>

      <div className="relative z-10 min-w-0">
        <p className="text-xs font-mono text-text uppercase tracking-widest mb-1">
          {item.label}
        </p>
        <p className="text-white font-semibold text-sm truncate group-hover:text-blue-bright transition-colors duration-200">
          {item.value}
        </p>
      </div>

      <div className="relative z-10 ml-auto text-text opacity-0 group-hover:opacity-100 group-hover:text-blue-bright transition-all duration-300 translate-x-1 group-hover:translate-x-0">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
    </motion.a>
  )
}
