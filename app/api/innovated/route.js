import { Resend } from 'resend';
import { render } from '@react-email/render';
import React from 'react';
import { FormSubmissionEmailInnovated } from '../../../emails/FormSubmissionEmailInnovated';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const formData = await request.json();

    // Validar que tenemos los datos necesarios
    if (!formData.nombre || !formData.email) {
      return Response.json(
        { error: 'Datos incompletos' },
        { status: 400 }
      );
    }

    // Validar que tenemos la API key
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY no está configurada');
      return Response.json(
        { error: 'Configuración del servidor incompleta' },
        { status: 500 }
      );
    }

    // Renderizar el email con React Email
    const emailHtml = await render(
      React.createElement(FormSubmissionEmailInnovated, {
        formData: formData,
      })
    );

    // Enviar el email usando Resend
    const { data, error } = await resend.emails.send({
      from: 'no-reply@ntbstudio.cl',
      to: 'contacto@ntbstudio.cl',
      subject: `Nueva Solicitud - Plan Innovated - ${formData.nombre}`,
      html: emailHtml,
      replyTo: formData.email,
    });

    if (error) {
      console.error('Error enviando email:', error);
      return Response.json(
        { error: 'Error al enviar el email', details: error.message },
        { status: 500 }
      );
    }

    return Response.json(
      { success: true, messageId: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error en API route:', error);
    console.error('Stack:', error.stack);
    return Response.json(
      { error: 'Error interno del servidor', details: error.message },
      { status: 500 }
    );
  }
}

