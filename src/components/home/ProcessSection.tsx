import { TIMELINE } from '../../data';
import { CheckCircle2 } from 'lucide-react';

export default function ProcessSection() {
  return (
    <section className="py-24 bg-surface relative overflow-hidden" id="home-process">
      {/* Decorative Blueprint Grid Accents */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold/15 to-transparent -translate-y-1/2 pointer-events-none hidden lg:block" />

      <div className="mx-auto max-w-7xl px-6 relative z-10 flex flex-col gap-16">
        {/* Section Heading */}
        <div className="text-center flex flex-col items-center gap-3">
          <span className="text-gold font-sans text-xs font-bold tracking-[0.2em] uppercase">How We Build</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-primary tracking-tight leading-tight max-w-2xl">
            Our Standardized 7-Phase <span className="text-gold">Construction Flow</span>
          </h2>
          <p className="text-sm text-gray-medium max-w-lg leading-relaxed font-sans font-light">
            We operate under strict industrial milestone stages to keep you informed, fully protected, and in total structural compliance.
          </p>
        </div>

        {/* Timeline Layout */}
        {/* Horizontal on Desktop, Vertical on Mobile */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 items-stretch justify-between relative">
          {TIMELINE.map((step, index) => {
            const stepNumber = String(index + 1).padStart(2, '0');
            return (
              <div
                key={index}
                className="flex-1 flex flex-col gap-4 p-6 rounded-sm bg-white border border-gray-light relative shadow-sm hover:shadow-md transition-shadow group border-t-4 border-t-primary hover:border-t-gold"
                id={`process-step-${index}`}
              >
                {/* Connector Track on Desktop */}
                {index < TIMELINE.length - 1 && (
                  <div className="absolute top-1/2 -right-3 h-0.5 w-6 bg-gold/30 hidden lg:block group-hover:bg-gold transition-colors duration-300" />
                )}

                {/* Vertical Connector Line on Mobile */}
                {index < TIMELINE.length - 1 && (
                  <div className="absolute bottom-0 left-12 w-0.5 h-8 bg-gold/20 lg:hidden translate-y-full" />
                )}

                {/* Step Number Badge */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-gold tracking-widest uppercase">
                    PHASE {stepNumber}
                  </span>
                  <div className="h-7 w-7 rounded-sm bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 mt-2">
                  <h3 className="font-display text-sm font-bold text-primary uppercase tracking-wider group-hover:text-gold transition-colors">
                    {step.title}
                  </h3>
                  <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                    {step.duration} • {step.subtitle}
                  </span>
                  <p className="text-xs text-gray-medium leading-relaxed font-sans mt-1.5">
                    {step.description}
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
