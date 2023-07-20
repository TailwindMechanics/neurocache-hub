//path: src\components\z_deprecated\generic\modal.tsx

"use client";

import { useEffect } from "react";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
	useEffect(() => {
		const handleEscape = (event: { key: string }) => {
			if (!isOpen) return;

			if (event.key === "Escape") {
				onClose();
			}
		};

		document.addEventListener("keydown", handleEscape);
		return () =>
			document.removeEventListener(
				"keydown",
				handleEscape,
			);
	}, [isOpen, onClose]);

	if (!isOpen) {
		return null;
	}

	return (
		<div className="fixed inset-0 z-10 overflow-y-auto ">
			<div className="b flex min-h-screen items-end justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0">
				<span className="hidden sm:inline-block sm:h-screen sm:align-middle"></span>
				<div className="inline-block transform overflow-hidden text-left align-bottom transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle">
					<div className="flex flex-col border border-primary border-opacity-10 bg-background shadow-xl hover:border-primary hover:border-opacity-40">
						<div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
							<h1>
								Modal
								content
							</h1>
							{children}
						</div>
						<div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
							<button
								onClick={
									onClose
								}
								className={`btn bg-primary text-background hover:bg-primary hover:text-accent`}
							>
								Close
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
