//path: src\app\hub\dashboard\page.tsx

"use client"

import LoggedInRedirect from "@/app/components/generic/react/loggedInRedirect";
import SignedInBadge from "@/app/components/generic/react/signedInBadge";
import UICanvas from "@/app/components/generic/react/uiCanvas";
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from '@/app/containers/Layout';
import { Provider } from 'react-redux'
import { store } from '@/app/store';

export default function DashboardRoot() {
    return <>
        <Provider store={store}>
            <SignedInBadge />
            <LoggedInRedirect>
                <Router>
                    <UICanvas tailwind="w-full flex-col">
                        <Layout/>
                    </UICanvas>
                </Router>
            </LoggedInRedirect>
        </Provider>
    </>
}