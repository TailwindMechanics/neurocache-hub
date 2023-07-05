// src\app\components\layout\login.tsx
"use client"

import { SignIn } from "@clerk/nextjs/dist/types/client-boundary/uiComponents";


const Login = () => {
    return (
        <div className="min-h-screen bg-white flex">
            <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                <div className="mx-auto w-full max-w-sm lg:w-96">
                    <SignIn path="/user" routing="path" />
                </div>
            </div>
        </div>
    );
};

export default Login;