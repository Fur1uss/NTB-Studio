"use client";

import React, { useLayoutEffect, useRef } from 'react';
import "./Hero.css"

//Componentes
import Lanyard from "@/components/ui/lanyard/Lanyard"
import Button from "@/components/ui/button/Button"
import InfiniteScrollPhrases from "@/components/ui/textCarousel/TextCarousel"
import BackgroundV4 from "@/components/ui/background-v4/BackgroundV4"

const Hero = () => {
    const headerRef = useRef(null);

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
            
            // Esperar a que el DOM esté listo y SmoothScroll haya inicializado
            await new Promise(resolve => {
                if (document.readyState === 'complete') {
                    // Esperar un frame más para asegurar que SmoothScroll esté listo
                    requestAnimationFrame(() => requestAnimationFrame(resolve));
                } else {
                    window.addEventListener('load', () => {
                        requestAnimationFrame(() => requestAnimationFrame(resolve));
                    }, { once: true });
                }
            });
            
            gsapContext = gsap.context(() => {
                ScrollTrigger.create({
                    trigger: headerRef.current,
                    start: "top top",
                    end: "+=150vh",
                    pin: true,
                    pinSpacing: true,
                    anticipatePin: 1
                });
            }, headerRef);
        };
        
        // Inicializar inmediatamente, pero esperar a que SmoothScroll esté listo
        initAnimations();
        
        return () => {
            if (gsapContext) {
                gsapContext.revert();
            }
        };
    }, []);

    const handleExploreClick = async (e) => {
        e.preventDefault();
        const targetElement = document.getElementById('servicios');
        
        if (targetElement) {
            // Dynamic import de ScrollTrigger para el scroll
            const scrollTriggerModule = await import('gsap/ScrollTrigger');
            const ScrollTrigger = scrollTriggerModule.ScrollTrigger;
            
            // Buscar el ScrollTrigger asociado a esta sección o sus hijos
            const triggers = ScrollTrigger.getAll();
            let targetTrigger = null;
            
            // Buscar el trigger que está dentro del elemento target o en sus hijos
            triggers.forEach(trigger => {
                const triggerElement = trigger.trigger;
                if (triggerElement) {
                    // Verificar si el trigger está dentro del elemento target
                    if (targetElement.contains(triggerElement) || 
                        triggerElement === targetElement ||
                        (triggerElement.closest && triggerElement.closest('#servicios'))) {
                        // Verificar si tiene pin activo
                        if (trigger.pin) {
                            targetTrigger = trigger;
                        }
                    }
                }
            });
            
            // Si hay un ScrollTrigger con pin, calcular el offset
            if (targetTrigger) {
                // Obtener los valores de start y end del trigger
                const start = typeof targetTrigger.start === 'function' 
                    ? targetTrigger.start() 
                    : (typeof targetTrigger.start === 'number' ? targetTrigger.start : window.scrollY);
                const end = typeof targetTrigger.end === 'function' 
                    ? targetTrigger.end() 
                    : (typeof targetTrigger.end === 'number' ? targetTrigger.end : window.scrollY);
                
                const pinDuration = Math.max(0, end - start);
                
                // Si la duración es significativa (más de 100px), usar offset
                if (pinDuration > 100) {
                    // Scroll a la posición después del pin
                    const targetPosition = targetElement.offsetTop + pinDuration;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                } else {
                    // Si la duración es pequeña, scroll normal
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            } else {
                // Si no hay pin, scroll normal
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    };

    return (
        <header ref={headerRef}>
            <BackgroundV4 />
            <div className="header-lanyard-container">
                <Lanyard overlay sceneOffset={[2, .5, 0]} position={[0, 0, 10]} gravity={[0, -40, 0]} />
            </div>
            <div className="header-container">

                <div className="header-interative-container">
                    <div>
                        <img src="./NTBLogo.svg" alt="NTB Studio - Logo de la agencia de desarrollo web e innovación digital" />
                        <h1>Conectamos ideas mientras <br /> generamos innovación</h1>
                    </div>
                    <Button onClick={handleExploreClick}>Explorar soluciones</Button>
                </div>

            </div>
            
            <div className="header-text-carrousel">
                <InfiniteScrollPhrases />
            </div>
        </header>
    )

}

export default Hero