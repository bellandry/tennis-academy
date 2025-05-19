"use client";

import ContactForm from "@/components/contact/contact-form";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { animateOnScroll } from "@/lib/animations";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  YoutubeIcon,
} from "lucide-react";
import { useEffect } from "react";

export function InfosComponent() {
  useEffect(() => {
    animateOnScroll();
    window.addEventListener("scroll", animateOnScroll);
    return () => window.removeEventListener("scroll", animateOnScroll);
  }, []);

  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Nos <span className="text-gradient">Informations</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Retrouvez toutes les informations pour nous contacter et nous
              rejoindre
            </p>
          </div>

          {/* Contact Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 animate-on-scroll">
            {/* Phone Card */}
            <div className="bg-white rounded-xl shadow-subtle p-6 border border-gray-100 flex flex-col items-center text-center hover:shadow-subtle-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-tennis-100 flex items-center justify-center mb-4">
                <Phone size={32} className="text-tennis-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Téléphone</h3>
              <p className="text-gray-600 mb-4">+237 6 90 11 78 02</p>
              <div className="mt-auto space-y-3 w-full">
                <a
                  href="https://wa.me/237690117802"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-tennis w-full flex items-center justify-center"
                >
                  Ecrire sur WhatsApp
                </a>
                <a
                  href="tel:+237690117802"
                  className="btn-outline-tennis w-full flex items-center justify-center"
                >
                  Appeler maintenant
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-xl shadow-subtle p-6 border border-gray-100 flex flex-col items-center text-center hover:shadow-subtle-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-tennis-100 flex items-center justify-center mb-4">
                <Mail size={32} className="text-tennis-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-600 mb-4">fota-cameroun@gmail.com</p>
              <div className="mt-auto w-full">
                <a
                  href="mailto:fota-cameroun@gmail.com"
                  className="btn-tennis w-full flex items-center justify-center"
                >
                  Envoyer un email
                </a>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-white rounded-xl shadow-subtle p-6 border border-gray-100 flex flex-col items-center text-center hover:shadow-subtle-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-tennis-100 flex items-center justify-center mb-4">
                <MapPin size={32} className="text-tennis-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Adresse</h3>
              <p className="text-gray-600 mb-4">
                Tennis Club Bafoussam <br />
                Bafoussam, Cameroun
              </p>
              <div className="mt-auto w-full">
                <a
                  href="https://maps.google.com/?q=5.4748,10.4118"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-tennis w-full flex items-center justify-center"
                >
                  Voir sur Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="mb-16 animate-on-scroll">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Suivez-nous
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {/* Facebook */}
              <a
                href="https://facebook.com/profile.php?id=61573963774134"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl shadow-subtle p-6 border border-gray-100 flex flex-col items-center text-center hover:shadow-subtle-lg transition-shadow hover:bg-blue-50 hover:border-blue-300"
              >
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Facebook size={24} className="text-blue-600" />
                </div>
                <h3 className="text-lg font-bold">Facebook</h3>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/@cyrillefomekong1413?si=NfurFbkygcvPeWFJ"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl shadow-subtle p-6 border border-gray-100 flex flex-col items-center text-center hover:shadow-subtle-lg transition-shadow hover:bg-red-50 hover:border-red-300"
              >
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                  <YoutubeIcon size={24} className="text-red-600" />
                </div>
                <h3 className="text-lg font-bold">YouTube</h3>
              </a>

              {/* Instagram */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl shadow-subtle p-6 border border-gray-100 flex flex-col items-center text-center hover:shadow-subtle-lg transition-shadow hover:bg-purple-50 hover:border-purple-300"
              >
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <Instagram size={24} className="text-purple-600" />
                </div>
                <h3 className="text-lg font-bold">Instagram</h3>
              </a>
            </div>
          </div>

          {/* Google Maps Section */}
          <div className="mb-16 animate-on-scroll">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Nous trouver
            </h2>
            <div className="bg-white rounded-xl shadow-subtle p-4 border border-gray-100">
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.google.com/maps?q=FCF9%2BM8+Bafoussam,+Cameroun&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="animate-on-scroll">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Nous contacter
            </h2>
            <div className="max-w-3xl mx-auto">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
