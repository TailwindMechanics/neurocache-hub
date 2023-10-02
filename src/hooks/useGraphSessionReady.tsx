//path: src\hooks\useGraphSessionReady.tsx

import { useSession } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import { useReactFlow } from "reactflow";

const useGraphSessionReady = (callback: () => void) => {
	const [isReady, setIsReady] = useState<boolean>(false);
	const reactFlowInstance = useReactFlow();
	const session = useSession();

	useEffect(() => {
		if (reactFlowInstance.viewportInitialized && session !== undefined) {
			setIsReady(true);
		}
	}, [reactFlowInstance.viewportInitialized, session]);

	useEffect(() => {
		if (isReady) {
			callback();
		}
	}, [isReady]);
};

export default useGraphSessionReady;
