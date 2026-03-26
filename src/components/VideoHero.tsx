"use client";

import { useRef, useEffect } from "react";

interface VideoHeroProps {
  src: string;
  children: React.ReactNode;
  overlay?: string;
  className?: string;
}

export default function VideoHero({
  src,
  children,
  overlay = "bg-black/50",
  className = "h-screen",
}: VideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className={`relative ${className} flex items-center justify-center overflow-hidden`}>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>
      <div className={`absolute inset-0 ${overlay}`} />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      <div className="relative z-10 w-full">
        {children}
      </div>
    </section>
  );
}
