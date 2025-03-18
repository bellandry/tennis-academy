import { Award, MapPin, Users, Zap } from "lucide-react";

export const navLinks = [
  { name: "Accueil", path: "/" },
  { name: "Programmes", path: "/programmes" },
  { name: "Accomplissements", path: "/accomplissements" },
  { name: "Contact", path: "/#contact" },
];

export const features = [
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

export const programs = [
  {
    title: "Cours débutants",
    slug: "debutants",
    description:
      "Introduction aux fondamentaux du tennis dans un environnement ludique et encourageant.",
    features: [
      "Technique de base",
      "Règles du jeu",
      "Coordination",
      "Plaisir de jouer",
    ],
    color: "bg-blue-50",
    textColor: "text-blue-600",
    borderColor: "border-blue-200",
    image:
      "https://images.unsplash.com/photo-1551773148-efc7ebeafb7c?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Cours intermédiaires",
    slug: "intermediaires",
    description:
      "Perfectionnement technique et tactique pour les joueurs ayant déjà les bases.",
    features: [
      "Frappe avancée",
      "Stratégies de jeu",
      "Condition physique",
      "Matchs supervisés",
    ],
    color: "bg-tennis-50",
    textColor: "text-tennis-600",
    borderColor: "border-tennis-200",
    image:
      "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Cours compétition",
    slug: "competition",
    description:
      "Préparation intensive pour les joueurs visant l'excellence et la compétition.",
    features: [
      "Analyse vidéo",
      "Préparation mentale",
      "Entraînement spécifique",
      "Suivi personnalisé",
    ],
    color: "bg-amber-50",
    textColor: "text-amber-600",
    borderColor: "border-amber-200",
    image:
      "https://images.unsplash.com/photo-1531315396756-905d68d21b56?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Stages intensifs",
    slug: "stages",
    description:
      "Sessions concentrées pour progresser rapidement sur des aspects spécifiques du jeu.",
    features: [
      "Immersion totale",
      "Petits groupes",
      "Objectifs ciblés",
      "Résultats rapides",
    ],
    color: "bg-purple-50",
    textColor: "text-purple-600",
    borderColor: "border-purple-200",
    image:
      "https://images.unsplash.com/photo-1582650848997-fcb00b5a72e4?auto=format&fit=crop&w=600&q=80",
  },
];
