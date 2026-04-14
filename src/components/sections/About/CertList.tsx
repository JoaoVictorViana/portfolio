'use client'

import { motion } from 'framer-motion'
import { CertItem } from '@/types'

interface CertListProps {
  items: CertItem[]
}

export function CertList({ items }: CertListProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="space-y-4"
    >
      <h3 className="text-2xl font-bold text-white mb-6">Certificações</h3>

      {items.map((cert) => (
        <motion.div
          key={cert.id}
          variants={itemVariants}
          className="flex items-start gap-4 p-4 rounded-lg border border-blue/20 hover:border-blue/50 transition-colors duration-300 bg-navy-3/20"
        >
          <div className="w-2 h-2 rounded-full bg-cyan mt-2 flex-shrink-0" />
          <div>
            <p className="text-white font-medium">{cert.credential}</p>
            <p className="text-text text-sm">{cert.institution}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
