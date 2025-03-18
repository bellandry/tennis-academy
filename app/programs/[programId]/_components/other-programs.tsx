import { Card, CardContent } from "@/components/ui/card";
import { programs } from "@/constants";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export type OtherProgramsProps = {
  programId: string;
};

export const OtherPrograms = ({ programId }: OtherProgramsProps) => {
  return (
    <section className="bg-gray-50 section-padding border-t border-gray-200">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl text-center mb-12 animate-on-scroll">
          Autres programmes
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs
            .filter((program) => program.slug !== programId)
            .slice(0, 3)
            .map((program, index) => (
              <Card
                key={program.slug}
                className={`overflow-hidden border ${program.borderColor} transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-on-scroll`}
                style={{ animationDelay: `${0.15 * (index + 1)}s` }}
              >
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

                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <Link
                    href={`/programs/${program.slug}`}
                    className={`inline-flex items-center ${program.textColor} font-medium hover:underline`}
                  >
                    <span>En savoir plus</span>
                    <ChevronRight size={16} className="ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
};
