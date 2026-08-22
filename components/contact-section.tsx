"use client";

import { ArrowUpRight, MessageCircle } from "lucide-react";
import { useEffect } from "react";
import { animateOnScroll } from "../lib/animations";
import ContactForm from "./contact/contact-form";
import ContactInfo from "./contact/contact-info";
import OpeningHours from "./contact/opening-hours";

export default function ContactSection() {
  useEffect(() => {
    animateOnScroll();
    window.addEventListener("scroll", animateOnScroll);
    return () => window.removeEventListener("scroll", animateOnScroll);
  }, []);

  return (
    <section id="contact" className="bg-white py-24 md:py-32">
      <div className="container mx-auto max-w-7xl px-6 md:px-8">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end animate-on-scroll">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-tennis-700">
              Parlons tennis
            </p>
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] text-slate-950 md:text-6xl">
              Votre prochaine séance
              <span className="block text-tennis-600">commence ici.</span>
            </h2>
          </div>
          <p className="max-w-sm text-base leading-7 text-slate-500 md:text-right">
            Une question sur un programme, les horaires ou votre niveau ? Notre
            équipe vous répond avec plaisir.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-[2rem] border border-slate-200 bg-[#f3f7f2] shadow-xl shadow-slate-900/5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="bg-white p-6 md:p-10">
            <div className="mb-8 flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-tennis-100 text-tennis-700">
                <MessageCircle className="size-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-tennis-700">
                  Contact direct
                </p>
                <p className="mt-1 text-sm text-slate-500">Nous revenons vers vous rapidement.</p>
              </div>
            </div>
            <ContactForm />
          </div>

          <div className="flex flex-col justify-between gap-8 p-6 md:p-10 animate-on-scroll">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-tennis-700">
                FOTA à Bafoussam
              </p>
              <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-slate-950">
                Venez ressentir la différence sur le court.
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Le premier échange est le meilleur moyen de trouver le programme
                qui vous correspond.
              </p>
            </div>

            <div className="space-y-7">
              <ContactInfo />
              <OpeningHours />
            </div>

            <a
              href="https://wa.me/237690117802"
              className="inline-flex items-center text-sm font-semibold text-tennis-700 transition-all duration-300 hover:-translate-y-0.5 hover:text-tennis-900"
            >
              Nous contacter sur WhatsApp
              <ArrowUpRight className="ml-2 size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
