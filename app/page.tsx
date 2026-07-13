import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PerformanceCategories from "@/components/PerformanceCategories";
import Exclusives from "@/components/Exclusives";
import PerformanceSystem from "@/components/PerformanceSystem";
import DiagnosticPreview from "@/components/DiagnosticPreview";
import Retreats from "@/components/Retreats";
import Intake from "@/components/Intake";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthClub",
    "name": "ARDEN Performance",
    "image": "https://arden-performance.com/images/og-image.jpg",
    "@id": "https://arden-performance.com/#organization",
    "url": "https://arden-performance.com",
    "telephone": "+1-555-0192",
    "priceRange": "$$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Zermatt Chambers",
      "addressLocality": "Zermatt",
      "addressCountry": "CH"
    },
    "description": "Clinical biological systems engineered to preserve healthspan, focus, and structural resilience for the world's elite performers.",
    "sameAs": [
      "https://twitter.com/ardenperformance",
      "https://instagram.com/ardenperformance"
    ]
  };

  return (
    <div className="relative min-h-screen bg-obsidian text-warmWhite overflow-x-hidden">
      {/* Dynamic JSON-LD Structured Data Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Tactile Paper Grain Overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Navigation Header */}
      <Header />

      {/* Main Content */}
      <main id="main-content" className="flex flex-col min-h-screen w-full">
        {/* Dark Hero Section */}
        <Hero />

        {/* Social Proof / Brand Trust Ticker */}
        <PerformanceCategories />

        {/* Staggered Exclusives Section */}
        <Exclusives />

        {/* Proprietary Performance System */}
        <PerformanceSystem />

        {/* Interactive Diagnostic Preview */}
        <DiagnosticPreview />

        {/* Arden House Retreats Section */}
        <Retreats />

        {/* Membership Intake Form */}
        <Intake />

        {/* Frequently Asked Questions */}
        <Faq />

        {/* Architectural Lookbook Footer */}
        <Footer />
      </main>
    </div>
  );
}

