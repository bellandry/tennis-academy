import { Metadata } from "next";
import { InfosComponent } from "./infos";

export const metadata: Metadata = {
  title: "Informations & Contact",
  description:
    "Contactez FOTA Cameroun dès aujourd'hui. Retrouvez ici nos coordonnées, horaires, liens vers les réseaux sociaux et notre localisation exacte via Google Maps.",
  keywords:
    "contact FOTA, infos tennis Cameroun, adresse académie FOTA, téléphone FOTA, réseaux sociaux FOTA, localisation tennis Douala, Google Maps tennis Cameroun",
  openGraph: {
    title: "Informations & Localisation | FOTA Cameroun",
    description:
      "Besoin de plus d'infos ? Appelez-nous, suivez-nous sur les réseaux ou visitez notre académie via Google Maps. Toutes les informations sont ici.",
    url: "https://fota.laclass.dev/infos",
    images: [
      {
        url: "/og-image.png",
        width: 1640,
        height: 924,
        alt: "Coordonnées FOTA Cameroun",
      },
    ],
    type: "website",
    siteName: "FOTA Cameroun",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coordonnées & Réseaux sociaux | FOTA Cameroun",
    description:
      "Retrouvez toutes les informations utiles pour contacter ou visiter FOTA Cameroun : téléphone, email, réseaux sociaux, Google Maps.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://fota.laclass.dev/infos",
  },
};

function page() {
  return <InfosComponent />;
}

export default page;
