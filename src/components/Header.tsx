"use client";

import { useState } from "react";

const navLinks = [
  { label: "MY WORKS", href: "#works" },
  { label: "ABOUT ME", href: "#about" },
];

export default function Header() {
  const [locale, setLocale] = useState<"UA" | "EN">("EN");

  return (
    <header className="flex flex-wrap items-center gap-4 px-6 py-6 sm:px-10">
      <span className="font-display text-[30px] leading-none">Anastasi-Design</span>

      <nav className="ml-auto flex items-center gap-6 font-display text-[22px] leading-none sm:text-[26px] sm:mr-8">
        <div className="flex items-center overflow-hidden">
          <button
            type="button"
            onClick={() => setLocale("UA")}
            className={`px-2 py-1 ${locale === "UA" ? "bg-accent" : ""}`}
          >
            UA
          </button>
          <span>/</span>
          <button
            type="button"
            onClick={() => setLocale("EN")}
            className={`px-2 py-1 ${locale === "EN" ? "bg-accent" : ""}`}
          >
            EN
          </button>
        </div>

        {navLinks.map((link) => (
          <a key={link.label} href={link.href} className="hover:text-accent">
            {link.label}
          </a>
        ))}
      </nav>

      <a
        href="https://t.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="border-[5px] border-accent px-8 py-3 font-display text-[22px] leading-none hover:bg-accent sm:text-[26px]"
      >
        CONTACT ME
      </a>
    </header>
  );
}
