import Innovated from "./Innovated";

export const metadata = {
  title: "Innovated - Desarrollo de MVP y Productos Digitales | NTB Studio",
  description: "Servicio Innovated de NTB Studio: Asesoría técnica, diseño y desarrollo de MVP, arquitectura escalable y prototipos interactivos. Entrega en 6-12 semanas. Ideal para emprendedores, startups y pymes que buscan transformar ideas en productos digitales.",
  keywords: [
    "desarrollo MVP",
    "producto digital",
    "startup desarrollo",
    "prototipo interactivo",
    "arquitectura escalable",
    "asesoría técnica",
    "NTB Studio Innovated"
  ],
  openGraph: {
    title: "Innovated - Desarrollo de MVP y Productos Digitales | NTB Studio",
    description: "Asesoría técnica, diseño y desarrollo de MVP con arquitectura escalable. Entrega en 6-12 semanas. Ideal para emprendedores y startups.",
    url: "/services/innovated",
    type: "website",
  },
  alternates: {
    canonical: "/services/innovated",
  },
};

export default function InnovatedPage() {
    return <Innovated />;
}

