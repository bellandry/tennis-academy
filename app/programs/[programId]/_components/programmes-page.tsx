"use client";

import NotFoundPage from "@/app/not-found";
import { programmes } from "@/constants";
import { useEffect } from "react";
import { InfoCards } from "./info-cards";
import { MainContent } from "./main-content";
import { NavigationPrograms } from "./navigation-programs";
import { OtherPrograms } from "./other-programs";
import { ProgramHero } from "./program-hero";

type ProgrammesPageProps = {
  programId: string;
};

export function ProgrammesPage({ programId }: ProgrammesPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
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
    <main className="pt-20">
      <ProgramHero currentProgram={currentProgram} />

      <NavigationPrograms
        programs={programmes}
        programId={currentProgram.id}
      />

      <section id="details" className="section-padding">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <InfoCards currentProgram={infoDatas} />
            <MainContent currentProgram={mainDatas} />
          </div>
        </div>
      </section>

      <OtherPrograms programId={currentProgram.id} />
    </main>
  );
}
