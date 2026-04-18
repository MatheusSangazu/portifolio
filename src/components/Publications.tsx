"use client";

import { FadeIn } from "./FadeIn";
import { SectionTitle } from "./SectionTitle";
import { FiBookOpen, FiCalendar, FiUsers } from "react-icons/fi";

interface Publication {
  title: string;
  event: string;
  date: string;
  authors: string;
}

const publications: Publication[] = [
  {
    title: "Extensão em Ciência de Dados: Aprendizados e Desafios com a Computação Desplugada no Ensino Médio",
    event: "Anais da ERBASE (Regional School on Computing of Bahia, Alagoas, and Sergipe)",
    date: "Agosto, 2025",
    authors: "Alves, Matheus H. S.; Jesus, Efraim L.; Rosa, Jean C. S.",
  },
  {
    title: "Vivências, Desafios e Aprendizados na Extensão Curricular em ADS: uma análise temática de diários reflexivos",
    event: "Anais do WEI (Workshop on Computing Education)",
    date: "Julho, 2025",
    authors: "Alves, Matheus H. S.; Melo, Raphael B. M.; Rosa, Jean C. S.",
  },
];

export function Publications() {
  return (
    <section id="publicacoes" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          title="Publicações Acadêmicas"
          subtitle="Contribuições científicas na área de educação e computação."
        />

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <FadeIn key={pub.title} delay={index * 0.15}>
              <div className="group bg-surface border border-border rounded-sm p-8 hover:border-brand-primary/40 transition-all duration-500 font-mono">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-background border border-border flex items-center justify-center group-hover:border-brand-primary/30 transition-colors">
                    <FiBookOpen size={20} className="text-brand-primary" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white leading-tight mb-4 group-hover:text-brand-primary transition-colors uppercase tracking-tighter">
                      {pub.title}
                    </h3>

                    <p className="text-sm text-text-muted mb-6 font-sans italic opacity-80">{pub.event}</p>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10 text-[10px] text-brand-secondary tracking-widest uppercase">
                      <span className="flex items-center gap-2">
                        <FiCalendar size={14} className="opacity-50" />
                        {pub.date}
                      </span>
                      <span className="flex items-center gap-2">
                        <FiUsers size={14} className="opacity-50" />
                        {pub.authors}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
