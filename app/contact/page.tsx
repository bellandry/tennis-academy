import type { Metadata } from "next";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez FOTA Tennis Academy à Bafoussam pour choisir votre programme, réserver une séance d'essai ou obtenir plus d'informations.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <Header />
      <main className="pt-16">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
