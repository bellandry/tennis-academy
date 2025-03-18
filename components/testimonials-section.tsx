"use client";

import { testimonials } from "@/constants";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { animateOnScroll } from "../lib/animations";

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

  return (
    <section id="témoignages" className="section-padding relative">
      <div className="container mx-auto px-6 md:px-8 relative">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-tennis-100 text-tennis-600 font-medium text-sm mb-4 animate-on-scroll">
            Témoignages
          </span>
          <h2 className="section-heading animate-on-scroll">
            Ce que disent <span className="text-gradient">nos élèves</span>
          </h2>
          <p className="section-subheading animate-on-scroll">
            Découvrez l&apos;expérience de ceux qui nous font confiance pour
            leur progression dans le tennis.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-20 animate-on-scroll">
          <div className="relative bg-white rounded-2xl shadow-subtle-lg p-8">
            {/* Decorative elements */}
            <div className="absolute -top-3 -left-3 w-20 h-20 bg-tennis-100 rounded-lg -z-10"></div>
            <div className="absolute -bottom-3 -right-3 w-16 h-16 border-2 border-tennis-300 rounded-lg -z-10"></div>

            <div className="flex flex-col items-center">
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <div
                className="relative w-full overflow-hidden"
                style={{ minHeight: "200px" }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 flex flex-col items-center text-center transition-opacity duration-500 ${
                      activeSlide === index
                        ? "opacity-100 z-10"
                        : "opacity-0 z-0"
                    }`}
                  >
                    <p className="text-xl text-gray-700 italic mb-8">
                      <q>{testimonial.content}</q>
                    </p>

                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-tennis-200">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="text-left">
                        <h4 className="font-bold text-gray-800">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-500 text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      activeSlide === index ? "bg-tennis-500" : "bg-gray-300"
                    }`}
                    onClick={() => setActiveSlide(index)}
                    aria-label={`Voir témoignage ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:text-tennis-600 focus:outline-none focus:ring-2 focus:ring-tennis-500 transition-colors"
                aria-label="Témoignage précédent"
              >
                <ChevronLeft size={24} />
              </button>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6">
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:text-tennis-600 focus:outline-none focus:ring-2 focus:ring-tennis-500 transition-colors"
                aria-label="Témoignage suivant"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
