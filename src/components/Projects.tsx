"use client";

import { FadeIn } from "./FadeIn";
import { FiExternalLink, FiGithub, FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import { featuredProjects, otherProjects, type Project } from "@/data/projects";

const statusLabelColor: Record<string, string> = {
  "Em desenvolvimento": "text-brand-secondary border-brand-secondary/40",
  "Projeto funcional": "text-emerald-400 border-emerald-500/40",
  "Projeto colaborativo": "text-sky-400 border-sky-500/40",
  "Projeto de estudo": "text-text-muted border-border",
  "MVP de estudo": "text-amber-400 border-amber-500/40",
};

function StatusBadge({ status }: { status: Project["status"] }) {
  const color = statusLabelColor[status] ?? "text-text-muted border-border";
  return (
    <span
      className={`inline-block text-[10px] font-mono px-2 py-0.5 border bg-surface/40 uppercase tracking-wider ${color}`}
    >
      {status}
    </span>
  );
}

function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <FadeIn direction="up">
      <Link
        href={`/projetos/${project.slug}`}
        className="focus-ring group relative block bg-surface border border-border p-6 sm:p-8 hover:bg-surface-hover transition-colors duration-300 h-full"
      >
        <div className="flex justify-between items-start gap-4 mb-6">
          <div>
            <StatusBadge status={project.status} />
            <h3 className="text-xl sm:text-2xl font-bold mt-3 text-white group-hover:text-brand-primary transition-colors">
              {project.title}
            </h3>
          </div>
          <FiArrowRight
            className="text-text-muted group-hover:text-brand-primary group-hover:translate-x-1 transition-all shrink-0"
            aria-hidden="true"
          />
        </div>

        <p className="text-text-muted text-sm leading-relaxed mb-6">
          {project.summary}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.slice(0, 6).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-[11px] bg-background border border-border text-text-muted rounded"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 6 && (
            <span className="px-2 py-0.5 text-[11px] text-text-muted">
              +{project.stack.length - 6}
            </span>
          )}
        </div>

        <div className="flex items-center gap-4 text-text-muted group-hover:text-brand-primary transition-colors text-sm">
          <span>Ver detalhes</span>
        </div>
      </Link>
    </FadeIn>
  );
}

function OtherProjectCard({ project }: { project: Project }) {
  return (
    <FadeIn direction="up">
      <div className="group relative bg-surface border border-border p-5 sm:p-6 hover:bg-surface-hover transition-colors duration-300 h-full flex flex-col">
        <div className="flex justify-between items-start gap-4 mb-4">
          <div>
            <StatusBadge status={project.status} />
            <h3 className="text-base sm:text-lg font-bold mt-3 text-white group-hover:text-brand-primary transition-colors">
              {project.title}
            </h3>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Repositório do GitHub de ${project.title}`}
                className="focus-ring text-text-muted hover:text-brand-primary transition-colors"
              >
                <FiGithub size={18} aria-hidden="true" />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abrir projeto ${project.title}`}
                className="focus-ring text-text-muted hover:text-brand-primary transition-colors"
              >
                <FiExternalLink size={18} aria-hidden="true" />
              </a>
            )}
          </div>
        </div>

        <p className="text-text-muted text-xs sm:text-sm leading-relaxed mb-4 flex-1">
          {project.summary}
        </p>

        <div className="flex flex-wrap gap-x-3 gap-y-1 mb-4">
          {project.stack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="text-[11px] text-text-muted/80 font-mono"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          href={`/projetos/${project.slug}`}
          className="focus-ring inline-flex items-center gap-2 text-xs text-brand-primary hover:text-brand-secondary transition-colors w-fit"
        >
          Ver detalhes
          <FiArrowRight aria-hidden="true" />
        </Link>
      </div>
    </FadeIn>
  );
}

export function Projects() {
  return (
    <section
      id="projetos"
      aria-labelledby="projects-title"
      className="py-16 sm:py-24 px-6 bg-background border-t border-border"
    >
      <div className="max-w-7xl mx-auto">
        <FadeIn direction="up">
          <div className="font-mono text-xs text-brand-primary mb-4 tracking-[0.3em] uppercase">
            Portfólio
          </div>
          <h2
            id="projects-title"
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white"
          >
            Projetos em destaque
          </h2>
          <p className="text-text-muted max-w-2xl text-base leading-relaxed mb-12">
            Uma seleção de aplicações, sistemas e ferramentas que desenvolvi ou
            contribuí, com foco em desenvolvimento full stack e análise de sistemas.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {featuredProjects.map((project) => (
            <FeaturedProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {otherProjects.length > 0 && (
          <>
            <FadeIn direction="up">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mt-16 sm:mt-24 mb-8">
                Outros projetos
              </h3>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {otherProjects.map((project) => (
                <OtherProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
