//path: src\components\generic\signedOut.tsx

import { storesContext } from "@/stores";
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
