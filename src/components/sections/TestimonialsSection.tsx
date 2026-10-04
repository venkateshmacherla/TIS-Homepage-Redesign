const testimonials = [
  {
    quote:
      "Tula's gives a comprehensive environment for our child to grow. The sports, academics and extra-curricular activities have helped Krishna in knowing himself better.",
    name: "Namita Agarwal",
    role: "Parent",
  },
  {
    quote:
      "Our experience is very amazing with school. Staff is very cooperative and supportive. Our son always admires the school whenever we talk with him.",
    name: "Sandeep Kumar",
    role: "Parent",
  },
  {
    quote:
      "Tula's International School is doing excellent in all the fields especially giving a lot of exposure to children. Very nicely planned and organized academic programme.",
    name: "Suresh Kumar",
    role: "Parent",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-white px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#c6a15b]">
            Parent voices
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#10243e] sm:text-6xl">
            A school experience that stays with you.
          </h2>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-3xl border border-[#e5e1d8] bg-[#f7f5ef] p-8 sm:p-10"
            >
              <span className="text-5xl leading-none text-[#c6a15b]">“</span>

              <p className="mt-5 text-lg leading-8 text-[#10243e]/80">
                {testimonial.quote}
              </p>

              <div className="mt-8 border-t border-[#10243e]/10 pt-5">
                <p className="font-semibold text-[#10243e]">
                  {testimonial.name}
                </p>
                <p className="mt-1 text-sm text-[#6b7280]">
                  {testimonial.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
