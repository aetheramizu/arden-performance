'use client';

import { useState } from 'react';
import Reveal from './Reveal';

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FaqItem({ question, answer, isOpen, onToggle }: FaqItemProps) {
  return (
    <div className="border-b border-obsidian/10 pb-6 group">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center text-left py-4 focus:outline-none transition-colors duration-200 cursor-pointer"
      >
        <span className="font-sans text-xs sm:text-sm font-bold uppercase tracking-wider text-obsidian pr-4">
          {question}
        </span>
        <span
          className={`text-lg font-light text-obsidian/60 transform transition-transform duration-300 flex-shrink-0 ${
            isOpen ? 'rotate-45' : 'rotate-0'
          }`}
        >
          +
        </span>
      </button>
      
      {/* Smooth height transition wrapper */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-40 mt-4 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-xs text-slateMuted font-light leading-relaxed max-w-2xl">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does the initial onboarding diagnostic work?",
      answer: "We ship a synchronized diagnostic intake kit directly to you. This is followed by a local laboratory draw coordinates request. All findings are analyzed by your private clinical team prior to session calibration."
    },
    {
      question: "Can I maintain my current outside medical protocols?",
      answer: "Absolutely. ARDEN is designed to complement existing physical therapeutic and clinical schedules. We coordinate directly with your personal practitioners to streamline data alignment."
    },
    {
      question: "What is the average commitment for program calibration?",
      answer: "To ensure metabolic stability and skeletal integration, we suggest an initial 12-week calibration program. Most members transition to ongoing monthly system governance agreements."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-20 md:py-32 bg-warmWhite text-obsidian border-b border-obsidian/[0.06] transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side Typography Summary */}
          <div className="lg:col-span-4 space-y-4">
            <Reveal delay={0} direction="up" distance={20}>
              <span className="text-[11px] uppercase tracking-[0.3em] text-obsidian/50 font-bold">
                Support Console
              </span>
            </Reveal>
            <Reveal delay={120} direction="up" distance={24}>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-obsidian leading-[1.1]">
                Frequently Asked Questions
              </h2>
            </Reveal>
            <Reveal delay={240} direction="up" distance={20}>
              <p className="text-xs text-slateMuted font-light leading-relaxed max-w-sm">
                Curious about clinical onboarding or membership protocols? Find quick details below. For direct
                coordination, contact our support registrar.
              </p>
            </Reveal>
          </div>

          {/* Right Side Custom Accordion Group */}
          <Reveal className="lg:col-span-8" delay={300} direction="up" distance={24}>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <FaqItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onToggle={() => handleToggle(index)}
                />
              ))}
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
