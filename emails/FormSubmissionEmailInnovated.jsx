import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Hr,
  Row,
  Column,
  Link,
} from '@react-email/components';
import * as React from 'react';

// Iconos SVG inline
const RocketIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#20E337" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);

const LightbulbIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#20E337" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21h6" />
    <path d="M12 3a6 6 0 0 0 6 6v7a6 6 0 0 1-6 6 6 6 0 0 1-6-6V9a6 6 0 0 0 6-6z" />
    <path d="M12 9v6" />
    <path d="M12 18h.01" />
  </svg>
);

const TargetIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const CpuIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#20E337" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
    <rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" />
    <line x1="15" y1="1" x2="15" y2="4" />
    <line x1="9" y1="20" x2="9" y2="23" />
    <line x1="15" y1="20" x2="15" y2="23" />
    <line x1="20" y1="9" x2="23" y2="9" />
    <line x1="20" y1="14" x2="23" y2="14" />
    <line x1="1" y1="9" x2="4" y2="9" />
    <line x1="1" y1="14" x2="4" y2="14" />
  </svg>
);

const NetworkIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#20E337" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="16" y="16" width="6" height="6" rx="1" />
    <rect x="2" y="16" width="6" height="6" rx="1" />
    <rect x="9" y="2" width="6" height="6" rx="1" />
    <path d="M5 16v-6h14v6" />
    <path d="M12 12V8" />
  </svg>
);

const TrendingUpIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#20E337" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

const DollarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#20E337" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

const CalendarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#20E337" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const UsersIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const GlobeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#20E337" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const ServerIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
    <line x1="6" y1="6" x2="6.01" y2="6" />
    <line x1="6" y1="18" x2="6.01" y2="18" />
  </svg>
);

const SmartphoneIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#20E337" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
);

const CreditCardIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#20E337" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
    <line x1="1" y1="10" x2="23" y2="10" />
  </svg>
);

const MessageSquareIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

export const FormSubmissionEmailInnovated = ({ formData }) => {
  // Función para formatear valores
  const formatValue = (value) => {
    if (Array.isArray(value)) {
      return value.length > 0 ? value : [];
    }
    return value || '';
  };

  // Formatear tipo de startup
  const formatTipoStartup = (tipo) => {
    const tipos = {
      'startup-temprana': 'Startup en etapa temprana',
      'startup-crecimiento': 'Startup en crecimiento',
      'pyme': 'PYME',
      'emprendedor-individual': 'Emprendedor individual',
      'otro': 'Otro',
    };
    return tipos[tipo] || tipo || 'No especificado';
  };

  // Formatear modelo de negocio
  const formatModeloNegocio = (modelo) => {
    const modelos = {
      'suscripcion': 'Suscripción (SaaS)',
      'marketplace': 'Marketplace',
      'freemium': 'Freemium',
      'venta-directa': 'Venta directa',
      'publicidad': 'Publicidad',
      'comision': 'Por comisión',
      'otro': 'Otro',
    };
    return modelos[modelo] || modelo || 'No especificado';
  };

  // Formatear escalabilidad
  const formatEscalabilidad = (escala) => {
    const escalas = {
      'baja': 'Baja (hasta 500 usuarios)',
      'media': 'Media (500-5,000 usuarios)',
      'alta': 'Alta (5,000-50,000 usuarios)',
      'muy-alta': 'Muy alta (50,000+ usuarios)',
    };
    return escalas[escala] || escala || 'No especificado';
  };

  // Formatear presupuesto
  const formatPresupuesto = (presupuesto) => {
    const presupuestos = {
      '600-750': '$600.000 - $750.000',
      '750-850': '$750.000 - $850.000',
      '850-950': '$850.000 - $950.000',
      'mas-950': 'Más de $950.000',
    };
    return presupuestos[presupuesto] || presupuesto || 'No especificado';
  };

  // Formatear fecha de lanzamiento
  const formatFechaLanzamiento = (fecha) => {
    const fechas = {
      'urgente': 'Urgente (2-3 meses)',
      'normal': 'Normal (3-6 meses)',
      'flexible': 'Flexible (6-12 meses)',
    };
    return fechas[fecha] || fecha || 'No especificado';
  };

  // Formatear recursos disponibles
  const formatRecursos = (recursos) => {
    const recursosMap = {
      'solo-capital': 'Solo capital',
      'equipo-tecnico': 'Equipo técnico disponible',
      'ambos': 'Capital y equipo técnico',
      'ninguno': 'Aún no definido',
    };
    return recursosMap[recursos] || recursos || 'No especificado';
  };

  // Formatear preferencia de contacto
  const formatPreferenciaContacto = (pref) => {
    const preferencias = {
      'email': 'Email',
      'telefono': 'Teléfono',
      'whatsapp': 'WhatsApp',
      'cualquiera': 'Cualquiera',
    };
    return preferencias[pref] || pref || 'No especificado';
  };

  // Generar ID único
  const generateId = () => {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 100);
    return `INV-2025-X${random}`;
  };

  const data = {
    nombre: formatValue(formData.nombre),
    email: formatValue(formData.email),
    telefono: formatValue(formData.telefono),
    preferenciaContacto: formatPreferenciaContacto(formData.preferenciaContacto),
    tipoStartup: formatTipoStartup(formData.tipoStartup),
    descripcionIdea: formatValue(formData.descripcionIdea),
    problemaResolver: formatValue(formData.problemaResolver),
    solucionPropuesta: formatValue(formData.solucionPropuesta),
    mercadoObjetivo: formatValue(formData.mercadoObjetivo),
    modeloNegocio: formatModeloNegocio(formData.modeloNegocio),
    competencia: formatValue(formData.competencia),
    funcionalidadesMVP: Array.isArray(formData.funcionalidadesMVP) ? formData.funcionalidadesMVP : [],
    integracionesNecesarias: Array.isArray(formData.integracionesNecesarias) ? formData.integracionesNecesarias : [],
    escalabilidadEsperada: formatEscalabilidad(formData.escalabilidadEsperada),
    presupuestoEstimado: formatPresupuesto(formData.presupuestoEstimado),
    fechaLanzamiento: formatFechaLanzamiento(formData.fechaLanzamiento),
    recursosDisponibles: formatRecursos(formData.recursosDisponibles),
    comentariosAdicionales: formatValue(formData.comentariosAdicionales),
  };

  const formId = generateId();
  const initial = data.nombre ? data.nombre.charAt(0).toUpperCase() : '?';

  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          {/* HEADER: Plan Innovated */}
          <Section style={header}>
            <div style={gridBackground}></div>
            <div style={headerContent}>
              <div>
                <div style={headerTop}>
                  <span style={highTierBadge}>High Tier</span>
                  <Text style={refText}>REF: {formId}</Text>
                </div>
                <Heading style={headerTitle}>
                  INNOVATED <RocketIcon />
                </Heading>
                <Text style={headerSubtitle}>
                  Propuesta de Desarrollo de Producto Digital Complejo / MVP
                </Text>
              </div>
              <div style={clientSummary}>
                <div style={clientSummaryContent}>
                  <div style={avatar}>{initial}</div>
                  <div>
                    <Text style={clientName}>{data.nombre}</Text>
                    <Text style={clientEmail}>{data.email}</Text>
                    <Text style={clientContact}>{data.telefono} • {data.preferenciaContacto}</Text>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section style={content}>
            {/* SECCIÓN 1: LA VISIÓN DEL NEGOCIO */}
            <div style={section}>
              <div style={sectionHeader}>
                <LightbulbIcon />
                <Text style={sectionTitle}>1. Concepto & Visión</Text>
              </div>

              <Row>
                <Column style={fullColumn}>
                  <div style={startupTypeBadge}>
                    <RocketIcon />
                    <span>{data.tipoStartup}</span>
                  </div>
                </Column>
              </Row>

              <Row>
                <Column style={problemColumn}>
                  <div style={problemBox}>
                    <Text style={problemTitle}>El Problema</Text>
                    <Text style={problemText}>{data.problemaResolver}</Text>
                  </div>
                </Column>
                <Column style={solutionColumn}>
                  <div style={solutionBox}>
                    <div style={solutionGlow}></div>
                    <div style={solutionHeader}>
                      <TargetIcon />
                      <Text style={solutionTitle}>La Solución Propuesta</Text>
                    </div>
                    <Text style={solutionText}>{data.solucionPropuesta}</Text>
                  </div>
                </Column>
              </Row>

              <Row>
                <Column style={fullColumn}>
                  <div style={ideaBox}>
                    <Text style={ideaLabel}>Detalle de la Idea</Text>
                    <Text style={ideaText}>"{data.descripcionIdea}"</Text>
                  </div>
                </Column>
              </Row>
            </div>

            {/* SECCIÓN 2: MODELO DE NEGOCIO */}
            <div style={section}>
              <div style={sectionHeader}>
                <GlobeIcon />
                <Text style={sectionTitle}>2. Mercado & Estrategia</Text>
              </div>
              <Row>
                <Column style={marketCard}>
                  <Text style={marketLabel}>Mercado Objetivo</Text>
                  <Text style={marketValue}>{data.mercadoObjetivo}</Text>
                </Column>
                <Column style={marketCard}>
                  <Text style={marketLabel}>Modelo de Negocio</Text>
                  <div style={marketValueWithIcon}>
                    <CreditCardIcon />
                    <span>{data.modeloNegocio}</span>
                  </div>
                </Column>
                <Column style={marketCard}>
                  <Text style={marketLabel}>Competencia</Text>
                  <Text style={marketValue}>{data.competencia || 'No especificada'}</Text>
                </Column>
              </Row>
            </div>

            {/* SECCIÓN 3: ARQUITECTURA TÉCNICA */}
            <div style={techSection}>
              <div style={techBar}></div>
              <div style={techHeader}>
                <CpuIcon />
                <Text style={techTitle}>Arquitectura & Requerimientos MVP</Text>
              </div>

              <Row>
                <Column style={techLeftColumn}>
                  <div style={techSubsection}>
                    <div style={techSubheader}>
                      <SmartphoneIcon />
                      <Text style={techSubtitle}>Core Features</Text>
                    </div>
                    <div style={featuresList}>
                      {data.funcionalidadesMVP.map((item, i) => (
                        <div key={i} style={featureItem}>
                          <div style={featureDot}></div>
                          <Text style={featureText}>{item}</Text>
                        </div>
                      ))}
                    </div>
                  </div>
                </Column>
                <Column style={techRightColumn}>
                  <div style={techSubsection}>
                    <div style={techSubheader}>
                      <NetworkIcon />
                      <Text style={techSubtitle}>Integraciones (APIs)</Text>
                    </div>
                    <div style={integrationsContainer}>
                      {data.integracionesNecesarias.map((item, i) => (
                        <div key={i} style={integrationTag}>
                          <ServerIcon />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={scalabilityBox}>
                    <Text style={scalabilityLabel}>Escalabilidad Esperada</Text>
                    <div style={scalabilityValue}>
                      <TrendingUpIcon />
                      <span>{data.escalabilidadEsperada}</span>
                    </div>
                  </div>
                </Column>
              </Row>
            </div>

            {/* SECCIÓN 4: FACTIBILIDAD */}
            <Row>
              <Column style={feasibilityCard}>
                <Text style={feasibilityLabel}>Presupuesto</Text>
                <div style={feasibilityValue}>
                  <DollarIcon />
                  <span>{data.presupuestoEstimado}</span>
                </div>
              </Column>
              <Column style={feasibilityCard}>
                <Text style={feasibilityLabel}>Lanzamiento</Text>
                <div style={feasibilityValue}>
                  <CalendarIcon />
                  <span>{data.fechaLanzamiento}</span>
                </div>
              </Column>
              <Column style={feasibilityCardGreen}>
                <Text style={feasibilityLabel}>Recursos Disponibles</Text>
                <div style={feasibilityValueBlack}>
                  <UsersIcon />
                  <span>{data.recursosDisponibles}</span>
                </div>
              </Column>
            </Row>

            {/* Comentarios Adicionales */}
            {data.comentariosAdicionales && (
              <div style={commentsBox}>
                <MessageSquareIcon />
                <div>
                  <Text style={commentsTitle}>Notas Adicionales:</Text>
                  <Text style={commentsText}>"{data.comentariosAdicionales}"</Text>
                </div>
              </div>
            )}
          </Section>

          {/* FOOTER */}
          <Section style={footer}>
            <Text style={footerText}>Generado vía NTB Studio Form • Plan INNOVATED • v2.1</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

// Estilos
const main = {
  backgroundColor: '#f3f4f6',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  padding: '40px 16px',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  maxWidth: '896px',
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
};

const header = {
  backgroundColor: '#000000',
  padding: '32px',
  borderBottom: '1px solid #1f2937',
  position: 'relative',
  overflow: 'hidden',
};

const gridBackground = {
  position: 'absolute',
  inset: 0,
  opacity: 0.1,
  backgroundImage: 'linear-gradient(#20E337 1px, transparent 1px), linear-gradient(90deg, #20E337 1px, transparent 1px)',
  backgroundSize: '20px 20px',
};

const headerContent = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '16px',
  position: 'relative',
  zIndex: 10,
};

const headerTop = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  marginBottom: '4px',
};

const highTierBadge = {
  padding: '2px 8px',
  backgroundColor: '#20E337',
  color: '#000000',
  fontSize: '10px',
  fontWeight: '700',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  borderRadius: '2px',
};

const refText = {
  color: '#9ca3af',
  fontSize: '11px',
  fontFamily: 'monospace',
  margin: '0',
};

const headerTitle = {
  color: '#ffffff',
  fontSize: '36px',
  fontWeight: '800',
  letterSpacing: '-0.02em',
  margin: '0',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
};

const headerSubtitle = {
  color: '#9ca3af',
  fontSize: '14px',
  margin: '4px 0 0 0',
  maxWidth: '448px',
};

const clientSummary = {
  backgroundColor: 'rgba(17, 24, 39, 0.8)',
  backdropFilter: 'blur(4px)',
  padding: '16px',
  borderRadius: '8px',
  border: '1px solid #1f2937',
  minWidth: '280px',
};

const clientSummaryContent = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
};

const avatar = {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  backgroundColor: '#20E337',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#000000',
  fontWeight: '700',
  fontSize: '18px',
};

const clientName = {
  color: '#ffffff',
  fontWeight: '700',
  fontSize: '14px',
  margin: '0',
};

const clientEmail = {
  color: '#20E337',
  fontSize: '12px',
  margin: '0',
};

const clientContact = {
  color: '#6b7280',
  fontSize: '11px',
  margin: '2px 0 0 0',
};

const content = {
  padding: '32px',
};

const section = {
  marginBottom: '40px',
};

const sectionHeader = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  marginBottom: '24px',
  paddingBottom: '8px',
  borderBottom: '1px solid #e5e7eb',
};

const sectionTitle = {
  fontSize: '11px',
  fontWeight: '700',
  color: '#9ca3af',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  margin: '0',
};

const fullColumn = {
  padding: '0 8px',
  verticalAlign: 'top',
  width: '100%',
};

const startupTypeBadge = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  padding: '4px 12px',
  borderRadius: '9999px',
  backgroundColor: '#000000',
  color: '#ffffff',
  fontSize: '11px',
  fontWeight: '700',
  marginBottom: '24px',
};

const problemColumn = {
  padding: '0 8px',
  verticalAlign: 'top',
  width: '33.333%',
};

const solutionColumn = {
  padding: '0 8px',
  verticalAlign: 'top',
  width: '66.666%',
};

const problemBox = {
  backgroundColor: '#fef2f2',
  padding: '20px',
  borderRadius: '8px',
  border: '1px solid #fee2e2',
};

const problemTitle = {
  color: '#991b1b',
  fontWeight: '700',
  fontSize: '14px',
  textTransform: 'uppercase',
  margin: '0 0 8px 0',
};

const problemText = {
  color: '#374151',
  fontSize: '14px',
  lineHeight: '1.6',
  margin: '0',
};

const solutionBox = {
  backgroundColor: 'rgba(32, 227, 55, 0.1)',
  padding: '20px',
  borderRadius: '8px',
  border: '1px solid rgba(32, 227, 55, 0.3)',
  position: 'relative',
  overflow: 'hidden',
};

const solutionGlow = {
  position: 'absolute',
  top: 0,
  right: 0,
  width: '80px',
  height: '80px',
  backgroundColor: '#20E337',
  filter: 'blur(40px)',
  opacity: 0.2,
};

const solutionHeader = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  marginBottom: '8px',
  position: 'relative',
  zIndex: 10,
};

const solutionTitle = {
  color: '#14532d',
  fontWeight: '700',
  fontSize: '14px',
  textTransform: 'uppercase',
  margin: '0',
};

const solutionText = {
  color: '#111827',
  fontSize: '16px',
  fontWeight: '500',
  lineHeight: '1.6',
  margin: '0',
  position: 'relative',
  zIndex: 10,
};

const ideaBox = {
  backgroundColor: '#f9fafb',
  padding: '20px',
  borderRadius: '8px',
  border: '1px solid #e5e7eb',
};

const ideaLabel = {
  color: '#6b7280',
  fontWeight: '700',
  fontSize: '11px',
  textTransform: 'uppercase',
  margin: '0 0 8px 0',
  display: 'block',
};

const ideaText = {
  color: '#4b5563',
  fontSize: '14px',
  fontStyle: 'italic',
  margin: '0',
};

const marketCard = {
  padding: '0 8px',
  verticalAlign: 'top',
  width: '33.333%',
};

const marketLabel = {
  fontSize: '11px',
  color: '#9ca3af',
  fontWeight: '700',
  textTransform: 'uppercase',
  margin: '0 0 4px 0',
  display: 'block',
};

const marketValue = {
  fontSize: '14px',
  fontWeight: '600',
  color: '#111827',
  margin: '0',
};

const marketValueWithIcon = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  fontSize: '14px',
  fontWeight: '600',
  color: '#111827',
};

const techSection = {
  backgroundColor: '#111827',
  color: '#d1d5db',
  padding: '24px',
  borderRadius: '12px',
  position: 'relative',
  overflow: 'hidden',
  marginBottom: '40px',
};

const techBar = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '4px',
  height: '100%',
  backgroundColor: '#20E337',
};

const techHeader = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  marginBottom: '24px',
};

const techTitle = {
  color: '#ffffff',
  fontWeight: '700',
  fontSize: '18px',
  margin: '0',
};

const techLeftColumn = {
  paddingRight: '16px',
  verticalAlign: 'top',
  width: '50%',
};

const techRightColumn = {
  paddingLeft: '16px',
  verticalAlign: 'top',
  width: '50%',
};

const techSubsection = {
  marginBottom: '24px',
};

const techSubheader = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  marginBottom: '12px',
};

const techSubtitle = {
  color: '#20E337',
  fontSize: '11px',
  fontFamily: 'monospace',
  textTransform: 'uppercase',
  margin: '0',
};

const featuresList = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
};

const featureItem = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '8px',
  backgroundColor: 'rgba(31, 41, 55, 0.5)',
  padding: '8px',
  borderRadius: '4px',
  border: '1px solid #374151',
};

const featureDot = {
  width: '6px',
  height: '6px',
  backgroundColor: '#20E337',
  borderRadius: '50%',
  marginTop: '4px',
  boxShadow: '0 0 5px #20E337',
};

const featureText = {
  color: '#e5e7eb',
  fontSize: '14px',
  margin: '0',
};

const integrationsContainer = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
};

const integrationTag = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '4px',
  padding: '4px 8px',
  borderRadius: '4px',
  fontSize: '11px',
  fontWeight: '500',
  backgroundColor: '#1f2937',
  color: '#d1d5db',
  border: '1px solid #4b5563',
};

const scalabilityBox = {
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  padding: '16px',
  borderRadius: '4px',
  border: '1px solid #374151',
};

const scalabilityLabel = {
  color: '#9ca3af',
  fontSize: '11px',
  textTransform: 'uppercase',
  margin: '0 0 8px 0',
  display: 'block',
};

const scalabilityValue = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  color: '#ffffff',
  fontWeight: '700',
  fontSize: '16px',
};

const feasibilityCard = {
  padding: '0 8px',
  verticalAlign: 'top',
  width: '33.333%',
};

const feasibilityCardGreen = {
  padding: '0 8px',
  verticalAlign: 'top',
  width: '33.333%',
};

const feasibilityLabel = {
  fontSize: '11px',
  color: '#6b7280',
  fontWeight: '700',
  textTransform: 'uppercase',
  margin: '0 0 4px 0',
  display: 'block',
};

const feasibilityValue = {
  fontSize: '20px',
  fontWeight: '700',
  color: '#111827',
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
};

const feasibilityValueBlack = {
  fontSize: '14px',
  fontWeight: '700',
  color: '#111827',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
};

const commentsBox = {
  backgroundColor: '#fefce8',
  border: '1px solid #fef3c7',
  padding: '16px',
  borderRadius: '8px',
  fontSize: '14px',
  color: '#92400e',
  display: 'flex',
  gap: '12px',
  marginTop: '16px',
};

const commentsTitle = {
  fontWeight: '700',
  margin: '0 0 4px 0',
  display: 'block',
};

const commentsText = {
  margin: '0',
};

const footer = {
  backgroundColor: '#111827',
  color: '#6b7280',
  fontSize: '11px',
  padding: '16px 32px',
  textAlign: 'center',
  borderTop: '1px solid #1f2937',
};

const footerText = {
  margin: '0',
  color: '#6b7280',
  fontSize: '11px',
};

export default FormSubmissionEmailInnovated;

