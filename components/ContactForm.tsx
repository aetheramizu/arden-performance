'use client';

import { useState } from 'react';
import Card from './ui/Card';
import Eyebrow from './ui/Eyebrow';
import Heading from './ui/Heading';
import Text from './ui/Text';
import Label from './ui/Label';
import Button from './ui/Button';

export default function ContactForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('consultation');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setSubject('consultation');
    setMessage('');
    setIsSubmitted(false);
  };

  return (
    <Card 
      theme="white" 
      className="p-8 sm:p-12 shadow-2xl space-y-10"
      role="status"
      aria-live="polite"
    >
      <div className="space-y-4">
        <Eyebrow theme="light">
          Registrar Contact
        </Eyebrow>
        <Heading level={2} theme="light" className="text-3xl md:text-4xl">
          Coordinate Consultation
        </Heading>
        <Text variant="body-sm" theme="light" className="max-w-xl">
          Complete the registry request below. All inquiries are parsed manually to route to the correct practitioner.
        </Text>
      </div>

      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-8 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Name Input */}
            <div className="space-y-2">
              <Label htmlFor="contact-name">First Name</Label>
              <input
                type="text"
                id="contact-name"
                placeholder="e.g. Katherine"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full bg-white border-b border-obsidian/20 hover:border-obsidian/40 focus:border-obsidian px-3 py-3 text-xs text-obsidian placeholder-mutedGray/50 focus:outline-none transition-colors duration-200"
              />
            </div>
            {/* Last Name Input */}
            <div className="space-y-2">
              <Label htmlFor="contact-lastname">Last Name</Label>
              <input
                type="text"
                id="contact-lastname"
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
              <Label htmlFor="contact-email">Direct Email Coordinate</Label>
              <input
                type="email"
                id="contact-email"
                placeholder="e.g. katherine@sterling.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white border-b border-obsidian/20 hover:border-obsidian/40 focus:border-obsidian px-3 py-3 text-xs text-obsidian placeholder-mutedGray/50 focus:outline-none transition-colors duration-200"
              />
            </div>
            {/* Subject Dropdown */}
            <div className="space-y-2">
              <Label htmlFor="contact-subject">Inquiry Channel</Label>
              <select
                id="contact-subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full bg-white border-b border-obsidian/20 hover:border-obsidian/40 focus:border-obsidian px-3 py-3 text-xs text-obsidian focus:outline-none transition-colors duration-200 cursor-pointer"
              >
                <option value="consultation">Private Consultation Request</option>
                <option value="operations">Chamber Operations & Passcodes</option>
                <option value="inquiry">Clinical Biomarker Questions</option>
                <option value="media">Press & Media Coordinates</option>
              </select>
            </div>
          </div>

          {/* Message Area */}
          <div className="space-y-2">
            <Label htmlFor="contact-message">Inquiry Details</Label>
            <textarea
              id="contact-message"
              rows={5}
              placeholder="Provide a detailed coordinate summary of your request or inquiry."
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-white border border-obsidian/20 hover:border-obsidian/40 focus:border-obsidian px-4 py-4 text-xs text-obsidian placeholder-mutedGray/50 focus:outline-none transition-colors duration-200 resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Button
              type="submit"
              variant="filled"
              theme="light"
              className="w-full text-center"
            >
              Transmit Registry Request
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
              Transmission Complete
            </span>
          </div>
          <Heading level={3} theme="light" className="text-2xl font-normal">
            Registry request received.
          </Heading>
          <Text variant="body-sm" theme="light">
            Our Performance Registrar has logged your metrics under parameters: {subject}. A coordinator will follow up within 24 operational hours.
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
