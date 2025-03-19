import { Award, MapPin, Users, Zap } from "lucide-react";

export const navLinks = [
  { name: "Accueil", path: "/" },
  { name: "A propos", path: "/#a-propos" },
  { name: "Programmes", path: "/programs/debutants" },
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
    colorCheck: "bg-blue-300",
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
    colorCheck: "bg-tennis-300",
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
    colorCheck: "bg-amber-300",
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
    colorCheck: "bg-purple-300",
    textColor: "text-purple-600",
    borderColor: "border-purple-200",
    image:
      "https://images.unsplash.com/photo-1582650848997-fcb00b5a72e4?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Cours particuliers",
    slug: "particuliers",
    description:
      "Un accompagnement personnalisé pour progresser rapidement et atteindre vos objectifs.",
    features: [
      "Enseignement personnalisé",
      "Analyse technique approfondie",
      "Correction en temps réel",
      "Optimisation des performances",
    ],
    color: "bg-green-50",
    colorCheck: "bg-green-300",
    textColor: "text-green-600",
    borderColor: "border-green-200",
    image:
      "https://images.unsplash.com/photo-1582650848997-fcb00b5a72e4?auto=format&fit=crop&w=600&q=80",
  },
];

export const programmes = [
  {
    id: "debutants",
    title: "Cours débutants",
    slug: "cours-debutants",
    description:
      "Introduction aux fondamentaux du tennis dans un environnement ludique et encourageant.",
    longDescription:
      "Nos cours pour débutants sont conçus pour initier les nouveaux joueurs aux bases du tennis dans un cadre amusant et encourageant. Vous apprendrez les techniques fondamentales, les règles du jeu et développerez votre coordination tout en prenant plaisir à jouer. Nos instructeurs qualifiés vous guideront à chaque étape, vous assurant une progression constante et agréable.",
    price: "À partir de 150€ / mois",
    duration: "1h30 par séance",
    frequency: "2 fois par semaine",
    ageGroups: "Enfants (5-12 ans), Adolescents (13-17 ans), Adultes (18+)",
    maxGroupSize: 6,
    features: [
      "Technique de base",
      "Règles du jeu",
      "Coordination",
      "Plaisir de jouer",
    ],
    schedule: [
      { day: "Lundi", time: "16h00 - 17h30" },
      { day: "Mercredi", time: "14h00 - 15h30" },
      { day: "Samedi", time: "10h00 - 11h30" },
    ],
    color: "bg-blue-50",
    textColor: "text-blue-600",
    borderColor: "border-blue-200",
    highlightColor: "bg-blue-600",
    highlightTextColor: "text-white",
    lightColor: "bg-blue-100",
    image:
      "https://images.unsplash.com/photo-1551773148-efc7ebeafb7c?auhref=format&fit=crop&w=1200&q=80",
  },
  {
    id: "intermediaires",
    title: "Cours intermédiaires",
    slug: "cours-intermediaires",
    description:
      "Perfectionnement technique et tactique pour les joueurs ayant déjà les bases.",
    longDescription:
      "Destinés aux joueurs qui maîtrisent déjà les fondamentaux, nos cours intermédiaires vous aideront à perfectionner vos techniques et à développer des stratégies de jeu plus avancées. Vous travaillerez sur des frappes spécifiques, améliorerez votre condition physique et participerez à des matchs supervisés pour mettre en pratique vos compétences dans un environnement compétitif mais bienveillant.",
    price: "À partir de 180€ / mois",
    duration: "2h par séance",
    frequency: "2-3 fois par semaine",
    ageGroups: "Adolescents (13-17 ans), Adultes (18+)",
    maxGroupSize: 4,
    features: [
      "Frappe avancée",
      "Stratégies de jeu",
      "Condition physique",
      "Matchs supervisés",
    ],
    schedule: [
      { day: "Mardi", time: "17h30 - 19h30" },
      { day: "Jeudi", time: "18h00 - 20h00" },
      { day: "Samedi", time: "14h00 - 16h00" },
    ],
    color: "bg-tennis-50",
    textColor: "text-tennis-600",
    borderColor: "border-tennis-200",
    highlightColor: "bg-tennis-600",
    highlightTextColor: "text-white",
    lightColor: "bg-tennis-100",
    image:
      "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?auhref=format&fit=crop&w=1200&q=80",
  },
  {
    id: "competition",
    title: "Cours compétition",
    slug: "cours-competition",
    description:
      "Préparation intensive pour les joueurs visant l'excellence et la compétition.",
    longDescription:
      "Notre programme de compétition est conçu pour les joueurs ambitieux qui visent l'excellence sportive. Avec un entraînement intensif et personnalisé, vous bénéficierez d'analyses vidéo, de préparation mentale et de programmes spécifiques adaptés à vos besoins individuels. Nos entraîneurs expérimentés vous accompagneront dans votre parcours vers les tournois et compétitions, en vous donnant les outils nécessaires pour réussir au plus haut niveau.",
    price: "À partir de 250€ / mois",
    duration: "2h30 par séance",
    frequency: "3-4 fois par semaine",
    ageGroups:
      "Adolescents compétiteurs (13-17 ans), Adultes compétiteurs (18+)",
    maxGroupSize: 3,
    features: [
      "Analyse vidéo",
      "Préparation mentale",
      "Entraînement spécifique",
      "Suivi personnalisé",
    ],
    schedule: [
      { day: "Lundi", time: "18h00 - 20h30" },
      { day: "Mercredi", time: "18h00 - 20h30" },
      { day: "Vendredi", time: "17h30 - 20h00" },
      { day: "Dimanche", time: "10h00 - 12h30" },
    ],
    color: "bg-amber-50",
    textColor: "text-amber-600",
    borderColor: "border-amber-200",
    highlightColor: "bg-amber-600",
    highlightTextColor: "text-white",
    lightColor: "bg-amber-100",
    image:
      "https://images.unsplash.com/photo-1531315396756-905d68d21b56?auhref=format&fit=crop&w=1200&q=80",
  },
  {
    id: "stages",
    title: "Stages intensifs",
    slug: "stages-intensifs",
    description:
      "Sessions concentrées pour progresser rapidement sur des aspects spécifiques du jeu.",
    longDescription:
      "Nos stages intensifs offrent une immersion totale dans le tennis, conçue pour vous faire progresser rapidement sur des aspects spécifiques du jeu. En petits groupes, vous bénéficierez d'une attention personnalisée, avec des objectifs ciblés et des résultats visibles à court terme. Parfaits pour les périodes de vacances ou pour intensifier votre entraînement avant une compétition, ces stages vous permettront de franchir un cap significatif dans votre pratique du tennis.",
    price: "À partir de 350€ / semaine",
    duration: "Sessions de 5 jours (3-4h par jour)",
    frequency: "Pendant les vacances scolaires",
    ageGroups: "Enfants (8-12 ans), Adolescents (13-17 ans), Adultes (18+)",
    maxGroupSize: 4,
    features: [
      "Immersion totale",
      "Petits groupes",
      "Objectifs ciblés",
      "Résultats rapides",
    ],
    schedule: [
      { day: "Vacances de février", time: "10h00 - 14h00" },
      { day: "Vacances de Pâques", time: "10h00 - 14h00" },
      { day: "Vacances d'été", time: "9h00 - 13h00" },
      { day: "Vacances de la Toussaint", time: "10h00 - 14h00" },
    ],
    color: "bg-purple-50",
    textColor: "text-purple-600",
    borderColor: "border-purple-200",
    highlightColor: "bg-purple-600",
    highlightTextColor: "text-white",
    lightColor: "bg-purple-100",
    image:
      "https://images.unsplash.com/photo-1582650848997-fcb00b5a72e4?auhref=format&fit=crop&w=1200&q=80",
  },
  {
    id: "particuliers",
    title: "Cours particuliers",
    slug: "particuliers",
    description:
      "Un accompagnement personnalisé pour progresser rapidement et atteindre vos objectifs.",
    longDescription:
      "Nos cours particuliers sont conçus pour offrir un enseignement sur mesure adapté à votre niveau et à vos objectifs. Que vous souhaitiez perfectionner votre technique, améliorer votre condition physique ou préparer une compétition, nos coachs expérimentés vous guideront avec une approche personnalisée. Chaque séance est ajustée en fonction de vos besoins pour une progression optimale.",
    price: "À partir de 50€ / séance",
    duration: "1h par séance",
    frequency: "Selon vos disponibilités",
    ageGroups: "Enfants (5-12 ans), Adolescents (13-17 ans), Adultes (18+)",
    maxGroupSize: 1,
    features: [
      "Enseignement personnalisé",
      "Analyse technique approfondie",
      "Correction en temps réel",
      "Optimisation des performances",
    ],
    schedule: [
      { day: "Selon disponibilités", time: "À définir avec le coach" },
    ],
    color: "bg-green-50",
    textColor: "text-green-600",
    borderColor: "border-green-200",
    highlightColor: "bg-green-600",
    highlightTextColor: "text-white",
    lightColor: "bg-green-100",
    image:
      "https://images.unsplash.com/photo-1575031643824-2c88a047b2a6?auto=format&fit=crop&w=1200&q=80",
  },
];

export type ProgramProps = {
  title: string;
  slug: string;
  description: string;
  features: string[];
  color: string;
  colorCheck: string;
  textColor: string;
  borderColor: string;
  image: string;
};

export const testimonials = [
  {
    name: "Sophie Dubois",
    role: "Étudiante - 19 ans",
    image: "https://i.pravatar.cc/150?img=1",
    content:
      "L'académie m'a aidée à améliorer mon jeu de façon spectaculaire. Grâce aux conseils personnalisés et à l'attention des coachs, j'ai pu intégrer l'équipe de mon université.",
  },
  {
    name: "Thomas Laurent",
    role: "Parent d'élève",
    image: "https://i.pravatar.cc/150?img=8",
    content:
      "Mon fils adore ses cours à l'académie. Les professeurs savent parfaitement adapter leur pédagogie aux enfants tout en les faisant progresser. Un environnement stimulant et bienveillant.",
  },
  {
    name: "Julien Moreau",
    role: "Joueur amateur - 35 ans",
    image: "https://i.pravatar.cc/150?img=11",
    content:
      "J'ai repris le tennis après 10 ans d'arrêt et l'approche technique des coachs m'a permis de retrouver rapidement mes sensations tout en corrigeant mes mauvaises habitudes.",
  },
];

export const stats = [
  { value: "10+", label: "Années d'expérience" },
  { value: "15", label: "Professeurs certifiés" },
  { value: "2500+", label: "Élèves formés" },
  { value: "12", label: "Courts de tennis" },
];
