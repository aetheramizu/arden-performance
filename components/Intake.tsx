'use client';

import { useState } from 'react';
import Reveal from './Reveal';

export default function Intake() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [focusTarget, setFocusTarget] = useState('metabolic');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setFocusTarget('metabolic');
    setIsSubmitted(false);
  };

  return (
    <section id="apply" className="py-20 md:py-32 bg-obsidian">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Editorial Banner Frame */}
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
              {/* Dark text-overlay card matching reference theme */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent p-6 sm:p-10 flex flex-col justify-end space-y-4">
                <h3 className="font-serif text-3xl md:text-4xl font-normal uppercase tracking-tight text-warmWhite leading-tight">
                  ONE MEMBERSHIP.<br />
                  LIMITLESS POTENTIAL.
                </h3>
                <p className="text-xs text-mutedGray font-light max-w-sm">
                  Elevate every biological vector. Secure customized support spanning diagnostics,
                  continuous coaching, and retreat entry.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right Side: Clean White Interactive Form Console */}
          <Reveal className="lg:col-span-7" delay={200} direction="up" distance={30} duration={800}>
            <div 
              role="status" 
              aria-live="polite" 
              className="bg-warmWhite text-obsidian p-8 sm:p-12 shadow-2xl border border-obsidian/[0.06] space-y-10"
            >
            
            <div className="space-y-4">
              <span className="text-[11px] uppercase tracking-[0.3em] text-obsidian/50 font-bold">
                Intake Console
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-normal text-obsidian">
                Apply For Private Assessment
              </h2>
              <p className="text-xs text-slateMuted font-light max-w-xl">
                All applications are manually audited for clinical availability. Please state your baseline
                coordinates below to schedule an onboarding consultation.
              </p>
            </div>

            {!isSubmitted ? (
              /* Multi-field Intake Form */
              <form onSubmit={handleSubmit} className="space-y-8 animate-fadeIn">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label htmlFor="form-name" className="block text-[10px] uppercase tracking-[0.2em] text-obsidian font-bold">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="form-name"
                      placeholder="e.g. Katherine"
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full bg-white border-b border-obsidian/20 hover:border-obsidian/40 focus:border-obsidian px-3 py-3 text-xs text-obsidian placeholder-mutedGray/50 focus:outline-none transition-colors duration-200"
                    />
                  </div>
                  {/* Last Name Input */}
                  <div className="space-y-2">
                    <label htmlFor="form-lastname" className="block text-[10px] uppercase tracking-[0.2em] text-obsidian font-bold">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="form-lastname"
                      placeholder="e.g. Sterling"
                      required
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full bg-white border-b border-obsidian/20 hover:border-obsidian/40 focus:border-obsidian px-3 py-3 text-xs text-obsidian placeholder-mutedGray/50 focus:outline-none transition-colors duration-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Email Input */}
                  <div className="space-y-2">
                    <label htmlFor="form-email" className="block text-[10px] uppercase tracking-[0.2em] text-obsidian font-bold">
                      Direct Email Coordinate
                    </label>
                    <input
                      type="email"
                      id="form-email"
                      placeholder="e.g. katherine@sterling.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white border-b border-obsidian/20 hover:border-obsidian/40 focus:border-obsidian px-3 py-3 text-xs text-obsidian placeholder-mutedGray/50 focus:outline-none transition-colors duration-200"
                    />
                  </div>
                  {/* Phone Input */}
                  <div className="space-y-2">
                    <label htmlFor="form-phone" className="block text-[10px] uppercase tracking-[0.2em] text-obsidian font-bold">
                      Mobile Coordinate
                    </label>
                    <input
                      type="tel"
                      id="form-phone"
                      placeholder="+1 (555) 0192"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-white border-b border-obsidian/20 hover:border-obsidian/40 focus:border-obsidian px-3 py-3 text-xs text-obsidian placeholder-mutedGray/50 focus:outline-none transition-colors duration-200"
                    />
                  </div>
                </div>

                {/* Focus Selector */}
                <div className="space-y-2">
                  <label htmlFor="form-focus" className="block text-[10px] uppercase tracking-[0.2em] text-obsidian font-bold">
                    Primary Performance Target
                  </label>
                  <select
                    id="form-focus"
                    value={focusTarget}
                    onChange={(e) => setFocusTarget(e.target.value)}
                    className="w-full bg-white border-b border-obsidian/20 hover:border-obsidian/40 focus:border-obsidian px-3 py-3 text-xs text-obsidian focus:outline-none transition-colors duration-200 cursor-pointer"
                  >
                    <option value="metabolic">Metabolic Efficiency & Longevity Science</option>
                    <option value="circadian">Circadian Stabilization & Sleep Architecture</option>
                    <option value="skeletal">Skeletal Strength & Muscle Architecture</option>
                    <option value="all">Full System Governance (Combined System)</option>
                  </select>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full bg-obsidian text-warmWhite text-xs uppercase tracking-[0.25em] font-bold py-4 px-10 hover:bg-black hover:text-white transition-colors duration-300 block text-center cursor-pointer"
                  >
                    Submit Private Application
                  </button>
                </div>
              </form>
            ) : (
              /* Elegant Success Indicator */
              <div id="modal-success" className="p-8 border border-obsidian/30 bg-white text-left space-y-4 animate-fadeIn">
                <div className="flex items-center space-x-3 text-obsidian">
                  <svg className="w-4 h-4 text-obsidian" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-xs uppercase tracking-[0.25em] font-bold">
                    Application Transmitted Safely
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-obsidian font-normal">
                  Your assessment protocol is active.
                </h3>
                <p className="text-xs text-slateMuted font-light leading-relaxed">
                  Our Performance Registrar will coordinate a secure digital intake request via your direct
                  parameters within 24 operational hours.
                </p>
                <button
                  onClick={handleReset}
                  className="text-xs uppercase tracking-[0.2em] font-semibold text-obsidian border-b border-obsidian pb-1 hover:text-slateMuted hover:border-slateMuted transition-colors duration-200 mt-2 cursor-pointer"
                >
                  Submit Another Request
                </button>
              </div>
            )}

            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
