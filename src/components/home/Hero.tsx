import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Sparkles, AlertCircle } from 'lucide-react';
import { apiFetch, ApiError } from '../../lib/api';

export default function Hero() {
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submissionError, setSubmissionError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(false);
    setSubmissionError('');
    setLoading(true);

    try {
      await apiFetch('/leads.php', {
        method: 'POST',
        body: JSON.stringify({ ...formData, source: 'home_hero' }),
      });

      setSubmitted(true);
      setFormData({ name: '', phone: '' });
    } catch (error) {
      setSubmissionError(error instanceof ApiError ? error.message : 'Unable to submit your request. Please call us directly.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden bg-primary text-white"
      id="home-hero"
    >
      {/* Full-bleed vivid photography backdrop */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85"
          alt="Premium residential construction by Eagle Tiger Fabb & Infra"
          className="h-full w-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/55 to-primary/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center gap-7 px-6 py-32 text-center">
        <div className="hero-eyebrow inline-flex items-center gap-2.5 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#f1d58f] backdrop-blur-md sm:text-xs">
          <Sparkles className="h-3.5 w-3.5" />
          Eagle Tiger Fabb & Infra · ISO 9001:2015
        </div>

        <h1 className="hero-title font-display text-[2.75rem] font-extrabold leading-[1.05] tracking-[-0.03em] text-white sm:text-6xl lg:text-[5rem]">
          We engineer spaces built to become <span className="gold-text">legacies.</span>
        </h1>

        <p className="hero-copy max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
          Institutional-grade civil engineering for premium homes, independent floors and structural fabrication—delivered with transparent pricing and uncompromising site control.
        </p>

        {/* Lightweight inline quick-quote bar */}
        <form
          onSubmit={handleSubmit}
          className="hero-actions mt-3 flex w-full max-w-xl flex-col gap-2.5 rounded-3xl border border-white/15 bg-white/8 p-2.5 backdrop-blur-xl sm:flex-row sm:items-center sm:rounded-full"
        >
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            className="w-full rounded-2xl border-0 bg-white/5 px-5 py-3.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gold sm:flex-1 sm:rounded-full sm:bg-transparent"
          />
          <div className="hidden h-6 w-px shrink-0 bg-white/15 sm:block" />
          <input
            type="tel"
            name="phone"
            required
            pattern="[0-9]{10}"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone Number"
            className="w-full rounded-2xl border-0 bg-white/5 px-5 py-3.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gold sm:flex-1 sm:rounded-full sm:bg-transparent"
          />
          <button
            type="submit"
            disabled={loading}
            className="premium-button inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-2xl bg-gold px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-primary hover:bg-gold-hover focus:outline-none disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:rounded-full"
          >
            {loading ? (
              <span>Sending...</span>
            ) : (
              <>
                <span>Get Free Quote</span>
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>
        </form>

        {submitted && (
          <div role="status" className="w-full max-w-xl rounded-xl bg-emerald-500/15 p-3 text-center font-sans text-xs text-emerald-200">
            Request received! Our team will call you back shortly.
          </div>
        )}

        {submissionError && (
          <div role="alert" className="flex w-full max-w-xl items-start justify-center gap-2 rounded-xl bg-red-500/15 p-3 text-center font-sans text-xs text-red-200">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
            <span>{submissionError}</span>
          </div>
        )}

        <div className="hero-trust mt-2 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[11px] font-semibold uppercase tracking-wider text-gray-300">
          <span className="flex items-center gap-2">
            <span className="font-display text-lg font-black text-gold">100+</span>
            Premium Projects
          </span>
          <span className="flex items-center gap-2">
            <span className="font-display text-lg font-black text-gold">150-Point</span>
            EagleAssure™ QA System
          </span>
          <span className="flex items-center gap-2">
            <span className="font-display text-lg font-black text-gold">18+ Yrs</span>
            Founder-Led Engineering
          </span>
        </div>

        <Link
          to="/projects"
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-gray-300 transition-colors hover:text-gold"
        >
          <span>Explore our completed projects</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </section>
  );
}
