import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main id="top">
      <Navbar />

      <section className="flex min-h-screen items-center justify-center px-6">
        <div className="text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#c6a15b]">
            Tulas International School
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-[#10243e] md:text-6xl">
            A modern beginning starts here.
          </h1>
        </div>
      </section>
    </main>
  );
}
