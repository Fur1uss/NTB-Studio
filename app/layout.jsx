import { K2D } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll/SmoothScroll";
import StructuredData from "@/components/ui/StructuredData/StructuredData";

// Fuente K2D auto-hospedada con next/font (sin FOUT)
const k2d = K2D({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});


export const metadata = {
  title: {
    default: "NTB Studio - Desarrollo Web e Innovación Digital | Agencia Creativa",
    template: "%s | NTB Studio"
  },
  description: "NTB Studio conecta ideas mientras genera innovación. Somos una agencia de desarrollo web especializada en crear experiencias digitales únicas con React, diseño moderno y tecnologías de vanguardia. Transformamos ideas en soluciones digitales impactantes.",
  keywords: [
    "desarrollo web",
    "agencia digital",
    "desarrollo React",
    "diseño web",
    "innovación digital",
    "aplicaciones web",
    "NTB Studio",
    "desarrollo frontend",
    "experiencias digitales",
    "tecnología web",
    "Chile",
    "agencia creativa"
  ],
  authors: [{ name: "NTB Studio" }],
  creator: "NTB Studio",
  publisher: "NTB Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://ntb.cl'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: '/',
    siteName: 'NTB Studio',
    title: 'NTB Studio - Desarrollo Web e Innovación Digital',
    description: 'Conectamos ideas mientras generamos innovación. Agencia de desarrollo web especializada en crear experiencias digitales únicas.',
    images: [
      {
        url: '/ntbwhite.webp',
        width: 1200,
        height: 630,
        alt: 'NTB Studio - Desarrollo Web e Innovación Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NTB Studio - Desarrollo Web e Innovación Digital',
    description: 'Conectamos ideas mientras generamos innovación. Agencia de desarrollo web especializada en crear experiencias digitales únicas.',
    images: ['/ntbwhite.webp'],
    creator: '@ntb_cl',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Agregar códigos de verificación cuando estén disponibles
    // google: 'verification-code',
    // yandex: 'verification-code',
    // bing: 'verification-code',
  },
  other: {
    'theme-color': '#20E337',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={k2d.className} suppressHydrationWarning={true}>
        <StructuredData />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
