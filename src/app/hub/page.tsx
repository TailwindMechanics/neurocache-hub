//path: src\app\hub\page.tsx

import LoggedInRedirect from "@/app/components/generic/react/loggedInRedirect";
import UICanvas from "@/app/components/generic/react/uiCanvas";


export default function Hub() {
    return <>
        <LoggedInRedirect>
            <UICanvas tailwind="w-1/2 flex-col">
                This is the Hub
            </UICanvas>
        </LoggedInRedirect>
    </>
}