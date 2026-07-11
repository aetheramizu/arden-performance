export default function Retreats() {
  return (
    <section
      id="retreats"
      className="py-20 md:py-32 bg-warmWhite text-obsidian border-b border-obsidian/[0.06] transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Image with Overlapping Location Badge */}
          <div className="lg:col-span-7 relative">
            <div className="absolute -inset-4 border border-obsidian/[0.03] pointer-events-none" aria-hidden="true" />
            
            {/* Image Wrapper */}
            <div className="aspect-[16/10] bg-[#E5E5E3] overflow-hidden relative shadow-2xl">
              <img
                src="/images/retreat-lodge.jpg"
                alt="The minimalist architectural mountain lodge design of ARDEN Retreat Chambers"
                className="object-cover w-full h-full scale-100 hover:scale-105 transition-transform duration-1000 ease-out brightness-95"
                loading="lazy"
              />
            </div>
            
            {/* Overlapping Coordinates Block (hidden on mobile, visible on md+) */}
            <div className="absolute -bottom-8 -right-8 w-64 bg-white p-6 border border-obsidian/[0.06] hidden md:block shadow-lg z-10">
              <span className="text-[9px] font-mono text-black uppercase tracking-widest block mb-2 font-bold">
                Location 03
              </span>
              <h4 className="font-serif text-lg text-obsidian font-bold">The High Alpine Lodge</h4>
              <p className="text-[11px] text-slateMuted font-light mt-1">
                An oxygen-regulated training and thermal retreat chamber nestled in Zermatt high altitudes.
              </p>
            </div>

            {/* Mobile-only Coordinates Block */}
            <div className="mt-6 bg-white p-6 border border-obsidian/[0.06] block md:hidden shadow-md">
              <span className="text-[9px] font-mono text-black uppercase tracking-widest block mb-2 font-bold">
                Location 03
              </span>
              <h4 className="font-serif text-lg text-obsidian font-bold">The High Alpine Lodge</h4>
              <p className="text-[11px] text-slateMuted font-light mt-1">
                An oxygen-regulated training and thermal retreat chamber nestled in Zermatt high altitudes.
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Text Content & Key Features */}
          <div className="lg:col-span-5 space-y-6 lg:pl-12">
            <span className="text-[11px] uppercase tracking-[0.3em] text-obsidian/50 font-bold">
              Physical Architecture
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-obsidian leading-[1.1]">
              ARDEN House: <br />
              Your sensory <br />
              <span className="italic font-light">decompression zone.</span>
            </h2>
            <p className="text-slateMuted font-light text-xs md:text-sm leading-relaxed">
              Exclusivity isn&apos;t just digital. Membership provides secure, keyless passcodes to ARDEN
              House—minimalist physical spaces built to allow modern professionals to train, test biomarkers,
              reset cortisol, and recover in ultimate privacy.
            </p>
            
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
          </div>

        </div>
      </div>
    </section>
  );
}
