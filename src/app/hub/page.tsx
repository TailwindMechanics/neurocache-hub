//path: src\app\hub\page.tsx

import LoggedInRedirect from "../components/generic/react/loggedInRedirect"
import UICanvas from "../components/generic/react/uiCanvas"


export default function Hub() {
    return <>
        <LoggedInRedirect>
            <UICanvas tailwind="w-1/2 flex-col">
                This is the Hub
            </UICanvas>
        </LoggedInRedirect>
    </>
}