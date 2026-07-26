"use client";

import { FadeIn } from "./FadeIn";
import { FiArrowRight } from "react-icons/fi";
import { services, servicesIntro, serviceContactHref } from "@/data/services";

export function Services() {
  return (
    <section
      id="servicos"
      aria-labelledby="services-title"
      className="py-16 sm:py-24 px-6 bg-background border-t border-border/50"
    >
      <div className="max-w-7xl mx-auto">
        <FadeIn direction="up">
          <div className="font-mono text-xs text-brand-primary mb-4 tracking-[0.3em] uppercase">
            Serviços
          </div>
          <h2
            id="services-title"
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-5"
          >
            Como posso ajudar
          </h2>
          <p className="text-text-muted max-w-2xl text-base leading-relaxed border-l border-brand-primary/30 pl-6">
            {servicesIntro}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.08}>
              <div className="group bg-surface border border-border p-6 hover:bg-surface-hover hover:border-brand-primary/40 transition-colors duration-300 h-full">
                <div className="w-11 h-11 bg-background border border-border flex items-center justify-center mb-5 group-hover:border-brand-primary/30 transition-colors">
                  <service.icon
                    size={20}
                    className="text-brand-primary/80 group-hover:text-brand-primary transition-colors"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="up">
          <a
            href={serviceContactHref}
            className="focus-ring inline-flex items-center gap-3 mt-10 px-6 sm:px-8 py-3.5 bg-white text-background font-semibold text-sm hover:bg-brand-primary hover:text-white transition-colors duration-300"
          >
            Conversar sobre um projeto
            <FiArrowRight aria-hidden="true" />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
