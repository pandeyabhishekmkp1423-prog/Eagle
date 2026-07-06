import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Layers, Calendar, ChevronRight } from 'lucide-react';
import { PROJECTS } from '../../data';

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<'All' | 'Completed' | 'In Progress' | 'Upcoming'>('All');

  const filteredProjects = PROJECTS.filter((proj) => {
    if (activeTab === 'All') return true;
    return proj.status === activeTab;
  });

  return (
    <section className="py-24 bg-white" id="home-projects">
      <div className="mx-auto max-w-7xl px-6 flex flex-col gap-12">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div className="flex flex-col gap-2 text-left">
            <span className="text-gold font-sans text-xs font-bold tracking-[0.2em] uppercase">Built Legacies</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-primary tracking-tight leading-tight">
              Our Featured Construction <span className="text-gold">Showcase</span>
            </h2>
          </div>

          {/* Dynamic Tab Filter */}
          <div className="flex flex-wrap gap-2 items-center bg-surface border border-gray-light p-1.5 rounded-sm self-start">
            {(['All', 'Completed', 'In Progress', 'Upcoming'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-sm text-[10px] font-extrabold uppercase tracking-widest transition-all focus:outline-none ${
                  activeTab === tab
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-gray-medium hover:text-primary'
                }`}
                id={`project-filter-btn-${tab.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="group flex flex-col rounded-sm bg-white border border-gray-light overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-b-4 border-b-primary hover:border-b-gold"
              id={`project-card-${proj.id}`}
            >
              {/* Cover Image & Status Tag */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img
                  src={proj.image}
                  alt={`${proj.title} built by Eagle Tiger`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`rounded-sm px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-white shadow-md ${
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

                {/* Area Tag */}
                <div className="absolute bottom-4 right-4 bg-primary/90 text-gold px-3 py-1 rounded-sm text-[10px] font-mono font-bold">
                  {proj.area}
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="flex flex-col gap-4 p-6 flex-grow text-left">
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-extrabold tracking-widest text-gold uppercase font-mono">
                    {proj.category}
                  </span>
                  <h3 className="font-display text-base font-bold text-primary group-hover:text-gold transition-colors uppercase leading-snug">
                    {proj.title}
                  </h3>
                </div>

                <p className="text-xs text-gray-medium leading-relaxed font-sans font-light line-clamp-2">
                  {proj.description}
                </p>

                {/* Specs list */}
                <div className="grid grid-cols-2 gap-3 border-t border-gray-light/60 pt-4 mt-2 text-xs text-gray-600 font-sans">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 text-gold shrink-0" />
                    <span className="truncate">{proj.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-3.5 w-3.5 text-gold shrink-0" />
                    <span className="truncate">{proj.duration}</span>
                  </div>
                </div>

                {/* Dynamic Details Button linked to Projects Page */}
                <Link
                  to={`/projects#${proj.id}`}
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-sm border border-primary/20 hover:border-gold hover:bg-gold/10 px-4 py-3 text-xs font-bold uppercase tracking-widest text-primary hover:text-primary transition-all focus:outline-none"
                >
                  <span>View Architectural Specs</span>
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Explore All Link */}
        <div className="text-center mt-4">
          <Link
            to="/projects"
            className="premium-button inline-flex items-center gap-2 rounded-[10px] bg-primary px-8 py-4 text-xs font-bold uppercase tracking-widest text-white hover:bg-navy-dark focus:outline-none"
          >
            <span>Explore Complete Portfolio</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
