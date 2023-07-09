//path: src\app\hub\dashboard\page.tsx

"use client"

import Hublayout from "@/components/hub/hubLayout";
import { Provider } from 'react-redux';
import { store } from "@/store";


export default function DashboardRoot() {
    return <>
        <Provider store={store}>
            <Hublayout headerText='Dashboard'>
            </Hublayout>
        </Provider>
    </>
}