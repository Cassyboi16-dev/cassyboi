"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FaCode,
  FaGithub,
  FaGlobe,
  FaHtml5,
  FaInstagram,
  FaNode,
  FaPlay,
  FaRocket,
  FaServer,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { MdArrowOutward, MdOutlineDesignServices } from "react-icons/md";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiFirebase, SiNetlify, SiReact, SiVercel } from "react-icons/si";

const tools = [
  {
    name: "Next.js",
    Icon: RiNextjsLine,
    color: "text-stone-950",
    detail: "Routing, pages, layouts, and production builds.",
  },
  {
    name: "React",
    Icon: SiReact,
    color: "text-cyan-600",
    detail: "Components, state, reusable UI, and dynamic rendering.",
  },
  {
    name: "Tailwind",
    Icon: RiTailwindCssFill,
    color: "text-sky-500",
    detail: "Responsive styling with clean, fast design systems.",
  },
  {
    name: "Node.js",
    Icon: FaNode,
    color: "text-emerald-700",
    detail: "Backend logic, APIs, and server-side thinking.",
  },
  {
    name: "Firebase",
    Icon: SiFirebase,
    color: "text-amber-500",
    detail: "Authentication, database, hosting, and app services.",
  },
  {
    name: "Vercel",
    Icon: SiVercel,
    color: "text-white",
    detail: "Fast Next.js deployment, previews, and production hosting.",
  },
  {
    name: "Netlify",
    Icon: SiNetlify,
    color: "text-teal-400",
    detail: "Frontend hosting, continuous deployment, and static sites.",
  },
  {
    name: "Domain Management",
    Icon: FaGlobe,
    color: "text-emerald-400",
    detail: "DNS setup, domain connections, redirects, and launch readiness.",
  },
  {
    name: "JavaScript",
    Icon: IoLogoJavascript,
    color: "text-yellow-500",
    detail: "Interactive experiences and client-side behavior.",
  },
  {
    name: "HTML",
    Icon: FaHtml5,
    color: "text-orange-600",
    detail: "Semantic structure and accessible page foundations.",
  },
];

const showcases = [
  {
    title: "Frontend Interfaces",
    Icon: MdOutlineDesignServices,
    summary:
      "I build responsive layouts that feel clean on phones, tablets, and desktops.",
    proof: ["Responsive sections", "Hover states", "Reusable UI data"],
  },
  {
    title: "Fullstack Thinking",
    Icon: FaServer,
    summary:
      "I connect the visual layer to real app logic, services, and backend structure.",
    proof: ["API-ready layouts", "Firebase mindset", "Clear data flow"],
  },
  {
    title: "Content Creation",
    Icon: FaPlay,
    summary:
      "I also create developer content, tutorials, and visual stories for YouTube and TikTok.",
    proof: ["80+ YouTube subscribers", "Tutorial style", "Film-making eye"],
  },
];

const featuredBuilds = [
  {
    name: "Portfolio System",
    type: "Personal brand",
    description:
      "A modern portfolio page built with Next.js, React state, Tailwind CSS, and icon-led visual storytelling.",
    tags: ["Next.js", "React", "Tailwind"],
  },
  {
    name: "Learning Content",
    type: "Developer education",
    description:
      "Tutorial-focused content that explains web development with practical, beginner-friendly examples.",
    tags: ["YouTube", "TikTok", "Teaching"],
  },
  {
    name: "Digital Experiences",
    type: "Web apps",
    description:
      "Interactive interfaces that combine clean design, useful features, and user-focused frontend behavior.",
    tags: ["JavaScript", "UI", "Fullstack"],
  },
];

const works = [
  {
    title: "Portfolio Website",
    type: "Personal portfolio",
    description:
      "A responsive portfolio built with Next.js, Tailwind CSS, React state, and section-based navigation.",
    previewUrl: "/",
    liveUrl: "/",
    githubUrl: "https://github.com/Cassyboi16-dev",
    tags: ["Next.js", "Tailwind", "Responsive"],
  },
  {
    title: "BugReview",
    type: "Developer site",
    description:
      "A developer-focused site for sharing insights and reviews about software bugs.",
    previewUrl: "https://bugreview.online",
    liveUrl: "https://bugreview.online",
    githubUrl: "https://github.com/Cassyboi16-dev",
    tags: ["Next.js", "Tailwind", "Responsive"],
    MessageComponent: "The Site is currently under construction, but you can view the code on GitHub.",
  },
];

export default function Home() {
  const [activeShowcase, setActiveShowcase] = useState(0);
  const ActiveIcon = showcases[activeShowcase].Icon;

  return (
    <main className="min-h-screen bg-[#f8f3e8] text-stone-950">
      <section
        id="home"
        className="mx-auto grid min-h-screen w-full max-w-7xl scroll-mt-24 items-center gap-12 px-5 py-12 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10"
      >
        <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
          <div className="absolute -left-4 top-8 h-24 w-24 rounded-2xl border border-emerald-700/20 bg-emerald-700/10" />
          <div className="absolute -right-4 bottom-8 h-24 w-24 rounded-2xl border border-amber-900/20 bg-amber-900/10" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/60 p-3 shadow-2xl shadow-stone-950/15">
            <Image
              src="/Cassyboi.jpeg"
              alt="Cassyboi portrait"
              width={480}
              height={640}
              priority
              loading="eager"
              className="aspect-[3/4] w-full rounded-[1.5rem] object-cover object-top"
            />
          </div>

          <div className="absolute -bottom-6 left-1/2 w-[88%] -translate-x-1/2 rounded-2xl border border-stone-900/10 bg-white px-5 py-4 shadow-xl shadow-stone-950/10">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase text-stone-500">
                  Live profile
                </p>
                <p className="text-lg font-black text-amber-950">Cassyboi</p>
              </div>
              <div className="rounded-full bg-emerald-700 px-3 py-1 text-xs font-black text-white">
                Available
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 text-center lg:pt-0 lg:text-left">
          <p className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-amber-900/15 bg-white/70 px-4 py-2 text-sm font-bold uppercase tracking-wide text-amber-950 lg:mx-0">
            <FaRocket className="text-emerald-700" />
            Fullstack web developer
          </p>

          <h1 className="text-4xl font-black leading-tight text-amber-950 sm:text-5xl lg:text-7xl">
            I build web experiences people can see, use, and remember.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-stone-700 sm:text-lg lg:mx-0">
            I&apos;m Cassyboi, a fullstack web developer from{" "}
            <span className="font-black text-emerald-700">Nigeria</span>. I
            create websites, app interfaces, and digital experiences with React,
            Next.js, Tailwind, Node.js, and Firebase. I also share what I learn
            through YouTube and TikTok content.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="https://github.com/Cassyboi16-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-950 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-amber-950/20 transition hover:-translate-y-0.5 hover:bg-stone-950"
            >
              <FaGithub />
              View GitHub
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-amber-950/25 bg-white/80 px-6 py-3 text-sm font-bold text-amber-950 transition hover:-translate-y-0.5 hover:bg-white"
            >
              Contact Me
              <MdArrowOutward />
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-stone-950/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-10 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-10">
          {[
            ["80+", "YouTube subscribers"],
            ["1.3k+", "TikTok followers"],
            ["500+", "Instagram followers"],
            ["10", "Core web tools"],
          ].map(([value, label]) => (
            <div key={label} className="text-center sm:text-left">
              <p className="text-4xl font-black text-amber-950">{value}</p>
              <p className="mt-1 text-sm font-semibold text-stone-500">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="skills"
        className="mx-auto max-w-7xl scroll-mt-24 px-5 py-16 sm:px-8 lg:px-10"
      >
        <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-wide text-emerald-700">
              Skills in action
            </p>
            <h2 className="mt-2 text-3xl font-black text-amber-950 sm:text-4xl">
              This page is part of the proof.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-stone-600">
            Instead of only listing tools, the page uses React state, mapped
            data, reusable sections, responsive design, icons, media, and clear
            UI composition.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="grid gap-3">
            {showcases.map((item, index) => {
              const Icon = item.Icon;
              const isActive = activeShowcase === index;

              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveShowcase(index)}
                  className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition ${
                    isActive
                      ? "border-amber-950 bg-amber-950 text-white shadow-xl shadow-amber-950/15"
                      : "border-stone-950/10 bg-white text-stone-800 hover:-translate-y-0.5 hover:border-emerald-700/40"
                  }`}
                >
                  <span
                    className={`grid h-12 w-12 shrink-0 place-items-center rounded-lg ${
                      isActive ? "bg-white/15" : "bg-[#f8f3e8]"
                    }`}
                  >
                    <Icon className="text-xl" />
                  </span>
                  <span>
                    <span className="block font-black">{item.title}</span>
                    <span
                      className={`mt-1 block text-sm ${
                        isActive ? "text-white/75" : "text-stone-500"
                      }`}
                    >
                      {item.summary}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="rounded-2xl border border-stone-950/10 bg-white p-5 shadow-xl shadow-stone-950/5 sm:p-7">
            <div className="mb-6 flex items-center justify-between gap-4 border-b border-stone-950/10 pb-5">
              <div>
                <p className="text-sm font-bold uppercase text-stone-500">
                  Active focus
                </p>
                <h3 className="mt-1 text-2xl font-black text-amber-950">
                  {showcases[activeShowcase].title}
                </h3>
              </div>
              <div className="grid h-14 w-14 place-items-center rounded-xl bg-emerald-700 text-2xl text-white">
                <ActiveIcon />
              </div>
            </div>

            <p className="text-lg leading-8 text-stone-700">
              {showcases[activeShowcase].summary}
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {showcases[activeShowcase].proof.map((proof) => (
                <div
                  key={proof}
                  className="rounded-xl border border-stone-950/10 bg-[#f8f3e8] p-4"
                >
                  <FaCode className="mb-3 text-emerald-700" />
                  <p className="text-sm font-bold text-stone-800">{proof}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="stack"
        className="scroll-mt-24 bg-stone-950 px-5 py-16 text-white sm:px-8 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-wide text-emerald-400">
                Tool stack
              </p>
              <h2 className="mt-2 text-3xl font-black sm:text-4xl">
                Technologies I use to build.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-stone-300">
              Each tool has a role in the work: structure, interaction, styling,
              backend logic, and deployment-ready app behavior.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {tools.map(({ name, Icon, color, detail }) => (
              <div
                key={name}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:bg-white/[0.08]"
              >
                <Icon className={`text-4xl ${color}`} />
                <h3 className="mt-5 text-lg font-black">{name}</h3>
                <p className="mt-3 text-sm leading-6 text-stone-300">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="works"
        className="mx-auto max-w-7xl scroll-mt-24 px-5 py-16 sm:px-8 lg:px-10"
      >
        <div>
          <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-wide text-emerald-700">
                Selected works
              </p>
              <h2 className="mt-2 text-3xl font-black text-amber-950 sm:text-4xl">
                Projects people can preview before they open.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-stone-600">
              A quick look at finished builds, live interfaces, and the code
              behind the work.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {works.map((work) => (
              <article
                key={work.title}
                className="group overflow-hidden rounded-2xl border border-stone-950/10 bg-white shadow-xl shadow-stone-950/5 transition hover:-translate-y-1"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-950">
                  <div className="flex h-8 items-center gap-2 border-b border-white/10 bg-stone-900 px-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <span className="ml-2 truncate rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold text-white/70">
                      {work.liveUrl}
                    </span>
                  </div>

                  <iframe
                    src={work.previewUrl}
                    title={`${work.title} preview`}
                    loading="lazy"
                    className="h-[calc(100%-2rem)] w-full border-0 bg-white"
                  />

                  <div className="absolute inset-0 flex items-center justify-center gap-3 bg-stone-950/70 p-4 opacity-100 backdrop-blur-sm transition sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100">
                    <a
                      href={work.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-black text-stone-950 transition hover:-translate-y-0.5"
                    >
                      <FaGithub />
                      GitHub
                    </a>
                    <a
                      href={work.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-700 px-4 py-2.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-emerald-800"
                    >
                      Browser
                      <MdArrowOutward />
                    </a>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <p className="text-sm font-bold text-emerald-700">
                    {work.type}
                  </p>
                  <h3 className="mt-2 text-2xl font-black text-amber-950">
                    {work.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-stone-600">
                    {work.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {work.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#f8f3e8] px-3 py-1 text-xs font-bold text-stone-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="proof"
        className="mx-auto max-w-7xl scroll-mt-24 px-5 py-16 sm:px-8 lg:px-10"
      >
        <div className="mb-8">
          <p className="text-sm font-black uppercase tracking-wide text-emerald-700">
            Featured proof
          </p>
          <h2 className="mt-2 text-3xl font-black text-amber-950 sm:text-4xl">
            What this portfolio communicates.
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {featuredBuilds.map((build) => (
            <article
              key={build.name}
              className="rounded-2xl border border-stone-950/10 bg-white p-6 shadow-lg shadow-stone-950/5 transition hover:-translate-y-1"
            >
              <p className="text-sm font-bold text-emerald-700">{build.type}</p>
              <h3 className="mt-3 text-2xl font-black text-amber-950">
                {build.name}
              </h3>
              <p className="mt-4 text-sm leading-7 text-stone-600">
                {build.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {build.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#f8f3e8] px-3 py-1 text-xs font-bold text-stone-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="creator"
        className="mx-auto grid max-w-7xl scroll-mt-24 gap-8 px-5 pb-20 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:px-10"
      >
        <div>
          <p className="text-sm font-black uppercase tracking-wide text-emerald-700">
            Creator side
          </p>
          <h2 className="mt-2 text-3xl font-black text-amber-950 sm:text-4xl">
            Code and film-making.
          </h2>
          <p className="mt-5 text-base leading-8 text-stone-700">
            My content creation side helps me communicate clearly, think in
            stories, and showcase my web development skills.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="https://www.youtube.com/@cassyboi16"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-red-700"
            >
              <FaYoutube />
              YouTube
            </a>
            <a
              href="https://www.tiktok.com/@cassyboi16"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-stone-950 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-stone-800"
            >
              <FaTiktok />
              TikTok
            </a>
            <a
              href="https://www.instagram.com/cassyboi16"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-pink-600 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-pink-700"
            >
              <FaInstagram />
              Instagram
            </a>
          </div>
        </div>
        {/* Video content */}

        <a href="https://www.youtube.com/watch?v=9C1gCxrbeXA" target="_blank" rel="noopener noreferrer">
          <Image
            src="/A MOMENT TO BREATHE THUMBNAIL 4.png.jpg"
            alt="Video thumbnail"
            width={800}
            height={450}
            className="aspect-video w-full object-cover gap-1 rounded-2xl border border-stone-950/10 bg-[#f8f3e8] p-3 shadow-2xl shadow-stone-950/15"
        /></a>

        
      </section>
    </main>
  );
}
