//path: src\components\z_deprecated\generic\redirectToDashboard.tsx

"use client";

import { LoadingSpinner } from "./loadingSpinner";
import { useEffect } from "react";

export default function RedirectToDashboard() {
	useEffect(() => {
		window.location.href =
			process.env.NEXT_PUBLIC_URL || "/dashboard";
	}, []);

	return <LoadingSpinner />;
}
