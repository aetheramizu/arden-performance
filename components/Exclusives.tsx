import Reveal from './Reveal';
import Section from './ui/Section';
import Container from './ui/Container';
import Eyebrow from './ui/Eyebrow';
import Heading from './ui/Heading';
import Card from './ui/Card';
import Text from './ui/Text';
import Button from './ui/Button';

export default function Exclusives() {
  return (
    <Section id="exclusives" borderBottom>
      <Container>
        {/* Section Header */}
        <div className="mb-20">
          <Reveal delay={0} direction="up" distance={20}>
            <Eyebrow theme="dark">
              Unmatched Offerings
            </Eyebrow>
          </Reveal>
          <Reveal delay={120} direction="up" distance={24}>
            <Heading level={2}>
              New ARDEN Exclusives
            </Heading>
          </Reveal>
        </div>

        {/* Staggered Overlapping Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Composite Image and Floating Card */}
          <Reveal className="lg:col-span-7 relative" delay={0} direction="up" distance={40} duration={900}>
            {/* Base Image Wrapper */}
            <div className="aspect-[16/10] bg-zinc-900 overflow-hidden relative shadow-2xl z-0">
              <img
                src="/images/exclusives-ride.jpg"
                alt="Precision cardiovascular cycling session in a high-end architectural space"
                width={800}
                height={500}
                className="object-cover w-full h-full scale-100 hover:scale-[1.03] transition-transform duration-1000 ease-out brightness-90"
                loading="lazy"
              />
            </div>

            {/* Floating Luxury Info Card */}
            <Card
              theme="white"
              className="mt-6 lg:mt-0 lg:absolute lg:-bottom-12 lg:-right-6 p-8 md:p-12 max-w-md shadow-2xl z-10 space-y-4"
            >
              <Eyebrow theme="light" className="mb-0 text-[10px]">
                Exclusive Launch
              </Eyebrow>
              <Heading level={3} className="text-xl md:text-2xl font-light">
                PRECISION RIDE™
              </Heading>
              <Text variant="body-sm" theme="light">
                A performance-driven cardiovascular assessment model that utilizes localized biometric
                telemetry to optimize oxygen ceiling limits and personal metabolic thresholds.
              </Text>
              <div className="pt-2">
                <Button
                  variant="underline"
                  theme="light"
                  href="#apply"
                >
                  Request Access &rarr;
                </Button>
              </div>
            </Card>
          </Reveal>

          {/* Right Column: Portrait Card and Text Block */}
          <div className="lg:col-span-5 space-y-6 md:space-y-8 lg:pl-12">
            {/* Portrait Image Wrapper */}
            <Reveal delay={200} direction="up" distance={40} duration={900}>
              <div className="aspect-[4/5] bg-zinc-900 overflow-hidden relative shadow-xl">
                <img
                  src="/images/exclusives-sessions.jpg"
                  alt="Precision physical alignment and core skeletal training"
                  width={600}
                  height={750}
                  className="object-cover w-full h-full scale-100 hover:scale-[1.03] transition-transform duration-1000 ease-out brightness-95"
                  loading="lazy"
                />
              </div>
            </Reveal>

            {/* Content Details */}
            <Reveal delay={350} direction="up" distance={24}>
              <div className="space-y-4">
                <Eyebrow theme="dark" className="text-[10px]">
                  Private Calibration
                </Eyebrow>
                <Heading level={3} className="text-xl md:text-2xl font-light">
                  Unlimited Signature Sessions
                </Heading>
                <Text variant="body-sm" theme="dark">
                  Every program is calibrated dynamically. Enjoy private studio environments engineered for
                  uninterrupted, clinical-grade neurological and physical testing.
                </Text>
              </div>
            </Reveal>
          </div>

        </div>
      </Container>
    </Section>
  );
}
