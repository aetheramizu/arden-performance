import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PerformanceCategories from "@/components/PerformanceCategories";
import Exclusives from "@/components/Exclusives";
import PerformanceSystem from "@/components/PerformanceSystem";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-obsidian text-warmWhite overflow-x-hidden">
      {/* Tactile Paper Grain Overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Navigation Header */}
      <Header />

      {/* Main Content */}
      <main className="flex flex-col min-h-screen w-full">
        {/* Dark Hero Section */}
        <Hero />

        {/* Social Proof / Brand Trust Ticker */}
        <PerformanceCategories />

        {/* Staggered Exclusives Section */}
        <Exclusives />

        {/* Proprietary Performance System */}
        <PerformanceSystem />
      </main>
    </div>
  );
}

