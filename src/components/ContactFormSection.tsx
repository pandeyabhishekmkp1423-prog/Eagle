import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, ShieldCheck, AlertCircle } from 'lucide-react';
import { apiFetch, ApiError } from '../lib/api';

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    plotLocation: '',
    serviceType: 'Turnkey Construction',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submissionError, setSubmissionError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(false);
    setSubmissionError('');
    setLoading(true);

    try {
      const honeypot = new FormData(e.currentTarget).get('company_website') as string;

      await apiFetch('/leads.php', {
        method: 'POST',
        body: JSON.stringify({ ...formData, source: 'contact_form', company_website: honeypot }),
      });

      setSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        plotLocation: '',
        serviceType: 'Turnkey Construction',
        message: ''
      });
    } catch (error) {
      setSubmissionError(
        error instanceof ApiError
          ? error.message
          : 'Unable to submit your request. Please try again or email us directly.'
      );
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // WhatsApp helper
  const triggerWhatsApp = () => {
    const phoneNumber = '919717915511';
    const msg = encodeURIComponent('Hello Eagle Tiger Fabb & Infra, I want to book an immediate turnkey construction consultation for my plot.');
    window.open(`https://wa.me/${phoneNumber}?text=${msg}`, '_blank');
  };

  return (
    <section className="py-24 bg-surface" id="reusable-contact-section">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Side: Contact Form Container */}
        <div className="premium-glow-card lg:col-span-7 rounded-[20px] border border-gray-light bg-white border-l-[8px] border-l-gold p-8 sm:p-10" id="contact-form-card">
          <div className="flex flex-col gap-2 mb-8 text-left">
            <span className="text-gold font-sans text-xs font-bold tracking-[0.3em] uppercase block">Connect With Us</span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-primary uppercase tracking-tight">
              Request Free Consultation
            </h2>
            <p className="text-xs sm:text-sm text-gray-medium font-sans">
              Provide your details below. Our civil engineers will compile a structural report and follow up within 24 business hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Honeypot field: hidden from people, filled by simple spam bots. */}
            <input
              type="text"
              name="company_website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute -left-[9999px] h-px w-px opacity-0"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Full Name */}
              <div className="flex flex-col gap-2 text-left">
                <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-primary font-sans">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Nitin Yadav"
                  className="rounded-sm bg-surface border border-gray-light focus:bg-white px-4 py-3.5 text-sm text-primary focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                />
              </div>

              {/* Mobile Phone */}
              <div className="flex flex-col gap-2 text-left">
                <label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-primary font-sans">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  pattern="[0-9]{10}"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="e.g. 9876543210"
                  className="rounded-sm bg-surface border border-gray-light focus:bg-white px-4 py-3.5 text-sm text-primary focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Corporate Email */}
              <div className="flex flex-col gap-2 text-left">
                <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-primary font-sans">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="e.g. nitin@yadavinfra.com"
                  className="rounded-sm bg-surface border border-gray-light focus:bg-white px-4 py-3.5 text-sm text-primary focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                />
              </div>

              {/* Project Plot Location */}
              <div className="flex flex-col gap-2 text-left">
                <label htmlFor="plotLocation" className="text-xs font-bold uppercase tracking-widest text-primary font-sans">
                  Plot Location (Manesar/Gurugram) *
                </label>
                <input
                  type="text"
                  id="plotLocation"
                  name="plotLocation"
                  required
                  value={formData.plotLocation}
                  onChange={handleInputChange}
                  placeholder="e.g. Sector 2, IMT Manesar"
                  className="rounded-sm bg-surface border border-gray-light focus:bg-white px-4 py-3.5 text-sm text-primary focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                />
              </div>
            </div>

            {/* Service Category Selection */}
            <div className="flex flex-col gap-2 text-left">
              <label htmlFor="serviceType" className="text-xs font-bold uppercase tracking-widest text-primary font-sans">
                Desired Civil Service *
              </label>
              <select
                id="serviceType"
                name="serviceType"
                required
                value={formData.serviceType}
                onChange={handleInputChange}
                className="rounded-sm bg-surface border border-gray-light focus:bg-white px-4 py-3.5 text-sm text-primary focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all appearance-none"
              >
                <option value="Residential Construction">Residential Construction (Villas / Floors)</option>
                <option value="Turnkey Construction">Complete Turnkey (Design to Delivery)</option>
                <option value="Civil Contracting">Core Civil & Masonry Contracting</option>
                <option value="RCC Structures">Heavy RCC Structural Casting</option>
                <option value="Architectural Planning">Architectural Elevation & Vastu blueprints</option>
                <option value="Interior Finishing">Premium Interiors (Italian Marble / Kitchen)</option>
                <option value="Project Management">Third-Party Material Vetting & Audit</option>
              </select>
            </div>

            {/* Detailed requirements */}
            <div className="flex flex-col gap-2 text-left">
              <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-primary font-sans">
                Structural Scope / Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Mention plot size, FAR requirements, soil test records if any, and target timeline."
                className="rounded-sm bg-surface border border-gray-light focus:bg-white px-4 py-3.5 text-sm text-primary focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
              />
            </div>

            {/* Form messaging & CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
              <span className="flex items-center gap-1.5 text-xs text-emerald-600 font-semibold">
                <ShieldCheck className="h-4 w-4 shrink-0" />
                <span>ISO 9001:2015 Data Encrypted Security</span>
              </span>

              <button
                type="submit"
                disabled={loading}
                className="premium-button inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-[10px] bg-primary px-8 py-4 text-xs font-bold uppercase tracking-widest text-white hover:bg-navy-dark focus:outline-none disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {loading ? (
                  <span>Sending Request...</span>
                ) : (
                  <>
                    <span>Submit Request</span>
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>

            {submitted && (
              <div role="status" className="mt-2 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-center font-sans text-xs text-emerald-800">
                Your consultation request has been received. Please check your email for confirmation; our engineering team will contact you shortly.
              </div>
            )}

            {submissionError && (
              <div role="alert" className="mt-2 flex items-start gap-2.5 rounded-lg border border-red-200 bg-red-50 p-4 font-sans text-xs leading-relaxed text-red-800">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{submissionError}</span>
              </div>
            )}
          </form>
        </div>

        {/* Right Side: Corporate Directory Info & Interactive Google Map */}
        <div className="lg:col-span-5 flex flex-col gap-8 text-left">
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-xl font-bold text-primary uppercase tracking-wider">
              Corporate Office
            </h3>
            <p className="text-xs sm:text-sm text-gray-medium leading-relaxed font-sans font-light">
              Visit our testing labs and design headquarters. We maintain live materials test cylinders on-site for direct client inspection.
            </p>
          </div>

          <div className="flex flex-col gap-5 text-sm text-gray-700">
            <div className="flex gap-4 items-start">
              <div className="p-3 rounded-sm bg-primary/5 text-primary shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-primary uppercase text-xs tracking-wider">Address</span>
                <span className="text-xs sm:text-sm text-gray-medium mt-1">
                  Office No. 102, Sector 1, IMT Manesar Corridor, Gurugram, Haryana - 122051
                </span>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-3 rounded-sm bg-primary/5 text-primary shrink-0">
                <Phone className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-primary uppercase text-xs tracking-wider">Direct Hotline</span>
                <a href="tel:+919717915511" className="text-xs sm:text-sm text-gold font-bold mt-1 hover:underline">
                  +91 9717915511
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-3 rounded-sm bg-primary/5 text-primary shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-primary uppercase text-xs tracking-wider">General Inbox</span>
                <a href="mailto:eagletigerinfra@gmail.com" className="text-xs sm:text-sm text-gray-medium mt-1 hover:underline">
                  eagletigerinfra@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Instant WhatsApp Support Widget */}
          <div className="rounded-sm bg-emerald-50 border border-emerald-200 p-6 flex items-start gap-4 shadow-md border-l-4 border-l-emerald-500">
            <div className="p-3 rounded-sm bg-emerald-500 text-white shrink-0">
              <MessageSquare className="h-5 w-5" />
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-display text-xs font-bold text-emerald-950 uppercase tracking-wider">Instant WhatsApp Chat</h4>
              <p className="text-xs text-emerald-800 leading-relaxed font-sans">
                Prefer immediate chat? Connect with our structural estimating engineer directly on WhatsApp for prompt advice.
              </p>
              <button
                onClick={triggerWhatsApp}
                className="inline-flex items-center gap-1.5 self-start text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors uppercase tracking-widest mt-1"
                id="contact-whatsapp-chat-button"
              >
                <span>Launch Chat Now</span>
                <MessageSquare className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Interactive Google Map Embed */}
          <div className="rounded-sm overflow-hidden border border-gray-light bg-gray-100 shadow-xl h-60 border-t-4 border-t-primary">
            {/* Standard high-quality responsive Google Map pointing to IMT Manesar / Gurugram */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14041.48839063231!2d76.9205562!3d28.3718105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3e52cfcb6ebd%3A0x6b2af02f04e760c3!2sIMT%20Manesar%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Eagle Tiger Fabb & Infra - IMT Manesar Headquarters Map"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
