"use client";

import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { League_Gothic } from 'next/font/google';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment } from '@react-three/drei';
import * as THREE from 'three';
import "./NTBeyonder.css";

// Importar fuente League Gothic desde Google Fonts
const leagueGothic = League_Gothic({
    subsets: ["latin"],
    weight: ["400"],
    display: "swap",
});

// Registrar plugins
gsap.registerPlugin(ScrollTrigger);

// Preload del modelo GLB
useGLTF.preload("/models/nasa.glb");

// Componente del modelo 3D de NASA
function NASAModel() {
    const { scene } = useGLTF("/models/nasa.glb");
    const modelRef = useRef();
    
    // Rotación suave continua
    useFrame((state, delta) => {
        if (modelRef.current) {
            modelRef.current.rotation.y += delta * 0.3; // Rotación lenta
        }
    });
    
    return (
        <primitive 
            ref={modelRef}
            object={scene} 
            scale={3.0}
            position={[2.5, .1, 0]}
        />
    );
}

const NTBeyonder = () => {
    const sectionRef = useRef(null);
    const overlayRef = useRef(null);
    const contentRef = useRef(null);
    const orbeRef = useRef(null);
    const particlesRef = useRef(null);
    const videoRef = useRef(null);
    const astronautRef = useRef(null);
    const nasaModelRef = useRef(null);
    const nasaBadgeRef = useRef(null);
    const [stars, setStars] = useState([]);

    // Generar estrellas solo en el cliente para evitar problemas de hidratación
    useEffect(() => {
        setStars(
            [...Array(50)].map(() => ({
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
            }))
        );
    }, []);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Estado inicial: overlay negro visible, orbe visible y contenido invisible
            gsap.set(overlayRef.current, {
                opacity: 1
            });

            gsap.set(orbeRef.current, {
                opacity: 1,
                scale: 1
            });

            gsap.set(contentRef.current.children, {
                opacity: 0,
                y: 50
            });

            gsap.set(particlesRef.current, {
                opacity: 0
            });

            // Configurar estado inicial del video
            if (videoRef.current) {
                gsap.set(videoRef.current, {
                    opacity: 0,
                    scale: 0.9
                });
            }

            // Configurar estado inicial del astronauta
            if (astronautRef.current) {
                gsap.set(astronautRef.current, {
                    opacity: 0
                });
            }

            // Configurar estado inicial del modelo 3D de NASA
            if (nasaModelRef.current) {
                gsap.set(nasaModelRef.current, {
                    opacity: 0,
                    scale: 0.5,
                    rotation: -15
                });
            }

            // Configurar estado inicial del badge de texto de NASA
            if (nasaBadgeRef.current) {
                gsap.set(nasaBadgeRef.current, {
                    opacity: 0,
                    y: 30
                });
            }

            // Crear timeline con ScrollTrigger
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=1200",
                    scrub: 1,
                    pin: true,
                    pinSpacing: true,
                    anticipatePin: 1,
                    toggleActions: "play none none reverse"
                }
            });

            // Animación de descubrimiento: overlay se desvanece primero, luego orbe desaparece cuando aparecen las estrellas
            tl.to(overlayRef.current, {
                opacity: 0,
                duration: 1.8,
                ease: "power2.inOut"
            })
            .to(particlesRef.current, {
                opacity: 1,
                duration: 1.5,
                ease: "power2.out"
            }, "-=1.5")
            .to(orbeRef.current, {
                opacity: 0,
                duration: 0.4,
                ease: "power2.in",
                force3D: true
            }, "-=1.5")
            .to(contentRef.current.children, {
                opacity: 1,
                y: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: "power3.out"
            }, "-=1")
            .to(videoRef.current, {
                opacity: 1,
                scale: 1,
                duration: 1.2,
                ease: "power3.out"
            }, "-=1")
            .to(astronautRef.current, {
                opacity: 1,
                duration: 1.2,
                ease: "power3.out"
            }, "-=1")
            .to(nasaModelRef.current, {
                opacity: 1,
                scale: 1,
                rotation: 0,
                duration: 1.2,
                ease: "power3.out"
            }, "-=1")
            .to(nasaBadgeRef.current, {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: "power3.out"
            }, "-=1");

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="NTBeyonder-section-container">
            <div ref={overlayRef} className="NTBeyonder-discovery-overlay"></div>
            <div ref={orbeRef} className="NTBeyonder-orbe-verde"></div>
            <div ref={particlesRef} className="NTBeyonder-stars-container">
                {stars.map((star, i) => (
                    <div key={i} className="NTBeyonder-star" style={{
                        left: star.left,
                        top: star.top,
                        animationDelay: star.animationDelay,
                        animationDuration: star.animationDuration
                    }}></div>
                ))}
            </div>
            <div ref={astronautRef} className="NTBeyonder-astronaut">
                <img 
                    src="/astronaut.webp" 
                    alt="Astronauta flotando representando innovación y exploración espacial del proyecto NTBeyonder" 
                    className="NTBeyonder-astronaut-image"
                />
            </div>
            <div ref={contentRef} className="NTBeyonder-content">
                <div className="NTBeyonder-content-text">
                    <div className="NTBeyonder-content-text-project">
                        <p className="proyecto-font">Proyecto</p>                    
                        <h2 className={leagueGothic.className}><b>NTB</b>eyonder</h2>
                        <p className="NTBeyonder-content-text-project-description">NTBeyonder, busca acercar los enormes conjuntos de datos visuales de la NASA a todas las personas mediante una plataforma interactiva que combina imágenes satelitales, exploración 3D y un asistente con inteligencia artificial que permite “hablar” con los planetas. </p>
                    </div>

                    <div className="NTBeyonder-content-text-image">
                        <video
                            ref={videoRef}
                            className="NTBeyonder-video"
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="metadata"
                        >
                            <source src="/videos/ntbeyonder.webm" type="video/webm" />
                            Tu navegador no soporta la reproducción de video.
                        </video>
                    </div>
                </div>

                <div className="NTBeyonder-content-image" ref={nasaModelRef}>
                    <Canvas
                        camera={{ position: [0, 0, 300], fov: 45 }}
                        gl={{ alpha: true, antialias: true }}
                        className="NTBeyonder-nasa-canvas"
                    >
                        <ambientLight intensity={0.6} />
                        <directionalLight position={[5, 5, 5]} intensity={1.2} />
                        <directionalLight position={[-5, -5, -5]} intensity={0.4} />
                        <NASAModel />
                        <Environment preset="sunset" />
                    </Canvas>
                    <div className="NTBeyonder-nasa-logo">
                        <div ref={nasaBadgeRef} className="NTBeyonder-nasa-badge">
                            <p className="NTBeyonder-first-place">PRIMER LUGAR</p>
                            <p className="NTBeyonder-chile">CHILE 2025</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NTBeyonder;