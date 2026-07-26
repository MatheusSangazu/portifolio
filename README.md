# Portfólio — Matheus Henrique

Portfólio profissional de **Matheus Henrique**, **Desenvolvedor Full Stack e Analista de Sistemas**. O site apresenta trajetória, projetos, serviços, publicações acadêmicas e canais de contato, com foco em desenvolvimento de software, aplicações web, APIs, bancos de dados e análise de sistemas.

## Posicionamento profissional

- **Desenvolvimento de software** (full stack)
- **Aplicações web**, **APIs** e **sistemas de gestão**
- **Análise e evolução de sistemas**
- **C# e ecossistema .NET** (ASP.NET Core, Entity Framework)
- **Node.js, Next.js e React**
- **Bancos de dados relacionais** (PostgreSQL, MySQL, SQL)
- **Regras de negócio e compreensão de processos**

Automações, n8n, integrações, chatbots, agentes de IA e dashboards aparecem como competências e serviços complementares.

## Stack do projeto

- [Next.js](https://nextjs.org/) (App Router, geração estática)
- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) v4
- [Framer Motion](https://www.framer.com/motion/) (animações discretas)
- [react-icons](https://react-icons.github.io/react-icons/) e [lucide-react](https://lucide.dev/)

## Estrutura

```
public/
  images/              # Foto de perfil e imagens reais
  favicon.svg
src/
  app/                 # Rotas (App Router)
    page.tsx           # Home
    layout.tsx         # Layout, metadata global, JSON-LD, skip link
    robots.ts          # robots.txt
    sitemap.ts         # sitemap.xml
    projetos/[slug]/   # Páginas individuais de projetos (generateStaticParams)
    check-facil/       # Redirecionamento para /projetos/check-facil
    game/              # Easter egg (jogo)
  components/          # Componentes de UI
  data/                # Conteúdo centralizado e tipado
    profile.ts
    experiences.ts
    projects.ts
    services.ts
Dockerfile
```

## Conteúdo centralizado

Os dados estão em arquivos tipados para facilitar a manutenção:

- `src/data/profile.ts` — dados pessoais, hero, sobre e grupos de competências
- `src/data/experiences.ts` — experiências profissionais
- `src/data/projects.ts` — projetos (destaque e demais), com campos para a página individual
- `src/data/services.ts` — serviços e link de contato

## Instalação e execução local

Requer Node.js 20+.

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Docker

O projeto inclui `Dockerfile` (modo `standalone`).

```bash
docker build -t portfolio-matheus .
docker run -p 3000:3000 portfolio-matheus
```

## Build

```bash
npm run build
npm start
```

## Qualidade de código

```bash
npm run lint        # ESLint
npm run typecheck   # tsc --noEmit
npm run build       # build de produção
npm run check       # lint + typecheck + build
```

O workflow do GitHub Actions (`.github/workflows/ci.yml`) executa `lint`, `typecheck` e `build` a cada push/PR.

## Manutenção dos dados

### Adicionar um projeto

1. Edite `src/data/projects.ts`.
2. Crie um objeto `Project` com `slug`, `title`, `summary`, `status`, `featured`, `stack`, `problem`, `solution`, `role`, `context`, `features`, `challenges`, `learnings` e (opcional) `github`, `live`, `image`, `notice`.
3. A rota `/projetos/[slug]` é gerada automaticamente via `generateStaticParams`.

### Atualizar experiência

Edite `src/data/experiences.ts`.

### Atualizar serviços

Edite `src/data/services.ts`.

### Atualizar dados pessoais

Edite `src/data/profile.ts`.

## Deploy

O deploy pode ser feito em qualquer plataforma compatível com Next.js (ex.: Vercel). O `Dockerfile` gera uma imagem otimizada com `output: "standalone"`.

## Notas

- A identidade visual é escura com detalhes em laranja.
- O jogo `/game` é um _easter egg_, acessado voluntariamente por um link discreto no rodapé.
- Links externos utilizam `rel="noopener noreferrer"`.
- O suporte a `prefers-reduced-motion` pausa tickers e animações contínuas.
