"use client";

import { FadeIn } from "./FadeIn";
import { SectionTitle } from "./SectionTitle";
import { FiHeart, FiMessageSquare, FiUsers, FiStar, FiHeadphones } from "react-icons/fi";
import { TbDeviceGamepad2, TbSchool, TbTarget } from "react-icons/tb";

const skills = [
  {
    icon: TbTarget,
    label: "Resolução de Problemas",
    description: "Abordagem analítica para traduzir requisitos de negócio em soluções técnicas eficientes.",
  },
  {
    icon: FiUsers,
    label: "Trabalho em Equipe",
    description: "Experiência colaborativa em equipes multidisciplinares de tecnologia e negócios.",
  },
  {
    icon: FiStar,
    label: "Liderança Técnica",
    description: "Gestão de prioridades, alinhamento de expectativas e coordenação de entregas em equipe.",
  },
  {
    icon: FiHeadphones,
    label: "Suporte ao Cliente",
    description: "Atuação direta com stakeholders em reuniões, mapeamento de dores e entrega de valor.",
  },
  {
    icon: FiMessageSquare,
    label: "Comunicação",
    description: "Capacidade de traduzir conceitos técnicos para stakeholders não-técnicos.",
  },
  {
    icon: FiHeart,
    label: "Didática & Ensino",
    description: "Professor de lógica de programação para crianças, traduzindo conceitos complexos de forma acessível.",
  },
];

export function Education() {
  return (
    <section id="educacao" className="py-24 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Educação & Soft Skills"
          subtitle="Formação acadêmica e habilidades que complementam a expertise técnica."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FadeIn direction="left">
            <div className="bg-surface border border-border rounded-sm p-8 font-mono h-full flex flex-col">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-background border border-border flex items-center justify-center shrink-0">
                  <TbSchool size={24} className="text-brand-primary" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-tighter">Formação Acadêmica</h3>
              </div>

              <div className="flex-1 flex flex-col justify-center">
                <div className="border-l-2 border-brand-primary pl-6">
                  <h4 className="text-base font-semibold text-white uppercase tracking-tight">
                    Análise e Desenvolvimento de Sistemas
                  </h4>
                  <p className="text-sm text-text-muted mt-1 font-sans italic">
                    Universidade Uninassau • 2023 - 2025
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div className="bg-surface border border-border rounded-sm p-8 font-mono h-full flex flex-col">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-background border border-border flex items-center justify-center shrink-0">
                  <TbDeviceGamepad2 size={24} className="text-brand-primary" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-tighter">4Growthinhos</h3>
              </div>

              <div className="flex-1 flex flex-col justify-center">
                <p className="text-sm text-text-muted leading-relaxed font-sans italic opacity-80">
                  Professor de lógica de programação para crianças com foco em
                  didática e criação de jogos usando GameMaker e Construct. Tradução
                  de conceitos técnicos complexos de forma acessível e divertida.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="mt-20">
          <FadeIn>
            <h3 className="text-xs font-mono font-bold text-brand-primary text-center mb-12 uppercase tracking-[0.4em]">
              // core.soft_skills
            </h3>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <FadeIn key={skill.label} delay={index * 0.1}>
                <div className="bg-surface border border-border rounded-sm p-8 text-center hover:border-brand-primary/40 transition-all duration-500 group h-full flex flex-col items-center">
                  <div className="w-14 h-14 bg-background border border-border flex items-center justify-center mx-auto mb-6 group-hover:border-brand-primary/30 transition-colors shrink-0">
                    <skill.icon size={24} className="text-brand-primary/70 group-hover:text-brand-primary transition-colors" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-3 uppercase tracking-widest font-mono">
                    {skill.label}
                  </h4>
                  <p className="text-xs text-text-muted leading-relaxed font-sans opacity-80 flex-1">
                    {skill.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
