import AboutSection from "@/components/about-section";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <HeroSection />
      <AboutSection />
    </div>
  );
}
