"use client";

import { FaEnvelope, FaGithub } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

const emailAddress = "cassyboi16@proton.me";
const emailHref = `mailto:${emailAddress}?subject=${encodeURIComponent(
  "Project inquiry from your portfolio",
)}&body=${encodeURIComponent(
  "Hi Cassyboi,\n\nI saw your portfolio and would like to talk about",
)}`;

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#f8f3e8] text-stone-950">
      <section
        id="contact"
        className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-12 px-4 py-16 sm:gap-16 sm:px-6 sm:py-24 lg:px-10"
      >
        <div className="text-center">
          <p className="text-xs font-black uppercase tracking-wider text-emerald-700 sm:text-sm">
            Contact
          </p>
          <h1 className="mt-2 text-3xl font-black leading-tight text-amber-950 sm:mt-3 sm:text-4xl md:text-5xl lg:text-6xl">
            Let's build something useful.
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-stone-700 sm:mt-5 sm:text-base sm:leading-8 md:text-lg">
            Have a project in mind, a collaboration idea, or an opportunity to
            discuss? Reach out through your preferred channel.
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-6 sm:gap-8 md:w-auto">
          <div className="w-full rounded-2xl border border-stone-950/10 bg-white p-6 shadow-xl shadow-stone-950/5 sm:w-auto sm:p-8">
            <p className="text-center text-xs leading-6 text-stone-600 sm:text-sm sm:leading-7">
              Direct email
            </p>
            <p className="mt-2 text-center text-base font-bold text-amber-950 sm:mt-3 sm:text-lg">
              {emailAddress}
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-4 md:gap-6">
            <a
              href={emailHref}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border-2 border-amber-950 bg-amber-950 px-6 py-3 text-xs font-bold text-white shadow-lg shadow-amber-950/20 transition hover:-translate-y-0.5 hover:bg-stone-950 hover:border-stone-950 sm:flex-initial sm:px-8 sm:text-sm"
            >
              <FaEnvelope />
              Email Me
            </a>
            <a
              href="https://github.com/Cassyboi16-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border-2 border-amber-950 bg-white px-6 py-3 text-xs font-bold text-amber-950 shadow-lg shadow-amber-950/10 transition hover:-translate-y-0.5 hover:border-stone-950 hover:text-stone-950 sm:flex-initial sm:px-8 sm:text-sm"
            >
              <FaGithub />
              GitHub
              <MdArrowOutward />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
