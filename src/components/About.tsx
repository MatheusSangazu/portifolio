"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { FiCode, FiCpu, FiDatabase, FiLayers } from "react-icons/fi";

const skills = [
  {
    icon: FiCode,
    title: "Core Development",
    list: "Node.js, TypeScript, Python, C#",
    desc: "Construção de APIs escaláveis e sistemas tipados de alta performance."
  },
  {
    icon: FiDatabase,
    title: "Data Engineering",
    list: "MySQL, Prisma, Redis, ETL Pipelines",
    desc: "Modelagem e orquestração de fluxos massivos de dados."
  },
  {
    icon: FiLayers,
    title: "Infrastructure",
    list: "Docker, Kubernetes, AWS, CI/CD",
    desc: "Ambientes isolados e deploy automatizado resiliente."
  }
];

export function About() {
  return (
    <section id="sobre" className="py-32 px-6 relative bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32">
          
          <div className="lg:w-1/2">
            <FadeIn direction="up">
              <div className="font-mono text-[10px] text-brand-primary mb-6 tracking-[0.4em] uppercase">
                // system_manifest.json
              </div>
              <h2 className="text-5xl md:text-7xl font-bold mb-12 tracking-tighter text-white leading-[0.9]">
                CÓDIGO QUE<br />
                <span className="text-brand-primary italic font-serif">Escala Negócios.</span>
              </h2>
            </FadeIn>

            <div className="space-y-8 text-lg text-text-muted leading-relaxed font-sans border-l border-brand-primary/20 pl-8">
              <FadeIn delay={0.2}>
                <p>
                  Atuo na <span className="text-white font-semibold underline decoration-brand-primary/30 decoration-2 underline-offset-8">engenharia de software</span> com foco em sistemas de backend e arquitetura de dados. 
                  Minha missão é traduzir regras de negócio complexas em motores eficientes, resilientes e escaláveis.
                </p>
              </FadeIn>
              
              <FadeIn delay={0.4}>
                <div className="bg-surface/30 border border-border p-8 font-mono text-sm leading-relaxed text-brand-secondary/80 rounded-sm">
                  <span className="text-brand-primary/50 block mb-2">/* logic_initialization */</span>
                  {"{"}<br />
                  &nbsp;&nbsp;"dev": "Matheus_Henrique",<br />
                  &nbsp;&nbsp;"specialty": "Backend_Architecture",<br />
                  &nbsp;&nbsp;"location": "Sergipe_Brazil",<br />
                  &nbsp;&nbsp;"experience": "+3_years"<br />
                  {"}"}
                </div>
              </FadeIn>

              <FadeIn delay={0.6}>
                <p>
                  Embora ferramentas de automação (n8n, Make) façam parte do meu arsenal, minha base é o <span className="text-white font-medium italic">desenvolvimento puro</span>. 
                  Acredito que a automação só é poderosa quando apoiada por uma base de código sólida e bem arquitetada.
                </p>
              </FadeIn>
            </div>
          </div>

          <div className="lg:w-1/2 flex flex-col justify-center gap-8">
            {skills.map((item, i) => (
              <FadeIn key={i} delay={0.8 + (i * 0.1)} direction="left">
                <div className="group relative bg-surface/20 border border-border p-8 hover:border-brand-primary/40 transition-all duration-500">
                  <div className="flex items-start gap-8">
                    <div className="p-5 bg-background border border-border group-hover:border-brand-primary/30 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.1)] transition-all duration-500">
                      <item.icon size={24} className="text-brand-primary/70 group-hover:text-brand-primary transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white mb-3 tracking-[0.2em] uppercase font-mono">
                        {item.title}
                      </h3>
                      <p className="text-[11px] text-brand-secondary/60 mb-4 font-mono tracking-wider group-hover:text-brand-secondary transition-colors">
                        {item.list}
                      </p>
                      <p className="text-sm text-text-muted leading-relaxed max-w-sm">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
