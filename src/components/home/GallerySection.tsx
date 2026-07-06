import { useState } from 'react';
import { X, ZoomIn, ArrowRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../../data';
import { Link } from 'react-router-dom';

export default function GallerySection() {
  const [filter, setFilter] = useState('All');
  const [lightboxImg, setLightboxImg] = useState<{ image: string; title: string } | null>(null);

  const categories = ['All', 'Architecture & Elevation', 'RCC & Foundation', 'Luxury Interior', 'Structural Steel'];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (filter === 'All') return true;
    return item.category === filter;
  });

  return (
    <section className="py-24 bg-white" id="home-gallery">
      <div className="mx-auto max-w-7xl px-6 flex flex-col gap-12">
        {/* Title */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-gold font-sans text-xs font-bold tracking-[0.2em] uppercase">Visual Evidence</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-primary tracking-tight leading-tight">
              On-Site Material & <span className="text-gold">Civil Details</span>
            </h2>
          </div>

          {/* Categories Tab Selector */}
          <div className="flex flex-wrap gap-1.5 bg-surface border border-gray-light p-1 rounded-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 rounded-sm text-[10px] font-bold uppercase tracking-widest transition-all focus:outline-none ${
                  filter === cat
                    ? 'bg-primary text-white'
                    : 'text-gray-medium hover:text-primary'
                }`}
                id={`gallery-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Layout Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxImg({ image: item.image, title: item.title })}
              className="group relative cursor-pointer overflow-hidden rounded-sm border border-gray-light bg-surface shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 h-80 border-b-4 border-b-primary hover:border-b-gold"
              id={`gallery-item-${item.id}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />

              {/* Text Hover Content */}
              <div className="absolute bottom-6 left-6 right-6 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 text-left">
                <span className="text-[10px] font-mono font-bold text-gold uppercase tracking-widest block">
                  {item.category}
                </span>
                <h3 className="font-display text-sm font-bold uppercase tracking-wider mt-1.5 block">
                  {item.title}
                </h3>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold text-white mt-3 uppercase tracking-widest border-b border-white/20 pb-0.5">
                  <ZoomIn className="h-3 w-3 text-gold" />
                  <span>View Full Lightbox</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action for complete gallery page */}
        <div className="text-center mt-4">
          <Link
            to="/gallery"
            className="premium-button inline-flex items-center gap-2 rounded-[10px] bg-primary px-8 py-4 text-xs font-bold uppercase tracking-widest text-white hover:bg-navy-dark focus:outline-none"
          >
            <span>Launch Dynamic Gallery Room</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Lightbox Pop-up Modal */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-6 backdrop-blur-md"
          onClick={() => setLightboxImg(null)}
          id="gallery-lightbox-modal"
        >
          <button
            onClick={() => setLightboxImg(null)}
            className="absolute top-6 right-6 p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none"
            aria-label="Close Lightbox"
          >
            <X className="h-6 w-6" />
          </button>

          <div
            className="relative max-w-5xl w-full flex flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImg.image}
              alt={lightboxImg.title}
              className="max-h-[75vh] w-full object-contain rounded-xl border border-white/10 shadow-2xl"
            />
            <div className="text-center text-white">
              <h3 className="font-display text-lg font-bold uppercase tracking-wider text-gold">
                {lightboxImg.title}
              </h3>
              <p className="text-xs text-gray-400 mt-1 font-sans">
                Eagle Tiger Construction Portfolio Asset • Verified Structural Engineering Record
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
