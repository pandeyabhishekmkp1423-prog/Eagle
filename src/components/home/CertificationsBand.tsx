import { ShieldCheck, FileCheck2, Landmark, ClipboardCheck } from 'lucide-react';

const CERTIFICATIONS = [
  {
    icon: ShieldCheck,
    title: 'ISO 9001:2015',
    subtitle: 'Certified Quality Management',
  },
  {
    icon: FileCheck2,
    title: 'IS 456:2000 & IS 1893',
    subtitle: 'RCC & Seismic Design Codes',
  },
  {
    icon: Landmark,
    title: 'DTCP / HSIIDC',
    subtitle: 'Municipal Approvals Handled In-House',
  },
  {
    icon: ClipboardCheck,
    title: 'Registered Civil Contractor',
    subtitle: 'Haryana State Compliance',
  },
];

export default function CertificationsBand() {
  return (
    <section className="border-y border-gray-light bg-white py-12" id="home-certifications">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4">
          {CERTIFICATIONS.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <div
                key={cert.title}
                className={`flex items-center gap-3 px-2 sm:justify-center sm:border-l sm:border-gray-light sm:px-4 ${index === 0 ? 'sm:border-l-0' : ''}`}
                id={`certification-${index}`}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/5 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-xs font-bold uppercase tracking-wide text-primary sm:text-sm">
                    {cert.title}
                  </span>
                  <span className="text-[10px] text-gray-medium sm:text-xs">{cert.subtitle}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
