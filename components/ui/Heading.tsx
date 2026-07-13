import React from 'react';

interface HeadingProps {
  level: 1 | 2 | 3 | 4;
  children: React.ReactNode;
  theme?: 'light' | 'dark';
  className?: string;
}

export default function Heading({ level, children, theme = 'dark', className = '' }: HeadingProps) {
  const Tag = `h${level}` as const;

  const fontClasses = level === 1 || level === 2
    ? 'font-serif font-normal leading-[1.08] tracking-tight uppercase'
    : 'font-sans font-bold uppercase tracking-wider';

  const colorClasses = theme === 'light' ? 'text-obsidian' : 'text-warmWhite';

  const sizeClasses = {
    1: 'text-4xl sm:text-6xl md:text-8xl',
    2: 'text-4xl md:text-5xl lg:text-6xl leading-[1.1]',
    3: 'text-lg',
    4: 'text-sm sm:text-base font-bold',
  };

  return (
    <Tag className={`${fontClasses} ${sizeClasses[level]} ${colorClasses} ${className}`}>
      {children}
    </Tag>
  );
}
