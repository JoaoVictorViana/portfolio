'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { HeroStats } from './HeroStats'
import { useTyping } from '@/hooks/useTyping'
import { stats } from '@/data/stats'

const TYPING_PHRASES = [
  'Senior Full-Stack Developer',
  'Java · Node.js · React',
  'TypeScript Specialist',
  'DevOps & Cloud Explorer',
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export function HeroContent() {
  const displayText = useTyping(TYPING_PHRASES)

  return (
    <motion.div
      className="flex flex-col justify-center h-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <Badge variant="pulse">Disponível para novas oportunidades</Badge>
      </motion.div>

      <motion.p
        variants={itemVariants}
        className="mt-6 mb-3 text-sm font-mono text-blue-bright tracking-widest"
      >
        // Olá, me chamo
      </motion.p>

      <motion.h1
        variants={itemVariants}
        className="text-5xl md:text-7xl font-black text-white leading-[1.02] tracking-tight mb-4"
      >
        João Victor
        <br />
        <span className="bg-gradient-to-r from-blue via-blue-bright to-cyan bg-clip-text text-transparent">
          Duarte
        </span>
      </motion.h1>

      <motion.div variants={itemVariants} className="h-14 mb-6 flex items-center">
        <p className="text-xl md:text-2xl text-blue-bright font-mono">
          {displayText}
          <span className="ml-0.5 inline-block w-0.5 h-[1em] bg-blue-bright align-middle animate-pulse" />
        </p>
      </motion.div>

      <motion.p
        variants={itemVariants}
        className="text-text text-lg max-w-xl mb-10 leading-relaxed"
      >
        Desenvolvedor Full-Stack Sênior com sólida experiência em arquiteturas
        escaláveis — do servidor à interface. Especializado em React, Node.js e
        TypeScript, atuando com DevOps, microserviços e plataformas de alta
        disponibilidade.
      </motion.p>

      <motion.div variants={itemVariants} className="flex gap-4 mb-12">
        <Button variant="primary" size="lg" href="#contato">
          Entre em contato
        </Button>
        <Button variant="ghost" size="lg" href="#experiencia">
          Ver trajetória
        </Button>
      </motion.div>

      <motion.div variants={itemVariants}>
        <HeroStats items={stats} />
      </motion.div>
    </motion.div>
  )
}
