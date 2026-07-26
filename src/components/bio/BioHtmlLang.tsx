"use client";

import { useEffect } from "react";

/**
 * Atualiza o atributo `lang` de <html> conforme o idioma da página de bio.
 * O layout raiz define `pt-BR`; este componente ajusta para `en` na bio inglesa
 * e restaura o valor anterior ao desmontar. Não converte a árvore em Client.
 */
export function BioHtmlLang({ lang }: { lang: string }) {
  useEffect(() => {
    const html = document.documentElement;
    const previous = html.lang;
    html.lang = lang;
    return () => {
      html.lang = previous;
    };
  }, [lang]);

  return null;
}
