"use client";

import { useLayoutEffect, useRef } from 'react';
import FormularioContacto from "@/components/ui/formularioContacto/FormularioContacto";
import "./Contacto.css";

const Contacto = () => {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        // Dynamic import de GSAP para evitar render blocking
        let gsapContext;
        
        const initAnimations = async () => {
            const [gsapModule, scrollTriggerModule] = await Promise.all([
                import('gsap'),
                import('gsap/ScrollTrigger')
            ]);
            
            const gsap = gsapModule.gsap;
            const ScrollTrigger = scrollTriggerModule.ScrollTrigger;
            
            // Registrar plugin
            gsap.registerPlugin(ScrollTrigger);
            
            gsapContext = gsap.context(() => {
                ScrollTrigger.create({
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=150vh",
                    pin: true,
                    pinSpacing: true,
                    anticipatePin: 1
                });
            }, sectionRef);
        };
        
        // Defer animaciones hasta después del LCP
        const timeoutId = setTimeout(() => {
            initAnimations();
        }, 200);
        
        return () => {
            clearTimeout(timeoutId);
            if (gsapContext) {
                gsapContext.revert();
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className="contacto-section">
            <div className="contacto-decorative-stars">
                <div className="contacto-star contacto-star-1">
                    <img src="/star.webp" alt="Decorative star" width={200} height={200} loading="lazy" />
                </div>
                <div className="contacto-star contacto-star-2">
                    <img src="/star.webp" alt="Decorative star" width={200} height={200} loading="lazy" />
                </div>
                <div className="contacto-star contacto-star-3">
                    <img src="/star.webp" alt="Decorative star" width={200} height={200} loading="lazy" />
                </div>
            </div>
            <div className="contacto-vertical-text">
                <span>C</span>
                <span>O</span>
                <span>N</span>
                <span>T</span>
                <span>A</span>
                <span>C</span>
                <span>T</span>
                <span>O</span>
            </div>
            <div className="contacto-form-wrapper">
                <FormularioContacto />
            </div>
        </section>
    )
}

export default Contacto;