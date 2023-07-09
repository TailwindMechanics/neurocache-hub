//path: src\app\hub\apimanager\page.tsx

"use client"

import Hublayout from "@/components/hub/hubLayout";
import { Provider } from 'react-redux';
import { store } from "@/store";


export default function ApiManagerRoot() {
    return <>
        <Provider store={store}>
            <Hublayout headerText='Api Management'>
                <div>Api</div>
            </Hublayout>
        </Provider>
    </>
}