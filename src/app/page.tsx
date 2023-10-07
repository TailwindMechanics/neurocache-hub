//path: src\app\page.tsx

import AuthenticatedProvider from "@src/components/client/reactflow/core/authenticatedProvider";
import GuestProvider from "@src/components/client/reactflow/core/guestProvider";
import Unauthenticated from "@src/components/server/auth/unauthenticated";
import Authenticated from "@src/components/server/auth/authenticated";
import { FC } from "react";
import React from "react";

const page: FC = () => {
	return (
		<>
			<Authenticated>
				<AuthenticatedProvider />
			</Authenticated>
			<Unauthenticated>
				<GuestProvider />
			</Unauthenticated>
		</>
	);
};

export default page;
