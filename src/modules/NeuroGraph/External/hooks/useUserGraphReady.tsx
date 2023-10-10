//path: src\modules\hooks\useUserGraphReady.tsx

import { User } from "@supabase/auth-helpers-react";

import Use from "../../../hooks";

export const useUserGraphReady = (callback: (user?: User) => void) => {
	Use.GraphSessionReady(callback, () => {});
};
