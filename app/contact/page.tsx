import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Eyebrow from '@/components/ui/Eyebrow';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: "Direct Coordination — ARDEN Performance",
  description: "Connect with the ARDEN Performance Registrar, schedule a private clinical consultation, or sync physical passcode access credentials.",
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  const hubs = [
    {
      city: "NYC HUB",
      title: "Northeast Training Zone",
      phone: "+1 (555) 0192",
      email: "nyc@arden-performance.com",
      coords: "40.7128° N, 74.0060° W",
    },
    {
      city: "ZERMATT HUB",
      title: "Alpine Recovery Chambers",
      phone: "+41 (27) 966 8100",
      email: "zermatt@arden-performance.com",
      coords: "46.0207° N, 7.7491° E",
    },
    {
      city: "TOKYO HUB",
      title: "Asia-Pacific Gateway",
      phone: "+81 (3) 5555 0143",
      email: "tokyo@arden-performance.com",
      coords: "35.6762° N, 139.6503° E",
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
                Registrar Coordination
              </Eyebrow>
            </Reveal>
            <Reveal delay={120} direction="up" distance={24}>
              <Heading level={1}>
                Connect with the<br />
                Performance Registrar.
              </Heading>
            </Reveal>
            <Reveal delay={240} direction="up" distance={20}>
              <Text variant="body-lg" className="max-w-2xl">
                Schedule a clinical draw consultation, sync physical passcode access credentials, or resolve operations parameters directly with our registrar.
              </Text>
            </Reveal>
          </Container>
        </Section>

        {/* HUB COORDINATES */}
        <Section theme="warmWhite" borderTop borderBottom>
          <Container className="space-y-16">
            <div className="max-w-2xl">
              <Reveal delay={0} direction="up" distance={20}>
                <Eyebrow theme="light">
                  Coordinates
                </Eyebrow>
              </Reveal>
              <Reveal delay={120} direction="up" distance={24}>
                <Heading level={2} theme="light">
                  Physical Hub Locations
                </Heading>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {hubs.map((hub, index) => (
                <Reveal key={hub.city} delay={index * 150} direction="up" distance={30}>
                  <div className="space-y-4">
                    <span className="font-mono text-xs text-obsidian/30 block border-b border-obsidian/10 pb-2">
                      {hub.city} {"//"} {hub.coords}
                    </span>
                    <Heading level={3} theme="light">
                      {hub.title}
                    </Heading>
                    <div className="space-y-1 text-xs text-slateMuted font-light">
                      <p>Phone: {hub.phone}</p>
                      <p>Email: {hub.email}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>

        {/* CONTACT FORM SECTION */}
        <Section borderBottom>
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
                      REGISTRY SYSTEM.<br />
                      SECURED ROUTING.
                    </Heading>
                    <Text variant="body-sm" theme="dark" className="max-w-sm">
                      Our secure messaging gateway uses client coordinates to route clinical draws, media channels, and local physical keyless codes without delay.
                    </Text>
                  </div>
                </div>
              </Reveal>

              {/* Right Side: Form Console */}
              <Reveal className="lg:col-span-7" delay={200} direction="up" distance={30} duration={800}>
                <ContactForm />
              </Reveal>

            </div>
          </Container>
        </Section>

        {/* AVAILABILITY / GENERAL FOOTNOTE */}
        <Section theme="warmWhite" borderBottom>
          <Container className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <Reveal delay={0} direction="up" distance={20} className="space-y-4">
              <Eyebrow theme="light">
                Response Protocols
              </Eyebrow>
              <Heading level={3} theme="light" className="text-xl">
                Manual Registry Verification
              </Heading>
              <Text variant="body-sm" theme="light">
                Because we limit our practitioner cohorts, we audit every incoming registry coordinate manually. Standard response times are within 24 operational hours from transmission.
              </Text>
            </Reveal>

            <Reveal delay={150} direction="up" distance={20} className="space-y-4">
              <Eyebrow theme="light">
                Emergency Parameters
              </Eyebrow>
              <Heading level={3} theme="light" className="text-xl">
                Active Client Supervision
              </Heading>
              <Text variant="body-sm" theme="light">
                Active members can coordinate directly through the secure biological interface application or call their clinical draws coordinator via their direct passcode coordinates.
              </Text>
            </Reveal>
          </Container>
        </Section>

      </main>

      {/* Lookbook Footer */}
      <Footer />
    </div>
  );
}
