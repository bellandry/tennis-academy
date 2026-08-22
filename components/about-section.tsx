"use client";

import { features } from "@/constants";
import { ArrowUpRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { animateOnScroll } from "@/lib/animations";

export default function AboutSection() {
  useEffect(() => {
    animateOnScroll();
    window.addEventListener("scroll", animateOnScroll);
    return () => window.removeEventListener("scroll", animateOnScroll);
  }, []);

  return (
    <section id="a-propos" className="relative overflow-hidden bg-[#073f3c] py-24 text-white md:py-32">
      <div className="pointer-events-none absolute -right-32 top-16 h-80 w-80 rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -right-16 top-32 h-64 w-64 rounded-full border border-white/10" />

      <div className="container relative mx-auto grid max-w-7xl items-center gap-14 px-6 md:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="animate-on-scroll">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#d9ef63]">
            À propos de FOTA
          </p>
          <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">
            Nous construisons des joueurs
            <span className="text-[#59c7b7]"> plus solides.</span>
          </h2>
          <p className="mt-7 max-w-xl text-base leading-8 text-white/70 md:text-lg">
            Depuis 2012, notre académie rend l’apprentissage du tennis plus
            accessible, plus lisible et plus humain. Chaque séance combine la
            précision technique, le plaisir du jeu et un accompagnement adapté à
            votre rythme.
          </p>

          <div className="mt-8 space-y-3">
            {["Une progression adaptée à votre niveau", "Des coachs présents à chaque étape", "Un cadre pensé pour aimer jouer"].map(
              (item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-white/85">
                  <span className="flex size-6 items-center justify-center rounded-full bg-[#d9ef63] text-[#073f3c]">
                    <Check className="size-4" />
                  </span>
                  {item}
                </div>
              )
            )}
          </div>

          <Link
            href="/infos"
            className="mt-9 inline-flex items-center rounded-full bg-[#16a79b] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#128d84]"
          >
            Découvrir notre approche
            <ArrowUpRight className="ml-2 size-4" />
          </Link>
        </div>

        <div className="relative animate-on-scroll" style={{ animationDelay: "0.2s" }}>
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-3 shadow-2xl shadow-black/20">
            <div className="relative aspect-[1.15] overflow-hidden rounded-[1.5rem]">
              <Image
                src="/fota-team.jpg"
                alt="L'équipe FOTA sur un court de tennis"
                fill
                sizes="(max-width: 1024px) 90vw, 55vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#052f2e]/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d9ef63]">
                    L&apos;esprit FOTA
                  </p>
                  <p className="mt-1 text-2xl font-semibold text-white">Grandir ensemble.</p>
                </div>
                <div className="hidden rounded-xl bg-white/15 px-4 py-3 text-right backdrop-blur-md sm:block">
                  <p className="text-2xl font-bold text-white">4</p>
                  <p className="text-xs text-white/70">professeurs certifiés</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-8 -right-5 grid w-64 grid-cols-2 gap-3 rounded-2xl border border-[#bce2d4]/30 bg-[#0b514b] p-4 shadow-xl sm:-right-8">
            {features.slice(0, 4).map((feature) => (
              <div key={feature.title} className="min-w-0">
                <feature.icon className="mb-2 size-5 text-[#d9ef63]" />
                <p className="text-xs font-semibold leading-4 text-white">{feature.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
