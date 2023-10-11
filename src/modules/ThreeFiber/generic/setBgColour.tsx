//path: src\modules\ThreeFiber\generic\setBgColour.tsx

"use client";

interface SetBgColorProps {
    color: string;
}

export function SetBgColor({ color }: SetBgColorProps) {
    return (
        <>
            <color attach="background" args={[color]} />
        </>
    );
}
