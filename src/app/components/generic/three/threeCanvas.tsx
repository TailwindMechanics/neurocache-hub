//path: src\app\components\generic\three\threeCanvas.tsx

"use client"

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Loading } from "../react/loading";


interface ThreeCanvasProps {
    tailwind?: string;
    children?: React.ReactNode;
}

export default function ThreeCanvas({ tailwind, children }: ThreeCanvasProps) {
    return <>
        <div className={`${tailwind} z-0 fixed top-0 left-0 right-0 bottom-0 h-screen w-screen`}>
            <Canvas shadows={"soft"} gl={{ antialias: true }}>
                <Suspense fallback={<Loading />}>
                    {children}
                </Suspense>
            </Canvas>
        </div>
    </>
}