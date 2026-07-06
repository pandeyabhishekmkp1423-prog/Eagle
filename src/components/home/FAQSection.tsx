import { useState } from 'react';
import { ChevronDown, MessageSquare } from 'lucide-react';
import { FAQS } from '../../data';
import { Link } from 'react-router-dom';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-24 bg-surface border-y border-gray-light" id="home-faq">
      <div className="mx-auto max-w-4xl px-6 flex flex-col gap-12">
        {/* Title */}
        <div className="text-center flex flex-col items-center gap-3">
          <span className="text-gold font-sans text-xs font-bold tracking-[0.2em] uppercase">Faqs</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-primary tracking-tight leading-tight">
            Frequently Asked <span className="text-gold">Engineering Questions</span>
          </h2>
          <p className="text-sm text-gray-medium max-w-lg leading-relaxed font-sans font-light">
            Clear, honest answers regarding municipal building guidelines, material brands, RCC strength, and turnkey pricing protocols.
          </p>
        </div>

        {/* Accordion Layout */}
        <div className="flex flex-col gap-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="premium-glow-card overflow-hidden rounded-2xl border border-gray-light bg-white"
                id={`faq-item-${index}`}
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left font-display text-sm sm:text-base font-bold text-primary hover:text-gold transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-gold shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Accordion Content Panel */}
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? 'max-h-[500px] border-t border-gray-light/60' : 'max-h-0'
                  }`}
                >
                  <div className="p-6 text-xs sm:text-sm text-gray-medium leading-relaxed font-sans font-light bg-surface/50">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still Have Questions? */}
        <div className="rounded-2xl border border-gold/20 bg-primary p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 mt-4 relative overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 to-transparent pointer-events-none" />
          <div className="relative z-10 flex gap-4 items-center">
            <div className="p-3 rounded-xl bg-gold/20 text-gold shrink-0 hidden sm:block">
              <MessageSquare className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-display text-sm font-bold uppercase tracking-wider">Still Have a Specific Structural Question?</h3>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed max-w-md">
                Reach out directly to Er. Rajesh Kumar or our technical advisory team for a free structural blueprint audit.
              </p>
            </div>
          </div>
          <Link
            to="/contact"
            className="premium-button relative z-10 shrink-0 rounded-[10px] bg-gold px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-primary focus:outline-none"
          >
            Ask Our Engineers
          </Link>
        </div>
      </div>
    </section>
  );
}
