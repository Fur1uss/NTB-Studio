"use client";

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CurvedLoop from "@/components/ui/curvedLoop/CurvedLoop";
import Button from "@/components/ui/button/Button";
import "./Footer.css";

const Footer = () => {
    const handleScrollToSection = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
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
                        (triggerElement.closest && triggerElement.closest(`#${targetId}`))) {
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

    const handleContactClick = (e) => {
        e.preventDefault();
        handleScrollToSection(e, 'contacto');
    };

    return (
        <footer className="footer-section">
            <div className="footer-top-section">
                <CurvedLoop 
                    marqueeText="CREANDO INNOVACION ✦ CONECTANDO IDEAS ✦ CREANDO INNOVACION ✦ CONECTANDO IDEAS"
                    speed={1}
                    curveAmount={100}
                    direction="left"
                    interactive={false}
                    className="footer-curved-text"
                />
            </div>
            <div className="footer-bottom-section">
                <div className="footer-top-content">
                    <div className="footer-main-wrapper">
                        <div className="footer-logo-wrapper">
                            <div className="footer-logo-section">
                                <img src="/ntbwhite.webp" alt="NTB Logo" className="footer-logo" width={200} height={80} loading="lazy" />
                            </div>
                        </div>
                        <div className="footer-content">
                            <div className="footer-column">
                                <h3 className="footer-column-title">Explorar</h3>
                                <ul className="footer-links">
                                    <li><a href="#nosotros" onClick={(e) => handleScrollToSection(e, 'nosotros')}>Nosotros</a></li>
                                    <li><a href="#valor" onClick={(e) => handleScrollToSection(e, 'valor')}>Valor</a></li>
                                    <li><a href="#proyectos" onClick={(e) => handleScrollToSection(e, 'proyectos')}>Proyectos</a></li>
                                    <li><a href="#servicios" onClick={(e) => handleScrollToSection(e, 'servicios')}>Servicios</a></li>
                                    <li><a href="#contacto" onClick={(e) => handleScrollToSection(e, 'contacto')}>Contacto</a></li>
                                </ul>
                            </div>
                            <div className="footer-column">
                                <h3 className="footer-column-title">Contacto</h3>
                                <div className="footer-contact-item">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#000000"/>
                                    </svg>
                                    <span>contacto@ntb.cl</span>
                                </div>
                                <p className="footer-slogan">Somos el puente hacia nuevas tecnologias. No dudes en llamarnos.</p>
                                <Button className="footer-contact-button" onClick={handleContactClick}>Contactar</Button>
                            </div>
                            <div className="footer-column">
                                <h3 className="footer-column-title">Redes</h3>
                                <a href="https://www.instagram.com/ntb_cl/" target="_blank" rel="noopener noreferrer" className="footer-social-item">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="#000000"/>
                                    </svg>
                                    <span>ntb_cl</span>
                                </a>
                                <a href="https://www.tiktok.com/@ntb_cl?lang=es" target="_blank" rel="noopener noreferrer" className="footer-social-item">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.65 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="#000000"/>
                                    </svg>
                                    <span>ntb_cl</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;