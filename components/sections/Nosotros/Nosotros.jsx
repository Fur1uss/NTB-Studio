"use client";

import React, { useLayoutEffect, useRef } from 'react';
import "./Nosotros.css";

// --- Datos ---
const miembros = [
  {
    id: 1,
    nombre: "César",
    bio: "La mente creativa detrás de nuestros diseños. Fanática del café y los pixeles perfectos.",
    fotosAnimacion: [
      "/cesarpolaroid.webp"
    ],
    rotation: -8 // Rotación en grados
  },
  {
    id: 2,
    nombre: "Isidora",
    bio: "Nuestro gurú del código. Convierte los problemas en soluciones y el café en código.",
    fotosAnimacion: [
      "/isipolaroid.webp"
    ],
    rotation: 5
  },
  {
    id: 3,
    nombre: "Marcelo",
    bio: "La estratega que nos mantiene enfocados. Nada se le escapa.",
    fotosAnimacion: [
      "/marcepolaroid.webp"
    ],
    rotation: -5
  },
  {
    id: 4,
    nombre: "Maximiliano",
    bio: "La voz de nuestros usuarios. Se asegura de que todo lo que hacemos tenga sentido.",
    fotosAnimacion: [
      "/maxipolaroid.webp"
    ],
    rotation: 7
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
    let gsapContext;
    
    const initAnimations = async () => {
      const [gsapModule, scrollTriggerModule] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger')
      ]);
      
      const gsap = gsapModule.gsap;
      const ScrollTrigger = scrollTriggerModule.ScrollTrigger;
      
      gsap.registerPlugin(ScrollTrigger);
      
      // Esperar a que SmoothScroll esté listo
      await new Promise(resolve => {
        if (document.readyState === 'complete') {
          requestAnimationFrame(() => requestAnimationFrame(resolve));
        } else {
          window.addEventListener('load', () => {
            requestAnimationFrame(() => requestAnimationFrame(resolve));
          }, { once: true });
        }
      });
      
      gsapContext = gsap.context(() => {
        
        // --- Lógica Responsive con matchMedia ---
        ScrollTrigger.matchMedia({
        
        // --- Escritorio (Desktop) ---
        "(min-width: 769px)": () => {
          // PRIMERO: Establecer el estado inicial ANTES de crear el ScrollTrigger
          // Esto evita saltos cuando la página se recarga
          memberRefs.current.forEach((memberEl, index) => {
            const nombreEl = memberEl.querySelector(".miembro-nombre");
            const photoDiv = memberEl.querySelector(".miembro-foto-flipbook");
            
            // Estado inicial: barra visible pero imagen invisible
            gsap.set(memberEl, { 
              opacity: 1,
              clearProps: "transition"
            });
            
            // Estado inicial del nombre (arriba, invisible y con movimiento)
            gsap.set(nombreEl, {
              opacity: 0,
              y: -30,
              scale: 0.8,
              immediateRender: false
            });
            
            // Estado inicial de la foto polaroid: invisible, sin deslizamiento
            const data = miembros[index];
            const rotation = data.rotation || 0;
            gsap.set(photoDiv, {
              opacity: 0,
              scale: 0.8, // Comienza más pequeña para efecto de aparición
              y: 0, // Sin movimiento vertical
              rotation: rotation, // Rotación inicial
              immediateRender: false
            });
          });

          // Esperar un frame para que el layout se estabilice
          requestAnimationFrame(() => {
            let scrollTriggerInstance;
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
                invalidateOnRefresh: true,
                // Guardar referencia del ScrollTrigger
                onInit: (self) => {
                  scrollTriggerInstance = self;
                },
                // Manejar el refresh para evitar saltos
                onRefresh: () => {
                  // Cuando ScrollTrigger se refresca, asegurar que el estado inicial se mantenga
                  if (scrollTriggerInstance && scrollTriggerInstance.progress === 0) {
                    memberRefs.current.forEach((memberEl, index) => {
                      const photoDiv = memberEl.querySelector(".miembro-foto-flipbook");
                      const nombreEl = memberEl.querySelector(".miembro-nombre");
                      const data = miembros[index];
                      const rotation = data.rotation || 0;
                      
                      gsap.set(photoDiv, {
                        opacity: 0,
                        scale: 0.8,
                        rotation: rotation
                      });
                      gsap.set(nombreEl, {
                        opacity: 0,
                        y: -30,
                        scale: 0.8
                      });
                    });
                  }
                }
              }
            });

            // Animación secuencial - polaroids aparecen una a una
            memberRefs.current.forEach((memberEl, index) => {
              const photoDiv = memberEl.querySelector(".miembro-foto-flipbook");
              const nombreEl = memberEl.querySelector(".miembro-nombre");

              // 1. Aparición del nombre arriba (primero, con bounce)
              tl.to(nombreEl, {
                opacity: 1,
                y: 0,
                scale: 1,
                ease: "back.out(1.7)",
                duration: 0.8,
                immediateRender: false
              }, index * 0.5); // Espaciado entre nombres

              // 2. La polaroid aparece con fade in y scale, sin deslizamiento
              const data = miembros[index];
              const rotation = data.rotation || 0;
              tl.to(photoDiv, {
                opacity: 1,
                scale: 1, // Escala de 0.8 a 1 para efecto de aparición
                rotation: rotation, // Mantener la rotación
                ease: "back.out(1.4)", // Efecto suave de rebote
                duration: 0.9,
                force3D: true,
                immediateRender: false,
                clearProps: "transition"
              }, "<+=0.2"); // Empieza poco después del nombre
            });
            
            // Refrescar ScrollTrigger después de que todo esté configurado
            requestAnimationFrame(() => {
              ScrollTrigger.refresh();
            });
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
            
            // La polaroid comienza invisible, sin deslizamiento
            const data = miembros[index];
            const rotation = data.rotation || 0;
            gsap.set(photoDiv, {
              opacity: 0,
              scale: 0.8,
              y: 0,
              rotation: rotation
            });
            
            // Animación al scrollear
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: memberEl,
                start: "top 85%",
                toggleActions: "play none none none"
              }
            });
            
            // La polaroid aparece con fade in y scale, sin deslizamiento
            tl.to(photoDiv, {
              opacity: 1,
              scale: 1,
              rotation: rotation,
              duration: 0.8,
              ease: "back.out(1.4)",
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
            
            // La polaroid comienza invisible, sin deslizamiento
            const data = miembros[index];
            const rotation = data.rotation || 0;
            gsap.set(photoDiv, {
              opacity: 0,
              scale: 0.8,
              y: 0,
              rotation: rotation
            });
            
            // Animación al scrollear
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: memberEl,
                start: "top 85%",
                toggleActions: "play none none none"
              }
            });
            
            // La polaroid aparece con fade in y scale, sin deslizamiento
            tl.to(photoDiv, {
              opacity: 1,
              scale: 1,
              rotation: rotation,
              duration: 0.8,
              ease: "back.out(1.4)",
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
    };
    
    initAnimations();
    
    // Limpieza
    return () => {
      if (gsapContext) {
        gsapContext.revert();
      }
    };
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
              style={{ 
                backgroundImage: `url(${miembro.fotosAnimacion[0]})`,
                transform: `rotate(${miembro.rotation || 0}deg)`
              }}
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Nosotros;