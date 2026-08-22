import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AnimatedBall from "./animated-ball";
import { Button } from "./ui/button";

const promises = [
  "Coaching personnalisé",
  "Petits groupes",
  "Progression mesurable",
];

export default function HeroSection() {
  return (
    <section
      id="accueil"
      aria-label="Section d'accueil Fomekong Tennis Academy"
      className="relative isolate overflow-hidden bg-[#f3f7f2] pt-28 lg:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-48 top-16 h-[34rem] w-[34rem] rounded-full bg-tennis-100/60 blur-3xl" />
        <div className="absolute -right-56 bottom-0 h-[30rem] w-[30rem] rounded-full bg-emerald-100/50 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="container relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 md:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:pb-28">
        <div className="max-w-2xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-tennis-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-tennis-700 shadow-sm animate-fade-in">
            <span className="h-2 w-2 rounded-full bg-tennis-500" />
            Fomekong Tennis Academy
          </div>

          <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.06em] text-slate-950 md:text-7xl lg:text-[5.25rem] animate-fade-in">
            Jouez avec
            <span className="block text-tennis-600">intention.</span>
            Progressez avec
            <span className="block">confiance.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600 md:text-xl animate-fade-in">
            Des entraînements exigeants et bienveillants pour transformer chaque
            échange en une nouvelle étape de votre progression.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row animate-fade-in">
            <Button
              asChild
              size="lg"
              className="h-14 rounded-full bg-[#075e58] px-7 text-base text-white shadow-lg shadow-[#075e58]/20 hover:bg-[#064a46]"
            >
              <Link href="/programs/debutants">
                Découvrir nos programmes
                <ArrowUpRight className="ml-2 size-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 rounded-full border-slate-300 bg-white/60 px-7 text-base text-slate-800 hover:border-tennis-400 hover:bg-white"
            >
              <Link href="/inscription">Réserver un échange</Link>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-slate-200 pt-6 text-sm font-medium text-slate-600 animate-fade-in">
            {promises.map((promise) => (
              <span key={promise} className="inline-flex items-center gap-2">
                <CheckCircle2 className="size-4 text-tennis-600" />
                {promise}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:mr-0">
          <div className="absolute -inset-5 rounded-[2.5rem] bg-tennis-200/50 blur-2xl" />
          <div className="relative aspect-[0.92] overflow-hidden rounded-[2rem] bg-[#0a3c3a] shadow-2xl shadow-slate-900/15">
            <Image
              src="/eleve3-fota.jpg"
              alt="Joueur de tennis de la FOTA en entraînement"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover object-center transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#052f2e]/90 via-transparent to-white/5" />
            <div className="absolute left-6 top-6 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
              Depuis 2012
            </div>
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4 text-white">
              <div>
                <p className="text-sm text-white/70">Une méthode. Un collectif.</p>
                <p className="mt-1 text-xl font-semibold">Le geste avant le score.</p>
              </div>
              <div className="rounded-2xl bg-[#d9ef63] px-4 py-3 text-right text-[#173d2f] shadow-lg">
                <p className="text-2xl font-bold leading-none">10+</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider">
                  ans d&apos;expérience
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-7 -left-6 hidden items-center gap-3 rounded-2xl border border-white/70 bg-white px-4 py-3 shadow-xl sm:flex">
            <div className="flex -space-x-2">
              {["/landry-bella.jpg", "/dominique.png", "/eleve4-fota.jpg"].map(
                (src) => (
                  <Image
                    key={src}
                    src={src}
                    alt=""
                    width={34}
                    height={34}
                    className="size-9 rounded-full border-2 border-white object-cover"
                  />
                )
              )}
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">250+ joueurs formés</p>
              <p className="text-xs text-slate-500">Une communauté qui progresse</p>
            </div>
          </div>
        </div>
      </div>

      <AnimatedBall />
    </section>
  );
}
