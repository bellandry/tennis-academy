import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const contactDetails = [
  {
    icon: Phone,
    label: "Téléphone",
    value: "+237 690 117 802",
    href: "tel:+237690117802",
  },
  {
    icon: Mail,
    label: "Email",
    value: "coachcyrille05@gmail.com",
    href: "mailto:coachcyrille05@gmail.com",
  },
  {
    icon: MapPin,
    label: "Nous trouver",
    value: "Tennis Club Bafoussam, Cameroun",
    href: "/contact",
  },
];

export default function ContactCardSection() {
  return (
    <section className="bg-white px-6 pb-16 pt-2 md:px-8 md:pb-24 md:pt-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid gap-8 rounded-[2rem] border border-[#d8e4de] bg-[#f4f8f3] p-6 shadow-sm md:grid-cols-[1.1fr_1.9fr] md:items-center md:p-10 lg:p-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#16786b]">
              Parlons tennis
            </p>
            <h2 className="mt-3 max-w-md text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#073f3c] md:text-4xl">
              Une question avant de commencer ?
            </h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-slate-600 md:text-base">
              Notre équipe vous répond pour vous aider à choisir le format et le
              programme adaptés à votre objectif.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center rounded-full bg-[#073f3c] px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0c625a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#073f3c] focus-visible:ring-offset-2"
            >
              Accéder à la page contact
              <ArrowUpRight className="ml-2 size-4" />
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {contactDetails.map(({ icon: Icon, label, value, href }) => (
              <Link
                key={label}
                href={href}
                className="group rounded-2xl border border-[#d8e4de] bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#9fc9bd] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16786b] focus-visible:ring-offset-2"
              >
                <span className="flex size-10 items-center justify-center rounded-xl bg-[#d9ef63] text-[#073f3c] transition-transform duration-300 group-hover:scale-105">
                  <Icon className="size-4" />
                </span>
                <span className="mt-4 block text-xs font-semibold uppercase tracking-[0.12em] text-[#16786b]">
                  {label}
                </span>
                <span className="mt-2 block text-sm font-medium leading-5 text-[#073f3c]">
                  {value}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
