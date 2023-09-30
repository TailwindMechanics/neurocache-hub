import {
	createContext,
	useContext,
	useEffect,
	useState,
	ReactNode,
} from "react";
import { createClient, Session, SupabaseClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
	throw new Error("Missing Supabase URL or key");
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Create Context
const AuthContext = createContext<Session | null>(null);

// Auth Provider
type AuthProviderProps = {
	children: ReactNode;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
	const [authState, setAuthState] = useState<Session | null>(null);

	useEffect(() => {
		supabase.auth.getSession().then(({ data }) => {
			setAuthState(data?.session || null);
		});

		const { data: authListener } = supabase.auth.onAuthStateChange(
			(_, session) => {
				setAuthState(session);
			},
		);

		return () => {
			authListener?.subscription.unsubscribe();
		};
	}, []);

	return (
		<AuthContext.Provider value={authState}>
			{children}
		</AuthContext.Provider>
	);
};

// Hook
const useAuth = () => {
	const authState = useContext(AuthContext);
	return authState;
};

export { AuthProvider, useAuth, supabase };
