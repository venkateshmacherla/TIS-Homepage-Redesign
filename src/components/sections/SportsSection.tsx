import { ArrowUpRight } from "lucide-react";

const sports = [
  "Archery",
  "Basketball",
  "Cricket",
  "Football",
  "Swimming",
  "Horse Riding",
  "Lawn Tennis",
  "Badminton",
];

export default function SportsSection() {
  return (
    <section id="sports" className="bg-[#f7f5ef] px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#c6a15b]">
              Beyond academics
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#10243e] sm:text-6xl">
              Find your arena.
              <br />
              Find your edge.
            </h2>
          </div>

          <div>
            <p className="max-w-3xl text-xl leading-9 text-[#10243e]/75 sm:text-2xl">
              At TIS, sports are part of the learning experience. Students
              develop discipline, confidence and teamwork while exploring
              different sporting disciplines.
            </p>

            <div className="mt-10 grid grid-cols-2 border-y border-[#10243e]/10 sm:grid-cols-4">
              {sports.map((sport) => (
                <div
                  key={sport}
                  className="border-b border-r border-[#10243e]/10 px-4 py-6 last:border-r-0 sm:px-5"
                >
                  <span className="text-sm font-medium text-[#10243e]">
                    {sport}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#admissions"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#10243e] transition-colors hover:text-[#c6a15b]"
            >
              Explore student life
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
