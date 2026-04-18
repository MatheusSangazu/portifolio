"use client";

import { FadeIn } from "./FadeIn";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <FadeIn className="mb-16">
      <div className="font-mono text-[10px] text-brand-primary tracking-[0.4em] uppercase mb-4">
        // section.loaded
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4 font-mono uppercase">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-muted text-base max-w-2xl leading-relaxed border-l border-brand-primary/20 pl-6 font-sans italic">
          {subtitle}
        </p>
      )}
    </FadeIn>
  );
}
