import Reveal from './Reveal';

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
      <div className="bg-white border border-obsidian/[0.06] hover:border-obsidian/20 hover:-translate-y-1 hover:shadow-xl transition-all duration-500 ease-out overflow-hidden group">
        {/* Card Image Aspect Wrapper */}
        <div className="aspect-[16/10] overflow-hidden bg-zinc-100">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="object-cover w-full h-full brightness-95 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
            loading="lazy"
          />
        </div>

        {/* Card Text Content */}
        <div className="p-8 space-y-4">
          <h3 className="font-sans text-lg font-bold uppercase tracking-wider text-obsidian">
            {num} / {title}
          </h3>
          <p className="text-xs text-slateMuted font-light leading-relaxed">
            {description}
          </p>
        </div>
      </div>
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
    <section
      id="system"
      className="py-20 md:py-32 bg-warmWhite text-obsidian border-b border-obsidian/[0.06] transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24">
          <div className="lg:col-span-5">
            <Reveal delay={0} direction="up" distance={20}>
              <span className="text-[11px] uppercase tracking-[0.3em] text-obsidian/50 block mb-4 font-bold">
                Precision Analytics
              </span>
            </Reveal>
            <Reveal delay={120} direction="up" distance={24}>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-obsidian leading-[1.1]">
                The ARDEN <br />Performance Ecosystem
              </h2>
            </Reveal>
          </div>
          <Reveal className="lg:col-span-7" delay={200} direction="up" distance={20}>
            <p className="text-slateDark font-light text-sm md:text-base leading-relaxed max-w-xl">
              By integrating dynamic physiological trackers with clinical biomarkers and bespoke nutrition
              schedules, ARDEN constructs an optimized, continuous feedback loop for your daily routine.
            </p>
          </Reveal>
        </div>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <SystemCard key={card.num} {...card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
