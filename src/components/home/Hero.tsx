import { Link } from 'react-router-dom';
import { ArrowRight, Check, ShieldCheck, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section
      className="relative min-h-screen overflow-hidden bg-primary pt-28 text-white md:pt-36"
      id="home-hero"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=1920&q=88"
          alt="Premium residential construction by Eagle Tiger Fabb & Infra"
          className="h-full w-full object-cover object-center opacity-70"
          loading="eager"
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="absolute -left-20 top-1/3 h-96 w-96 rounded-full bg-gold/10 blur-[110px]" />
        <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-blue-400/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] w-full max-w-7xl grid-cols-1 items-center gap-14 px-6 py-16 lg:grid-cols-12 lg:py-20">
        <div className="flex flex-col text-left lg:col-span-7">
          <div className="hero-eyebrow mb-7 inline-flex items-center gap-2.5 self-start rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#f1d58f] backdrop-blur-md sm:text-xs">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Turnkey construction · Gurugram & Manesar</span>
          </div>

          <h1 className="hero-title max-w-4xl font-display text-[2.65rem] font-extrabold leading-[1.03] tracking-[-0.045em] text-white sm:text-6xl lg:text-[4.65rem]">
            We engineer spaces<br className="hidden sm:block" /> built to become <span className="gold-text">legacies.</span>
          </h1>

          <p className="hero-copy mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            Institutional-grade civil engineering for premium homes, independent floors and structural fabrication—delivered with transparent pricing and uncompromising site control.
          </p>

          <div className="hero-actions mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="premium-button inline-flex w-full items-center justify-center gap-3 bg-gold px-7 py-4 text-xs font-bold uppercase tracking-[0.16em] text-primary sm:w-auto"
            >
              Start your project
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/projects"
              className="inline-flex w-full items-center justify-center gap-3 rounded-[10px] border border-white/20 bg-white/8 px-7 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md hover:border-gold/50 hover:bg-white/14 hover:text-gold sm:w-auto"
            >
              Explore our work
            </Link>
          </div>

          <div className="hero-trust mt-10 grid max-w-2xl grid-cols-3 divide-x divide-white/12 border-t border-white/12 pt-7">
            {[
              ['100+', 'Projects delivered'],
              ['18+', 'Years expertise'],
              ['150', 'Quality checks'],
            ].map(([value, label]) => (
              <div key={label} className="flex flex-col pr-3 first:pl-0 [&:not(:first-child)]:pl-5 sm:[&:not(:first-child)]:pl-8">
                <span className="font-display text-2xl font-extrabold text-white sm:text-3xl">{value}</span>
                <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-slate-400 sm:text-[10px]">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-showcase relative hidden lg:col-span-5 lg:block">
          <div className="absolute -inset-10 rounded-full bg-gold/10 blur-3xl" />
          <div className="premium-glow-card relative ml-auto max-w-[430px] rounded-[22px] border border-white/16 bg-white/10 p-3 backdrop-blur-xl">
            <div className="hero-image-frame relative h-[480px] overflow-hidden rounded-[15px]">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=88"
                alt="The Golden Crest luxury villa project"
                className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/18 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-7">
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full border border-emerald-300/25 bg-emerald-400/15 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-emerald-200 backdrop-blur-md">Completed</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-gold">Sector 2 · Manesar</span>
                </div>
                <h2 className="font-display text-2xl font-extrabold tracking-tight text-white">The Golden Crest Estate</h2>
                <p className="mt-2 text-xs leading-5 text-slate-300">Turnkey luxury villa · 5,500 sq. ft.</p>
                <div className="mt-5 grid grid-cols-2 gap-3 border-t border-white/15 pt-5 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-300">
                  <span className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-gold" /> M30 RCC Core</span>
                  <span className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-gold" /> Smart energy</span>
                </div>
              </div>
            </div>
          </div>

          <div className="float-soft absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl border border-white/20 bg-white/95 px-5 py-4 text-primary shadow-2xl backdrop-blur-xl">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-gold">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <strong className="block font-display text-sm font-extrabold">100% transparent</strong>
              <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-gray-medium">Locked BOQ pricing</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
    </section>
  );
}
