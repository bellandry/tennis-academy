"use client";

import { programs } from "@/constants";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { animateOnScroll } from "../lib/animations";

export default function ProgramsSection() {
  useEffect(() => {
    animateOnScroll();
    window.addEventListener("scroll", animateOnScroll);
    return () => window.removeEventListener("scroll", animateOnScroll);
  }, []);

  return (
    <section id="programmes" className="section-padding bg-gray-50 relative">
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

        <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl gap-8 mx-auto">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden border ${program.borderColor} bg-white shadow-subtle transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-on-scroll`}
              style={{ animationDelay: `${0.15 * (index + 1)}s` }}
            >
              <Link href={`/programmes/${program.slug}`} className="block">
                <div className="aspect-[3/2] relative">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url('${program.image}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full p-4">
                    <h3 className="text-white text-xl font-bold">
                      {program.title}
                    </h3>
                  </div>
                </div>
              </Link>

              <div className="p-6">
                <p className="text-gray-600 mb-4">{program.description}</p>

                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2">
                      <span
                        className={`mt-1 shrink-0 w-4 h-4 rounded-full ${program.color} flex items-center justify-center`}
                      >
                        <span
                          className={`block w-2 h-2 rounded-full ${program.textColor}`}
                        ></span>
                      </span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/programmes/${program.slug}`}
                  className={`inline-flex items-center ${program.textColor} font-medium hover:underline`}
                >
                  <span>En savoir plus</span>
                  <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/programmes" className="btn-tennis animate-on-scroll">
            Voir tous nos programmes
          </Link>
        </div>
      </div>
    </section>
  );
}
