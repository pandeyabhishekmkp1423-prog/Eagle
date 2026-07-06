import { Link } from 'react-router-dom';
import { ArrowLeft, Home, HardHat } from 'lucide-react';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-surface px-6 py-24 text-center">
      <SEO title="404 - Page Not Found" description="The requested engineering page does not exist." />
      
      <div className="relative mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary/5 text-gold border border-gold/20 shadow-inner">
        <HardHat className="h-12 w-12" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold/40 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-gold"></span>
        </span>
      </div>

      <h1 className="font-display text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
        404 - Page Under Construction
      </h1>
      <p className="mx-auto mt-4 max-w-md text-base text-gray-medium leading-relaxed">
        The corporate page or blueprint draft you are trying to view is either moved, renamed, or currently undergoing structural remodeling.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-xs sm:max-w-none">
        <Link
          to="/"
          className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-navy-dark transition-all focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <Home className="h-4 w-4" />
          <span>Back to Homepage</span>
        </Link>
        <Link
          to="/contact"
          className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg border border-primary/20 bg-white px-6 py-3.5 text-sm font-semibold text-primary shadow-sm hover:bg-gray-light transition-all focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Contact Corporate Office</span>
        </Link>
      </div>
    </div>
  );
}
