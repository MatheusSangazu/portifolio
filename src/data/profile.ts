export const profile = {
  name: "Matheus Henrique",
  role: "Desenvolvedor Full Stack e Analista de Sistemas",
  headlineRole: "Desenvolvedor Full Stack Pleno",
  location: "Aracaju, Sergipe, Brasil",
  email: "matheussalvespro@gmail.com",
  siteUrl: "https://matheus.forjacorp.com",
  github: "https://github.com/MatheusSangazu",
  githubHandle: "MatheusSangazu",
  linkedin: "https://www.linkedin.com/in/mths-alves/",
  linkedinHandle: "mths-alves",
  photo: "/images/MatheusAlves.png",
  hero: {
    label: "Desenvolvimento de Software • Análise de Sistemas",
    title: "Desenvolvedor Full Stack e Analista de Sistemas",
    description:
      "Desenvolvo e evoluo aplicações web, APIs e sistemas de gestão, com foco no ecossistema C#/.NET e experiência em Node.js, Next.js e React.",
    competencies: ["C#/.NET e Node.js", "Next.js e React", "PostgreSQL e MySQL"],
  },
  about: [
    "Sou Desenvolvedor Full Stack Pleno, formado em Análise e Desenvolvimento de Sistemas, com mais de três anos de experiência em tecnologia, incluindo desenvolvimento full stack, aplicações web, APIs e sistemas de gestão.",
    "Atualmente, trabalho na SergipeTec em projetos para a Secretaria de Estado da Educação de Sergipe, contribuindo com sistemas voltados ao setor público de educação. Minhas responsabilidades incluem investigar e corrigir problemas relacionados às aplicações e aos dados, implementar novas funcionalidades e atualizar regras de negócio e interfaces.",
    "Na minha atuação atual, trabalho com C#, .NET, ASP.NET Core, Entity Framework, SQL, PostgreSQL, Git, Domain-Driven Design e microsserviços. Minha experiência técnica também inclui Node.js, Next.js, React, TypeScript, n8n, MySQL, Redis e Docker.",
    "Combino desenvolvimento de software, capacidade analítica e compreensão de processos para manter e evoluir sistemas que atendem a usuários reais e necessidades operacionais.",
  ],
  skillGroups: [
    {
      title: "Backend",
      items: ["C#", ".NET", "ASP.NET Core", "Entity Framework", "Node.js", "Express", "APIs REST"],
    },
    {
      title: "Frontend",
      items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Dados e entrega",
      items: ["PostgreSQL", "MySQL", "SQL", "Prisma", "Redis", "Git", "Docker"],
    },
    {
      title: "Automação e IA",
      items: ["n8n", "Evolution API", "Integrações com CRM", "Chatbots", "Agentes de IA"],
    },
  ],
} as const;

export type Profile = typeof profile;
