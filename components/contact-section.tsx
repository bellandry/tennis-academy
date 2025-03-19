"use client";

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
    <section id="contact" className="section-padding bg-gray-50 relative">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-tennis-100 text-tennis-600 font-medium text-sm mb-4 animate-on-scroll">
            Contact
          </span>
          <h2 className="section-heading animate-on-scroll">
            Prêt à <span className="text-gradient">nous rejoindre</span> ?
          </h2>
          <p className="section-subheading animate-on-scroll">
            Contactez-nous pour plus d&apos;informations sur nos programmes ou
            pour réserver un cours d&apos;essai.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ContactForm />

          <div
            className="space-y-8 animate-on-scroll"
            style={{ animationDelay: "0.2s" }}
          >
            <ContactInfo />
            <OpeningHours />
          </div>
        </div>
      </div>
    </section>
  );
}
