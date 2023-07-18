//path: src\components\generic\signedIn.tsx

import { storesContext } from "@/stores";
import { useContext } from "react";

interface SignedInProps {
	children: React.ReactNode;
}

export default function SignedIn({ children }: SignedInProps) {
	const { userStore } = useContext(storesContext);

	if (userStore.user) {
		return <>{children}</>;
	}

	return null;
}
