//path: src\components\z_deprecated\generic\routeGuard.tsx

import { FC, useContext, useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { storesContext } from "@src/stores";
import { observer } from "mobx-react";

interface RouteGuardProps {
	children: ReactNode;
}

const RouteGuard: FC<RouteGuardProps> = observer(({ children }) => {
	const { userStore } = useContext(storesContext);
	const router = useRouter();

	useEffect(() => {
		if (!userStore.isLoggedIn) {
			router.push("/");
		}
	}, [userStore.isLoggedIn, router]);

	return <>{children}</>;
});

export default RouteGuard;
