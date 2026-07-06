import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full" id="site-header">
      {/* Top Banner (Corporate Trust Indicators) */}
      <div className="hidden border-b border-white/8 bg-navy-dark px-6 py-2 text-xs text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-slate-400">
              <MapPin className="h-3.5 w-3.5 text-gold" />
              <span>IMT Manesar, Gurugram, Haryana</span>
            </span>
            <span className="flex items-center gap-2 text-slate-400">
              <Clock className="h-3.5 w-3.5 text-gold" />
              <span>Mon - Sat: 9:00 AM - 6:30 PM</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="tel:+919717915511"
              className="flex items-center gap-1.5 font-semibold text-gold hover:text-white"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>+91 9717915511</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full border-b px-6 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/92 py-2.5 shadow-xl backdrop-blur-xl'
            : 'bg-white py-3.5'
        }`}
        id="main-navigation"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Logo */}
          <Link to="/" className="focus:outline-none">
            <Logo />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-6 lg:flex">
            <div className="flex items-center gap-5 xl:gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`group relative py-2 font-sans text-[11px] font-bold uppercase tracking-[0.14em] focus:outline-none ${
                    isActive(link.path)
                      ? 'text-gold'
                      : 'text-primary hover:text-gold'
                  }`}
                >
                  {link.name}
                  <span className={`absolute inset-x-0 -bottom-0.5 mx-auto h-0.5 rounded-full bg-gold transition-transform duration-300 ${isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                </Link>
              ))}
            </div>

            {/* Premium CTA Button */}
            <Link
              to="/contact"
              className="premium-button rounded-[9px] bg-primary px-5 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-white shadow-lg hover:bg-gold hover:text-primary"
            >
              Consultation
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg border border-primary/10 p-2 text-primary hover:border-gold/30 hover:bg-gold/10 focus:outline-none lg:hidden"
            aria-label="Toggle navigation menu"
            id="mobile-menu-toggle"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed bottom-0 right-0 top-0 z-50 w-full max-w-sm border-l border-gold/30 bg-primary p-6 lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        id="mobile-nav-drawer"
        data-open={isOpen}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between mb-8">
          <Logo light />
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-lg border border-white/10 p-2 text-white hover:border-gold/30 hover:bg-white/10 focus:outline-none"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`rounded-lg border-b border-white/5 px-3 py-3 font-sans text-sm font-semibold uppercase tracking-[0.14em] ${
                isActive(link.path) ? 'bg-white/8 text-gold' : 'text-gray-200 hover:bg-white/5 hover:text-gold'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="premium-button mt-4 rounded-lg bg-gold py-3.5 text-center text-xs font-bold uppercase tracking-widest text-primary shadow-lg"
          >
            Consultation
          </Link>

          <div className="mt-8 flex flex-col gap-4 text-xs text-gray-300 border-t border-white/10 pt-6">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gold shrink-0" />
              <span>IMT Manesar, Gurugram, Haryana</span>
            </span>
            <a href="tel:+919717915511" className="flex items-center gap-2 font-semibold text-gold">
              <Phone className="h-4 w-4 shrink-0" />
              <span>+91 9717915511</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
