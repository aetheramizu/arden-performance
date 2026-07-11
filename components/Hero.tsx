import Link from 'next/link';
import VideoBackground from './VideoBackground';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden">
      {/* Immersive Background Video and Poster Image */}
      <VideoBackground
        videoSrc="/videos/hero-bg.mp4"
        posterSrc="/images/hero-poster.jpg"
      />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full my-auto pt-32 pb-8 md:pt-44 md:pb-12 flex flex-col items-start space-y-12">
        <div className="space-y-4 max-w-5xl">
          {/* Tiny Brand Tagline */}
          <div className="flex items-center space-x-3 text-white">
            <span className="w-1.5 h-1.5 bg-white block rounded-none" aria-hidden="true" />
            <span className="text-xs uppercase tracking-[0.35em] font-medium">
              Human Architecture for Professionals
            </span>
          </div>

          {/* Huge Immersive Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-8xl font-normal leading-[1.08] tracking-tight uppercase text-warmWhite">
            Designed for the individual.<br />
            <span className="italic font-light lowercase tracking-normal">powered by</span> the collective.
          </h1>
        </div>

        {/* Description & Call to Action */}
        <div className="space-y-8 max-w-xl">
          <p className="text-mutedGray text-base md:text-lg font-light leading-relaxed">
            Signature health programs, clinical diagnostics, and high-touch physiological coaching engineered to
            drive results. Reserved exclusively for elite performance.
          </p>

          <div>
            <Link
              href="#apply"
              className="inline-block bg-warmWhite text-obsidian text-xs uppercase tracking-[0.25em] font-bold py-4 px-10 hover:bg-white transition-colors duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Sticky Coordinate Stats (Hero Footer) */}
      <div className="relative z-10 w-full border-t border-white/[0.05] bg-obsidian/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-xs text-mutedGray">
          <div className="space-y-1">
            <span className="text-warmWhite font-bold block text-[10px] uppercase tracking-[0.2em]">
              01 / STRENGTH PROTOCOLS
            </span>
            <p className="font-light text-mutedGray">Skeletal integrity & dense resistance.</p>
          </div>
          <div className="space-y-1">
            <span className="text-warmWhite font-bold block text-[10px] uppercase tracking-[0.2em]">
              02 / METABOLIC SYSTEMS
            </span>
            <p className="font-light text-mutedGray">Sub-cellular glycemic tracking.</p>
          </div>
          <div className="space-y-1">
            <span className="text-warmWhite font-bold block text-[10px] uppercase tracking-[0.2em]">
              03 / CIRCADIAN BLUEPRINTS
            </span>
            <p className="font-light text-mutedGray">Optimized deep autonomic sleep.</p>
          </div>
          <div className="space-y-1">
            <span className="text-warmWhite font-bold block text-[10px] uppercase tracking-[0.2em]">
              04 / THE PHYSICAL CHAMBERS
            </span>
            <p className="font-light text-mutedGray">Sensory decompression retreats.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
