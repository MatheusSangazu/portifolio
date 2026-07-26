"use client";

import { FadeIn } from "./FadeIn";
import { SectionTitle } from "./SectionTitle";
import { FiBriefcase } from "react-icons/fi";
import { experiences, type ExperienceItem } from "@/data/experiences";

function TimelineItem({
  experience,
  index,
}: {
  experience: ExperienceItem;
  index: number;
}) {
  const isLast = index === experiences.length - 1;

  return (
    <FadeIn delay={index * 0.1} direction="left">
      <div className="relative flex gap-6 pb-12">
        {!isLast && (
          <div
            className="absolute left-5 top-12 w-px h-[calc(100%-3rem)] bg-border"
            aria-hidden="true"
          />
        )}

        <div
          className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-brand-primary/10 border-2 border-brand-primary flex items-center justify-center"
          aria-hidden="true"
        >
          <FiBriefcase size={16} className="text-brand-primary" />
        </div>

        <div className="flex-1 pt-0.5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
            <div>
              <h3 className="text-lg font-bold text-foreground">
                {experience.role}
              </h3>
              <p className="text-brand-primary text-sm font-medium tracking-wide opacity-90">
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
    <section
      id="experiencia"
      aria-labelledby="experience-title"
      className="py-16 sm:py-24 px-6 bg-surface/30"
    >
      <div className="max-w-3xl mx-auto">
        <SectionTitle
          id="experience-title"
          title="Experiência"
          subtitle="Trajetória profissional em desenvolvimento de software, APIs e análise de sistemas."
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
