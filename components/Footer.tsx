import Link from 'next/link';
import Reveal from './Reveal';
import Container from './ui/Container';
import Heading from './ui/Heading';
import Text from './ui/Text';

export default function Footer() {
  return (
    <footer className="py-24 bg-obsidian text-warmWhite border-t border-white/[0.05]">
      <Container className="space-y-16">
        
        <Reveal delay={0} direction="up" distance={20} duration={800}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-start">
          
            {/* Branding coordinates */}
            <div className="space-y-4">
              <Heading level={2} className="text-2xl tracking-wider">
                ARDEN
              </Heading>
              <Text variant="mono-xs">
                EST. 2026 // BIOMETRIC SYSTEMS
                <br />
                ZERMATT // TOKYO // NYC
              </Text>
            </div>

            {/* Links 1 */}
            <div className="space-y-3">
              <Heading level={3} className="text-[10px] font-mono tracking-widest">
                Programs
              </Heading>
              <ul className="space-y-1 text-xs text-mutedGray font-light">
                <li>
                  <Link href="/#exclusives" className="hover:text-white transition-colors duration-200">
                    Precision Ride
                  </Link>
                </li>
                <li>
                  <Link href="/#exclusives" className="hover:text-white transition-colors duration-200">
                    Signature Sessions
                  </Link>
                </li>
                <li>
                  <Link href="/#system" className="hover:text-white transition-colors duration-200">
                    Diagnostics
                  </Link>
                </li>
              </ul>
            </div>

            {/* Links 2 */}
            <div className="space-y-3">
              <Heading level={3} className="text-[10px] font-mono tracking-widest">
                Retreats
              </Heading>
              <ul className="space-y-1 text-xs text-mutedGray font-light">
                <li>
                  <Link href="/#retreats" className="hover:text-white transition-colors duration-200">
                    Alpine Lodge
                  </Link>
                </li>
                <li>
                  <Link href="/#retreats" className="hover:text-white transition-colors duration-200">
                    Thermal Zones
                  </Link>
                </li>
                <li>
                  <Link href="/#retreats" className="hover:text-white transition-colors duration-200">
                    Decompression
                  </Link>
                </li>
              </ul>
            </div>

            {/* Intake coords */}
            <div className="space-y-3">
              <Heading level={3} className="text-[10px] font-mono tracking-widest">
                Application
              </Heading>
              <ul className="space-y-1 text-xs text-mutedGray font-light">
                <li>
                  <Link href="/apply" className="hover:text-white transition-colors duration-200">
                    Apply Online
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="hover:text-white transition-colors duration-200">
                    Support Console
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </Reveal>

        {/* Bottom legal coordinate bar */}
        <Reveal delay={200} direction="up" distance={12} duration={700}>
          <div className="pt-8 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-mutedGray font-mono">
            <span>&copy; {new Date().getFullYear()} ARDEN SYSTEMS INC. ALL CLINICAL RIGHTS CALIBRATED.</span>
            <div className="flex space-x-6">
              <Link href="#" className="hover:text-white transition-colors duration-200">
                PRIVACY
              </Link>
              <Link href="#" className="hover:text-white transition-colors duration-200">
                TERMS
              </Link>
              <Link href="#" className="hover:text-white transition-colors duration-200">
                COACHING INTEGRITY
              </Link>
            </div>
          </div>
        </Reveal>

      </Container>
    </footer>
  );
}
