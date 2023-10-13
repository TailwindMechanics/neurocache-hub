//path: src\app\layout.tsx

import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import "../app/globals.css";

const tagLine = "Create and craft specialized AI Agents.";
const title = "Neurocache";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
    title: title,
    description: tagLine,
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <html lang="en">
                <head>
                    <title>{title}</title>
                    <meta name="description" content="{metadata.description}" />
                    <link rel="icon" type="image/svg+xml" href="favicon.svg" />
                </head>
                <body className={`${inter.className} dark`}>
                    {children}
                    <Analytics debug={false} />
                </body>
            </html>
        </>
    );
}
