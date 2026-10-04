import Image from "next/image";
import { ArrowDownRight, ArrowRight } from "lucide-react";

const stats = [
  { value: "22", label: "Acres of campus" },
  { value: "16+", label: "Sports & activities" },
  { value: "24×7", label: "Medical assistance" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#10243e] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(198,161,91,0.18),transparent_32%)]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-20 pt-32 lg:px-8">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="max-w-2xl">
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-[#c6a15b]">
              Tulas International School
            </p>

            <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
              Shaping
              <span className="block text-[#c6a15b]">futures.</span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
              A learning environment where curiosity, character and a global
              perspective come together to prepare students for the world ahead.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#about"
                className="group inline-flex items-center gap-3 rounded-full bg-[#c6a15b] px-6 py-3.5 text-sm font-semibold text-[#10243e] transition-transform duration-300 hover:scale-105"
              >
                Explore TIS
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#admissions"
                className="inline-flex items-center rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium text-white transition-colors duration-300 hover:border-[#c6a15b] hover:text-[#c6a15b]"
              >
                Admissions
              </a>
            </div>

            <div className="mt-14 grid max-w-lg grid-cols-3 gap-5 border-t border-white/15 pt-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-semibold text-[#c6a15b] sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-white/50">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative ml-auto aspect-4/5 w-full max-w-xl overflow-hidden rounded-4xl">
              <Image
                src="/images/img-hero-campus.png"
                alt="Tulas International School campus"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-t from-[#10243e]/50 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-white/60">
                    Dehradun
                  </p>
                  <p className="mt-1 text-lg font-medium">A place to grow</p>
                </div>

                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#10243e]">
                  <ArrowDownRight size={20} />
                </span>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-white/10 bg-[#1a3150] px-5 py-4 shadow-xl sm:block">
              <p className="text-xs text-white/50">Learning beyond</p>
              <p className="mt-1 text-sm font-medium">the classroom</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
