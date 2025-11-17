"use client";

import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { League_Gothic } from 'next/font/google';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment } from '@react-three/drei';
import * as THREE from 'three';
import "./NTBSticker.css"

// Importar fuente League Gothic desde Google Fonts
const leagueGothic = League_Gothic({
    subsets: ["latin"],
    weight: ["400"],
    display: "swap",
});

// Registrar plugins
gsap.registerPlugin(ScrollTrigger);

// Preload del modelo GLB
useGLTF.preload("/models/supabase_coin.glb");

// Componente del modelo 3D de la moneda
function CoinModel() {
    const { scene } = useGLTF("/models/supabase_coin.glb");
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

const NTBsticker = () => {
    const sectionRef = useRef(null);
    const overlayRef = useRef(null);
    const orbeRef = useRef(null);
    const contentRef = useRef(null);
    const videoRef = useRef(null);
    const coinContainerRef = useRef(null);

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

            // Configurar estado inicial del video
            if (videoRef.current) {
                gsap.set(videoRef.current, {
                    opacity: 0,
                    scale: 0.9
                });
            }

            // Configurar estado inicial de la moneda
            if (coinContainerRef.current) {
                gsap.set(coinContainerRef.current, {
                    opacity: 0,
                    scale: 0.5,
                    rotation: -15
                });
            }

            // Control de visibilidad de la moneda (sin animaciones)
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top bottom",
                end: "bottom top",
                onEnter: () => {
                    // Mostrar instantáneamente sin animación cuando la sección entra al viewport
                    gsap.set(coinContainerRef.current, {
                        opacity: 1,
                        scale: 1,
                        rotation: 0
                    });
                },
                onLeave: () => {
                    // Ocultar instantáneamente sin animación cuando la sección sale del viewport (hacia abajo)
                    gsap.set(coinContainerRef.current, {
                        opacity: 0
                    });
                },
                onEnterBack: () => {
                    // Mostrar instantáneamente sin animación cuando vuelve a entrar (scroll hacia arriba)
                    gsap.set(coinContainerRef.current, {
                        opacity: 1,
                        scale: 1,
                        rotation: 0
                    });
                },
                onLeaveBack: () => {
                    // Ocultar instantáneamente sin animación cuando sale hacia arriba
                    gsap.set(coinContainerRef.current, {
                        opacity: 0
                    });
                }
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
            }, "-=1")
            .to(videoRef.current, {
                opacity: 1,
                scale: 1,
                duration: 1.2,
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

                <div className="NTBsticker-content-text">
                    <div className="NTBsticker-content-text-project">
                        <p className="proyecto-font">Proyecto</p>                    
                        <h2 className={leagueGothic.className}><b>NTB</b> STICKER SUPAFINDING</h2>
                        <p className="NTBsticker-content-text-project-description">Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                    </div>

                    <div className="NTBsticker-content-text-video">
                        <video
                            ref={videoRef}
                            className="NTBsticker-video"
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="metadata"
                        >
                            <source src="/videos/ntbsticker.webm" type="video/webm" />
                            <source src="/videos/ntbsticker.mp4" type="video/mp4" />
                            Tu navegador no soporta la reproducción de video.
                        </video>
                    </div>
                </div>

                <div className="NTBsticker-content-image" ref={coinContainerRef}>
                    <svg className="coin-label" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid meet">
                        <path
                            id="curved-path"
                            d="M 50 100 Q 200 20, 350 100"
                            fill="none"
                        />
                        <text fontSize="32" fontFamily="'Just Me Again Down Here', cursive">
                            <textPath href="#curved-path" startOffset="0%">
                                <tspan fill="#FFFFFF">World </tspan>
                                <tspan fill="#CCE320">Second </tspan>
                                <tspan fill="#FFFFFF">Place!</tspan>
                            </textPath>
                        </text>
                    </svg>
                    <Canvas
                        camera={{ position: [0, 0, 9], fov: 45 }}
                        gl={{ alpha: true, antialias: true }}
                        className="coin-canvas"
                    >
                        <ambientLight intensity={0.6} />
                        <directionalLight position={[5, 5, 5]} intensity={1.2} />
                        <directionalLight position={[-5, -5, -5]} intensity={0.4} />
                        <CoinModel />
                        <Environment preset="sunset" />
                    </Canvas>
                </div>
            </div>
        </section>
    )
}

export default NTBsticker;