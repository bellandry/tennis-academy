"use client";

import { testimonials } from "@/constants";
import { ArrowRight, ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { animateOnScroll } from "../lib/animations";
import { Stats } from "./stats";

export default function TestimonialsSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    animateOnScroll();
    window.addEventListener("scroll", animateOnScroll);

    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => {
      window.removeEventListener("scroll", animateOnScroll);
      clearInterval(interval);
    };
  }, []);

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % testimonials.length);
  };

  const activeTestimonial = testimonials[activeSlide];

  return (
    <section id="témoignages" className="bg-[#f3f7f2] py-24 md:py-32">
      <div className="container mx-auto max-w-7xl px-6 md:px-8">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-tennis-700">
              La communauté FOTA
            </p>
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] text-slate-950 md:text-6xl">
              La confiance se construit
              <span className="block text-tennis-600">échange après échange.</span>
            </h2>
          </div>
          <p className="max-w-sm text-base leading-7 text-slate-500 md:text-right">
            Une méthode exigeante, un regard attentif et des progrès que nos
            joueurs peuvent réellement ressentir.
          </p>
        </div>

        <div className="mb-16 grid items-stretch gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="relative min-h-[22rem] overflow-hidden rounded-[1.75rem] bg-[#073f3c] p-8 text-white md:p-10 animate-on-scroll">
            <Quote className="absolute right-8 top-8 size-16 text-[#59c7b7]/25" />
            <p className="relative text-xs font-semibold uppercase tracking-[0.2em] text-[#d9ef63]">
              Ils jouent, ils progressent
            </p>
            <div className="absolute bottom-8 left-8 right-8 md:left-10 md:right-10">
              <p className="max-w-md text-2xl font-semibold leading-tight md:text-3xl">
                &quot;Le meilleur entraînement est celui qui vous donne envie de
                revenir demain.&quot;
              </p>
              <div className="mt-8 flex items-center gap-3 text-sm text-white/70">
                <span className="h-px w-10 bg-[#59c7b7]" />
                L&apos;approche FOTA
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-xl shadow-slate-900/5 md:p-10 animate-on-scroll">
            <div className="mb-7 flex items-center justify-between">
              <div className="flex gap-1" aria-label="5 étoiles">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="size-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-sm font-semibold text-slate-400">
                0{activeSlide + 1} / 0{testimonials.length}
              </span>
            </div>

            <div className="min-h-[13rem]">
              <p className="max-w-2xl text-xl leading-8 text-slate-700 md:text-2xl md:leading-9">
                &quot;{activeTestimonial.content}&quot;
              </p>
              <div className="mt-8 flex items-center gap-4">
                <Image
                  src={activeTestimonial.image}
                  alt={activeTestimonial.name}
                  width={56}
                  height={56}
                  className="size-14 rounded-full border-2 border-tennis-100 object-cover"
                />
                <div>
                  <p className="font-semibold text-slate-950">{activeTestimonial.name}</p>
                  <p className="text-sm text-slate-500">{activeTestimonial.role}</p>
                </div>
              </div>
            </div>

            <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
              <div className="flex gap-2">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.name}
                    className={`h-2 rounded-full transition-all ${
                      activeSlide === index ? "w-8 bg-tennis-600" : "w-2 bg-slate-200"
                    }`}
                    onClick={() => setActiveSlide(index)}
                    aria-label={`Voir le témoignage ${index + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handlePrev}
                  className="flex size-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition-colors hover:border-tennis-500 hover:text-tennis-700"
                  aria-label="Témoignage précédent"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="flex size-10 items-center justify-center rounded-full bg-[#075e58] text-white transition-colors hover:bg-[#064a46]"
                  aria-label="Témoignage suivant"
                >
                  <ChevronRight className="size-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <Stats />

        <div className="mt-6 flex items-center justify-center gap-2 text-sm font-medium text-slate-500">
          <span>Vous avez un objectif en tête ?</span>
          <a href="#contact" className="inline-flex items-center text-tennis-700 hover:text-tennis-900">
            Parlons-en <ArrowRight className="ml-1 size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
