"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const navigationItems = [
  { label: "About", href: "#about" },
  { label: "Academics", href: "#academics" },
  { label: "Campus", href: "#campus" },
  { label: "Sports", href: "#sports" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto mt-4 flex w-[calc(100%-2rem)] max-w-7xl items-center justify-between rounded-full border border-white/20 bg-[#10243e]/90 px-5 py-3 text-white shadow-lg backdrop-blur-md md:px-7">
        <a
          href="#top"
          className="flex items-center gap-3"
          onClick={() => setIsOpen(false)}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c6a15b] text-sm font-semibold text-[#c6a15b]">
            TIS
          </span>

          <span className="hidden text-sm font-medium tracking-[0.2em] sm:block">
            TULAS
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-white/80 transition-colors duration-300 hover:text-[#c6a15b]"
            >
              {item.label}
            </a>
          ))}

          <a
            href="#admissions"
            className="rounded-full bg-[#c6a15b] px-5 py-2.5 text-sm font-semibold text-[#10243e] transition-transform duration-300 hover:scale-105"
          >
            Admissions
          </a>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 md:hidden"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isOpen && (
        <div className="mx-4 mt-2 rounded-3xl border border-white/20 bg-[#10243e]/95 p-5 text-white shadow-xl backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-2">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-[#c6a15b]"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#admissions"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-2xl bg-[#c6a15b] px-4 py-3 text-center text-sm font-semibold text-[#10243e]"
            >
              Admissions
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
