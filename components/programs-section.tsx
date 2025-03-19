"use client";

import { programs } from "@/constants";
import Link from "next/link";
import { useEffect } from "react";
import { animateOnScroll } from "../lib/animations";
import { ProgramCard } from "./program-card";

export default function ProgramsSection() {
  useEffect(() => {
    animateOnScroll();
    window.addEventListener("scroll", animateOnScroll);
    return () => window.removeEventListener("scroll", animateOnScroll);
  }, []);

  return (
    <section id="programs" className="section-padding bg-gray-50 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 pointer-events-none h-32"></div>

      <div className="container mx-auto px-6 md:px-8 relative">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-tennis-100 text-tennis-600 font-medium text-sm mb-4 animate-on-scroll">
            Nos programmes
          </span>
          <h2 className="section-heading animate-on-scroll">
            Programmes adaptés à{" "}
            <span className="text-gradient">tous les niveaux</span>
          </h2>
          <p className="section-subheading animate-on-scroll">
            Que vous soyez débutant ou joueur confirmé, nous avons un programme
            qui correspond à vos besoins et objectifs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto">
          {programs.slice(1, 4).map((program, index) => (
            <ProgramCard program={program} index={index} key={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/programs/debutants"
            className="btn-tennis animate-on-scroll"
          >
            Voir tous nos programmes
          </Link>
        </div>
      </div>
    </section>
  );
}
