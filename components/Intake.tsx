'use client';

import { useState } from 'react';
import Reveal from './Reveal';
import Section from './ui/Section';
import Container from './ui/Container';
import Heading from './ui/Heading';
import Text from './ui/Text';
import Card from './ui/Card';
import Eyebrow from './ui/Eyebrow';
import Label from './ui/Label';
import Button from './ui/Button';

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
    <Section id="apply">
      <Container>
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
                <Heading level={3} className="text-3xl md:text-4xl font-normal leading-tight">
                  ONE MEMBERSHIP.<br />
                  LIMITLESS POTENTIAL.
                </Heading>
                <Text variant="body-sm" theme="dark" className="max-w-sm">
                  Elevate every biological vector. Secure customized support spanning diagnostics,
                  continuous coaching, and retreat entry.
                </Text>
              </div>
            </div>
          </Reveal>

          {/* Right Side: Clean White Interactive Form Console */}
          <Reveal className="lg:col-span-7" delay={200} direction="up" distance={30} duration={800}>
            <Card 
              theme="white"
              className="p-8 sm:p-12 shadow-2xl space-y-10"
              role="status" 
              aria-live="polite" 
            >
            
              <div className="space-y-4">
                <Eyebrow theme="light">
                  Intake Console
                </Eyebrow>
                <Heading level={2} theme="light" className="text-3xl md:text-4xl">
                  Apply For Private Assessment
                </Heading>
                <Text variant="body-sm" theme="light" className="max-w-xl">
                  All applications are manually audited for clinical availability. Please state your baseline
                  coordinates below to schedule an onboarding consultation.
                </Text>
              </div>

              {!isSubmitted ? (
                /* Multi-field Intake Form */
                <form onSubmit={handleSubmit} className="space-y-8 animate-fadeIn">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Name Input */}
                    <div className="space-y-2">
                      <Label htmlFor="form-name">
                        First Name
                      </Label>
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
                      <Label htmlFor="form-lastname">
                        Last Name
                      </Label>
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
                      <Label htmlFor="form-email">
                        Direct Email Coordinate
                      </Label>
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
                      <Label htmlFor="form-phone">
                        Mobile Coordinate
                      </Label>
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
                    <Label htmlFor="form-focus">
                      Primary Performance Target
                    </Label>
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
                    <Button
                      type="submit"
                      variant="filled"
                      theme="light"
                      className="w-full text-center"
                    >
                      Submit Private Application
                    </Button>
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
                  <Heading level={3} theme="light" className="text-2xl font-normal">
                    Your assessment protocol is active.
                  </Heading>
                  <Text variant="body-sm" theme="light">
                    Our Performance Registrar will coordinate a secure digital intake request via your direct
                    parameters within 24 operational hours.
                  </Text>
                  <Button
                    variant="underline"
                    theme="light"
                    onClick={handleReset}
                    className="mt-2"
                  >
                    Submit Another Request
                  </Button>
                </div>
              )}

            </Card>
          </Reveal>

        </div>
      </Container>
    </Section>
  );
}
