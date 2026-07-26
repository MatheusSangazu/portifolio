"use client";

import { FadeIn } from "./FadeIn";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  /** ID usado para associar com aria-labelledby na seção pai. */
  id?: string;
}

export function SectionTitle({ title, subtitle, id }: SectionTitleProps) {
  return (
    <FadeIn className="mb-12 sm:mb-16">
      <div className="font-mono text-xs text-brand-primary tracking-[0.3em] uppercase mb-4">
        Seção
      </div>
      <h2
        id={id}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-muted text-base max-w-2xl leading-relaxed border-l border-brand-primary/30 pl-6">
          {subtitle}
        </p>
      )}
    </FadeIn>
  );
}
