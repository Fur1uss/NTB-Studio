"use client";

import { useEffect } from 'react';
import "./Breadcrumbs.css";

export default function Breadcrumbs({ items }) {
  useEffect(() => {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ntb.cl';
    
    const breadcrumbStructuredData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": `${baseUrl}${item.url}`
      }))
    };

    // Crear y agregar el script al head después de la hidratación
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(breadcrumbStructuredData);
    script.id = 'structured-data-breadcrumbs';

    // Verificar si ya existe para evitar duplicados
    if (!document.getElementById(script.id)) {
      document.head.appendChild(script);
    }

    // Cleanup
    return () => {
      const existing = document.getElementById(script.id);
      if (existing) existing.remove();
    };
  }, [items]);

  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs-container">
      <ol className="breadcrumbs-list" itemScope itemType="https://schema.org/BreadcrumbList">
        {items.map((item, index) => (
          <li
            key={index}
            className="breadcrumbs-item"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            {index < items.length - 1 ? (
              <a href={item.url} itemProp="item" className="breadcrumbs-link">
                <span itemProp="name">{item.name}</span>
              </a>
            ) : (
              <span itemProp="name" className="breadcrumbs-current">{item.name}</span>
            )}
            <meta itemProp="position" content={index + 1} />
            {index < items.length - 1 && (
              <span className="breadcrumbs-separator" aria-hidden="true">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

