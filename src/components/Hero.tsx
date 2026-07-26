"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowDown, FiMail } from "react-icons/fi";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative min-h-screen flex items-center justify-center px-6 pt-28 pb-16 overflow-hidden bg-background"
    >
      <div className="absolute inset-0 tech-grid pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-mono text-brand-primary mb-6 flex items-center gap-3"
            >
              <span className="w-8 h-[1px] bg-brand-primary" aria-hidden="true" />
              <span className="text-[11px] md:text-xs tracking-[0.3em] uppercase">
                {profile.hero.label}
              </span>
            </motion.div>

            <motion.h1
              id="hero-title"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-white mb-8"
            >
              Desenvolvedor Full Stack
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                e Analista de Sistemas
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-base md:text-lg text-text-muted max-w-2xl leading-relaxed font-sans border-l-2 border-brand-primary/40 pl-6 mb-8"
            >
              {profile.hero.description}
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap gap-x-6 gap-y-2 mb-10"
              aria-label="Competências principais"
            >
              {profile.hero.competencies.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-foreground/90 font-mono"
                >
                  <span className="w-1.5 h-1.5 bg-brand-primary rounded-full" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projetos"
                className="focus-ring inline-flex items-center gap-3 px-6 sm:px-8 py-3.5 bg-white text-background font-semibold text-sm hover:bg-brand-primary hover:text-white transition-colors duration-300"
              >
                Ver projetos
                <FiArrowDown className="group-hover:translate-y-1 transition-transform" aria-hidden="true" />
              </a>
              <a
                href="#contato"
                className="focus-ring inline-flex items-center gap-3 px-6 sm:px-8 py-3.5 border border-border text-white font-semibold text-sm hover:border-brand-primary transition-colors duration-300"
              >
                <FiMail aria-hidden="true" />
                Entrar em contato
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="relative w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-[28rem]"
            >
              <div
                className="absolute inset-0 border border-brand-primary/10 translate-x-4 translate-y-4 -z-10"
                aria-hidden="true"
              />
              <div className="w-full h-full bg-surface border border-border overflow-hidden relative group shadow-2xl">
                <Image
                  src={profile.photo}
                  alt="Foto de Matheus Henrique"
                  fill
                  sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, 288px"
                  className="object-cover grayscale contrast-125 brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                  priority
                />
                <div
                  className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background via-background/40 to-transparent"
                  aria-hidden="true"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
