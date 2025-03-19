import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";

export default function ContactInfo() {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-6">Informations de contact</h3>

      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="shrink-0 w-12 h-12 bg-tennis-100 rounded-lg flex items-center justify-center">
            <Phone size={24} className="text-tennis-600" />
          </div>
          <div>
            <h4 className="font-medium text-gray-800 mb-1">Téléphone</h4>
            <p className="text-gray-600">+237 656 012 471</p>
            <a
              href="https://wa.me/237656012471"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-tennis-600 font-medium mt-2 hover:underline"
            >
              <span>Nous contacter sur WhatsApp</span>
              <ChevronRight size={16} className="ml-1" />
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="shrink-0 w-12 h-12 bg-tennis-100 rounded-lg flex items-center justify-center">
            <Mail size={24} className="text-tennis-600" />
          </div>
          <div>
            <h4 className="font-medium text-gray-800 mb-1">Email</h4>
            <p className="text-gray-600">contact@fota-tennis.com</p>
            <a
              href="mailto:contact@fota-tennis.com"
              className="inline-flex items-center text-tennis-600 font-medium mt-2 hover:underline"
            >
              <span>Nous envoyer un email</span>
              <ChevronRight size={16} className="ml-1" />
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="shrink-0 w-12 h-12 bg-tennis-100 rounded-lg flex items-center justify-center">
            <MapPin size={24} className="text-tennis-600" />
          </div>
          <div>
            <h4 className="font-medium text-gray-800 mb-1">Adresse</h4>
            <p className="text-gray-600">
              Face FEICOM <br />
              Bafoussam, Cameroun
            </p>
            <a
              href="https://goo.gl/maps/123"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-tennis-600 font-medium mt-2 hover:underline"
            >
              <span>Voir sur Google Maps</span>
              <ChevronRight size={16} className="ml-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
