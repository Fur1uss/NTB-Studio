"use client";

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FormularioContacto from "@/components/ui/formularioContacto/FormularioContacto";
import "./Contacto.css";

// Registrar plugins
gsap.registerPlugin(ScrollTrigger);

const Contacto = () => {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top top",
                end: "+=150vh",
                pin: true,
                pinSpacing: true,
                anticipatePin: 1
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="contacto-section">
            <div className="contacto-decorative-stars">
                <div className="contacto-star contacto-star-1">
                    <img src="/star.webp" alt="Decorative star" />
                </div>
                <div className="contacto-star contacto-star-2">
                    <img src="/star.webp" alt="Decorative star" />
                </div>
                <div className="contacto-star contacto-star-3">
                    <img src="/star.webp" alt="Decorative star" />
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