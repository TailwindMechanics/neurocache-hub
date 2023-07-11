//path: src\components\generic\customSignInButton.tsx

"use client"

import { useSpring, animated } from '@react-spring/web';
import { SignInButton } from '@clerk/nextjs';
import React from 'react';


interface CustomSignInButtonProps extends React.PropsWithChildren<{ [key: string]: any }> { }

export const CustomSignInButton: React.FC<CustomSignInButtonProps> = (props) => {
    const [styleProps, api] = useSpring(() => ({ opacity: 0.5, config: { duration: 500 } }));
    return (
        <animated.div
            className={'w-full'}
            style={styleProps}
            onMouseEnter={() => api.start({ opacity: 1 })}
            onMouseLeave={() => api.start({ opacity: 0.5 })}>
            <div className={`w-full m-0 btn bg-primary text-background hover:bg-primary hover:text-accent`}>
                <SignInButton mode='modal' {...props}>
                    {props.children}
                </SignInButton>
            </div>
        </animated.div>
    );
}