import Header from "@/components/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programmes de formation",
  description:
    "Découvrez les programmes de formation de tennis proposés par FOTA Cameroun : cours pour enfants, adultes et seniors, du niveau débutant à la compétition, avec séances encadrées, sparring et planning flexible.",
  keywords:
    "programme tennis, formation tennis Cameroun, cours de tennis enfants adultes seniors, niveaux tennis, entrainement tennis, sparring tennis, compétition, planning FOTA",
  openGraph: {
    title: "Programmes de formation tennis | FOTA Cameroun",
    description:
      "FOTA propose des programmes de tennis complets pour tous les niveaux et tous les âges. Découvrez les modalités, les jours d'entraînement et les parcours disponibles.",
    url: "https://fota.laclass.dev/programs",
    images: [
      {
        url: "/og-image.png",
        width: 1640,
        height: 924,
        alt: "Programmes de formation FOTA Cameroun",
      },
    ],
    type: "website",
    siteName: "FOTA Cameroun",
  },
  twitter: {
    card: "summary_large_image",
    title: "Formations et entraînements | FOTA Cameroun",
    description:
      "Consultez nos différents programmes de tennis, adaptés à chaque niveau : loisir, performance, compétition. Enfants, adultes, seniors… tout le monde trouve sa place chez FOTA !",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://fota.laclass.dev/programmes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
