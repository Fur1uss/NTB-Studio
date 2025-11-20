"use client";

import FormularioInnovated from "@/components/ui/formularioInnovated/FormularioInnovated";
import ServiceStructuredData from "@/components/ui/ServiceStructuredData/ServiceStructuredData";
import Breadcrumbs from "@/components/ui/Breadcrumbs/Breadcrumbs";
import "./Innovated.css";

const Innovated = () => {
    const breadcrumbsItems = [
        { name: "Inicio", url: "/" },
        { name: "Servicios", url: "/#servicios" },
        { name: "Innovated", url: "/services/innovated" }
    ];

    return (
        <>
            <Breadcrumbs items={breadcrumbsItems} />
            <ServiceStructuredData
                serviceName="Innovated - Desarrollo de MVP y Productos Digitales"
                description="Asesoría técnica, diseño y desarrollo de MVP, arquitectura escalable y prototipos interactivos. Entrega en 6-12 semanas."
                features={[
                    "Asesoría técnica a medida",
                    "Diseño y desarrollo de MVP",
                    "Arquitectura base escalable",
                    "Prototipo interactivo o versión beta funcional",
                    "Seguimiento técnico y ajustes post-lanzamiento",
                    "Revisión estratégica de viabilidad y crecimiento"
                ]}
                deliveryTime="6-12 semanas"
                priceRange="Consultar"
            />
            <div className="innovated-container">
            <div className="innovated-content">
                <div className="innovated-left">
                    <h1 className="innovated-title">Innovated</h1>
                    <p className="innovated-description">
                        Pensado para emprendedores, startups y pymes que buscan transformar una idea en un producto digital.
                    </p>
                    
                    <div className="innovated-features">
                        <div className="innovated-feature-item">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#20E337"/>
                            </svg>
                            <span>Asesoría técnica a medida</span>
                        </div>
                        <div className="innovated-feature-item">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#20E337"/>
                            </svg>
                            <span>Diseño y desarrollo de MVP</span>
                        </div>
                        <div className="innovated-feature-item">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#20E337"/>
                            </svg>
                            <span>Arquitectura base escalable</span>
                        </div>
                        <div className="innovated-feature-item">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#20E337"/>
                            </svg>
                            <span>Prototipo interactivo o versión beta funcional</span>
                        </div>
                        <div className="innovated-feature-item">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#20E337"/>
                            </svg>
                            <span>Seguimiento técnico y ajustes post-lanzamiento</span>
                        </div>
                        <div className="innovated-feature-item">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#20E337"/>
                            </svg>
                            <span>Revisión estratégica de viabilidad y crecimiento</span>
                        </div>
                    </div>

                    <h2 className="innovated-benefits-title">Beneficios</h2>
                    
                    <div className="innovated-benefits">
                        <div className="innovated-benefit-card">
                            <img src="/package.webp" alt="Package icon" className="benefit-icon" />
                            <p>
                                ENTREGA ENTRE <span className="highlight-green">6 A 12 SEMANAS</span>
                            </p>
                        </div>
                        <div className="innovated-benefit-card">
                            <img src="/code.webp" alt="Code icon" className="benefit-icon" />
                            <p>
                                <span className="highlight-green">ARQUITECTURA PREPARADA PARA ESCALAR</span>
                            </p>
                        </div>
                        <div className="innovated-benefit-card">
                            <img src="/binoculars.webp" alt="Binoculars icon" className="benefit-icon" />
                            <p>
                                REVISIONES <span className="highlight-green">ILIMITADAS</span> DURANTE EL DESARROLLO
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="innovated-right">
                    <FormularioInnovated />
                </div>
            </div>
        </div>
        </>
    )
}

export default Innovated;

