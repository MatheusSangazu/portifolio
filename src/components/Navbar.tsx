"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Automações", href: "#automacoes" },
  { label: "Contato", href: "#contato" },
];

function PokerChip() {
  return (
    <div className="relative w-9 h-9 flex items-center justify-center" title="MH://all_in">
      <svg viewBox="0 0 32 32" width="36" height="36" className="drop-shadow-[0_0_6px_rgba(249,115,22,0.3)]">
        <rect width="32" height="32" rx="3" fill="#1C1917" />
        <rect x="1" y="1" width="30" height="30" rx="3" fill="none" stroke="#F97316" strokeWidth="1.5" />
        <rect x="3" y="3" width="26" height="2" rx="0.5" fill="#F97316" opacity="0.25" />
        <rect x="3" y="27" width="26" height="2" rx="0.5" fill="#F97316" opacity="0.25" />
        <rect x="3" y="3" width="2" height="26" rx="0.5" fill="#F97316" opacity="0.25" />
        <rect x="27" y="3" width="2" height="26" rx="0.5" fill="#F97316" opacity="0.25" />
        <rect x="5" y="7" width="4" height="1" rx="0.5" fill="#FDBA74" opacity="0.12" />
        <rect x="23" y="24" width="4" height="1" rx="0.5" fill="#FDBA74" opacity="0.12" />
        <polygon points="10,9 11,9 11,13 14,13 14,9 15,9 15,22 13,22 13,15 12,15 12,22 10,22" fill="#F97316" className="animate-poker-glow" />
        <polygon points="22,11 23,9 24,11" fill="#F97316" opacity="0.7" className="animate-poker-glow" />
        <rect x="22.5" y="11" width="1" height="4" fill="#F97316" opacity="0.5" />
        <polygon points="22,16 23,18 24,16" fill="#F97316" opacity="0.7" className="animate-poker-glow" />
      </svg>
    </div>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (pathname.startsWith("/game") || pathname.startsWith("/check-facil")) return null;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 group">
          <PokerChip />
          <span className="font-mono text-sm font-bold text-white tracking-tight uppercase group-hover:text-brand-primary transition-colors duration-300">
            MH<span className="text-brand-primary">.</span>sys
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] font-mono text-text-muted hover:text-brand-primary tracking-widest uppercase transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-mono text-text-muted hover:text-brand-primary tracking-widest uppercase transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
