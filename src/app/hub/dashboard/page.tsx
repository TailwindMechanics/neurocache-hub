//path: src\app\hub\dashboard\page.tsx

"use client"

import LoggedInRedirect from "@/app/components/generic/react/loggedInRedirect";
import UICanvas from "@/app/components/generic/react/uiCanvas";
import { useUser } from '@clerk/nextjs';


export default function Dashboard() {
    const user = useUser();

    return <>
        <LoggedInRedirect>
            <UICanvas tailwind="w-1/2 flex-col">
                {user ? "Logged In User: " + user.user?.fullName 
                        : "No User Logged In"}
                <br />
                This is the Dashboard
            </UICanvas>
        </LoggedInRedirect>
    </>
}
