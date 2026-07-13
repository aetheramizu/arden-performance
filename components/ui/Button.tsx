import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  variant?: 'filled' | 'outline' | 'underline';
  theme?: 'light' | 'dark';
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = 'filled',
  theme = 'dark',
  href,
  onClick,
  type = 'button',
  className = '',
  children,
}: ButtonProps) {
  const isFilled = variant === 'filled';
  const isOutline = variant === 'outline';
  const isUnderline = variant === 'underline';

  // Base typography & transition speeds
  const baseClasses = 'inline-block transition-all duration-300 rounded-none focus:outline-none';

  // Filled style variants
  const filledClasses = theme === 'dark'
    ? 'bg-warmWhite text-obsidian text-xs uppercase tracking-[0.25em] font-bold py-4 px-10 hover:bg-white hover:shadow-lg hover:-translate-y-0.5'
    : 'bg-obsidian text-warmWhite text-xs uppercase tracking-[0.25em] font-bold py-4 px-10 hover:bg-black hover:text-white';

  // Outline style variants
  const outlineClasses = 'px-6 py-3 md:px-5 md:py-2.5 border border-white/25 text-[10px] uppercase tracking-[0.2em] text-warmWhite hover:border-warmWhite hover:bg-white/[0.05] hover:shadow-[0_0_20px_rgba(255,255,255,0.06)]';

  // Underline style variants
  const underlineClasses = theme === 'dark'
    ? 'text-xs uppercase tracking-[0.2em] font-semibold border-b border-white pb-1 hover:text-mutedGray hover:border-mutedGray'
    : 'text-xs uppercase tracking-[0.2em] font-semibold border-b border-obsidian pb-1 hover:text-black hover:border-black';

  const variantClasses = `
    ${isFilled ? filledClasses : ''}
    ${isOutline ? outlineClasses : ''}
    ${isUnderline ? underlineClasses : ''}
  `.trim();

  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={combinedClasses} onClick={onClick}>
      {children}
    </button>
  );
}
