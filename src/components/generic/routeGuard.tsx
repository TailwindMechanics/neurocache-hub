//path: src\components\generic\routeGuard.tsx

import { FC, useContext, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { storesContext } from '@/stores';
import { observer } from 'mobx-react';

interface RouteGuardProps {
	children: ReactNode;
}

const RouteGuard: FC<RouteGuardProps> = observer(({ children }) => {
	const { userStore } = useContext(storesContext);
	const router = useRouter();

	useEffect(() => {
		if (!userStore.isLoggedIn) {
			router.push('/');
		}
	}, [userStore.isLoggedIn, history]);

	return <>
		{children}
	</>;
});

export default RouteGuard;