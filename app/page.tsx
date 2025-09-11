import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProgramsSection } from "@/components/programs-section";
import { AdmissionsSection } from "@/components/admissions-section";
import { Footer } from "@/components/footer";
import { LocationSection } from "@/components/location-section";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <div className="*:container *:mx-auto">
        <Header />
      </div>
      <main>
        <HeroSection />
        <div className="*:container *:mx-auto">
          <AboutSection />
          <ProgramsSection />
          <AdmissionsSection />
          <LocationSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
