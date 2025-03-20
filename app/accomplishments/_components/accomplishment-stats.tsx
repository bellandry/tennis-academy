import { accomplishmentStats } from "@/constants";

export const AccomplishmentStats = () => {
  return (
    <section className="section-padding bg-tennis-50 border-y border-tennis-100">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Notre bilan en chiffres
          </h2>
          <p className="text-lg text-gray-600">
            L&apos;excellence de notre académie se reflète dans les succès
            accumulés par nos étudiants
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 animate-on-scroll">
          {accomplishmentStats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-white shadow-subtle border border-tennis-100"
              style={{ animationDelay: `${0.15 * (index + 1)}s` }}
            >
              <p className="text-3xl md:text-4xl font-bold text-tennis-600 mb-2">
                {stat.value}
              </p>
              <p className="text-sm md:text-base text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
