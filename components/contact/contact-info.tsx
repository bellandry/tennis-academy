import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";

export default function ContactInfo() {
  return (
    <div>
      <h3 className="mb-6 text-2xl font-bold">Informations de contact</h3>

      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-lg shrink-0 bg-tennis-100">
            <Phone size={24} className="text-tennis-600" />
          </div>
          <div>
            <h4 className="mb-1 font-medium text-gray-800">Téléphone</h4>
            <p className="text-gray-600">+237 690 117 802</p>
            <a
              href="https://wa.me/237690117802"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-2 font-medium text-tennis-600 hover:underline"
            >
              <span>Nous contacter sur WhatsApp</span>
              <ChevronRight size={16} className="ml-1" />
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-lg shrink-0 bg-tennis-100">
            <Mail size={24} className="text-tennis-600" />
          </div>
          <div>
            <h4 className="mb-1 font-medium text-gray-800">Email</h4>
            <p className="text-gray-600">coachcyrille05@gmail.com</p>
            <a
              href="mailto:contact@fota-tennis.com"
              className="inline-flex items-center mt-2 font-medium text-tennis-600 hover:underline"
            >
              <span>Nous envoyer un email</span>
              <ChevronRight size={16} className="ml-1" />
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-lg shrink-0 bg-tennis-100">
            <MapPin size={24} className="text-tennis-600" />
          </div>
          <div>
            <h4 className="mb-1 font-medium text-gray-800">Adresse</h4>
            <p className="text-gray-600">
              Tennis Club Bafoussam <br />
              Bafoussam, Cameroun
            </p>
            <a
              href="https://goo.gl/maps/123"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-2 font-medium text-tennis-600 hover:underline"
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
