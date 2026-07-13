import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  theme?: 'white' | 'dark' | 'glass';
  hoverLift?: boolean;
  className?: string;
  children: React.ReactNode;
}

export default function Card({
  theme = 'white',
  hoverLift = false,
  className = '',
  children,
  ...props
}: CardProps) {
  const themeClasses = {
    white: 'bg-white border border-obsidian/[0.06] hover:border-obsidian/20 text-obsidian',
    dark: 'bg-[#141416] border border-white/[0.05] text-warmWhite',
    glass: 'p-6 border border-white/[0.04] bg-[#141416]/40 text-warmWhite',
  };

  const liftClasses = hoverLift
    ? 'hover:-translate-y-1 hover:shadow-xl transition-all duration-500 ease-out'
    : '';

  return (
    <div className={`overflow-hidden transition-all duration-500 ${themeClasses[theme]} ${liftClasses} ${className}`} {...props}>
      {children}
    </div>
  );
}
