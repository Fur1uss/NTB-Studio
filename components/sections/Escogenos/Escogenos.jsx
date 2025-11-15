"use client";

import { useState } from "react";
import "./Escogenos.css";

const Escogenos = () => {
    const [activeBadge, setActiveBadge] = useState(null);

    const handleBadgeClick = (index) => {
        setActiveBadge(activeBadge === index ? null : index);
    };
    return (
        <section className="escogenos-section">

            <div className="escogenos-texts-container">
                <h2>Somos el <b>puente</b> que conecta <br />nuevas tecnologías</h2>
                <p>Trabajamos con pasión, diseño e innovación para transformar ideas en <br /> experiencias digitales únicas.</p>
            </div>
            <div className="escogenos-images-container">
                <img className="escogenos-image-01" src="./photo-us01.webp" alt="" />
                <img className="escogenos-image-02" src="./photo-us02.webp" alt="" />
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