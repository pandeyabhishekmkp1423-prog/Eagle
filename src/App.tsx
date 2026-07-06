import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonials';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col bg-surface font-sans antialiased text-dark">
        {/* Reset scroll on route change */}
        <ScrollToTop />

        {/* Dynamic Glassmorphic Navigation Header */}
        <Navbar />

        {/* Core Main View Section */}
        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            {/* Fallback 404 catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Corporate Global Footer */}
        <Footer />

        {/* Instant WhatsApp Help Widget */}
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}
