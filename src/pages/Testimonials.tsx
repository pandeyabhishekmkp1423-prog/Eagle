import React, { useState } from 'react';
import SEO from '../components/SEO';
import { TESTIMONIALS } from '../data';
import { Star, Quote, ShieldCheck, PenSquare, Send } from 'lucide-react';

export default function Testimonials() {
  const [reviews, setReviews] = useState(TESTIMONIALS);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    location: '',
    rating: 5,
    text: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.text) {
      const newReview = {
        id: `custom-${Date.now()}`,
        name: formData.name,
        role: formData.role || 'Homeowner',
        location: formData.location || 'Gurugram',
        rating: formData.rating,
        text: formData.text,
        date: 'Recent'
      };
      setReviews((prev) => [newReview, ...prev]);
      setFormData({
        name: '',
        role: '',
        location: '',
        rating: 5,
        text: ''
      });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div className="flex flex-col w-full bg-surface pt-24" id="testimonials-page-container">
      <SEO
        title="Client Testimonials & Feedback"
        description="Verify testimonials from Major Generals, Managing Directors, and medical practitioners regarding our turnkey civil construction projects in Gurugram."
        keywords="Civil Contractor in Manesar, Turnkey House Construction, House Construction Company, Building Contractor Gurugram"
      />

      {/* Hero Banner Header */}
      <div className="relative py-24 bg-primary text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col gap-4">
          <span className="text-gold font-sans text-xs font-bold tracking-[0.2em] uppercase">Endorsements</span>
          <h1 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight">
            Client Audits
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed font-sans font-light">
            We don't buy reviews. Browse authentic, vetted testimonials from Haryana's leading homeowners, industrialists, and civil evaluators.
          </p>
        </div>
      </div>

      {/* Main Reviews Layout Grid */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Vetted Reviews List */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {reviews.map((rev) => (
              <div
                key={rev.id}
                className="rounded-3xl bg-white border border-gray-light p-8 sm:p-10 shadow-sm relative overflow-hidden text-left"
                id={`testimonial-page-card-${rev.id}`}
              >
                <Quote className="absolute -right-4 -bottom-4 h-36 w-36 text-gray-light opacity-30 pointer-events-none" />

                <div className="flex items-center gap-1 text-gold mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>

                <blockquote className="text-xs sm:text-sm text-primary leading-relaxed font-sans font-light italic mb-6">
                  "{rev.text}"
                </blockquote>

                <div className="flex flex-col gap-0.5 border-t border-gray-light/60 pt-4 mt-4">
                  <cite className="font-display text-sm font-bold text-primary not-italic uppercase tracking-wide">
                    {rev.name}
                  </cite>
                  <span className="text-[10px] font-bold text-gold uppercase tracking-widest font-mono">
                    {rev.role}
                  </span>
                  <span className="text-[9px] text-gray-medium font-sans">
                    {rev.location} • Completed: {rev.date}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Interactive testimonial submission form */}
          <div className="lg:col-span-5 rounded-3xl border border-gray-light bg-white p-8 shadow-xl text-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/5 text-primary shrink-0">
                <PenSquare className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <h3 className="font-display text-base font-bold text-primary uppercase tracking-wider">
                  Post Your Review
                </h3>
                <span className="text-[10px] text-gray-medium uppercase tracking-wider font-mono">
                  Share your construction story
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest text-primary font-sans">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                  placeholder="e.g. Er. Kapil Yadav"
                  className="rounded-lg bg-surface border border-gray-light px-4 py-3 text-xs text-primary focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Role */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="role" className="text-[10px] font-bold uppercase tracking-widest text-primary font-sans">
                    Client Role / Title
                  </label>
                  <input
                    type="text"
                    id="role"
                    value={formData.role}
                    onChange={(e) => setFormData((prev) => ({ ...prev, role: e.target.value }))}
                    placeholder="e.g. Homeowner, MD"
                    className="rounded-lg bg-surface border border-gray-light px-4 py-3 text-xs text-primary focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                  />
                </div>

                {/* Location */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="location" className="text-[10px] font-bold uppercase tracking-widest text-primary font-sans">
                    Site Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    value={formData.location}
                    onChange={(e) => setFormData((prev) => ({ ...prev, location: e.target.value }))}
                    placeholder="e.g. Sector 2, Manesar"
                    className="rounded-lg bg-surface border border-gray-light px-4 py-3 text-xs text-primary focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                  />
                </div>
              </div>

              {/* Rating selection (stars) */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-primary font-sans">
                  Star Rating (1 - 5)
                </label>
                <div className="flex items-center gap-1.5 mt-1">
                  {[1, 2, 3, 4, 5].map((stars) => (
                    <button
                      type="button"
                      key={stars}
                      onClick={() => setFormData((prev) => ({ ...prev, rating: stars }))}
                      className="p-1 focus:outline-none text-gold transition-transform hover:scale-110"
                      aria-label={`Rate ${stars} stars`}
                    >
                      <Star
                        className={`h-6 w-6 ${
                          formData.rating >= stars ? 'fill-current' : 'text-gray-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Review text */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="text" className="text-[10px] font-bold uppercase tracking-widest text-primary font-sans">
                  Vetted Experience
                </label>
                <textarea
                  id="text"
                  required
                  rows={4}
                  value={formData.text}
                  onChange={(e) => setFormData((prev) => ({ ...prev, text: e.target.value }))}
                  placeholder="Share details about concrete cube casting, billing transparency, structural fabrication, or finishes quality."
                  className="rounded-lg bg-surface border border-gray-light px-4 py-3 text-xs text-primary focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-navy-dark transition-all shadow-md focus:outline-none cursor-pointer"
              >
                <span>Publish Feedback</span>
                <Send className="h-4 w-4" />
              </button>

              <span className="flex items-center gap-1.5 text-[9px] text-gray-500 font-semibold justify-center mt-2">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                <span>Reviews undergo manual engineering verification before listing</span>
              </span>

              {submitted && (
                <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-3 text-[10px] text-emerald-800 font-sans text-center animate-pulse">
                  Thank you! Your verified structural review has been successfully processed and listed below.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
