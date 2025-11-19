"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import "./FormularioInnovated.css";

const FormularioInnovated = () => {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        // Paso 1
        nombre: '',
        email: '',
        tipoStartup: '',
        // Paso 2
        descripcionIdea: '',
        problemaResolver: '',
        solucionPropuesta: '',
        // Paso 3
        mercadoObjetivo: '',
        modeloNegocio: '',
        competencia: '',
        // Paso 4
        funcionalidadesMVP: [],
        integracionesNecesarias: [],
        escalabilidadEsperada: '',
        // Paso 5
        presupuestoEstimado: '',
        fechaLanzamiento: '',
        recursosDisponibles: '',
        // Paso 6
        telefono: '',
        preferenciaContacto: '',
        comentariosAdicionales: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const funcionalidadesMVPOptions = [
        'Autenticación de usuarios',
        'Panel de administración',
        'Sistema de pagos',
        'Notificaciones en tiempo real',
        'Integración con APIs externas',
        'Dashboard y analytics',
        'Sistema de mensajería',
        'Gestión de contenido',
        'Otras funcionalidades personalizadas'
    ];

    const integracionesNecesariasOptions = [
        'Pasarelas de pago (Stripe, PayPal, etc.)',
        'Servicios de autenticación (Auth0, Firebase)',
        'APIs de redes sociales',
        'Servicios de email marketing',
        'APIs de mapas y geolocalización',
        'Servicios de almacenamiento en la nube',
        'APIs de comunicación (SMS, WhatsApp)',
        'Otras integraciones'
    ];

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
        if (errors[field]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[field];
                return newErrors;
            });
        }
    };

    const handleCheckboxChange = (field, value) => {
        setFormData(prev => {
            const items = prev[field].includes(value)
                ? prev[field].filter(item => item !== value)
                : [...prev[field], value];
            return {
                ...prev,
                [field]: items
            };
        });
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
                if (!formData.nombre.trim()) {
                    newErrors.nombre = 'El nombre es requerido';
                }
                if (!formData.email.trim()) {
                    newErrors.email = 'El email es requerido';
                } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
                    newErrors.email = 'El email no es válido';
                }
                if (!formData.tipoStartup) {
                    newErrors.tipoStartup = 'Debes seleccionar un tipo';
                }
                break;
            case 2:
                if (!formData.descripcionIdea.trim()) {
                    newErrors.descripcionIdea = 'La descripción es requerida';
                } else if (formData.descripcionIdea.trim().length < 20) {
                    newErrors.descripcionIdea = 'La descripción debe tener al menos 20 caracteres';
                }
                if (!formData.problemaResolver.trim()) {
                    newErrors.problemaResolver = 'Debes describir el problema a resolver';
                } else if (formData.problemaResolver.trim().length < 15) {
                    newErrors.problemaResolver = 'La descripción del problema debe tener al menos 15 caracteres';
                }
                if (!formData.solucionPropuesta.trim()) {
                    newErrors.solucionPropuesta = 'Debes describir la solución propuesta';
                } else if (formData.solucionPropuesta.trim().length < 15) {
                    newErrors.solucionPropuesta = 'La solución debe tener al menos 15 caracteres';
                }
                break;
            case 3:
                if (!formData.mercadoObjetivo.trim()) {
                    newErrors.mercadoObjetivo = 'El mercado objetivo es requerido';
                }
                if (!formData.modeloNegocio) {
                    newErrors.modeloNegocio = 'Debes seleccionar un modelo de negocio';
                }
                break;
            case 4:
                if (formData.funcionalidadesMVP.length === 0) {
                    newErrors.funcionalidadesMVP = 'Debes seleccionar al menos una funcionalidad';
                }
                break;
            case 5:
                if (!formData.escalabilidadEsperada) {
                    newErrors.escalabilidadEsperada = 'Debes seleccionar un nivel de escalabilidad';
                }
                break;
            case 6:
                if (!formData.presupuestoEstimado) {
                    newErrors.presupuestoEstimado = 'Debes seleccionar un rango de presupuesto';
                }
                if (!formData.fechaLanzamiento) {
                    newErrors.fechaLanzamiento = 'Debes seleccionar una fecha objetivo';
                }
                break;
            case 7:
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
            if (currentStep < 7) {
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
        if (validateStep(7)) {
            setIsSubmitting(true);
            setTimeout(() => {
                setIsSubmitting(false);
                setIsSubmitted(true);
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
                            <label>Tipo de Startup / Empresa</label>
                            <select
                                value={formData.tipoStartup}
                                onChange={(e) => handleInputChange('tipoStartup', e.target.value)}
                                className={errors.tipoStartup ? 'error' : ''}
                            >
                                <option value="">Selecciona un tipo</option>
                                <option value="startup-temprana">Startup en etapa temprana</option>
                                <option value="startup-crecimiento">Startup en crecimiento</option>
                                <option value="pyme">PYME</option>
                                <option value="emprendedor-individual">Emprendedor individual</option>
                                <option value="otro">Otro</option>
                            </select>
                            {errors.tipoStartup && <span className="error-message">{errors.tipoStartup}</span>}
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="form-step-content">
                        <div className="form-field">
                            <label>Descripción de tu Idea / Proyecto</label>
                            <textarea
                                value={formData.descripcionIdea}
                                onChange={(e) => handleInputChange('descripcionIdea', e.target.value)}
                                placeholder="Describe tu idea de negocio o proyecto digital..."
                                rows="4"
                                className={errors.descripcionIdea ? 'error' : ''}
                            />
                            {errors.descripcionIdea && <span className="error-message">{errors.descripcionIdea}</span>}
                        </div>
                        <div className="form-field">
                            <label>¿Qué problema resuelve tu idea?</label>
                            <textarea
                                value={formData.problemaResolver}
                                onChange={(e) => handleInputChange('problemaResolver', e.target.value)}
                                placeholder="Describe el problema o necesidad que tu producto/servicio resuelve..."
                                rows="3"
                                className={errors.problemaResolver ? 'error' : ''}
                            />
                            {errors.problemaResolver && <span className="error-message">{errors.problemaResolver}</span>}
                        </div>
                        <div className="form-field">
                            <label>¿Cuál es tu solución propuesta?</label>
                            <textarea
                                value={formData.solucionPropuesta}
                                onChange={(e) => handleInputChange('solucionPropuesta', e.target.value)}
                                placeholder="Explica cómo tu producto/servicio resuelve el problema..."
                                rows="3"
                                className={errors.solucionPropuesta ? 'error' : ''}
                            />
                            {errors.solucionPropuesta && <span className="error-message">{errors.solucionPropuesta}</span>}
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="form-step-content">
                        <div className="form-field">
                            <label>Mercado Objetivo</label>
                            <input
                                type="text"
                                value={formData.mercadoObjetivo}
                                onChange={(e) => handleInputChange('mercadoObjetivo', e.target.value)}
                                placeholder="Ej: Empresas pequeñas, consumidores finales, profesionales, etc."
                                className={errors.mercadoObjetivo ? 'error' : ''}
                            />
                            {errors.mercadoObjetivo && <span className="error-message">{errors.mercadoObjetivo}</span>}
                        </div>
                        <div className="form-field">
                            <label>Modelo de Negocio</label>
                            <select
                                value={formData.modeloNegocio}
                                onChange={(e) => handleInputChange('modeloNegocio', e.target.value)}
                                className={errors.modeloNegocio ? 'error' : ''}
                            >
                                <option value="">Selecciona un modelo</option>
                                <option value="suscripcion">Suscripción (SaaS)</option>
                                <option value="marketplace">Marketplace</option>
                                <option value="freemium">Freemium</option>
                                <option value="venta-directa">Venta directa</option>
                                <option value="publicidad">Publicidad</option>
                                <option value="comision">Por comisión</option>
                                <option value="otro">Otro</option>
                            </select>
                            {errors.modeloNegocio && <span className="error-message">{errors.modeloNegocio}</span>}
                        </div>
                        <div className="form-field">
                            <label>Competencia (Opcional)</label>
                            <input
                                type="text"
                                value={formData.competencia}
                                onChange={(e) => handleInputChange('competencia', e.target.value)}
                                placeholder="Menciona competidores o productos similares si los conoces..."
                            />
                        </div>
                    </div>
                );
            case 4:
                return (
                    <div className="form-step-content">
                        <div className="form-field">
                            <label>Funcionalidades del MVP</label>
                            <div className="checkbox-group">
                                {funcionalidadesMVPOptions.map((option) => (
                                    <label key={option} className="checkbox-label">
                                        <input
                                            type="checkbox"
                                            checked={formData.funcionalidadesMVP.includes(option)}
                                            onChange={() => handleCheckboxChange('funcionalidadesMVP', option)}
                                        />
                                        <span>{option}</span>
                                    </label>
                                ))}
                            </div>
                            {errors.funcionalidadesMVP && <span className="error-message">{errors.funcionalidadesMVP}</span>}
                        </div>
                    </div>
                );
            case 5:
                return (
                    <div className="form-step-content">
                        <div className="form-field">
                            <label>Integraciones Necesarias (Opcional)</label>
                            <div className="checkbox-group">
                                {integracionesNecesariasOptions.map((option) => (
                                    <label key={option} className="checkbox-label">
                                        <input
                                            type="checkbox"
                                            checked={formData.integracionesNecesarias.includes(option)}
                                            onChange={() => handleCheckboxChange('integracionesNecesarias', option)}
                                        />
                                        <span>{option}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className="form-field">
                            <label>Escalabilidad Esperada</label>
                            <select
                                value={formData.escalabilidadEsperada}
                                onChange={(e) => handleInputChange('escalabilidadEsperada', e.target.value)}
                                className={errors.escalabilidadEsperada ? 'error' : ''}
                            >
                                <option value="">Selecciona un nivel</option>
                                <option value="baja">Baja (hasta 500 usuarios)</option>
                                <option value="media">Media (500-5,000 usuarios)</option>
                                <option value="alta">Alta (5,000-50,000 usuarios)</option>
                                <option value="muy-alta">Muy alta (50,000+ usuarios)</option>
                            </select>
                            {errors.escalabilidadEsperada && <span className="error-message">{errors.escalabilidadEsperada}</span>}
                        </div>
                    </div>
                );
            case 6:
                return (
                    <div className="form-step-content">
                        <div className="form-field">
                            <label>Presupuesto Estimado</label>
                            <select
                                value={formData.presupuestoEstimado}
                                onChange={(e) => handleInputChange('presupuestoEstimado', e.target.value)}
                                className={errors.presupuestoEstimado ? 'error' : ''}
                            >
                                <option value="">Selecciona un rango</option>
                                <option value="600-750">$600.000 - $750.000</option>
                                <option value="750-850">$750.000 - $850.000</option>
                                <option value="850-950">$850.000 - $950.000</option>
                                <option value="mas-950">Más de $950.000</option>
                            </select>
                            {errors.presupuestoEstimado && <span className="error-message">{errors.presupuestoEstimado}</span>}
                        </div>
                        <div className="form-field">
                            <label>Fecha Objetivo de Lanzamiento</label>
                            <select
                                value={formData.fechaLanzamiento}
                                onChange={(e) => handleInputChange('fechaLanzamiento', e.target.value)}
                                className={errors.fechaLanzamiento ? 'error' : ''}
                            >
                                <option value="">Selecciona una opción</option>
                                <option value="urgente">Urgente (2-3 meses)</option>
                                <option value="normal">Normal (3-6 meses)</option>
                                <option value="flexible">Flexible (6-12 meses)</option>
                            </select>
                            {errors.fechaLanzamiento && <span className="error-message">{errors.fechaLanzamiento}</span>}
                        </div>
                        <div className="form-field">
                            <label>Recursos Disponibles (Opcional)</label>
                            <select
                                value={formData.recursosDisponibles}
                                onChange={(e) => handleInputChange('recursosDisponibles', e.target.value)}
                            >
                                <option value="">Selecciona una opción</option>
                                <option value="solo-capital">Solo capital</option>
                                <option value="equipo-tecnico">Equipo técnico disponible</option>
                                <option value="ambos">Capital y equipo técnico</option>
                                <option value="ninguno">Aún no definido</option>
                            </select>
                        </div>
                    </div>
                );
            case 7:
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
                                placeholder="Cualquier información adicional sobre tu proyecto, necesidades específicas, etc..."
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
                return "Tu Idea y Solución";
            case 3:
                return "Mercado y Negocio";
            case 4:
                return "Funcionalidades del MVP";
            case 5:
                return "Integraciones y Escalabilidad";
            case 6:
                return "Presupuesto y Tiempo";
            case 7:
                return "Información de Contacto";
            default:
                return "";
        }
    };

    if (isSubmitting) {
        return (
            <div className="formulario-innovated-container">
                <div className="form-submitting">
                    <h3>Enviando Formulario...</h3>
                    <div className="loading-spinner"></div>
                </div>
            </div>
        );
    }

    if (isSubmitted) {
        return (
            <div className="formulario-innovated-container">
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
        <div className="formulario-innovated-container">
            <div className="form-progress">
                {[1, 2, 3, 4, 5, 6, 7].map((step) => (
                    <div key={step} className="progress-step">
                        <div className={`progress-circle ${currentStep >= step ? 'active' : ''}`}></div>
                        {step < 7 && <div className={`progress-line ${currentStep > step ? 'active' : ''}`}></div>}
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
                {currentStep < 7 ? (
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

export default FormularioInnovated;

