import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ROQUACE — Website Templates & Web Development',
  description: 'Premium website templates and custom web development for modern businesses, creators, and brands.',
  openGraph: {
    title: 'ROQUACE — Website Templates & Web Development',
    description: 'Premium website templates and custom web development for modern businesses, creators, and brands.',
    type: 'website',
    locale: 'en_US',
    siteName: 'ROQUACE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ROQUACE — Website Templates & Web Development',
    description: 'Premium website templates and custom web development for modern businesses, creators, and brands.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased bg-framercode-cream dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        {children}
      </body>
    </html>
  )
}