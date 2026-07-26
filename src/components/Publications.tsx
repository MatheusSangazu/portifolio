"use client";

import { FadeIn } from "./FadeIn";
import { SectionTitle } from "./SectionTitle";
import { FiBookOpen, FiCalendar, FiUsers, FiExternalLink } from "react-icons/fi";

interface Publication {
  title: string;
  event: string;
  date: string;
  authors: string;
  link?: string;
}

const publications: Publication[] = [
  {
    title:
      "Extensão em Ciência de Dados: Aprendizados e Desafios com a Computação Desplugada no Ensino Médio",
    event:
      "Anais da ERBASE (Regional School on Computing of Bahia, Alagoas, and Sergipe)",
    date: "Agosto, 2025",
    authors: "Alves, Matheus H. S.; Jesus, Efraim L.; Rosa, Jean C. S.",
    link: "https://doi.org/10.5753/erbase.2025.13694",
  },
  {
    title:
      "Vivências, Desafios e Aprendizados na Extensão Curricular em ADS: uma análise temática de diários reflexivos",
    event: "Anais do WEI (Workshop on Computing Education)",
    date: "Julho, 2025",
    authors: "Alves, Matheus H. S.; Melo, Raphael B. M.; Rosa, Jean C. S.",
    link: "https://doi.org/10.5753/wei.2025.8216",
  },
];

function PublicationCard({ pub }: { pub: Publication }) {
  const common = "group bg-surface border border-border rounded p-5 sm:p-7 hover:border-brand-primary/40 transition-colors duration-300";
  const inner = (
    <div className="flex items-start gap-4 sm:gap-6">
      <div
        className="flex-shrink-0 w-12 h-12 bg-background border border-border flex items-center justify-center group-hover:border-brand-primary/30 transition-colors"
        aria-hidden="true"
      >
        <FiBookOpen size={20} className="text-brand-primary" />
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="text-sm sm:text-base font-bold text-white leading-snug mb-3 group-hover:text-brand-primary transition-colors">
          {pub.title}
          {pub.link && (
            <FiExternalLink
              size={14}
              className="opacity-0 group-hover:opacity-60 transition-opacity inline-block ml-2 -mt-1"
              aria-hidden="true"
            />
          )}
        </h3>

        <p className="text-sm text-text-muted mb-5 italic">{pub.event}</p>

        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 text-[11px] text-text-muted tracking-wide uppercase">
          <span className="flex items-center gap-2">
            <FiCalendar size={13} className="opacity-70" aria-hidden="true" />
            {pub.date}
          </span>
          <span className="flex items-center gap-2">
            <FiUsers size={13} className="opacity-70" aria-hidden="true" />
            {pub.authors}
          </span>
        </div>
      </div>
    </div>
  );

  if (pub.link) {
    return (
      <a
        href={pub.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Abrir publicação: ${pub.title}`}
        className={`focus-ring block ${common}`}
      >
        {inner}
      </a>
    );
  }
  return <div className={common}>{inner}</div>;
}

export function Publications() {
  return (
    <section
      id="publicacoes"
      aria-labelledby="publications-title"
      className="py-16 sm:py-24 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          id="publications-title"
          title="Publicações Acadêmicas"
          subtitle="Contribuições científicas na área de educação e computação."
        />

        <div className="space-y-6">
          {publications.map((pub) => (
            <FadeIn key={pub.title}>
              <PublicationCard pub={pub} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
