import Link from "next/link";
import Image from "next/image";
import { FiArrowLeft, FiGithub, FiExternalLink, FiAlertCircle } from "react-icons/fi";
import { getProjectBySlug, projects } from "@/data/projects";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { profile } from "@/data/profile";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projetos/${project.slug}` },
    openGraph: {
      type: "article",
      url: `${profile.siteUrl}/projetos/${project.slug}`,
      title: project.title,
      description: project.summary,
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.summary,
    },
  };
}

function ProjectVisual({ title, status }: { title: string; status: string }) {
  const initials = title
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div
      aria-hidden="true"
      className="relative w-full aspect-[16/7] bg-surface border border-border overflow-hidden flex items-center justify-center"
    >
      <div className="absolute inset-0 tech-grid opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-dark/5" />
      <div className="relative z-10 flex flex-col items-center gap-4 text-center px-6">
        <div className="w-20 h-20 border-2 border-brand-primary/40 flex items-center justify-center text-brand-primary text-2xl font-bold font-mono">
          {initials}
        </div>
        <span className="text-[11px] font-mono text-text-muted tracking-widest uppercase">
          {status}
        </span>
      </div>
    </div>
  );
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${project.title} — Projeto de ${profile.name}`,
    itemListElement: [
      {
        "@type": "CreativeWork",
        name: project.title,
        description: project.summary,
        url: `${profile.siteUrl}/projetos/${project.slug}`,
      },
    ],
  };

  return (
    <article className="min-h-screen bg-background text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <div className="max-w-5xl mx-auto px-6 pt-28 pb-20">
        <Link
          href="/#projetos"
          className="focus-ring inline-flex items-center gap-2 text-xs font-mono text-text-muted tracking-widest uppercase hover:text-brand-primary transition-colors mb-10"
        >
          <FiArrowLeft aria-hidden="true" />
          Voltar aos projetos
        </Link>

        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-[11px] font-mono text-brand-secondary border border-brand-secondary/40 bg-surface/40 px-2 py-0.5 uppercase tracking-wider">
              {project.status}
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.05] mb-5">
            {project.title}
          </h1>
          <p className="text-text-muted text-base sm:text-lg max-w-3xl leading-relaxed">
            {project.summary}
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-8">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex items-center gap-2 px-5 py-2.5 bg-white text-background font-semibold text-sm hover:bg-brand-primary hover:text-white transition-colors"
              >
                <FiGithub aria-hidden="true" />
                GitHub
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex items-center gap-2 px-5 py-2.5 border border-border text-white font-semibold text-sm hover:border-brand-primary transition-colors"
              >
                <FiExternalLink aria-hidden="true" />
                Ver projeto
              </a>
            )}
          </div>
        </header>

        {project.image ? (
          <Image
            src={project.image}
            alt={`Imagem do projeto ${project.title}`}
            width={1280}
            height={560}
            sizes="(max-width: 768px) 100vw, 960px"
            className="w-full aspect-[16/7] object-cover border border-border mb-12"
          />
        ) : (
          <div className="mb-12">
            <ProjectVisual title={project.title} status={project.status} />
          </div>
        )}

        {project.notice && (
          <div className="bg-brand-primary/5 border border-brand-primary/25 p-5 mb-10 flex items-start gap-3">
            <FiAlertCircle className="text-brand-primary mt-0.5 shrink-0" aria-hidden="true" />
            <p className="text-sm text-foreground/90 leading-relaxed">{project.notice}</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          <section>
            <h2 className="text-xs font-mono text-brand-primary tracking-widest uppercase mb-3">
              Contexto
            </h2>
            <p className="text-text-muted text-sm leading-relaxed">{project.context}</p>
          </section>
          <section>
            <h2 className="text-xs font-mono text-brand-primary tracking-widest uppercase mb-3">
              Minha participação
            </h2>
            <p className="text-text-muted text-sm leading-relaxed">{project.role}</p>
          </section>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          <section>
            <h2 className="text-xs font-mono text-brand-primary tracking-widest uppercase mb-3">
              Problema
            </h2>
            <p className="text-text-muted text-sm leading-relaxed">{project.problem}</p>
          </section>
          <section>
            <h2 className="text-xs font-mono text-brand-primary tracking-widest uppercase mb-3">
              Solução
            </h2>
            <p className="text-text-muted text-sm leading-relaxed">{project.solution}</p>
          </section>
        </div>

        <section className="mb-12">
          <h2 className="text-xs font-mono text-brand-primary tracking-widest uppercase mb-4">
            Funcionalidades
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.features.map((f) => (
              <li
                key={f}
                className="flex items-start gap-3 text-sm text-text-muted bg-surface border border-border p-4"
              >
                <span className="w-1.5 h-1.5 mt-1.5 bg-brand-primary rounded-full shrink-0" aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-xs font-mono text-brand-primary tracking-widest uppercase mb-4">
            Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs bg-surface border border-border text-text-muted rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          <section>
            <h2 className="text-xs font-mono text-brand-primary tracking-widest uppercase mb-3">
              Desafios
            </h2>
            <ul className="space-y-2">
              {project.challenges.map((c) => (
                <li key={c} className="text-sm text-text-muted leading-relaxed flex gap-2">
                  <span className="text-brand-primary/70" aria-hidden="true">—</span>
                  {c}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="text-xs font-mono text-brand-primary tracking-widest uppercase mb-3">
              Aprendizados
            </h2>
            <ul className="space-y-2">
              {project.learnings.map((l) => (
                <li key={l} className="text-sm text-text-muted leading-relaxed flex gap-2">
                  <span className="text-brand-primary/70" aria-hidden="true">—</span>
                  {l}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-text-muted">Quer conversar sobre este projeto?</p>
          <Link
            href="/#contato"
            className="focus-ring inline-flex items-center gap-2 px-5 py-2.5 border border-border text-white font-semibold text-sm hover:border-brand-primary transition-colors"
          >
            Entrar em contato
          </Link>
        </div>
      </div>
    </article>
  );
}
