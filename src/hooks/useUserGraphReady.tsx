//path: src\hooks\useUserGraphReady.tsx

import { useGraphSessionReady } from "./useGraphSessionReady";
import { User } from "@supabase/auth-helpers-react";

export const useUserGraphReady = (callback: (user?: User) => void) => {
	useGraphSessionReady(callback, () => {});
};
