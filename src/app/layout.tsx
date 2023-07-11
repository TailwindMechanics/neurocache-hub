//path: src\app\layout.tsx

import { Analytics } from '@vercel/analytics/react';
import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'
import { dark } from '@clerk/themes';
require('dotenv').config();
import './globals.css'

const title = "Neurocache";
const tagLine = "Leverage the power of Neurocache Hub to create, customize, and hand-craft your own AI agents trained your way then deploy seamlessly using our lightweight Neurocache Api.";

const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: title,
  description: tagLine,
}

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return <>
    <ClerkProvider appearance={{
        baseTheme: dark
      }} 
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
        <html lang="en">
          <head>
            <title>{title}</title>
          </head>
          <body className={`${inter.className} dark`}>
            {children}
            <Analytics />
          </body>
        </html>
    </ClerkProvider>
  </>
}