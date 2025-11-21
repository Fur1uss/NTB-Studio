"use client";

import FormularioEssential from "@/components/ui/formularioEssential/FormularioEssential";
import ServiceStructuredData from "@/components/ui/ServiceStructuredData/ServiceStructuredData";
import Breadcrumbs from "@/components/ui/Breadcrumbs/Breadcrumbs";
import "./Essential.css";

const Essential = () => {
    const breadcrumbsItems = [
        { name: "Inicio", url: "/" },
        { name: "Servicios", url: "/#servicios" },
        { name: "Essential", url: "/services/essential" }
    ];

    return (
        <>
            <Breadcrumbs items={breadcrumbsItems} />
            <ServiceStructuredData
                serviceName="Essential - Desarrollo Web Básico"
                description="Landing Pages y SPAs modernas con panel de administración, base de datos, hosting y soporte técnico. Entrega en 1-3 semanas."
                features={[
                    "Landing Page o SPA",
                    "Panel de administración",
                    "Soporte técnico por 30 días",
                    "Base de datos o API",
                    "Hosting y despliegue"
                ]}
                deliveryTime="1-3 semanas"
                priceRange="Consultar"
            />
            <div className="essential-container">
            <div className="essential-content">
                <div className="essential-left">
                    <h1 className="essential-title">Essential</h1>
                    <p className="essential-description">
                        Ideal para empresas o profesionales que buscan presencia digital moderna y funcional.
                    </p>
                    
                    <div className="essential-features">
                        <div className="essential-feature-item">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#20E337"/>
                            </svg>
                            <span>Landing Page o SPA</span>
                        </div>
                        <div className="essential-feature-item">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#20E337"/>
                            </svg>
                            <span>Panel de administración</span>
                        </div>
                        <div className="essential-feature-item">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#20E337"/>
                            </svg>
                            <span>Soporte técnico por 30 días</span>
                        </div>
                        <div className="essential-feature-item">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#20E337"/>
                            </svg>
                            <span>Base de datos o API</span>
                        </div>
                        <div className="essential-feature-item">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#20E337"/>
                            </svg>
                            <span>Hosting y despliegue</span>
                        </div>
                    </div>

                    <h2 className="essential-benefits-title">Beneficios</h2>
                    
                    <div className="essential-benefits">
                        <div className="essential-benefit-card">
                            <img src="/package.webp" alt="Package icon" className="benefit-icon" />
                            <p>
                                ENTREGA ENTRE <span className="highlight-green">1 A 3 SEMANAS</span>
                            </p>
                        </div>
                        <div className="essential-benefit-card">
                            <img src="/code.webp" alt="Code icon" className="benefit-icon" />
                            <p>
                                <span className="highlight-green">CÓDIGO OPTIMIZADO Y ESCALABLE</span>
                            </p>
                        </div>
                        <div className="essential-benefit-card">
                            <img src="/binoculars.webp" alt="Binoculars icon" className="benefit-icon" />
                            <p>
                                REVISIONES <span className="highlight-green">ILIMITADAS</span> DURANTE EL DESARROLLO
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="essential-right">
                    <FormularioEssential />
                </div>
            </div>
        </div>
        </>
    )
}

export default Essential;