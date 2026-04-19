"use client";

import { FadeIn } from "./FadeIn";
import { SectionTitle } from "./SectionTitle";
import { FiBriefcase } from "react-icons/fi";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  stack: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Responsável Técnico de Automação & IA",
    company: "4Growthbr",
    period: "Set/2024 - Atual",
    description:
      "Desenvolvimento de agentes de Inteligência Artificial para atendimento dinâmico no WhatsApp, integrações complexas de marketing, gestão de servidores VPS e criação de dashboards.",
    stack: [
      "JavaScript",
      "Node.js",
      "MySQL",
      "n8n",
      "OpenAI API",
      "Evolution API",
      "Metabase",
      "Docker",
    ],
  },
  {
    role: "Analista de Integrações e Automação",
    company: "4Growthbr",
    period: "Mai/2022 - Set/2024",
    description:
      "Criação de fluxos automatizados unindo código e low-code para recuperação de vendas e nutrição de leads. Conexão entre CRMs, Gateways de Pagamento e Ads via APIs REST.",
    stack: [
      "JavaScript",
      "Make",
      "ActiveCampaign",
      "Looker Studio",
      "APIs REST",
    ],
  },
  {
    role: "Desenvolvedor Jovem Aprendiz",
    company: "Fruteb SA",
    period: "Mar/2021 - Fev/2022",
    description:
      "Criação de programas voltados para busca e processamento automatizado de arquivos XML.",
    stack: ["C#", ".NET", "SQL Server", "OpenGL"],
  },
];

function TimelineItem({
  experience,
  index,
}: {
  experience: ExperienceItem;
  index: number;
}) {
  const isLast = index === experiences.length - 1;

  return (
    <FadeIn delay={index * 0.15} direction="left">
      <div className="relative flex gap-6 pb-12">
        {!isLast && (
          <div className="absolute left-5 top-12 w-px h-[calc(100%-3rem)] bg-border" />
        )}

        <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-brand-primary/10 border-2 border-brand-primary flex items-center justify-center">
          <FiBriefcase size={16} className="text-brand-primary" />
        </div>

        <div className="flex-1 pt-0.5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
            <div>
              <h3 className="text-lg font-bold text-foreground font-mono uppercase tracking-tighter">
                {experience.role}
              </h3>
              <p className="text-brand-primary text-sm font-medium font-mono tracking-widest uppercase opacity-80">
                {experience.company}
              </p>
            </div>
            <span className="text-xs font-mono text-text-muted bg-surface border border-border px-3 py-1 rounded-full w-fit">
              {experience.period}
            </span>
          </div>

          <p className="text-text-muted text-sm leading-relaxed mb-3">
            {experience.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {experience.stack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 text-xs font-medium bg-surface border border-border text-text-muted rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export function Experience() {
  return (
    <section id="experiencia" className="py-16 sm:py-24 px-6 bg-surface/30">
      <div className="max-w-3xl mx-auto">
        <SectionTitle
          title="Experiência"
          subtitle="Trajetória profissional conectando código e resultados de negócio."
        />

        <div className="relative">
          {experiences.map((experience, index) => (
            <TimelineItem
              key={`${experience.company}-${experience.period}`}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
