import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Accomplishment } from "@/constants";
import { Calendar, ChevronRight, Trophy, User } from "lucide-react";
import Image from "next/image";

export type AccomplishementCardProps = {
  accomplisment: Accomplishment;
  index: number;
};

export const AccomplishementCard = ({
  accomplisment,
  index,
}: AccomplishementCardProps) => {
  return (
    <Card
      key={accomplisment.id}
      className="overflow-hidden border-gray-200 hover:shadow-lg transition-shadow animate-on-scroll"
      style={{ animationDelay: `${0.1 * (index + 1)}s` }}
    >
      <div className="aspect-[16/9] relative overflow-hidden">
        <Image
          src={accomplisment.image}
          alt={accomplisment.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          width={100}
          height={100}
        />
        <div className="absolute top-3 right-3">
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
              accomplisment.type === "competition"
                ? "bg-amber-100 text-amber-800"
                : accomplisment.type === "formation"
                ? "bg-blue-100 text-blue-800"
                : "bg-purple-100 text-purple-800"
            }`}
          >
            {accomplisment.type === "competition"
              ? "Compétition"
              : accomplisment.type === "formation"
              ? "Formation"
              : "Événement"}
          </span>
        </div>
      </div>

      <CardHeader className="pb-2">
        <div className="flex items-center text-sm text-gray-500 mb-1">
          <Calendar size={14} className="mr-1" />
          {accomplisment.date}
        </div>
        <CardTitle className="text-xl">{accomplisment.title}</CardTitle>
        <CardDescription className="line-clamp-2">
          {accomplisment.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="py-0">
        <div className="flex items-start gap-2 text-sm">
          <User size={16} className="shrink-0 mt-0.5 text-gray-500" />
          <div>
            <p className="font-medium mb-1">Participants:</p>
            <p className="text-gray-600 line-clamp-1">
              {accomplisment.students.join(", ")}
            </p>
          </div>
        </div>

        {accomplisment.achievement && (
          <div className="flex items-start gap-2 mt-3 text-sm">
            <Trophy size={16} className="shrink-0 mt-0.5 text-amber-500" />
            <div>
              <p className="font-medium mb-1">Résultat:</p>
              <p className="text-gray-600">{accomplisment.achievement}</p>
            </div>
          </div>
        )}
      </CardContent>

      <CardFooter className="pt-4">
        <Button
          variant="outline"
          className="w-full text-tennis-600 border-tennis-200 hover:bg-tennis-50"
        >
          Voir les détails <ChevronRight size={16} />
        </Button>
      </CardFooter>
    </Card>
  );
};
