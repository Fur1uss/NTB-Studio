"use client";

import { useEffect } from 'react';

export default function ServiceStructuredData({ serviceName, description, features, deliveryTime, priceRange }) {
  useEffect(() => {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ntb.cl';
    
    const serviceStructuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": serviceName,
      "description": description,
      "provider": {
        "@type": "Organization",
        "name": "NTB Studio",
        "url": baseUrl,
        "email": "contacto@ntb.cl"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Chile"
      },
      "serviceType": "Desarrollo Web",
      "category": "Servicios de Desarrollo de Software",
      "offers": {
        "@type": "Offer",
        "description": description,
        "priceRange": priceRange || "Consultar",
        "availability": "https://schema.org/InStock"
      }
    };

    // Crear y agregar el script al head después de la hidratación
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(serviceStructuredData);
    script.id = `structured-data-service-${serviceName.toLowerCase()}`;

    // Verificar si ya existe para evitar duplicados
    if (!document.getElementById(script.id)) {
      document.head.appendChild(script);
    }

    // Cleanup
    return () => {
      const existing = document.getElementById(script.id);
      if (existing) existing.remove();
    };
  }, [serviceName, description, features, deliveryTime, priceRange]);

  return null;
}

