/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  
  // Optimizaciones para producción
  compress: true,
  
  // Configuración de imágenes
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Headers de seguridad
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
            {
              key: 'Content-Security-Policy',
              value: [
                "default-src 'self'",
                "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://vercel.live https://va.vercel-scripts.com",
                "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
                "font-src 'self' data: https://fonts.gstatic.com",
                "img-src 'self' data: https: blob:",
                "connect-src 'self' blob: https://*.vercel.app https://*.vercel-dns.com https://va.vercel-scripts.com https://raw.githack.com https://raw.githubusercontent.com",
                "frame-src 'self' https://search.google.com https://validator.w3.org https://developers.facebook.com",
                "object-src 'none'",
                "base-uri 'self'",
                "form-action 'self'",
                "frame-ancestors 'self' https://search.google.com https://validator.w3.org https://developers.facebook.com",
                "upgrade-insecure-requests",
              ].join('; '),
            },
        ],
      },
    ];
  },
};

export default nextConfig;
