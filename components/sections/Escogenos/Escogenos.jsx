"use client";

import { useState, useLayoutEffect, useRef } from "react";
import "./Escogenos.css";

const Escogenos = () => {
    const [activeBadge, setActiveBadge] = useState(null);
    const sectionRef = useRef(null);

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
        
        initAnimations();
        
        return () => {
            if (gsapContext) {
                gsapContext.revert();
            }
        };
    }, []);

    const handleBadgeClick = (index) => {
        setActiveBadge(activeBadge === index ? null : index);
    };
    return (
        <section ref={sectionRef} className="escogenos-section">

            <div className="escogenos-texts-container">
                <h2>Somos el <b>puente</b> que conecta <br />nuevas tecnologías</h2>
                <p>Trabajamos con pasión, diseño e innovación para transformar ideas en <br /> experiencias digitales únicas.</p>
            </div>
            <div className="escogenos-images-container">
                <img className="escogenos-image-01" src="./photo-us01.webp" alt="Equipo de trabajo de NTB Studio desarrollando proyectos digitales" />
                <img className="escogenos-image-02" src="./photo-us02.webp" alt="Equipo NTB Studio colaborando en innovación y desarrollo web" />
            </div>
            <div className="escogenos-badges-container">
                <div 
                    className={`badge ${activeBadge === 0 ? 'active' : ''}`}
                    onClick={() => handleBadgeClick(0)}
                >
                    <span className="badge-emoji">🔥</span>
                    <span className="badge-text">Pasión</span>
                </div>
                <div 
                    className={`badge ${activeBadge === 1 ? 'active' : ''}`}
                    onClick={() => handleBadgeClick(1)}
                >
                    <span className="badge-emoji">🌊</span>
                    <span className="badge-text">Impacto</span>
                </div>
                <div 
                    className={`badge ${activeBadge === 2 ? 'active' : ''}`}
                    onClick={() => handleBadgeClick(2)}
                >
                    <span className="badge-emoji">🌱</span>
                    <span className="badge-text">Crecimiento</span>
                </div>
                <div 
                    className={`badge ${activeBadge === 3 ? 'active' : ''}`}
                    onClick={() => handleBadgeClick(3)}
                >
                    <span className="badge-emoji">🎯</span>
                    <span className="badge-text">Propósito</span>
                </div>
                <div 
                    className={`badge ${activeBadge === 4 ? 'active' : ''}`}
                    onClick={() => handleBadgeClick(4)}
                >
                    <span className="badge-emoji">🤝</span>
                    <span className="badge-text">Cercanía</span>
                </div>
            </div>

        </section>
    )
}

export default Escogenos;