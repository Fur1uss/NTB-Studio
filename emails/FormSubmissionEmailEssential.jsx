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
const MailIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const FileTextIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#20E337" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const LayersIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#20E337" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#20E337" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const PaletteIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
    <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
    <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
    <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
  </svg>
);

const UserIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const DollarIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

const CalendarIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const MessageSquareIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const GlobeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const ZapIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="#000000" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

export const FormSubmissionEmailEssential = ({ formData }) => {
  // Función para formatear valores
  const formatValue = (value) => {
    if (Array.isArray(value)) {
      return value.length > 0 ? value : [];
    }
    return value || '';
  };

  // Formatear tipo de proyecto
  const formatTipoProyecto = (tipo) => {
    const tipos = {
      'landing-page': 'Landing Page',
      'spa': 'SPA (Single Page Application)',
      'web-app': 'Aplicación Web',
      'otro': 'Otro',
    };
    return tipos[tipo] || tipo || 'No especificado';
  };

  // Formatear estilo de diseño
  const formatEstiloDiseno = (estilo) => {
    const estilos = {
      'moderno-minimalista': 'Moderno y minimalista',
      'corporativo-profesional': 'Corporativo y profesional',
      'creativo-llamativo': 'Creativo y llamativo',
      'otro': 'Otro',
    };
    return estilos[estilo] || estilo || 'No especificado';
  };

  // Formatear presupuesto
  const formatPresupuesto = (presupuesto) => {
    const presupuestos = {
      'menos-100': 'Menos de $100.000',
      '100-150': '$100.000 - $150.000',
      '150-200': '$150.000 - $200.000',
      '200-250': '$200.000 - $250.000',
    };
    return presupuestos[presupuesto] || presupuesto || 'No especificado';
  };

  // Formatear fecha límite
  const formatFechaLimite = (fecha) => {
    const fechas = {
      'urgente': 'Urgente (1-2 semanas)',
      'normal': 'Normal (1-3 meses)',
      'flexible': 'Flexible (3+ meses)',
    };
    return fechas[fecha] || fecha || 'No especificado';
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

  // Generar ID único basado en timestamp
  const generateId = () => {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000);
    return `ESS-2024-${timestamp.toString().slice(-6)}${random}`;
  };

  const data = {
    nombre: formatValue(formData.nombre),
    email: formatValue(formData.email),
    tipoProyecto: formatTipoProyecto(formData.tipoProyecto),
    descripcionProyecto: formatValue(formData.descripcionProyecto),
    funcionalidades: Array.isArray(formData.funcionalidades) ? formData.funcionalidades : [],
    publicoObjetivo: formatValue(formData.publicoObjetivo),
    estiloDiseno: formatEstiloDiseno(formData.estiloDiseno),
    presupuestoEstimado: formatPresupuesto(formData.presupuestoEstimado),
    fechaLimite: formatFechaLimite(formData.fechaLimite),
    telefono: formatValue(formData.telefono),
    preferenciaContacto: formatPreferenciaContacto(formData.preferenciaContacto),
    comentariosAdicionales: formatValue(formData.comentariosAdicionales),
  };

  const formId = generateId();
  const initial = data.nombre ? data.nombre.charAt(0).toUpperCase() : '?';

  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          {/* Header: Distintivo para Plan Essential */}
          <Section style={header}>
            <div style={headerContent}>
              <div>
                <div style={headerTop}>
                  <div style={pulseDot}></div>
                  <Text style={headerLabel}>Solicitud de Plan</Text>
                </div>
                <Heading style={headerTitle}>
                  Essential <span style={greenDot}>.</span>
                </Heading>
              </div>
              <div style={headerRight}>
                <Text style={formIdText}>ID: {formId}</Text>
                <Text style={timeText}>Recibido hace unos momentos</Text>
              </div>
            </div>
            <div style={glowBackground}></div>
          </Section>

          <Section style={content}>
            {/* Resumen del Cliente */}
            <div style={clientCard}>
              <div style={clientInfo}>
                <div style={avatar}>{initial}</div>
                <div>
                  <Heading style={clientName}>{data.nombre}</Heading>
                  <div style={contactInfo}>
                    <Link href={`mailto:${data.email}`} style={contactLink}>
                      <MailIcon />
                      <span>{data.email}</span>
                    </Link>
                    <span style={contactItem}>
                      <PhoneIcon />
                      <span>{data.telefono}</span>
                    </span>
                  </div>
                </div>
              </div>
              <div style={preferenceBadge}>
                <MessageSquareIcon />
                <span>Prefiere {data.preferenciaContacto}</span>
              </div>
            </div>

            <Row>
              <Column style={leftColumn}>
                {/* Descripción del Proyecto */}
                <div style={section}>
                  <div style={sectionHeader}>
                    <FileTextIcon />
                    <Text style={sectionTitle}>El Proyecto</Text>
                  </div>
                  <div style={projectBox}>
                    <Heading style={projectTitle}>
                      {data.tipoProyecto}
                      {data.tipoProyecto === 'Landing Page' && <GlobeIcon />}
                    </Heading>
                    <div style={descriptionBox}>
                      <Text style={descriptionText}>"{data.descripcionProyecto}"</Text>
                    </div>
                  </div>
                </div>

                {/* Specs Técnicas */}
                <div style={section}>
                  <div style={sectionHeader}>
                    <LayersIcon />
                    <Text style={sectionTitle}>Especificaciones</Text>
                  </div>

                  {/* Funcionalidades */}
                  <div style={funcionalidadesSection}>
                    <Text style={funcionalidadesLabel}>Funcionalidades Requeridas:</Text>
                    <div style={tagsContainer}>
                      {data.funcionalidades.map((func, index) => (
                        <div key={index} style={tag}>
                          <CheckCircleIcon />
                          <span>{func}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Row>
                    <Column style={specCard}>
                      <div style={specCardContent}>
                        <PaletteIcon />
                        <Text style={specLabel}>Estilo Visual</Text>
                      </div>
                      <Text style={specValue}>{data.estiloDiseno}</Text>
                    </Column>
                    <Column style={specCard}>
                      <div style={specCardContent}>
                        <UserIcon />
                        <Text style={specLabel}>Público Objetivo</Text>
                      </div>
                      <Text style={specValue}>{data.publicoObjetivo}</Text>
                    </Column>
                  </Row>
                </div>
              </Column>

              {/* Columna Derecha: Logística */}
              <Column style={rightColumn}>
                <div style={logisticsBox}>
                  <div style={logisticsGlow}></div>
                  <Text style={logisticsTitle}>Logística</Text>

                  <div style={logisticsContent}>
                    <div style={logisticsItem}>
                      <div style={logisticsItemHeader}>
                        <DollarIcon />
                        <Text style={logisticsItemLabel}>Presupuesto Estimado</Text>
                      </div>
                      <Text style={logisticsItemValue}>{data.presupuestoEstimado}</Text>
                    </div>

                    <div style={logisticsItem}>
                      <div style={logisticsItemHeader}>
                        <CalendarIcon />
                        <Text style={logisticsItemLabel}>Plazo / Urgencia</Text>
                      </div>
                      <div style={urgencyBadge}>
                        <ZapIcon />
                        <span>{data.fechaLimite}</span>
                      </div>
                    </div>

                    {data.comentariosAdicionales && (
                      <div style={commentsSection}>
                        <div style={logisticsItemHeader}>
                          <MessageSquareIcon />
                          <Text style={logisticsItemLabel}>Comentarios Adicionales</Text>
                        </div>
                        <Text style={commentsText}>"{data.comentariosAdicionales}"</Text>
                      </div>
                    )}
                  </div>
                </div>
              </Column>
            </Row>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>NTB Studio Form System v2.0</Text>
            <Link href="#" style={footerLink}>Ver JSON Raw</Link>
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
  maxWidth: '768px',
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
};

const header = {
  backgroundColor: '#000000',
  padding: '32px',
  position: 'relative',
  overflow: 'hidden',
  borderBottom: '4px solid #20E337',
};

const headerContent = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  position: 'relative',
  zIndex: 10,
};

const headerTop = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  marginBottom: '8px',
};

const pulseDot = {
  width: '8px',
  height: '8px',
  backgroundColor: '#20E337',
  borderRadius: '50%',
};

const headerLabel = {
  color: '#20E337',
  fontSize: '11px',
  fontFamily: 'monospace',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  margin: '0',
};

const headerTitle = {
  color: '#ffffff',
  fontSize: '36px',
  fontWeight: '700',
  letterSpacing: '-0.02em',
  margin: '0',
};

const greenDot = {
  color: '#20E337',
};

const headerRight = {
  textAlign: 'right',
};

const formIdText = {
  color: '#9ca3af',
  fontSize: '11px',
  fontFamily: 'monospace',
  margin: '0',
};

const timeText = {
  color: '#6b7280',
  fontSize: '10px',
  textTransform: 'uppercase',
  margin: '4px 0 0 0',
};

const glowBackground = {
  position: 'absolute',
  top: 0,
  right: 0,
  width: '256px',
  height: '256px',
  background: 'linear-gradient(135deg, #20E337, transparent)',
  opacity: 0.1,
  filter: 'blur(48px)',
  pointerEvents: 'none',
};

const content = {
  padding: '32px',
};

const clientCard = {
  backgroundColor: '#f9fafb',
  padding: '24px',
  borderRadius: '12px',
  border: '1px solid #e5e7eb',
  marginBottom: '32px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const clientInfo = {
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
};

const avatar = {
  width: '48px',
  height: '48px',
  backgroundColor: '#000000',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#20E337',
  fontWeight: '700',
  fontSize: '20px',
};

const clientName = {
  fontSize: '18px',
  fontWeight: '700',
  color: '#111827',
  margin: '0 0 4px 0',
};

const contactInfo = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '16px',
  fontSize: '14px',
  color: '#4b5563',
  marginTop: '4px',
};

const contactLink = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '4px',
  color: '#4b5563',
  textDecoration: 'none',
};

const contactItem = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '4px',
};

const preferenceBadge = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  padding: '4px 12px',
  borderRadius: '9999px',
  backgroundColor: 'rgba(32, 227, 55, 0.1)',
  color: '#1a8f29',
  fontSize: '11px',
  fontWeight: '700',
  textTransform: 'uppercase',
  border: '1px solid rgba(32, 227, 55, 0.2)',
};

const leftColumn = {
  paddingRight: '16px',
  verticalAlign: 'top',
  width: '66.666%',
};

const rightColumn = {
  paddingLeft: '16px',
  verticalAlign: 'top',
  width: '33.333%',
};

const section = {
  marginBottom: '32px',
};

const sectionHeader = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  marginBottom: '16px',
};

const sectionTitle = {
  fontSize: '11px',
  fontWeight: '700',
  color: '#9ca3af',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  margin: '0',
};

const projectBox = {
  backgroundColor: '#ffffff',
  padding: '0',
};

const projectTitle = {
  fontSize: '24px',
  fontWeight: '700',
  color: '#111827',
  margin: '0 0 8px 0',
  textTransform: 'capitalize',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
};

const descriptionBox = {
  borderLeft: '4px solid #20E337',
  paddingLeft: '16px',
  paddingTop: '4px',
  paddingBottom: '4px',
  fontStyle: 'italic',
  backgroundColor: '#f9fafb',
  borderRadius: '0 8px 8px 0',
};

const descriptionText = {
  fontSize: '14px',
  lineHeight: '1.6',
  color: '#4b5563',
  margin: '0',
};

const funcionalidadesSection = {
  marginBottom: '24px',
};

const funcionalidadesLabel = {
  fontSize: '11px',
  color: '#6b7280',
  margin: '0 0 8px 0',
  display: 'block',
};

const tagsContainer = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
};

const tag = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  padding: '6px 12px',
  backgroundColor: '#000000',
  color: '#ffffff',
  fontSize: '11px',
  fontWeight: '500',
  borderRadius: '4px',
  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
};

const specCard = {
  padding: '0 8px',
  verticalAlign: 'top',
};

const specCardContent = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  marginBottom: '4px',
};

const specLabel = {
  fontSize: '11px',
  fontWeight: '700',
  color: '#6b7280',
  margin: '0',
};

const specValue = {
  fontSize: '14px',
  fontWeight: '600',
  color: '#111827',
  margin: '0',
};

const logisticsBox = {
  backgroundColor: '#000000',
  borderRadius: '12px',
  padding: '24px',
  color: '#ffffff',
  position: 'relative',
  overflow: 'hidden',
};

const logisticsGlow = {
  position: 'absolute',
  top: '-40px',
  right: '-40px',
  width: '128px',
  height: '128px',
  backgroundColor: '#20E337',
  filter: 'blur(50px)',
  opacity: 0.2,
  borderRadius: '50%',
  pointerEvents: 'none',
};

const logisticsTitle = {
  color: '#20E337',
  fontSize: '11px',
  fontWeight: '700',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  margin: '0 0 24px 0',
  paddingBottom: '8px',
  borderBottom: '1px solid #1f2937',
};

const logisticsContent = {
  position: 'relative',
  zIndex: 10,
};

const logisticsItem = {
  marginBottom: '24px',
};

const logisticsItemHeader = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  color: '#9ca3af',
  fontSize: '11px',
  marginBottom: '4px',
};

const logisticsItemLabel = {
  margin: '0',
  fontSize: '11px',
  color: '#9ca3af',
};

const logisticsItemValue = {
  fontSize: '20px',
  fontWeight: '700',
  color: '#ffffff',
  margin: '0',
};

const urgencyBadge = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  padding: '4px 12px',
  borderRadius: '4px',
  backgroundColor: '#20E337',
  color: '#000000',
  fontWeight: '700',
  fontSize: '14px',
};

const commentsSection = {
  paddingTop: '16px',
  borderTop: '1px solid #1f2937',
};

const commentsText = {
  fontSize: '11px',
  color: '#d1d5db',
  fontStyle: 'italic',
  lineHeight: '1.6',
  margin: '8px 0 0 0',
};

const footer = {
  backgroundColor: '#f9fafb',
  borderTop: '1px solid #e5e7eb',
  padding: '16px 32px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const footerText = {
  fontSize: '11px',
  color: '#9ca3af',
  margin: '0',
};

const footerLink = {
  fontSize: '11px',
  color: '#9ca3af',
  textDecoration: 'none',
};

export default FormSubmissionEmailEssential;

