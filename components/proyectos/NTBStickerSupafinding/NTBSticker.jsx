"use client";

import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./NTBSticker.css"

// Registrar plugins
gsap.registerPlugin(ScrollTrigger);

const NTBsticker = () => {
    const sectionRef = useRef(null);
    const overlayRef = useRef(null);
    const orbeRef = useRef(null);
    const contentRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Estado inicial: overlay blanco visible, orbe invisible y contenido invisible
            gsap.set(overlayRef.current, {
                opacity: 1
            });
            
            gsap.set(orbeRef.current, {
                opacity: 0,
                scale: 0.5
            });

            gsap.set(contentRef.current.children, {
                opacity: 0,
                y: 50
            });

            // Crear timeline con ScrollTrigger
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=1200", // La sección se queda fija durante 1200px de scroll
                    scrub: 1,
                    pin: true,
                    pinSpacing: true,
                    anticipatePin: 1,
                    toggleActions: "play none none reverse"
                }
            });

            // Animación de descubrimiento: overlay se desvanece revelando el fondo negro
            tl.to(overlayRef.current, {
                opacity: 0,
                duration: 1.8,
                ease: "power2.inOut"
            })
            .to(orbeRef.current, {
                opacity: 1,
                scale: 1,
                duration: 1.5,
                ease: "power3.out"
            }, "-=1.2")
            .to(contentRef.current.children, {
                opacity: 1,
                y: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: "power3.out"
            }, "-=1");

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return(
        <section ref={sectionRef} className="NTBsticker-section-container">
            <div ref={overlayRef} className="discovery-overlay"></div>
            <div ref={orbeRef} className="orbe-verde"></div>
            <div ref={contentRef} className="NTBsticker-content">
                <h2 style={{color: 'white', fontSize: '3rem', marginBottom: '2rem'}}>
                    NTB Sticker Supafinding
                </h2>
                <p style={{color: 'white', fontSize: '1.2rem', textAlign: 'center', maxWidth: '600px'}}>
                    Esta es la sección NTBSticker. Proyecto de stickers digitales ganador del segundo lugar mundial.
                </p>
            </div>
        </section>
    )
}

export default NTBsticker;