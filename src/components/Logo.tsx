import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

export default function Logo({ className = '', light = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`} id="brand-logo">
      {/* Abstract Eagle + Tiger Crest Vector */}
      <div className="relative flex h-11 w-11 items-center justify-center">
        <img src="/assets/et.png" alt="Eagle Tiger Fabb & Infra Logo" className="h-11 w-11 object-contain" />
      </div>

      {/* Corporate Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-display text-lg font-extrabold tracking-tight ${
              light ? 'text-white' : 'text-primary'
            }`}
          >
            EAGLE TIGER
          </span>
        </div>
        <span
          className={`font-sans text-[10px] font-bold tracking-[0.2em] uppercase ${
            light ? 'text-gold' : 'text-gold'
          }`}
        >
          Fabb & Infra
        </span>
      </div>
    </div>
  );
}
