import CustomCursor from "@/components/animation/CustomCursor";
import ScrollProgress from "@/components/animation/ScrollProgress";
import AboutSection from "@/components/sections/AboutSection";
import AcademicsSection from "@/components/sections/AcademicsSection";
import AdmissionsSection from "@/components/sections/AdmissionsSection";
import CampusSection from "@/components/sections/CampusSection";
import HeroSection from "@/components/sections/HeroSection";
import SportsSection from "@/components/sections/SportsSection";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main id="top">
      <ScrollProgress />
      <CustomCursor />

      <Navbar />

      <HeroSection />

      <AboutSection />

      <StatsSection />

      <AcademicsSection />

      <CampusSection />

      <SportsSection />

      <TestimonialsSection />

      <AdmissionsSection />

      <Footer />
    </main>
  );
}
