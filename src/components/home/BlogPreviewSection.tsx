import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';
import { BLOG_POSTS } from '../../data';

export default function BlogPreviewSection() {
  // Grab latest 3 posts
  const latestPosts = BLOG_POSTS.slice(0, 3);

  return (
    <section className="py-24 bg-white" id="home-blog-preview">
      <div className="mx-auto max-w-7xl px-6 flex flex-col gap-12">
        {/* Title */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-gold font-sans text-xs font-bold tracking-[0.2em] uppercase">Engineering Intel</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-primary tracking-tight leading-tight">
              Latest Insights & <span className="text-gold">Building Bylaws</span>
            </h2>
          </div>
          <p className="text-sm text-gray-medium max-w-md leading-relaxed font-sans font-light">
            Stay informed with localized engineering articles compiled directly by our on-site structural leads.
          </p>
        </div>

        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <div
              key={post.id}
              className="group flex flex-col rounded-2xl bg-surface border border-gray-light overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              id={`blog-card-${post.id}`}
            >
              {/* Cover Image */}
              <div className="h-48 overflow-hidden bg-gray-100 relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Category tag */}
                <span className="absolute top-4 left-4 rounded bg-gold text-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest shadow-md">
                  {post.category}
                </span>
              </div>

              {/* Text content */}
              <div className="flex flex-col gap-4 p-6 flex-grow">
                {/* Date / Author */}
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

                <div className="flex flex-col gap-1.5">
                  <h3 className="font-display text-base font-bold text-primary group-hover:text-gold transition-colors leading-snug uppercase">
                    {post.title}
                  </h3>
                  <p className="text-xs text-gray-medium leading-relaxed font-sans font-light line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>

                {/* Author Name */}
                <div className="flex items-center gap-2 text-xs text-gray-600 border-t border-gray-light/60 pt-4 mt-2">
                  <User className="h-3.5 w-3.5 text-gold shrink-0" />
                  <span className="truncate">{post.author}</span>
                </div>

                {/* Read More link */}
                <Link
                  to={`/blog#${post.id}`}
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-gold transition-colors uppercase tracking-wider focus:outline-none"
                >
                  <span>Read Corporate Article</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Blog Link */}
        <div className="text-center mt-4">
          <Link
            to="/blog"
            className="premium-button inline-flex items-center gap-2 rounded-[10px] bg-primary px-8 py-4 text-xs font-bold uppercase tracking-wider text-white hover:bg-navy-dark focus:outline-none"
          >
            <span>Read All Expert Logs</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
