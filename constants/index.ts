import { Award, LucideIcon, MapPin, Users, Zap } from "lucide-react";

export const navLinks = [
  { name: "Accueil", path: "/" },
  { name: "Programmes", path: "/programmes" },
  { name: "Accomplissements", path: "/accomplissements" },
  { name: "Contact", path: "/#contact" },
];

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: Zap,
    title: "Entraînement personnalisé",
    description:
      "Des programmes sur mesure adaptés à votre niveau et vos objectifs personnels.",
  },
  {
    icon: Users,
    title: "Professeurs expérimentés",
    description:
      "Une équipe de formateurs certifiés avec une expérience internationale.",
  },
  {
    icon: Award,
    title: "Équipement de pointe",
    description:
      "Des installations modernes avec les dernières technologies d'entraînement.",
  },
  {
    icon: MapPin,
    title: "Cadre exceptionnel",
    description:
      "Des terrains intérieurs et extérieurs dans un environnement idéal pour progresser.",
  },
];
