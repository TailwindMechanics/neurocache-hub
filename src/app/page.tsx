//path: src\app\page.tsx

"use client";

import Dashboard from "@src/components/z_deprecated/dashboard/dashboard";
import LoginForm from "@src/components/z_deprecated/generic/loginForm";
import HubLayout from "@src/components/z_deprecated/hub/hubLayout";
import { storesContext } from "@src/stores";
import { FC, useContext } from "react";
import { observer } from "mobx-react";

const page: FC = observer(() => {
	const { userStore } = useContext(storesContext);
	return (
		<>
			<HubLayout headerText={"Dashboard"}>
				{!userStore.isLoggedIn ? (
					<LoginForm />
				) : (
					<Dashboard />
				)}
			</HubLayout>
		</>
	);
});

export default page;
