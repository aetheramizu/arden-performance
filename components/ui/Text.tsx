import React from 'react';

interface TextProps {
  variant?: 'body-lg' | 'body' | 'body-sm' | 'mono-xs';
  theme?: 'light' | 'dark';
  className?: string;
  children: React.ReactNode;
}

export default function Text({
  variant = 'body',
  theme = 'dark',
  className = '',
  children,
}: TextProps) {
  const sizeClasses = {
    'body-lg': 'text-base md:text-lg font-light leading-relaxed',
    'body': 'text-xs md:text-sm font-light leading-relaxed',
    'body-sm': 'text-xs font-light leading-relaxed',
    'mono-xs': 'text-[10px] font-mono tracking-wider',
  };

  const colorClasses = {
    dark: {
      'body-lg': 'text-mutedGray',
      'body': 'text-mutedGray',
      'body-sm': 'text-mutedGray',
      'mono-xs': 'text-mutedGray',
    },
    light: {
      'body-lg': 'text-slateDark',
      'body': 'text-slateMuted',
      'body-sm': 'text-slateMuted',
      'mono-xs': 'text-mutedGray',
    },
  };

  return (
    <p className={`${sizeClasses[variant]} ${colorClasses[theme][variant]} ${className}`}>
      {children}
    </p>
  );
}
