"use client";

import { useEffect, useRef } from 'react';

export default function SmoothScroll({ children }) {
  const lenisRef = useRef();

  useEffect(() => {
    // Importación dinámica de todas las librerías pesadas
    let lenis;
    let gsap;
    let ScrollTrigger;
    
    const initLenis = async () => {
      // Dynamic imports para evitar render blocking
      const [LenisModule, gsapModule, scrollTriggerModule] = await Promise.all([
        import('lenis'),
        import('gsap'),
        import('gsap/ScrollTrigger')
      ]);
      
      const Lenis = LenisModule.default || LenisModule;
      gsap = gsapModule.gsap;
      ScrollTrigger = scrollTriggerModule.ScrollTrigger;
      
      // Registrar plugin después de importar
      gsap.registerPlugin(ScrollTrigger);
      
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

    // Defer inicialización hasta después del LCP
    const timeoutId = setTimeout(() => {
      initLenis();
    }, 100);

    // Limpieza
    return () => {
      clearTimeout(timeoutId);
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
      if (gsap) {
        gsap.ticker.remove((time) => {
          lenisRef.current?.raf(time * 1000);
        });
      }
    };
  }, []);

  return <>{children}</>;
}

