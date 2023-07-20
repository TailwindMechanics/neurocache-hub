//path: src\components\library\testButton\testButton.tsx

import React from "react";

export interface TestButtonProps {
	label: string;
	onClick: () => void;
}

export const TestButton: React.FC<TestButtonProps> = ({ label, onClick }) => {
	return <button onClick={onClick}>{label}</button>;
};
