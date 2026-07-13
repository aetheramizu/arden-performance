import VideoBackground from './VideoBackground';
import Container from './ui/Container';
import Eyebrow from './ui/Eyebrow';
import Heading from './ui/Heading';
import Text from './ui/Text';
import Button from './ui/Button';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden">
      {/* Immersive Background Video and Poster Image */}
      <VideoBackground
        videoSrc="/videos/hero-bg.mp4"
        posterSrc="/images/hero-poster.jpg"
      />

      {/* Hero Content */}
      <Container className="relative z-10 my-auto pt-32 pb-8 md:pt-44 md:pb-12 flex flex-col items-start space-y-12">
        <div className="space-y-4 max-w-5xl">
          {/* Tiny Brand Tagline */}
          <div className="flex items-center space-x-3 text-white hero-animate-tagline">
            <span className="w-1.5 h-1.5 bg-white block rounded-none" aria-hidden="true" />
            <Eyebrow theme="dark" className="mb-0">
              Human Architecture for Professionals
            </Eyebrow>
          </div>

          {/* Huge Immersive Headline */}
          <Heading level={1} className="hero-animate-headline">
            Designed for the individual.<br />
            <span className="italic font-light lowercase tracking-normal">powered by</span> the collective.
          </Heading>
        </div>

        {/* Description & Call to Action */}
        <div className="space-y-8 max-w-xl">
          <Text variant="body-lg" className="hero-animate-body">
            Signature health programs, clinical diagnostics, and high-touch physiological coaching engineered to
            drive results. Reserved exclusively for elite performance.
          </Text>

          <div className="hero-animate-cta">
            <Button
              variant="filled"
              theme="dark"
              href="#apply"
              className="hover:shadow-lg hover:-translate-y-0.5"
            >
              Learn More
            </Button>
          </div>
        </div>
      </Container>

      {/* Sticky Coordinate Stats (Hero Footer) */}
      <div className="relative z-10 w-full border-t border-white/[0.05] bg-obsidian/90 backdrop-blur-sm hero-animate-stats">
        <Container className="py-8 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-xs text-mutedGray">
          <div className="space-y-1">
            <Heading level={3} className="text-[10px] font-mono tracking-widest text-warmWhite">
              01 / STRENGTH PROTOCOLS
            </Heading>
            <Text variant="body-sm">Skeletal integrity & dense resistance.</Text>
          </div>
          <div className="space-y-1">
            <Heading level={3} className="text-[10px] font-mono tracking-widest text-warmWhite">
              02 / METABOLIC SYSTEMS
            </Heading>
            <Text variant="body-sm">Sub-cellular glycemic tracking.</Text>
          </div>
          <div className="space-y-1">
            <Heading level={3} className="text-[10px] font-mono tracking-widest text-warmWhite">
              03 / CIRCADIAN BLUEPRINTS
            </Heading>
            <Text variant="body-sm">Optimized deep autonomic sleep.</Text>
          </div>
          <div className="space-y-1">
            <Heading level={3} className="text-[10px] font-mono tracking-widest text-warmWhite">
              04 / THE PHYSICAL CHAMBERS
            </Heading>
            <Text variant="body-sm">Sensory decompression retreats.</Text>
          </div>
        </Container>
      </div>
    </section>
  );
}
