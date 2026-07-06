import SEO from '../components/SEO';
import { SERVICES } from '../data';
import IconRenderer from '../components/IconRenderer';
import { Link } from 'react-router-dom';
import { ShieldCheck, HardHat, FileText, Settings, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Services() {
  return (
    <div className="flex flex-col w-full bg-surface pt-24" id="services-page-container">
      <SEO
        title="Engineering Services & Technical Specs"
        description="Explore our seven turnkey civil engineering capabilities including RCC structure framing, custom metal fabrication, and luxury interior finishing across Haryana."
        keywords="Civil Contractor in Manesar, Turnkey House Construction, House Construction Company, RCC Contractor, Interior Finishing"
      />

      {/* Hero Banner Header */}
      <div className="relative py-24 bg-primary text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col gap-4">
          <span className="text-gold font-sans text-xs font-bold tracking-[0.2em] uppercase">Our Capabilities</span>
          <h1 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight">
            Structural Superiority
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed font-sans font-light">
            We operate according to strict Indian Standard (IS) codes, incorporating certified soil testing and third-party lab audits on raw materials for total structural peace of mind.
          </p>
        </div>
      </div>

      {/* Main Detailed Service Listings */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 flex flex-col gap-20">
          {SERVICES.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-20 border-b border-gray-light last:border-0 last:pb-0 scroll-mt-28`}
              >
                {/* Visual Cover (Swaps columns alternately) */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="overflow-hidden rounded-2xl border border-gray-light bg-surface shadow-md relative h-80 sm:h-96">
                    <img
                      src={service.image}
                      alt={`${service.title} specialized engineering specs`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent pointer-events-none" />
                    
                    {/* Floating Icon Circle */}
                    <div className="absolute top-6 left-6 p-4 rounded-xl bg-gold text-primary shadow-lg border border-gold/40">
                      <IconRenderer name={service.icon} className="h-6 w-6" />
                    </div>
                  </div>
                </div>

                {/* Technical Copy Details */}
                <div className={`lg:col-span-7 flex flex-col gap-5 text-left ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="flex flex-col gap-1">
                    <span className="text-gold font-mono text-[10px] font-bold uppercase tracking-[0.2em]">
                      PHASE 0{index + 1} • CORE ENGINEERING
                    </span>
                    <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-primary uppercase">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-medium leading-relaxed font-sans font-light">
                    {service.detailedDescription}
                  </p>

                  {/* Highlights Bullet layout */}
                  <div className="flex flex-col gap-3 mt-2">
                    <h4 className="font-display text-xs font-bold text-primary uppercase tracking-wider">
                      Core Execution Parameters:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.benefits.map((benefit, bIdx) => (
                        <li key={bIdx} className="flex gap-2.5 items-start text-xs text-gray-700">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="font-sans leading-relaxed">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-light/60">
                    <Link
                      to="/contact"
                      className="premium-button inline-flex items-center gap-1.5 rounded-[9px] bg-primary px-5 py-2.5 text-[10px] font-bold uppercase tracking-wider text-white hover:bg-navy-dark focus:outline-none"
                    >
                      Book Free Estimation Site-Visit
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Quality Standards sidebar highlight */}
      <section className="py-24 bg-surface border-t border-gray-light">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="premium-glow-card flex flex-col gap-4 rounded-2xl border border-gray-light bg-white p-8">
            <div className="p-3.5 rounded-xl bg-primary/5 text-primary self-start h-12 w-12 flex items-center justify-center">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="font-display text-sm font-bold text-primary uppercase tracking-wider">
              Ultrasonic Slump Vetting
            </h3>
            <p className="text-xs text-gray-medium leading-relaxed font-sans">
              We perform ultrasonic slump and slump flow checks on concrete batches directly before pour. Zero local watering admixtures are allowed.
            </p>
          </div>

          <div className="premium-glow-card flex flex-col gap-4 rounded-2xl border border-gray-light bg-white p-8">
            <div className="p-3.5 rounded-xl bg-primary/5 text-primary self-start h-12 w-12 flex items-center justify-center">
              <Settings className="h-5 w-5" />
            </div>
            <h3 className="font-display text-sm font-bold text-primary uppercase tracking-wider">
              Soil SBS Lab Calibration
            </h3>
            <p className="text-xs text-gray-medium leading-relaxed font-sans">
              Every design begins with physical borehole soil testing. We calibrate foundation depth and reinforcement steel grades according to real SBS load bearing capacities.
            </p>
          </div>

          <div className="premium-glow-card flex flex-col gap-4 rounded-2xl border border-gray-light bg-white p-8">
            <div className="p-3.5 rounded-xl bg-primary/5 text-primary self-start h-12 w-12 flex items-center justify-center">
              <Sparkles className="h-5 w-5" />
            </div>
            <h3 className="font-display text-sm font-bold text-primary uppercase tracking-wider">
              Triple Layer Waterproofing
            </h3>
            <p className="text-xs text-gray-medium leading-relaxed font-sans">
              Our roof slabs feature dual-layer APP membrane waterproofing followed by a heavy acrylic elastomeric barrier. Guaranteed zero seepage for 10 years.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
