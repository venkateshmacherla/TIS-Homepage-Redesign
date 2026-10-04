import { ArrowUpRight } from "lucide-react";

export default function AdmissionsSection() {
  return (
    <section id="admissions" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-4xl bg-[#10243e] px-7 py-16 text-white sm:px-12 sm:py-20 lg:px-16">
          <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#c6a15b]/15 blur-3xl" />

          <div className="relative max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#c6a15b]">
              Admissions
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-6xl">
              Give your child a place to discover what they can become.
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65">
              Explore the TIS experience and take the next step toward joining a
              community built around academics, sports, creativity and personal
              growth.
            </p>

            <a
              href="https://admission.tis.edu.in/"
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#c6a15b] px-6 py-3.5 text-sm font-semibold text-[#10243e] transition-transform duration-300 hover:scale-105"
            >
              Explore Admissions
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
