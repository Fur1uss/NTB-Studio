"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import "./FormularioAdvanced.css";

const FormularioAdvanced = () => {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        // Paso 1
        nombre: '',
        email: '',
        tipoProyecto: '',
        // Paso 2
        descripcionProyecto: '',
        integracionesAPIs: [],
        requisitosSeguridad: [],
        escalabilidad: '',
        // Paso 3
        sistemaRoles: '',
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

    const integracionesOptions = [
        'APIs de terceros (Stripe, PayPal, etc.)',
        'Servicios de autenticación (Auth0, Firebase)',
        'APIs de redes sociales',
        'Servicios de almacenamiento en la nube',
        'APIs de comunicación (Email, SMS, WhatsApp)',
        'Otras integraciones personalizadas'
    ];

    const requisitosSeguridadOptions = [
        'Autenticación de dos factores (2FA)',
        'Encriptación de datos sensibles',
        'Cumplimiento GDPR/LGPD',
        'Certificados SSL/TLS',
        'Auditorías de seguridad',
        'Backup automático y recuperación'
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
                if (!formData.tipoProyecto) {
                    newErrors.tipoProyecto = 'Debes seleccionar un tipo de proyecto';
                }
                break;
            case 2:
                if (!formData.descripcionProyecto.trim()) {
                    newErrors.descripcionProyecto = 'La descripción es requerida';
                } else if (formData.descripcionProyecto.trim().length < 15) {
                    newErrors.descripcionProyecto = 'La descripción debe tener al menos 15 caracteres';
                }
                break;
            case 3:
                if (formData.integracionesAPIs.length === 0) {
                    newErrors.integracionesAPIs = 'Debes seleccionar al menos una integración';
                }
                if (!formData.escalabilidad) {
                    newErrors.escalabilidad = 'Debes seleccionar un nivel de escalabilidad';
                }
                break;
            case 4:
                if (!formData.sistemaRoles) {
                    newErrors.sistemaRoles = 'Debes indicar si necesitas sistema de roles';
                }
                break;
            case 5:
                if (!formData.presupuestoEstimado) {
                    newErrors.presupuestoEstimado = 'Debes seleccionar un rango de presupuesto';
                }
                if (!formData.fechaLimite) {
                    newErrors.fechaLimite = 'Debes seleccionar una fecha límite';
                }
                break;
            case 6:
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
            if (currentStep < 6) {
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
        if (validateStep(6)) {
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
                                <option value="aplicacion-web">Aplicación Web Completa</option>
                                <option value="sistema-gestion">Sistema de Gestión</option>
                                <option value="plataforma-saas">Plataforma SaaS</option>
                                <option value="ecommerce">E-commerce Avanzado</option>
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
                                placeholder="Describe detalladamente tu proyecto, requisitos técnicos y objetivos..."
                                rows="6"
                                className={errors.descripcionProyecto ? 'error' : ''}
                            />
                            {errors.descripcionProyecto && <span className="error-message">{errors.descripcionProyecto}</span>}
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="form-step-content">
                        <div className="form-field">
                            <label>Integraciones con APIs Externas</label>
                            <div className="checkbox-group">
                                {integracionesOptions.map((option) => (
                                    <label key={option} className="checkbox-label">
                                        <input
                                            type="checkbox"
                                            checked={formData.integracionesAPIs.includes(option)}
                                            onChange={() => handleCheckboxChange('integracionesAPIs', option)}
                                        />
                                        <span>{option}</span>
                                    </label>
                                ))}
                            </div>
                            {errors.integracionesAPIs && <span className="error-message">{errors.integracionesAPIs}</span>}
                        </div>
                        <div className="form-field">
                            <label>Nivel de Escalabilidad Requerido</label>
                            <select
                                value={formData.escalabilidad}
                                onChange={(e) => handleInputChange('escalabilidad', e.target.value)}
                                className={errors.escalabilidad ? 'error' : ''}
                            >
                                <option value="">Selecciona un nivel</option>
                                <option value="baja">Baja (hasta 100 usuarios concurrentes)</option>
                                <option value="media">Media (100-1000 usuarios concurrentes)</option>
                                <option value="alta">Alta (1000+ usuarios concurrentes)</option>
                                <option value="enterprise">Enterprise (escalabilidad ilimitada)</option>
                            </select>
                            {errors.escalabilidad && <span className="error-message">{errors.escalabilidad}</span>}
                        </div>
                    </div>
                );
            case 4:
                return (
                    <div className="form-step-content">
                        <div className="form-field">
                            <label>Requisitos de Seguridad (Opcional)</label>
                            <div className="checkbox-group">
                                {requisitosSeguridadOptions.map((option) => (
                                    <label key={option} className="checkbox-label">
                                        <input
                                            type="checkbox"
                                            checked={formData.requisitosSeguridad.includes(option)}
                                            onChange={() => handleCheckboxChange('requisitosSeguridad', option)}
                                        />
                                        <span>{option}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className="form-field">
                            <label>Sistema de Roles y Permisos</label>
                            <select
                                value={formData.sistemaRoles}
                                onChange={(e) => handleInputChange('sistemaRoles', e.target.value)}
                                className={errors.sistemaRoles ? 'error' : ''}
                            >
                                <option value="">Selecciona una opción</option>
                                <option value="si-basico">Sí, sistema básico (2-3 roles)</option>
                                <option value="si-avanzado">Sí, sistema avanzado (múltiples roles y permisos)</option>
                                <option value="no">No, no es necesario</option>
                                <option value="no-seguro">No estoy seguro</option>
                            </select>
                            {errors.sistemaRoles && <span className="error-message">{errors.sistemaRoles}</span>}
                        </div>
                    </div>
                );
            case 5:
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
                                <option value="300-400">$300.000 - $400.000</option>
                                <option value="400-500">$400.000 - $500.000</option>
                                <option value="500-550">$500.000 - $550.000</option>
                                <option value="mas-550">Más de $550.000</option>
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
                                <option value="urgente">Urgente (2-4 semanas)</option>
                                <option value="normal">Normal (1-3 meses)</option>
                                <option value="flexible">Flexible (3-6 meses)</option>
                            </select>
                            {errors.fechaLimite && <span className="error-message">{errors.fechaLimite}</span>}
                        </div>
                    </div>
                );
            case 6:
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
                                placeholder="Cualquier información adicional sobre requisitos técnicos, integraciones específicas, etc..."
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
                return "Integraciones y Escalabilidad";
            case 4:
                return "Seguridad y Roles";
            case 5:
                return "Presupuesto y Tiempo";
            case 6:
                return "Información de Contacto";
            default:
                return "";
        }
    };

    if (isSubmitting) {
        return (
            <div className="formulario-advanced-container">
                <div className="form-submitting">
                    <h3>Enviando Formulario...</h3>
                    <div className="loading-spinner"></div>
                </div>
            </div>
        );
    }

    if (isSubmitted) {
        return (
            <div className="formulario-advanced-container">
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
        <div className="formulario-advanced-container">
            <div className="form-progress">
                {[1, 2, 3, 4, 5, 6].map((step) => (
                    <div key={step} className="progress-step">
                        <div className={`progress-circle ${currentStep >= step ? 'active' : ''}`}></div>
                        {step < 6 && <div className={`progress-line ${currentStep > step ? 'active' : ''}`}></div>}
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
                {currentStep < 6 ? (
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

export default FormularioAdvanced;

