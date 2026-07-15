import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://arden-performance.com'),
  title: "ARDEN — Human Performance for Modern Professionals",
  description: "Clinical biological systems engineered to preserve healthspan, focus, and structural resilience for the world's elite performers.",
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "ARDEN — Human Performance for Modern Professionals",
    description: "Clinical biological systems engineered to preserve healthspan, focus, and structural resilience for the world's elite performers.",
    url: 'https://arden-performance.com',
    siteName: 'ARDEN Performance',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ARDEN Performance Chamber and Systems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "ARDEN — Human Performance for Modern Professionals",
    description: "Clinical biological systems engineered to preserve healthspan, focus, and structural resilience for the world's elite performers.",
    images: ['/images/og-image.jpg'],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-obsidian text-warmWhite font-sans selection:bg-white/10 selection:text-white">
        {children}
      </body>
    </html>
  );
}

