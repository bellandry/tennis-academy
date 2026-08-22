import type { Metadata } from "next";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact FOTA à Bafoussam",
  description:
    "Contactez Fomekong Tennis Academy à Bafoussam pour choisir un programme de tennis, demander des informations ou préparer votre inscription.",
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: "Contact FOTA à Bafoussam",
    description:
      "Téléphone, email, horaires et formulaire de contact de Fomekong Tennis Academy à Bafoussam.",
    url: `${SITE_URL}/contact`,
    type: "website",
  },
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
