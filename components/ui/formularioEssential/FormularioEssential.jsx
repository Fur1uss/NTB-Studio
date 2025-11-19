"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import "./FormularioEssential.css";

const FormularioEssential = () => {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        // Paso 1
        nombre: '',
        email: '',
        tipoProyecto: '',
        // Paso 2
        descripcionProyecto: '',
        funcionalidades: [],
        publicoObjetivo: '',
        // Paso 3
        estiloDiseno: '',
        presupuestoEstimado: '',
        fechaLimite: '',
        // Paso 4
        telefono: '',
        preferenciaContacto: '',
        comentariosAdicionales: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const funcionalidadesOptions = [
        'Landing Page',
        'Panel de administración',
        'Base de datos/API',
        'Integraciones (redes sociales, email, etc.)'
    ];

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
        // Limpiar error del campo cuando el usuario empieza a escribir
        if (errors[field]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[field];
                return newErrors;
            });
        }
    };

    const handleCheckboxChange = (value) => {
        setFormData(prev => {
            const funcionalidades = prev.funcionalidades.includes(value)
                ? prev.funcionalidades.filter(f => f !== value)
                : [...prev.funcionalidades, value];
            return {
                ...prev,
                funcionalidades
            };
        });
    };

    const validateStep = (step) => {
        const newErrors = {};
        
        switch (step) {
            case 1:
                if (!formData.nombre.trim()) {
                    newErrors.nombre = 'El nombre es requerido';
                }
                if (!formData.email.trim()) {
                    newErrors.email = 'El email es requerido';
                } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
                    newErrors.email = 'El email no es válido';
                }
                if (!formData.tipoProyecto) {
                    newErrors.tipoProyecto = 'Debes seleccionar un tipo de proyecto';
                }
                break;
            case 2:
                if (!formData.descripcionProyecto.trim()) {
                    newErrors.descripcionProyecto = 'La descripción es requerida';
                } else if (formData.descripcionProyecto.trim().length < 10) {
                    newErrors.descripcionProyecto = 'La descripción debe tener al menos 10 caracteres';
                }
                if (formData.funcionalidades.length === 0) {
                    newErrors.funcionalidades = 'Debes seleccionar al menos una funcionalidad';
                }
                if (!formData.publicoObjetivo.trim()) {
                    newErrors.publicoObjetivo = 'El público objetivo es requerido';
                }
                break;
            case 3:
                if (!formData.estiloDiseno) {
                    newErrors.estiloDiseno = 'Debes seleccionar un estilo de diseño';
                }
                if (!formData.presupuestoEstimado) {
                    newErrors.presupuestoEstimado = 'Debes seleccionar un rango de presupuesto';
                }
                if (!formData.fechaLimite) {
                    newErrors.fechaLimite = 'Debes seleccionar una fecha límite';
                }
                break;
            case 4:
                if (!formData.telefono.trim()) {
                    newErrors.telefono = 'El teléfono es requerido';
                } else if (!/^\+?[0-9\s-]{8,}$/.test(formData.telefono.replace(/\s/g, ''))) {
                    newErrors.telefono = 'El teléfono no es válido';
                }
                if (!formData.preferenciaContacto) {
                    newErrors.preferenciaContacto = 'Debes seleccionar una preferencia de contacto';
                }
                break;
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const nextStep = () => {
        if (validateStep(currentStep)) {
            if (currentStep < 4) {
                setCurrentStep(currentStep + 1);
            }
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleSubmit = async () => {
        if (validateStep(4)) {
            setIsSubmitting(true);
            // Simular envío
            setTimeout(() => {
                setIsSubmitting(false);
                setIsSubmitted(true);
                // Redirigir al home después de 3 segundos
                setTimeout(() => {
                    router.push('/');
                }, 3000);
            }, 2000);
        }
    };

    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div className="form-step-content">
                        <div className="form-field">
                            <label>Nombre</label>
                            <input
                                type="text"
                                value={formData.nombre}
                                onChange={(e) => handleInputChange('nombre', e.target.value)}
                                placeholder="Ingresa tu nombre"
                                className={errors.nombre ? 'error' : ''}
                            />
                            {errors.nombre && <span className="error-message">{errors.nombre}</span>}
                        </div>
                        <div className="form-field">
                            <label>Email</label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => handleInputChange('email', e.target.value)}
                                placeholder="tu@correo.com"
                                className={errors.email ? 'error' : ''}
                            />
                            {errors.email && <span className="error-message">{errors.email}</span>}
                        </div>
                        <div className="form-field">
                            <label>Tipo De Proyecto</label>
                            <select
                                value={formData.tipoProyecto}
                                onChange={(e) => handleInputChange('tipoProyecto', e.target.value)}
                                className={errors.tipoProyecto ? 'error' : ''}
                            >
                                <option value="">Selecciona un tipo</option>
                                <option value="landing-page">Landing Page</option>
                                <option value="spa">SPA (Single Page Application)</option>
                                <option value="web-app">Aplicación Web</option>
                                <option value="otro">Otro</option>
                            </select>
                            {errors.tipoProyecto && <span className="error-message">{errors.tipoProyecto}</span>}
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="form-step-content">
                        <div className="form-field">
                            <label>Descripción del Proyecto</label>
                            <textarea
                                value={formData.descripcionProyecto}
                                onChange={(e) => handleInputChange('descripcionProyecto', e.target.value)}
                                placeholder="Describe brevemente tu proyecto o idea..."
                                rows="4"
                                className={errors.descripcionProyecto ? 'error' : ''}
                            />
                            {errors.descripcionProyecto && <span className="error-message">{errors.descripcionProyecto}</span>}
                        </div>
                        <div className="form-field">
                            <label>Funcionalidades Principales Necesarias</label>
                            <div className="checkbox-group">
                                {funcionalidadesOptions.map((option) => (
                                    <label key={option} className="checkbox-label">
                                        <input
                                            type="checkbox"
                                            checked={formData.funcionalidades.includes(option)}
                                            onChange={() => {
                                                handleCheckboxChange(option);
                                                if (errors.funcionalidades) {
                                                    setErrors(prev => {
                                                        const newErrors = { ...prev };
                                                        delete newErrors.funcionalidades;
                                                        return newErrors;
                                                    });
                                                }
                                            }}
                                        />
                                        <span>{option}</span>
                                    </label>
                                ))}
                            </div>
                            {errors.funcionalidades && <span className="error-message">{errors.funcionalidades}</span>}
                        </div>
                        <div className="form-field">
                            <label>Público Objetivo</label>
                            <input
                                type="text"
                                value={formData.publicoObjetivo}
                                onChange={(e) => handleInputChange('publicoObjetivo', e.target.value)}
                                placeholder="Ej: Empresas pequeñas, profesionales independientes, etc."
                                className={errors.publicoObjetivo ? 'error' : ''}
                            />
                            {errors.publicoObjetivo && <span className="error-message">{errors.publicoObjetivo}</span>}
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="form-step-content">
                        <div className="form-field">
                            <label>Estilo de Diseño Preferido</label>
                            <select
                                value={formData.estiloDiseno}
                                onChange={(e) => handleInputChange('estiloDiseno', e.target.value)}
                                className={errors.estiloDiseno ? 'error' : ''}
                            >
                                <option value="">Selecciona un estilo</option>
                                <option value="moderno-minimalista">Moderno y minimalista</option>
                                <option value="corporativo-profesional">Corporativo y profesional</option>
                                <option value="creativo-llamativo">Creativo y llamativo</option>
                                <option value="otro">Otro</option>
                            </select>
                            {errors.estiloDiseno && <span className="error-message">{errors.estiloDiseno}</span>}
                        </div>
                        <div className="form-field">
                            <label>Presupuesto Estimado</label>
                            <select
                                value={formData.presupuestoEstimado}
                                onChange={(e) => handleInputChange('presupuestoEstimado', e.target.value)}
                                className={errors.presupuestoEstimado ? 'error' : ''}
                            >
                                <option value="">Selecciona un rango</option>
                                <option value="menos-100">Menos de $100.000</option>
                                <option value="100-150">$100.000 - $150.000</option>
                                <option value="150-200">$150.000 - $200.000</option>
                                <option value="200-250">$200.000 - $250.000</option>
                            </select>
                            {errors.presupuestoEstimado && <span className="error-message">{errors.presupuestoEstimado}</span>}
                        </div>
                        <div className="form-field">
                            <label>Fecha Límite / Urgencia</label>
                            <select
                                value={formData.fechaLimite}
                                onChange={(e) => handleInputChange('fechaLimite', e.target.value)}
                                className={errors.fechaLimite ? 'error' : ''}
                            >
                                <option value="">Selecciona una opción</option>
                                <option value="urgente">Urgente (1-2 semanas)</option>
                                <option value="normal">Normal (1-3 meses)</option>
                                <option value="flexible">Flexible (3+ meses)</option>
                            </select>
                            {errors.fechaLimite && <span className="error-message">{errors.fechaLimite}</span>}
                        </div>
                    </div>
                );
            case 4:
                return (
                    <div className="form-step-content">
                        <div className="form-field">
                            <label>Teléfono de Contacto</label>
                            <input
                                type="tel"
                                value={formData.telefono}
                                onChange={(e) => handleInputChange('telefono', e.target.value)}
                                placeholder="+56 9 1234 5678"
                                className={errors.telefono ? 'error' : ''}
                            />
                            {errors.telefono && <span className="error-message">{errors.telefono}</span>}
                        </div>
                        <div className="form-field">
                            <label>Preferencia de Contacto</label>
                            <select
                                value={formData.preferenciaContacto}
                                onChange={(e) => handleInputChange('preferenciaContacto', e.target.value)}
                                className={errors.preferenciaContacto ? 'error' : ''}
                            >
                                <option value="">Selecciona una opción</option>
                                <option value="email">Email</option>
                                <option value="telefono">Teléfono</option>
                                <option value="whatsapp">WhatsApp</option>
                                <option value="cualquiera">Cualquiera</option>
                            </select>
                            {errors.preferenciaContacto && <span className="error-message">{errors.preferenciaContacto}</span>}
                        </div>
                        <div className="form-field">
                            <label>Comentarios Adicionales (Opcional)</label>
                            <textarea
                                value={formData.comentariosAdicionales}
                                onChange={(e) => handleInputChange('comentariosAdicionales', e.target.value)}
                                placeholder="Cualquier información adicional que quieras compartir..."
                                rows="3"
                            />
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
                return "Descripción del Proyecto";
            case 3:
                return "Requisitos y Preferencias";
            case 4:
                return "Información Adicional";
            default:
                return "";
        }
    };

    if (isSubmitting) {
        return (
            <div className="formulario-essential-container">
                <div className="form-submitting">
                    <h3>Enviando Formulario...</h3>
                    <div className="loading-spinner"></div>
                </div>
            </div>
        );
    }

    if (isSubmitted) {
        return (
            <div className="formulario-essential-container">
                <div className="form-submitted">
                    <h2>Formulario Enviado!</h2>
                    <p>Gracias por contarnos sobre tu proyecto. Nuestro equipo revisará tu información y te contactará en menos de 24 horas.</p>
                    <p className="redirect-message">Serás redirigido al inicio en unos segundos...</p>
                    <div className="success-check">
                        <img src="/check.webp" alt="Success check" />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="formulario-essential-container">
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
                        COMENZAR PROYECTO
                    </button>
                )}
            </div>
        </div>
    );
};

export default FormularioEssential;

