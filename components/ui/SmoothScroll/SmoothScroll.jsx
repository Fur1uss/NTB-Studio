"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function SmoothScroll({ children }) {
  const lenisRef = useRef();

  useEffect(() => {
    // Importación dinámica de Lenis
    let lenis;
    
    const initLenis = async () => {
      const LenisModule = await import('lenis');
      const Lenis = LenisModule.default || LenisModule;
      
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
      });

      lenisRef.current = lenis;

      // Integrar con ScrollTrigger
      lenis.on('scroll', ScrollTrigger.update);

      // Integrar Lenis con GSAP según la documentación
      function update(time) {
        lenis.raf(time * 1000);
      }

      gsap.ticker.add(update);
      gsap.ticker.lagSmoothing(0);
    };

    initLenis();

    // Limpieza
    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
      gsap.ticker.remove((time) => {
        lenisRef.current?.raf(time * 1000);
      });
    };
  }, []);

  return <>{children}</>;
}

