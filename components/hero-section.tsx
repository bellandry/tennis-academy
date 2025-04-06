"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Button } from "./ui/button";

export default function HeroSection() {
  const ballRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const ballElem = ballRef.current;

      if (ballElem) {
        const xPos = (clientX / window.innerWidth - 0.5) * 20;
        const yPos = (clientY / window.innerHeight - 0.5) * 20;

        ballElem.style.transform = `translate(${xPos}px, ${yPos}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="accueil"
      className="relative flex items-center justify-center min-h-screen pt-16 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-tennis-50 to-white" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-tennis-100/50 blur-3xl" />
      </div>

      <div className="container relative z-10 px-6 py-16 mx-auto md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-tennis-100 text-tennis-600 font-medium text-sm mb-6 animate-fade-in">
              Bienvenue à Fomekong Tennis Academy
            </span>

            <h1
              className="mb-6 text-5xl font-bold md:text-7xl animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Perfectionnez votre{" "}
              <span className="text-gradient">jeu de tennis</span> avec les
              meilleurs
            </h1>

            <p
              className="max-w-2xl mx-auto mb-10 text-lg text-gray-600 md:text-xl animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              Des cours adaptés à tous les niveaux dispensés par des
              professionnels passionnés dans un cadre exceptionnel.
            </p>

            <div
              className="flex flex-wrap justify-center gap-4 animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              <Button
                asChild
                size="lg"
                className="w-full md:w-1/3 bg-tennis hover:bg-tennis-600"
              >
                <Link href="#contact" className="btn-tennis">
                  S&apos;inscrire maintenant
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="w-full md:w-1/3 bg-tennis-50 text-tennis hover:bg-tennis-600 hover:text-tennis-50"
              >
                <Link href="#programs" className="btn-tennis-outline">
                  Découvrir nos programmes
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Tennis ball decoration */}
      <div className="absolute top-1/3 right-[10%] w-32 h-32 pointer-events-none hidden md:block">
        <Image
          ref={ballRef}
          src="/ball.png"
          alt="tennis ball"
          width="200"
          height="200"
          className="absolute opacity-80"
        />
      </div>

      {/* Scroll indicator */}
      <div className="absolute hidden -translate-x-1/2 bottom-12 left-1/2 animate-bounce-subtle md:block">
        <Link
          href="#a-propos"
          className="flex flex-col items-center text-gray-500 transition-colors hover:text-tennis-500"
        >
          <span className="mb-2 text-sm font-medium">Découvrir</span>
          <ChevronDown size={20} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
}
