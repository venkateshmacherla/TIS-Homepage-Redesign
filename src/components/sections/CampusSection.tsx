import { ArrowUpRight } from "lucide-react";

const campusFeatures = [
  "Digital workstations",
  "Well-equipped laboratories",
  "20,000+ book library",
  "Multiple clubs & societies",
];

export default function CampusSection() {
  return (
    <section
      id="campus"
      className="bg-[#10243e] px-6 py-24 text-white sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-125 overflow-hidden rounded-4xl bg-[radial-gradient(circle_at_30%_20%,rgba(198,161,91,0.28),transparent_35%),linear-gradient(135deg,#1c3858,#0b1b30)]">
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,20,35,0.7),transparent_55%)]" />

            <div className="absolute bottom-8 left-8">
              <p className="text-xs uppercase tracking-[0.25em] text-white/50">
                Campus life
              </p>

              <p className="mt-2 text-3xl font-semibold">
                Space to learn.
                <br />
                Space to grow.
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#c6a15b]">
              The TIS experience
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
              An environment built around opportunity.
            </h2>

            <p className="mt-7 leading-7 text-white/65">
              From laboratories and digital learning spaces to a large library,
              clubs and sporting infrastructure, TIS creates opportunities for
              students to explore interests beyond conventional classroom
              learning.
            </p>

            <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
              {campusFeatures.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center justify-between py-5"
                >
                  <span className="text-sm text-white/80">{feature}</span>

                  <ArrowUpRight size={17} className="text-[#c6a15b]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
