import SEO from '../components/SEO';
import Hero from '../components/home/Hero';
import AboutSection from '../components/home/AboutSection';
import ServicesSection from '../components/home/ServicesSection';
import WhyChooseSection from '../components/home/WhyChooseSection';
import QualityAssuranceSection from '../components/home/QualityAssuranceSection';
import CertificationsBand from '../components/home/CertificationsBand';
import StatsSection from '../components/home/StatsSection';
import ProcessSection from '../components/home/ProcessSection';
import ProjectsSection from '../components/home/ProjectsSection';
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

      {/* 4. Why Choose Eagle Tiger */}
      <WhyChooseSection />

      {/* 5. Branded 150-point quality assurance system */}
      <QualityAssuranceSection />

      {/* 6. Certifications & regulatory compliance strip */}
      <CertificationsBand />

      {/* 7. Statistics corporate counter */}
      <StatsSection />

      {/* 8. Construction Process Timeline */}
      <ProcessSection />

      {/* 9. Featured Projects portfolio grid */}
      <ProjectsSection />

      {/* 10. Glassmorphic Testimonials slider */}
      <TestimonialsSection />

      {/* 11. Portfolio Masonry Gallery */}
      <GallerySection />

      {/* 12. Verified Google Reviews section */}
      <GoogleReviewSection />

      {/* 13. FAQ Accordion panel */}
      <FAQSection />

      {/* 14. Blog updates summaries */}
      <BlogPreviewSection />

      {/* 15. Reusable Split Contact and Map Section */}
      <ContactFormSection />
    </div>
  );
}
