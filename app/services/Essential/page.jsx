import Essential from "./Essential";

export const metadata = {
  title: "Essential - Desarrollo Web Básico | NTB Studio",
  description: "Servicio Essential de NTB Studio: Landing Pages y SPAs modernas con panel de administración, base de datos, hosting y soporte técnico. Entrega en 1-3 semanas. Ideal para empresas que buscan presencia digital funcional.",
  keywords: [
    "desarrollo web esencial",
    "landing page",
    "SPA desarrollo",
    "panel administración",
    "desarrollo web básico",
    "hosting y despliegue",
    "NTB Studio Essential"
  ],
  openGraph: {
    title: "Essential - Desarrollo Web Básico | NTB Studio",
    description: "Landing Pages y SPAs modernas con panel de administración. Entrega en 1-3 semanas. Ideal para empresas que buscan presencia digital funcional.",
    url: "/services/essential",
    type: "website",
  },
  alternates: {
    canonical: "/services/essential",
  },
};

export default function EssentialPage() {
    return <Essential />;
}

