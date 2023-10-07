//path: src\components\server\auth\authenticated.tsx

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

interface AuthenticatedProps {
	children: React.ReactNode;
}

const Authenticated = async (props: AuthenticatedProps) => {
	const supabase = createServerComponentClient({ cookies });
	const response = await supabase.auth.getUser();

	if (response.data.user) {
		return <>{props.children}</>;
	}

	return null;
};

export default Authenticated;
