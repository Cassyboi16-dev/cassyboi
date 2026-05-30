"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { GrGithub } from "react-icons/gr";

export default function Navbar() {
  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
      label: "Socials",
      href: "#",
      isDropdown: true,
      subLinks: [
        {
          label: "Twitter",
          href: "https://x.com/silent_dev87223",
          icon: <FaXTwitter />,
        },
        {
          label: "GitHub",
          href: "https://github.com/Cassyboi16-dev",
          icon: <GrGithub />,
        },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/chukwuemeka-cas-akuchie-b359bb2bb/",
          icon: <FaLinkedin />,
        },
      ],
    },
  ];

  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (mobileRef.current && !mobileRef.current.contains(event.target)) {
        setMobileOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full bg-black text-white">
      <div className="max-w-4xl mx-auto flex items-center justify-between p-4">
        <Link
          href="/"
          className="text-2xl flex font-bold tracking-wide hover:opacity-90"
        >
          Cassyboi
          <span class="relative flex size-3">
            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
            <span class="relative inline-flex size-3 rounded-full bg-red-600"></span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-2">
          {links.map((link) => {
            if (link.isDropdown) {
              return (
                <div key={link.label} ref={dropdownRef} className="relative">
                  <button
                    onClick={() => setDropdownOpen((s) => !s)}
                    aria-expanded={dropdownOpen}
                    className="uppercase text-sm px-4 py-2 hover:opacity-90 flex items-center gap-2"
                  >
                    {link.label.icon ? link.label.icon : link.label}
                    <svg
                      className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : "rotate-0"}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-44 bg-white text-black rounded shadow-md overflow-hidden z-40">
                      {link.subLinks.map((s) => (
                        <a
                          key={s.href}
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-sm hover:bg-gray-100"
                        >
                          {s.label.icon ? s.label.icon : s.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className="uppercase text-sm px-4 py-2 hover:opacity-90"
              >
                {link.label.icon ? link.label.icon : link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden" ref={mobileRef}>
          <button
            onClick={() => setMobileOpen((s) => !s)}
            aria-label="Toggle menu"
            className="p-2 rounded hover:bg-white/10"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black border-t border-white/5">
          <div className="max-w-4xl mx-auto flex flex-col p-4 gap-1">
            {links.map((link) => {
              if (link.isDropdown) {
                return (
                  <div key={link.label}>
                    <button
                      onClick={() => setDropdownOpen((s) => !s)}
                      className="w-full text-left uppercase px-3 py-2 flex items-center justify-between"
                    >
                      {link.label.icon ? (
                        link.label.icon
                      ) : (
                        <span>{link.label}</span>
                      )}
                      <svg
                        className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : "rotate-0"}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {dropdownOpen && (
                      <div className="pl-4">
                        {link.subLinks.map((s) => (
                          <a
                            key={s.href}
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-3 py-2 text-sm hover:bg-white/5 rounded"
                          >
                            {s.label.icon ? s.label.icon : s.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="uppercase px-3 py-2"
                >
                  {link.icon ? link.icon : link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
