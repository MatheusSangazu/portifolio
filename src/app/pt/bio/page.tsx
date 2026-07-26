import type { Metadata } from "next";
import { BioPage } from "@/components/bio/BioPage";
import { bioContent } from "@/data/bio";

const t = bioContent.pt;

export const metadata: Metadata = {
  title: {
    absolute: t.metaTitle,
  },
  description: t.metaDescription,
  alternates: {
    canonical: t.canonical,
    languages: {
      "pt-BR": bioContent.pt.canonical,
      en: bioContent.en.canonical,
    },
  },
  openGraph: {
    type: "profile",
    url: t.canonical,
    siteName: "Matheus Henrique",
    locale: "pt_BR",
    title: t.metaTitle,
    description: t.metaDescription,
    images: [
      {
        url: "/images/MatheusAlves.png",
        width: 500,
        height: 500,
        alt: "Matheus Henrique",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: t.metaTitle,
    description: t.metaDescription,
    images: ["/images/MatheusAlves.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PtBioPage() {
  return <BioPage lang="pt" />;
}
