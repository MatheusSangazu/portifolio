export type BioLanguage = "pt" | "en";

export interface BioService {
  number: string;
  title: string;
  description: string;
  tags: string[];
}

export interface BioIndicator {
  value: string;
  description: string;
}

export interface BioContact {
  label: string;
  handle: string;
  href: string;
  external: boolean;
}

export interface BioPartner {
  name: string;
  role: string;
  href: string;
  image: string;
}

interface BioContent {
  lang: BioLanguage;
  htmlLang: string;
  metaTitle: string;
  metaDescription: string;
  canonical: string;
  /** Rota para trocar de idioma. */
  switchHref: string;
  switchLabel: string;
  nav: {
    backToPortfolio: string;
    backToPortfolioLabel: string;
  };
  hero: {
    eyebrow: string;
    name: string;
    intro: string;
    availability: string;
    cta: string;
    ctaNote: string;
    /** Link do CTA principal (WhatsApp). Sempre externo. */
    ctaHref: string;
    ctaExternal: boolean;
    scrollHint: string;
  };
  services: {
    kicker: string;
    title: string;
    intro: string;
    items: BioService[];
  };
  experience: {
    kicker: string;
    title: string;
    text: string;
    indicators: BioIndicator[];
  };
  partners: {
    kicker: string;
    title: string;
    intro: string;
    ctaLabel: string;
    items: BioPartner[];
  };
  contact: {
    kicker: string;
    title: string;
    text: string;
    items: BioContact[];
  };
  footer: {
    text: string;
    visualIdentity: string;
  };
}

const CONTACTS = {
  email: "matheussalvespro@gmail.com",
  linkedin: "https://www.linkedin.com/in/mths-alves/",
  linkedinHandle: "/in/mths-alves",
  github: "https://github.com/MatheusSangazu",
  githubHandle: "@MatheusSangazu",
  instagram: "https://www.instagram.com/mathsx_h/",
  instagramHandle: "@mathsx_h",
};

export const bioContent: Record<BioLanguage, BioContent> = {
  pt: {
    lang: "pt",
    htmlLang: "pt-BR",
    metaTitle: "Matheus Henrique | Desenvolvedor Full Stack e Analista de Sistemas",
    metaDescription:
      "Software, sistemas, automações e formas de contato de Matheus Henrique.",
    canonical: "https://matheus.forjacorp.com/pt/bio",
    switchHref: "/en/bio",
    switchLabel: "English",
    nav: {
      backToPortfolio: "/",
      backToPortfolioLabel: "Voltar ao portfólio",
    },
    hero: {
      eyebrow:
        "Desenvolvedor Full Stack & Analista de Sistemas · Tecnologia aplicada a problemas reais",
      name: "Matheus Henrique",
      intro:
        "Desenvolvo e evoluo aplicações web, APIs e sistemas, unindo implementação técnica, análise de regras de negócio e resolução de problemas.",
      availability: "Disponível para projeto selecionados e novas conexões profissionais",
      cta: "Falar sobre um projeto",
      ctaNote: "Conte seu cenário. Eu respondo pessoalmente.",
      ctaHref:
        "https://wa.me/5579981003085?text=Ol%C3%A1%20Matheus%2C%20gostaria%20de%20conversar%20sobre%20um%20projeto.",
      ctaExternal: true,
      scrollHint: "Veja como posso ajudar",
    },
    services: {
      kicker: "Como posso ajudar",
      title: "Três frentes. Uma visão de sistemas.",
      intro:
        "Entendo o problema, analiso as regras envolvidas e desenvolvo soluções que funcionem no contexto real de uso.",
      items: [
        {
          number: "01",
          title: "Desenvolvimento de software",
          description:
            "Aplicações web, APIs, PWAs e sistemas internos desenvolvidos de acordo com necessidades reais de operação e negócio.",
          tags: ["C#/.NET", "Next.js", "Node.js"],
        },
        {
          number: "02",
          title: "Análise e evolução de sistemas",
          description:
            "Investigação de problemas, correção de dados, implementação de funcionalidades e atualização de regras de negócio e interfaces.",
          tags: ["ASP.NET Core", "PostgreSQL", "DDD"],
        },
        {
          number: "03",
          title: "Automações e inteligência artificial",
          description:
            "Fluxos com n8n, integrações com sistemas e CRMs, dashboards, chatbots e agentes de IA para necessidades específicas.",
          tags: ["n8n", "APIs · CRM", "IA · Dashboards"],
        },
      ],
    },
    experience: {
      kicker: "Experiência prática",
      title: "Desenvolvimento com visão de sistemas.",
      text:
        "Tenho mais de três anos de experiência em tecnologia e atualmente atuo como Desenvolvedor Full Stack Pleno em projetos para a educação pública. Trabalho na manutenção e evolução de aplicações, implementação de funcionalidades, correção de problemas relacionados aos dados, atualização de regras de negócio e construção de automações em n8n que integram CRM, marketing, rastreamento e agentes de IA.",
      indicators: [
        {
          value: "3+ anos",
          description: "em desenvolvimento e tecnologia",
        },
        {
          value: "Full Stack Pleno",
          description: "atuação em sistemas para a educação pública",
        },
        {
          value: "Automações + IA",
          description: "fluxos n8n integrando CRM, marketing, rastreamento e agentes",
        },
        {
          value: "Análise + código",
          description: "regras de negócio, dados, implementação e evolução",
        },
      ],
    },
    partners: {
      kicker: "Parceiros",
      title: "Conexões que fortalecem o trabalho.",
      intro:
        "Trabalho próximo de profissionais em quem confio, ampliando cobertura e especialidade sempre que o projeto pede.",
      ctaLabel: "Ver perfil",
      items: [
        {
          name: "Vinicius",
          role: "Growth Engineer",
          href: "https://vinicius.forjacorp.com/pt/bio",
          image: "/bio-assets/vinicius.jpg",
        },
      ],
    },
    contact: {
      kicker: "Vamos conversar",
      title: "Tem um projeto ou sistema para desenvolver?",
      text:
        "Se você precisa desenvolver uma solução, evoluir um sistema existente ou automatizar um processo específico, envie o contexto para avaliarmos as possibilidades.",
      items: [
        {
          label: "E-mail",
          handle: CONTACTS.email,
          href: `mailto:${CONTACTS.email}`,
          external: false,
        },
        {
          label: "LinkedIn",
          handle: CONTACTS.linkedinHandle,
          href: CONTACTS.linkedin,
          external: true,
        },
        {
          label: "GitHub",
          handle: CONTACTS.githubHandle,
          href: CONTACTS.github,
          external: true,
        },
        {
          label: "Instagram",
          handle: CONTACTS.instagramHandle,
          href: CONTACTS.instagram,
          external: true,
        },
      ],
    },
    footer: {
      text: "Projetos selecionados · Novas conexões · Trabalho remoto",
      visualIdentity: "Identidade visual",
    },
  },
  en: {
    lang: "en",
    htmlLang: "en",
    metaTitle: "Matheus Henrique | Full Stack Developer & Systems Analyst",
    metaDescription:
      "Software, systems, automation, and contact information for Matheus Henrique.",
    canonical: "https://matheus.forjacorp.com/en/bio",
    switchHref: "/pt/bio",
    switchLabel: "Português",
    nav: {
      backToPortfolio: "/",
      backToPortfolioLabel: "Back to portfolio",
    },
    hero: {
      eyebrow:
        "Full Stack Developer & Systems Analyst · Technology applied to real problems",
      name: "Matheus Henrique",
      intro:
        "I build and evolve web applications, APIs, and business systems by combining technical implementation, business-rule analysis, and problem solving.",
      availability: "Available for selected projects and new professional connections",
      cta: "Talk about a project",
      ctaNote: "Share your context. I reply personally.",
      ctaHref:
        "https://wa.me/5579981003085?text=Hi%20Matheus%2C%20I%27d%20like%20to%20talk%20about%20a%20project.",
      ctaExternal: true,
      scrollHint: "See how I can help",
    },
    services: {
      kicker: "How I can help",
      title: "Three capabilities. One systems perspective.",
      intro:
        "I understand the problem, analyze the rules involved, and build solutions that work in real-world contexts.",
      items: [
        {
          number: "01",
          title: "Software development",
          description:
            "Web applications, APIs, PWAs, and internal systems built around real operational and business needs.",
          tags: ["C#/.NET", "Next.js", "Node.js"],
        },
        {
          number: "02",
          title: "Systems analysis and evolution",
          description:
            "Problem investigation, data corrections, feature implementation, and updates to business rules and interfaces.",
          tags: ["ASP.NET Core", "PostgreSQL", "DDD"],
        },
        {
          number: "03",
          title: "Automation and artificial intelligence",
          description:
            "n8n workflows, system and CRM integrations, dashboards, chatbots, and AI agents for specific business needs.",
          tags: ["n8n", "APIs · CRM", "AI · Dashboards"],
        },
      ],
    },
    experience: {
      kicker: "Hands-on experience",
      title: "Software development with a systems perspective.",
      text:
        "I have more than three years of experience in technology and currently work as a Mid-Level Full Stack Developer on public education projects. I maintain and evolve applications, implement features, correct data-related issues, update business rules, and build n8n automations that integrate CRM, marketing, tracking, and AI agents.",
      indicators: [
        {
          value: "3+ years",
          description: "in software development and technology",
        },
        {
          value: "Mid-Level Full Stack",
          description: "working on public education systems",
        },
        {
          value: "Automation + AI",
          description: "n8n workflows integrating CRM, marketing, tracking and agents",
        },
        {
          value: "Analysis + code",
          description: "business rules, data, implementation, and evolution",
        },
      ],
    },
    partners: {
      kicker: "Partners",
      title: "Connections that strengthen the work.",
      intro:
        "I work closely with professionals I trust, extending coverage and expertise whenever a project requires it.",
      ctaLabel: "View profile",
      items: [
        {
          name: "Vinicius",
          role: "Growth Engineer",
          href: "https://vinicius.forjacorp.com/en/bio",
          image: "/bio-assets/vinicius.jpg",
        },
      ],
    },
    contact: {
      kicker: "Let's talk",
      title: "Have a project or system to build?",
      text:
        "If you need to build a solution, evolve an existing system, or automate a specific process, share the context so we can explore the possibilities.",
      items: [
        {
          label: "E-mail",
          handle: CONTACTS.email,
          href: `mailto:${CONTACTS.email}`,
          external: false,
        },
        {
          label: "LinkedIn",
          handle: CONTACTS.linkedinHandle,
          href: CONTACTS.linkedin,
          external: true,
        },
        {
          label: "GitHub",
          handle: CONTACTS.githubHandle,
          href: CONTACTS.github,
          external: true,
        },
        {
          label: "Instagram",
          handle: CONTACTS.instagramHandle,
          href: CONTACTS.instagram,
          external: true,
        },
      ],
    },
    footer: {
      text: "Selected projects · New connections · Remote work",
      visualIdentity: "Visual identity",
    },
  },
};
