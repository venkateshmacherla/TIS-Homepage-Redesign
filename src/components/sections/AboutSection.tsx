import { ArrowUpRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#f7f5ef] px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#c6a15b]">
              About TIS
            </p>

            <h2 className="mt-5 max-w-md text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#10243e] sm:text-5xl">
              More than a school. A place to belong.
            </h2>
          </div>

          <div>
            <p className="max-w-3xl text-xl leading-9 text-[#10243e]/75 sm:text-2xl">
              Tulas International School brings together academics, sports, arts
              and meaningful experiences to support the overall development of
              every student.
            </p>

            <p className="mt-7 max-w-2xl leading-7 text-[#6b7280]">
              TIS describes its approach as a blend of modern education and
              traditional values, creating an environment where students can
              learn, explore and develop confidence beyond the classroom.
            </p>

            <a
              href="#academics"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#10243e] transition-colors hover:text-[#c6a15b]"
            >
              Discover the TIS experience
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
