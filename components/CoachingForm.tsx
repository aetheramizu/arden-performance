'use client';

import { useState } from 'react';
import Card from './ui/Card';
import Eyebrow from './ui/Eyebrow';
import Heading from './ui/Heading';
import Text from './ui/Text';
import Label from './ui/Label';
import Button from './ui/Button';

type FormStep = 1 | 2 | 3;

export default function CoachingForm() {
  const [step, setStep] = useState<FormStep>(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form Fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [geoBase, setGeoBase] = useState('nyc');
  const [focusTarget, setFocusTarget] = useState('metabolic');
  const [commitment, setCommitment] = useState('medium');
  const [trackers, setTrackers] = useState<string[]>([]);
  const [objectives, setObjectives] = useState('');

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3) as FormStep);
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1) as FormStep);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      nextStep();
    } else {
      setIsSubmitted(true);
    }
  };

  const handleTrackerChange = (tracker: string) => {
    setTrackers((prev) =>
      prev.includes(tracker) ? prev.filter((t) => t !== tracker) : [...prev, tracker]
    );
  };

  const handleReset = () => {
    setStep(1);
    setIsSubmitted(false);
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setGeoBase('nyc');
    setFocusTarget('metabolic');
    setCommitment('medium');
    setTrackers([]);
    setObjectives('');
  };

  const stepLabels = {
    1: 'Bio-Coordinates',
    2: 'Focus Parameters',
    3: 'Clinical Context',
  };

  return (
    <Card 
      theme="white" 
      className="p-8 sm:p-12 shadow-2xl space-y-10"
      role="status"
      aria-live="polite"
    >
      {/* Form Progress Header */}
      <div className="border-b border-obsidian/10 pb-6 flex justify-between items-center flex-wrap gap-4">
        <div className="space-y-1">
          <Eyebrow theme="light" className="mb-0">
            Step 0{step} / 03
          </Eyebrow>
          <Heading level={3} theme="light" className="text-base tracking-wider">
            {stepLabels[step]}
          </Heading>
        </div>
        {/* Visual Progress Bar */}
        <div className="w-24 bg-obsidian/10 h-1.5 rounded-full overflow-hidden" aria-hidden="true">
          <div 
            className="bg-obsidian h-full transition-all duration-300 rounded-full" 
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>

      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-8 animate-fadeIn">
          
          {/* STEP 1: PERSONAL COORDINATES */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <Label htmlFor="apply-name">First Name</Label>
                  <input
                    type="text"
                    id="apply-name"
                    placeholder="e.g. Katherine"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full bg-white border-b border-obsidian/20 hover:border-obsidian/40 focus:border-obsidian px-3 py-3 text-xs text-obsidian placeholder-mutedGray/50 focus:outline-none transition-colors duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="apply-lastname">Last Name</Label>
                  <input
                    type="text"
                    id="apply-lastname"
                    placeholder="e.g. Sterling"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full bg-white border-b border-obsidian/20 hover:border-obsidian/40 focus:border-obsidian px-3 py-3 text-xs text-obsidian placeholder-mutedGray/50 focus:outline-none transition-colors duration-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <Label htmlFor="apply-email">Direct Email Coordinate</Label>
                  <input
                    type="email"
                    id="apply-email"
                    placeholder="e.g. katherine@sterling.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white border-b border-obsidian/20 hover:border-obsidian/40 focus:border-obsidian px-3 py-3 text-xs text-obsidian placeholder-mutedGray/50 focus:outline-none transition-colors duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="apply-phone">Mobile Coordinate</Label>
                  <input
                    type="tel"
                    id="apply-phone"
                    placeholder="+1 (555) 0192"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white border-b border-obsidian/20 hover:border-obsidian/40 focus:border-obsidian px-3 py-3 text-xs text-obsidian placeholder-mutedGray/50 focus:outline-none transition-colors duration-200"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="apply-geo">Geographic Base</Label>
                <select
                  id="apply-geo"
                  value={geoBase}
                  onChange={(e) => setGeoBase(e.target.value)}
                  className="w-full bg-white border-b border-obsidian/20 hover:border-obsidian/40 focus:border-obsidian px-3 py-3 text-xs text-obsidian focus:outline-none transition-colors duration-200 cursor-pointer"
                >
                  <option value="nyc">New York City (Northeast Hub)</option>
                  <option value="tokyo">Tokyo (Asia-Pacific Hub)</option>
                  <option value="zermatt">Zermatt (European Alpine Hub)</option>
                  <option value="remote">Global Coordination (Fully Remote)</option>
                </select>
              </div>
            </div>
          )}

          {/* STEP 2: FOCUS PARAMETERS */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="apply-focus">Primary Performance Target</Label>
                <select
                  id="apply-focus"
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

              <div className="space-y-2">
                <Label htmlFor="apply-commit">Weekly Focus Hour Commitment</Label>
                <select
                  id="apply-commit"
                  value={commitment}
                  onChange={(e) => setCommitment(e.target.value)}
                  className="w-full bg-white border-b border-obsidian/20 hover:border-obsidian/40 focus:border-obsidian px-3 py-3 text-xs text-obsidian focus:outline-none transition-colors duration-200 cursor-pointer"
                >
                  <option value="low">2 - 4 hours / week (Executive Baseline)</option>
                  <option value="medium">5 - 8 hours / week (Optimized Calibration)</option>
                  <option value="high">9+ hours / week (Full Performance Deep Dive)</option>
                </select>
              </div>

              <div className="space-y-3">
                <Label htmlFor="apply-trackers">Current Biometric Monitoring Devices (Select all that apply)</Label>
                <div id="apply-trackers" className="grid grid-cols-2 gap-4 pt-2">
                  {['Oura Ring', 'WHOOP Strap', 'Apple Watch', 'Dexcom CGM', 'Garmin Ecosystem', 'None'].map((tracker) => {
                    const isChecked = trackers.includes(tracker);
                    return (
                      <button
                        key={tracker}
                        type="button"
                        onClick={() => handleTrackerChange(tracker)}
                        className={`px-4 py-3 border text-[10px] uppercase tracking-widest font-mono text-left transition-colors duration-200 cursor-pointer ${
                          isChecked
                            ? 'border-obsidian bg-obsidian text-warmWhite'
                            : 'border-obsidian/10 hover:border-obsidian/30 text-slateMuted'
                        }`}
                      >
                        {tracker}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: CLINICAL CONTEXT */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="apply-objectives">Performance Objectives & Health Challenges</Label>
                <textarea
                  id="apply-objectives"
                  rows={6}
                  placeholder="State your primary performance objectives, metabolic goals, or structural/postural parameters you wish to optimize."
                  required
                  value={objectives}
                  onChange={(e) => setObjectives(e.target.value)}
                  className="w-full bg-white border border-obsidian/20 hover:border-obsidian/40 focus:border-obsidian px-4 py-4 text-xs text-obsidian placeholder-mutedGray/50 focus:outline-none transition-colors duration-200 resize-none"
                />
              </div>
            </div>
          )}

          {/* Action buttons */}
          <div className="pt-6 border-t border-obsidian/10 flex justify-between items-center gap-4">
            {step > 1 ? (
              <Button
                variant="underline"
                theme="light"
                onClick={prevStep}
              >
                &larr; Back
              </Button>
            ) : (
              <div />
            )}

            <Button
              type="submit"
              variant="filled"
              theme="light"
            >
              {step === 3 ? 'Submit Application' : 'Next Step \u2192'}
            </Button>
          </div>

        </form>
      ) : (
        /* Dynamic Success Output */
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
  );
}
