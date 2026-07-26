export type ProjectStatus =
  | "Em desenvolvimento"
  | "Projeto funcional"
  | "Projeto colaborativo"
  | "Projeto de estudo"
  | "MVP de estudo";

export interface Project {
  slug: string;
  title: string;
  summary: string;
  status: ProjectStatus;
  /** Projeto em destaque (padrão: false). */
  featured?: boolean;
  /** Imagem real opcional (caminho em /public). Quando ausente, usa composição visual. */
  image?: string;
  github?: string;
  live?: string;
  stack: string[];
  /** Para a página de listagem. */
  problem: string;
  solution: string;
  /** Participação de Matheus. */
  role: string;
  /** Detalhes para a página individual. */
  context: string;
  features: string[];
  challenges: string[];
  learnings: string[];
  /** Aviso exibido quando for MVP ou projeto colaborativo. */
  notice?: string;
}

export const projects: Project[] = [
  {
    slug: "espaco-do-gestor",
    title: "Espaço do Gestor",
    status: "Em desenvolvimento",
    featured: true,
    summary:
      "Plataforma SaaS para centralizar a gestão e a análise de desempenho de clientes no Meta Ads. Consulta dados pela Meta Ads Graph API mediante token informado manualmente e apresenta dashboards, metas, orçamentos, rankings de anúncios, análises demográficas, alertas e Kanban de tarefas.",
    stack: [
      "Node.js",
      "TypeScript",
      "Express",
      "Prisma",
      "MySQL",
      "React",
      "Vite",
      "Tailwind CSS",
      "Recharts",
      "JWT",
      "Docker",
      "Meta Ads Graph API",
    ],
    problem:
      "Gestores de tráfego precisam acompanhar o desempenho de campanhas no Meta Ads de vários clientes de forma centralizada, cruzando métricas, metas e orçamentos em um só lugar.",
    solution:
      "SaaS full stack que consulta a Meta Ads Graph API por meio de token informado manualmente e organiza os dados em dashboards, metas, orçamentos, rankings e análises demográficas, com alertas e Kanban de tarefas.",
    role: "Desenvolvimento full stack: backend, API, banco de dados e frontend.",
    context:
      "Plataforma SaaS voltada a gestores de tráfego que administram múltiplos clientes no Meta Ads. O acesso aos dados é feito pela Meta Ads Graph API utilizando um token informado manualmente pelo gestor.",
    features: [
      "Dashboards de desempenho de campanhas",
      "Metas e orçamentos por cliente",
      "Rankings de anúncios",
      "Análises demográficas",
      "Alertas de desempenho",
      "Kanban de tarefas",
    ],
    challenges: [
      "Modelagem dos dados retornados pela Meta Ads Graph API",
      "Estruturação de um SaaS multiusuário com isolamento por cliente",
    ],
    learnings: [
      "Consumo e tratamento de respostas da Meta Ads Graph API",
      "Construção de painéis analíticos com Recharts",
    ],
    notice:
      "A autenticação direta com a conta Meta ainda não foi implementada — atualmente o token é informado manualmente.",
  },
  {
    slug: "torrinco",
    title: "Torrinco — Gestão Financeira com Agente de IA",
    status: "Em desenvolvimento",
    featured: true,
    github: "https://github.com/MatheusSangazu/Torrinco",
    summary:
      "Aplicação full stack para gestão financeira pessoal e empresarial, combinando um agente de IA no WhatsApp com uma PWA responsiva. Possui controle de receitas, despesas, cartões, faturas, previsões, orçamentos, metas, calendário e relatórios.",
    stack: [
      "Node.js",
      "TypeScript",
      "Express",
      "Prisma",
      "MySQL",
      "React",
      "Vite",
      "Tailwind CSS",
      "Recharts",
      "JWT",
      "Evolution API",
      "Docker",
    ],
    problem:
      "Pessoas e empresas precisam registrar e acompanhar finanças de forma prática, inclusive por WhatsApp, sem depender apenas de planilhas manuais.",
    solution:
      "Aplicação full stack que combina um agente de IA no WhatsApp com uma PWA responsiva para controle financeiro completo, incluindo receitas, despesas, cartões, faturas, previsões, orçamentos, metas, calendário e relatórios.",
    role: "Desenvolvimento full stack: backend, API, banco de dados, integração com WhatsApp e frontend.",
    context:
      "Aplicação full stack de gestão financeira pessoal e empresarial. A primeira versão do agente foi prototipada no n8n e a lógica está sendo transferida para o backend.",
    features: [
      "Controle de receitas e despesas",
      "Cartões e faturas",
      "Previsões e orçamentos",
      "Metas financeiras",
      "Calendário de lançamentos",
      "Relatórios e gráficos",
      "Agente de IA no WhatsApp (Evolution API)",
    ],
    challenges: [
      "Migração da lógica do agente do n8n para o backend",
      "Integração do WhatsApp com o fluxo de registros financeiros",
    ],
    learnings: [
      "Estruturação de um agente conversacional integrado a uma API",
      "Modelagem de dados financeiros e fechamento de faturas",
    ],
    notice:
      "A primeira versão do agente foi prototipada no n8n; a lógica está sendo transferida para o backend.",
  },
  {
    slug: "check-facil",
    title: "Check Fácil",
    status: "Projeto funcional",
    featured: true,
    summary:
      "PWA para gestão completa de festas infantis. Gerenciamento de eventos e convidados com check-in em tempo real e confirmação de presença via WhatsApp. Monorepo com frontend React e API Node.js.",
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MySQL",
      "JWT",
      "Evolution API",
      "Docker",
    ],
    problem:
      "Empresas de eventos infantis precisam controlar o acesso das crianças com segurança e, ao mesmo tempo, organizar convidados e confirmações de presença.",
    solution:
      "PWA com gestão de eventos e convidados, check-in em tempo real e confirmação de presença via WhatsApp, em um monorepo com frontend React e API Node.js.",
    role: "Desenvolvimento full stack: frontend PWA, API e banco de dados.",
    context:
      "Plataforma PWA para gestão de festas infantis, com controle de acesso, gestão de convidados e confirmação de presença via WhatsApp.",
    features: [
      "Gestão de eventos e convidados",
      "Check-in em tempo real",
      "Confirmação de presença via WhatsApp (Evolution API)",
      "Autenticação com JWT",
    ],
    challenges: [
      "Controle de acesso com notificações em tempo real",
      "Organização do monorepo entre frontend e API",
    ],
    learnings: [
      "Estruturação de um monorepo React + Node.js",
      "Integração com WhatsApp via Evolution API",
    ],
  },
  {
    slug: "betalent-payment",
    title: "BeTalent Payment",
    status: "Projeto de estudo",
    summary:
      "API RESTful para gerenciamento de pagamentos multi-gateway, desenvolvida como desafio técnico da BeTalent. Implementa Adapter Pattern para integração com múltiplos provedores, fallback automático, RBAC e testes com TDD.",
    stack: ["AdonisJS", "Node.js", "TypeScript", "MySQL", "Docker", "Japa", "VineJS", "Lucid"],
    github: "https://github.com/MatheusSangazu/betalent-payment-api",
    problem:
      "Desafio técnico que exigia uma API de pagamentos capaz de integrar múltiplos provedores com fallback automático e controle de acesso por papéis.",
    solution:
      "API RESTful em AdonisJS com Adapter Pattern para múltiplos gateways, fallback por prioridade, RBAC, cálculo de valores no backend e testes com TDD.",
    role: "Desenvolvimento completo da API como parte do processo seletivo.",
    context:
      "Desafio back-end do processo seletivo da BeTalent. O repositório público confirma a implementação com AdonisJS v6, TypeScript, MySQL, Docker e testes.",
    features: [
      "Multi-gateway com Adapter Pattern",
      "Fallback automático por prioridade",
      "RBAC (ADMIN, MANAGER, FINANCE, USER)",
      "Reembolso de transações aprovadas",
      "Testes com TDD e isolamento de banco",
    ],
    challenges: [
      "Isolamento de dados nos testes automatizados",
      "Abstração de gateways com payloads distintos",
    ],
    learnings: [
      "Adapter Pattern para múltiplos provedores",
      "Transações com rollback para testes",
    ],
    notice: "Projeto de estudo — desafio técnico do processo seletivo da BeTalent.",
  },
  {
    slug: "canivete-suico-botconversa",
    title: "Canivete Suíço BotConversa",
    status: "Projeto funcional",
    featured: false,
    summary:
      "Aplicação em Python e Streamlit para preparar, limpar e organizar listas de contatos antes da importação no BotConversa. Também possui ferramentas para manutenção de etiquetas, compressão de PDFs e download autorizado de mídias em versão beta.",
    stack: ["Python", "Streamlit", "Pandas", "OpenPyXL", "Ghostscript", "yt-dlp", "FFmpeg", "Docker"],
    github: "https://github.com/MatheusSangazu/formatador",
    live: "https://formatador.forjacorp.com/",
    problem:
      "Listas de contatos costumam chegar despadronizadas e duplicadas, o que dificulta a importação em plataformas de disparo como o BotConversa.",
    solution:
      "Aplicação em Python e Streamlit que prepara, limpa e organiza listas de contatos, com ferramentas complementares de etiquetas, compressão de PDFs e download autorizado de mídias (beta).",
    role: "Desenvolvimento completo da aplicação.",
    context:
      "Ferramentas utilitárias para preparação de contatos e manutenção de mídias, integradas em uma aplicação Streamlit containerizada com Docker.",
    features: [
      "Limpeza e organização de listas de contatos",
      "Manutenção de etiquetas",
      "Compressão de PDFs",
      "Download autorizado de mídias (beta)",
    ],
    challenges: [
      "Normalização de diferentes formatos de planilhas de contatos",
      "Integração de múltiplas ferramentas em uma única aplicação",
    ],
    learnings: [
      "Manipulação de planilhas com Pandas e OpenPyXL",
      "Construção de aplicações com Streamlit",
    ],
  },
  {
    slug: "clihc-2026",
    title: "CLIHC 2026 — Evento Brasil",
    status: "Projeto colaborativo",
    summary:
      "Contribuição no desenvolvimento do site oficial do Evento Brasil da XII Conferência Latino-Americana de Interação Humano-Computador. Atuação no frontend, agenda da conferência, conteúdos em português, inglês e espanhol, responsividade e acessibilidade para leitores de tela.",
    stack: ["Vue.js", "JavaScript", "Vite", "Vue Router", "Vue I18n", "Bootstrap", "HTML", "CSS"],
    github: "https://github.com/LAIHC-org/brazil.clihc2026",
    live: "https://brazil.clihc2026.laihc.org/",
    problem:
      "Um evento acadêmico internacional precisava de um site multilíngue, acessível e responsivo para divulgar programação e informações.",
    solution:
      "Site oficial em Vue.js com i18n em português, inglês e espanhol, agenda da conferência, responsividade e acessibilidade para leitores de tela.",
    role: "Contribuição no frontend, na agenda da conferência e na acessibilidade.",
    context:
      "Contribuição voluntária para o site oficial do Evento Brasil da XII Conferência Latino-Americana de Interação Humano-Computador (CLIHC 2026).",
    features: [
      "Conteúdo multilíngue (PT, EN, ES)",
      "Agenda da conferência",
      "Layout responsivo",
      "Acessibilidade para leitores de tela",
    ],
    challenges: [
      "Estruturação de conteúdo em três idiomas",
      "Garantia de acessibilidade e responsividade",
    ],
    learnings: [
      "Internacionalização com Vue I18n",
      "Práticas de acessibilidade em Vue.js",
    ],
    notice: "Projeto colaborativo — contribuição ao repositório do LAIHC.",
  },
  {
    slug: "ultimate-post-type",
    title: "Ultimate Post Type",
    status: "Projeto colaborativo",
    summary:
      "Plugin WordPress para criação e gerenciamento de catálogos dinâmicos. Matheus atuou principalmente no desenvolvimento da importação de imóveis por XML, processamento em lotes por AJAX, Card Builder, filtros, melhorias na interface e correções de bugs.",
    stack: ["PHP", "WordPress", "JavaScript", "jQuery", "AJAX", "XML", "CSS", "Elementor", "Composer"],
    github: "https://github.com/Pdroinho/Ultimate-Post-Type",
    problem:
      "Imobiliárias precisavam cadastrar imóveis e sincronizar dados de sistemas externos sem usar a interface nativa do WordPress.",
    solution:
      "Plugin WordPress com painel próprio para catálogos dinâmicos, importação de imóveis por XML, processamento em lotes por AJAX, Card Builder e filtros.",
    role:
      "Atuação principalmente na importação por XML, processamento em lotes por AJAX, Card Builder, filtros, melhorias na interface e correções de bugs.",
    context:
      "Plugin WordPress para catálogos dinâmicos, utilizado em sites de imobiliárias para cadastrar imóveis e exibi-los com cards visuais.",
    features: [
      "Importação de imóveis por XML",
      "Processamento em lotes por AJAX",
      "Card Builder para listagens",
      "Filtros de imóveis",
      "Integração com Elementor",
    ],
    challenges: [
      "Importação e sincronização de XML de sistemas externos",
      "Processamento em lotes sem estourar limites do servidor",
    ],
    learnings: [
      "Desenvolvimento de plugins WordPress",
      "Processamento assíncrono com AJAX no WordPress",
    ],
    notice: "Projeto colaborativo — contribuição ao repositório do plugin.",
  },
  {
    slug: "mvp-extracao-documental-verificacao-facial",
    title: "MVP — Extração Documental e Verificação Facial",
    status: "MVP de estudo",
    summary:
      "Prova de conceito criada para estudar extração inteligente de documentos e comparar uma análise facial experimental com Gemini a uma abordagem de visão computacional com DeepFace e OpenCV. O projeto avalia latência, similaridade, prova de vida e cuidados relacionados à LGPD.",
    stack: ["C#", ".NET", "Next.js", "TypeScript", "Python", "FastAPI", "DeepFace", "OpenCV", "Gemini", "MySQL", "Docker"],
    github: "https://github.com/MatheusSangazu/mvpFacial",
    problem:
      "Estudo de extração de dados de documentos e de verificação facial, comparando uma abordagem baseada em Gemini a uma abordagem de visão computacional.",
    solution:
      "Prova de conceito que compara análise facial experimental com Gemini e visão computacional com DeepFace e OpenCV, avaliando latência, similaridade, prova de vida e cuidados de LGPD.",
    role: "Desenvolvimento da prova de conceito de ponta a ponta.",
    context:
      "MVP criado para fins de estudo, integrando backend em C#/.NET, frontend em Next.js e serviço em Python/FastAPI para os modelos de visão.",
    features: [
      "Extração inteligente de documentos",
      "Análise facial experimental com Gemini",
      "Comparação com DeepFace e OpenCV",
      "Avaliação de latência e similaridade",
    ],
    challenges: [
      "Comparação justa entre abordagens distintas de verificação facial",
      "Cuidados com LGPD em dados biométricos",
    ],
    learnings: [
      "Integração entre serviços .NET e Python",
      "Trade-offs entre APIs de IA e visão computacional local",
    ],
    notice: "MVP de estudo — não destinado à produção.",
  },
];

export const featuredProjects = projects.filter((p) => p.featured === true);
export const otherProjects = projects.filter((p) => p.featured !== true);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
