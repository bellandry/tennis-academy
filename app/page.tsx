import AboutSection from "@/components/about-section";
import ContactCtaSection from "@/components/contact-cta-section";
import ContactCardSection from "@/components/contact-card-section";
import Footer from "@/components/footer";
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
      <ContactCtaSection />
      <ContactCardSection />
      <Footer />
    </div>
  );
}
