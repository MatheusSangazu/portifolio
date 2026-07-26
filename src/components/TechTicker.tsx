"use client";

const technologies = [
  "C#",
  ".NET",
  "ASP.NET Core",
  "Entity Framework",
  "Node.js",
  "Next.js",
  "React",
  "TypeScript",
  "Express",
  "PostgreSQL",
  "MySQL",
  "Prisma",
  "Redis",
  "Docker",
  "Git",
  "n8n",
  "Evolution API",
];

function TechItem({ tech }: { tech: string }) {
  return (
    <span className="flex items-center gap-3 px-6 py-3 font-mono text-sm tracking-widest uppercase whitespace-nowrap select-none text-text-muted">
      <span className="w-1 h-1 rounded-full bg-brand-primary/60" aria-hidden="true" />
      {tech}
    </span>
  );
}

export function TechTicker() {
  const doubled = [...technologies, ...technologies];

  return (
    <section
      className="py-10 sm:py-14 border-y border-border/30 bg-surface/20 overflow-hidden relative"
      aria-label="Tecnologias que utilizo"
    >
      <div
        className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="flex animate-marquee" aria-hidden="true">
        {doubled.map((tech, i) => (
          <TechItem key={`${tech}-${i}`} tech={tech} />
        ))}
      </div>
    </section>
  );
}
