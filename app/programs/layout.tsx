import Header from "@/components/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FOTA | Nos programmes",
  description:
    "FOTA (Fomekong Tennis Academie) est une academie de tennis offrant un cadre de formation idéal pour nos enfants",
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
