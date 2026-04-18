"use client";

import { FadeIn } from "./FadeIn";
import { FiGithub, FiLinkedin, FiMail, FiTerminal, FiChevronRight } from "react-icons/fi";

const contactLinks = [
  {
    icon: FiMail,
    label: "EMAIL",
    value: "matheussalvespro@gmail.com",
    href: "mailto:matheussalvespro@gmail.com",
  },
  {
    icon: FiLinkedin,
    label: "LINKEDIN",
    value: "mths-alves",
    href: "https://www.linkedin.com/in/mths-alves/",
  },
  {
    icon: FiGithub,
    label: "GITHUB",
    value: "MatheusSangazu",
    href: "https://github.com/MatheusSangazu",
  },
];

export function Contact() {
  return (
    <section id="contato" className="py-32 px-6 bg-background border-t border-border relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-purple-primary/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          
          <FadeIn direction="right">
            <div>
              <div className="font-mono text-[10px] text-brand-primary mb-6 tracking-[0.4em] uppercase">
                // system.exit()
              </div>
              <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-10 uppercase text-white leading-[0.85]">
                VAMOS<br />
                <span className="text-brand-primary italic font-serif text-[0.8em]">Conversar.</span>
              </h2>
              <p className="text-text-muted text-lg max-w-md font-sans leading-relaxed border-l border-brand-primary/20 pl-8">
                Estou sempre aberto a novos desafios técnicos, parcerias em sistemas distribuídos ou apenas um café (virtual ou real).
              </p>
            </div>
          </FadeIn>

          <div className="flex flex-col gap-4">
            {contactLinks.map((link, i) => (
              <FadeIn key={i} delay={0.2 + (i * 0.1)} direction="left">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-8 bg-surface border border-border hover:border-brand-primary/40 transition-all duration-500 font-mono rounded-sm"
                >
                  <div className="flex items-center gap-6">
                    <div className="p-4 bg-background border border-border group-hover:border-brand-primary/30 transition-all duration-500">
                      <link.icon size={22} className="text-brand-primary/70 group-hover:text-brand-primary transition-colors" />
                    </div>
                    <div>
                      <span className="block text-[9px] text-text-muted tracking-widest uppercase mb-2 opacity-50 group-hover:opacity-100 transition-opacity">{link.label}</span>
                      <span className="text-sm md:text-base text-white group-hover:text-brand-primary transition-colors truncate max-w-[200px] md:max-w-none block tracking-tight">
                        {link.value}
                      </span>
                    </div>
                  </div>
                  <FiChevronRight className="text-brand-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-3 transition-all duration-500" />
                </a>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Footer Minimalista Integrado */}
        <div className="mt-32 pt-16 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-8 font-mono text-[9px] text-text-muted tracking-[0.3em] uppercase opacity-60">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-pulse shadow-[0_0_8px_var(--color-brand-primary)]" />
            READY_FOR_NEW_CHALLENGES
          </div>
          <div>
            © 2026 MATHEUS HENRIQUE // ENGINEER.LOG
          </div>
          <div className="flex gap-10">
            <a href="#hero" className="hover:text-brand-primary transition-colors duration-300">TOP.ROOT</a>
          </div>
        </div>
      </div>
    </section>
  );
}
