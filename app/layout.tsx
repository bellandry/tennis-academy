import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fota.laclass.dev"),
  title: {
    template: "%s | FOTA Cameroun",
    default: "FOTA Cameroun | Académie de tennis pour tous les âges et niveaux",
  },
  description:
    "FOTA est une académie de tennis ouverte aux enfants, adultes et seniors. Cours pour débutants, intermédiaires, experts et compétiteurs. Encadrement professionnel, sparring partenaires et progression assurée.",
  keywords:
    "tennis Cameroun, académie tennis, cours de tennis enfants, cours de tennis adultes, tennis débutant, tennis expert, sparring, compétition, FOTA",
  robots: "index, follow",
  openGraph: {
    title: "FOTA Cameroun | Académie de tennis complète pour tous les niveaux",
    description:
      "Rejoignez FOTA, une académie de tennis professionnelle ouverte à tous les âges et niveaux. Entraînez-vous avec les meilleurs coachs au Cameroun.",
    url: "https://fota.laclass.dev",
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
    canonical: "https://fota.laclass.dev",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster richColors position="bottom-right" expand={true} />
        {children}
      </body>
    </html>
  );
}
