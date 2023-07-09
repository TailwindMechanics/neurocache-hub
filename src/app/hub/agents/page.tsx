//path: src\app\hub\agents\page.tsx

"use client"

import Hublayout from "@/components/hub/hubLayout";
import { Provider } from 'react-redux';
import { store } from "@/store";


export default function AgentsRoot() {
    return <>
        <Provider store={store}>
            <Hublayout headerText='Your Agents'>
                <div>Agents</div>
            </Hublayout>
        </Provider>
    </>
}