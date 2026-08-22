"use client";

import { programs } from "@/constants";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { animateOnScroll } from "../lib/animations";
import { ProgramCard } from "./program-card";

export default function ProgramsSection() {
  useEffect(() => {
    animateOnScroll();
    window.addEventListener("scroll", animateOnScroll);
    return () => window.removeEventListener("scroll", animateOnScroll);
  }, []);

  return (
    <section id="programs" className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="container relative mx-auto max-w-7xl px-6 md:px-8">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-tennis-700">
              Nos programmes
            </p>
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] text-slate-950 md:text-6xl">
              Un programme pour chaque
              <span className="block text-tennis-600">façon de jouer.</span>
            </h2>
          </div>
          <p className="max-w-sm text-base leading-7 text-slate-500 md:text-right">
            Du premier échange à la préparation compétition, choisissez le cadre
            qui correspond à votre rythme et à vos objectifs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {programs.slice(0, 4).map((program, index) => (
            <ProgramCard program={program} index={index} key={program.slug} />
          ))}
        </div>

        <div className="mt-12 flex justify-center md:justify-end">
          <Link
            href="/programs/debutants"
            className="inline-flex items-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-tennis-500 hover:bg-tennis-50 hover:text-tennis-700"
          >
            Voir tous les programmes
            <ArrowUpRight className="ml-2 size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
