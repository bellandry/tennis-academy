import Link from "next/link";

export type NavigationProgramsProps = {
  programs: {
    id: string;
    image: string;
    title: string;
    description: string;
    highlightColor: string;
    highlightTextColor: string;
    textColor: string;
    color: string;
    borderColor: string;
  }[];
  programId: string;
};

export const NavigationPrograms = ({
  programs,
  programId,
}: NavigationProgramsProps) => {
  return (
    <section className="bg-gray-50 border-y border-gray-200">
      <div className="container mx-auto px-6 py-4 overflow-x-auto">
        <div className="flex space-x-4 min-w-max">
          {programs.map((program) => (
            <Link
              key={program.id}
              href={`/programs/${program.id}`}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                    ${
                      program.id === programId
                        ? `${program.textColor} ${program.color} ring-1 ring-inset ${program.borderColor}`
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
            >
              {program.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
