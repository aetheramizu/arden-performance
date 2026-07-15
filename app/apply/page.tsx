import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Eyebrow from '@/components/ui/Eyebrow';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import Card from '@/components/ui/Card';
import CoachingForm from '@/components/CoachingForm';

export const metadata: Metadata = {
  title: "Apply for Coaching — ARDEN Performance",
  description: "Secure clinical biological systems, sub-cellular diagnostic intakes, and physiological coaching tailored to elite practitioners.",
  alternates: {
    canonical: '/apply',
  },
};

export default function ApplyPage() {
  const expects = [
    {
      step: "01",
      title: "Diagnostic Intake",
      desc: "We ship a dynamic telemetry collection kit directly to your location, coupled with localized lab coordinates requests.",
    },
    {
      step: "02",
      title: "Biological Blueprint",
      desc: "Our clinical registrar maps glycemic stability, sleep architecture, and orthopedic thresholds into a unified index.",
    },
    {
      step: "03",
      title: "Coaching Calibration",
      desc: "Weekly 1-on-1 consultations with elite physiological clinicians dynamically adapt your program to real-world performance.",
    },
  ];

  const criteria = [
    {
      title: "Modern Professionals",
      desc: "Individuals managing demanding commercial routines, high-stress decision parameters, or complex operational schedules.",
    },
    {
      title: "Elite Performers",
      desc: "Athletes, pilots, and executives requiring precise metabolic control, cardiac output stability, and optimized focus structures.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-obsidian text-warmWhite overflow-x-hidden">
      {/* Tactile Paper Grain Overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Navigation Header */}
      <Header />

      {/* Main Content */}
      <main id="main-content" className="flex flex-col min-h-screen w-full">
        
        {/* HERO SECTION */}
        <Section className="relative min-h-[70vh] flex flex-col justify-center pt-32 pb-16 md:pt-40 md:pb-24">
          <Container className="space-y-6 max-w-4xl text-left my-auto">
            <Reveal delay={0} direction="up" distance={20}>
              <Eyebrow theme="dark">
                Membership Admission
              </Eyebrow>
            </Reveal>
            <Reveal delay={120} direction="up" distance={24}>
              <Heading level={1}>
                Apply for Private<br />
                Physiological Coaching.
              </Heading>
            </Reveal>
            <Reveal delay={240} direction="up" distance={20}>
              <Text variant="body-lg" className="max-w-2xl">
                Secure clinical-grade diagnostics, metabolic continuous tracking, and direct supervision from elite performance clinicians. Applications are reviewed within 24 operational hours.
              </Text>
            </Reveal>
          </Container>
        </Section>

        {/* WHAT TO EXPECT */}
        <Section theme="warmWhite" borderTop borderBottom>
          <Container className="space-y-16">
            <div className="max-w-2xl">
              <Reveal delay={0} direction="up" distance={20}>
                <Eyebrow theme="light">
                  Process
                </Eyebrow>
              </Reveal>
              <Reveal delay={120} direction="up" distance={24}>
                <Heading level={2} theme="light">
                  The Onboarding Path
                </Heading>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {expects.map((item, index) => (
                <Reveal key={item.step} delay={index * 150} direction="up" distance={30}>
                  <div className="space-y-4">
                    <span className="font-mono text-xs text-obsidian/30 block border-b border-obsidian/10 pb-2">
                      {item.step} {"// STAGE"}
                    </span>
                    <Heading level={3} theme="light">
                      {item.title}
                    </Heading>
                    <Text variant="body-sm" theme="light">
                      {item.desc}
                    </Text>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>

        {/* WHO THIS IS FOR */}
        <Section borderBottom>
          <Container className="space-y-16">
            <div className="max-w-2xl">
              <Reveal delay={0} direction="up" distance={20}>
                <Eyebrow theme="dark">
                  Target Profiles
                </Eyebrow>
              </Reveal>
              <Reveal delay={120} direction="up" distance={24}>
                <Heading level={2}>
                  Engineered for the Elite
                </Heading>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {criteria.map((item, index) => (
                <Reveal key={item.title} delay={index * 150} direction="up" distance={30}>
                  <Card theme="glass" className="p-8 space-y-4">
                    <Heading level={3}>
                      {item.title}
                    </Heading>
                    <Text variant="body-sm" theme="dark">
                      {item.desc}
                    </Text>
                  </Card>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>

        {/* APPLICATION FORM & SIDE CONSOLE */}
        <Section theme="warmWhite" borderBottom>
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              
              {/* Left Side: Frame Banner */}
              <Reveal className="lg:col-span-5 relative group" delay={0} direction="up" distance={40} duration={900}>
                <div className="relative aspect-[16/10] lg:aspect-[4/5] bg-zinc-900 overflow-hidden shadow-2xl">
                  <img
                    src="/images/intake-consult.jpg"
                    alt="Curated wellness clinic interior for direct physiological consultation"
                    width={800}
                    height={1000}
                    className="object-cover w-full h-full scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out brightness-[0.45] contrast-[1.05]"
                    loading="lazy"
                  />
                  {/* Dark text-overlay card */}
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent p-6 sm:p-10 flex flex-col justify-end space-y-4">
                    <Heading level={3} className="text-3xl md:text-4xl font-normal leading-tight">
                      ONE ON ONE.<br />
                      NO COMPROMISE.
                    </Heading>
                    <Text variant="body-sm" theme="dark" className="max-w-sm">
                      Our practitioners limit client cohorts to ensure ultimate responsive feedback and clinical precision.
                    </Text>
                  </div>
                </div>
              </Reveal>

              {/* Right Side: Multi-step Form Component */}
              <Reveal className="lg:col-span-7" delay={200} direction="up" distance={30} duration={800}>
                <CoachingForm />
              </Reveal>

            </div>
          </Container>
        </Section>

      </main>

      {/* Lookbook Footer */}
      <Footer />
    </div>
  );
}
