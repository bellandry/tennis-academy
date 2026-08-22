import { stats } from "@/constants";

export const Stats = () => {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[1.5rem] border border-[#3b9688]/40 bg-[#3b9688]/40 shadow-xl shadow-[#073f3c]/10 md:grid-cols-4 animate-on-scroll">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-[#0b514b] px-5 py-7 text-center text-white transition-colors hover:bg-[#0d5e57] md:px-6 md:py-8">
          <div className="text-3xl font-semibold tracking-[-0.04em] text-[#d9ef63] md:text-4xl">
            {stat.value}
          </div>
          <p className="mt-2 text-xs font-medium uppercase tracking-[0.12em] text-white/65 md:text-sm">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
};
