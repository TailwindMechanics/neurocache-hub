//path: src\modules\ThreeFiber\Internal\generic\threeCanvas.tsx

"use client";

import { Canvas } from "@react-three/fiber";

interface ThreeCanvasProps {
    tailwind?: string;
    children?: React.ReactNode;
}

export default function ThreeCanvas({ tailwind, children }: ThreeCanvasProps) {
    return (
        <>
            <div
                className={`${tailwind} fixed bottom-0 left-0 right-0 top-0 z-0 h-screen w-screen`}>
                <Canvas shadows={"soft"} gl={{ antialias: true }}>
                    {children}
                </Canvas>
            </div>
        </>
    );
}
