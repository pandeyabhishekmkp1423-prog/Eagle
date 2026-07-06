import SEO from '../components/SEO';
import { Target, Eye, ShieldCheck, Award, Briefcase, Sparkles, Compass } from 'lucide-react';
import { CORE_TEAM } from '../data';

export default function About() {
  return (
    <div className="flex flex-col w-full bg-surface pt-24" id="about-page-container">
      <SEO
        title="About Our Engineering Profile"
        description="Learn about Sandeep Gahlot and our team of elite civil engineers building premium turnkey residential and structural fabrication projects across Haryana."
        keywords="Civil Contractor in Manesar, Turnkey House Construction, House Construction Company, Building Contractor Gurugram, RCC Contractor"
      />

      {/* Hero Banner Header */}
      <div className="relative py-24 bg-primary text-white text-center overflow-hidden">
        {/* Architect blueprint style lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col gap-4">
          <span className="text-gold font-sans text-xs font-bold tracking-[0.2em] uppercase">Corporate History</span>
          <h1 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight">
            Engineering Legacies
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed font-sans font-light">
            Founded in the industrial hub of IMT Manesar, Eagle Tiger Fabb & Infra is a multi-million turnover civil engineering firm specializing in luxury turnkey houses and industrial pre-engineered buildings.
          </p>
        </div>
      </div>

      {/* Corporate profile narrative block */}
      <section className="py-24 bg-white border-b border-gray-light">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Text Story */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <span className="text-gold text-xs font-bold tracking-widest uppercase font-mono">Our Founding Principles</span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-primary uppercase">
              How Sandeep Gahlot redefined local contracting standards
            </h2>
            <p className="text-xs sm:text-sm text-gray-medium leading-relaxed font-sans font-light">
              For years, construction in Gurugram and Manesar was managed by unorganized local labor contractors. Projects routinely exceeded schedules, and raw material quality was unmonitored.
            </p>
            <p className="text-xs sm:text-sm text-gray-medium leading-relaxed font-sans font-light">
              We established **Eagle Tiger Fabb & Infra** to bring professional corporate controls to residential building. We employ fully qualified graduate civil engineers, implement strict concrete slump testing, and bind our contracts to complete financial transparency. We believe your dream home shouldn't suffer from unvetted raw materials or budget escalations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-gray-light pt-8 mt-2">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-bold text-primary text-xs uppercase">Zero Risk</span>
                  <span className="text-[10px] text-gray-medium mt-1">Legally locked fixed price contracts</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Compass className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-bold text-primary text-xs uppercase">Vastu Compliant</span>
                  <span className="text-[10px] text-gray-medium mt-1">Perfect dimensional alignments</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Sparkles className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-bold text-primary text-xs uppercase">Premium Finish</span>
                  <span className="text-[10px] text-gray-medium mt-1">Flawless compound marble cuts</span>
                </div>
              </div>
            </div>
          </div>

          {/* Luxury visual render */}
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-3xl border-4 border-white shadow-2xl relative bg-primary">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
                alt="Elite architectural facade design by Eagle Tiger"
                className="w-full h-96 object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                <span className="font-mono text-xs font-bold text-gold uppercase tracking-widest block">Structural Supremacy</span>
                <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                  Every column undergoes rigorous 150-point QA checks, using class-A structural concrete.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-surface border-b border-gray-light">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission Card */}
          <div className="premium-glow-card group flex flex-col gap-5 rounded-3xl border border-gray-light bg-white p-8 text-left sm:p-10">
            <div className="p-4 rounded-xl bg-primary text-white self-start h-14 w-14 flex items-center justify-center">
              <Target className="h-6 w-6 text-gold" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-display text-lg font-bold text-primary uppercase tracking-wider">
                Our Corporate Mission
              </h3>
              <p className="text-xs sm:text-sm text-gray-medium leading-relaxed font-sans font-light">
                To transform civil construction across Manesar and Gurugram by bringing professional engineering controls, absolute billing transparency, and legally locked delivery schedules to custom homes and fabrication layouts. We strive to build structurally invincible structures using tested raw materials, freeing homeowners from traditional local labor complications.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="premium-glow-card group flex flex-col gap-5 rounded-3xl border border-gray-light bg-white p-8 text-left sm:p-10">
            <div className="p-4 rounded-xl bg-gold text-primary self-start h-14 w-14 flex items-center justify-center">
              <Eye className="h-6 w-6" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-display text-lg font-bold text-primary uppercase tracking-wider">
                Our Architectural Vision
              </h3>
              <p className="text-xs sm:text-sm text-gray-medium leading-relaxed font-sans font-light">
                To establish Eagle Tiger Fabb & Infra as the default benchmark for high-end luxury residences, multi-tier independent floors, and pre-engineered metal structures in Haryana. We aim to continually innovate structural safety patterns, seismic protection, and water conservation technologies to build sustainable spaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 flex flex-col gap-12">
          {/* Title */}
          <div className="text-center flex flex-col items-center gap-3">
            <span className="text-gold font-sans text-xs font-bold tracking-[0.2em] uppercase">Core Leadership</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-primary uppercase tracking-tight">
              Elite Structural Engineers
            </h2>
            <p className="text-sm text-gray-medium max-w-md leading-relaxed font-sans font-light">
              Our site operations are overseen exclusively by experienced civil engineering specialists, not unvetted sub-contractors.
            </p>
          </div>

          {/* Team grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CORE_TEAM.map((member, index) => (
              <div
                key={index}
                className="group flex flex-col rounded-2xl bg-surface border border-gray-light overflow-hidden shadow-sm hover:shadow-lg transition-all"
                id={`team-member-card-${index}`}
              >
                {/* Image */}
                <div className="h-80 overflow-hidden bg-gray-100 relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6" />
                  
                  {/* Floating role indicator on hover */}
                  <div className="absolute bottom-6 left-6 right-6 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 text-left">
                    <span className="text-[10px] font-mono font-bold text-gold uppercase tracking-widest block">
                      Core Specialty
                    </span>
                    <span className="text-xs text-gray-200 mt-1 block">
                      {member.specialty}
                    </span>
                  </div>
                </div>

                {/* Meta details */}
                <div className="p-6 text-left flex flex-col gap-2">
                  <h3 className="font-display text-base font-bold text-primary uppercase tracking-wide">
                    {member.name}
                  </h3>
                  <span className="text-xs font-bold text-gold uppercase tracking-widest font-mono">
                    {member.role}
                  </span>
                  <div className="h-px bg-gray-light/80 my-2" />
                  <span className="text-xs text-gray-medium font-sans flex items-center gap-1.5">
                    <Briefcase className="h-3.5 w-3.5 text-gold shrink-0" />
                    <span>{member.experience}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
