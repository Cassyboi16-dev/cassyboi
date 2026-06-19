"use client";

import { useState } from "react";
import Image from "next/image";
import { FaBars, FaGithub, FaTimes } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Skills", href: "/#skills" },
  { label: "Stack", href: "/#stack" },
  { label: "Works", href: "/#works" },
  { label: "Proof", href: "/#proof" },
  { label: "Creator", href: "/#creator" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-950/10 bg-[#f8f3e8]/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8 lg:px-10">
        <a href="/#home" className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-xl border border-stone-950/10 bg-white shadow-sm">
            <Image
              src="/my-logo.png"
              alt="Cassyboi logo"
              width={44}
              height={44}
              className="h-full w-full object-cover"
            />
          </span>
          <span>
            <span className="block text-base font-black leading-tight text-amber-950">
              Cassyboi
            </span>
            <span className="hidden text-xs font-bold uppercase tracking-wide text-emerald-700 sm:block">
              Fullstack Developer
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-stone-950/10 bg-white/70 p-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-bold text-stone-600 transition hover:bg-amber-950 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/Cassyboi16-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-950 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-amber-950/15 transition hover:-translate-y-0.5 hover:bg-stone-950"
          >
            <FaGithub />
            <span className="hidden sm:inline">GitHub</span>
            <MdArrowOutward className="hidden text-base sm:block" />
          </a>

          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
            className="grid h-10 w-10 place-items-center rounded-lg border border-stone-950/10 bg-white text-amber-950 shadow-sm md:hidden"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-stone-950/10 bg-[#f8f3e8] px-5 py-4 shadow-xl shadow-stone-950/10 md:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-xl border border-stone-950/10 bg-white px-4 py-3 text-sm font-black text-stone-700 transition hover:border-emerald-700/40 hover:text-amber-950"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
