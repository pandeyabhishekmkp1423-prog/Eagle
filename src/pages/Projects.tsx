import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import { PROJECTS } from '../data';
import { MapPin, Calendar, Layers, CheckCircle2, Star, ChevronRight } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState<'All' | 'Completed' | 'In Progress' | 'Upcoming'>('All');
  const location = useLocation();

  // Handle hashtag scroll
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  const filteredProjects = PROJECTS.filter((proj) => {
    if (filter === 'All') return true;
    return proj.status === filter;
  });

  return (
    <div className="flex flex-col w-full bg-surface pt-24" id="projects-page-container">
      <SEO
        title="Portfolio & Construction Sites"
        description="Browse our portfolio of completed luxury villas, industrial fabrications, and low-rise apartments in Sector 2 Manesar and Gurugram."
        keywords="Civil Contractor in Manesar, Turnkey House Construction, House Construction Company, Building Contractor Gurugram"
      />

      {/* Hero Banner Header */}
      <div className="relative py-24 bg-primary text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col gap-4">
          <span className="text-gold font-sans text-xs font-bold tracking-[0.2em] uppercase">Our Legacy</span>
          <h1 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight">
            Built Blueprints
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed font-sans font-light">
            We hold physical on-site evidence of every completed RCC frame, column test log, and Italian marble compound joint. Excellence you can physically touch.
          </p>
        </div>
      </div>

      {/* Interactive Tabs Filter */}
      <section className="py-10 bg-white border-b border-gray-light">
        <div className="mx-auto max-w-7xl px-6 flex justify-center">
          <div className="flex flex-wrap gap-2 bg-surface p-1.5 rounded-2xl border border-gray-light">
            {(['All', 'Completed', 'In Progress', 'Upcoming'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all focus:outline-none ${
                  filter === tab
                    ? 'bg-primary text-white shadow-md'
                    : 'text-gray-medium hover:text-primary'
                }`}
                id={`projects-filter-${tab.toLowerCase()}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Grid List with Details */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-6 flex flex-col gap-16">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              id={proj.id}
              className="premium-glow-card grid scroll-mt-28 grid-cols-1 items-center gap-10 overflow-hidden rounded-3xl border border-gray-light bg-white lg:grid-cols-12"
            >
              {/* Image Layout */}
              <div className="lg:col-span-5 h-[350px] sm:h-[450px] overflow-hidden relative">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating Status Indicator */}
                <div className="absolute top-6 left-6">
                  <span
                    className={`rounded px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-widest text-white shadow-md ${
                      proj.status === 'Completed'
                        ? 'bg-emerald-600'
                        : proj.status === 'In Progress'
                        ? 'bg-amber-600'
                        : 'bg-primary'
                    }`}
                  >
                    {proj.status}
                  </span>
                </div>

                {/* Scope area marker */}
                <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                  <span className="font-mono text-xs font-bold text-gold uppercase tracking-widest block">
                    TOTAL BUILT AREA
                  </span>
                  <span className="font-display text-2xl font-extrabold mt-1 block text-white font-mono">
                    {proj.area}
                  </span>
                </div>
              </div>

              {/* Technical Description Content */}
              <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col gap-5 text-left">
                <div className="flex flex-col gap-1.5">
                  <span className="text-gold font-mono text-[10px] font-bold uppercase tracking-[0.2em]">
                    {proj.category}
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl font-extrabold text-primary uppercase leading-snug">
                    {proj.title}
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-gray-medium leading-relaxed font-sans font-light">
                  {proj.description}
                </p>

                {/* Technical Highlights list */}
                <div className="flex flex-col gap-3 mt-2">
                  <h4 className="font-display text-xs font-bold text-primary uppercase tracking-wider">
                    Core Engineering Highlights:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {proj.highlights.map((high, hIdx) => (
                      <li key={hIdx} className="flex gap-2.5 items-start text-xs text-gray-600">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="font-sans leading-relaxed">{high}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Site Metrics Row */}
                <div className="grid grid-cols-3 gap-4 border-t border-gray-light pt-6 mt-4 text-xs text-gray-500 font-sans">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-mono">Location</span>
                    <span className="font-semibold text-primary flex items-center gap-1.5 mt-1">
                      <MapPin className="h-3.5 w-3.5 text-gold shrink-0" />
                      <span className="truncate">{proj.location}</span>
                    </span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-mono">Duration</span>
                    <span className="font-semibold text-primary flex items-center gap-1.5 mt-1">
                      <Calendar className="h-3.5 w-3.5 text-gold shrink-0" />
                      <span className="truncate">{proj.duration}</span>
                    </span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-mono">QA Standard</span>
                    <span className="font-semibold text-primary flex items-center gap-1.5 mt-1">
                      <Star className="h-3.5 w-3.5 text-gold shrink-0 fill-current" />
                      <span>Certified</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
