"use client";

import { useEffect } from 'react';

export default function StructuredData() {
  useEffect(() => {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ntb.cl';
    
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "NTB Studio",
      "url": baseUrl,
      "logo": `${baseUrl}/ntbwhite.webp`,
      "description": "Agencia de desarrollo web especializada en crear experiencias digitales únicas con React, diseño moderno y tecnologías de vanguardia.",
      "email": "contacto@ntb.cl",
      "sameAs": [
        "https://www.instagram.com/ntb_cl",
        "https://www.tiktok.com/@ntb_cl"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "contacto@ntb.cl",
        "contactType": "customer service"
      },
      "areaServed": "CL",
      "knowsAbout": [
        "Desarrollo Web",
        "React",
        "Diseño Web",
        "Innovación Digital",
        "Aplicaciones Web"
      ]
    };

    const websiteStructuredData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "NTB Studio",
      "url": baseUrl,
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${baseUrl}/?q={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      }
    };

    // Crear y agregar los scripts al head después de la hidratación
    const script1 = document.createElement('script');
    script1.type = 'application/ld+json';
    script1.text = JSON.stringify(structuredData);
    script1.id = 'structured-data-organization';
    
    const script2 = document.createElement('script');
    script2.type = 'application/ld+json';
    script2.text = JSON.stringify(websiteStructuredData);
    script2.id = 'structured-data-website';

    // Verificar si ya existen para evitar duplicados
    if (!document.getElementById('structured-data-organization')) {
      document.head.appendChild(script1);
    }
    if (!document.getElementById('structured-data-website')) {
      document.head.appendChild(script2);
    }

    // Cleanup
    return () => {
      const existing1 = document.getElementById('structured-data-organization');
      const existing2 = document.getElementById('structured-data-website');
      if (existing1) existing1.remove();
      if (existing2) existing2.remove();
    };
  }, []);

  return null;
}
