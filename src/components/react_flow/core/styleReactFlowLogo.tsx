//path: src\components\react_flow\core\styleReactFlowLogo.tsx

import { useEffect } from "react";

export default function StyleReactFlowLogo() {
	useEffect(() => {
		const attributionElement = document.querySelector(
			".react-flow__attribution",
		);
		if (attributionElement) {
			// Change the link color to suit your color scheme
			const linkElement = attributionElement.querySelector("a");
			if (linkElement) {
				(linkElement as HTMLElement).style.color = "#6a6d75";
				(linkElement as HTMLElement).style.textDecoration = "none";
				(linkElement as HTMLElement).style.userSelect = "none";
			}

			// Change the background color of the attribution box to suit your color scheme
			(attributionElement as HTMLElement).style.backgroundColor =
				"#00000000";
		}
	}, []);
}
