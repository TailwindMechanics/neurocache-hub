//path: src\components\generic\customSignInButton.tsx

"use client"

import { SignInButton } from '@clerk/nextjs';
import React from 'react';


interface CustomSignInButtonProps extends React.PropsWithChildren<{ [
        key: string]: any 
}> { }

export const CustomSignInButton: React.FC<CustomSignInButtonProps> = (props) => {
    return (
        <div className={`w-full m-0 btn bg-primary text-background hover:bg-primary hover:text-accent`}>
            <SignInButton mode='modal' {...props}>
                {props.children}
            </SignInButton>
        </div>
    );
}