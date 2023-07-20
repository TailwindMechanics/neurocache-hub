//path: src\components\z_deprecated\generic\redirectToLanding.tsx

"use client";

import { LoadingSpinner } from "./loadingSpinner";
import { useEffect } from "react";

export default function RedirectToLanding() {
	useEffect(() => {
		window.location.href = process.env.NEXT_PUBLIC_URL || "/";
	}, []);

	return <LoadingSpinner />;
}
