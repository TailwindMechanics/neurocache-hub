//path: src\components\generic\loadingSpinner.tsx

export function LoadingSpinner() {
	return (
		<>
			<div className="flex h-screen w-screen items-center justify-center bg-background">
				<div className="loading loading-ring loading-lg text-primary text-opacity-50"></div>
			</div>
		</>
	);
}
