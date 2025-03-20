import { Button } from "./ui/button";

export const CtaSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Rejoignez notre académie
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Vous aussi, vous pouvez atteindre l&apos;excellence. Nos programmes
            s&apos;adaptent à tous les niveaux et à tous les objectifs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              className="bg-tennis-600 text-white hover:bg-tennis-700"
              size="lg"
            >
              S&apos;inscrire maintenant
            </Button>
            <Button
              variant="outline"
              className="border-tennis-200 text-tennis-600 hover:bg-tennis-50"
              size="lg"
            >
              Découvrir nos programmes
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
