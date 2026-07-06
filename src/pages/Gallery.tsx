import { useState } from 'react';
import SEO from '../components/SEO';
import { GALLERY_ITEMS } from '../data';
import { X, ZoomIn, Info, ShieldCheck } from 'lucide-react';

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [lightboxImg, setLightboxImg] = useState<{ image: string; title: string; category: string } | null>(null);

  const categories = ['All', 'Architecture & Elevation', 'RCC & Foundation', 'Luxury Interior', 'Structural Steel'];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (filter === 'All') return true;
    return item.category === filter;
  });

  return (
    <div className="flex flex-col w-full bg-surface pt-24" id="gallery-page-container">
      <SEO
        title="Visual Construction Gallery & Lightbox"
        description="Verify our on-site civil progress. Explore real high-resolution photographs of RCC columns, luxury wood finish panels, and industrial structural steel fabrications."
        keywords="Civil Contractor in Manesar, Turnkey House Construction, House Construction Company, RCC Contractor"
      />

      {/* Hero Banner Header */}
      <div className="relative py-24 bg-primary text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col gap-4">
          <span className="text-gold font-sans text-xs font-bold tracking-[0.2em] uppercase">Visual Evidence</span>
          <h1 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight">
            Proof of Work
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed font-sans font-light">
            We don't buy stock renders. Explore verified on-site construction snapshots displaying actual steel reinforcements, concrete pouring, and modular interior fits.
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
                id={`gallery-page-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Grid layout */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-6 flex flex-col gap-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setLightboxImg({ image: item.image, title: item.title, category: item.category })}
                className="group relative cursor-pointer overflow-hidden rounded-3xl border border-gray-light bg-white shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 h-96"
                id={`gallery-page-item-${item.id}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Visual Cover hover effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8" />

                {/* Overlaid copy details */}
                <div className="absolute bottom-8 left-8 right-8 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 text-left">
                  <span className="text-[10px] font-mono font-bold text-gold uppercase tracking-widest block">
                    {item.category}
                  </span>
                  <h3 className="font-display text-base font-bold uppercase tracking-wide mt-2 block">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-[10px] font-extrabold text-white mt-4 uppercase tracking-widest border-b border-white/20 pb-1">
                    <ZoomIn className="h-3.5 w-3.5 text-gold" />
                    <span>Open High-Res Lightbox</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* QA Footer alert */}
          <div className="rounded-2xl border border-gold/10 bg-white p-6 flex flex-col sm:flex-row items-center justify-between gap-6 mt-6 max-w-4xl mx-auto shadow-sm">
            <div className="flex gap-4 items-center text-left">
              <div className="p-3 rounded-xl bg-primary/5 text-primary shrink-0">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-display text-sm font-bold uppercase tracking-wider text-primary">ISO 9001 Approved Log Book</h4>
                <p className="text-xs text-gray-medium leading-relaxed max-w-xl font-sans font-light">
                  Our raw materials yard features an ultrasonic digital testing machine. Clients are welcome to schedule visual tests on cement consistency or steel bend profiles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-6 backdrop-blur-md"
          onClick={() => setLightboxImg(null)}
          id="gallery-page-lightbox"
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxImg(null)}
            className="absolute top-6 right-6 p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none"
            aria-label="Close Lightbox"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Main Visual box */}
          <div
            className="relative max-w-5xl w-full flex flex-col gap-4 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImg.image}
              alt={lightboxImg.title}
              className="max-h-[75vh] w-full object-contain rounded-xl border border-white/10 shadow-2xl"
            />
            <div className="text-center text-white">
              <span className="font-mono text-xs font-bold text-gold uppercase tracking-widest">
                {lightboxImg.category}
              </span>
              <h3 className="font-display text-lg font-bold uppercase tracking-wider text-white mt-1">
                {lightboxImg.title}
              </h3>
              <p className="text-xs text-gray-500 mt-1 font-sans">
                On-Site Material Progress Asset • Eagle Tiger Fabb & Infra Registered Civil Archives
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
