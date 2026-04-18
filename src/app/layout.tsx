import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { CursorTrail } from "@/components/CursorTrail";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

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

export const metadata: Metadata = {
  title: "Matheus Henrique | Software Engineer",
  description:
    "Especialista em Backend e Arquitetura de Software. Traduzindo regras de negócio em sistemas escaláveis e eficientes.",
  keywords: [
    "Software Engineer",
    "Backend Developer",
    "Node.js",
    "TypeScript",
    "Python",
    "System Design",
    "API",
  ],
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${plusJakarta.variable} ${playfair.variable} ${jetbrainsMono.variable} antialiased`}>
      <body className="min-h-screen relative overflow-x-hidden bg-background">
        <CursorTrail />
        <div className="glow-mesh" />
        <Navbar />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
