"use client";

import React, { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./Nosotros.css";

// Registrar plugins
gsap.registerPlugin(ScrollTrigger);

// --- Datos ---
const miembros = [
  {
    id: 1,
    nombre: "Cesar",
    bio: "La mente creativa detrás de nuestros diseños. Fanática del café y los pixeles perfectos.",
    fotosAnimacion: [
      "/ruta/placeholder/ana-1.jpg",
      "/ruta/placeholder/ana-2.jpg",
      "/ruta/placeholder/ana-3.jpg"
    ]
  },
  {
    id: 2,
    nombre: "Isidora",
    bio: "Nuestro gurú del código. Convierte los problemas en soluciones y el café en código.",
    fotosAnimacion: [
      "/ruta/placeholder/bruno-1.jpg",
      "/ruta/placeholder/bruno-2.jpg",
      "/ruta/placeholder/bruno-3.jpg"
    ]
  },
  {
    id: 3,
    nombre: "Marcelo",
    bio: "La estratega que nos mantiene enfocados. Nada se le escapa.",
    fotosAnimacion: [
      "/ruta/placeholder/carla-1.jpg",
      "/ruta/placeholder/carla-2.jpg",
      "/ruta/placeholder/carla-3.jpg"
    ]
  },
  {
    id: 4,
    nombre: "Cristian",
    bio: "El experto en datos. Si se puede medir, David puede mejorarlo.",
    fotosAnimacion: [
      "/ruta/placeholder/david-1.jpg",
      "/ruta/placeholder/david-2.jpg",
      "/ruta/placeholder/david-3.jpg"
    ]
  },
  {
    id: 5,
    nombre: "Maximiliano",
    bio: "La voz de nuestros usuarios. Se asegura de que todo lo que hacemos tenga sentido.",
    fotosAnimacion: [
      "/ruta/placeholder/elena-1.jpg",
      "/ruta/placeholder/elena-2.jpg",
      "/ruta/placeholder/elena-3.jpg"
    ]
  }
];

// --- Componente ---
const Nosotros = () => {
  const [miembroSeleccionado, setMiembroSeleccionado] = useState(null);
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
            
            // Estado inicial: barra completamente colapsada desde abajo
            // Usamos scaleY para un crecimiento visible desde abajo
            gsap.set(memberEl, { 
              scaleY: 0,
              opacity: 1, // Visible para ver el crecimiento
              transformOrigin: 'bottom center'
            });
            
            // Estado inicial del nombre (arriba, invisible y con movimiento)
            gsap.set(nombreEl, {
              opacity: 0,
              y: -30,
              scale: 0.8
            });
            
            // Estado inicial de la foto
            gsap.set(photoDiv, {
              opacity: 0,
              scale: 0.9
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

            // 2. Crecimiento de la barra desde abajo hacia arriba (scaleY visible)
            tl.to(memberEl, {
              scaleY: 1,
              ease: "power2.out",
              duration: 1.2
            }, "<+=0.1"); // Empieza poco después del nombre

            // 3. Aparición de la foto dentro de la barra (mientras crece)
            tl.to(photoDiv, {
              opacity: 1,
              scale: 1,
              ease: "power2.out",
              duration: 0.8
            }, "<+=0.3"); // Aparece mientras la barra crece

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
              opacity: 0,
              y: 30,
              scaleY: 0,
              transformOrigin: 'bottom center'
            });
            
            gsap.set(nombreEl, {
              opacity: 0,
              y: -20
            });
            
            gsap.set(photoDiv, {
              opacity: 0
            });
            
            // Animación al scrollear
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: memberEl,
                start: "top 85%",
                toggleActions: "play none none none"
              }
            });
            
            tl.to(memberEl, {
              opacity: 1,
              y: 0,
              scaleY: 1,
              duration: 0.8,
              ease: "power2.out"
            })
            .to(nombreEl, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power2.out"
            }, "-=0.4")
            .to(photoDiv, {
              opacity: 1,
              duration: 0.5,
              ease: "power2.out"
            }, "-=0.3");
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
              opacity: 0,
              y: 30,
              scaleY: 0,
              transformOrigin: 'bottom center'
            });
            
            gsap.set(nombreEl, {
              opacity: 0,
              y: -20
            });
            
            gsap.set(photoDiv, {
              opacity: 0
            });
            
            // Animación al scrollear
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: memberEl,
                start: "top 85%",
                toggleActions: "play none none none"
              }
            });
            
            tl.to(memberEl, {
              opacity: 1,
              y: 0,
              scaleY: 1,
              duration: 0.8,
              ease: "power2.out"
            })
            .to(nombreEl, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power2.out"
            }, "-=0.4")
            .to(photoDiv, {
              opacity: 1,
              duration: 0.5,
              ease: "power2.out"
            }, "-=0.3");
          });
        }
        
      }); // Fin de matchMedia

    }, sectionRef); // Scope del contexto
    
    // Limpieza
    return () => ctx.revert();
  }, []);

  // --- Manejadores de Modal ---
  const abrirModal = (miembro) => setMiembroSeleccionado(miembro);
  const cerrarModal = () => setMiembroSeleccionado(null);

  return (
    <section className="nosotros-section" ref={sectionRef}>
      
      <div className="nosotros-titulos">
        <h3>Ademas...</h3>
        <h2>Somos familia</h2>
      </div>

      <div className="nosotros-wrapper">
        {miembros.map((miembro) => (
          <div
            key={miembro.id}
            className="miembro-barra"
            ref={addToRefs}
            onClick={() => abrirModal(miembro)}
          >
            <span className="miembro-nombre">{miembro.nombre}</span>
            <div 
              className="miembro-foto-flipbook"
              style={{ backgroundImage: `url(${miembro.fotosAnimacion[0]})` }}
            ></div>
          </div>
        ))}
      </div>

      {/* --- Modal --- */}
      {miembroSeleccionado && (
        <div className="modal-overlay" onClick={cerrarModal}>
          <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
            <button className="modal-boton-cerrar" onClick={cerrarModal}>
              &times;
            </button>
            <div 
              className="modal-imagen"
              style={{ backgroundImage: `url(${miembroSeleccionado.fotosAnimacion[0]})` }}
            ></div>
            <h2>{miembroSeleccionado.nombre}</h2>
            <p>{miembroSeleccionado.bio}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Nosotros;