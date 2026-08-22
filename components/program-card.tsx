import type { ProgramProps } from "@/constants";
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

  return (
    <article
      className="group overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-tennis-300 hover:shadow-xl hover:shadow-tennis-900/10 animate-on-scroll"
      style={{ animationDelay: `${0.15 * (index + 1)}s` }}
    >
      <Link href={`/programs/${program.slug}`} className="block">
        <div className="relative aspect-[1.1] overflow-hidden bg-tennis-50">
          <Image
            src={program.image}
            alt={program.title}
            fill
            sizes="(max-width: 768px) 90vw, (max-width: 1280px) 45vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/5 to-transparent" />
          <div className="absolute left-4 top-4 flex size-10 items-center justify-center rounded-xl bg-white/90 text-tennis-700 shadow-lg backdrop-blur-sm">
            <Icon className="size-5" />
          </div>
          <h3 className="absolute bottom-4 left-4 right-4 text-xl font-semibold leading-tight text-white">
            {program.title}
          </h3>
        </div>
      </Link>

      <div className="p-5">
        <p className="min-h-16 text-sm leading-6 text-slate-600">{program.description}</p>

        <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-5">
          {program.features.slice(0, 3).map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-slate-700">
              <span className="size-1.5 rounded-full bg-tennis-500" />
              {feature}
            </li>
          ))}
        </ul>

        <Link
          href={`/programs/${program.slug}`}
          className="mt-6 inline-flex items-center text-sm font-semibold text-tennis-700 transition-colors hover:text-tennis-900"
        >
          En savoir plus
          <ArrowUpRight className="ml-2 size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </article>
  );
};
