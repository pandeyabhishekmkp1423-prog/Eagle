import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollToTop from './components/ScrollToTop';

// Public pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonials';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Admin pages
import AdminLogin from './pages/admin/AdminLogin';
import AdminLayout from './pages/admin/AdminLayout';
import AdminLeads from './pages/admin/AdminLeads';
import AdminBlogList from './pages/admin/AdminBlogList';
import AdminBlogEditor from './pages/admin/AdminBlogEditor';

// Public site chrome (nav, footer, WhatsApp widget) shared by every marketing page.
function PublicLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-surface font-sans antialiased text-dark">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow w-full">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Admin console: no public nav/footer chrome */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminLeads />} />
          <Route path="blog" element={<AdminBlogList />} />
          <Route path="blog/new" element={<AdminBlogEditor />} />
          <Route path="blog/:id/edit" element={<AdminBlogEditor />} />
        </Route>

        {/* Public marketing site */}
        <Route element={<PublicLayout />}>
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
        </Route>
      </Routes>
    </Router>
  );
}
