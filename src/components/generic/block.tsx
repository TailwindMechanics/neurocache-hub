//path: src\components\generic\block.tsx

interface BlockProps {
	left?: string;
	right?: string;
	top?: string;
	btm?: string;
	tailwind?: string;
	children: React.ReactNode;
}

export function Block({
	left = "0",
	right = "0",
	top = "0",
	btm = "0",
	tailwind = "",
	children,
}: BlockProps) {
	return (
		<div
			className={`${tailwind}`}
			style={{
				paddingLeft: left,
				paddingRight: right,
				paddingTop: top,
				paddingBottom: btm,
			}}
		>
			{children}
		</div>
	);
}
