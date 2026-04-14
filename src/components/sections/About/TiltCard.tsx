'use client'

import { useTilt } from '@/hooks/useTilt'

interface TiltCardProps {
  children: React.ReactNode
}

export function TiltCard({ children }: TiltCardProps) {
  const { ref, onMouseMove, onMouseLeave, style } = useTilt()

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={style}
      className="relative p-8 bg-gradient-to-br from-navy-3/50 to-navy-2/50 border border-blue/20 rounded-xl overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue/0 via-blue/5 to-cyan/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />

      <div className="relative z-10">{children}</div>
    </div>
  )
}
