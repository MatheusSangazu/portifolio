"use client";

import { FadeIn } from "./FadeIn";
import { SectionTitle } from "./SectionTitle";
import { FiUsers, FiMessageSquare, FiStar, FiHeadphones } from "react-icons/fi";
import { TbSchool, TbTarget } from "react-icons/tb";
import type { IconType } from "react-icons";

interface SoftSkill {
  icon: IconType;
  label: string;
  description: string;
}

const softSkills: SoftSkill[] = [
  {
    icon: TbTarget,
    label: "Resolução de problemas",
    description: "Investigação e correção de problemas em aplicações e dados.",
  },
  {
    icon: FiMessageSquare,
    label: "Comunicação técnica",
    description: "Tradução de conceitos técnicos para diferentes públicos.",
  },
  {
    icon: FiUsers,
    label: "Trabalho em equipe",
    description: "Colaboração em equipes multidisciplinares de tecnologia.",
  },
  {
    icon: FiStar,
    label: "Capacidade analítica",
    description: "Leitura de regras de negócio e compreensão de processos.",
  },
  {
    icon: FiHeadphones,
    label: "Didática",
    description: "Explicação de conceitos complexos de forma acessível.",
  },
];

export function Education() {
  return (
    <section
      id="formacao"
      aria-labelledby="education-title"
      className="py-16 sm:py-24 px-6 bg-surface/30"
    >
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          id="education-title"
          title="Formação"
          subtitle="Formação acadêmica, complementos e competências demonstráveis."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <FadeIn direction="left">
            <div className="bg-surface border border-border rounded p-7 h-full">
              <div className="flex items-center gap-4 mb-8">
                <div
                  className="w-12 h-12 bg-background border border-border flex items-center justify-center shrink-0"
                  aria-hidden="true"
                >
                  <TbSchool size={24} className="text-brand-primary" />
                </div>
                <h3 className="text-lg font-bold text-white">Formação Acadêmica</h3>
              </div>

              <div className="space-y-6">
                <div className="border-l-2 border-brand-primary pl-6">
                  <h4 className="text-base font-semibold text-white">
                    Análise e Desenvolvimento de Sistemas
                  </h4>
                  <p className="text-sm text-text-muted mt-1">
                    Universidade Uninassau • 2023 – 2025
                  </p>
                </div>

                <div className="border-l-2 border-brand-primary pl-6">
                  <h4 className="text-base font-semibold text-white">
                    C# Completo — Programação Orientada a Objetos
                  </h4>
                  <p className="text-sm text-text-muted mt-1">
                    Udemy — Prof. Nelio Alves (38h) • 2025
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div className="bg-surface border border-border rounded p-7 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-12 h-12 bg-background border border-border flex items-center justify-center shrink-0"
                  aria-hidden="true"
                >
                  <FiUsers size={22} className="text-brand-primary" />
                </div>
                <h3 className="text-lg font-bold text-white">Competências</h3>
              </div>

              <p className="text-sm text-text-muted leading-relaxed mb-6">
                Além da base técnica, valorizo competências que ajudam a manter e
                evoluir sistemas em equipe.
              </p>

              <ul className="space-y-3">
                {softSkills.map((skill) => (
                  <li key={skill.label} className="flex items-start gap-3">
                    <skill.icon
                      size={18}
                      className="text-brand-primary/80 mt-0.5 shrink-0"
                      aria-hidden="true"
                    />
                    <div>
                      <span className="block text-sm font-semibold text-white">
                        {skill.label}
                      </span>
                      <span className="block text-xs text-text-muted leading-relaxed">
                        {skill.description}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
