//path: src\components\generic\btn.tsx

interface bootnProps {
	label: string;
	onClick?: () => void;
}

export const Btn = ({ label, onClick }: bootnProps) => {
	return (
		<>
			{
				<button
					onClick={onClick}
					className={`btn border-main-light bg-main-dark text-text-dark hover:border-text-dark hover:bg-main-light hover:text-text-light`}
				>
					{label}
				</button>
			}
		</>
	);
};
