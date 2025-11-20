"use client";

import { useLayoutEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '@/components/ui/button/Button';
import "./Servicios.css";

// Registrar plugins
gsap.registerPlugin(ScrollTrigger);

// Icono de estrella verde
const StarIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#20E337"/>
    </svg>
);

// Badge con forma de estallido de estrella
const StarburstBadge = () => {
    return (
        <>
            <img 
                src="/peoplechoise.webp" 
                alt="People Choice Badge - Premio de elección popular para NTB Studio" 
                className="starburst-image"
            />
            <div className="starburst-text">
                <span className="starburst-word">PEOPLE</span>
                <span className="starburst-word">CHOISE</span>
            </div>
        </>
    );
};

const Servicios = () => {
    const router = useRouter();
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const cardsRef = useRef([]);

    const servicios = [
        {
            title: "Essential",
            price: "$250.000",
            description: "Ideal para empresas o profesionales que buscan presencia digital moderna y funcional.",
            features: [
                "Landing Page o SPA",
                "Base de datos o API",
                "Panel de administracion",
                "Hosting y despliegue",
                "Soporte técnico por 30 dias"
            ]
        },
        {
            title: "Advanced",
            price: "$550.000",
            description: "Diseñado para empresas que requieren soluciones complejas o sistemas personalizados.",
            features: [
                "Aplicaciones web completas",
                "Integración con APIs externas",
                "Base de datos escalable y segura",
                "Sistema de roles y permisos",
                "Mantenimiento técnico por 60 días"
            ]
        },
        {
            title: "Innovated",
            price: "$950.000",
            description: "Pensado para emprendedores, startups y pymes que buscan transformar una idea en un producto digital.",
            features: [
                "Asesoria tectinca a medida",
                "Diseño y desarrollo de MVP",
                "Arquitectura base escalable",
                "Prototipo interactivo o versión beta funcional",
                "Seguimiento técnico y ajustes post-lanzamiento",
                "Revisión estratégica de viabilidad y crecimiento"
            ],
            badge: "PEOPLE CHOISE"
        }
    ];

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Estado inicial: fondo negro y texto blanco
            gsap.set(sectionRef.current, {
                backgroundColor: "#000000"
            });
            gsap.set(titleRef.current, {
                color: "#ffffff"
            });
            gsap.set(cardsRef.current, {
                opacity: 0,
                y: 30
            });

            // Pin de la sección con animación integrada
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=150vh",
                    scrub: 1,
                    pin: true,
                    pinSpacing: true,
                    anticipatePin: 1
                }
            });

            tl.to(sectionRef.current, {
                backgroundColor: "#ffffff",
                duration: 2.5,
                ease: "power2.inOut"
            })
            .to(titleRef.current, {
                color: "#000000",
                duration: 2.5,
                ease: "power2.inOut"
            }, 0)
            .to(cardsRef.current, {
                opacity: 1,
                y: 0,
                duration: 2.5,
                stagger: 0.2,
                ease: "power2.inOut"
            }, 0);
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="servicios-section">
            <h2 ref={titleRef} className="servicios-title">Servicios</h2>
            <div className="servicios-cards-container">
                {servicios.map((servicio, index) => (
                    <div 
                        key={index}
                        ref={el => cardsRef.current[index] = el}
                        className="servicio-card"
                    >
                        {servicio.badge && (
                            <div className="starburst-badge-container">
                                <StarburstBadge />
                            </div>
                        )}
                        <h3 className="servicio-card-title">{servicio.title}</h3>
                        <p className="servicio-card-price">{servicio.price}</p>
                        <p className="servicio-card-description">{servicio.description}</p>
                        <ul className="servicio-card-features">
                            {servicio.features.map((feature, idx) => (
                                <li key={idx} className="servicio-feature">
                                    <StarIcon />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <Button 
                            className="servicio-card-button"
                            onClick={() => {
                                if (servicio.title === "Essential") {
                                    router.push('/services/Essential');
                                } else if (servicio.title === "Advanced") {
                                    router.push('/services/Advanced');
                                } else if (servicio.title === "Innovated") {
                                    router.push('/services/Innovated');
                                }
                            }}
                        >
                            SOLICITAR
                        </Button>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Servicios;