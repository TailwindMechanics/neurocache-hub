//path: src\components\generic\signedInBadge.tsx

"use client"

import { UserButton } from "@clerk/nextjs";
import { LivePanel } from "./livePanel";


export default function SignedInBadge() {
    return <>
        <div className="opacity-50 sepia" style={{ position: 'fixed', right: '0.5rem', top: '0.5rem' }}>
            <LivePanel>
                <div style={{ transform: 'scale(0.8)' }}>
                    <UserButton />
                </div>
            </LivePanel>
        </div>
    </>
}