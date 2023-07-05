"use client"

import { useEffect } from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    useEffect(() => {
        const handleEscape = (event: { key: string; }) => {
            if (!isOpen) return;

            if (event.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen, onClose]);

    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto ">
            <div className="b flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
                <div className="inline-block align-bottom text-left overflow-hidden transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="shadow-xl border border-primary border-opacity-10 hover:border-opacity-40 hover:border-primary flex flex-col bg-background">
                        <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <h1>Modal content</h1>
                            {children}
                        </div>
                        <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                            <button onClick={onClose} className={`btn bg-primary text-background hover:bg-primary hover:text-accent`}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};