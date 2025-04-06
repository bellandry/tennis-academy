import { ProgramProps } from "@/constants";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export type ProgramCardProps = {
  program: ProgramProps;
  index: number;
};

export const ProgramCard = ({ program, index }: ProgramCardProps) => {
  return (
    <div
      className={`rounded-xl overflow-hidden border ${program.borderColor} bg-white shadow-subtle transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-on-scroll`}
      style={{ animationDelay: `${0.15 * (index + 1)}s` }}
    >
      <Link href={`/programs/${program.slug}`} className="block">
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
            <h3 className="text-xl font-bold text-white">{program.title}</h3>
          </div>
        </div>
      </Link>

      <div className="p-6">
        <p className="mb-4 text-gray-600">{program.description}</p>

        <ul className="mb-6 space-y-2">
          {program.features.map((feature, fIndex) => (
            <li key={fIndex} className="flex items-start gap-2">
              <span
                className={`mt-1 shrink-0 w-4 h-4 rounded-full ${program.color} flex items-center justify-center`}
              >
                <span
                  className={`block w-2 h-2 rounded-full ${program.color}`}
                />
              </span>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>

        <Link
          href={`/programs/${program.slug}`}
          className={`inline-flex items-center ${program.textColor}  ${program.color} px-2 py-1 rounded-full font-medium hover:underline`}
        >
          <span>En savoir plus</span>
          <ChevronRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};
