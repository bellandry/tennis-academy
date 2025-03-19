import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ProgramsSection from "@/components/programs-section";
import TestimonialsSection from "@/components/testimonials-section";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
