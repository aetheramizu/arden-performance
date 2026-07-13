'use client';

import { useEffect, useRef, useState } from 'react';

interface UseInViewOptions {
  /** Percentage of element visible before triggering (0-1) */
  threshold?: number;
  /** Root margin string, e.g. '-50px' to trigger earlier/later */
  rootMargin?: string;
  /** If true, resets when element leaves viewport */
  once?: boolean;
}

export function useInView({
  threshold = 0.15,
  rootMargin = '0px 0px -60px 0px',
  once = true,
}: UseInViewOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, [threshold, rootMargin, once]);

  return { ref, isInView };
}
