"use client";

import { features } from "@/constants";
import { animateOnScroll } from "@/lib/animations";
import { useEffect } from "react";

export default function AboutSection() {
  useEffect(() => {
    animateOnScroll();
    window.addEventListener("scroll", animateOnScroll);
    return () => window.removeEventListener("scroll", animateOnScroll);
  }, []);

  return (
    <section id="a-propos" className="relative bg-white section-padding">
      <div className="container px-6 mx-auto md:px-8">
        <div className="mb-16 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-tennis-100 text-tennis-600 font-medium text-sm mb-4 animate-on-scroll">
            À propos de nous
          </span>
          <h2 className="section-heading animate-on-scroll">
            Notre passion pour{" "}
            <span className="text-gradient">l&apos;excellence</span>
          </h2>
          <p className="section-subheading animate-on-scroll">
            Depuis plus de 10 ans, nous développons des talents et partageons
            notre passion pour le tennis à travers une approche pédagogique
            innovante et personnalisée.
          </p>
        </div>

        <div className="grid items-center gap-16 md:grid-cols-2">
          <div
            className="relative animate-on-scroll"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="overflow-hidden rounded-2xl shadow-subtle-lg">
              <div className="aspect-[4/3] relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-tennis-600/20 to-transparent"></div>
                {/* Replace with actual image later */}
                <div
                  className="absolute inset-0 bg-tennis-200"
                  style={{
                    backgroundImage: `url('/fota-team.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute w-24 h-24 rounded-lg -bottom-5 -right-5 bg-tennis-100 -z-10"></div>
            <div className="absolute w-16 h-16 border-2 rounded-lg -top-5 -left-5 border-tennis-300 -z-10"></div>
          </div>

          <div
            className="space-y-6 animate-on-scroll"
            style={{ animationDelay: "0.4s" }}
          >
            <h3 className="mb-4 text-2xl font-bold md:text-3xl">
              Notre histoire et notre mission
            </h3>

            <p className="mb-4 text-gray-600">
              Fondée en 2012 par d&apos;anciens joueurs professionnels, notre
              académie s&apos;est donnée pour mission de rendre accessible
              l&apos;apprentissage du tennis de qualité à tous les passionnés,
              quel que soit leur niveau.
            </p>

            <p className="mb-8 text-gray-600">
              Nos méthodes d&apos;enseignement combinent techniques
              traditionnelles et approches modernes, avec un accent particulier
              sur le développement personnel de chaque joueur.
            </p>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg shrink-0 bg-tennis-50">
                    <feature.icon size={24} className="text-tennis-500" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-medium text-gray-800">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
