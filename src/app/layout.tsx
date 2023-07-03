// src\app\layout.tsx
import CityBackground from './components/cityBackground';
import ImageOverlay from './components/ImageOverlay';
import { Analytics } from '@vercel/analytics/react';
import ThreeCanvas from './components/threeCanvas';
import { Inter } from 'next/font/google'
import Content from './content.json';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: Content.Neurocache,
  description: Content.Tagline,
}

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <head>
        <title>Content.Neurocache</title>
      </head>
      <body className={`bg-background ${inter.className}`} data-theme="neuro">
        <ImageOverlay image="/images/wireframe.png" />
        <ThreeCanvas>
          <CityBackground />
        </ThreeCanvas>
        <div className="relative min-h-screen flex justify-center items-start z-10">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
