// src\app\layout.tsx
import { Analytics } from '@vercel/analytics/react';
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
        <div className="min-h-screen flex justify-center items-start">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}