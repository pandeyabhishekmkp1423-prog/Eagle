import { WHY_CHOOSE_US } from '../../data';
import IconRenderer from '../IconRenderer';

export default function WhyChooseSection() {
  return (
    <section className="py-24 bg-surface" id="home-why-choose-us">
      <div className="mx-auto max-w-7xl px-6 flex flex-col gap-12">
        {/* Section Header */}
        <div className="text-center flex flex-col items-center gap-3">
          <span className="text-gold font-sans text-xs font-bold tracking-[0.2em] uppercase">Why Choose Eagle Tiger</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-primary tracking-tight leading-tight max-w-2xl">
            Uncompromising Standards in <span className="text-gold">Civil Engineering</span>
          </h2>
          <p className="text-sm text-gray-medium max-w-lg leading-relaxed font-sans font-light">
            We operate like an enterprise. Every layout, mix ratio, weld test, and delivery milestone is protected by strict protocols.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 gap-3 md:gap-8 lg:grid-cols-3">
          {WHY_CHOOSE_US.map((item, index) => {
            // Mapping icon strings to appropriate Lucide names for IconRenderer
            const iconMap: Record<string, string> = {
              'Award': 'Award',
              'ShieldCheck': 'ShieldCheck',
              'FileText': 'FileText',
              'Eye': 'Eye',
              'CheckCircle': 'CheckCircle',
              'Clock': 'Clock'
            };

            return (
              <div
                key={index}
                className="premium-glow-card group flex flex-col gap-3 rounded-2xl border border-gray-light bg-white p-4 transition-all hover:border-gold/30 hover:shadow-lg md:flex-row md:gap-5 md:p-6"
                id={`why-choose-card-${index}`}
              >
                {/* Icon Circle */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/5 p-3 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white md:h-12 md:w-12 md:p-3.5">
                  <IconRenderer name={iconMap[item.icon] || 'CheckCircle'} className="h-5 w-5" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <h3 className="font-display text-[11px] font-bold uppercase leading-snug tracking-wide text-primary transition-colors group-hover:text-gold md:text-sm md:tracking-wider">
                    {item.title}
                  </h3>
                  <p className="line-clamp-4 font-sans text-[10px] leading-4 text-gray-medium md:text-xs md:leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
