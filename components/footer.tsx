import { navLinks, programs } from "@/constants";
import { ChevronRight, Facebook, Instagram, YoutubeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const socialIcons = {
  facebook: {
    icon: <Facebook className="size-4" />,
    link: "https://facebook.com/profile.php?id=61573963774134",
  },
  instagram: {
    icon: <Instagram className="size-4" />,
    link: "",
  },
  youtube: {
    icon: <YoutubeIcon className="size-4" />,
    link: "https://youtube.com/@cyrillefomekong1413?si=NfurFbkygcvPeWFJ",
  },
};

export default function Footer() {
  return (
    <footer className="pt-20 pb-10 text-gray-300 bg-gray-900">
      <div className="container px-6 mx-auto md:px-8">
        <div className="grid grid-cols-1 gap-10 mb-16 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4 text-2xl font-bold text-white font-display">
              <Image
                src="/fota-logo.png"
                width="100"
                alt="fota logo"
                height="100"
              />
              <span>Tennis Academy</span>
            </div>

            <p className="mb-6 text-gray-400">
              Développez votre passion pour le tennis avec des professionnels
              dans un cadre exceptionnel.
            </p>

            <div className="flex space-x-4">
              {["facebook", "instagram", "youtube"].map((social) => (
                <a
                  key={social}
                  href={socialIcons[social as keyof typeof socialIcons].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 text-gray-300 transition-colors bg-gray-800 rounded-full hover:bg-tennis-600 hover:text-white"
                  aria-label={`Suivez-nous sur ${social}`}
                >
                  <span className="capitalize">
                    {socialIcons[social as keyof typeof socialIcons].icon}{" "}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">
              Liens rapides
            </h4>
            <ul className="space-y-3">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.path}
                    className="inline-flex items-center transition-colors hover:text-tennis-400"
                  >
                    <ChevronRight size={16} className="mr-2" />
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">
              Nos services
            </h4>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program.slug}>
                  <a
                    href={`/programs/${program.slug}`}
                    className="inline-flex items-center transition-colors hover:text-tennis-400"
                  >
                    <ChevronRight size={16} className="mr-2" />
                    <span>{program.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">
              Newsletter
            </h4>
            <p className="mb-4 text-gray-400">
              Abonnez-vous pour recevoir nos dernières actualités et offres
              spéciales.
            </p>

            <form className="space-y-3">
              <div>
                <input
                  type="email"
                  placeholder="Votre email"
                  className="w-full px-4 py-3 text-white transition-colors bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-tennis-500 focus:border-tennis-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 font-medium text-white transition-colors rounded-lg bg-tennis-600 hover:bg-tennis-700"
              >
                S&apos;abonner
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between pt-8 border-t border-gray-800 md:flex-row">
          <p className="mb-4 text-sm text-gray-500 md:mb-0">
            &copy; {new Date().getFullYear()} Tennis Academy. Tous droits
            réservés.
          </p>

          <div className="flex space-x-6">
            <Link
              href="/privacy"
              className="text-sm text-gray-500 transition-colors hover:text-gray-300"
            >
              Politique de confidentialité
            </Link>
            <Link
              href="/condition"
              className="text-sm text-gray-500 transition-colors hover:text-gray-300"
            >
              Conditions d&apos;utilisation
            </Link>
            <Link
              href="/legal"
              className="text-sm text-gray-500 transition-colors hover:text-gray-300"
            >
              Mentions légales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
