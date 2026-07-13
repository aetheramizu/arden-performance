import Reveal from './Reveal';
import Section from './ui/Section';
import Container from './ui/Container';
import Eyebrow from './ui/Eyebrow';
import Heading from './ui/Heading';
import Text from './ui/Text';
import Card from './ui/Card';

export default function Retreats() {
  return (
    <Section id="retreats" theme="warmWhite" borderBottom>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Image with Overlapping Location Badge */}
          <Reveal className="lg:col-span-7 relative" delay={0} direction="up" distance={40} duration={900}>
            <div className="absolute -inset-4 border border-obsidian/[0.03] pointer-events-none" aria-hidden="true" />
            
            {/* Image Wrapper */}
            <div className="aspect-[16/10] bg-[#E5E5E3] overflow-hidden relative shadow-2xl">
              <img
                src="/images/retreat-lodge.jpg"
                alt="The minimalist architectural mountain lodge design of ARDEN Retreat Chambers"
                width={800}
                height={500}
                className="object-cover w-full h-full scale-100 hover:scale-[1.03] transition-transform duration-1000 ease-out brightness-95"
                loading="lazy"
              />
            </div>
            
            {/* Overlapping Coordinates Block (hidden on mobile, visible on md+) */}
            <Card theme="white" className="absolute -bottom-8 -right-8 w-64 p-6 hidden md:block shadow-lg z-10">
              <span className="text-[9px] font-mono text-black uppercase tracking-widest block mb-2 font-bold">
                Location 03
              </span>
              <Heading level={3} theme="light" className="text-lg">
                The High Alpine Lodge
              </Heading>
              <Text variant="body-sm" theme="light" className="mt-1">
                An oxygen-regulated training and thermal retreat chamber nestled in Zermatt high altitudes.
              </Text>
            </Card>

            {/* Mobile-only Coordinates Block */}
            <Card theme="white" className="mt-6 p-6 block md:hidden shadow-md">
              <span className="text-[9px] font-mono text-black uppercase tracking-widest block mb-2 font-bold">
                Location 03
              </span>
              <Heading level={3} theme="light" className="text-lg">
                The High Alpine Lodge
              </Heading>
              <Text variant="body-sm" theme="light" className="mt-1">
                An oxygen-regulated training and thermal retreat chamber nestled in Zermatt high altitudes.
              </Text>
            </Card>
          </Reveal>

          {/* Right Column: Editorial Text Content & Key Features */}
          <div className="lg:col-span-5 space-y-6 lg:pl-12">
            <Reveal delay={100} direction="up" distance={20}>
              <Eyebrow theme="light">
                Physical Architecture
              </Eyebrow>
            </Reveal>
            <Reveal delay={200} direction="up" distance={24}>
              <Heading level={2} theme="light">
                ARDEN House: <br />
                Your sensory <br />
                <span className="italic font-light">decompression zone.</span>
              </Heading>
            </Reveal>
            <Reveal delay={300} direction="up" distance={20}>
              <Text variant="body" theme="light">
                Exclusivity isn&apos;t just digital. Membership provides secure, keyless passcodes to ARDEN
                House—minimalist physical spaces built to allow modern professionals to train, test biomarkers,
                reset cortisol, and recover in ultimate privacy.
              </Text>
            </Reveal>
            
            <Reveal delay={400} direction="up" distance={16}>
              <ul className="space-y-3 text-xs text-slateDark font-light">
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 rounded-none bg-black flex-shrink-0 mt-1.5" aria-hidden="true" />
                  <span>Full-spectrum hyperbaric oxygen therapy chambers.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 rounded-none bg-black flex-shrink-0 mt-1.5" aria-hidden="true" />
                  <span>Thermal high-contrast zones designed by recovery architects.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 rounded-none bg-black flex-shrink-0 mt-1.5" aria-hidden="true" />
                  <span>Acoustically engineered quiet focus work pods.</span>
                </li>
              </ul>
            </Reveal>
          </div>

        </div>
      </Container>
    </Section>
  );
}
