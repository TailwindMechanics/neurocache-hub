//path: src\app\page.tsx

import { FC } from "react";
import React from "react";

import { AuthenticatedProvider, GuestProvider } from "@client/hooks";
import { Authenticated, Unauthenticated } from "@server/components";

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
