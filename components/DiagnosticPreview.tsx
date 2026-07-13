'use client';

import { useState } from 'react';
import Link from 'next/link';
import Reveal from './Reveal';

type TabId = 'metabolic' | 'circadian' | 'neurological' | 'musculoskeletal';

export default function DiagnosticPreview() {
  const [activeTab, setActiveTab] = useState<TabId>('metabolic');

  const tabs = [
    { id: 'metabolic' as TabId, label: 'Metabolic' },
    { id: 'circadian' as TabId, label: 'Circadian' },
    { id: 'neurological' as TabId, label: 'Neurological' },
    { id: 'musculoskeletal' as TabId, label: 'Biomechanical' },
  ];

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
    let newIndex = currentIndex;

    if (e.key === 'ArrowRight') {
      newIndex = (currentIndex + 1) % tabs.length;
    } else if (e.key === 'ArrowLeft') {
      newIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    } else {
      return;
    }

    e.preventDefault();
    const nextTabId = tabs[newIndex].id;
    setActiveTab(nextTabId);

    // Shift keyboard focus programmatically
    const container = e.currentTarget;
    const buttons = container.querySelectorAll('button[role="tab"]');
    if (buttons[newIndex]) {
      (buttons[newIndex] as HTMLButtonElement).focus();
    }
  };

  return (
    <section id="diagnostic" className="py-20 md:py-32 bg-obsidian border-b border-white/[0.05] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Narrative Space */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal delay={0} direction="up" distance={20}>
              <span className="text-[11px] uppercase tracking-[0.3em] text-white/50 block font-bold mb-4">
                Biological Interface
              </span>
            </Reveal>
            <Reveal delay={120} direction="up" distance={24}>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-warmWhite leading-[1.1]">
                Visualize your <br />biological index.
              </h2>
            </Reveal>
            <Reveal delay={240} direction="up" distance={20}>
              <p className="text-mutedGray font-light text-xs md:text-sm leading-relaxed">
                Below is a simulated window into the ARDEN digital gateway. Choose a core focus parameter to
                preview the bespoke lifestyle architecture we design to regulate your biology.
              </p>
            </Reveal>

            {/* Coaching Integrity Notice Box */}
            <Reveal delay={360} direction="up" distance={16} className="pt-6 hidden lg:block">
              <div className="p-6 border border-white/[0.04] bg-[#141416]/40 space-y-2">
                <span className="text-[10px] font-mono tracking-widest uppercase text-white">
                  Coaching Integrity Notice
                </span>
                <p className="text-[11px] text-mutedGray font-light leading-relaxed">
                  No software can replace human insight. All interactive protocols showcased here are
                  integrated with 1-on-1 supervision from elite physiological clinicians.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right Interactive Portal Component */}
          <Reveal className="lg:col-span-7" delay={200} direction="up" distance={30} duration={800}>
            <div className="bg-[#141416] border border-white/[0.05] p-6 sm:p-12 shadow-2xl relative overflow-hidden">
            
            {/* App Interface Top Window Decor */}
            <div className="flex items-center justify-between border-b border-white/[0.05] pb-6 mb-8 flex-wrap gap-4">
              <div className="flex items-center space-x-2 min-w-0">
                <div className="w-2.5 h-2.5 rounded-full bg-white/20 flex-shrink-0" aria-hidden="true" />
                <span className="text-[10px] sm:text-[11px] font-mono text-mutedGray tracking-wider uppercase truncate">
                  ARDEN <span className="hidden sm:inline">// Biological Interface v1.08</span><span className="inline sm:hidden">// Interface</span>
                </span>
              </div>
              <span className="text-[9px] sm:text-[10px] font-mono text-white uppercase tracking-widest flex-shrink-0">
                Active State
              </span>
            </div>

            {/* Tab Buttons */}
            <div 
              className="flex flex-wrap gap-2 mb-8" 
              role="tablist"
              aria-label="Biological metrics selection"
              onKeyDown={handleKeyDown}
            >
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    id={`tab-${tab.id}`}
                    onClick={() => setActiveTab(tab.id)}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`panel-${tab.id}`}
                    tabIndex={isActive ? 0 : -1}
                    className={`flex-shrink-0 px-4 py-2.5 border text-[10px] uppercase tracking-[0.2em] font-mono focus:outline-none transition-colors duration-200 cursor-pointer ${
                      isActive
                        ? 'border-white text-white'
                        : 'border-white/5 text-mutedGray hover:border-white/10 hover:text-warmWhite'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Dynamic Content Panel */}
            <div 
              id={`panel-${activeTab}`}
              role="tabpanel"
              aria-labelledby={`tab-${activeTab}`}
              tabIndex={0}
              className="space-y-8 min-h-[300px] focus:outline-none focus-visible:ring-1 focus-visible:ring-white/20"
            >
              
              {/* TAB: METABOLIC */}
              {activeTab === 'metabolic' && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="flex items-baseline justify-between flex-wrap gap-2">
                    <h3 className="font-serif text-2xl text-warmWhite font-normal">
                      Sub-cellular Glycemic Precision
                    </h3>
                    <span className="text-xs text-white font-mono font-semibold">
                      98 / 100 Optimal
                    </span>
                  </div>
                  <p className="text-xs text-mutedGray font-light leading-relaxed">
                    Continuous tracking maps how custom nourishment stacks interact with your blood sugar
                    signature. Eliminate afternoon energy crashes and ensure peak fat oxidation.
                  </p>
                  
                  {/* Glucose Stability Wave Visual */}
                  <div className="border border-white/[0.04] p-4 bg-[#0A0A0B]/50 space-y-4">
                    <div className="flex justify-between items-center text-[10px] font-mono text-mutedGray flex-wrap gap-2">
                      <span>Glucose Stability Wave</span>
                      <span>Target Range: 75-110 mg/dL</span>
                    </div>
                    <div className="h-16 flex items-end justify-between space-x-1 pt-4" aria-hidden="true">
                      <div className="bg-white/10 h-[40%] w-full rounded-sm" />
                      <div className="bg-white/10 h-[45%] w-full rounded-sm" />
                      <div className="bg-white h-[60%] w-full rounded-sm" />
                      <div className="bg-white h-[65%] w-full rounded-sm" />
                      <div className="bg-white h-[55%] w-full rounded-sm" />
                      <div className="bg-white/10 h-[50%] w-full rounded-sm" />
                      <div className="bg-white/10 h-[35%] w-full rounded-sm" />
                      <div className="bg-white/10 h-[40%] w-full rounded-sm" />
                    </div>
                  </div>
                </div>
              )}

              {/* TAB: CIRCADIAN */}
              {activeTab === 'circadian' && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="flex items-baseline justify-between flex-wrap gap-2">
                    <h3 className="font-serif text-2xl text-warmWhite font-normal">
                      Sustained Cortisol Regulation
                    </h3>
                    <span className="text-xs text-white font-mono font-semibold">
                      Calibration Active
                    </span>
                  </div>
                  <p className="text-xs text-mutedGray font-light leading-relaxed">
                    Our circadian program uses targeted light exposure and temperature adaptation strategies
                    to shift cortisol peaks to morning and sustain deep delta recovery waves at night.
                  </p>
                  
                  {/* Sleep metric progress bar */}
                  <div className="border border-white/[0.04] p-4 bg-[#0A0A0B]/50 space-y-2">
                    <div className="flex justify-between items-center text-[10px] font-mono text-mutedGray flex-wrap gap-2">
                      <span>Circadian Light Target Progress</span>
                      <span>9,200 Lux achieved</span>
                    </div>
                    <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden" aria-hidden="true">
                      <div className="bg-white h-full w-[78%] rounded-full" />
                    </div>
                  </div>
                </div>
              )}

              {/* TAB: NEUROLOGICAL */}
              {activeTab === 'neurological' && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="flex items-baseline justify-between flex-wrap gap-2">
                    <h3 className="font-serif text-2xl text-warmWhite font-normal">
                      Autonomic Parasympathetic Shield
                    </h3>
                    <span className="text-xs text-white font-mono font-semibold">
                      +24ms HRV Shift
                    </span>
                  </div>
                  <p className="text-xs text-mutedGray font-light leading-relaxed">
                    We design deep focus blocks and brainwave synchronization practices. This maximizes your
                    sympathetic/parasympathetic flexibility, maintaining absolute calm under commercial pressure.
                  </p>
                  
                  {/* Interactive stats block */}
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-4 border border-white/[0.04] bg-[#0A0A0B]/50">
                      <span className="block text-[10px] text-mutedGray">Delta-Sleep Ratio</span>
                      <span className="font-serif text-xl text-white mt-1 block">32.4%</span>
                    </div>
                    <div className="p-4 border border-white/[0.04] bg-[#0A0A0B]/50">
                      <span className="block text-[10px] text-mutedGray">Aperiodic Power</span>
                      <span className="font-serif text-xl text-white mt-1 block">1.82 Hz</span>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB: BIOMECHANICAL */}
              {activeTab === 'musculoskeletal' && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="flex items-baseline justify-between flex-wrap gap-2">
                    <h3 className="font-serif text-2xl text-warmWhite font-normal">
                      Biomechanical Posture Alignment
                    </h3>
                    <span className="text-xs text-warmWhite font-mono">
                      Fully Calibrated
                    </span>
                  </div>
                  <p className="text-xs text-mutedGray font-light leading-relaxed">
                    Customized orthopedic and musculoskeletal protocols build bulletproof structural stability.
                    Eliminate chronic desk-related postural damage and maximize leverage.
                  </p>
                  
                  <div className="border border-white/[0.04] p-4 bg-[#0A0A0B]/50 flex justify-between items-center text-xs flex-wrap gap-2">
                    <span className="font-mono text-mutedGray text-[10px]">Thoracic Rotation Index</span>
                    <span className="text-white uppercase font-mono text-[10px]">15° Expansion Protocol</span>
                  </div>
                </div>
              )}

            </div>

            {/* Custom Action Button inside App */}
            <div className="mt-8 pt-8 border-t border-white/[0.05] flex justify-between items-center flex-wrap gap-4">
              <span className="text-[11px] text-mutedGray">Ready to calibrate your performance?</span>
              <Link
                href="#apply"
                className="text-xs uppercase tracking-[0.2em] font-semibold text-white border-b border-white pb-1 hover:text-mutedGray hover:border-mutedGray transition-colors duration-300"
              >
                Apply for Assessment &rarr;
              </Link>
            </div>

            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
