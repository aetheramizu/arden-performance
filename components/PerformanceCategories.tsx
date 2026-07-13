import Reveal from './Reveal';

export default function PerformanceCategories() {
  return (
    <section className="py-24 bg-warmWhite text-obsidian border-b border-obsidian/[0.06] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-baseline">
        {/* Left Column: Section Title */}
        <div className="lg:col-span-4">
          <Reveal delay={0} direction="up" distance={20}>
            <h2 className="text-[11px] uppercase tracking-[0.3em] text-obsidian font-bold">
              Performance Categories
            </h2>
          </Reveal>
        </div>

        {/* Right Column: Categories List */}
        <div className="lg:col-span-8">
          <Reveal delay={150} direction="up" distance={20}>
            <ul 
              className="flex flex-wrap gap-x-8 gap-y-4 text-xs md:text-sm uppercase tracking-[0.25em] text-[#2E2E30] font-semibold"
              aria-label="Available performance categories"
            >
              <li className="text-obsidian transition-opacity duration-200">
                STUDIO CYCLING
              </li>
              <li className="hidden sm:inline text-obsidian/20 font-light" aria-hidden="true">•</li>
              
              <li className="text-[#2E2E30] transition-colors duration-200">
                HIGH-ALTITUDE RUNNING
              </li>
              <li className="hidden sm:inline text-obsidian/20 font-light" aria-hidden="true">•</li>
              
              <li className="text-[#2E2E30] transition-colors duration-200">
                PILATES ARCHITECTURE
              </li>
              <li className="hidden sm:inline text-obsidian/20 font-light" aria-hidden="true">•</li>
              
              <li className="text-[#2E2E30] transition-colors duration-200">
                ATHLETIC ENDURANCE
              </li>
              <li className="hidden sm:inline text-obsidian/20 font-light" aria-hidden="true">•</li>
              
              <li className="text-[#2E2E30] transition-colors duration-200">
                THERAPEUTIC RECOVERY
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
