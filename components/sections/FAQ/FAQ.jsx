"use client";

import { useState, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./FAQ.css";

// Registrar plugins
gsap.registerPlugin(ScrollTrigger);

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);
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

    const faqs = [
        {
            question: "¿Qué tipo de proyectos desarrolla NTB?",
            answer: "Desarrollamos una amplia variedad de proyectos digitales, incluyendo aplicaciones web, landing pages, sistemas de gestión, e-commerce y soluciones personalizadas según las necesidades de nuestros clientes."
        },
        {
            question: "¿Cuánto tiempo toma un proyecto?",
            answer: "El tiempo de desarrollo varía según la complejidad del proyecto. Un proyecto Essential puede tomar entre 2-4 semanas, mientras que proyectos Advanced o Innovated pueden requerir de 6-12 semanas o más."
        },
        {
            question: "¿Puedo solicitar revisiones durante el desarrollo?",
            answer: "Sí, todos nuestros planes incluyen revisiones. El plan Essential incluye revisiones durante el desarrollo, mientras que los planes Advanced e Innovated incluyen más iteraciones y ajustes según sea necesario."
        },
        {
            question: "¿Necesito tener conocimientos técnicos para trabajar con ustedes?",
            answer: "No es necesario. Trabajamos contigo para entender tus necesidades y te guiamos a través de todo el proceso. Solo necesitas tener claro qué quieres lograr con tu proyecto."
        },
        {
            question: "¿Qué pasa después de que el proyecto está terminado?",
            answer: "Después de completar el proyecto, proporcionamos documentación, capacitación si es necesario, y soporte técnico según el plan contratado. También ofrecemos servicios de mantenimiento continuo."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section ref={sectionRef} className="faq-section">
            <div className="faq-decorative-star">
                <img src="/star.webp" alt="Decorative star" />
            </div>
            <div className="faq-decorative-thunder">
                <img src="/thunder.webp" alt="Decorative thunder" />
            </div>
            
            <h2 className="faq-title">Preguntas frecuentes</h2>
            
            <div className="faq-container">
                {faqs.map((faq, index) => (
                    <div 
                        key={index} 
                        className={`faq-item ${openIndex === index ? 'faq-item-open' : ''}`}
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className="faq-question-wrapper">
                            <p className="faq-question">{faq.question}</p>
                            <div className="faq-toggle">
                                <span className={`faq-toggle-icon ${openIndex === index ? 'faq-toggle-icon-open' : ''}`}>
                                    +
                                </span>
                            </div>
                        </div>
                        <div className="faq-answer">
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FAQ;