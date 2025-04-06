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
    default: "FOTA | Reveillons le talent qui somnole en nos petits champions",
  },
  description:
    "FOTA (Fomekong Tennis Academie) est une académie de tennis offrant un cadre de formation idéal pour nos enfants. Inscrivez-vous dès aujourd'hui pour découvrir le potentiel de votre enfant !",
  keywords: "tennis, enfants, formation, FOTA, Fomekong Tennis Academie",
  robots: "index, follow",
  openGraph: {
    title: "FOTA | Reveillons le talent qui somnole en nos petits champions",
    description:
      "Rejoignez FOTA pour une formation de tennis exceptionnelle pour vos enfants.",
    url: "https://votre-site.com",
    images: [
      {
        url: "/og-image.png",
        width: 256,
        height: 256,
        alt: "Logo de la société Redacok",
      },
    ],
  },
  authors: {
    name: "Landry Bella | Full-Stack Developer",
    url: "https://laclass.dev",
  },
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
