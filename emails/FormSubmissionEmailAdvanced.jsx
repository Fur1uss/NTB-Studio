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
const ShieldCheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#20E337" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

const ServerIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#20E337" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
    <line x1="6" y1="6" x2="6.01" y2="6" />
    <line x1="6" y1="18" x2="6.01" y2="18" />
  </svg>
);

const UsersIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#20E337" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const LockIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const DatabaseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#20E337" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);

const LayoutGridIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </svg>
);

const ClockIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const DollarIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

const MessageSquareIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const CheckSquareIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#20E337" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 11 12 14 22 4" />
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </svg>
);

const AlertTriangleIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
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

export const FormSubmissionEmailAdvanced = ({ formData }) => {
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
      'aplicacion-web': 'Aplicación Web Completa',
      'sistema-gestion': 'Sistema de Gestión',
      'plataforma-saas': 'Plataforma SaaS',
      'ecommerce': 'E-commerce Avanzado',
      'otro': 'Otro',
    };
    return tipos[tipo] || tipo || 'No especificado';
  };

  // Formatear escalabilidad
  const formatEscalabilidad = (escala) => {
    const escalas = {
      'baja': { label: 'Baja', desc: 'hasta 100 usuarios', width: '25%' },
      'media': { label: 'Media', desc: '100 - 1000 usuarios', width: '50%' },
      'alta': { label: 'Alta', desc: '1000+ usuarios', width: '75%' },
      'enterprise': { label: 'Enterprise', desc: 'escalabilidad ilimitada', width: '100%' },
    };
    return escalas[escala] || { label: escala || 'No especificado', desc: '', width: '50%' };
  };

  // Formatear presupuesto
  const formatPresupuesto = (presupuesto) => {
    const presupuestos = {
      '300-400': '$300.000 - $400.000',
      '400-500': '$400.000 - $500.000',
      '500-550': '$500.000 - $550.000',
      'mas-550': 'Más de $550.000',
    };
    return presupuestos[presupuesto] || presupuesto || 'No especificado';
  };

  // Formatear fecha límite
  const formatFechaLimite = (fecha) => {
    const fechas = {
      'urgente': 'Urgente (2-4 semanas)',
      'normal': 'Normal (1-3 meses)',
      'flexible': 'Flexible (3-6 meses)',
    };
    return fechas[fecha] || fecha || 'No especificado';
  };

  // Formatear sistema de roles
  const formatSistemaRoles = (roles) => {
    const rolesMap = {
      'si-basico': 'Sí, sistema básico (2-3 roles)',
      'si-avanzado': 'Sí, sistema avanzado (múltiples roles y permisos)',
      'no': 'No, no es necesario',
      'no-seguro': 'No estoy seguro',
    };
    return rolesMap[roles] || roles || 'No especificado';
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
    const random = Math.floor(Math.random() * 10000);
    return `ADV-${random}`;
  };

  const data = {
    nombre: formatValue(formData.nombre),
    email: formatValue(formData.email),
    telefono: formatValue(formData.telefono),
    preferenciaContacto: formatPreferenciaContacto(formData.preferenciaContacto),
    tipoProyecto: formatTipoProyecto(formData.tipoProyecto),
    descripcionProyecto: formatValue(formData.descripcionProyecto),
    integracionesAPIs: Array.isArray(formData.integracionesAPIs) ? formData.integracionesAPIs : [],
    escalabilidad: formatEscalabilidad(formData.escalabilidad),
    requisitosSeguridad: Array.isArray(formData.requisitosSeguridad) ? formData.requisitosSeguridad : [],
    sistemaRoles: formatSistemaRoles(formData.sistemaRoles),
    presupuestoEstimado: formatPresupuesto(formData.presupuestoEstimado),
    fechaLimite: formatFechaLimite(formData.fechaLimite),
    comentariosAdicionales: formatValue(formData.comentariosAdicionales),
  };

  const formId = generateId();
  const initial = data.nombre ? data.nombre.charAt(0).toUpperCase() : '?';
  const escalabilidadInfo = data.escalabilidad;

  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          {/* HEADER: Estilo Blueprint / Ingenieril */}
          <Section style={header}>
            <div style={gridPattern}></div>
            <div style={headerContent}>
              <div>
                <div style={headerTop}>
                  <span style={systemBadge}>System Request</span>
                  <Text style={idText}>ID: {formId}</Text>
                </div>
                <Heading style={headerTitle}>
                  Plan Advanced <DatabaseIcon />
                </Heading>
                <Text style={headerSubtitle}>
                  Solicitud de desarrollo de sistema escalable con requisitos de seguridad específicos.
                </Text>
              </div>
              <div style={contactCard}>
                <div style={contactCardContent}>
                  <div style={avatar}>{initial}</div>
                  <div>
                    <Text style={contactName}>{data.nombre}</Text>
                    <Text style={contactEmail}>{data.email}</Text>
                  </div>
                </div>
                <div style={contactButtons}>
                  <Link href={`tel:${data.telefono}`} style={callButton}>
                    Llamar
                  </Link>
                  <div style={contactBadge}>
                    <MessageSquareIcon />
                    <span>{data.preferenciaContacto}</span>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Row>
            {/* COLUMNA IZQUIERDA: Detalles del Proyecto */}
            <Column style={leftColumn}>
              <Section style={contentSection}>
                {/* 1. Resumen del Proyecto */}
                <div style={section}>
                  <div style={sectionHeader}>
                    <FileTextIcon />
                    <Text style={sectionTitle}>Descripción General</Text>
                  </div>
                  <div style={descriptionBox}>
                    <div style={tipoSection}>
                      <Text style={tipoLabel}>Tipo de Solución</Text>
                      <div style={tipoValue}>
                        <LayoutGridIcon />
                        <span>{data.tipoProyecto}</span>
                      </div>
                    </div>
                    <div>
                      <Text style={necesidadLabel}>Necesidad del Negocio</Text>
                      <div style={necesidadBox}>
                        <Text style={necesidadText}>"{data.descripcionProyecto}"</Text>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Requisitos Técnicos (Integraciones) */}
                <div style={section}>
                  <div style={sectionHeader}>
                    <ServerIcon />
                    <Text style={sectionTitle}>Integraciones & Backend</Text>
                  </div>
                  <div style={integrationsBox}>
                    <div style={integrationsHeader}>
                      <Text style={integrationsHeaderText}>APIs Requeridas</Text>
                      <span style={integrationsCount}>{data.integracionesAPIs.length} items</span>
                    </div>
                    <div style={integrationsList}>
                      {data.integracionesAPIs.map((api, i) => (
                        <div key={i} style={integrationItem}>
                          <CheckSquareIcon />
                          <Text style={integrationText}>{api}</Text>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 3. Seguridad y Roles */}
                <div style={section}>
                  <div style={sectionHeader}>
                    <ShieldCheckIcon />
                    <Text style={sectionTitle}>Seguridad & Accesos</Text>
                  </div>
                  <Row>
                    <Column style={rolesCard}>
                      <div style={rolesCardContent}>
                        <div style={rolesGlow}></div>
                        <div style={rolesContent}>
                          <UsersIcon />
                          <Text style={rolesLabel}>Gestión de Usuarios</Text>
                          <Text style={rolesValue}>{data.sistemaRoles}</Text>
                        </div>
                      </div>
                    </Column>
                    <Column style={securityCard}>
                      <div style={securityCardContent}>
                        <LockIcon />
                        <Text style={securityLabel}>Protocolos Activos</Text>
                        <div style={securityList}>
                          {data.requisitosSeguridad.map((req, i) => (
                            <div key={i} style={securityItem}>
                              <span style={securityDot}></span>
                              <Text style={securityText}>{req}</Text>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Column>
                  </Row>
                </div>
              </Section>
            </Column>

            {/* COLUMNA DERECHA: Sidebar de Factibilidad */}
            <Column style={rightColumn}>
              <Section style={sidebar}>
                {/* Widget de Escalabilidad */}
                <div style={widget}>
                  <div style={widgetHeader}>
                    <LayoutGridIcon />
                    <Text style={widgetLabel}>Escala</Text>
                  </div>
                  <Text style={widgetValue}>{escalabilidadInfo.label}</Text>
                  <Text style={widgetDesc}>{escalabilidadInfo.desc}</Text>
                  <div style={progressBar}>
                    <div style={{...progressFill, width: escalabilidadInfo.width}}></div>
                  </div>
                </div>

                {/* Widget de Presupuesto y Entrega */}
                <div style={widgetGroup}>
                  <div style={widgetItem}>
                    <div style={widgetItemHeader}>
                      <DollarIcon />
                      <Text style={widgetItemLabel}>Presupuesto</Text>
                    </div>
                    <div style={presupuestoBox}>
                      {data.presupuestoEstimado}
                    </div>
                  </div>

                  <div style={widgetItem}>
                    <div style={widgetItemHeader}>
                      <ClockIcon />
                      <Text style={widgetItemLabel}>Entrega</Text>
                    </div>
                    <div style={entregaBox}>
                      <span style={entregaDot}></span>
                      <span>{data.fechaLimite}</span>
                    </div>
                  </div>
                </div>

                {/* Widget de Notas Adicionales */}
                {data.comentariosAdicionales && (
                  <div style={notesWidget}>
                    <div style={notesHeader}>
                      <AlertTriangleIcon />
                      <Text style={notesLabel}>Notas</Text>
                    </div>
                    <div style={notesBox}>
                      <Text style={notesText}>"{data.comentariosAdicionales}"</Text>
                    </div>
                  </div>
                )}

                {/* Footer del Sidebar */}
                <div style={sidebarFooter}>
                  <Text style={sidebarFooterText}>NTB Studio • Advanced Form</Text>
                </div>
              </Section>
            </Column>
          </Row>
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
  borderTop: '4px solid #20E337',
};

const header = {
  backgroundColor: '#111827',
  padding: '32px',
  position: 'relative',
};

const gridPattern = {
  position: 'absolute',
  inset: 0,
  opacity: 0.2,
  backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)',
  backgroundSize: '10px 10px',
};

const headerContent = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  position: 'relative',
  zIndex: 10,
};

const headerTop = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  marginBottom: '8px',
};

const systemBadge = {
  backgroundColor: '#20E337',
  color: '#000000',
  fontSize: '10px',
  fontWeight: '700',
  padding: '2px 8px',
  borderRadius: '2px',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
};

const idText = {
  color: '#6b7280',
  fontSize: '11px',
  fontFamily: 'monospace',
  margin: '0',
};

const headerTitle = {
  color: '#ffffff',
  fontSize: '24px',
  fontWeight: '700',
  letterSpacing: '-0.02em',
  margin: '0',
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
};

const headerSubtitle = {
  color: '#9ca3af',
  fontSize: '14px',
  margin: '8px 0 0 0',
  maxWidth: '448px',
};

const contactCard = {
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  padding: '16px',
  borderRadius: '8px',
  backdropFilter: 'blur(4px)',
  maxWidth: '320px',
};

const contactCardContent = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  marginBottom: '12px',
};

const avatar = {
  width: '40px',
  height: '40px',
  backgroundColor: '#ffffff',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#000000',
  fontWeight: '700',
  fontSize: '18px',
};

const contactName = {
  color: '#ffffff',
  fontSize: '14px',
  fontWeight: '700',
  margin: '0',
};

const contactEmail = {
  color: '#9ca3af',
  fontSize: '12px',
  margin: '0',
};

const contactButtons = {
  display: 'flex',
  gap: '8px',
};

const callButton = {
  flex: 1,
  backgroundColor: '#20E337',
  color: '#000000',
  fontSize: '11px',
  fontWeight: '700',
  padding: '8px',
  borderRadius: '4px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'block',
};

const contactBadge = {
  flex: 1,
  backgroundColor: '#000000',
  border: '1px solid #4b5563',
  color: '#d1d5db',
  fontSize: '11px',
  fontWeight: '700',
  padding: '8px',
  borderRadius: '4px',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '4px',
};

const leftColumn = {
  padding: '32px',
  verticalAlign: 'top',
  width: '66.666%',
};

const rightColumn = {
  width: '33.333%',
  verticalAlign: 'top',
  backgroundColor: '#f9fafb',
  borderLeft: '1px solid #e5e7eb',
};

const contentSection = {
  padding: '0',
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

const descriptionBox = {
  backgroundColor: '#f9fafb',
  padding: '24px',
  borderRadius: '12px',
  border: '1px solid #e5e7eb',
};

const tipoSection = {
  marginBottom: '16px',
};

const tipoLabel = {
  fontSize: '11px',
  color: '#6b7280',
  fontWeight: '700',
  textTransform: 'uppercase',
  margin: '0 0 4px 0',
  display: 'block',
};

const tipoValue = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  fontSize: '18px',
  fontWeight: '700',
  color: '#111827',
};

const necesidadLabel = {
  fontSize: '11px',
  color: '#6b7280',
  fontWeight: '700',
  textTransform: 'uppercase',
  margin: '0 0 8px 0',
  display: 'block',
};

const necesidadBox = {
  borderLeft: '2px solid #20E337',
  paddingLeft: '16px',
};

const necesidadText = {
  color: '#374151',
  fontSize: '14px',
  lineHeight: '1.6',
  fontStyle: 'italic',
  margin: '0',
};

const integrationsBox = {
  backgroundColor: '#ffffff',
  border: '1px solid #e5e7eb',
  borderRadius: '12px',
  overflow: 'hidden',
};

const integrationsHeader = {
  padding: '16px',
  backgroundColor: '#f9fafb',
  borderBottom: '1px solid #e5e7eb',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const integrationsHeaderText = {
  fontSize: '14px',
  fontWeight: '700',
  color: '#374151',
  margin: '0',
};

const integrationsCount = {
  fontSize: '11px',
  backgroundColor: '#000000',
  color: '#ffffff',
  padding: '4px 8px',
  borderRadius: '9999px',
};

const integrationsList = {
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
};

const integrationItem = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  fontSize: '14px',
  color: '#4b5563',
};

const integrationText = {
  margin: '0',
  fontSize: '14px',
  color: '#4b5563',
};

const rolesCard = {
  padding: '0 8px',
  verticalAlign: 'top',
  width: '50%',
};

const securityCard = {
  padding: '0 8px',
  verticalAlign: 'top',
  width: '50%',
};

const rolesCardContent = {
  backgroundColor: '#000000',
  color: '#ffffff',
  padding: '20px',
  borderRadius: '12px',
  position: 'relative',
  overflow: 'hidden',
};

const rolesGlow = {
  position: 'absolute',
  top: 0,
  right: 0,
  width: '64px',
  height: '64px',
  backgroundColor: '#20E337',
  filter: 'blur(40px)',
  opacity: 0.2,
};

const rolesContent = {
  position: 'relative',
  zIndex: 10,
};

const rolesLabel = {
  color: '#9ca3af',
  fontSize: '11px',
  fontWeight: '700',
  textTransform: 'uppercase',
  margin: '12px 0 4px 0',
  display: 'block',
};

const rolesValue = {
  fontWeight: '700',
  fontSize: '14px',
  lineHeight: '1.4',
  margin: '0',
};

const securityCardContent = {
  border: '1px solid #e5e7eb',
  padding: '20px',
  borderRadius: '12px',
  backgroundColor: '#f9fafb',
};

const securityLabel = {
  color: '#9ca3af',
  fontSize: '11px',
  fontWeight: '700',
  textTransform: 'uppercase',
  margin: '12px 0 8px 0',
  display: 'block',
};

const securityList = {
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
};

const securityItem = {
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  fontSize: '12px',
  color: '#4b5563',
};

const securityDot = {
  width: '4px',
  height: '4px',
  backgroundColor: '#20E337',
  borderRadius: '50%',
};

const securityText = {
  margin: '0',
  fontSize: '12px',
  color: '#4b5563',
};

const sidebar = {
  padding: '32px',
};

const widget = {
  backgroundColor: '#ffffff',
  padding: '20px',
  borderRadius: '12px',
  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
  border: '1px solid #e5e7eb',
  marginBottom: '32px',
};

const widgetHeader = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  marginBottom: '12px',
  color: '#9ca3af',
  textTransform: 'uppercase',
  fontSize: '11px',
  fontWeight: '700',
};

const widgetLabel = {
  margin: '0',
  fontSize: '11px',
  color: '#9ca3af',
  textTransform: 'uppercase',
  fontWeight: '700',
};

const widgetValue = {
  fontSize: '24px',
  fontWeight: '800',
  color: '#111827',
  margin: '0',
};

const widgetDesc = {
  fontSize: '11px',
  color: '#6b7280',
  margin: '4px 0 12px 0',
};

const progressBar = {
  width: '100%',
  backgroundColor: '#e5e7eb',
  height: '6px',
  borderRadius: '9999px',
  overflow: 'hidden',
};

const progressFill = {
  backgroundColor: '#20E337',
  height: '100%',
  borderRadius: '9999px',
};

const widgetGroup = {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  marginBottom: '32px',
};

const widgetItem = {
  marginBottom: '0',
};

const widgetItemHeader = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  fontSize: '11px',
  fontWeight: '700',
  color: '#9ca3af',
  textTransform: 'uppercase',
  marginBottom: '4px',
};

const widgetItemLabel = {
  margin: '0',
  fontSize: '11px',
  color: '#9ca3af',
  textTransform: 'uppercase',
  fontWeight: '700',
};

const presupuestoBox = {
  fontSize: '18px',
  fontWeight: '700',
  color: '#166534',
  backgroundColor: '#f0fdf4',
  padding: '8px 12px',
  borderRadius: '4px',
  border: '1px solid #bbf7d0',
};

const entregaBox = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  fontSize: '14px',
  fontWeight: '600',
  color: '#374151',
};

const entregaDot = {
  width: '8px',
  height: '8px',
  backgroundColor: '#fbbf24',
  borderRadius: '50%',
};

const notesWidget = {
  marginTop: 'auto',
  paddingTop: '24px',
  borderTop: '1px solid #e5e7eb',
};

const notesHeader = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  fontSize: '11px',
  fontWeight: '700',
  color: '#9ca3af',
  textTransform: 'uppercase',
  marginBottom: '8px',
};

const notesLabel = {
  margin: '0',
  fontSize: '11px',
  color: '#9ca3af',
  textTransform: 'uppercase',
  fontWeight: '700',
};

const notesBox = {
  fontSize: '11px',
  color: '#4b5563',
  fontStyle: 'italic',
  lineHeight: '1.6',
  backgroundColor: '#fefce8',
  padding: '12px',
  borderRadius: '4px',
  border: '1px solid #fef3c7',
};

const notesText = {
  margin: '0',
  fontSize: '11px',
  color: '#4b5563',
  fontStyle: 'italic',
};

const sidebarFooter = {
  textAlign: 'center',
  marginTop: '16px',
};

const sidebarFooterText = {
  fontSize: '10px',
  color: '#9ca3af',
  margin: '0',
};

export default FormSubmissionEmailAdvanced;

