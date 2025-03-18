import { ProgramCard } from "@/components/program-card";
import { programs } from "@/constants";

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
              <ProgramCard program={program} index={index} key={index} />
            ))}
        </div>
      </div>
    </section>
  );
};
