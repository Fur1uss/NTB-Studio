"use client";

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './SomosFamilia.css';

// Registrar el plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Colores predefinidos para evitar problemas de hidratación
const gradientesColores = [
  // Isidora
  [
    ['#f14c61', '#2eca6b'],
    ['#553ec2', '#cd09a0'],
    ['#6cad9f', '#76288b']
  ],
  // Cesar
  [
    ['#24719a', '#232110'],
    ['#dca50e', '#1a4d07'],
    ['#172969', '#e61216']
  ],
  // Marcelo
  [
    ['#1bec0d', '#a712ff'],
    ['#4baf32', '#c38ce0'],
    ['#1dc9ab', '#b79eb2']
  ],
  // Maximiliano
  [
    ['#8da04d', '#b2a894'],
    ['#d419dd', '#f08406'],
    ['#d0d7cf', '#65c72c']
  ],
  // Cristian
  [
    ['#4ffb53', '#60e502'],
    ['#e2fd18', '#9f0ebf'],
    ['#8cf525', '#dd5f10']
  ]
];

const miembros = [
  {
    id: 1,
    nombre: "Isidora",
    bio: "La mente creativa detrás de nuestros diseños. Fanática del café y los pixeles perfectos.",
    fotosAnimacion: [
      "/placeholder-isidora-1.jpg",
      "/placeholder-isidora-2.jpg",
      "/placeholder-isidora-3.jpg",
    ],
  },
  {
    id: 2,
    nombre: "Cesar",
    bio: "Nuestro gurú del código. Convierte los problemas en soluciones y el café en código.",
    fotosAnimacion: [
      "/placeholder-cesar-1.jpg",
      "/placeholder-cesar-2.jpg",
      "/placeholder-cesar-3.jpg",
    ],
  },
  {
    id: 3,
    nombre: "Marcelo",
    bio: "La estratega digital que convierte ideas en realidades. Siempre un paso adelante.",
    fotosAnimacion: [
      "/placeholder-marcelo-1.jpg",
      "/placeholder-marcelo-2.jpg",
      "/placeholder-marcelo-3.jpg",
    ],
  },
  {
    id: 4,
    nombre: "Maximiliano",
    bio: "El mago del backend. Si hay un servidor, él lo puede optimizar. Amante de las arquitecturas complejas.",
    fotosAnimacion: [
      "/placeholder-maximiliano-1.jpg",
      "/placeholder-maximiliano-2.jpg",
      "/placeholder-maximiliano-3.jpg",
    ],
  },
  {
    id: 5,
    nombre: "Cristian",
    bio: "La voz de nuestros clientes dentro del equipo. Experta en UX y en hacer que todo funcione perfectamente.",
    fotosAnimacion: [
      "/placeholder-cristian-1.jpg",
      "/placeholder-cristian-2.jpg",
      "/placeholder-cristian-3.jpg",
    ],
  },
];

const SomosFamilia = () => {
  const containerRef = useRef(null);
  const miembrosRefs = useRef([]);


  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline principal - efecto ola: solo una barra activa a la vez
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=600%", 
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Configurar estado inicial de las barras (altura 0, desde abajo)
      gsap.set(".somos-familia-barra", { height: 0 });
      gsap.set(".somos-familia-nombre-indicador, .somos-familia-flecha", { opacity: 0, y: 20 });

      // Efecto ola: cada barra sube y las anteriores bajan - responsive
      const getResponsiveHeights = () => {
        const width = window.innerWidth;
        if (width <= 480) {
          return ["120px", "160px", "220px", "140px", "110px"];
        } else if (width <= 768) {
          return ["120px", "160px", "220px", "140px", "110px"];
        } else if (width <= 1024) {
          return ["200px", "250px", "320px", "230px", "210px"];
        } else {
          return ["280px", "350px", "450px", "320px", "300px"];
        }
      };

      const alturas = getResponsiveHeights();
      
      miembrosRefs.current.forEach((miembro, index) => {
        if (!miembro) return;

        const barra = miembro.querySelector('.somos-familia-barra');
        const nombreIndicador = miembro.querySelector('.somos-familia-nombre-indicador');
        const flecha = miembro.querySelector('.somos-familia-flecha');
        const fotos = miembro.querySelectorAll('.somos-familia-foto');

        // Inicialmente ocultar fotos
        gsap.set(fotos, { opacity: 0 });

        const timeStart = index * 1.2;

        // La barra actual sube
        tl.to(barra, {
          height: alturas[index],
          duration: 0.8,
          ease: "power2.out"
        }, timeStart)

        // Mostrar nombre cuando sube
        .to([nombreIndicador, flecha], {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out"
        }, timeStart + 0.6)

        // Animación de fotos
        .to(fotos, {
          opacity: 1,
          duration: 0.1,
          stagger: 0.1,
          repeat: 1,
          yoyo: true,
          ease: "none"
        }, timeStart + 0.8);

        // Si no es la última barra, programar que baje cuando suba la siguiente
        if (index < miembrosRefs.current.length - 1) {
          const nextTimeStart = (index + 1) * 1.2;
          
          // La barra actual baja cuando sube la siguiente
          tl.to(barra, {
            height: 0,
            duration: 0.6,
            ease: "power2.in"
          }, nextTimeStart)

          // Ocultar nombre cuando baja
          .to([nombreIndicador, flecha], {
            opacity: 0,
            y: 20,
            duration: 0.3,
            ease: "power2.in"
          }, nextTimeStart);
        }
      });

    }, containerRef);

    return () => {
      ctx.revert(); // Limpieza para HMR
    };
  }, []);





  return (
    <>
      <section ref={containerRef} className="somos-familia-container">
        <div className="somos-familia-header">
          <div className="subtitle">Además...</div>
          <h2>Somos familia</h2>
        </div>
        
        <div className="somos-familia-miembros-grid">
          {miembros.map((miembro, index) => (
            <div
              key={miembro.id}
              ref={el => miembrosRefs.current[index] = el}
              className="somos-familia-miembro"
            >
              <div className="somos-familia-nombre-indicador">
                {miembro.nombre}!
              </div>
              <div className="somos-familia-flecha">↙</div>
              
              <div className="somos-familia-barra">
                <div className="somos-familia-fotos">
                  {miembro.fotosAnimacion.map((foto, fotoIndex) => {
                    const colores = gradientesColores[index][fotoIndex];
                    return (
                      <div
                        key={fotoIndex}
                        className="somos-familia-foto"
                        style={{ 
                          backgroundImage: `linear-gradient(135deg, ${colores[0]}, ${colores[1]})`,
                          zIndex: fotoIndex === 0 ? 3 : fotoIndex === 1 ? 2 : 1
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


    </>
  );
};

export default SomosFamilia;