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

// Iconos SVG inline (reemplazo de lucide-react)
const MailIcon = () => (
  <div style={{ color: '#9ca3af', width: '20px', height: '20px', display: 'inline-block' }}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  </div>
);

const PhoneIcon = () => (
  <div style={{ color: '#9ca3af', width: '20px', height: '20px', display: 'inline-block' }}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  </div>
);

const BuildingIcon = () => (
  <div style={{ color: '#20E337', width: '16px', height: '16px', display: 'inline-block' }}>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#20E337" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18" />
      <path d="M5 21V7l8-4v18" />
      <path d="M19 21V11l-6-4" />
      <path d="M9 9v0" />
      <path d="M9 12v0" />
      <path d="M9 15v0" />
      <path d="M9 18v0" />
    </svg>
  </div>
);

const FolderIcon = () => (
  <div style={{ color: '#20E337', width: '16px', height: '16px', display: 'inline-block' }}>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#20E337" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  </div>
);

const TargetIcon = () => (
  <div style={{ color: '#20E337', width: '16px', height: '16px', display: 'inline-block' }}>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#20E337" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  </div>
);

const ClockIcon = () => (
  <div style={{ color: '#20E337', width: '16px', height: '16px', display: 'inline-block' }}>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#20E337" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  </div>
);

const MessageIcon = () => (
  <div style={{ color: '#9ca3af', width: '20px', height: '20px', display: 'inline-block' }}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  </div>
);

const DollarIcon = () => (
  <div style={{ color: '#9ca3af', width: '20px', height: '20px', display: 'inline-block' }}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  </div>
);

const AlertIcon = () => (
  <div style={{ color: '#9ca3af', width: '20px', height: '20px', display: 'inline-block' }}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  </div>
);

export const FormSubmissionEmail = ({ formType, formData }) => {
  // Función para formatear valores
  const formatValue = (value) => {
    if (Array.isArray(value)) {
      return value.length > 0 ? value.join(', ') : 'No especificado';
    }
    if (typeof value === 'boolean') {
      return value ? 'Sí' : 'No';
    }
    return value || 'No especificado';
  };

  // Función para formatear horario
  const formatHorario = (horario) => {
    const horarios = {
      'manana': 'Mañana (9:00 - 12:00)',
      'tarde': 'Tarde (12:00 - 18:00)',
      'noche': 'Noche (18:00 - 21:00)',
      'flexible': 'Flexible',
    };
    return horarios[horario] || horario || 'No especificado';
  };

  // Función para formatear urgencia con color
  const getUrgenciaColor = (urgencia) => {
    const colores = {
      'baja': '#10b981', // verde
      'media': '#f59e0b', // amarillo
      'alta': '#ef4444', // rojo
      'urgente': '#dc2626', // rojo oscuro
    };
    return colores[urgencia] || '#6b7280';
  };

  // Extraer datos según el tipo de formulario
  const getData = () => {
    if (formType === 'contacto') {
      return {
        nombre: formData.nombreCompleto || 'No especificado',
        email: formData.correo || 'No especificado',
        telefono: formData.telefono || 'No especificado',
        empresa: formData.nombreEmpresa || 'No especificado',
        rubro: formData.rubro || 'No especificado',
        tipoProyecto: formData.tipoProyecto || 'No especificado',
        objetivo: formData.principalObjetivo || 'No especificado',
        descripcion: formData.descripcionProyecto || 'No especificado',
        presupuesto: formData.presupuestoEstimado || 'No especificado',
        urgencia: formData.nivelUrgencia || 'No especificado',
        contacto: formData.preferenciaContacto || 'No especificado',
        horario: formatHorario(formData.horarioPreferido),
      };
    } else {
      // Para Essential, Innovated, Advanced
      return {
        nombre: formData.nombre || 'No especificado',
        email: formData.email || 'No especificado',
        telefono: formData.telefono || 'No especificado',
        empresa: formData.nombreEmpresa || formData.tipoStartup || 'No especificado',
        rubro: formData.rubro || formData.tipoProyecto || 'No especificado',
        tipoProyecto: formData.tipoProyecto || 'No especificado',
        objetivo: formData.principalObjetivo || formData.modeloNegocio || 'No especificado',
        descripcion: formData.descripcionProyecto || formData.descripcionIdea || 'No especificado',
        presupuesto: formData.presupuestoEstimado || 'No especificado',
        urgencia: formData.nivelUrgencia || formData.fechaLimite || formData.fechaLanzamiento || 'No especificado',
        contacto: formData.preferenciaContacto || 'No especificado',
        horario: formatHorario(formData.horarioPreferido),
      };
    }
  };

  const data = getData();
  const urgenciaColor = getUrgenciaColor(data.urgencia);

  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          {/* Header del Correo (Estilo NTB) */}
          <Section style={header}>
            <div style={headerContent}>
              <div>
                <Heading style={headerTitle}>NTB</Heading>
                <Text style={headerSubtitle}>NEXT TECH BRIDGE</Text>
              </div>
              <div style={badge}>
                Nuevo Lead
              </div>
            </div>
            {/* Elemento decorativo verde (Glow) */}
            <div style={glowEffect}></div>
          </Section>

          {/* Cuerpo del Correo */}
          <Section style={content}>
            {/* Saludo */}
            <div style={greetingSection}>
              <Heading style={greetingTitle}>¡Hola Equipo! 👋</Heading>
              <Text style={greetingText}>
                Han recibido una nueva solicitud de contacto a través del formulario web. Aquí están los detalles del proyecto:
              </Text>
            </div>

            {/* Sección 1: Información del Cliente */}
            <div style={infoBox}>
              <div style={sectionHeader}>
                <BuildingIcon />
                <Text style={sectionHeaderText}>Información del Cliente</Text>
              </div>
              <Row>
                <Column style={infoColumn}>
                  <Text style={infoLabel}>Nombre Completo</Text>
                  <Text style={infoValue}>{data.nombre}</Text>
                </Column>
                <Column style={infoColumn}>
                  <Text style={infoLabel}>Empresa / Organización</Text>
                  <Text style={infoValue}>{data.empresa}</Text>
                </Column>
              </Row>
              <Row style={infoRow}>
                <Column style={infoColumnWithIcon}>
                  <MailIcon />
                  <div>
                    <Text style={infoLabel}>Correo Electrónico</Text>
                    <Link href={`mailto:${data.email}`} style={emailLink}>
                      {data.email}
                    </Link>
                  </div>
                </Column>
              </Row>
              <Row style={infoRow}>
                <Column style={infoColumnWithIcon}>
                  <PhoneIcon />
                  <div>
                    <Text style={infoLabel}>Teléfono</Text>
                    <Text style={infoValue}>{data.telefono}</Text>
                  </div>
                </Column>
              </Row>
            </div>

            {/* Sección 2: Detalles del Proyecto */}
            <div>
              <div style={sectionHeader}>
                <FolderIcon />
                <Text style={sectionHeaderText}>Sobre el Proyecto</Text>
              </div>
              
              <Row>
                <Column style={projectCard}>
                  <div style={cardContent}>
                    <TargetIcon />
                    <Text style={cardLabel}>Rubro</Text>
                  </div>
                  <Text style={cardValue}>{data.rubro}</Text>
                </Column>
                <Column style={projectCard}>
                  <div style={cardContent}>
                    <FolderIcon />
                    <Text style={cardLabel}>Tipo</Text>
                  </div>
                  <Text style={cardValue}>{data.tipoProyecto}</Text>
                </Column>
              </Row>

              <div style={descriptionBox}>
                <div style={greenBar}></div>
                <Text style={descriptionLabel}>Descripción del requerimiento</Text>
                <Text style={descriptionText}>"{data.descripcion}"</Text>
                <div style={descriptionFooter}>
                  <span style={objectiveBadge}>Objetivo: {data.objetivo}</span>
                </div>
              </div>
            </div>

            {/* Sección 3: Datos Logísticos */}
            <Row>
              <Column style={logisticCard}>
                <DollarIcon />
                <Text style={logisticLabel}>Presupuesto</Text>
                <Text style={logisticValue}>{data.presupuesto}</Text>
              </Column>
              <Column style={logisticCard}>
                <AlertIcon />
                <Text style={logisticLabel}>Urgencia</Text>
                <div style={urgencyContainer}>
                  <span style={{...urgencyDot, backgroundColor: urgenciaColor}}></span>
                  <Text style={logisticValue}>{data.urgencia}</Text>
                </div>
              </Column>
              <Column style={logisticCard}>
                <MessageIcon />
                <Text style={logisticLabel}>Vía preferida</Text>
                <Text style={logisticValue}>{data.contacto}</Text>
              </Column>
            </Row>

            {/* Horario Preferido */}
            <div style={scheduleBox}>
              <ClockIcon />
              <Text style={scheduleText}>
                Horario preferido de contacto: <span style={scheduleBold}>{data.horario}</span>
              </Text>
            </div>
          </Section>

          {/* Footer del Correo */}
          <Section style={footer}>
            <Text style={footerText}>
              Este correo fue generado automáticamente desde el formulario web de NTB Studio.
            </Text>
            <div style={footerButtons}>
              <Link href={`mailto:${data.email}?subject=Re: Nueva Solicitud`} style={buttonPrimary}>
                Responder en Gmail
              </Link>
              <div style={buttonSecondary}>
                Ver en CRM
              </div>
            </div>
            <div style={footerBottom}>
              <Text style={footerTagline}>Conectando ideas • Creando innovación</Text>
            </div>
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
  maxWidth: '600px',
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
};

const header = {
  backgroundColor: '#000000',
  padding: '32px',
  position: 'relative',
  overflow: 'hidden',
};

const headerContent = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  zIndex: 10,
};

const headerTitle = {
  color: '#20E337',
  fontSize: '36px',
  fontWeight: '800',
  margin: '0 0 4px 0',
  letterSpacing: '-0.02em',
};

const headerSubtitle = {
  color: '#ffffff',
  fontSize: '12px',
  opacity: 0.8,
  letterSpacing: '0.1em',
  margin: '0',
  textTransform: 'uppercase',
};

const badge = {
  backgroundColor: '#20E337',
  color: '#000000',
  fontSize: '11px',
  fontWeight: '700',
  padding: '4px 12px',
  borderRadius: '9999px',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
};

const glowEffect = {
  position: 'absolute',
  bottom: '-40px',
  right: '-40px',
  width: '128px',
  height: '128px',
  backgroundColor: '#20E337',
  filter: 'blur(60px)',
  opacity: 0.4,
  borderRadius: '50%',
  pointerEvents: 'none',
};

const content = {
  padding: '32px',
};

const greetingSection = {
  borderBottom: '1px solid #f3f4f6',
  paddingBottom: '24px',
  marginBottom: '32px',
};

const greetingTitle = {
  fontSize: '24px',
  fontWeight: '700',
  color: '#111827',
  margin: '0 0 8px 0',
};

const greetingText = {
  fontSize: '14px',
  lineHeight: '1.6',
  color: '#4b5563',
  margin: '0',
};

const infoBox = {
  backgroundColor: '#f9fafb',
  borderRadius: '12px',
  padding: '24px',
  border: '1px solid #e5e7eb',
  marginBottom: '32px',
};

const sectionHeader = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  marginBottom: '16px',
};

const sectionHeaderText = {
  fontSize: '11px',
  fontWeight: '700',
  color: '#9ca3af',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  margin: '0',
};

const infoColumn = {
  padding: '0 8px',
  verticalAlign: 'top',
};

const infoRow = {
  marginTop: '24px',
};

const infoColumnWithIcon = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '12px',
  padding: '0',
};

const infoLabel = {
  fontSize: '11px',
  color: '#6b7280',
  margin: '0 0 4px 0',
  display: 'block',
};

const infoValue = {
  fontSize: '16px',
  fontWeight: '600',
  color: '#111827',
  margin: '0',
  display: 'block',
};

const emailLink = {
  color: '#000000',
  fontWeight: '500',
  textDecoration: 'underline',
  textDecorationColor: '#20E337',
  textDecorationThickness: '2px',
  textUnderlineOffset: '2px',
};

const projectCard = {
  padding: '0 8px',
  verticalAlign: 'top',
};

const cardContent = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  marginBottom: '4px',
};

const cardLabel = {
  fontSize: '11px',
  fontWeight: '700',
  color: '#6b7280',
  textTransform: 'uppercase',
  margin: '0',
};

const cardValue = {
  fontSize: '14px',
  fontWeight: '500',
  color: '#111827',
  textTransform: 'capitalize',
  margin: '0',
};

const descriptionBox = {
  backgroundColor: '#000000',
  color: '#ffffff',
  padding: '24px',
  borderRadius: '12px',
  position: 'relative',
  overflow: 'hidden',
  marginTop: '24px',
};

const greenBar = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '4px',
  height: '100%',
  backgroundColor: '#20E337',
};

const descriptionLabel = {
  color: '#20E337',
  fontSize: '11px',
  fontWeight: '700',
  textTransform: 'uppercase',
  margin: '0 0 8px 0',
  display: 'block',
};

const descriptionText = {
  fontSize: '18px',
  lineHeight: '1.6',
  fontWeight: '300',
  margin: '0',
  display: 'block',
};

const descriptionFooter = {
  marginTop: '16px',
  paddingTop: '16px',
  borderTop: '1px solid #1f2937',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
};

const objectiveBadge = {
  backgroundColor: '#1f2937',
  fontSize: '11px',
  padding: '4px 8px',
  borderRadius: '4px',
  color: '#d1d5db',
};

const logisticCard = {
  backgroundColor: '#f9fafb',
  padding: '16px',
  borderRadius: '8px',
  border: '1px dashed #d1d5db',
  textAlign: 'center',
  paddingLeft: '8px',
  paddingRight: '8px',
};

const logisticLabel = {
  fontSize: '11px',
  color: '#6b7280',
  margin: '8px 0 4px 0',
  display: 'block',
};

const logisticValue = {
  fontSize: '14px',
  fontWeight: '700',
  color: '#111827',
  textTransform: 'capitalize',
  margin: '0',
  display: 'block',
};

const urgencyContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '4px',
  marginTop: '4px',
};

const urgencyDot = {
  width: '8px',
  height: '8px',
  borderRadius: '50%',
  display: 'inline-block',
};

const scheduleBox = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  fontSize: '14px',
  color: '#6b7280',
  backgroundColor: 'rgba(32, 227, 55, 0.1)',
  padding: '12px',
  borderRadius: '8px',
  border: '1px solid rgba(32, 227, 55, 0.2)',
  marginTop: '16px',
};

const scheduleText = {
  margin: '0',
  fontSize: '14px',
};

const scheduleBold = {
  fontWeight: '700',
  color: '#111827',
  textTransform: 'capitalize',
};

const footer = {
  backgroundColor: '#f9fafb',
  padding: '24px',
  textAlign: 'center',
  borderTop: '1px solid #e5e7eb',
};

const footerText = {
  fontSize: '12px',
  color: '#9ca3af',
  margin: '0 0 16px 0',
};

const footerButtons = {
  display: 'flex',
  justifyContent: 'center',
  gap: '16px',
  marginBottom: '24px',
};

const buttonPrimary = {
  backgroundColor: '#000000',
  color: '#ffffff',
  padding: '8px 24px',
  borderRadius: '8px',
  fontWeight: '700',
  fontSize: '14px',
  textDecoration: 'none',
  display: 'inline-block',
};

const buttonSecondary = {
  backgroundColor: '#ffffff',
  color: '#000000',
  border: '1px solid #d1d5db',
  padding: '8px 24px',
  borderRadius: '8px',
  fontWeight: '700',
  fontSize: '14px',
  display: 'inline-block',
};

const footerBottom = {
  marginTop: '24px',
  paddingTop: '24px',
  borderTop: '1px solid #e5e7eb',
};

const footerTagline = {
  fontSize: '10px',
  color: '#d1d5db',
  fontFamily: 'monospace',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  margin: '0',
};

export default FormSubmissionEmail;
