import Link from 'next/link';
import Reveal from './Reveal';

export default function Footer() {
  return (
    <footer className="py-24 bg-obsidian text-warmWhite border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        
        <Reveal delay={0} direction="up" distance={20} duration={800}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-start">
          
            {/* Branding coordinates */}
            <div className="space-y-4">
              <span className="font-serif text-2xl uppercase tracking-wider text-warmWhite">
                ARDEN
              </span>
              <p className="text-[10px] text-mutedGray font-mono tracking-wider">
                EST. 2026 // BIOMETRIC SYSTEMS
                <br />
                ZERMATT // TOKYO // NYC
              </p>
            </div>

            {/* Links 1 */}
            <div className="space-y-3">
              <h5 className="text-[10px] font-mono tracking-widest uppercase text-white font-bold">
                Programs
              </h5>
              <ul className="space-y-1 text-xs text-mutedGray font-light">
                <li>
                  <Link href="#exclusives" className="hover:text-white transition-colors duration-200">
                    Precision Ride
                  </Link>
                </li>
                <li>
                  <Link href="#exclusives" className="hover:text-white transition-colors duration-200">
                    Signature Sessions
                  </Link>
                </li>
                <li>
                  <Link href="#system" className="hover:text-white transition-colors duration-200">
                    Diagnostics
                  </Link>
                </li>
              </ul>
            </div>

            {/* Links 2 */}
            <div className="space-y-3">
              <h5 className="text-[10px] font-mono tracking-widest uppercase text-white font-bold">
                Retreats
              </h5>
              <ul className="space-y-1 text-xs text-mutedGray font-light">
                <li>
                  <Link href="#retreats" className="hover:text-white transition-colors duration-200">
                    Alpine Lodge
                  </Link>
                </li>
                <li>
                  <Link href="#retreats" className="hover:text-white transition-colors duration-200">
                    Thermal Zones
                  </Link>
                </li>
                <li>
                  <Link href="#retreats" className="hover:text-white transition-colors duration-200">
                    Decompression
                  </Link>
                </li>
              </ul>
            </div>

            {/* Intake coords */}
            <div className="space-y-3">
              <h5 className="text-[10px] font-mono tracking-widest uppercase text-white font-bold">
                Application
              </h5>
              <ul className="space-y-1 text-xs text-mutedGray font-light">
                <li>
                  <Link href="#apply" className="hover:text-white transition-colors duration-200">
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

      </div>
    </footer>
  );
}
