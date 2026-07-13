import React from 'react';

interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
  theme?: 'light' | 'dark';
  className?: string;
}

export default function Label({ htmlFor, children, theme = 'light', className = '' }: LabelProps) {
  const colorClass = theme === 'light' ? 'text-obsidian' : 'text-warmWhite';
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-[10px] uppercase tracking-[0.2em] font-bold ${colorClass} ${className}`}
    >
      {children}
    </label>
  );
}
