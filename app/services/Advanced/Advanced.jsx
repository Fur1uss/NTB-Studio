"use client";

import FormularioAdvanced from "@/components/ui/formularioAdvanced/FormularioAdvanced";
import ServiceStructuredData from "@/components/ui/ServiceStructuredData/ServiceStructuredData";
import Breadcrumbs from "@/components/ui/Breadcrumbs/Breadcrumbs";
import "./Advanced.css";

const Advanced = () => {
    const breadcrumbsItems = [
        { name: "Inicio", url: "/" },
        { name: "Servicios", url: "/#servicios" },
        { name: "Advanced", url: "/services/advanced" }
    ];

    return (
        <>
            <Breadcrumbs items={breadcrumbsItems} />
            <ServiceStructuredData
                serviceName="Advanced - Desarrollo Web Avanzado"
                description="Aplicaciones web completas con integración de APIs, bases de datos escalables, sistemas de roles y permisos. Entrega en 4-8 semanas."
                features={[
                    "Aplicaciones web completas",
                    "Integración con APIs externas",
                    "Base de datos escalable y segura",
                    "Sistema de roles y permisos",
                    "Mantenimiento técnico por 60 días"
                ]}
                deliveryTime="4-8 semanas"
                priceRange="Consultar"
            />
            <div className="advanced-container">
            <div className="advanced-content">
                <div className="advanced-left">
                    <h1 className="advanced-title">Advanced</h1>
                    <p className="advanced-description">
                        Diseñado para empresas que requieren soluciones complejas o sistemas personalizados.
                    </p>
                    
                    <div className="advanced-features">
                        <div className="advanced-feature-item">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#20E337"/>
                            </svg>
                            <span>Aplicaciones web completas</span>
                        </div>
                        <div className="advanced-feature-item">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#20E337"/>
                            </svg>
                            <span>Integración con APIs externas</span>
                        </div>
                        <div className="advanced-feature-item">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#20E337"/>
                            </svg>
                            <span>Base de datos escalable y segura</span>
                        </div>
                        <div className="advanced-feature-item">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#20E337"/>
                            </svg>
                            <span>Sistema de roles y permisos</span>
                        </div>
                        <div className="advanced-feature-item">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#20E337"/>
                            </svg>
                            <span>Mantenimiento técnico por 60 días</span>
                        </div>
                    </div>

                    <h2 className="advanced-benefits-title">Beneficios</h2>
                    
                    <div className="advanced-benefits">
                        <div className="advanced-benefit-card">
                            <img src="/package.webp" alt="Package icon" className="benefit-icon" />
                            <p>
                                ENTREGA ENTRE <span className="highlight-green">4 A 8 SEMANAS</span>
                            </p>
                        </div>
                        <div className="advanced-benefit-card">
                            <img src="/code.webp" alt="Code icon" className="benefit-icon" />
                            <p>
                                <span className="highlight-green">ARQUITECTURA ESCALABLE Y SEGURA</span>
                            </p>
                        </div>
                        <div className="advanced-benefit-card">
                            <img src="/binoculars.webp" alt="Binoculars icon" className="benefit-icon" />
                            <p>
                                REVISIONES <span className="highlight-green">ILIMITADAS</span> DURANTE EL DESARROLLO
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="advanced-right">
                    <FormularioAdvanced />
                </div>
            </div>
        </div>
        </>
    )
}

export default Advanced;

