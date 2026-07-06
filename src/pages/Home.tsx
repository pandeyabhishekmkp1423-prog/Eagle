import SEO from '../components/SEO';
import Hero from '../components/home/Hero';
import AboutSection from '../components/home/AboutSection';
import ServicesSection from '../components/home/ServicesSection';
import ProcessSection from '../components/home/ProcessSection';
import ProjectsSection from '../components/home/ProjectsSection';
import WhyChooseSection from '../components/home/WhyChooseSection';
import StatsSection from '../components/home/StatsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import GallerySection from '../components/home/GallerySection';
import GoogleReviewSection from '../components/home/GoogleReviewSection';
import FAQSection from '../components/home/FAQSection';
import BlogPreviewSection from '../components/home/BlogPreviewSection';
import ContactFormSection from '../components/ContactFormSection';

export default function Home() {
  return (
    <div className="flex flex-col w-full" id="home-page-container">
      {/* Dynamic SEO management with local keywords */}
      <SEO
        title="Building Dreams Into Strong Foundations"
        description="Eagle Tiger Fabb & Infra is Haryana's leading turnkey residential builder, civil contractor, and RCC structural fabrication specialist in Manesar & Gurugram."
        keywords="Civil Contractor in Manesar, Turnkey House Construction, House Construction Company, Building Contractor Gurugram, RCC Contractor, Low Rise Building Contractor"
      />

      {/* 1. Premium Hero */}
      <Hero />

      {/* 2. About Company */}
      <AboutSection />

      {/* 3. Our Services */}
      <ServicesSection />

      {/* 4. Construction Process Timeline */}
      <ProcessSection />

      {/* 5. Featured Projects portfolio grid */}
      <ProjectsSection />

      {/* 6. Why Choose Eagle Tiger */}
      <WhyChooseSection />

      {/* 7. Statistics corporate counter */}
      <StatsSection />

      {/* 8. Glassmorphic Testimonials slider */}
      <TestimonialsSection />

      {/* 9. Portfolio Masonry Gallery */}
      <GallerySection />

      {/* 10. Verified Google Reviews section */}
      <GoogleReviewSection />

      {/* 11. FAQ Accordion panel */}
      <FAQSection />

      {/* 12. Blog updates summaries */}
      <BlogPreviewSection />

      {/* 13. Reusable Split Contact and Map Section */}
      <ContactFormSection />
    </div>
  );
}
