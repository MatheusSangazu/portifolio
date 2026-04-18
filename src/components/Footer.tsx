"use client";

import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-text-muted flex items-center gap-1">
          &copy; {currentYear} Matheus Henrique. Feito com{" "}
          <FiHeart size={14} className="text-purple-primary" /> e muito código.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-purple-secondary transition-colors"
          >
            <FiGithub size={18} />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-purple-secondary transition-colors"
          >
            <FiLinkedin size={18} />
          </a>
          <a
            href="mailto:seu-email@gmail.com"
            className="text-text-muted hover:text-purple-secondary transition-colors"
          >
            <FiMail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
