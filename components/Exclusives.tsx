import Link from 'next/link';

export default function Exclusives() {
  return (
    <section id="exclusives" className="py-32 bg-obsidian border-b border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-20">
          <span className="text-[11px] uppercase tracking-[0.3em] text-white/50 block font-bold mb-4">
            Unmatched Offerings
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-warmWhite leading-[1.1]">
            New ARDEN Exclusives
          </h2>
        </div>

        {/* Staggered Overlapping Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Composite Image and Floating Card */}
          <div className="lg:col-span-7 relative">
            {/* Base Image Wrapper */}
            <div className="aspect-[16/10] bg-zinc-900 overflow-hidden relative shadow-2xl z-0">
              <img
                src="/images/exclusives-ride.jpg"
                alt="Precision cardiovascular cycling session in a high-end architectural space"
                className="object-cover w-full h-full scale-100 hover:scale-105 transition-transform duration-1000 ease-out brightness-90"
                loading="lazy"
              />
            </div>

            {/* Floating Luxury Info Card */}
            <div className="mt-6 lg:mt-0 lg:absolute lg:-bottom-12 lg:-right-6 bg-warmWhite text-obsidian p-8 md:p-12 max-w-md shadow-2xl z-10 space-y-4">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-obsidian/40 block">
                Exclusive Launch
              </span>
              <h3 className="font-serif text-xl md:text-2xl font-normal uppercase tracking-wide leading-tight text-obsidian">
                PRECISION RIDE™
              </h3>
              <p className="text-xs text-obsidian/75 font-light leading-relaxed">
                A performance-driven cardiovascular assessment model that utilizes localized biometric
                telemetry to optimize oxygen ceiling limits and personal metabolic thresholds.
              </p>
              <div className="pt-2">
                <Link
                  href="#apply"
                  className="text-xs uppercase tracking-[0.2em] font-semibold border-b border-obsidian pb-1 hover:text-black hover:border-black transition-colors duration-200"
                >
                  Request Access &rarr;
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Portrait Card and Text Block */}
          <div className="lg:col-span-5 space-y-6 md:space-y-8 lg:pl-12">
            {/* Portrait Image Wrapper */}
            <div className="aspect-[4/5] bg-zinc-900 overflow-hidden relative shadow-xl">
              <img
                src="/images/exclusives-sessions.jpg"
                alt="Precision physical alignment and core skeletal training"
                className="object-cover w-full h-full scale-100 hover:scale-105 transition-transform duration-1000 ease-out brightness-95"
                loading="lazy"
              />
            </div>

            {/* Content Details */}
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 block">
                Private Calibration
              </span>
              <h3 className="font-serif text-xl md:text-2xl font-normal uppercase tracking-wide leading-tight text-warmWhite">
                Unlimited Signature Sessions
              </h3>
              <p className="text-xs text-mutedGray font-light leading-relaxed">
                Every program is calibrated dynamically. Enjoy private studio environments engineered for
                uninterrupted, clinical-grade neurological and physical testing.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
