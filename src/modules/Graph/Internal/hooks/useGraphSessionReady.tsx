//path: src\modules\Graph\Internal\hooks\useGraphSessionReady.tsx

import { useSession, User } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import { useReactFlow } from "reactflow";

export const useGraphSessionReady = (
    userReady: (user?: User) => void,
    guestReady: () => void,
) => {
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
            if (session?.user) userReady(session.user);
            else guestReady();
        }
    }, [guestReady, isReady, session?.user, userReady]);
};

export default useGraphSessionReady;
