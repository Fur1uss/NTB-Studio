"use client";

import { lazy, Suspense } from 'react';
import Hero from "@/components/sections/Hero/Hero";
import Escogenos from "@/components/sections/Escogenos/Escogenos";
import BubbleMenu from "@/components/ui/bubbleNav/BubbleNav";

// Lazy load de componentes pesados (con Three.js, muchas animaciones, etc.)
const Nosotros = lazy(() => import("@/components/sections/Nosotros/Nosotros"));
const NTBsticker = lazy(() => import("@/components/proyectos/NTBStickerSupafinding/NTBSticker"));
const NTBeyonder = lazy(() => import("@/components/proyectos/NTBeyonder/NTBeyonder"));
const Servicios = lazy(() => import("@/components/sections/Servicios/Servicios"));
const FAQ = lazy(() => import("@/components/sections/FAQ/FAQ"));
const Contacto = lazy(() => import("@/components/sections/Contacto/Contacto"));
const Footer = lazy(() => import("@/components/sections/Footer/Footer"));

// Componente de carga simple
const LoadingPlaceholder = () => <div style={{ minHeight: '100vh' }} />;

export default function Home() {
  const items = [
    {
      label: 'Nosotros',
      href: '#nosotros',
      ariaLabel: 'Nosotros',
      rotation: -8,
      hoverStyles: { bgColor: '#3b82f6', textColor: '#ffffff' }
    },
    {
      label: 'Valor',
      href: '#valor',
      ariaLabel: 'Valor',
      rotation: 8,
      hoverStyles: { bgColor: '#10b981', textColor: '#ffffff' }
    },
    {
      label: 'Contacto',
      href: '#contacto',
      ariaLabel: 'Contacto',
      rotation: 8,
      hoverStyles: { bgColor: '#f59e0b', textColor: '#ffffff' }
    },
    {
      label: 'Proyectos',
      href: '#proyectos',
      ariaLabel: 'Proyectos',
      rotation: 8,
      hoverStyles: { bgColor: '#ef4444', textColor: '#ffffff' }
    },
    {
      label: 'Servicios',
      href: '#servicios',
      ariaLabel: 'Servicios',
      rotation: -8,
      hoverStyles: { bgColor: '#8b5cf6', textColor: '#ffffff' }
    }
  ];

  return (
    <main>
      <BubbleMenu
        items={items}
        menuAriaLabel="Toggle navigation"
        menuBg="#ffffff"
        menuContentColor="#111111"
        useFixedPosition={true}
        animationEase="back.out(1.5)"
        animationDuration={0.5}
        staggerDelay={0.12}
      />
      <Hero />
      <section id="valor">
        <Escogenos />
      </section>
      <Suspense fallback={<LoadingPlaceholder />}>
        <section id="nosotros">
          <Nosotros />
        </section>
        <section id="proyectos">
          <NTBsticker />
          <NTBeyonder />
        </section>
        <section id="servicios">
          <Servicios />
        </section>
        <FAQ />
        <section id="contacto">
          <Contacto />
        </section>
        <Footer />
      </Suspense>
    </main>
  );
}