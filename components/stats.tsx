import { stats } from "@/constants";

export const Stats = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-on-scroll">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="text-center"
          style={{ animationDelay: `${0.1 * (index + 1)}s` }}
        >
          <div className="text-4xl md:text-5xl font-bold text-tennis-600 mb-2">
            {stat.value}
          </div>
          <p className="text-gray-600">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};
