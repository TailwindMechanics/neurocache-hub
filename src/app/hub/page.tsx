//path: src\app\hub\page.tsx

"use client"

import LoggedInRedirect from "@/app/components/generic/react/loggedInRedirect";
import UICanvas from "@/app/components/generic/react/uiCanvas";
import { useUser } from '@clerk/nextjs';


export default function Hub() {
    const user = useUser();
    
    return <>
        <LoggedInRedirect>
            <UICanvas tailwind="w-1/2 flex-col">
                {user ? "Logged In User: " + user.user?.fullName 
                        : "No User Logged In"}
                <br />
                This is the Hub
            </UICanvas>
        </LoggedInRedirect>
    </>
}