"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowDown, FiTerminal, FiCpu, FiCode, FiLayers } from "react-icons/fi";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden bg-background"
    >
      {/* Background Tech Grid */}
      <div className="absolute inset-0 tech-grid pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-mono text-brand-primary mb-6 flex items-center gap-3"
            >
              <div className="w-8 h-[1px] bg-brand-primary" />
              <span className="text-xs md:text-sm tracking-[0.3em] uppercase">Architecture // Systems // Data</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl sm:text-6xl md:text-8xl lg:text-[11rem] font-bold leading-[0.8] tracking-tighter text-white mb-10"
            >
              BACKEND<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                ENGINEER
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col md:flex-row gap-10 items-start md:items-center"
            >
              <p className="text-lg md:text-xl text-text-muted max-w-xl leading-relaxed font-sans border-l-2 border-brand-primary/30 pl-8">
                Especialista em <span className="text-white font-semibold">Backend e Arquitetura de Sistemas</span>. 
                Desenvolvo APIs robustas, integrações complexas e infraestruturas escaláveis que fazem produtos digitais funcionarem com segurança e alta performance.
              </p>
              
              <div className="flex flex-col gap-3 font-mono text-[10px] text-brand-primary/60 tracking-widest uppercase">
                <span className="flex items-center gap-3"><FiLayers /> Distributed Systems</span>
                <span className="flex items-center gap-3"><FiCode /> High Performance Code</span>
                <span className="flex items-center gap-3"><FiCpu /> API First Design</span>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="relative w-56 h-72 sm:w-64 sm:h-80 md:w-80 md:h-[30rem]"
            >
              <div className="absolute inset-0 border border-brand-primary/10 translate-x-4 translate-y-4 -z-10" />
              
              <div className="w-full h-full bg-surface border border-border overflow-hidden relative group shadow-2xl">
                <Image
                  src="/images/MatheusAlves.png"
                  alt="Matheus Henrique"
                  fill
                  className="object-cover grayscale contrast-125 brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                  priority
                />
                
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-6 left-6 right-6 font-mono">
                  <div className="text-[10px] text-brand-primary mb-1 tracking-widest uppercase flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-primary rounded-full shadow-[0_0_8px_var(--color-brand-primary)]" />
                    Available_for_Scale
                  </div>
                  <div className="text-white text-sm font-bold tracking-tighter">MH_ARCHITECT.SYS</div>
                </div>
              </div>

              <div className="absolute -left-12 bottom-20 bg-brand-primary text-white px-4 py-2 font-bold text-[10px] -rotate-90 tracking-[0.5em] hidden sm:block">
                SOFTWARE_ENG
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 sm:mt-20 flex flex-wrap gap-4 sm:gap-8 items-center"
        >
          <a
            href="#projetos"
            className="px-6 sm:px-12 py-4 sm:py-5 bg-white text-background font-bold tracking-widest uppercase text-[10px] sm:text-xs hover:bg-brand-primary transition-all duration-300 flex items-center gap-4 group"
          >
            Explore_Code <FiArrowDown className="group-hover:translate-y-1 transition-transform" />
          </a>
          <a
            href="#contato"
            className="px-6 sm:px-12 py-4 sm:py-5 border border-border text-white font-bold tracking-widest uppercase text-[10px] sm:text-xs hover:border-brand-primary transition-all duration-300"
          >
            Connect_System
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-12 right-12 hidden md:flex items-center gap-6 text-text-muted opacity-40">
        <span className="font-mono text-[9px] uppercase tracking-[0.8em]">Deployment_Ready_2026</span>
        <div className="w-24 h-[1px] bg-gradient-to-r from-text-muted to-transparent" />
      </div>
    </section>
  );
}
