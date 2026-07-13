'use client';

import { useInView } from './useInView';

interface RevealProps {
  children: React.ReactNode;
  /** CSS class name for the wrapper div */
  className?: string;
  /** Delay in milliseconds for stagger effects */
  delay?: number;
  /** Animation direction: 'up' | 'down' | 'left' | 'right' | 'none' */
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  /** Duration in milliseconds */
  duration?: number;
  /** Distance to travel in pixels */
  distance?: number;
  /** Intersection Observer threshold */
  threshold?: number;
}

export default function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 700,
  distance = 30,
  threshold = 0.15,
}: RevealProps) {
  const { ref, isInView } = useInView({ threshold });

  const directionMap: Record<string, string> = {
    up: `translateY(${distance}px)`,
    down: `translateY(-${distance}px)`,
    left: `translateX(${distance}px)`,
    right: `translateX(-${distance}px)`,
    none: 'none',
  };

  const initialTransform = directionMap[direction] || directionMap.up;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'none' : initialTransform,
        transition: `opacity ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms, transform ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`,
        willChange: isInView ? 'auto' : 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}
