//path: src\components\server\auth\unauthenticated.tsx

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

interface UnauthenticatedProps {
	children: React.ReactNode;
}

const Unauthenticated = async (props: UnauthenticatedProps) => {
	console.log("cookies", cookies);

	const supabase = createServerComponentClient({ cookies });
	const response = await supabase.auth.getUser();

	if (!response.data.user) {
		return <>{props.children}</>;
	}

	return null;
};

export default Unauthenticated;
