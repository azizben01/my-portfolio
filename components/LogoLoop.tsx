// app/components/LogoSlider.tsx (or LogoLoop.tsx)
"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

interface LogoLoopProps {
  logos: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  }[];
  speed?: number; // pixels per second
}

export default function LogoLoop({ logos, speed = 50 }: LogoLoopProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(5);
  const positionRef = useRef(0);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let lastTimestamp = 0;
    const totalWidth = scroller.scrollWidth / 3;

    const animate = (timestamp: number) => {
      if (!lastTimestamp) {
        lastTimestamp = timestamp;
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      const delta = timestamp - lastTimestamp;
      const pixelsToMove = (speed * delta) / 1000;

      positionRef.current -= pixelsToMove;

      if (Math.abs(positionRef.current) >= totalWidth) {
        positionRef.current = 0;
      }

      scroller.style.transform = `translateX(${positionRef.current}px)`;
      lastTimestamp = timestamp;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [speed]);

  const tripledLogos = [...logos, ...logos, ...logos];

  return (
    <div className="relative w-full overflow-hidden bg-white py-12">
      {/* Left fade gradient */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />

      {/* Right fade gradient */}
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

      {/* Scrolling logos */}
      <div className="relative">
        <div
          ref={scrollerRef}
          className="flex gap-12 md:gap-16 items-center"
          style={{ width: "fit-content" }}
        >
          {tripledLogos.map((logo, index) => (
            <div
              key={`${logo.alt}-${index}`}
              className="flex-shrink-0 transition-all duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width || 120}
                height={logo.height || 60}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
