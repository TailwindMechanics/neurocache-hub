//path: src\components\react_flow\core\styleReactFlowLogo.tsx

import { useEffect } from "react";

export default function StyleReactFlowLogo() {
	useEffect(() => {
		const attributionElement = document.querySelector(
			".react-flow__attribution",
		) as HTMLElement;
		if (attributionElement) {
			// Change the link color to suit your color scheme
			const linkElement = attributionElement.querySelector("a");
			if (linkElement) {
				linkElement.textContent = "reactflow";
				linkElement.style.color = "#f5cdc1";
				linkElement.classList.add(
					"underline",
					"select-none",
					"absolute",
					"bottom-1",
					"right-3",
					"font-mono",
					"text-sm",
					"font-semibold",
					"w-max",
					"text-rose-light",
					"z-10",
				);
			}

			attributionElement.style.backgroundColor = "#00000000";
		}
	}, []);
}
