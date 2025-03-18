import { Button } from "@/components/ui/button";
import Link from "next/link";

export type ProgramHeroProps = {
  currentProgram: {
    image: string;
    title: string;
    description: string;
    highlightColor: string;
    highlightTextColor: string;
  };
};

export const ProgramHero = ({ currentProgram }: ProgramHeroProps) => {
  return (
    <section className="relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${currentProgram.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="container relative z-10 px-6 py-16 md:py-24 mx-auto text-white animate-on-scroll">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {currentProgram.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            {currentProgram.description}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="#contact">
              <Button
                className={`${currentProgram.highlightColor} ${currentProgram.highlightTextColor} hover:opacity-90`}
              >
                S&apos;inscrire maintenant
              </Button>
            </Link>
            <Link href="#details">
              <Button
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
              >
                En savoir plus
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
