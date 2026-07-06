import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import { BLOG_POSTS } from '../data';
import { Calendar, User, Clock, ArrowRight, X, Sparkles, AlertCircle } from 'lucide-react';

export default function Blog() {
  const [filter, setFilter] = useState('All');
  const [activePost, setActivePost] = useState<typeof BLOG_POSTS[0] | null>(null);
  const location = useLocation();

  // Handle hash scrolling to open full post instantly
  useEffect(() => {
    if (location.hash) {
      const postId = location.hash.slice(1);
      const post = BLOG_POSTS.find((p) => p.id === postId);
      if (post) {
        setActivePost(post);
      }
    }
  }, [location]);

  const categories = ['All', 'Local Bylaws', 'Engineering Superiority', 'Home Building Guide'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    if (filter === 'All') return true;
    return post.category === filter;
  });

  return (
    <div className="flex flex-col w-full bg-surface pt-24" id="blog-page-container">
      <SEO
        title="Engineering Blog & Building Bylaws"
        description="Stay updated with Haryana building bylaws, IMT Manesar regulations, concrete cube curation guidelines, and structural civil cost evaluations."
        keywords="Civil Contractor in Manesar, Turnkey House Construction, House Construction Company, Building Contractor Gurugram, RCC Contractor"
      />

      {/* Hero Banner Header */}
      <div className="relative py-24 bg-primary text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col gap-4">
          <span className="text-gold font-sans text-xs font-bold tracking-[0.2em] uppercase">Engineering Intelligence</span>
          <h1 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight">
            Technical Logs
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed font-sans font-light">
            Read comprehensive guides written directly by Sandeep Gahlot and our chief civil designers regarding Haryana municipal building bylaws, steel grades, and layout Vastu configurations.
          </p>
        </div>
      </div>

      {/* Interactive Tabs Filter Section */}
      <section className="py-10 bg-white border-b border-gray-light">
        <div className="mx-auto max-w-7xl px-6 flex justify-center">
          <div className="flex flex-wrap gap-1.5 bg-surface p-1.5 rounded-2xl border border-gray-light">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all focus:outline-none ${
                  filter === cat
                    ? 'bg-primary text-white shadow-md'
                    : 'text-gray-medium hover:text-primary'
                }`}
                id={`blog-page-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-6 flex flex-col gap-12">
          
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                onClick={() => setActivePost(post)}
                className="group cursor-pointer flex flex-col rounded-3xl bg-white border border-gray-light overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left"
                id={`blog-page-card-${post.id}`}
              >
                {/* Image */}
                <div className="h-56 overflow-hidden bg-gray-100 relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Category tag */}
                  <span className="absolute top-4 left-4 rounded bg-gold text-primary px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest shadow-md">
                    {post.category}
                  </span>
                </div>

                {/* Info content */}
                <div className="flex flex-col gap-4 p-6 flex-grow">
                  <div className="flex items-center gap-4 text-[10px] text-gray-medium font-mono uppercase font-semibold">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3 text-gold" />
                      <span>{post.date}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3 text-gold" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="font-display text-base font-bold text-primary group-hover:text-gold transition-colors leading-snug uppercase">
                      {post.title}
                    </h3>
                    <p className="text-xs text-gray-medium leading-relaxed font-sans font-light line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Author block */}
                  <div className="flex items-center gap-2 text-xs text-gray-600 border-t border-gray-light/60 pt-4 mt-auto">
                    <User className="h-3.5 w-3.5 text-gold shrink-0" />
                    <span className="truncate">{post.author}</span>
                  </div>

                  {/* Read Link */}
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:text-gold transition-colors uppercase tracking-wider mt-4">
                    <span>Read Complete Article</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-Article dynamic reading Overlay */}
      {activePost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-6 backdrop-blur-md overflow-y-auto"
          onClick={() => setActivePost(null)}
          id="blog-reader-modal"
        >
          <div
            className="relative bg-white max-w-3xl w-full rounded-3xl overflow-hidden shadow-2xl flex flex-col text-left max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Cover */}
            <div className="h-64 sm:h-80 relative bg-primary">
              <img
                src={activePost.image}
                alt={activePost.title}
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent pointer-events-none" />
              
              {/* Close Button */}
              <button
                onClick={() => setActivePost(null)}
                className="absolute top-6 right-6 p-2 rounded-lg bg-black/60 text-white hover:bg-black/80 transition-colors focus:outline-none"
                aria-label="Close Article"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="rounded bg-gold text-primary px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest shadow-md inline-block">
                  {activePost.category}
                </span>
                <h2 className="font-display text-lg sm:text-2xl font-extrabold uppercase mt-3 leading-snug">
                  {activePost.title}
                </h2>
              </div>
            </div>

            {/* Modal Content Scrollable Area */}
            <div className="p-6 sm:p-8 overflow-y-auto flex-grow flex flex-col gap-5 text-gray-700">
              <div className="flex items-center gap-6 text-[10px] text-gray-medium font-mono uppercase font-semibold border-b border-gray-light/60 pb-4">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5 text-gold" />
                  <span>{activePost.date}</span>
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5 text-gold" />
                  <span>{activePost.readTime}</span>
                </span>
                <span className="flex items-center gap-1 sm:ml-auto">
                  <User className="h-3.5 w-3.5 text-gold" />
                  <span>{activePost.author}</span>
                </span>
              </div>

              {/* Core Content */}
              <p className="text-xs sm:text-sm text-primary leading-relaxed font-sans font-medium bg-surface p-4 rounded-xl border border-gray-light/50 italic">
                "{activePost.excerpt}"
              </p>

              <div className="text-xs sm:text-sm text-gray-medium leading-relaxed font-sans font-light flex flex-col gap-4">
                {activePost.content.split('\n\n').map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>

              {/* Technical Disclaimer Footer block */}
              <div className="rounded-xl bg-amber-50 border border-amber-200 p-4 flex gap-3.5 items-start mt-4">
                <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span className="font-display text-xs font-bold text-amber-950 uppercase tracking-wider">Local Regulatory Compliance Note</span>
                  <p className="text-[10px] text-amber-800 leading-relaxed font-sans">
                    Haryana building bylaws and low-rise floor allowances vary by sector zoning and development nodes. Before finalizing structural budgets, we advise conducting professional on-site bore surveys and municipal compliance approvals checks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
