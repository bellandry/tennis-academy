import { programmes } from "@/constants";
import { ProgrammesPage } from "./_components/programmes-page";

export function generateStaticParams() {
  return programmes.map(({ id }) => ({ programId: id }));
}

type ProgrammesRouteProps = {
  params: Promise<{
    programId: string;
  }>;
};

export default async function Programmes({ params }: ProgrammesRouteProps) {
  const { programId } = await params;

  return <ProgrammesPage programId={programId} />;
}
