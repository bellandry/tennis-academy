import { ArrowUpRight, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ContactCtaSection() {
  return (
    <section className="bg-white px-6 py-10 md:px-8 md:py-16">
      <div className="container mx-auto max-w-7xl">
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-[#073f3c] px-7 py-12 text-white shadow-2xl shadow-[#073f3c]/15 md:px-12 md:py-16">
          <div className="pointer-events-none absolute -right-28 -top-32 -z-10 size-96 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-44 right-24 -z-10 size-96 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-1/2 bg-gradient-to-l from-[#0c625a]/70 to-transparent" />

          <Image
            src="/ball.png"
            alt=""
            width={180}
            height={180}
            className="pointer-events-none absolute -right-4 bottom-[-3.5rem] size-40 rotate-12 object-contain opacity-90 md:right-12 md:size-48"
          />

          <div className="relative max-w-2xl">
            <div className="mb-5 flex size-11 items-center justify-center rounded-2xl bg-[#d9ef63] text-[#073f3c]">
              <MessageCircle className="size-5" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d9ef63]">
              Votre prochain échange
            </p>
            <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">
              Envie de jouer
              <span className="block text-[#59c7b7]">avec nous ?</span>
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-white/70 md:text-lg">
              Décrivez-nous votre niveau et vos objectifs. Nous vous aiderons à
              trouver le programme FOTA qui vous correspond.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center rounded-full bg-[#d9ef63] px-6 py-3.5 text-sm font-bold text-[#073f3c] transition-colors hover:bg-[#e7fa8c]"
            >
              Nous contacter
              <ArrowUpRight className="ml-2 size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
