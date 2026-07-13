import React from 'react';

interface SectionProps {
  id?: string;
  theme?: 'obsidian' | 'warmWhite';
  className?: string;
  borderBottom?: boolean;
  borderTop?: boolean;
  children: React.ReactNode;
}

export default function Section({
  id,
  theme = 'obsidian',
  className = '',
  borderBottom = false,
  borderTop = false,
  children,
}: SectionProps) {
  const themeClasses = {
    obsidian: 'bg-obsidian text-warmWhite',
    warmWhite: 'bg-warmWhite text-obsidian',
  };

  const borderClasses = `
    ${borderBottom ? (theme === 'obsidian' ? 'border-b border-white/[0.05]' : 'border-b border-obsidian/[0.06]') : ''}
    ${borderTop ? (theme === 'obsidian' ? 'border-t border-white/[0.05]' : 'border-t border-obsidian/[0.06]') : ''}
  `.trim();

  return (
    <section
      id={id}
      className={`py-20 md:py-32 transition-colors duration-500 ${themeClasses[theme]} ${borderClasses} ${className}`}
    >
      {children}
    </section>
  );
}
