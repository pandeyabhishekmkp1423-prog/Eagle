import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-gray-300 border-t border-gold/10 pt-16 pb-8" id="site-footer">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Bio Column */}
        <div className="flex flex-col gap-5">
          <Logo light />
          <p className="text-sm text-gray-400 leading-relaxed mt-2">
            Eagle Tiger Fabb & Infra is a premier turnkey residential construction, civil contracting, and structural fabrication company. We craft enduring legacies across Manesar and Gurugram with clinical engineering and financial transparency.
          </p>
          <div className="flex items-center gap-4 mt-2">
            <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-gold hover:text-primary transition-all text-gray-400" aria-label="Facebook">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-gold hover:text-primary transition-all text-gray-400" aria-label="Twitter">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-gold hover:text-primary transition-all text-gray-400" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-gold hover:text-primary transition-all text-gray-400" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white border-l-2 border-gold pl-3">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2.5 text-sm">
            <li>
              <Link to="/about" className="hover:text-gold transition-colors">Corporate Profile</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-gold transition-colors">Our Construction Services</Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-gold transition-colors">Portfolio & Sites</Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-gold transition-colors">Visual Gallery</Link>
            </li>
            <li>
              <Link to="/testimonials" className="hover:text-gold transition-colors">Client Reviews</Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-gold transition-colors">Engineering Blog</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gold transition-colors">Contact Consultations</Link>
            </li>
          </ul>
        </div>

        {/* Services & Coverage */}
        <div className="flex flex-col gap-4">
          <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white border-l-2 border-gold pl-3">
            Core Service Areas
          </h3>
          <ul className="flex flex-col gap-2.5 text-sm">
            <li className="text-gray-400">IMT Manesar, Gurugram</li>
            <li className="text-gray-400">DLF Phase 1 - 5, Gurugram</li>
            <li className="text-gray-400">Sohna Road, Gurugram</li>
            <li className="text-gray-400">Golf Course Extension, Gurugram</li>
            <li className="text-gray-400">Sector 1 to 90, Manesar Corridor</li>
            <li className="text-gray-400">Kherki Daula & NH-48 Environs</li>
            <li className="text-gray-400">New Gurugram Sectors</li>
          </ul>
        </div>

        {/* Newsletter & Sub */}
        <div className="flex flex-col gap-4">
          <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white border-l-2 border-gold pl-3">
            Corporate Newsletter
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Subscribe to receive expert construction tips, Haryana municipal policy updates, and steel rate logs.
          </p>

          <form onSubmit={handleSubscribe} className="flex flex-col gap-2 mt-2">
            <div className="relative">
              <input
                type="email"
                placeholder="Enter corporate email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 flex h-8 w-8 items-center justify-center rounded bg-gold text-primary hover:bg-gold-hover transition-colors"
                aria-label="Submit subscribe email"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            {subscribed && (
              <span className="text-xs text-gold animate-pulse mt-1">
                Thank you! You have been subscribed successfully.
              </span>
            )}
          </form>
        </div>
      </div>

      {/* Corporate Footprint Info */}
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/5 text-xs text-gray-500">
        <div className="flex items-start gap-2">
          <MapPin className="h-4 w-4 text-gold shrink-0" />
          <span>Registered Address: Office No. 102, Sector 1, IMT Manesar, Gurugram, Haryana - 122051</span>
        </div>
        <div className="flex items-start gap-2">
          <Phone className="h-4 w-4 text-gold shrink-0" />
          <span>Corporate Contact: +91 99999 99999 (Consultations / Material Testing Audits)</span>
        </div>
        <div className="flex items-start gap-2">
          <Mail className="h-4 w-4 text-gold shrink-0" />
          <a href="mailto:info@eagletigerinfra.com" className="transition-colors hover:text-gold">
            Official Inbox: info@eagletigerinfra.com
          </a>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-8 border-t border-white/5 text-xs text-gray-500">
        <span>
          © {currentYear} Eagle Tiger Fabb & Infra. All Rights Reserved.
        </span>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-gold transition-colors">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}
