//path: src\app\components\generic\react\signedInBadge.tsx

import { SignedIn, UserButton } from "@clerk/nextjs";
import { LivePanel } from "./livePanel";


export default function SignedInBadge() {
    return <>
        <div className="opacity-50 sepia " style={{ position: 'fixed', left: '0.5rem', top: '0.5rem' }}>
            <LivePanel>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </LivePanel>
        </div>
    </>
}