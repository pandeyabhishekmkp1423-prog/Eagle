import { Link } from 'react-router-dom';
import { Target, Eye, ShieldCheck, ArrowRight } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-24 bg-surface" id="home-about">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Side: Premium Image Layout */}
        <div className="lg:col-span-6 relative">
          <div className="absolute -left-6 -top-6 w-32 h-32 bg-gold/10 rounded-none -z-10" />
          <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-primary/10 rounded-none -z-10" />
          
          <div className="premium-glow-card relative -rotate-1 overflow-hidden rounded-[20px] border border-gold/30 bg-white p-2.5 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
              alt="Luxury completed residential home project by Eagle Tiger Fabb & Infra"
              className="w-full h-[450px] object-cover rounded-sm hover:scale-105 transition-all duration-700"
              loading="lazy"
            />
            <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/15 bg-primary/50 p-6 text-white shadow-lg backdrop-blur-xl text-left">
              <span className="text-gold font-display text-2xl font-black block">150+ CHECKS</span>
              <span className="text-[10px] text-gray-300 font-mono tracking-widest uppercase mt-1 block">Rigorous structural audit parameters executed daily</span>
            </div>
          </div>
        </div>

        {/* Right Side: Corporate Content */}
        <div className="lg:col-span-6 flex flex-col gap-6 text-left">
          <div className="flex flex-col gap-2">
            <span className="text-gold font-sans text-xs font-bold tracking-[0.3em] uppercase block">About Our Firm</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-primary tracking-tight leading-tight uppercase">
              An Engineering Powerhouse For <span className="text-gold">Premium Spaces</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-gray-medium leading-relaxed font-sans font-light">
            Founded with a vision to revolutionize the civil contracting landscape in Haryana, Eagle Tiger Fabb & Infra delivers institutional-grade turnkey residential construction and heavy metal structural fabrications. We build luxury independent villas, floors, and low-rise blocks focusing on rigid timelines, concrete durability, and complete budgetary protection.
          </p>

          {/* Mission & Vision Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
            <div className="premium-glow-card flex gap-4 rounded-2xl border border-gray-light bg-white p-5">
              <div className="p-3 rounded-lg bg-primary/5 text-primary shrink-0 h-11 w-11 flex items-center justify-center">
                <Target className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-sm font-bold text-primary uppercase tracking-wider">Our Mission</h3>
                <p className="text-xs text-gray-medium mt-1.5 leading-relaxed">
                  To eliminate client risk in house construction by delivering transparent engineering drawings and elite raw material vetting.
                </p>
              </div>
            </div>

            <div className="premium-glow-card flex gap-4 rounded-2xl border border-gray-light bg-white p-5">
              <div className="p-3 rounded-lg bg-gold/15 text-gold shrink-0 h-11 w-11 flex items-center justify-center">
                <Eye className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-sm font-bold text-primary uppercase tracking-wider">Our Vision</h3>
                <p className="text-xs text-gray-medium mt-1.5 leading-relaxed">
                  To establish Eagle Tiger as Haryana's most trusted name for elite turnkey luxury residences and pre-engineered structural works.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 mt-4 pt-4 border-t border-gray-light">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-primary">ISO 9001:2015</span>
                <span className="text-[10px] text-gray-medium">Standards Compliant Vetting</span>
              </div>
            </div>

            <Link
              to="/about"
              className="premium-button inline-flex items-center justify-center gap-2 rounded-[10px] bg-primary px-6 py-3 text-xs font-bold uppercase tracking-widest text-white hover:bg-navy-dark focus:outline-none sm:ml-auto"
            >
              <span>Corporate Profile</span>
              <ArrowRight className="h-3.5 w-3.5 text-gold" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
