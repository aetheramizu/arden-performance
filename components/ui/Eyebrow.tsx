import React from 'react';

interface EyebrowProps {
  children: React.ReactNode;
  theme?: 'light' | 'dark';
  className?: string;
}

export default function Eyebrow({ children, theme = 'dark', className = '' }: EyebrowProps) {
  const colorClass = theme === 'light' ? 'text-obsidian/50' : 'text-white/50';
  return (
    <span className={`text-[11px] uppercase tracking-[0.3em] font-bold block mb-4 ${colorClass} ${className}`}>
      {children}
    </span>
  );
}
