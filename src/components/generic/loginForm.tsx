//path: src\components\generic\loginForm.tsx

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import type { FC } from "react";
import { CustomSignInButton } from "./customSignInButton";
import { SignInButton } from "@clerk/nextjs";


const LoginForm: FC = function () {
    return (
        <div className="w-full flex justify-center items-center h-full ">
            <div className="py-14 px-24 space-y-5 rounded-xl border border-main-light flex-col shadow-2xl drop-shadow-2xl">
                <h1 className="text-center mb-2 text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
                    Welcome back
                </h1>
                <p className="text-center text-sm font-light text-gray-500 dark:text-gray-300">
                    Dont have an account?{" "}
                    <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                        Sign up
                    </a>
                </p>
                <div className={`py-2 text-center shadow-2xl drop-shadow-2xl border border-main-light rounded-md bg-main-dark text-text-dark hover:border-text-dark hover:text-text-light hover:bg-main-light`}>
                    <SignInButton mode='modal' />
                </div>
            </div>
        </div>
    );
};

export default LoginForm;