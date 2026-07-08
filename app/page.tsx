import Header from "@/components/Header";
import Hero from "@/components/Hero";

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
      </main>
    </div>
  );
}

