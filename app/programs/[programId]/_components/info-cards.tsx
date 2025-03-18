import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, Clock, Users } from "lucide-react";

export type InfoCardsProps = {
  currentProgram: {
    duration: string;
    frequency: string;
    maxGroupSize: string;
    lightColor: string;
    price: string;
    textColor: string;
    color: string;
    borderColor: string;
    features: string[];
  };
};

export const InfoCards = ({ currentProgram }: InfoCardsProps) => {
  return (
    <div className="md:col-span-1 space-y-6">
      <Card
        className={`border ${currentProgram.borderColor} animate-on-scroll`}
      >
        <CardContent className="p-6">
          <h3
            className={`text-lg font-semibold mb-4 ${currentProgram.textColor}`}
          >
            Informations pratiques
          </h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <CalendarDays
                className={`shrink-0 ${currentProgram.textColor}`}
              />
              <div>
                <p className="font-medium">Fréquence</p>
                <p className="text-gray-600">{currentProgram.frequency}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Clock className={`shrink-0 ${currentProgram.textColor}`} />
              <div>
                <p className="font-medium">Durée</p>
                <p className="text-gray-600">{currentProgram.duration}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Users className={`shrink-0 ${currentProgram.textColor}`} />
              <div>
                <p className="font-medium">Taille des groupes</p>
                <p className="text-gray-600">
                  Maximum {currentProgram.maxGroupSize} personnes
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card
        className={`border ${currentProgram.borderColor} animate-on-scroll`}
      >
        <CardContent className="p-6">
          <h3
            className={`text-lg font-semibold mb-4 ${currentProgram.textColor}`}
          >
            Ce que vous apprendrez
          </h3>
          <ul className="space-y-2">
            {currentProgram.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <span
                  className={`mt-1 shrink-0 w-4 h-4 rounded-full ${currentProgram.color} flex items-center justify-center`}
                >
                  <span
                    className={`block w-2 h-2 rounded-full ${currentProgram.textColor}`}
                  ></span>
                </span>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card
        className={`border ${currentProgram.borderColor} animate-on-scroll`}
      >
        <CardContent className="p-6">
          <h3
            className={`text-lg font-semibold mb-4 ${currentProgram.textColor}`}
          >
            Tarifs
          </h3>
          <div className={`${currentProgram.lightColor} p-4 rounded-lg mb-4`}>
            <p className="text-xl font-semibold">{currentProgram.price}</p>
          </div>
          <p className="text-sm text-gray-600">
            Les tarifs incluent l&apos;accès aux installations, le matériel
            d&apos;entraînement et l&apos;encadrement professionnel.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
