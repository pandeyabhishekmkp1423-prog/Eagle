import { Layers, ShieldCheck, HardHat, Ruler, BadgeCheck } from 'lucide-react';

const CHECK_CATEGORIES = [
  {
    icon: Layers,
    title: 'Structural Integrity',
    checks: ['Concrete cube compression testing every pour', 'Laser-guided level & alignment checks', 'Ultrasonic slab health audits'],
  },
  {
    icon: ShieldCheck,
    title: 'Material Certification',
    checks: ['Fe550D TMT steel mill-test verification', 'Branded Ultratech/Ambuja cement batch checks', 'Aggregate & sand grading tests'],
  },
  {
    icon: HardHat,
    title: 'Site & Safety Audits',
    checks: ['Daily supervisor sign-off logs', 'Scaffolding & hazard-layout inspections', 'Electrical & plumbing pressure tests'],
  },
  {
    icon: Ruler,
    title: 'Finishing Precision',
    checks: ['Zero-level tile & flooring checks', 'Moisture-barrier & waterproofing scans', 'Final punch-list walkthrough before handover'],
  },
];

export default function QualityAssuranceSection() {
  return (
    <section className="relative overflow-hidden bg-primary py-24 text-white" id="home-quality-assurance">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute -right-24 top-1/4 h-80 w-80 rounded-full bg-gold/10 blur-[110px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 flex flex-col gap-12">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#f1d58f]">
            <BadgeCheck className="h-3.5 w-3.5" />
            Our Quality Framework
          </span>
          <h2 className="font-display max-w-2xl text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">
            Introducing <span className="gold-text">EagleAssure™</span> — Our 150-Point Inspection System
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base">
            Every Eagle Tiger site is governed by the same structured checklist, cross-verified by our on-site engineers and QA/QC manager at every milestone — not just at handover.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CHECK_CATEGORIES.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-gold/40 hover:bg-white/10"
                id={`quality-category-${category.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15 text-gold">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-sm font-bold uppercase tracking-wide text-white">{category.title}</h3>
                <ul className="flex flex-col gap-2 text-xs leading-relaxed text-gray-300">
                  {category.checks.map((check) => (
                    <li key={check} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                      <span>{check}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
