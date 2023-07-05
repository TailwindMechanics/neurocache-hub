// src\app\components\virtualBackground\setBgColour.tsx
"use client";


interface SetBgColorProps {
    color: string;
}

export default function SetBgColor ({color} : SetBgColorProps)
{
    return <>
        <color attach="background" args={[color]} />
    </>
}