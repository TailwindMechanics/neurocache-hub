//path: src\components\generic\uiCanvas.tsx

"use client"


interface UICanvasProps {
    tailwind?: string;
    children: React.ReactNode;
}

export default function UICanvas({ tailwind = "", children }: UICanvasProps) {
    return (
        <div className={`${tailwind} absolute z-10`}>
            {children}
        </div>
    );
}