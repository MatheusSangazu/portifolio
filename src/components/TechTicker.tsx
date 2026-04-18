"use client";

const technologies = [
  "Node.js",
  "TypeScript",
  "Python",
  "C#",
  "JavaScript",
  "MySQL",
  "Redis",
  "Docker",
  "Kubernetes",
  "AWS",
  "Git",
  "REST APIs",
  "Prisma",
  "Express",
  "AdonisJS",
  "Sequelize",
  "OpenAI",
  "LangChain",
  "n8n",
  "Make",
  "Pipedrive API",
  "Meta CAPI",
  "Evolution API",
  "Streamlit",
  "Pandas",
];

const highlighted = new Set([
  "Node.js",
  "TypeScript",
  "Python",
  "Docker",
  "OpenAI",
  "Redis",
  "n8n",
  "Kubernetes",
]);

function TechItem({ tech }: { tech: string }) {
  const isHighlighted = highlighted.has(tech);

  return (
    <span className={`flex items-center gap-3 px-6 py-3 font-mono text-sm tracking-widest uppercase whitespace-nowrap select-none ${
      isHighlighted
        ? "text-brand-primary/80"
        : "text-text-muted/40"
    }`}>
      <span className={`w-1 h-1 rounded-full ${isHighlighted ? "bg-brand-primary" : "bg-text-muted/20"}`} />
      {tech}
    </span>
  );
}

export function TechTicker() {
  const doubled = [...technologies, ...technologies];

  return (
    <section className="py-12 border-y border-border/30 bg-surface/20 overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee">
        {doubled.map((tech, i) => (
          <TechItem key={`${tech}-${i}`} tech={tech} />
        ))}
      </div>

      <div className="flex animate-marquee-reverse mt-4 opacity-50">
        {doubled.reverse().map((tech, i) => (
          <TechItem key={`rev-${tech}-${i}`} tech={tech} />
        ))}
      </div>
    </section>
  );
}
