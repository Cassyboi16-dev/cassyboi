"use client";

import { FaGithub, FaTiktok, FaYoutube } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiReact, SiVercel } from "react-icons/si";


const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Cassyboi16-dev",
    Icon: FaGithub,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/cassyboi16",
    Icon: FaYoutube,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/cassyboi16",
    Icon: FaTiktok,
  },
];

const footerStack = [
  { label: "Next.js", Icon: RiNextjsLine },
  { label: "React", Icon: SiReact },
  { label: "Tailwind", Icon: RiTailwindCssFill },
  { label: "Vercel", Icon: SiVercel },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-stone-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-10">
        <div>
          <p className="text-sm font-black uppercase tracking-wide text-emerald-400">
            Cassyboi portfolio
          </p>
          <h2 className="mt-3 max-w-xl text-3xl font-black leading-tight">
            Built to show the work before you even read the resume.
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-7 text-stone-300">
            Fullstack web developer from Nigeria building responsive websites,
            app interfaces, and digital experiences with modern React tools.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-wide text-stone-400">
            Connect
          </h3>
          <div className="mt-4 grid gap-3">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold transition hover:-translate-y-0.5 hover:bg-white/[0.08]"
              >
                <span className="inline-flex items-center gap-3">
                  <Icon />
                  {label}
                </span>
                <MdArrowOutward />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-wide text-stone-400">
            Built with
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {footerStack.map(({ label, Icon }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-bold text-stone-200"
              >
                <Icon />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5 text-center text-xs font-semibold text-stone-400 sm:px-8">
        Made by{" "}
        <a
          href="https://github.com/Cassyboi16-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="font-black text-emerald-400 hover:text-white"
        >
          Cassyboi
        </a>
        .
        <a href="../privacy" className="p-2 hover:text-emerald-600">Privacy Policy</a> All rights reserved.
        <a href="../terms" className="p-2 hover:text-emerald-600">Terms of Service</a>
        and © {new Date().getFullYear()}.
      </div>
    </footer>
  );
}   
     
