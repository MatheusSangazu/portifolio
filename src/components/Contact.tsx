"use client";

import { FadeIn } from "./FadeIn";
import { FiGithub, FiLinkedin, FiMail, FiChevronRight } from "react-icons/fi";
import Link from "next/link";
import { profile } from "@/data/profile";

const contactLinks = [
  {
    icon: FiMail,
    label: "E-mail",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: profile.linkedinHandle,
    href: profile.linkedin,
  },
  {
    icon: FiGithub,
    label: "GitHub",
    value: profile.githubHandle,
    href: profile.github,
  },
];

export function Contact() {
  return (
    <section
      id="contato"
      aria-labelledby="contact-title"
      className="py-16 sm:py-28 px-6 bg-background border-t border-border relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          <FadeIn direction="right">
            <div>
              <div className="font-mono text-xs text-brand-primary mb-6 tracking-[0.3em] uppercase">
                Contato
              </div>
              <h2
                id="contact-title"
                className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white leading-[1.05]"
              >
                Vamos conversar
              </h2>
              <p className="text-text-muted text-base sm:text-lg max-w-md leading-relaxed border-l border-brand-primary/30 pl-6">
                Estou aberto a conversar sobre oportunidades em Desenvolvimento de
                Software e Análise de Sistemas, além de projetos pontuais para
                empresas.
              </p>
            </div>
          </FadeIn>

          <div className="flex flex-col gap-4">
            {contactLinks.map((link, i) => (
              <FadeIn key={link.label} delay={0.1 + i * 0.08} direction="left">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${link.label}: ${link.value}`}
                  className="focus-ring group flex items-center justify-between p-5 sm:p-7 bg-surface border border-border hover:border-brand-primary/40 transition-colors duration-300"
                >
                  <div className="flex items-center gap-5">
                    <div
                      className="p-4 bg-background border border-border group-hover:border-brand-primary/30 transition-colors duration-300"
                      aria-hidden="true"
                    >
                      <link.icon
                        size={22}
                        className="text-brand-primary/80 group-hover:text-brand-primary transition-colors"
                      />
                    </div>
                    <div>
                      <span className="block text-[11px] text-text-muted tracking-widest uppercase mb-1">
                        {link.label}
                      </span>
                      <span className="text-sm md:text-base text-white group-hover:text-brand-primary transition-colors block">
                        {link.value}
                      </span>
                    </div>
                  </div>
                  <FiChevronRight
                    className="text-brand-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300"
                    aria-hidden="true"
                  />
                </a>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Rodapé integrado. */}
        <div className="mt-16 sm:mt-24 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-text-muted tracking-wider uppercase font-mono">
          <div className="flex items-center gap-3">
            <span
              className="w-1.5 h-1.5 bg-brand-primary rounded-full"
              aria-hidden="true"
            />
            {profile.name} — {profile.role}
          </div>
          <div>© {new Date().getFullYear()} {profile.name}</div>
          <div className="flex gap-6">
            <Link
              href="/game"
              prefetch={false}
              className="focus-ring hover:text-brand-primary transition-colors"
              aria-label="Abrir jogo Asteroid Defense (easter egg)"
            >
              Easter egg
            </Link>
            <a
              href="#hero"
              className="focus-ring hover:text-brand-primary transition-colors"
            >
              Voltar ao topo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
