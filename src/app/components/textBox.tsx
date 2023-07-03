// src\app\components\textBox.tsx
"use client"
import React from 'react';
import { useSpring, animated } from '@react-spring/web';

interface TextBoxProps {
  text: string;
}

export const TextBox: React.FC<TextBoxProps> = ({ text }) => {
  const [styleProps, api] = useSpring(() => ({ opacity: 1 }));

  return (
    <section className="hero">
      <div className="flex items-center hero-content">
        <div onMouseEnter={() => api.start({ opacity: 0.5 })}
             onMouseLeave={() => api.start({ opacity: 1 })}>
          <animated.p className={`flex mb-5 text-lg text-primary hover:text-primary-focus`} 
                       style={styleProps}>
            {text}
          </animated.p>
        </div>
      </div>
    </section>
  );
};