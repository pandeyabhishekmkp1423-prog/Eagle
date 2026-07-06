import { useState } from 'react';
import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react';
import { TESTIMONIALS } from '../../data';

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[activeIndex];

  return (
    <section className="py-24 bg-surface" id="home-testimonials">
      <div className="mx-auto max-w-7xl px-6 flex flex-col gap-12">
        {/* Section Title */}
        <div className="text-center flex flex-col items-center gap-3">
          <span className="text-gold font-sans text-xs font-bold tracking-[0.2em] uppercase">Testimonials</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-primary tracking-tight leading-tight">
            Endorsed By Elite <span className="text-gold">Homeowners & MDs</span>
          </h2>
          <p className="text-sm text-gray-medium max-w-lg leading-relaxed font-sans font-light">
            Quality is not what we claim; it is the physical structural reality verified by our corporate and residential clientele.
          </p>
        </div>

        {/* Carousel Block */}
        <div className="relative max-w-4xl mx-auto w-full">
          {/* Main Professional Polish Card */}
          <div className="premium-glow-card relative overflow-hidden rounded-[20px] border border-gray-light border-l-[8px] border-l-gold bg-white p-8 sm:p-12">
            {/* Quote watermark background */}
            <Quote className="absolute -right-4 -bottom-4 h-48 w-48 text-gray-light opacity-30 shrink-0 pointer-events-none" />

            {/* Stars */}
            <div className="flex items-center gap-1 text-gold mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-base sm:text-lg text-primary font-sans font-light leading-relaxed italic mb-8 relative z-10 text-left">
              "{current.text}"
            </blockquote>

            {/* User Meta Info */}
            <div className="flex items-center justify-between border-t border-gray-light pt-6 mt-6">
              <div className="flex flex-col gap-0.5 text-left">
                <cite className="font-display text-base font-bold text-primary not-italic uppercase tracking-wide">
                  {current.name}
                </cite>
                <span className="text-xs font-bold text-gold uppercase tracking-widest font-mono">
                  {current.role}
                </span>
                <span className="text-[10px] text-gray-medium font-sans">
                  {current.location} • Site completed in {current.date}
                </span>
              </div>

              {/* Navigation Indicators */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  className="p-3 rounded-sm border border-gray-light bg-surface hover:bg-primary hover:text-white transition-colors focus:outline-none"
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-3 rounded-sm border border-gray-light bg-surface hover:bg-primary hover:text-white transition-colors focus:outline-none"
                  aria-label="Next testimonial"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Dot navigation indicators */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all focus:outline-none ${
                  activeIndex === index ? 'w-8 bg-gold' : 'w-2.5 bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
