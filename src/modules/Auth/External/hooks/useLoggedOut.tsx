//path: src\modules\hooks\useLoggedOut.tsx

import { useEffect, useState } from "react";
import {
	createClientComponentClient,
	Session,
} from "@supabase/auth-helpers-nextjs";

const useLoggedOut = (onLoggedOut: () => void) => {
	const [session, setSession] = useState<Session>();
	const supabase = createClientComponentClient();

	useEffect(() => {
		const fetchSession = async () => {
			const response = await supabase.auth.getSession();
			if (response.error) {
				console.log(
					`Error fetching session: ${response.error.message}`,
				);
				return;
			}
			if (!response.data.session) {
				console.log("No session found");
				return;
			}

			setSession(response.data.session);
		};

		fetchSession();
	}, [supabase.auth]);

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
	}, [onLoggedOut, session, supabase.auth]);
};

export default useLoggedOut;
