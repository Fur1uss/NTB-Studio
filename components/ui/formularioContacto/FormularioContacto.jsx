"use client";

import { useState } from 'react';
import "./FormularioContacto.css";

const FormularioContacto = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        // Paso 1
        nombreCompleto: '',
        correo: '',
        telefono: '',
        nombreEmpresa: '',
        rubro: '',
        // Paso 2
        tipoProyecto: '',
        principalObjetivo: '',
        descripcionProyecto: '',
        // Paso 3
        presupuestoEstimado: '',
        nivelUrgencia: '',
        // Paso 4
        preferenciaContacto: '',
        horarioPreferido: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const nextStep = () => {
        if (currentStep < 4) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        // Simular envío
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 2000);
    };

    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div className="form-step-content">
                        <div className="form-field">
                            <label>Nombre Completo</label>
                            <input
                                type="text"
                                value={formData.nombreCompleto}
                                onChange={(e) => handleInputChange('nombreCompleto', e.target.value)}
                                placeholder="Ingresa tu nombre completo"
                            />
                        </div>
                        <div className="form-field">
                            <label>Correo</label>
                            <input
                                type="email"
                                value={formData.correo}
                                onChange={(e) => handleInputChange('correo', e.target.value)}
                                placeholder="tu@correo.com"
                            />
                        </div>
                        <div className="form-field">
                            <label>Teléfono</label>
                            <input
                                type="tel"
                                value={formData.telefono}
                                onChange={(e) => handleInputChange('telefono', e.target.value)}
                                placeholder="+56 9 1234 5678"
                            />
                        </div>
                        <div className="form-field">
                            <label>Nombre De Empresa O Emprendimiento</label>
                            <input
                                type="text"
                                value={formData.nombreEmpresa}
                                onChange={(e) => handleInputChange('nombreEmpresa', e.target.value)}
                                placeholder="Nombre de tu empresa"
                            />
                        </div>
                        <div className="form-field">
                            <label>Rubro (Ej. Gastronomía, Educación, Tecnología, Etc.)</label>
                            <select
                                value={formData.rubro}
                                onChange={(e) => handleInputChange('rubro', e.target.value)}
                            >
                                <option value="">Selecciona un rubro</option>
                                <option value="gastronomia">Gastronomía</option>
                                <option value="educacion">Educación</option>
                                <option value="tecnologia">Tecnología</option>
                                <option value="salud">Salud</option>
                                <option value="retail">Retail</option>
                                <option value="servicios">Servicios</option>
                                <option value="otro">Otro</option>
                            </select>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="form-step-content">
                        <div className="form-field">
                            <label>¿Qué Tipo De Proyecto Quieres Impulsar?</label>
                            <select
                                value={formData.tipoProyecto}
                                onChange={(e) => handleInputChange('tipoProyecto', e.target.value)}
                            >
                                <option value="">Selecciona un tipo</option>
                                <option value="web">Aplicación Web</option>
                                <option value="mobile">Aplicación Móvil</option>
                                <option value="ecommerce">E-commerce</option>
                                <option value="landing">Landing Page</option>
                                <option value="sistema">Sistema de Gestión</option>
                                <option value="otro">Otro</option>
                            </select>
                        </div>
                        <div className="form-field">
                            <label>¿Cuál Es Tu Principal Objetivo?</label>
                            <select
                                value={formData.principalObjetivo}
                                onChange={(e) => handleInputChange('principalObjetivo', e.target.value)}
                            >
                                <option value="">Selecciona un objetivo</option>
                                <option value="ventas">Aumentar Ventas</option>
                                <option value="presencia">Mejorar Presencia Digital</option>
                                <option value="automatizacion">Automatizar Procesos</option>
                                <option value="expansion">Expandir Negocio</option>
                                <option value="innovacion">Innovar en el Mercado</option>
                                <option value="otro">Otro</option>
                            </select>
                        </div>
                        <div className="form-field form-field-textarea">
                            <label>Describe Brevemente Tu Idea O Proyecto</label>
                            <textarea
                                value={formData.descripcionProyecto}
                                onChange={(e) => handleInputChange('descripcionProyecto', e.target.value)}
                                placeholder="Describe tu proyecto..."
                                maxLength={500}
                                rows={5}
                            />
                            <span className="character-count">{formData.descripcionProyecto.length}/500</span>
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="form-step-content">
                        <div className="form-field">
                            <label>¿Tienes Un Presupuesto Estimado?</label>
                            <select
                                value={formData.presupuestoEstimado}
                                onChange={(e) => handleInputChange('presupuestoEstimado', e.target.value)}
                            >
                                <option value="">Selecciona un rango</option>
                                <option value="menos-350">Menos de $350.000</option>
                                <option value="350-750">$350.000 - $750.000</option>
                                <option value="750-950">$750.000 - $950.000</option>
                                <option value="mas-950">Más de $950.000</option>
                                <option value="no-definido">No tengo presupuesto definido</option>
                            </select>
                        </div>
                        <div className="form-field">
                            <label>Nivel De Urgencia:</label>
                            <select
                                value={formData.nivelUrgencia}
                                onChange={(e) => handleInputChange('nivelUrgencia', e.target.value)}
                            >
                                <option value="">Selecciona un nivel</option>
                                <option value="baja">Baja (3+ meses)</option>
                                <option value="media">Media (1-3 meses)</option>
                                <option value="alta">Alta (Menos de 1 mes)</option>
                                <option value="urgente">Urgente (Inmediato)</option>
                            </select>
                        </div>
                    </div>
                );
            case 4:
                return (
                    <div className="form-step-content">
                        <div className="form-field">
                            <label>¿Cómo Prefieres Que Te Contactemos?</label>
                            <select
                                value={formData.preferenciaContacto}
                                onChange={(e) => handleInputChange('preferenciaContacto', e.target.value)}
                            >
                                <option value="">Selecciona una opción</option>
                                <option value="email">Correo Electrónico</option>
                                <option value="telefono">Teléfono</option>
                                <option value="whatsapp">WhatsApp</option>
                                <option value="videollamada">Videollamada</option>
                            </select>
                        </div>
                        <div className="form-field">
                            <label>Horario Preferido Para Contactarte</label>
                            <select
                                value={formData.horarioPreferido}
                                onChange={(e) => handleInputChange('horarioPreferido', e.target.value)}
                            >
                                <option value="">Selecciona un horario</option>
                                <option value="manana">Mañana (9:00 - 12:00)</option>
                                <option value="tarde">Tarde (12:00 - 18:00)</option>
                                <option value="noche">Noche (18:00 - 21:00)</option>
                                <option value="flexible">Flexible</option>
                            </select>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    const getStepTitle = () => {
        switch (currentStep) {
            case 1:
                return "Información Básica";
            case 2:
                return "Necesidades y Objetivos";
            case 3:
                return "Presupuesto O Expectativas";
            case 4:
                return "Preferencias De Contacto";
            default:
                return "";
        }
    };

    if (isSubmitting) {
        return (
            <div className="formulario-container">
                <div className="form-submitting">
                    <h3>Enviando Formulario...</h3>
                    <div className="loading-spinner"></div>
                </div>
            </div>
        );
    }

    if (isSubmitted) {
        return (
            <div className="formulario-container">
                <div className="form-submitted">
                    <h2>Formulario Enviado!</h2>
                    <p>Gracias Por Contarnos Sobre Tu Proyecto. Nuestro Equipo Revisará Tu Información Y Te Recomendará El Plan Ideal Para Ti En Menos De 24 Horas</p>
                    <div className="success-check">
                        <img src="/check.webp" alt="Success check" />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="formulario-container">
            <div className="form-progress">
                {[1, 2, 3, 4].map((step) => (
                    <div key={step} className="progress-step">
                        <div className={`progress-circle ${currentStep >= step ? 'active' : ''}`}></div>
                        {step < 4 && <div className={`progress-line ${currentStep > step ? 'active' : ''}`}></div>}
                    </div>
                ))}
            </div>
            <div className="form-step-title">
                <span>Paso {currentStep}</span>
                <span>{getStepTitle()}</span>
            </div>
            <div className="form-step-content-wrapper">
                <div key={currentStep} className="form-step-content-animated">
                    {renderStepContent()}
                </div>
            </div>
            <div className="form-actions">
                {currentStep > 1 && (
                    <button className="btn-back" onClick={prevStep}>
                        VOLVER
                    </button>
                )}
                {currentStep < 4 ? (
                    <button className="btn-next" onClick={nextStep}>
                        SIGUIENTE
                    </button>
                ) : (
                    <button className="btn-submit" onClick={handleSubmit}>
                        ENVIAR
                    </button>
                )}
            </div>
        </div>
    );
};

export default FormularioContacto;

