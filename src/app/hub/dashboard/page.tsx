//path: src\app\hub\dashboard\page.tsx

import LoggedInRedirect from "@/app/components/generic/react/loggedInRedirect";
import UICanvas from "@/app/components/generic/react/uiCanvas";


export default function Dashboard() {
    return <>
        <LoggedInRedirect>
            <UICanvas tailwind="w-1/2 flex-col">
                This is the Dashboard
            </UICanvas>
        </LoggedInRedirect>
    </>
}