import Advanced from "./Advanced";

export const metadata = {
  title: "Advanced - Desarrollo Web Avanzado | NTB Studio",
  description: "Servicio Advanced de NTB Studio: Aplicaciones web completas con integración de APIs, bases de datos escalables, sistemas de roles y permisos. Entrega en 4-8 semanas. Soluciones complejas y personalizadas para empresas.",
  keywords: [
    "desarrollo web avanzado",
    "aplicaciones web completas",
    "integración APIs",
    "base de datos escalable",
    "sistemas personalizados",
    "desarrollo enterprise",
    "NTB Studio Advanced"
  ],
  openGraph: {
    title: "Advanced - Desarrollo Web Avanzado | NTB Studio",
    description: "Aplicaciones web completas con integración de APIs y bases de datos escalables. Entrega en 4-8 semanas. Soluciones complejas para empresas.",
    url: "/services/advanced",
    type: "website",
  },
  alternates: {
    canonical: "/services/advanced",
  },
};

export default function AdvancedPage() {
    return <Advanced />;
}

