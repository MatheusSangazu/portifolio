import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteChrome } from "@/components/SiteChrome";
import { profile } from "@/data/profile";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const siteUrl = profile.siteUrl;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Matheus Henrique | Desenvolvedor Full Stack e Analista de Sistemas",
    template: "%s | Matheus Henrique",
  },
  description:
    "Desenvolvedor Full Stack Pleno com experiência em C#/.NET, Node.js, Next.js, React, APIs, bancos de dados e evolução de sistemas.",
  applicationName: "Portfólio de Matheus Henrique",
  authors: [{ name: "Matheus Henrique", url: siteUrl }],
  creator: "Matheus Henrique",
  keywords: [
    "Desenvolvedor Full Stack",
    "Analista de Sistemas",
    "C#",
    ".NET",
    "ASP.NET Core",
    "Node.js",
    "Next.js",
    "React",
    "TypeScript",
    "PostgreSQL",
    "APIs REST",
    "Sergipe",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Matheus Henrique",
    locale: "pt_BR",
    title: "Matheus Henrique | Desenvolvedor Full Stack e Analista de Sistemas",
    description:
      "Desenvolvedor Full Stack Pleno com experiência em C#/.NET, Node.js, Next.js, React, APIs, bancos de dados e evolução de sistemas.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matheus Henrique | Desenvolvedor Full Stack e Analista de Sistemas",
    description:
      "Desenvolvedor Full Stack Pleno com experiência em C#/.NET, Node.js, Next.js, React, APIs e evolução de sistemas.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  url: siteUrl,
  image: `${siteUrl}${profile.photo}`,
  sameAs: [profile.github, profile.linkedin],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Aracaju",
    addressRegion: "Sergipe",
    addressCountry: "BR",
  },
  knowsAbout: [
    "C#",
    ".NET",
    "ASP.NET Core",
    "Node.js",
    "Next.js",
    "React",
    "TypeScript",
    "PostgreSQL",
    "MySQL",
    "Análise de Sistemas",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Matheus Henrique",
  url: siteUrl,
  inLanguage: "pt-BR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${plusJakarta.variable} ${playfair.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-screen relative overflow-x-hidden bg-background">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[200] focus:px-4 focus:py-2 focus:bg-brand-primary focus:text-background focus:font-mono focus:text-xs focus:tracking-widest focus:uppercase focus:rounded"
        >
          Pular para o conteúdo
        </a>
        <SiteChrome />
        <main id="conteudo" className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
