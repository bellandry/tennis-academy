import { ChevronDown } from "lucide-react";
import Link from "next/link";
import AnimatedBall from "./animated-ball";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <section
      id="accueil"
      aria-label="Section d'accueil Fomekong Tennis Academy"
      className="relative flex items-center justify-center min-h-screen pt-16 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-tennis-50 to-white" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-tennis-100/50 blur-3xl" />
      </div>

      <div className="container relative z-10 px-6 py-16 mx-auto md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <h2 className="inline-block px-4 py-1.5 rounded-full bg-tennis-100 text-tennis-600 font-medium text-sm mb-6 animate-fade-in">
              Bienvenue à Fomekong Tennis Academy
            </h2>

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
                <Link
                  href="#contact"
                  className="btn-tennis"
                  title="Aller à la section inscription"
                >
                  S&apos;inscrire maintenant
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="w-full md:w-1/3 bg-tennis-50 text-tennis hover:bg-tennis-600 hover:text-tennis-50"
              >
                <Link
                  href="#programs"
                  className="btn-tennis-outline"
                  title="Consulter nos programmes de formation"
                >
                  Découvrir nos programmes
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <AnimatedBall />

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
