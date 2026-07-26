export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  stack: string[];
}

export const experiences: ExperienceItem[] = [
  {
    role: "Desenvolvedor Full Stack Pleno",
    company: "SergipeTec",
    period: "2026 – Atual",
    description:
      "Atuação em projetos para a Secretaria de Estado da Educação de Sergipe, contribuindo para a manutenção e evolução de sistemas como Portal do Aluno, Diário do Professor e SIGA. Responsável pela investigação e correção de problemas relacionados às aplicações e aos dados, implementação de funcionalidades e atualização de regras de negócio e interfaces.",
    stack: [
      "C#",
      ".NET",
      "ASP.NET Core",
      "Entity Framework",
      "PostgreSQL",
      "SQL",
      "Git",
      "DDD",
      "Microsserviços",
    ],
  },
  {
    role: "Desenvolvedor Full Stack",
    company: "4Growth",
    period: "Set/2024 – Jun/2025",
    description:
      "Desenvolvimento full stack de sistemas sob demanda para necessidades internas e clientes externos. Implementação de agentes de IA conversacional no WhatsApp com Evolution API, APIs em Node.js para coleta de métricas do Meta Ads, dashboards e manutenção de containers Docker.",
    stack: [
      "Node.js",
      "React",
      "PHP",
      "JavaScript",
      "TypeScript",
      "MySQL",
      "PostgreSQL",
      "Redis",
      "Evolution API",
      "Docker",
      "WordPress",
      "n8n",
    ],
  },
  {
    role: "Desenvolvedor de Integrações",
    company: "4Growth",
    period: "Mai/2022 – Set/2024",
    description:
      "Desenvolvimento de integrações via APIs REST conectando CRMs, gateways de pagamento e plataformas de anúncios. Construção de automações de fluxos de vendas e nutrição de leads utilizando Make e n8n, com leitura e interpretação de documentação técnica para adaptação a novos sistemas.",
    stack: [
      "JavaScript",
      "Node.js",
      "Make",
      "n8n",
      "APIs REST",
      "ActiveCampaign",
      "Meta Ads",
      "Looker Studio",
    ],
  },
  {
    role: "Desenvolvedor .NET (Aprendiz)",
    company: "Fruteb SA",
    period: "Mar/2021 – Fev/2022",
    description:
      "Desenvolvimento em C#/.NET de soluções para processamento de notas fiscais XML, com integração ao SQL Server para armazenamento e consulta de dados. Resolução de problemas de lógica de programação e criação de ferramentas para otimização de processos administrativos.",
    stack: ["C#", ".NET", "SQL Server", "Windows Forms"],
  },
];
