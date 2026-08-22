import { programmes, type ProgramProps } from "@/constants";
import { ArrowUpRight, Dumbbell, GraduationCap, Medal, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export type ProgramCardProps = {
  program: ProgramProps;
  index: number;
};

const programIcons = [GraduationCap, Dumbbell, Medal, Sparkles];

export const ProgramCard = ({ program, index }: ProgramCardProps) => {
  const Icon = programIcons[index] ?? Sparkles;
  const detailProgram = programmes.find(({ id }) => id === program.slug);
  const colors = detailProgram ?? {
    color: program.color,
    borderColor: program.borderColor,
    textColor: program.textColor,
    lightColor: "bg-white",
    highlightColor: "bg-slate-900",
    highlightTextColor: "text-white",
  };

  return (
    <article
      className={`group overflow-hidden rounded-[1.5rem] border-2 ${colors.borderColor} ${colors.color} shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/10 animate-on-scroll`}
      style={{ animationDelay: `${0.15 * (index + 1)}s` }}
    >
      <Link href={`/programs/${program.slug}`} className="block">
        <div className="relative aspect-[1.1] overflow-hidden bg-white/40">
          <Image
            src={program.image}
            alt={program.title}
            fill
            sizes="(max-width: 768px) 90vw, (max-width: 1280px) 45vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
          <div className={`absolute left-4 top-4 flex size-11 items-center justify-center rounded-xl ${colors.highlightColor} ${colors.highlightTextColor} shadow-lg`}>
            <Icon className="size-5" />
          </div>
          <div className={`absolute right-4 top-4 rounded-full ${colors.lightColor} px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] ${colors.textColor} shadow-sm backdrop-blur-sm`}>
            0{index + 1}
          </div>
          <h3 className="absolute bottom-4 left-4 right-4 text-xl font-semibold leading-tight text-white">
            {program.title}
          </h3>
        </div>
      </Link>

      <div className="p-5 md:p-6">
        <p className="min-h-16 text-sm leading-6 text-slate-700">{program.description}</p>

        <ul className={`mt-5 space-y-2.5 border-t ${colors.borderColor} pt-5`}>
          {program.features.slice(0, 3).map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm font-medium text-slate-800">
              <span className={`size-2 rounded-full ${colors.textColor}`} />
              {feature}
            </li>
          ))}
        </ul>

        <Link
          href={`/programs/${program.slug}`}
          className={`mt-7 inline-flex w-full items-center justify-center rounded-full ${colors.highlightColor} ${colors.highlightTextColor} px-5 py-3 text-sm font-bold shadow-md transition-all hover:-translate-y-0.5 hover:opacity-90 hover:shadow-lg`}
        >
          Découvrir ce programme
          <ArrowUpRight className="ml-2 size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
};
