"use client";

import Hero from "@/components/sections/Hero/Hero";
import Escogenos from "@/components/sections/Escogenos/Escogenos";
import Nosotros from "@/components/sections/Nosotros/Nosotros";
import NTBsticker from "@/components/proyectos/NTBStickerSupafinding/NTBSticker";
import NTBeyonder from "@/components/proyectos/NTBeyonder/NTBeyonder";
import Servicios from "@/components/sections/Servicios/Servicios";
import FAQ from "@/components/sections/FAQ/FAQ";
import Contacto from "@/components/sections/Contacto/Contacto";
import Footer from "@/components/sections/Footer/Footer";
import BubbleMenu from "@/components/ui/bubbleNav/BubbleNav";

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
    </main>
  );
}