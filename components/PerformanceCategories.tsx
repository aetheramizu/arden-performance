import Reveal from './Reveal';
import Section from './ui/Section';
import Container from './ui/Container';
import Eyebrow from './ui/Eyebrow';

export default function PerformanceCategories() {
  return (
    <Section theme="warmWhite" borderBottom>
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-baseline">
        {/* Left Column: Section Title */}
        <div className="lg:col-span-4">
          <Reveal delay={0} direction="up" distance={20}>
            <Eyebrow theme="light" className="mb-0">
              Performance Categories
            </Eyebrow>
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
      </Container>
    </Section>
  );
}
