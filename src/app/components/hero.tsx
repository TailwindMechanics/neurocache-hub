// src\app\components\hero.tsx
"use client"
import React from 'react';
import { useSpring, animated } from '@react-spring/web';

interface HeroProps {
  title: string;
  body: string;
  btn: string;
}

export const Hero: React.FC<HeroProps> = ({ title, body, btn }) => {
  const [styleProps, api] = useSpring(() => ({ opacity: 0.5 }));
  return (
    <section className="hero">
      <div className="flex items-center hero-content">
        <div>
          <h1 className={`mb-5 text-3xl font-bold text-primary`}>
            {title}
          </h1>
          <p className={`mb-5 text-lg text-primary`}>
            {body}
          </p>
          <button className={`btn bg-primary text-background hover:text-secondary-focus hover:bg-primary-focus outline:none text-base`}>
            {btn}
          </button>
        </div>
        <animated.img
          style={styleProps}
          src="images/neurocache.png" 
          alt="NeuroCache logo" 
          className="mr-5 w-32 h-32" 
          onMouseEnter={() => api.start({ opacity: 1 })}
          onMouseLeave={() => api.start({ opacity: 0.5 })}
        />
      </div>
    </section>
  );
};
