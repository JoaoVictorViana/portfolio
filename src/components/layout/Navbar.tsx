"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Tecnologias", href: "#tecnologias" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-navy-2/80 backdrop-blur-md border-b border-blue/10"
          : "bg-transparent",
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-mono font-bold text-blue-bright">
          &lt;JV/&gt;
        </a>

        <div className="flex items-center gap-1 md:gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm text-text hover:text-white transition-colors duration-200 font-mono"
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contato"
            className="ml-4 px-4 py-2 text-sm font-mono bg-blue/10 text-blue-bright border border-blue/30 rounded hover:bg-blue/20 transition-colors duration-200"
          >
            Contato()
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
