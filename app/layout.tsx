import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { ScrollAnimations } from "@/components/scroll-animations";
import { StructuredData } from "@/components/seo/structured-data";
import { SITE_URL, siteConfig } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | FOTA Cameroun",
    default: "FOTA Cameroun | Académie de tennis à Bafoussam",
    absolute: `${siteConfig.name} | Académie de tennis à Bafoussam`,
  },
  description: siteConfig.description,
  keywords:
    "tennis Cameroun, académie tennis, cours de tennis enfants, cours de tennis adultes, tennis débutant, tennis expert, sparring, compétition, FOTA",
  robots: "index, follow",
  openGraph: {
    title: "FOTA Cameroun | Académie de tennis complète pour tous les niveaux",
    description:
      "Rejoignez FOTA, une académie de tennis professionnelle ouverte à tous les âges et niveaux. Entraînez-vous avec les meilleurs coachs au Cameroun.",
    url: SITE_URL,
    images: [
      {
        url: "/og-image.png",
        width: 1640,
        height: 924,
        alt: "Académie de tennis FOTA Cameroun",
      },
    ],
    type: "website",
    siteName: "FOTA Cameroun",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOTA Cameroun | Tennis pour enfants, adultes et seniors",
    description:
      "Académie de tennis pour tous les âges. Cours par niveau, sparrings et préparation à la compétition. Découvrez FOTA dès maintenant.",
    images: ["/og-image.png"],
    site: "@FOTACameroun",
  },
  authors: {
    name: "Landry Bella | Full-Stack Developer",
    url: "https://laclass.dev",
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport = {
  themeColor: "#008000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} ${montserrat.variable} antialiased`}
      >
        <StructuredData />
        <ScrollAnimations />
        {children}
      </body>
    </html>
  );
}
