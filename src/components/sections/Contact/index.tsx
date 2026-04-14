"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactCard } from "./ContactCard";
import { contactItems } from "@/data/contact";

export function Contact() {
  return (
    <section id="contato" className="py-20 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue/5 via-transparent to-cyan/5" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-1 h-6 bg-gradient-to-b from-blue to-cyan" />
            <span className="text-xs font-mono text-blue-bright tracking-wider">
              04. VAMOS CONVERSAR
            </span>
            <div className="w-1 h-6 bg-gradient-to-b from-cyan to-blue" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Pronto para o próximo
            <br />
            <span className="bg-gradient-to-r from-blue to-cyan bg-clip-text text-transparent">
              Desafio?
            </span>
          </h2>

          <p className="text-text text-lg max-w-2xl mx-auto">
            Tenho sempre interesse em ouvir sobre novos projetos e
            oportunidades. Sinta-se livre para me contactar usando qualquer um
            dos canais abaixo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactItems.map((item) => (
            <ContactCard key={item.id} item={item} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            variant="primary"
            size="lg"
            href="mailto:jv.duarte.viana@gmail.com"
          >
            Enviar email direto
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
