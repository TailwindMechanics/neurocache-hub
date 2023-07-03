"use client"
import { useSpring, animated } from '@react-spring/web';
import { Divider } from '../virtualBackground/divider';
import React from 'react';


interface HeroProps {
  title?: string;
  body?: string;
  btn?: React.ReactNode;
  imgUrl?: string;
}

export const Hero: React.FC<HeroProps> = ({ title, body, btn, imgUrl }) => {
  const [styleProps, api] = useSpring(() => ({ opacity: 0.5, config: { duration: 500 } }));

  return (
    <animated.section
      className="hero"
      style={styleProps}
      onMouseEnter={() => api.start({ opacity: 1 })}
      onMouseLeave={() => api.start({ opacity: 0.5 })}>
      <div className="flex items-center hero-content">
        <div>
          {title && <h1 className={`mb-0 text-5xl font-bold text-primary`}>{title}</h1>}
          {body && <p className={`mb-4 mt-0 text-xl text-justify text-primary`}>{body}</p>}
          <Divider />
          {btn}
        </div>
        {imgUrl && <img className="ml-6 mt-8 w-32 h-32" src={imgUrl} alt={imgUrl}/>}
      </div>
    </animated.section>
  );
};