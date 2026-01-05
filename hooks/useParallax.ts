
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * useParallax
 * @param intensity - The percentage of height the target moves relative to scroll.
 */
export function useParallax(intensity: number = 20) {
  const containerRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      if (!containerRef.current || !targetRef.current) return;

      gsap.fromTo(targetRef.current, 
        { yPercent: intensity },
        { 
          yPercent: -intensity,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1, // Smooth interaction for luxury feel
          }
        }
      );
    });

    return () => mm.revert();
  }, [intensity]);

  return { containerRef, targetRef };
}
