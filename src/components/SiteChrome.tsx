"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { CursorTrail } from "@/components/CursorTrail";

/**
 * Renderiza Navbar, CursorTrail e .glow-mesh apenas fora das rotas de bio.
 * As páginas /bio, /pt/bio e /en/bio possuem sistema visual próprio e não
 * devem herdar o chrome global do portfólio.
 */
export function SiteChrome() {
  const pathname = usePathname();

  const isBioRoute =
    pathname === "/bio" ||
    pathname === "/pt/bio" ||
    pathname === "/en/bio";

  if (isBioRoute) return null;

  return (
    <>
      <CursorTrail />
      <div className="glow-mesh" aria-hidden="true" />
      <Navbar />
    </>
  );
}
