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
    role: "Desenvolvedor Full Stack & IA",
    company: "4Growthbr",
    period: "Set/2024 - Atual",
    description:
      "Arquitetura e desenvolvimento de agentes de IA conversacional no WhatsApp com Evolution API, Redis como buffer de mensagens e MySQL modelado para memória de longo prazo. Construção de APIs em Node.js para coleta de métricas do Meta Ads, dashboards em Metabase e infraestrutura com 8 containers Docker em VPS.",
    stack: [
      "Node.js",
      "TypeScript",
      "MySQL",
      "Redis",
      "OpenAI API",
      "Evolution API",
      "Metabase",
      "Docker",
    ],
  },
  {
    role: "Desenvolvedor de Integrações",
    company: "4Growthbr",
    period: "Mai/2022 - Set/2024",
    description:
      "Desenvolvimento de integrações via APIs REST conectando CRMs, gateways de pagamento e plataformas de ads. Automação de fluxos de recuperação de vendas e nutrição de leads com leitura intensiva de documentação e adaptação rápida a novos sistemas.",
    stack: [
      "JavaScript",
      "Node.js",
      "Make",
      "APIs REST",
      "ActiveCampaign",
      "Meta Ads",
      "Looker Studio",
    ],
  },
  {
    role: "Desenvolvedor .NET (Aprendiz)",
    company: "Fruteb SA",
    period: "Mar/2021 - Fev/2022",
    description:
      "Desenvolvimento em C#/.NET de soluções para processamento automatizado de notas fiscais XML, com integração ao SQL Server para armazenamento e consulta de dados fiscais.",
    stack: ["C#", ".NET", "SQL Server", "Windows Forms"],
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
