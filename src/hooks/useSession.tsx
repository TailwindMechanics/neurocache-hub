//path: src\hooks\useSession.tsx

import { supabase } from "@src/services/supabaseClient";
import { Session } from "@supabase/supabase-js";
import {
	createContext,
	useContext,
	ReactNode,
	useEffect,
	useState,
} from "react";

type SessionProviderProps = {
	children: ReactNode;
};

const SessionContext = createContext<Session | null>(null);

const useSession = () => {
	const session = useContext(SessionContext);
	return session;
};

const SessionProvider = (props: SessionProviderProps) => {
	const [session, setSession] = useState<Session | null>(null);

	useEffect(() => {
		if (!supabase) return;

		supabase.auth.getSession().then(({ data }) => {
			setSession(data?.session);
		});

		const { data: authListener } = supabase.auth.onAuthStateChange(
			(_, session) => {
				setSession(session);
			},
		);

		return () => {
			authListener?.subscription.unsubscribe();
		};
	}, []);

	return (
		<SessionContext.Provider value={session}>
			{props.children}
		</SessionContext.Provider>
	);
};

export { SessionProvider, useSession };
