"use client";

import { useEffect, useState } from 'react';
import "./NTBLoader.css";

const NTBLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [minDisplayTime, setMinDisplayTime] = useState(true);

  useEffect(() => {
    // Prevenir scroll mientras carga
    document.body.style.overflow = 'hidden';
    
    const startTime = Date.now();
    const MIN_DISPLAY_TIME = 2000; // Mínimo 2 segundos para ver la animación
    const MAX_LOADING_TIME = 4000; // Máximo 4 segundos antes de forzar la carga

    // Lista de recursos críticos a verificar
    const criticalResources = [
      '/ntbwhite.webp', // Logo principal
    ];

    // Función para verificar si una imagen está cargada
    const checkImageLoaded = (src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(true); // Continuar aunque falle
        img.src = src;
        
        // Timeout de seguridad
        setTimeout(() => resolve(true), 2000);
      });
    };

    // Función para verificar cuando el DOM está listo
    const checkDOMReady = () => {
      return new Promise((resolve) => {
        if (document.readyState === 'complete') {
          resolve(true);
        } else {
          window.addEventListener('load', () => resolve(true), { once: true });
          // Timeout de seguridad
          setTimeout(() => resolve(true), 1000);
        }
      });
    };

    // Función principal de carga
    const handleLoading = async () => {
      // Esperar a que el DOM esté listo
      await checkDOMReady();

      // Verificar imágenes críticas en paralelo
      const imagePromises = criticalResources.map(src => checkImageLoaded(src));
      await Promise.all(imagePromises);

      // Esperar un tiempo mínimo para mostrar la animación
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, MIN_DISPLAY_TIME - elapsedTime);
      
      await new Promise(resolve => setTimeout(resolve, remainingTime));

      // Marcar que se cumplió el tiempo mínimo
      setMinDisplayTime(false);

      // Esperar un poco más para la transición suave
      await new Promise(resolve => setTimeout(resolve, 500));

      // Ocultar el loader
      setIsLoading(false);
      
      // Restaurar scroll
      document.body.style.overflow = '';
    };

    // Timeout máximo de seguridad
    const maxTimeout = setTimeout(() => {
      setMinDisplayTime(false);
      setIsLoading(false);
      document.body.style.overflow = '';
    }, MAX_LOADING_TIME);

    handleLoading();

    // Cleanup
    return () => {
      clearTimeout(maxTimeout);
      document.body.style.overflow = '';
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className={`loader-container ${!minDisplayTime ? 'fade-out' : ''}`}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="361" 
        height="155" 
        viewBox="0 0 361 155" 
        fill="none"
        className="ntb-svg"
      >
        {/* Letra N - Se desvanece a la izquierda */}
        <path 
          className="letter letter-n"
          d="M117.981 151.902H112.468C112.468 117.052 68.134 137.116 47.4169 100.75L6.19163 28.2004C11.913 119.507 48.0961 95.0282 48.0961 147.722V151.902H0V2.38892H5.51238C24.9233 2.38892 46.9728 2.83304 64.8423 33.9218C76.3111 54.4299 89.9745 78.4649 99.2489 95.6813C104.317 105.165 108.288 112.663 111.162 119.507C104.108 37.0307 69.9105 58.1919 69.9105 6.59504V2.41505H117.981C118.294 5.13205 110.457 9.78229 107.766 12.8912C98.6741 23.2889 98.648 33.138 102.044 46.3573C103.821 53.2282 111.554 62.6854 117.745 66.1339" 
        />
        
        {/* Letra B - Se desvanece a la derecha */}
        <path 
          className="letter letter-b"
          d="M265.743 152.738H225.38L224.44 56.4938C224.44 56.4938 228.933 49.6752 235.438 41.4458C242.858 32.0669 247.404 22.2962 247.482 11.7678C247.508 6.69954 247.378 4.34829 248.135 3.30329C248.893 2.25829 250.591 2.59792 255.084 1.34392C261.381 -0.43258 271.177 0.0637906 277.029 0.0637906C318.49 0.0637906 349.108 15.5559 349.108 41.3674C349.108 59.681 334.113 71.3589 310.731 76.6623C340.278 80.4243 360.342 92.1022 360.342 113.054C360.342 138.866 329.906 154.306 288.446 154.306C280.504 154.306 272.797 153.653 265.743 152.764V152.738ZM292.208 33.6344C282.072 20.8332 275.54 14.4587 263.862 14.4587C249.311 14.4587 243.798 25.196 246.019 30.7084C251.531 43.7187 273.712 40.8972 273.712 69.3473V132.648C286.722 147.644 298.844 152.059 309.869 146.103C318.255 141.478 320.449 122.277 308.98 103.545C299.053 87.6609 286.931 80.6072 276.35 80.6072V75.7479C300.62 75.3038 312.507 58.9757 292.234 33.6344H292.208Z" 
        />

        {/* Letra T (Central) - Se transforma en la carga */}
        <path 
          className="letter letter-t"
          d="M105.179 37.2136C105.179 25.7447 111.789 1.70969 144.654 1.70969C177.519 1.70969 199.125 25.0916 214.329 25.0916C229.534 25.0916 236.823 13.8578 236.823 3.25106H242.335C242.335 43.8232 211.456 58.8189 189.641 58.8189C177.284 58.8189 166.704 55.9452 157.664 52.4183C166.939 78.4388 198.027 61.4576 198.027 85.7277V152.555H149.722V49.1266C141.127 45.3646 134.282 41.8377 129.423 41.8377C118.607 41.8377 117.954 55.0569 123.702 59.2631L119.731 63.0251C111.58 56.1803 105.179 48.4734 105.179 37.2136Z" 
        />
      </svg>
    </div>
  );
};

export default NTBLoader;

