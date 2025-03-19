import { navLinks, programs } from "@/constants";
import { ChevronRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <div className="flex items-center gap-2 font-display text-2xl font-bold text-white mb-4">
              <span className="relative w-8 h-8">
                <span className="absolute inset-0 bg-tennis-700 rounded-full"></span>
                <span className="absolute inset-1 border-2 border-tennis-400 rounded-full"></span>
              </span>
              <span>Tennis Academy</span>
            </div>

            <p className="text-gray-400 mb-6">
              Développez votre passion pour le tennis avec des professionnels
              dans un cadre exceptionnel.
            </p>

            <div className="flex space-x-4">
              {["facebook", "twitter", "instagram", "youtube"].map((social) => (
                <a
                  key={social}
                  href={`https://${social}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-tennis-600 hover:text-white transition-colors"
                  aria-label={`Suivez-nous sur ${social}`}
                >
                  <span className="capitalize">{social.charAt(0)}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-4">
              Liens rapides
            </h4>
            <ul className="space-y-3">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.path}
                    className="inline-flex items-center hover:text-tennis-400 transition-colors"
                  >
                    <ChevronRight size={16} className="mr-2" />
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-4">
              Nos services
            </h4>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program.slug}>
                  <a
                    href={`/programs/${program.slug}`}
                    className="inline-flex items-center hover:text-tennis-400 transition-colors"
                  >
                    <ChevronRight size={16} className="mr-2" />
                    <span>{program.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-4">
              Newsletter
            </h4>
            <p className="text-gray-400 mb-4">
              Abonnez-vous pour recevoir nos dernières actualités et offres
              spéciales.
            </p>

            <form className="space-y-3">
              <div>
                <input
                  type="email"
                  placeholder="Votre email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-tennis-500 focus:border-tennis-500 transition-colors"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-tennis-600 text-white font-medium py-3 rounded-lg hover:bg-tennis-700 transition-colors"
              >
                S&apos;abonner
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Tennis Academy. Tous droits
            réservés.
          </p>

          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-500 text-sm hover:text-gray-300 transition-colors"
            >
              Politique de confidentialité
            </a>
            <a
              href="#"
              className="text-gray-500 text-sm hover:text-gray-300 transition-colors"
            >
              Conditions d&apos;utilisation
            </a>
            <a
              href="#"
              className="text-gray-500 text-sm hover:text-gray-300 transition-colors"
            >
              Mentions légales
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
