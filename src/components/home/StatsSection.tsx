import { STATISTICS } from '../../data';

export default function StatsSection() {
  return (
    <section className="relative py-20 bg-primary text-white overflow-hidden border-y border-gold/10" id="home-stats">
      {/* Visual background architectural blueprints element */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
      <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-64 h-64 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
        {STATISTICS.map((stat, index) => (
          <div key={index} className="flex flex-col gap-2 group" id={`stat-item-${index}`}>
            {/* Value */}
            <span className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-gold tracking-tight group-hover:scale-105 transition-transform duration-300">
              {stat.value}
            </span>
            {/* Thin separating accent */}
            <div className="h-0.5 w-8 bg-white/20 mx-auto rounded-full group-hover:w-16 group-hover:bg-gold transition-all duration-300" />
            {/* Label */}
            <span className="font-sans text-xs sm:text-sm font-medium tracking-widest text-gray-300 uppercase">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
