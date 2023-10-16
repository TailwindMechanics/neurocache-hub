//path: src\modules\Graph\Internal\hooks\useUserGraphReady.tsx

import { User } from "@supabase/auth-helpers-react";

import useGraphSessionReady from "./useGraphSessionReady";

export const useUserGraphReady = (callback: (user?: User) => void) => {
    useGraphSessionReady(callback, () => {});
};
