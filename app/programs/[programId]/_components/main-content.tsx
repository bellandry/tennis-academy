import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export type MainContentProps = {
  currentProgram: {
    id: string;
    longDescription: string;
    ageGroups: string;
    maxGroupSize: string;
    highlightTextColor: string;
    highlightColor: string;
    lightColor: string;
    textColor: string;
    color: string;
    borderColor: string;
    schedule: { day: string; time: string }[];
  };
};

export const MainContent = ({ currentProgram }: MainContentProps) => {
  return (
    <div className="md:col-span-2">
      <div className="space-y-8">
        <div className="prose prose-lg max-w-none animate-on-scroll">
          <h2 className="text-3xl ">À propos de ce programme</h2>
          <p>{currentProgram.longDescription}</p>
          <p>
            Nos instructeurs sont des professionnels certifiés avec une vaste
            expérience dans l&apos;enseignement du tennis à tous les niveaux.
            Ils s&apos;adaptent à votre style de jeu et à vos objectifs pour
            vous aider à atteindre votre plein potentiel.
          </p>
        </div>

        <div className="animate-on-scroll">
          <h3 className="mb-4 text-xl font-semibold">Horaires proposés</h3>
          <div
            className={`overflow-hidden rounded-lg border ${currentProgram.borderColor}`}
          >
            <table className="w-full text-sm">
              <thead className={`${currentProgram.lightColor}`}>
                <tr>
                  <th className="px-4 py-3 font-medium text-left">Jour</th>
                  <th className="px-4 py-3 font-medium text-left">Horaire</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {currentProgram.schedule.map((slot, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-3">{slot.day}</td>
                    <td className="px-4 py-3">{slot.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="animate-on-scroll">
          <h3 className="mb-4 text-xl font-semibold">
            Pour qui est ce programme?
          </h3>
          <Tabs defaultValue="groupes-age">
            <TabsList className="mb-2">
              <TabsTrigger value="groupes-age">Groupes d&apos;âge</TabsTrigger>
              <TabsTrigger value="niveau">Niveau requis</TabsTrigger>
              <TabsTrigger value="objectifs">Objectifs</TabsTrigger>
            </TabsList>
            <TabsContent
              value="groupes-age"
              className={`p-4 rounded-lg ${currentProgram.color}`}
            >
              <p>
                Ce programme est adapté pour :{" "}
                <strong>{currentProgram.ageGroups}</strong>
              </p>
            </TabsContent>
            <TabsContent
              value="niveau"
              className={`p-4 rounded-lg ${currentProgram.color}`}
            >
              <p>
                {currentProgram.id === "debutants"
                  ? "Aucune expérience préalable n'est requise. Ce programme est parfait pour les joueurs qui débutent dans le tennis."
                  : `Pour rejoindre ce programme, les participants doivent ${
                      currentProgram.id === "intermediaires"
                        ? "maîtriser les bases du tennis (coups droits, revers, service) et avoir une expérience préalable du jeu."
                        : "avoir une bonne maîtrise technique et tactique du tennis, idéalement avec une expérience en compétition."
                    }`}
              </p>
            </TabsContent>
            <TabsContent
              value="objectifs"
              className={`p-4 rounded-lg ${currentProgram.color}`}
            >
              <p>
                {currentProgram.id === "debutants"
                  ? "Acquérir les fondamentaux du tennis, développer la coordination et prendre du plaisir à jouer."
                  : currentProgram.id === "intermediaires"
                    ? "Améliorer la technique, développer des stratégies de jeu et préparer aux compétitions amicales."
                    : currentProgram.id === "competition"
                      ? "Se préparer aux compétitions de haut niveau, perfectionner tous les aspects du jeu et développer une mentalité de compétiteur."
                      : "Progresser rapidement sur des aspects spécifiques du jeu dans un format intensif et concentré."}
              </p>
            </TabsContent>
          </Tabs>
        </div>

        <div className="p-6 border border-gray-200 rounded-lg bg-gray-50 animate-on-scroll">
          <h3 className="mb-4 text-xl font-semibold">
            Prêt à rejoindre notre programme?
          </h3>
          <p className="mb-4">
            Inscrivez-vous dès maintenant ou contactez-nous pour plus
            d&apos;informations.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button className={`bg-tennis-500 hover:opacity-90`}>
              S&apos;inscrire <ChevronRight size={16} />
            </Button>
            <Link href="/contact">
              <Button variant="outline" className="border-gray-300">
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
