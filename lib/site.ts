export const SITE_URL = "https://fota.laclass.dev";

export const siteConfig = {
  name: "Fomekong Tennis Academy",
  shortName: "FOTA",
  description:
    "Académie de tennis à Bafoussam, au Cameroun, pour enfants, adolescents et adultes, du niveau débutant à la préparation compétition.",
  locale: "fr_CM",
  country: "CM",
  email: "coachcyrille05@gmail.com",
  telephone: "+237 690 117 802",
  address: {
    locality: "Bafoussam",
    region: "Ouest",
    country: "Cameroun",
    countryCode: "CM",
  },
  logo: `${SITE_URL}/fota-logo.png`,
  image: `${SITE_URL}/og-image.png`,
  socialProfiles: [
    "https://facebook.com/profile.php?id=61573963774134",
    "https://youtube.com/@cyrillefomekong1413?si=NfurFbkygcvPeWFJ",
  ],
} as const;

export const publicRoutes = [
  "/",
  "/infos",
  "/accomplishments",
  "/contact",
  "/inscription",
] as const;
