//path: src\components\hub\mainContent.tsx

import { FC } from "react";

interface MainContentProps {
	children?: React.ReactNode;
}

const MainContent: FC<MainContentProps> = ({ children }) => {
	return (
		<>
			<div
				className={`mt-10 flex h-full w-full overflow-auto rounded-xl border border-main-light bg-main-dark shadow-2xl drop-shadow-2xl scrollbar-none`}
			>
				{children}
			</div>
		</>
	);
};

export default MainContent;
