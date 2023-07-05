// src\app\components\layout\signedInBadge.tsx
import { SignedIn, UserButton } from "@clerk/nextjs";


export default function SignedInBadge() {
    return <>
        <div style={{ position: 'fixed', right: '1rem', top: '1rem' }}>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
    </>
}