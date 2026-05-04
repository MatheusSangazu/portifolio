"use client";

import { motion } from "framer-motion";
import { FiGithub, FiArrowLeft, FiShield, FiUsers, FiCalendar, FiBox, FiGlobe, FiDatabase, FiLayers, FiMonitor, FiSmartphone, FiBell, FiCheckCircle } from "react-icons/fi";
import Link from "next/link";

const stack = ["Node.js", "React", "Monorepo", "Docker", "MySQL", "Tailwind"];

const features = [
  {
    icon: FiUsers,
    title: "RSVP & MÁQUINA DE LEADS",
    description: "Página de convite personalizável. Ao confirmar presença, o pai insere os dados da família, criando um banco de dados qualificado para o cliente.",
  },
  {
    icon: FiShield,
    title: "SEGURANÇA (CHECK-IN/OUT)",
    description: "Controle de acesso na porta. A entrada ou saída da criança dispara instantaneamente uma notificação para o celular do responsável.",
  },
  {
    icon: FiCalendar,
    title: "SINCRONIZAÇÃO INTELIGENTE",
    description: "Integração automática dos eventos e horários diretamente com o Google Agenda da empresa e dos clientes.",
  },
];

const techStack = [
  {
    icon: FiLayers,
    label: "Arquitetura",
    detail: "Monorepo gerenciado com Yarn Workspaces e Turborepo.",
  },
  {
    icon: FiMonitor,
    label: "Frontend",
    detail: "PWA construída com React, Tailwind e TanStack Query, pensado para carregamento rápido e uso pelo staff durante o evento.",
  },
  {
    icon: FiBox,
    label: "Full Stack",
    detail: "API RESTful robusta desenvolvida em Node.js e Express. Relacionamentos complexos gerenciados via ORM Sequelize com banco MySQL.",
  },
  {
    icon: FiGlobe,
    label: "Infraestrutura",
    detail: "Containerização com Docker, ambiente orquestrado com Docker Compose e deploy preparado para proxy reverso.",
  },
];

function ImagePlaceholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`relative bg-surface border border-border group ${className}`}>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
        <div className="w-16 h-16 border border-dashed border-border flex items-center justify-center group-hover:border-brand-primary/40 transition-colors">
          <FiSmartphone size={24} className="text-text-muted/40 group-hover:text-brand-primary/40 transition-colors" />
        </div>
        <span className="font-mono text-[10px] text-text-muted/40 tracking-[0.3em] uppercase text-center">
          {label}
        </span>
      </div>
    </div>
  );
}

export function CheckFacilPage() {
  return (
    <div className="min-h-screen bg-background text-white">
      <div className="max-w-7xl mx-auto">

        <section className="pt-12 sm:pt-24 pb-16 sm:pb-24 px-6 border-b border-border/50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <Link
              href="/#projetos"
              className="inline-flex items-center gap-3 font-mono text-[10px] text-text-muted tracking-[0.3em] uppercase hover:text-brand-primary transition-colors w-fit"
            >
              <FiArrowLeft size={14} />
              VOLTAR AO PORTFÓLIO
            </Link>

            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
              <div>
                <div className="font-mono text-[10px] text-brand-primary mb-4 tracking-[0.4em] uppercase">
                  // case_study.project_04
                </div>
                <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white leading-[0.85] mb-4">
                  CHECK<br />
                  <span className="text-brand-primary italic font-serif text-[0.85em]">FÁCIL.</span>
                </h1>
                <p className="text-text-muted text-base sm:text-lg max-w-xl font-sans leading-relaxed mt-6">
                  Gestão de Eventos, Controle de Acesso e Captação de Leads.
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <a
                  href="https://github.com/MatheusSangazu/check-facil-api"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 sm:px-10 py-4 bg-white text-background font-bold tracking-widest uppercase text-[10px] sm:text-xs hover:bg-brand-primary transition-all duration-300 flex items-center gap-4 group"
                >
                  <FiGithub size={16} />
                  REPOSITÓRIO <FiArrowLeft size={12} className="rotate-180 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 border border-border font-mono text-[10px] text-text-muted tracking-[0.2em] uppercase hover:border-brand-primary/40 hover:text-brand-primary transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="py-16 sm:py-24 px-6 border-b border-border/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="font-mono text-[10px] text-brand-primary mb-6 tracking-[0.4em] uppercase">
                // origin_story
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-white mb-8 leading-[0.9]">
                A ORIGEM<br />
                <span className="text-brand-primary/60 italic font-serif text-[0.85em]">& O DESAFIO.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-text-muted text-base sm:text-lg leading-relaxed font-sans border-l-2 border-brand-primary/30 pl-8">
                O projeto nasceu de uma dor real de uma empresa de eventos chamada <span className="text-white font-medium">&quot;Espaço Criar&quot;</span>. Eles precisavam de um aplicativo para gerenciar as festas infantis, mas identifiquei uma oportunidade maior de negócio.
              </p>
              <p className="text-text-muted text-base sm:text-lg leading-relaxed font-sans border-l-2 border-brand-primary/30 pl-8 mt-6">
                O desafio técnico e estratégico era duplo: garantir uma <span className="text-white font-medium">segurança rigorosa</span> das crianças na entrada e saída com notificações em tempo real, e, simultaneamente, <span className="text-white font-medium">capturar os dados dos pais</span> convidados para alimentar o CRM da empresa e gerar novas vendas.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 sm:py-24 px-6 border-b border-border/50">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="font-mono text-[10px] text-brand-primary mb-6 tracking-[0.4em] uppercase">
              // gallery.screenshot_01
            </div>
            <ImagePlaceholder
              label="DASHBOARD DE GESTÃO DO STAFF"
              className="w-full aspect-video sm:aspect-[16/9] md:aspect-[21/9] rounded-sm overflow-hidden hover:border-brand-primary/30 transition-colors"
            />
            <div className="mt-4 font-mono text-[9px] text-text-muted/40 tracking-[0.2em] uppercase">
              VISÃO DESKTOP // PAINEL PRINCIPAL DE CONTROLE
            </div>
          </motion.div>
        </section>

        <section className="py-16 sm:py-24 px-6 border-b border-border/50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 sm:mb-16"
          >
            <div className="font-mono text-[10px] text-brand-primary mb-6 tracking-[0.4em] uppercase">
              // features.module
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-white leading-[0.9]">
              FUNCIONALIDADES<br />
              <span className="text-brand-primary/60 italic font-serif text-[0.85em]">PRINCIPAIS.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group bg-surface/20 border border-border p-6 sm:p-8 hover:border-brand-primary/40 transition-all duration-500"
              >
                <div className="w-12 h-12 bg-background border border-border flex items-center justify-center mb-6 group-hover:border-brand-primary/30 transition-colors">
                  <feature.icon size={20} className="text-brand-primary/70 group-hover:text-brand-primary transition-colors" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold mb-4 tracking-[0.15em] text-white uppercase font-mono group-hover:text-brand-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed font-sans">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-16 sm:py-24 px-6 border-b border-border/50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 sm:mb-16"
          >
            <div className="font-mono text-[10px] text-brand-primary mb-6 tracking-[0.4em] uppercase">
              // gallery.screenshots_mobile
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-white leading-[0.9]">
              EXPERIÊNCIA<br />
              <span className="text-brand-primary/60 italic font-serif text-[0.85em]">MOBILE.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ImagePlaceholder
                label="TELA DE CONVITE DO PAI"
                className="w-full aspect-[9/16] max-h-[500px] rounded-sm overflow-hidden hover:border-brand-primary/30 transition-colors"
              />
              <div className="mt-3 flex items-center gap-3">
                <FiSmartphone size={12} className="text-brand-primary/40" />
                <span className="font-mono text-[9px] text-text-muted/40 tracking-[0.2em] uppercase">
                  RSVP // FORMULÁRIO DE PRESENÇA
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <ImagePlaceholder
                label="NOTIFICAÇÃO DE ENTRADA"
                className="w-full aspect-[9/16] max-h-[500px] rounded-sm overflow-hidden hover:border-brand-primary/30 transition-colors"
              />
              <div className="mt-3 flex items-center gap-3">
                <FiBell size={12} className="text-brand-primary/40" />
                <span className="font-mono text-[9px] text-text-muted/40 tracking-[0.2em] uppercase">
                  PUSH // CHECK-IN DA CRIANÇA
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden lg:block"
            >
              <ImagePlaceholder
                label="PAINEL DO STAFF"
                className="w-full aspect-[9/16] max-h-[500px] rounded-sm overflow-hidden hover:border-brand-primary/30 transition-colors"
              />
              <div className="mt-3 flex items-center gap-3">
                <FiShield size={12} className="text-brand-primary/40" />
                <span className="font-mono text-[9px] text-text-muted/40 tracking-[0.2em] uppercase">
                  CONTROLE // PORTARIA DO EVENTO
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 sm:py-24 px-6 border-b border-border/50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 sm:mb-16"
          >
            <div className="font-mono text-[10px] text-brand-primary mb-6 tracking-[0.4em] uppercase">
              // system.architecture
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-white leading-[0.9]">
              SOB O<br />
              <span className="text-brand-primary/60 italic font-serif text-[0.85em]">CAPÔ.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {techStack.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-surface border border-border p-6 sm:p-8 hover:border-brand-primary/40 transition-all duration-500 font-mono"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-10 h-10 bg-background border border-border flex items-center justify-center group-hover:border-brand-primary/30 transition-colors">
                    <item.icon size={18} className="text-brand-primary/70 group-hover:text-brand-primary transition-colors" />
                  </div>
                  <span className="text-[10px] text-text-muted tracking-[0.3em] uppercase group-hover:text-brand-primary transition-colors">
                    {item.label}
                  </span>
                </div>
                <p className="text-text-muted text-sm leading-relaxed font-sans">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 sm:mt-16 bg-brand-primary/5 border border-brand-primary/20 p-6 sm:p-8 rounded-sm"
          >
            <div className="flex items-start gap-4">
              <FiDatabase size={18} className="text-brand-primary mt-1 shrink-0" />
              <div>
                <h4 className="font-mono text-xs font-bold text-white tracking-[0.15em] uppercase mb-3">
                  MODELO DE DADOS
                </h4>
                <div className="font-mono text-[11px] text-text-muted leading-relaxed space-y-1">
                  <p><span className="text-brand-primary">Event</span> → hasMany → <span className="text-brand-primary">Guest</span> → hasMany → <span className="text-brand-primary">Child</span></p>
                  <p><span className="text-brand-primary">Event</span> → hasMany → <span className="text-brand-primary">CheckIn</span> → belongsTo → <span className="text-brand-primary">Child</span></p>
                  <p><span className="text-brand-primary">User</span> → hasMany → <span className="text-brand-primary">Event</span> → belongsTo → <span className="text-brand-primary">Company</span></p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="py-16 sm:py-24 px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-between gap-8"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tighter text-white mb-3">
                Gostou do projeto?
              </h3>
              <p className="text-text-muted font-mono text-xs tracking-wider">
                Confira o código no GitHub ou volte para ver mais.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/MatheusSangazu/check-facil-api"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-background font-bold tracking-widest uppercase text-[10px] sm:text-xs hover:bg-brand-primary transition-all duration-300 flex items-center gap-3"
              >
                <FiGithub size={14} />
                GITHUB
              </a>
              <Link
                href="/#projetos"
                className="px-8 py-4 border border-border text-white font-bold tracking-widest uppercase text-[10px] sm:text-xs hover:border-brand-primary transition-all duration-300 flex items-center gap-3"
              >
                <FiArrowLeft size={14} />
                PORTFÓLIO
              </Link>
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
}
