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
    const [errors, setErrors] = useState({});

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

    const validateStep = (step) => {
        const newErrors = {};
        
        switch (step) {
            case 1:
                if (!formData.nombreCompleto.trim()) {
                    newErrors.nombreCompleto = 'El nombre completo es requerido';
                }
                if (!formData.correo.trim()) {
                    newErrors.correo = 'El correo es requerido';
                } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo)) {
                    newErrors.correo = 'El correo no es válido';
                }
                if (!formData.telefono.trim()) {
                    newErrors.telefono = 'El teléfono es requerido';
                } else if (!/^\+?[0-9\s-]{8,}$/.test(formData.telefono.replace(/\s/g, ''))) {
                    newErrors.telefono = 'El teléfono no es válido';
                }
                if (!formData.nombreEmpresa.trim()) {
                    newErrors.nombreEmpresa = 'El nombre de empresa es requerido';
                }
                if (!formData.rubro) {
                    newErrors.rubro = 'Debes seleccionar un rubro';
                }
                break;
            case 2:
                if (!formData.tipoProyecto) {
                    newErrors.tipoProyecto = 'Debes seleccionar un tipo de proyecto';
                }
                if (!formData.principalObjetivo) {
                    newErrors.principalObjetivo = 'Debes seleccionar un objetivo principal';
                }
                if (!formData.descripcionProyecto.trim()) {
                    newErrors.descripcionProyecto = 'La descripción del proyecto es requerida';
                } else if (formData.descripcionProyecto.trim().length < 10) {
                    newErrors.descripcionProyecto = 'La descripción debe tener al menos 10 caracteres';
                }
                break;
            case 3:
                if (!formData.presupuestoEstimado) {
                    newErrors.presupuestoEstimado = 'Debes seleccionar un rango de presupuesto';
                }
                if (!formData.nivelUrgencia) {
                    newErrors.nivelUrgencia = 'Debes seleccionar un nivel de urgencia';
                }
                break;
            case 4:
                if (!formData.preferenciaContacto) {
                    newErrors.preferenciaContacto = 'Debes seleccionar una preferencia de contacto';
                }
                if (!formData.horarioPreferido) {
                    newErrors.horarioPreferido = 'Debes seleccionar un horario preferido';
                }
                break;
            default:
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
            try {
                const response = await fetch('/api/contacto', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                const result = await response.json();

                if (!response.ok) {
                    throw new Error(result.error || 'Error al enviar el formulario');
                }

                setIsSubmitting(false);
                setIsSubmitted(true);
            } catch (error) {
                console.error('Error:', error);
                setIsSubmitting(false);
                alert('Hubo un error al enviar el formulario. Por favor, intenta nuevamente.');
            }
        }
    };

    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div className="form-step-content">
                        <div className="form-field">
                            <div className="label-container">
                                <label>Nombre Completo</label>
                                {errors.nombreCompleto && <span className="error-message">{errors.nombreCompleto}</span>}
                            </div>
                            <input
                                type="text"
                                value={formData.nombreCompleto}
                                onChange={(e) => handleInputChange('nombreCompleto', e.target.value)}
                                placeholder="Ingresa tu nombre completo"
                                className={errors.nombreCompleto ? 'error' : ''}
                            />
                        </div>
                        <div className="form-field">
                            <div className="label-container">
                                <label>Correo</label>
                                {errors.correo && <span className="error-message">{errors.correo}</span>}
                            </div>
                            <input
                                type="email"
                                value={formData.correo}
                                onChange={(e) => handleInputChange('correo', e.target.value)}
                                placeholder="tu@correo.com"
                                className={errors.correo ? 'error' : ''}
                            />
                        </div>
                        <div className="form-field">
                            <div className="label-container">
                                <label>Teléfono</label>
                                {errors.telefono && <span className="error-message">{errors.telefono}</span>}
                            </div>
                            <input
                                type="tel"
                                value={formData.telefono}
                                onChange={(e) => handleInputChange('telefono', e.target.value)}
                                placeholder="+56 9 1234 5678"
                                className={errors.telefono ? 'error' : ''}
                            />
                        </div>
                        <div className="form-field">
                            <div className="label-container">
                                <label>Nombre De Empresa O Emprendimiento</label>
                                {errors.nombreEmpresa && <span className="error-message">{errors.nombreEmpresa}</span>}
                            </div>
                            <input
                                type="text"
                                value={formData.nombreEmpresa}
                                onChange={(e) => handleInputChange('nombreEmpresa', e.target.value)}
                                placeholder="Nombre de tu empresa"
                                className={errors.nombreEmpresa ? 'error' : ''}
                            />
                        </div>
                        <div className="form-field">
                            <div className="label-container">
                                <label>Rubro (Ej. Gastronomía, Educación, Tecnología, Etc.)</label>
                                {errors.rubro && <span className="error-message">{errors.rubro}</span>}
                            </div>
                            <select
                                value={formData.rubro}
                                onChange={(e) => handleInputChange('rubro', e.target.value)}
                                className={errors.rubro ? 'error' : ''}
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
                            <div className="label-container">
                                <label>¿Qué Tipo De Proyecto Quieres Impulsar?</label>
                                {errors.tipoProyecto && <span className="error-message">{errors.tipoProyecto}</span>}
                            </div>
                            <select
                                value={formData.tipoProyecto}
                                onChange={(e) => handleInputChange('tipoProyecto', e.target.value)}
                                className={errors.tipoProyecto ? 'error' : ''}
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
                            <div className="label-container">
                                <label>¿Cuál Es Tu Principal Objetivo?</label>
                                {errors.principalObjetivo && <span className="error-message">{errors.principalObjetivo}</span>}
                            </div>
                            <select
                                value={formData.principalObjetivo}
                                onChange={(e) => handleInputChange('principalObjetivo', e.target.value)}
                                className={errors.principalObjetivo ? 'error' : ''}
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
                            <div className="label-container">
                                <label>Describe Brevemente Tu Idea O Proyecto</label>
                                {errors.descripcionProyecto && <span className="error-message">{errors.descripcionProyecto}</span>}
                            </div>
                            <textarea
                                value={formData.descripcionProyecto}
                                onChange={(e) => handleInputChange('descripcionProyecto', e.target.value)}
                                placeholder="Describe tu proyecto..."
                                maxLength={500}
                                rows={5}
                                className={errors.descripcionProyecto ? 'error' : ''}
                            />
                            <span className="character-count">{formData.descripcionProyecto.length}/500</span>
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="form-step-content">
                        <div className="form-field">
                            <div className="label-container">
                                <label>¿Tienes Un Presupuesto Estimado?</label>
                                {errors.presupuestoEstimado && <span className="error-message">{errors.presupuestoEstimado}</span>}
                            </div>
                            <select
                                value={formData.presupuestoEstimado}
                                onChange={(e) => handleInputChange('presupuestoEstimado', e.target.value)}
                                className={errors.presupuestoEstimado ? 'error' : ''}
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
                            <div className="label-container">
                                <label>Nivel De Urgencia:</label>
                                {errors.nivelUrgencia && <span className="error-message">{errors.nivelUrgencia}</span>}
                            </div>
                            <select
                                value={formData.nivelUrgencia}
                                onChange={(e) => handleInputChange('nivelUrgencia', e.target.value)}
                                className={errors.nivelUrgencia ? 'error' : ''}
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
                            <div className="label-container">
                                <label>¿Cómo Prefieres Que Te Contactemos?</label>
                                {errors.preferenciaContacto && <span className="error-message">{errors.preferenciaContacto}</span>}
                            </div>
                            <select
                                value={formData.preferenciaContacto}
                                onChange={(e) => handleInputChange('preferenciaContacto', e.target.value)}
                                className={errors.preferenciaContacto ? 'error' : ''}
                            >
                                <option value="">Selecciona una opción</option>
                                <option value="email">Correo Electrónico</option>
                                <option value="telefono">Teléfono</option>
                                <option value="whatsapp">WhatsApp</option>
                                <option value="videollamada">Videollamada</option>
                            </select>
                        </div>
                        <div className="form-field">
                            <div className="label-container">
                                <label>Horario Preferido Para Contactarte</label>
                                {errors.horarioPreferido && <span className="error-message">{errors.horarioPreferido}</span>}
                            </div>
                            <select
                                value={formData.horarioPreferido}
                                onChange={(e) => handleInputChange('horarioPreferido', e.target.value)}
                                className={errors.horarioPreferido ? 'error' : ''}
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

