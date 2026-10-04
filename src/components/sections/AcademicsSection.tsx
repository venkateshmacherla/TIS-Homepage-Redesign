import { ArrowUpRight } from "lucide-react";

const academicFeatures = [
  {
    number: "01",
    title: "CBSE Curriculum",
    description:
      "A CBSE-based academic structure designed around reasoning, analytical thinking and skill-based learning.",
  },
  {
    number: "02",
    title: "Digital Learning",
    description:
      "Digital classrooms, technology-enabled learning and tools designed to increase student engagement.",
  },
  {
    number: "03",
    title: "Experiential Learning",
    description:
      "Projects, educational trips, seminars and activities that connect classroom learning with real experiences.",
  },
];

export default function AcademicsSection() {
  return (
    <section id="academics" className="bg-white px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#c6a15b]">
              Academics
            </p>

            <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#10243e] sm:text-6xl">
              Learning that prepares students for what comes next.
            </h2>
          </div>

          <a
            href="#admissions"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#10243e]"
          >
            Explore academics
            <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-[#e5e1d8] bg-[#e5e1d8] md:grid-cols-3">
          {academicFeatures.map((feature) => (
            <article key={feature.number} className="bg-white p-8 sm:p-10">
              <span className="text-sm font-medium text-[#c6a15b]">
                {feature.number}
              </span>

              <h3 className="mt-16 text-2xl font-semibold text-[#10243e]">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-[#6b7280]">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
