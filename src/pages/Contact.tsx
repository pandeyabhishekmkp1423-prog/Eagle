import SEO from '../components/SEO';
import ContactFormSection from '../components/ContactFormSection';
import { Mail, Phone, Clock, ShieldCheck } from 'lucide-react';

export default function Contact() {
  return (
    <div className="flex flex-col w-full bg-surface pt-24" id="contact-page-container">
      <SEO
        title="Contact Consultation Office"
        description="Book your free turnkey civil construction consultation near IMT Manesar. Schedule site visits, soil bore tests, and structural blueprint vetting."
        keywords="Civil Contractor in Manesar, Turnkey House Construction, House Construction Company, Building Contractor Gurugram, RCC Contractor"
      />

      {/* Hero Banner Header */}
      <div className="relative py-24 bg-primary text-white text-center overflow-hidden">
        {/* Decorative background grid and light bubble */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col gap-4">
          <span className="text-gold font-sans text-xs font-bold tracking-[0.2em] uppercase">Connect With Us</span>
          <h1 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight">
            Consultation Desk
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed font-sans font-light">
            Ready to build? Get in touch with Sandeep Gahlot and our team of graduate civil engineers for a transparent Bill of Quantities (BOQ) evaluation and site visits.
          </p>
        </div>
      </div>

      {/* Quick Office Status indicator cards */}
      <section className="py-12 bg-white border-b border-gray-light">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          
          <div className="p-6 rounded-2xl bg-surface border border-gray-light flex items-center gap-4">
            <div className="p-3 rounded-xl bg-primary/5 text-primary">
              <Clock className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-gray-medium uppercase tracking-wider font-mono">Office Hours</span>
              <span className="text-xs font-bold text-primary mt-1">9:00 AM - 6:30 PM (Mon - Sat)</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-surface border border-gray-light flex items-center gap-4">
            <div className="p-3 rounded-xl bg-primary/5 text-primary">
              <Phone className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-gray-medium uppercase tracking-wider font-mono">Consultation Helpline</span>
              <a href="tel:+919717915511" className="text-xs font-bold text-gold mt-1 hover:underline">
                +91 9717915511
              </a>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-surface border border-gray-light flex items-center gap-4">
            <div className="p-3 rounded-xl bg-primary/5 text-primary">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-gray-medium uppercase tracking-wider font-mono">Vetting Compliance</span>
              <span className="text-xs font-bold text-primary mt-1">ISO 9001:2015 Structural Audited</span>
            </div>
          </div>

        </div>
      </section>

      {/* Main split form and maps section */}
      <ContactFormSection />
    </div>
  );
}
