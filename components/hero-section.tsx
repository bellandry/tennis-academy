"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Button } from "./ui/button";

export default function HeroSection() {
  const ballRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const ballElem = ballRef.current;
      const shadowElem = shadowRef.current;

      if (ballElem && shadowElem) {
        const xPos = (clientX / window.innerWidth - 0.5) * 100;
        const yPos = (clientY / window.innerHeight - 0.5) * 100;

        ballElem.style.transform = `translate(${xPos}px, ${yPos}px)`;
        shadowElem.style.transform = `translate(${xPos * 1.5}px, ${
          yPos * 1.5
        }px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-tennis-50 to-white" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-tennis-100/50 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 md:px-8 relative z-10 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-tennis-100 text-tennis-600 font-medium text-sm mb-6 animate-fade-in">
              Bienvenue à Fomekong Tennis Academy
            </span>

            <h1
              className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Perfectionnez votre{" "}
              <span className="text-gradient">jeu de tennis</span> avec les
              meilleurs
            </h1>

            <p
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 animate-fade-in"
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
        <div
          ref={shadowRef}
          className="absolute inset-0 bg-tennis-400/20 rounded-full blur-xl transform scale-75"
        ></div>
        <div
          ref={ballRef}
          className="absolute inset-0 bg-tennis-300 rounded-full border-2 border-white"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4) 0%, transparent 20%), radial-gradient(circle at 70% 70%, rgba(0,0,0,0.1) 0%, transparent 20%)",
          }}
        ></div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce-subtle hidden md:block">
        <Link
          href="#a-propos"
          className="flex flex-col items-center text-gray-500 hover:text-tennis-500 transition-colors"
        >
          <span className="text-sm font-medium mb-2">Découvrir</span>
          <ChevronDown size={20} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
}
