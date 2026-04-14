"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TiltCard } from "./TiltCard";
import { CertList } from "./CertList";
import { certifications } from "@/data/certifications";

export function About() {
  return (
    <section id="sobre" className="py-20 bg-navy-2 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue/5 via-transparent to-cyan/5" />

      <div className="relative max-w-6xl mx-auto px-6">
        <SectionHeader
          preLabel="01. SOBRE MIM"
          title="Desenvolvedor com"
          highlight="Paixão"
          subtitle="Expertise em arquiteturas escaláveis e tecnologias modernas"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 text-text"
          >
            <p>
              Com mais de 6 anos de experiência no desenvolvimento de software,
              tenho construído uma carreira sólida em arquiteturas escaláveis e
              soluções de alta performance. Minha jornada começou com a paixão
              por resolver problemas complexos através do código.
            </p>

            <p>
              Especializado em desenvolvimento full-stack, domino tanto o
              ecossistema JavaScript moderno (React, Node.js, TypeScript) quanto
              linguagens backend robustas como Java e PHP. Minha experiência
              abrange desde sistemas imobiliários complexos até plataformas
              educacionais de larga escala.
            </p>

            <p>
              Sou entusiasta de DevOps e arquitetura de microserviços, com
              profundo conhecimento em containerização com Docker e orquestração
              com Kubernetes. Acredito que código limpo, bem estruturado e
              seguindo princípios SOLID é a base para sistemas sustentáveis.
            </p>

            <p>
              Atualmente sou Senior Full-Stack Developer na Unimed Rio Preto,
              onde trabalho em projetos de transformação digital com foco em
              escalabilidade, performance e excelência técnica. Tenho paixão por
              compartilhar conhecimento e mentorizar outros desenvolvedores.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <TiltCard>
              <CertList items={certifications} />
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
