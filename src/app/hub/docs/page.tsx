//path: src\app\hub\docs\page.tsx

"use client"

import Hublayout from "@/components/hub/hubLayout";
import { Provider } from 'react-redux';
import { store } from "@/store";


export default function DocsRoot() {
    return <>
        <Provider store={store}>
            <Hublayout headerText='Documentation'>
                <div>Docs</div>
            </Hublayout>
        </Provider>
    </>
}