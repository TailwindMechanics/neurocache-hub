//path: src\modules\Auth\unauthenticated.tsx

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

interface UnauthenticatedProps {
	children: React.ReactNode;
}

export const Unauthenticated = async (props: UnauthenticatedProps) => {
	const supabase = createServerComponentClient({ cookies });
	const response = await supabase.auth.getUser();

	if (!response.data.user) {
		return <>{props.children}</>;
	}

	return null;
};
