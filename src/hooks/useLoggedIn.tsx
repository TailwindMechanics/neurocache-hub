//path: src\hooks\useLoggedIn.tsx

import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { User } from "@supabase/supabase-js";
import { useEffect } from "react";

const useLoggedIn = (onLoggedIn: (user: User) => void) => {
	const supabase = useSupabaseClient();
	const session = useSession();

	useEffect(() => {
		const { data: authListener } = supabase.auth.onAuthStateChange(
			(event, newSession) => {
				if (event === "SIGNED_IN" && !session && newSession) {
					onLoggedIn(newSession.user);
				}
			},
		);

		return () => {
			authListener.subscription.unsubscribe();
		};
	}, [session]);
};

export default useLoggedIn;
