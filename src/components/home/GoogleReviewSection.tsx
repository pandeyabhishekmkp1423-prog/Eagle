import { Star, MessageSquare, ExternalLink, ThumbsUp } from 'lucide-react';

export default function GoogleReviewSection() {
  return (
    <section className="py-20 bg-surface border-t border-gray-light relative overflow-hidden" id="home-google-reviews">
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Info block */}
        <div className="lg:col-span-5 flex flex-col gap-5 text-left">
          <div className="flex items-center gap-2">
            {/* Custom Google logo accent */}
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                fill="#EA4335"
              />
            </svg>
            <span className="text-xs font-bold text-gray-medium uppercase tracking-widest font-mono">Verified Google Profile</span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-primary tracking-tight leading-tight">
            Our ★★★★★ Rating on <span className="text-gold">Google Business</span>
          </h2>

          <p className="text-sm text-gray-medium leading-relaxed font-sans font-light">
            We are deeply committed to maintaining a stellar 5.0 Google Rating. Transparent communication, photographic structural proof uploads, and zero pricing loops are why developers and homeowners across IMT Manesar and Gurugram recommend us.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-2">
            <div className="flex flex-col">
              <span className="font-display text-4xl font-black text-primary">5.0 / 5</span>
              <div className="flex items-center gap-1 text-gold mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="text-[10px] text-gray-medium uppercase tracking-wider mt-1.5 font-mono">
                Based on 48+ detailed structural reviews
              </span>
            </div>

            <a
              href="https://search.google.com/local/writereview"
              target="_blank"
              rel="noopener noreferrer"
              className="premium-button inline-flex items-center gap-2 self-start rounded-[10px] bg-gold px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-primary focus:outline-none sm:self-center"
              id="google-review-button"
            >
              <span>Write Google Review</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Right Review showcase */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Review Card 1 */}
          <div className="premium-glow-card rounded-2xl border border-gray-light bg-white p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-xs text-primary">
                  NK
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-primary block">Nitin Khurana</span>
                  <span className="text-[9px] text-gray-medium">Local Guide • 12 reviews</span>
                </div>
              </div>
              <div className="flex items-center text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-xs text-gray-medium leading-relaxed font-sans font-light italic">
              "Outstanding structural engineering work! Eagle Tiger Fabb completed our low-rise residential floors in Gurugram. High-grade TMT steel, Ultratech cement, and continuous lab tests on concrete cubes. Real professionals."
            </p>
            <div className="flex items-center gap-4 mt-4 text-[10px] text-gray-400 border-t border-gray-light/60 pt-3">
              <span className="flex items-center gap-1">
                <ThumbsUp className="h-3 w-3 text-gold" />
                <span>Helpful (4)</span>
              </span>
              <span>2 months ago</span>
            </div>
          </div>

          {/* Review Card 2 */}
          <div className="premium-glow-card rounded-2xl border border-gray-light bg-white p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-gold/20 flex items-center justify-center font-bold text-xs text-gold">
                  SG
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-primary block">Saurabh Gupta</span>
                  <span className="text-[9px] text-gray-medium">Owner, High-End Floor</span>
                </div>
              </div>
              <div className="flex items-center text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-xs text-gray-medium leading-relaxed font-sans font-light italic">
              "Hired them for a turnkey villa in Manesar. They managed structural drawings, soil testing, and Haryana bylaws perfectly. The modular kitchen and false ceilings are flawless. Absolute value for money!"
            </p>
            <div className="flex items-center gap-4 mt-4 text-[10px] text-gray-400 border-t border-gray-light/60 pt-3">
              <span className="flex items-center gap-1">
                <ThumbsUp className="h-3 w-3 text-gold" />
                <span>Helpful (6)</span>
              </span>
              <span>4 weeks ago</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
