import Link from 'next/link';

export default function Header() {
  return (
    <header
      className="fixed top-0 left-0 w-full z-50 bg-obsidian/90 backdrop-blur-md border-b border-white/[0.05] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Brand Mark */}
        <Link
          href="#"
          className="font-serif text-2xl tracking-[0.25em] uppercase font-light text-warmWhite hover:text-white transition-colors duration-300"
          aria-label="ARDEN Homepage"
        >
          ARDEN
        </Link>

        {/* Editorial Nav Links */}
        <nav className="hidden md:flex items-center space-x-12" aria-label="Main Navigation">
          <Link
            href="#exclusives"
            className="text-[10px] uppercase tracking-[0.2em] text-mutedGray hover:text-warmWhite transition-colors duration-200"
          >
            The Exclusives
          </Link>
          <Link
            href="#system"
            className="text-[10px] uppercase tracking-[0.2em] text-mutedGray hover:text-warmWhite transition-colors duration-200"
          >
            The System
          </Link>
          <Link
            href="#diagnostic"
            className="text-[10px] uppercase tracking-[0.2em] text-mutedGray hover:text-warmWhite transition-colors duration-200"
          >
            Diagnostics
          </Link>
          <Link
            href="#retreats"
            className="text-[10px] uppercase tracking-[0.2em] text-mutedGray hover:text-warmWhite transition-colors duration-200"
          >
            Retreat Chambers
          </Link>
        </nav>

        {/* Premium CTA Button */}
        <div className="flex items-center space-x-6">
          <Link
            href="#apply"
            className="relative group overflow-hidden px-5 py-2.5 border border-white/25 text-[10px] uppercase tracking-[0.2em] text-warmWhite rounded-none transition-colors duration-300 hover:border-warmWhite hover:bg-white/[0.05]"
          >
            <span className="relative z-10">Request Membership</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
