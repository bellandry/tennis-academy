import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { programmes } from "@/constants";
import { SITE_URL } from "@/lib/site";
import { ProgrammesPage } from "./_components/programmes-page";

export function generateStaticParams() {
  return programmes.map(({ id }) => ({ programId: id }));
}

type ProgrammesRouteProps = {
  params: Promise<{
    programId: string;
  }>;
};

function getProgram(programId: string) {
  return programmes.find((program) => program.id === programId);
}

export async function generateMetadata({
  params,
}: ProgrammesRouteProps): Promise<Metadata> {
  const { programId } = await params;
  const program = getProgram(programId);

  if (!program) {
    return {
      title: "Programme introuvable",
      robots: { index: false, follow: true },
    };
  }

  const url = `${SITE_URL}/programs/${program.id}`;

  return {
    title: `${program.title} | Cours de tennis à Bafoussam`,
    description: program.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${program.title} | FOTA Cameroun`,
      description: program.description,
      url,
      type: "website",
      images: [
        {
          url: program.image,
          alt: `${program.title} — Fomekong Tennis Academy`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${program.title} | FOTA Cameroun`,
      description: program.description,
      images: [program.image],
    },
  };
}

export default async function Programmes({ params }: ProgrammesRouteProps) {
  const { programId } = await params;

  if (!getProgram(programId)) {
    notFound();
  }

  return <ProgrammesPage programId={programId} />;
}
