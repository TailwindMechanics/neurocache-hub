import { Session } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { ReactFlowInstance } from "reactflow";

const useGraphSessionReady = (
	reactFlowInstance: ReactFlowInstance,
	session: Session | null,
): boolean => {
	const [isInitialized, setIsInitialized] = useState<boolean>(false);

	useEffect(() => {
		if (reactFlowInstance.viewportInitialized && session !== undefined) {
			setIsInitialized(true);
		}
	}, [reactFlowInstance.viewportInitialized, session]);

	return isInitialized;
};

export default useGraphSessionReady;
