"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { FiExternalLink, FiGithub, FiTerminal, FiChevronRight, FiBookOpen } from "react-icons/fi";

interface Project {
  title: string;
  description: string;
  stack: string[];
  github?: string;
  live?: string;
  caseStudy?: string;
  id: string;
}

const projects: Project[] = [
  {
    id: "01",
    title: "Torrinco",
    description:
      "Engine de processamento de linguagem natural (NLP) para gestão financeira via WhatsApp. Transcreve áudios, processa boletos via OCR e orquestra registros em DB.",
    stack: ["Node.js", "TypeScript", "Prisma", "OpenAI", "Evolution API"],
    github: "https://github.com/MatheusSangazu/Torrinco",
  },
  {
    id: "02",
    title: "BeTalent Payment",
    description:
      "Core API multi-gateway com arquitetura baseada em Adapter Pattern. Implementação rigorosa de TDD e Fallback Automático para alta disponibilidade.",
    stack: ["Node.js", "AdonisJS", "MySQL", "TDD", "Adapter Pattern"],
    github: "https://github.com/MatheusSangazu/betalent-payment-api",
  },
  {
    id: "03",
    title: "Canivete Suíço",
    description:
      "Kit de ferramentas de engenharia de dados para higienização massiva de leads. Processamento assíncrono de arquivos e automação de pipelines de mídia.",
    stack: ["Python", "Streamlit", "Pandas", "Docker", "FFmpeg"],
    github: "https://github.com/MatheusSangazu/formatador",
    live: "https://formatador.forjacorp.com/",
  },
  {
    id: "04",
    title: "Check Fácil",
    description:
      "Plataforma PWA para gestão de eventos infantis que une segurança e captação de leads. Desenvolvida em monorepo, a solução automatiza o check-in em tempo real, gerencia convidados e integra cronogramas diretamente com o Google Agenda.",
    stack: ["Node.js", "Express", "Sequelize", "MySQL", "JWT"],
    github: "https://github.com/MatheusSangazu/check-facil-api",
    caseStudy: "/check-facil",
  },
  {
    id: "05",
    title: "Ads Data Pipeline",
    description:
      "Middleware ETL de alto rendimento. Orquestração de métricas do Meta Ads com persistência em MySQL e infraestrutura em K3s.",
    stack: ["Node.js", "TypeScript", "MySQL", "K3s", "Docker"],
    github: "https://github.com/MatheusSangazu/growth-ads-data-pipeline",
  },
  {
    id: "06",
    title: "CLIHC 2026",
    description:
      "Arquitetura frontend para conferência internacional. Implementação de i18n complexo e deploy automatizado via GitHub Actions.",
    stack: ["Vue.js", "JavaScript", "i18n", "GitHub Pages"],
    github: "https://github.com/LAIHC-org/brazil.clihc2026",
    live: "https://clihc2026.laihc.org/pt/",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <FadeIn delay={index * 0.1} direction="up">
      <div className="group relative bg-surface border border-border p-5 sm:p-8 hover:bg-surface-hover transition-all duration-300 h-full flex flex-col font-mono">
        <div className="flex justify-between items-start mb-12">
          <span className="text-brand-primary text-2xl font-bold opacity-20 group-hover:opacity-100 transition-opacity">
            {project.id}
          </span>
          <div className="flex gap-4">
            {project.github && (
              <a href={project.github} target="_blank" className="text-text-muted hover:text-brand-primary transition-colors">
                <FiGithub size={20} />
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" className="text-text-muted hover:text-brand-primary transition-colors">
                <FiExternalLink size={20} />
              </a>
            )}
            {project.caseStudy && (
              <a href={project.caseStudy} className="text-text-muted hover:text-brand-primary transition-colors">
                <FiBookOpen size={20} />
              </a>
            )}
          </div>
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-bold mb-4 text-white tracking-tighter flex items-center gap-2 group-hover:text-brand-primary transition-colors">
            <FiTerminal className="text-xs opacity-30" /> {project.title.toUpperCase()}
          </h3>
          <p className="text-text-muted text-xs leading-relaxed mb-8 font-sans">
            {project.description}
          </p>
        </div>

        <div className="mt-auto space-y-4">
          <div className="flex flex-wrap gap-x-4 gap-y-2 opacity-40 group-hover:opacity-70 transition-opacity">
            {project.stack.map((tech) => (
              <span key={tech} className="text-[10px] uppercase tracking-widest text-brand-secondary">
                {tech}
              </span>
            ))}
          </div>
          <div className="pt-4 border-t border-border flex justify-between items-center text-[10px] tracking-widest uppercase text-text-muted">
            <span>REPOSITORY_INFO</span>
            <FiChevronRight className="group-hover:translate-x-2 transition-transform group-hover:text-brand-primary" />
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export function Projects() {
  return (
    <section id="projetos" className="py-16 sm:py-24 px-6 bg-background border-t border-border relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-12 sm:mb-20">
          <FadeIn direction="up">
            <div className="font-mono text-xs text-brand-primary mb-4 tracking-[0.3em] uppercase">
              // git.log --oneline
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter mb-6 sm:mb-8 text-white">
              REPOSITÓRIOS<br />
              <span className="text-brand-primary italic font-serif text-[0.8em]">Selecionados.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-text-muted max-w-xl text-lg leading-relaxed font-sans">
              Projetos focados em engenharia de backend, sistemas distribuídos e arquitetura de software de alta performance.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
