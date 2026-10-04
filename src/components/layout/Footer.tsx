import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0b1b30] px-6 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-10 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#c6a15b] text-sm font-semibold text-[#c6a15b]">
                TIS
              </span>

              <span className="text-sm font-medium tracking-[0.2em]">
                TULAS
              </span>
            </div>

            <p className="mt-5 max-w-md text-sm leading-6 text-white/50">
              Tulas International School — an environment for academics, sports,
              creativity and holistic development.
            </p>
          </div>

          <a
            href="#top"
            className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-[#c6a15b]"
          >
            Back to top
            <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="flex flex-col justify-between gap-3 pt-6 text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Tulas International School</p>
          <p>Designed for the TIS Frontend Developer Assessment</p>
        </div>
      </div>
    </footer>
  );
}
