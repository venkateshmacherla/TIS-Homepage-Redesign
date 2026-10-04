import AboutSection from "@/components/sections/AboutSection";
import AcademicsSection from "@/components/sections/AcademicsSection";
import CampusSection from "@/components/sections/CampusSection";
import HeroSection from "@/components/sections/HeroSection";
import Navbar from "@/components/layout/Navbar";
import StatsSection from "@/components/sections/StatsSection";

export default function Home() {
  return (
    <main id="top">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <AcademicsSection />
      <CampusSection />
    </main>
  );
}
