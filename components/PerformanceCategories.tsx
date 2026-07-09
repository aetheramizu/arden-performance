export default function PerformanceCategories() {
  return (
    <section className="py-24 bg-warmWhite text-obsidian border-b border-obsidian/[0.06] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-baseline">
        {/* Left Column: Section Title */}
        <div className="lg:col-span-4">
          <h2 className="text-xs uppercase tracking-[0.3em] text-obsidian font-bold">
            Performance Categories
          </h2>
        </div>

        {/* Right Column: Categories Ticker */}
        <div className="lg:col-span-8">
          <div className="flex flex-wrap gap-x-8 gap-y-4 text-xs md:text-sm uppercase tracking-[0.25em] text-[#2E2E30] font-semibold">
            <span className="text-obsidian hover:opacity-75 transition-opacity duration-200 cursor-pointer">
              STUDIO CYCLING
            </span>
            <span className="text-obsidian/20 font-light" aria-hidden="true">•</span>
            
            <span className="hover:text-obsidian transition-colors duration-200 cursor-pointer">
              HIGH-ALTITUDE RUNNING
            </span>
            <span className="text-obsidian/20 font-light" aria-hidden="true">•</span>
            
            <span className="hover:text-obsidian transition-colors duration-200 cursor-pointer">
              PILATES ARCHITECTURE
            </span>
            <span className="text-obsidian/20 font-light" aria-hidden="true">•</span>
            
            <span className="hover:text-obsidian transition-colors duration-200 cursor-pointer">
              ATHLETIC ENDURANCE
            </span>
            <span className="text-obsidian/20 font-light" aria-hidden="true">•</span>
            
            <span className="hover:text-obsidian transition-colors duration-200 cursor-pointer">
              THERAPEUTIC RECOVERY
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
