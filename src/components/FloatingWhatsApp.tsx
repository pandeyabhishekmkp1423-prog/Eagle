import { useState } from 'react';
import { motion } from 'motion/react';
import { MessageSquare } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = '919717915511'; // Replace with real or standard business number
  const message = encodeURIComponent(
    'Hello Eagle Tiger Fabb & Infra, I would like to request a free turnkey construction consultation for my plot in Manesar/Gurugram.'
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div 
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 pointer-events-none" 
      id="whatsapp-container"
    >
      {/* Animated Chat Label */}
      <motion.div
        initial={{ opacity: 0, x: 15, scale: 0.9 }}
        animate={isHovered ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 15, scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="bg-primary/95 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest px-4 py-2.5 rounded-sm border-l-4 border-gold shadow-2xl pointer-events-auto select-none font-sans whitespace-nowrap flex items-center gap-2"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
        Chat with us
      </motion.div>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl hover:bg-emerald-600 focus:outline-none focus:ring-4 focus:ring-emerald-300 pointer-events-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ 
          scale: 1.12, 
          boxShadow: "0 25px 30px -5px rgba(16, 185, 129, 0.4), 0 12px 16px -6px rgba(16, 185, 129, 0.4)" 
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
        aria-label="Contact Eagle Tiger Fabb & Infra on WhatsApp"
        id="whatsapp-floating-button"
      >
        <MessageSquare className="h-6 w-6" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500"></span>
        </span>
      </motion.a>
    </div>
  );
}
