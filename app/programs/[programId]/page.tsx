"use client";

import NotFoundPage from "@/app/not-found";
import { programmes } from "@/constants";
import { animateOnScroll } from "@/lib/animations";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { InfoCards } from "./_components/info-cards";
import { MainContent } from "./_components/main-content";
import { NavigationPrograms } from "./_components/navigation-programs";
import { OtherPrograms } from "./_components/other-programs";
import { ProgramHero } from "./_components/program-hero";

export default function Programmes() {
  const { programId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    animateOnScroll();
    window.addEventListener("scroll", animateOnScroll);
    return () => window.removeEventListener("scroll", animateOnScroll);
  }, [programId]);

  const currentProgram = programmes.find((p) => p.id === programId);

  if (!currentProgram) {
    return <NotFoundPage />;
  }

  const infoDatas = {
    duration: currentProgram.duration,
    frequency: currentProgram.frequency,
    maxGroupSize: String(currentProgram.maxGroupSize),
    lightColor: currentProgram.lightColor,
    price: currentProgram.price,
    textColor: currentProgram.textColor,
    color: currentProgram.color,
    borderColor: currentProgram.borderColor,
    features: currentProgram.features,
  };

  const mainDatas = {
    id: currentProgram.id,
    longDescription: currentProgram.longDescription,
    ageGroups: currentProgram.ageGroups,
    maxGroupSize: String(currentProgram.maxGroupSize),
    highlightTextColor: currentProgram.highlightTextColor,
    highlightColor: currentProgram.highlightColor,
    lightColor: currentProgram.lightColor,
    textColor: currentProgram.textColor,
    color: currentProgram.color,
    borderColor: currentProgram.borderColor,
    schedule: currentProgram.schedule,
  };

  return (
    <>
      <main className="pt-20">
        {/* Hero for the program */}
        <ProgramHero currentProgram={currentProgram} />

        {/* Navigation between programs */}
        <NavigationPrograms
          programs={programmes}
          programId={currentProgram.id}
        />

        {/* Program details */}
        <section id="details" className="section-padding">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Left column: Info cards */}
              <InfoCards currentProgram={infoDatas} />

              {/* Right column: Main content */}
              <MainContent currentProgram={mainDatas} />
            </div>
          </div>
        </section>

        {/* Other programs section */}
        <OtherPrograms programId={currentProgram.id} />
      </main>
    </>
  );
}
