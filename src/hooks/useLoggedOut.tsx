//path: src\hooks\useLoggedOut.tsx

import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect } from "react";

const useLoggedOut = (onLoggedOut: () => void) => {
	const supabase = useSupabaseClient();
	const session = useSession();

	useEffect(() => {
		const { data: authListener } = supabase.auth.onAuthStateChange(
			(event) => {
				if (event === "SIGNED_OUT") {
					onLoggedOut();
				}
			},
		);

		return () => {
			authListener.subscription.unsubscribe();
		};
	}, [session]);
};

export default useLoggedOut;
