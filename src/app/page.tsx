//path: src\app\page.tsx

"use client"

import Dashboard from '@/components/dashboard/dashboard';
import LoginForm from '@/components/generic/loginForm';
import HubLayout from '@/components/hub/hubLayout';
import { storesContext } from '@/stores';
import { FC, useContext } from 'react';
import { observer } from 'mobx-react';


const page: FC = observer(() => {
	const { userStore } = useContext(storesContext);
	return <>
		<HubLayout headerText={'Dashboard'}>
			{!userStore.isLoggedIn ? (
				<LoginForm />
			) : (
				<Dashboard />
			)}
		</HubLayout>
	</>
});

export default page;