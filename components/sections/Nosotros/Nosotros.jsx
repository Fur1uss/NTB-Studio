"use client";

import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./Nosotros.css";

// Registrar plugins
gsap.registerPlugin(ScrollTrigger);

// --- Datos ---
const miembros = [
  {
    id: 1,
    nombre: "César",
    bio: "La mente creativa detrás de nuestros diseños. Fanática del café y los pixeles perfectos.",
    fotosAnimacion: [
      "/cesar.webp"
    ]
  },
  {
    id: 2,
    nombre: "Isidora",
    bio: "Nuestro gurú del código. Convierte los problemas en soluciones y el café en código.",
    fotosAnimacion: [
      "/isi.webp"
    ]
  },
  {
    id: 3,
    nombre: "Marcelo",
    bio: "La estratega que nos mantiene enfocados. Nada se le escapa.",
    fotosAnimacion: [
      "/marce.webp"
    ]
  },
  {
    id: 4,
    nombre: "Cristian",
    bio: "El experto en datos. Si se puede medir, David puede mejorarlo.",
    fotosAnimacion: [
      "/zoro.webp"
    ]
  },
  {
    id: 5,
    nombre: "Maximiliano",
    bio: "La voz de nuestros usuarios. Se asegura de que todo lo que hacemos tenga sentido.",
    fotosAnimacion: [
      "/maxi.webp"
    ]
  }
];

// --- Componente ---
const Nosotros = () => {
  const sectionRef = useRef(null);
  const memberRefs = useRef([]);
  memberRefs.current = [];

  const addToRefs = (el) => {
    if (el && !memberRefs.current.includes(el)) {
      memberRefs.current.push(el);
    }
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      // --- Lógica Responsive con matchMedia ---
      ScrollTrigger.matchMedia({
        
        // --- Escritorio (Desktop) ---
        "(min-width: 769px)": () => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              pin: true,
              pinSpacing: true,
              anticipatePin: 1,
              scrub: 1,
              start: "top top",
              // SOLUCIÓN AL BUG: Cálculo de 'end' dinámico.
              // Proporciona 900px de "espacio de scroll" por cada miembro.
              // Esto asegura que el 'end' sea proporcional al contenido.
              end: () => "+=" + (memberRefs.current.length * 900), 
            }
          });

          // Estado inicial de las barras y nombres
          memberRefs.current.forEach((memberEl) => {
            const nombreEl = memberEl.querySelector(".miembro-nombre");
            const photoDiv = memberEl.querySelector(".miembro-foto-flipbook");
            
            // Estado inicial: barra visible pero imagen fuera de vista (abajo)
            gsap.set(memberEl, { 
              opacity: 1,
              clearProps: "transition"
            });
            
            // Estado inicial del nombre (arriba, invisible y con movimiento)
            gsap.set(nombreEl, {
              opacity: 0,
              y: -30,
              scale: 0.8
            });
            
            // Estado inicial de la foto: fuera de vista abajo, manteniendo su tamaño
            gsap.set(photoDiv, {
              opacity: 0,
              y: "100%", // Comienza completamente abajo, fuera de vista
              scale: 1
            });
          });

          // Animación secuencial
          memberRefs.current.forEach((memberEl, index) => {
            const data = miembros[index];
            const photoDiv = memberEl.querySelector(".miembro-foto-flipbook");
            const nombreEl = memberEl.querySelector(".miembro-nombre");

            // 1. Aparición del nombre arriba (primero, con bounce)
            tl.to(nombreEl, {
              opacity: 1,
              y: 0,
              scale: 1,
              ease: "back.out(1.7)",
              duration: 0.8
            }, index * 0.4); // Espaciado entre nombres

            // 2. La imagen aparece desde abajo, como si se asomara, sin cambiar tamaño
            tl.to(photoDiv, {
              opacity: 1,
              y: 0, // Se desliza desde abajo (100%) hasta su posición final (0)
              ease: "power2.out",
              duration: 1.2,
              force3D: true,
              clearProps: "transition"
            }, "<+=0.1"); // Empieza poco después del nombre

            // 4. Animación "Cómica" (Flipbook) - más dinámica
            const flipbookTl = gsap.timeline({ repeat: 2, repeatDelay: 0.1 });
            data.fotosAnimacion.forEach((foto, i) => {
              flipbookTl.set(photoDiv, { backgroundImage: `url(${foto})` }, i * 0.15);
            });

            tl.add(flipbookTl, "<+=0.3"); // Añadir después de que la foto aparezca
          });
        },

        // --- Tablet ---
        "(min-width: 481px) and (max-width: 768px)": () => {
          // En tablet, animación simple sin pin
          memberRefs.current.forEach((memberEl, index) => {
            const nombreEl = memberEl.querySelector(".miembro-nombre");
            const photoDiv = memberEl.querySelector(".miembro-foto-flipbook");
            
            // Estado inicial
            gsap.set(memberEl, {
              opacity: 1,
              clearProps: "transition"
            });
            
            gsap.set(nombreEl, {
              opacity: 0,
              y: -20
            });
            
            // La imagen comienza fuera de vista abajo
            gsap.set(photoDiv, {
              opacity: 0,
              y: "100%"
            });
            
            // Animación al scrollear
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: memberEl,
                start: "top 85%",
                toggleActions: "play none none none"
              }
            });
            
            // La imagen aparece desde abajo, como si se asomara
            tl.to(photoDiv, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              force3D: true,
              clearProps: "transition"
            })
            .to(nombreEl, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power2.out"
            }, "-=0.4");
          });
        },

        // --- Móvil (Mobile) ---
        "(max-width: 480px)": () => {
          // En móvil, animación simple sin pin
          memberRefs.current.forEach((memberEl, index) => {
            const nombreEl = memberEl.querySelector(".miembro-nombre");
            const photoDiv = memberEl.querySelector(".miembro-foto-flipbook");
            
            // Estado inicial
            gsap.set(memberEl, {
              opacity: 1,
              clearProps: "transition"
            });
            
            gsap.set(nombreEl, {
              opacity: 0,
              y: -20
            });
            
            // La imagen comienza fuera de vista abajo
            gsap.set(photoDiv, {
              opacity: 0,
              y: "100%"
            });
            
            // Animación al scrollear
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: memberEl,
                start: "top 85%",
                toggleActions: "play none none none"
              }
            });
            
            // La imagen aparece desde abajo, como si se asomara
            tl.to(photoDiv, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              force3D: true,
              clearProps: "transition"
            })
            .to(nombreEl, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power2.out"
            }, "-=0.4");
          });
        }
        
      }); // Fin de matchMedia

    }, sectionRef); // Scope del contexto
    
    // Limpieza
    return () => ctx.revert();
  }, []);

  return (
    <section className="nosotros-section" ref={sectionRef}>
      
      <div className="nosotros-titulos">
        <h3>Además...</h3>
        <h2>Somos familia</h2>
      </div>

      <div className="nosotros-wrapper">
        {miembros.map((miembro) => (
          <div
            key={miembro.id}
            className="miembro-barra"
            ref={addToRefs}
          >
            <span className="miembro-nombre">{miembro.nombre}</span>
            <div 
              className="miembro-foto-flipbook"
              style={{ backgroundImage: `url(${miembro.fotosAnimacion[0]})` }}
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Nosotros;