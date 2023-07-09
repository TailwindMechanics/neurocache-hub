//path: src\app\hub\profile\page.tsx

"use client"

import Hublayout from "@/components/hub/hubLayout";
import { Provider } from 'react-redux';
import { store } from "@/store";


export default function ProfileRoot() {
    return <>
        <Provider store={store}>
            <Hublayout headerText='Your Profile'>
                <div>Profile</div>
            </Hublayout>
        </Provider>
    </>
}