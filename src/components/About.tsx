"use client";

import { FadeIn } from "./FadeIn";
import { FiCode, FiDatabase, FiLayers, FiCpu } from "react-icons/fi";
import type { IconType } from "react-icons";
import { profile } from "@/data/profile";

const groupIcons: Record<string, IconType> = {
  Backend: FiCode,
  Frontend: FiLayers,
  "Dados e entrega": FiDatabase,
  "Automação e IA": FiCpu,
};

export function About() {
  return (
    <section
      id="sobre"
      aria-labelledby="about-title"
      className="py-16 sm:py-28 px-6 relative bg-background border-t border-border/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          <div className="lg:w-1/2">
            <FadeIn direction="up">
              <div className="font-mono text-xs text-brand-primary mb-6 tracking-[0.3em] uppercase">
                Sobre
              </div>
              <h2
                id="about-title"
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 tracking-tight text-white leading-[1.05]"
              >
                Desenvolvimento de software
                <br />
                <span className="text-brand-primary">com visão analítica.</span>
              </h2>
            </FadeIn>

            <div className="space-y-6 text-base sm:text-lg text-text-muted leading-relaxed font-sans border-l border-brand-primary/20 pl-6">
              {profile.about.map((paragraph, i) => (
                <FadeIn key={i} delay={0.15 + i * 0.1}>
                  <p>{paragraph}</p>
                </FadeIn>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 flex flex-col justify-center gap-4 sm:gap-6">
            {profile.skillGroups.map((group, i) => {
              const Icon = groupIcons[group.title] ?? FiCode;
              return (
                <FadeIn key={group.title} delay={0.2 + i * 0.08} direction="left">
                  <div className="group bg-surface/30 border border-border p-5 sm:p-7 hover:border-brand-primary/40 transition-colors duration-300">
                    <div className="flex items-start gap-4 sm:gap-6">
                      <div className="p-4 bg-background border border-border group-hover:border-brand-primary/30 transition-colors duration-300 shrink-0">
                        <Icon size={22} className="text-brand-primary/80 group-hover:text-brand-primary transition-colors" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-white mb-3 tracking-widest uppercase font-mono">
                          {group.title}
                        </h3>
                        <p className="text-sm text-text-muted leading-relaxed">
                          {group.items.join(" · ")}
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
