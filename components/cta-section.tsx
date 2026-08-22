import { ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";

export const CtaSection = () => {
  return (
    <section className="bg-white px-6 py-8 md:px-8 md:py-12">
      <div className="container mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#073f3c] px-7 py-12 text-white md:px-12 md:py-16">
          <div className="pointer-events-none absolute -right-12 -top-24 size-72 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-32 right-32 size-80 rounded-full border border-white/10" />
          <Sparkles className="absolute right-8 top-8 size-9 text-[#d9ef63]" />

          <div className="relative flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <div className="max-w-2xl animate-on-scroll">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#d9ef63]">
                Votre prochaine étape
              </p>
              <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">
                Prêt à élever
                <span className="block text-[#59c7b7]">votre jeu ?</span>
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/70 md:text-lg">
                Parlez-nous de votre niveau et de vos objectifs. Nous vous
                orienterons vers le programme FOTA le plus adapté.
              </p>
            </div>

            <div className="relative flex shrink-0 flex-col gap-3 sm:flex-row animate-on-scroll">
              <Link
                href="/inscription"
                className="inline-flex h-13 items-center justify-center rounded-full bg-[#d9ef63] px-6 text-sm font-bold text-[#073f3c] transition-colors hover:bg-[#e7fa8c]"
              >
                S&apos;inscrire maintenant
                <ArrowUpRight className="ml-2 size-4" />
              </Link>
              <Link
                href="/programs/debutants"
                className="inline-flex h-13 items-center justify-center rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/10"
              >
                Voir les programmes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
