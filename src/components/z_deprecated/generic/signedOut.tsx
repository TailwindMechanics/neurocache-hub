//path: src\components\z_deprecated\generic\signedOut.tsx

import { storesContext } from "@src/stores";
import { useContext } from "react";

interface SignedOutProps {
	children: React.ReactNode;
}

export default function SignedOut({ children }: SignedOutProps) {
	const { userStore } = useContext(storesContext);

	if (!userStore.user) {
		return <>{children}</>;
	}

	return null;
}
