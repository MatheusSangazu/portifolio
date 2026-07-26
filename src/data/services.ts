import type { IconType } from "react-icons";
import { FiCode, FiRefreshCw, FiMessageSquare, FiPieChart } from "react-icons/fi";

export interface Service {
  icon: IconType;
  title: string;
  description: string;
}

export const servicesIntro =
  "Além da atuação profissional, desenvolvo projetos pontuais para empresas, incluindo aplicações web, automações, integrações, chatbots, agentes de IA e dashboards.";

export const services: Service[] = [
  {
    icon: FiCode,
    title: "Desenvolvimento de aplicações",
    description:
      "Desenvolvimento, manutenção e evolução de aplicações web e sistemas com C#/.NET, Node.js, Next.js e React.",
  },
  {
    icon: FiRefreshCw,
    title: "Automação e integrações",
    description:
      "Automações com n8n e integração entre CRMs, APIs e outros sistemas.",
  },
  {
    icon: FiMessageSquare,
    title: "Chatbots e agentes de IA",
    description:
      "Criação de chatbots para WhatsApp e agentes de IA implementados em código ou n8n, de acordo com o contexto do projeto.",
  },
  {
    icon: FiPieChart,
    title: "Dashboards",
    description:
      "Elaboração de dashboards para acompanhamento de campanhas e indicadores de marketing.",
  },
];

/** Link de contato com assunto preenchido (mailto). */
export const serviceContactHref =
  "mailto:matheussalvespro@gmail.com?subject=Conversar%20sobre%20um%20projeto";
