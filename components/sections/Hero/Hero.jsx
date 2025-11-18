"use client";

import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./Hero.css"

//Componentes
import Lanyard from "@/components/ui/lanyard/Lanyard"
import Button from "@/components/ui/button/Button"
import InfiniteScrollPhrases from "@/components/ui/textCarousel/TextCarousel"
import BubbleMenu from "@/components/ui/bubbleNav/BubbleNav"

// Registrar plugins
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const headerRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: headerRef.current,
                start: "top top",
                end: "+=150vh",
                pin: true,
                pinSpacing: true,
                anticipatePin: 1
            });
        }, headerRef);

        return () => ctx.revert();
    }, []);
    
    const items = [
  {
    label: 'Nosotros',
    href: '#',
    ariaLabel: 'Nosotros',
    rotation: -8,
    hoverStyles: { bgColor: '#3b82f6', textColor: '#ffffff' }
  },
  {
    label: 'Valor',
    href: '#',
    ariaLabel: 'Valor',
    rotation: 8,
    hoverStyles: { bgColor: '#10b981', textColor: '#ffffff' }
  },
  {
    label: 'Contacto',
    href: '#',
    ariaLabel: 'Projects',
    rotation: 8,
    hoverStyles: { bgColor: '#f59e0b', textColor: '#ffffff' }
  },
  {
    label: 'Proyectos',
    href: '#',
    ariaLabel: 'Proyectos',
    rotation: 8,
    hoverStyles: { bgColor: '#ef4444', textColor: '#ffffff' }
  },
  {
    label: 'Servicios',
    href: '#',
    ariaLabel: 'Servicios',
    rotation: -8,
    hoverStyles: { bgColor: '#8b5cf6', textColor: '#ffffff' }
  }
];

    return (
        <header ref={headerRef}>
            <BubbleMenu
                items={items}
                menuAriaLabel="Toggle navigation"
                menuBg="#ffffff"
                menuContentColor="#111111"
                useFixedPosition={true}
                animationEase="back.out(1.5)"
                animationDuration={0.5}
                staggerDelay={0.12}
            />
            
            <div className="header-lanyard-container">
                <Lanyard overlay sceneOffset={[2, .5, 0]} position={[0, 0, 10]} gravity={[0, -40, 0]} />
            </div>
            <div className="header-container">

                <div className="header-interative-container">
                    <div>
                        <img src="./NTBLogo.svg" alt="" />
                        <h1>Conectamos ideas mientras <br /> generamos innovación</h1>
                    </div>
                    <Button>Explorar soluciones</Button>
                </div>

            </div>
            
            <div className="header-text-carrousel">
                <InfiniteScrollPhrases />
            </div>
        </header>
    )

}

export default Hero