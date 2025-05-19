import { Metadata } from "next";
import { Inscription } from "./_components/inscription";

export const metadata: Metadata = {
  title: "Inscription",
  description:
    "Inscrivez-vous dès aujourd'hui à FOTA Cameroun, l'académie de tennis pour enfants, adultes et seniors. Choisissez votre niveau : débutant, intermédiaire, expert ou compétition.",
  keywords:
    "inscription tennis, académie tennis Cameroun, rejoindre FOTA, inscription enfants tennis, cours tennis adultes, tennis compétition, sparring tennis, formation tennis Yaoundé",
  openGraph: {
    title: "Inscription | Rejoignez FOTA Cameroun",
    description:
      "Formulaire d'inscription à l'académie FOTA. Accédez à un encadrement de qualité pour tous les niveaux et tous les âges.",
    url: "https://fota.laclass.dev/inscription",
    images: [
      {
        url: "/og-image.png",
        width: 1640,
        height: 924,
        alt: "FOTA Tennis Cameroun - Inscription",
      },
    ],
    type: "website",
    siteName: "FOTA Cameroun",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inscription | FOTA Cameroun",
    description:
      "Inscrivez-vous à l'académie FOTA dès maintenant. Tennis pour tous les âges et niveaux. Coaching professionnel au Cameroun.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://fota.laclass.dev/inscription",
  },
};

function page() {
  return <Inscription />;
}

export default page;
