import { Metadata } from "next";
import { Accomplishments } from "./accomplishments";

export const metadata: Metadata = {
  title: "Accomplissements & Événements",
  description:
    "Découvrez les accomplissements de FOTA Cameroun : tournois organisés, trophées remportés, participations à des compétitions locales et internationales, et bien plus encore.",
  keywords:
    "FOTA accomplissements, résultats tennis Cameroun, trophées remportés, événements FOTA, compétitions de tennis, tournois enfants adultes, fierté FOTA, performances tennis",
  openGraph: {
    title: "Nos Accomplissements | FOTA Cameroun",
    description:
      "Depuis sa création, FOTA a formé des talents qui brillent en compétition. Revivez nos moments forts : victoires, participations à des tournois, événements organisés par l'académie.",
    url: "https://fota.laclass.dev/accomplishments",
    images: [
      {
        url: "/og-image.png",
        width: 1640,
        height: 924,
        alt: "Accomplissements FOTA Cameroun",
      },
    ],
    type: "website",
    siteName: "FOTA Cameroun",
  },
  twitter: {
    card: "summary_large_image",
    title: "Événements & Trophées | FOTA Cameroun",
    description:
      "Faites un tour dans les coulisses des succès de FOTA : médailles, coupes, classements, participation à des tournois nationaux et internationaux.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://fota.laclass.dev/accomplishments",
  },
};

function page() {
  return <Accomplishments />;
}

export default page;
