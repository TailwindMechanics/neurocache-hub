// src\app\components\layout\livePanel.tsx
"use client"
import { useSpring, animated } from '@react-spring/web';
import React from 'react';

interface LivePanelProps {
    children?: React.ReactNode;
    tailwind?: string;
    bgAlpha?: { min: number, max: number };
}

export const LivePanel: React.FC<LivePanelProps> = ({ children, tailwind, bgAlpha = { min: 0.5, max: 1 } }) => {
    const [styleProps, api] = useSpring(() => ({ opacity: 0.5, config: { duration: 500 } }));
    return <>
        <div>
            <animated.section
                className="hero"
                style={styleProps}
                onMouseEnter={() => api.start({ opacity: bgAlpha.max })}
                onMouseLeave={() => api.start({ opacity: bgAlpha.min })}>
                <div className={`h-full w-full ${tailwind}`}>
                    {children}
                </div>
            </animated.section>
        </div>
    </>
};