"use client";

import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-2 border-t border-blue/10 py-8">
      <motion.div
        className="max-w-6xl mx-auto px-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="text-blue-bright font-mono text-lg mb-4">
          &lt;JV/&gt;
        </div>
        <p className="text-text text-sm">
          João Victor Duarte - Senior Full-Stack Developer
        </p>
        <p className="text-text/60 text-xs mt-4">
          Copyright © {currentYear}. Todos os direitos reservados.
        </p>
      </motion.div>
    </footer>
  );
}
