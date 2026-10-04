const stats = [
  {
    value: "22",
    label: "Acre campus",
  },
  {
    value: "16+",
    label: "Sports",
  },
  {
    value: "24×7",
    label: "Medical assistance",
  },
  {
    value: "IV–XII",
    label: "Academic classes",
  },
];

export default function StatsSection() {
  return (
    <section className="bg-[#10243e] px-6 py-16 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="px-5 py-5 text-center md:px-8">
            <p className="text-4xl font-semibold tracking-tight text-[#c6a15b] sm:text-5xl">
              {stat.value}
            </p>

            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/50">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
