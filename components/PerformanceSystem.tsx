import Reveal from './Reveal';
import Section from './ui/Section';
import Container from './ui/Container';
import Eyebrow from './ui/Eyebrow';
import Heading from './ui/Heading';
import Card from './ui/Card';
import Text from './ui/Text';

interface SystemCardProps {
  num: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  index: number;
}

function SystemCard({ num, title, description, imageSrc, imageAlt, index }: SystemCardProps) {
  return (
    <Reveal delay={index * 150} direction="up" distance={30} duration={700}>
      <Card theme="white" hoverLift className="group">
        {/* Card Image Aspect Wrapper */}
        <div className="aspect-[16/10] overflow-hidden bg-zinc-100">
          <img
            src={imageSrc}
            alt={imageAlt}
            width={600}
            height={375}
            className="object-cover w-full h-full brightness-95 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
            loading="lazy"
          />
        </div>

        {/* Card Text Content */}
        <div className="p-8 space-y-4">
          <Heading level={3} theme="light">
            {num} / {title}
          </Heading>
          <Text variant="body-sm" theme="light">
            {description}
          </Text>
        </div>
      </Card>
    </Reveal>
  );
}

export default function PerformanceSystem() {
  const cards = [
    {
      num: "01",
      title: "DIAGNOSTICS",
      imageSrc: "/images/system-diagnostics.jpg",
      imageAlt: "High-touch biometric and glycemic laboratory diagnostics",
      description: "Continuous biometric logging of heart rate variability, glucose stability waves, and restorative sleep architecture mapped by clinical professionals."
    },
    {
      num: "02",
      title: "ENDURANCE",
      imageSrc: "/images/system-endurance.jpg",
      imageAlt: "Athlete conditioning in alpine environments under warm sunrise light",
      description: "Oxygen consumption profiling, structured cardiovascular exposure, and nervous system resilience tracking built for sustained focus."
    },
    {
      num: "03",
      title: "RECOVERY",
      imageSrc: "/images/system-recovery.jpg",
      imageAlt: "High-end thermodynamic cold-contrast mountain recovery chamber",
      description: "Deep thermodynamic routines, contrast water submersions, hyperbaric oxygen chambers, and neural down-regulation sessions."
    }
  ];

  return (
    <Section id="system" theme="warmWhite" borderBottom>
      <Container>
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24">
          <div className="lg:col-span-5">
            <Reveal delay={0} direction="up" distance={20}>
              <Eyebrow theme="light">
                Precision Analytics
              </Eyebrow>
            </Reveal>
            <Reveal delay={120} direction="up" distance={24}>
              <Heading level={2} theme="light">
                The ARDEN <br />Performance Ecosystem
              </Heading>
            </Reveal>
          </div>
          <Reveal className="lg:col-span-7" delay={200} direction="up" distance={20}>
            <Text variant="body" theme="light" className="max-w-xl">
              By integrating dynamic physiological trackers with clinical biomarkers and bespoke nutrition
              schedules, ARDEN constructs an optimized, continuous feedback loop for your daily routine.
            </Text>
          </Reveal>
        </div>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <SystemCard key={card.num} {...card} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
