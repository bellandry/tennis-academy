import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "À quels niveaux et à quels âges s’adressent les programmes ?",
    answer:
      "FOTA accompagne les enfants, les adolescents et les adultes, avec des parcours pour débutants, joueurs intermédiaires et compétiteurs. Des stages intensifs et des cours particuliers complètent les formats proposés.",
  },
  {
    question: "Comment choisir le programme adapté à mon niveau ?",
    answer:
      "Le choix dépend de votre expérience, de vos objectifs et du rythme souhaité. Décrivez votre niveau et vos attentes à l’équipe FOTA : elle pourra vous orienter vers le format le plus pertinent.",
  },
  {
    question: "Quelle est la durée d’une séance de tennis ?",
    answer:
      "La durée varie selon le programme : les séances vont d’une heure à deux heures trente. Les stages intensifs se déroulent sur des sessions de plusieurs heures par jour.",
  },
  {
    question: "Où se déroulent les entraînements ?",
    answer:
      "Les entraînements se déroulent au Tennis Club Bafoussam, à Bafoussam au Cameroun. Les horaires varient selon le programme et les disponibilités.",
  },
  {
    question: "Comment demander des informations ou s’inscrire ?",
    answer:
      "Vous pouvez écrire à FOTA depuis la page Contact pour poser vos questions, ou utiliser directement la page Inscription pour transmettre votre demande.",
  },
];

export default function FaqSection() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };

  return (
    <section
      aria-labelledby="faq-title"
      className="bg-[#f7faf7] px-6 py-16 md:px-8 md:py-24"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="container mx-auto max-w-5xl">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#16786b]">
            Questions fréquentes
          </p>
          <h2
            id="faq-title"
            className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#073f3c] md:text-5xl"
          >
            Tout savoir avant de prendre le court.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Retrouvez les réponses aux questions les plus fréquentes sur les
            cours, les formats et l’accompagnement FOTA.
          </p>
        </div>

        <div className="grid gap-3">
          {faqs.map(({ question, answer }) => (
            <details
              key={question}
              className="group rounded-2xl border border-[#d8e4de] bg-white px-5 py-1 shadow-sm transition-all duration-300 open:border-[#9fc9bd] open:shadow-md md:px-7"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-base font-semibold text-[#073f3c] marker:hidden [&::-webkit-details-marker]:hidden md:text-lg">
                <span>{question}</span>
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#d9ef63] text-[#073f3c] transition-transform duration-300 group-open:rotate-45">
                  <span aria-hidden="true" className="text-xl font-normal leading-none">
                    +
                  </span>
                </span>
              </summary>
              <p className="max-w-3xl pb-5 pr-12 text-sm leading-6 text-slate-600 md:text-base">
                {answer}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-[#d8e4de] bg-[#e9f4e8] p-5 sm:flex-row sm:items-center md:p-6">
          <p className="text-sm font-medium leading-6 text-[#073f3c] md:text-base">
            Vous ne trouvez pas la réponse à votre question ?
          </p>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center rounded-full bg-[#073f3c] px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0c625a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#073f3c] focus-visible:ring-offset-2"
          >
            Nous contacter
            <ArrowUpRight className="ml-2 size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
