"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./Breadcrumbs.css";

export default function Breadcrumbs({ items }) {
  const router = useRouter();
  const pathname = usePathname();

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

  // Manejar scroll a secciones cuando hay hash en la URL
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const targetId = hash.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          // Esperar a que la página se cargue completamente
          setTimeout(() => {
            // Buscar el ScrollTrigger asociado a esta sección o sus hijos
            const triggers = ScrollTrigger.getAll();
            let targetTrigger = null;
            
            // Buscar el trigger que está dentro del elemento target o en sus hijos
            triggers.forEach(trigger => {
              const triggerElement = trigger.trigger;
              if (triggerElement) {
                // Verificar si el trigger está dentro del elemento target
                if (targetElement.contains(triggerElement) || 
                    triggerElement === targetElement ||
                    (triggerElement.closest && triggerElement.closest(`#${targetId}`))) {
                  // Verificar si tiene pin activo
                  if (trigger.pin) {
                    targetTrigger = trigger;
                  }
                }
              }
            });
            
            // Si hay un ScrollTrigger con pin, calcular el offset
            if (targetTrigger) {
              // Obtener los valores de start y end del trigger
              const start = typeof targetTrigger.start === 'function' 
                ? targetTrigger.start() 
                : (typeof targetTrigger.start === 'number' ? targetTrigger.start : window.scrollY);
              const end = typeof targetTrigger.end === 'function' 
                ? targetTrigger.end() 
                : (typeof targetTrigger.end === 'number' ? targetTrigger.end : window.scrollY);
              
              const pinDuration = Math.max(0, end - start);
              
              // Si la duración es significativa (más de 100px), usar offset
              if (pinDuration > 100) {
                // Scroll a la posición después del pin
                const targetPosition = targetElement.offsetTop + pinDuration;
                
                window.scrollTo({
                  top: targetPosition,
                  behavior: 'smooth'
                });
              } else {
                // Si la duración es pequeña, scroll normal
                targetElement.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                });
              }
            } else {
              // Si no hay pin, scroll normal
              targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }
          }, 300);
        }
      }
    };

    // Si estamos en la página principal y hay hash, hacer scroll
    if (pathname === '/') {
      handleHashScroll();
    }
  }, [pathname]);

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
              <Link 
                href={item.url} 
                itemProp="item" 
                className="breadcrumbs-link"
                onClick={(e) => {
                  // Si la URL tiene hash y no estamos en la página principal, navegar primero
                  if (item.url.includes('#') && pathname !== '/') {
                    e.preventDefault();
                    const [path, hash] = item.url.split('#');
                    const targetId = hash;
                    
                    // Navegar a la página principal con el hash
                    router.push(item.url);
                    
                    // Función para hacer scroll después de la navegación
                    const scrollToSection = () => {
                      // Intentar múltiples veces hasta que el elemento esté disponible
                      let attempts = 0;
                      const maxAttempts = 20;
                      
                      const tryScroll = () => {
                        attempts++;
                        const targetElement = document.getElementById(targetId);
                        
                        if (targetElement) {
                          // Esperar un poco más para que ScrollTrigger se inicialice
                          setTimeout(() => {
                            // Buscar ScrollTrigger con pin
                            const triggers = ScrollTrigger.getAll();
                            let targetTrigger = null;
                            
                            triggers.forEach(trigger => {
                              const triggerElement = trigger.trigger;
                              if (triggerElement && 
                                  (targetElement.contains(triggerElement) || 
                                   triggerElement === targetElement ||
                                   (triggerElement.closest && triggerElement.closest(`#${targetId}`)))) {
                                if (trigger.pin) {
                                  targetTrigger = trigger;
                                }
                              }
                            });
                            
                            if (targetTrigger) {
                              const start = typeof targetTrigger.start === 'function' 
                                ? targetTrigger.start() 
                                : (typeof targetTrigger.start === 'number' ? targetTrigger.start : window.scrollY);
                              const end = typeof targetTrigger.end === 'function' 
                                ? targetTrigger.end() 
                                : (typeof targetTrigger.end === 'number' ? targetTrigger.end : window.scrollY);
                              
                              const pinDuration = Math.max(0, end - start);
                              
                              if (pinDuration > 100) {
                                const targetPosition = targetElement.offsetTop + pinDuration;
                                window.scrollTo({
                                  top: targetPosition,
                                  behavior: 'smooth'
                                });
                              } else {
                                targetElement.scrollIntoView({
                                  behavior: 'smooth',
                                  block: 'start'
                                });
                              }
                            } else {
                              targetElement.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start'
                              });
                            }
                          }, 500);
                        } else if (attempts < maxAttempts) {
                          // Reintentar después de 100ms
                          setTimeout(tryScroll, 100);
                        }
                      };
                      
                      // Iniciar después de un pequeño delay
                      setTimeout(tryScroll, 300);
                    };
                    
                    scrollToSection();
                  }
                }}
              >
                <span itemProp="name">{item.name}</span>
              </Link>
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

