//path: src\hooks\useSession.tsx

import { SupabaseClient, createClient } from "@supabase/supabase-js";
import { createContext, useContext, ReactNode } from "react";

type SupabaseProviderProps = {
	supabase: SupabaseClient;
	children: ReactNode;
};

const SupabaseContext = createContext<SupabaseClient | null>(null);

const useSupabase = () => {
	const supabase = useContext(SupabaseContext);
	return supabase;
};

const SupabaseProvider = (props: SupabaseProviderProps) => {
	return (
		<SupabaseContext.Provider value={props.supabase}>
			{props.children}
		</SupabaseContext.Provider>
	);
};

function initSupabase() {
	const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
	const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

	if (!supabaseUrl || !supabaseKey) {
		throw new Error("Missing Supabase URL or key");
	}

	return createClient(supabaseUrl, supabaseKey);
}

export { SupabaseProvider, initSupabase, useSupabase };
