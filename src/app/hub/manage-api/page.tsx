//path: src\app\hub\manage-api\page.tsx

"use client"

import Hublayout from "@/components/hub/hubLayout";
import { Provider } from 'react-redux';
import { store } from "@/store";
import { FC } from 'react'


const ManageApiRoot: FC = () => {
    return <>
        <Provider store={store}>
            <Hublayout headerText='Manage Api'>
                <div>Manage Api</div>
            </Hublayout>
        </Provider>
    </>
}

export default ManageApiRoot