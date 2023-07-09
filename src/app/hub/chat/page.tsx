//path: src\app\hub\chat\page.tsx

"use client"

import Hublayout from "@/components/hub/hubLayout";
import { Provider } from 'react-redux';
import { store } from "@/store";


export default function ChatRoot() {
    return <>
        <Provider store={store}>
            <Hublayout headerText='Chat'>
                <div>Chat</div>
            </Hublayout>
        </Provider>
    </>
}