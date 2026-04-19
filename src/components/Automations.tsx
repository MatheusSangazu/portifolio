"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { FiCpu, FiGitBranch, FiShare2, FiShield, FiZap, FiArrowRight, FiMessageSquare, FiShoppingCart, FiClock, FiCheckCircle, FiFilter, FiUserPlus, FiLayout, FiDatabase, FiMic, FiServer, FiActivity } from "react-icons/fi";

const automationFlows = [
  {
    title: "Agente IA: Assistente Financeiro Torrinco",
    description: "Cérebro de um SaaS financeiro que processa linguagem natural via WhatsApp para gestão de gastos, metas e lembretes.",
    impact: "Automação total da entrada de dados financeiros com 100% de precisão no processamento de voz e texto.",
    tech: ["n8n", "OpenAI (GPT-4o)", "Redis", "MySQL", "Evolution API", "LangChain"],
    steps: [
      {
        icon: FiMic,
        label: "Multimodal Ingestion",
        desc: "Captura de áudios (Whisper), imagens (Vision) e textos via Evolution API."
      },
      {
        icon: FiActivity,
        label: "AI Agent (LangChain)",
        desc: "Agente inteligente com memória em Redis e ferramentas customizadas para CRUD financeiro."
      },
      {
        icon: FiServer,
        label: "Context Memory & Redis",
        desc: "Gestão de estado da conversa e buffer de mensagens para processamento assíncrono e resiliente."
      },
      {
        icon: FiDatabase,
        label: "Tool Execution (Function Calling)",
        desc: "Execução de workflows de registro, consulta de extratos, relatórios por categoria e edição de transações."
      }
    ]
  },
  {
    title: "Data Pipeline: Funil Omnichannel 4GT",
    description: "Centralização e distribuição inteligente de leads provenientes de múltiplas fontes para CRM.",
    impact: "Atribuição precisa de origem de leads e redução do lead response time para < 1 min.",
    tech: ["n8n", "Pipedrive API", "Meta Ads Webhooks", "Evolution API", "Round Robin Logic"],
    steps: [
      {
        icon: FiFilter,
        label: "Omnichannel Ingestion",
        desc: "Captação unificada de leads via Meta Ads (Formulários), Landing Pages e BotConversa."
      },
      {
        icon: FiUserPlus,
        label: "Smart Assignment",
        desc: "Lógica de Atribuição de Vendedor (Round Robin) via Script JS para distribuição equitativa de leads."
      },
      {
        icon: FiDatabase,
        label: "CRM Core Sync",
        desc: "Provisionamento automático de Pessoas, Negócios e Notas no Pipedrive com metadados de campanha."
      },
      {
        icon: FiMessageSquare,
        label: "Instant Alert System",
        desc: "Notificações ricas via Evolution API para o time comercial com resumo completo do lead."
      }
    ]
  },
  {
    title: "Middleware de Growth & Rastreamento Server-Side",
    description: "Arquitetura completa de orquestração de dados entre CRM, Meta Ads e Onboarding de clientes.",
    impact: "Eliminação total de trabalho manual no pós-venda e aumento real no ROI de marketing.",
    tech: ["n8n", "JavaScript", "Pipedrive API", "Meta CAPI", "Evolution API", "ClickUp"],
    steps: [
      {
        icon: FiGitBranch,
        label: "Ingestão & Multi-Trigger",
        desc: "Webhooks assíncronos que disparam fluxos de Lead, Schedule, InitiateCheckout e Purchase."
      },
      {
        icon: FiShield,
        label: "Privacy & Sanitize Engine",
        desc: "Script JS customizado para normalização de telefones (DDI/DDD) e hashing SHA-256 de dados sensíveis."
      },
      {
        icon: FiShare2,
        label: "CAPI Server-Side",
        desc: "Integração direta com o Graph API do Facebook para 2 pixels simultâneos, contornando bloqueios de cookies."
      },
      {
        icon: FiZap,
        label: "Onboarding & CRM Sync",
        desc: "Criação de grupos via Evolution API, avisos automáticos via WhatsApp e provisionamento no ClickUp."
      }
    ]
  },
  {
    title: "SDR Digital: Chatbot para Restaurante High-Volume",
    description: "Sistema de auto-atendimento via WhatsApp para gestão de pedidos, reservas e suporte ao cliente em tempo real.",
    impact: "Redução de 70% no tempo de espera e aumento na conversão de pedidos diretos sem taxas de apps.",
    tech: ["BotConversa", "API Integrations", "Webhooks", "Business Logic"],
    videoUrl: "/videos/chatbot-demo.mp4",
    steps: [
      {
        icon: FiMessageSquare,
        label: "Triagem Inteligente",
        desc: "Qualificação imediata do cliente (Pedido, Reserva ou Suporte) via menus dinâmicos."
      },
      {
        icon: FiShoppingCart,
        label: "Fluxo de Pedidos",
        desc: "Integração com cardápio digital e coleta de dados para entrega de forma estruturada."
      },
      {
        icon: FiClock,
        label: "Gestão de Reservas",
        desc: "Verificação de disponibilidade e confirmação automática de mesas via fluxo lógico."
      },
      {
        icon: FiCheckCircle,
        label: "Transbordo Humano",
        desc: "Encaminhamento inteligente para atendentes apenas em casos complexos, otimizando o time."
      }
    ]
  }
];

export function Automations() {
  return (
    <section id="automacoes" className="py-16 sm:py-32 px-6 bg-background border-t border-border/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-24">
          <FadeIn direction="up">
            <div className="font-mono text-[10px] text-brand-primary mb-6 tracking-[0.4em] uppercase">
              // automation_service.workflow_v2
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-8xl font-bold tracking-tighter text-white mb-8 sm:mb-10 leading-[0.85]">
              ORQUESTRAÇÃO DE<br />
              <span className="text-brand-primary italic font-serif text-[0.8em]">Sistemas.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-text-muted max-w-2xl text-lg leading-relaxed font-sans border-l border-brand-primary/20 pl-8">
              Arquitetando fluxos que conectam inteligência artificial e dados para automatizar decisões críticas de negócio.
            </p>
          </FadeIn>
        </div>

        <div className="space-y-8 sm:space-y-16">
          {automationFlows.map((flow, i) => (
            <FadeIn key={i} delay={0.3}>
              <div className="grid grid-cols-1 lg:grid-cols-12 bg-surface/30 border border-border group hover:border-brand-primary/20 transition-all duration-500 overflow-hidden rounded-sm">
                
                <div className="lg:col-span-5 p-6 sm:p-10 md:p-14 border-b lg:border-b-0 lg:border-r border-border bg-surface/20">
                  <h3 className="text-lg sm:text-2xl font-bold mb-6 sm:mb-8 tracking-tighter text-white uppercase font-mono leading-tight group-hover:text-brand-primary transition-colors duration-500">
                    {flow.title}
                  </h3>
                  <p className="text-text-muted text-sm mb-8 sm:mb-10 leading-relaxed font-sans italic">
                    {flow.description}
                  </p>
                  
                  <div className="bg-brand-primary/5 border-l-2 border-brand-primary p-6 sm:p-8 mb-8 sm:mb-10">
                    <span className="text-[9px] font-mono text-brand-primary uppercase tracking-[0.3em] block mb-3">Impact_Analysis</span>
                    <p className="text-sm text-foreground font-medium leading-relaxed">
                      {flow.impact}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {flow.tech.map(t => (
                      <span key={t} className="text-[9px] font-mono px-3 py-1.5 bg-background border border-border text-brand-secondary/60 tracking-wider group-hover:text-brand-secondary transition-colors">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-7 p-6 sm:p-10 md:p-14 bg-background/30 relative">
                  {flow.videoUrl ? (
                    <div className="relative h-full min-h-[350px] flex flex-col justify-center">
                      <div className="absolute inset-0 tech-grid opacity-20" />
                      <div className="relative z-10 border border-border bg-surface/50 aspect-video flex flex-col items-center justify-center text-center p-8 shadow-2xl">
                        <div className="w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center mb-6">
                          <FiMessageSquare size={32} className="text-brand-primary/70" />
                        </div>
                        <p className="font-mono text-[10px] text-brand-primary/50 uppercase tracking-[0.5em] mb-3">
                          [DEMO_MODULE_ACTIVE]
                        </p>
                        <p className="text-[11px] text-text-muted leading-relaxed max-w-xs font-mono uppercase tracking-widest">
                          Simulação de fluxo de conversa e transbordo inteligente.
                        </p>
                      </div>
                      
                      <div className="absolute bottom-4 right-4 font-mono text-[9px] text-brand-primary/20 flex items-center gap-4">
                        <span className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-brand-primary/40 rounded-full animate-pulse" />
                          LIVE_SYSTEM
                        </span>
                        <span>V_2.0.4</span>
                      </div>
                    </div>
                  ) : (
                    <div className="relative space-y-10">
                      <div className="absolute left-[27px] top-6 bottom-6 w-px bg-gradient-to-b from-brand-primary/20 via-brand-primary/5 to-transparent hidden md:block" />
                      
                      {flow.steps.map((step, idx) => (
                        <div key={idx} className="relative flex items-start gap-10 group/step">
                          <div className="relative z-10 w-14 h-14 shrink-0 bg-background border border-border flex items-center justify-center group-hover/step:border-brand-primary group-hover/step:shadow-[0_0_20px_rgba(249,115,22,0.1)] transition-all duration-500">
                            <step.icon size={20} className="text-brand-primary/60 group-hover/step:text-brand-primary transition-colors" />
                            <div className="absolute -right-3 -top-3 text-[9px] font-mono text-brand-primary/20 tracking-tighter">
                              STEP_0{idx + 1}
                            </div>
                          </div>
                          
                          <div className="pt-2">
                            <h4 className="font-mono text-xs font-bold text-white mb-2 uppercase tracking-[0.2em]">
                              {step.label}
                            </h4>
                            <p className="text-xs text-text-muted leading-relaxed max-w-md font-sans opacity-80 group-hover/step:opacity-100 transition-opacity">
                              {step.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
