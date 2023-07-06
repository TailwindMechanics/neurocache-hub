//path: src\app\hub\dashboard\page.tsx

"use client"

import LoggedInRedirect from "@/app/components/generic/react/loggedInRedirect";
import SignedInBadge from "@/app/components/generic/react/signedInBadge";
import UICanvas from "@/app/components/generic/react/uiCanvas";
import { useUser } from '@clerk/nextjs';


export default function Dashboard() {
    const user = useUser();

    return <>
        <SignedInBadge />
        <LoggedInRedirect>
            <UICanvas tailwind="w-1/2 flex-col">
                <Documentation/>
            </UICanvas>
        </LoggedInRedirect>
    </>
}
