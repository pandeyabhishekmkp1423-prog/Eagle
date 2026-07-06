import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../../data';
import IconRenderer from '../IconRenderer';

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white border-y border-gray-light" id="home-services">
      <div className="mx-auto max-w-7xl px-6 flex flex-col gap-12">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-gold font-sans text-xs font-bold tracking-[0.2em] uppercase">Core Capabilities</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-primary tracking-tight leading-tight">
              Elite Structural & Turnkey <span className="text-gold">Engineering</span>
            </h2>
          </div>
          <p className="text-sm text-gray-medium max-w-md leading-relaxed font-sans font-light">
            We provide absolute design-to-delivery expertise, keeping your home project financially safe, legally approved, and structurally invulnerable.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 gap-3 md:gap-8 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group relative flex flex-col gap-4 overflow-hidden rounded-sm border border-gray-light border-l-[3px] border-l-gold bg-white p-4 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:bg-primary hover:shadow-xl md:gap-6 md:border-l-[6px] md:p-8"
              id={`service-card-${service.id}`}
            >
              {/* Gold light burst on hover */}
              <div className="absolute top-0 right-0 h-24 w-24 bg-gradient-to-bl from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Icon Container */}
              <div className="flex h-11 w-11 items-center justify-center self-start rounded-sm border border-gray-light/50 bg-surface p-3 text-primary shadow-sm transition-all duration-500 group-hover:border-transparent group-hover:bg-gold group-hover:text-primary md:h-14 md:w-14 md:p-4">
                <IconRenderer name={service.icon} className="h-5 w-5 md:h-6 md:w-6" />
              </div>

              {/* Text content */}
              <div className="flex flex-col gap-2.5 text-left">
                <h3 className="font-display text-xs font-bold uppercase leading-snug tracking-wide text-primary transition-colors duration-500 group-hover:text-white sm:text-sm md:text-lg">
                  {service.title}
                </h3>
                <p className="line-clamp-4 font-sans text-[10px] font-light leading-4 text-gray-medium transition-colors duration-500 group-hover:text-gray-300 sm:text-xs md:text-sm md:leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Read More button linked to services page */}
              <Link
                to={`/services#${service.id}`}
                className="mt-auto inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-[0.1em] text-primary transition-colors duration-500 group-hover:text-gold focus:outline-none sm:text-[10px] md:gap-1.5 md:text-xs md:tracking-widest"
              >
                <span className="md:hidden">Explore</span>
                <span className="hidden md:inline">Explore Technical Specs</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1.5 transition-transform duration-500" />
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA block */}
        <div className="rounded-sm bg-primary text-white p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border-l-[12px] border-gold shadow-2xl relative overflow-hidden mt-6 bg-blueprint-grid">
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 to-transparent z-0" />
          <div className="relative z-10 flex flex-col gap-2 max-w-xl text-left">
            <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase">Need an Independent Assessment?</span>
            <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight">Have an ongoing construction site elsewhere? Let us audit your concrete cubes and steel weights.</h3>
          </div>
          <Link
            to="/contact"
            className="premium-button relative z-10 shrink-0 rounded-[10px] bg-gold px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-primary focus:outline-none"
          >
            Request Third-Party Audit
          </Link>
        </div>
      </div>
    </section>
  );
}
