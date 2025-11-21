"use client";

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { gsap } from 'gsap';
import Button from '@/components/ui/button/Button';
import './not-found.css';

export default function NotFound() {
  const router = useRouter();
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const starRef = useRef(null);
  const thunderRef = useRef(null);
  const numberRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación inicial: elementos aparecen desde diferentes direcciones
      gsap.set([titleRef.current, subtitleRef.current, buttonRef.current, numberRef.current], {
        opacity: 0,
      });

      // Animación de entrada
      const tl = gsap.timeline({ delay: 0.3 });

      tl.to(numberRef.current, {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.8,
        ease: 'back.out(1.7)',
      })
      .to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out',
      }, '-=0.4')
      .to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out',
      }, '-=0.3')
      .to(buttonRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: 'back.out(1.5)',
      }, '-=0.2');

      // Animaciones continuas de decoración
      if (starRef.current) {
        gsap.to(starRef.current, {
          rotation: 360,
          duration: 20,
          repeat: -1,
          ease: 'none',
        });

        gsap.to(starRef.current, {
          y: '+=30',
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }

      if (thunderRef.current) {
        gsap.to(thunderRef.current, {
          scale: 1.1,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });

        gsap.to(thunderRef.current, {
          rotation: -15,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleGoHome = () => {
    router.push('/');
  };

  return (
    <div ref={containerRef} className="not-found-container">
      {/* Elementos decorativos */}
      <div ref={starRef} className="not-found-star">
        <img src="/star.webp" alt="Decorative star" />
      </div>
      <div ref={thunderRef} className="not-found-thunder">
        <img src="/thunder.webp" alt="Decorative thunder" />
      </div>

      {/* Contenido principal */}
      <div className="not-found-content">
        <h1 ref={numberRef} className="not-found-number">404</h1>
        <h2 ref={titleRef} className="not-found-title">
          Página no encontrada
        </h2>
        <p ref={subtitleRef} className="not-found-subtitle">
          Parece que esta página se perdió en el espacio digital.
          <br />
          No te preocupes, te ayudamos a volver al inicio.
        </p>
        <div ref={buttonRef} className="not-found-button-wrapper">
          <Button 
            onClick={handleGoHome}
            className="not-found-button"
          >
            Volver al inicio
          </Button>
        </div>
      </div>

      {/* Estrellas decorativas pequeñas */}
      <div className="not-found-stars">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i} 
            className="not-found-small-star"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 30}%`,
              animationDelay: `${i * 0.3}s`,
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#20E337"/>
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}

