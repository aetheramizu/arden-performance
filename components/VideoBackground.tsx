'use client';

import { useEffect, useRef, useState } from 'react';

interface VideoBackgroundProps {
  videoSrc: string;
  posterSrc: string;
}

export default function VideoBackground({ videoSrc, posterSrc }: VideoBackgroundProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(true); // default to true on server to avoid mobile video fetch
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
      setIsMobile(window.innerWidth < 768);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isMounted || isMobile || !videoRef.current) return;

    const videoEl = videoRef.current;

    // Intersection Observer to play/pause video based on viewport visibility
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoEl.play().catch(() => {
            // Silence potential autoplay block exceptions
          });
        } else {
          videoEl.pause();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(videoEl);

    return () => {
      observer.unobserve(videoEl);
    };
  }, [isMounted, isMobile]);

  // SSR or mobile states rendering static poster placeholder (bypasses video tag instantiation)
  if (!isMounted || isMobile) {
    return (
      <div className="absolute inset-0 z-0 bg-obsidian overflow-hidden" aria-hidden="true">
        <img
          src={posterSrc}
          alt="Dawn performance preparation background poster"
          width={1920}
          height={1080}
          className="object-cover w-full h-full brightness-[0.35] contrast-[1.02]"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-obsidian/40" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 z-0 bg-obsidian overflow-hidden" aria-hidden="true">
      {/* Background Poster Image (fades out when video starts playing) */}
      <img
        src={posterSrc}
        alt="Dawn performance preparation background poster"
        width={1920}
        height={1080}
        className={`absolute inset-0 object-cover w-full h-full brightness-[0.35] contrast-[1.02] transition-opacity duration-1000 ${
          videoLoaded ? 'opacity-0' : 'opacity-100'
        }`}
        loading="eager"
      />

      {/* Optimized HTML5 Background Video */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="metadata"
        onPlay={() => setVideoLoaded(true)}
        className={`absolute inset-0 object-cover w-full h-full brightness-[0.35] contrast-[1.02] transition-opacity duration-1000 ${
          videoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Dark Vignette and Shadow Gradient Overlay for Legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-obsidian/40" />
    </div>
  );
}
