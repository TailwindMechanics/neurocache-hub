// src\app\layout.tsx

import { Analytics } from '@vercel/analytics/react';
import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'
import Content from './content.json';
require('dotenv').config();
import './globals.css'


const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: Content.Neurocache,
  description: Content.Tagline,
}

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return <>
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang="en">
        <head>
          <title>{`${Content.Neurocache}`}</title>
        </head>
        <body className={`${inter.className}`} data-theme="neuro">
          {children}
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  </>
}