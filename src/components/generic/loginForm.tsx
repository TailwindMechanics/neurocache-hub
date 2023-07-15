//path: src\components\generic\loginForm.tsx

import { ChangeEvent, useContext, useState } from 'react';
import SignupDrawer from '../drawer/signupDrawer';
import { storesContext } from '@/stores';
import validator from 'validator';
import type { FC } from "react";


const LoginForm: FC = function () {
	const { userStore, drawerStore } = useContext(storesContext);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState<string | null>(null);

	const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	};

	const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
	};

	const handleLogin = async () => {
		if (validator.isEmail(email)) {
			const errorMessage = await userStore.login(email, password);
			setError(errorMessage);
		} else {
			setError("Invalid email");
		}
	};

	const handleSignUp = () => {
		drawerStore.open(<SignupDrawer />); // Open the SignUpDrawer when SignUp is clicked
	};

	return (
		<div className="w-full flex justify-center items-center h-full ">
			<div className="py-14 px-24 space-y-5 rounded-xl border border-main-light flex-col shadow-2xl drop-shadow-2xl">
				<h1 className="text-center mb-2 text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
					Welcome back
				</h1>
				<p className="text-center text-sm font-light text-gray-500 dark:text-gray-300">
					Dont have an account?{" "}
					<a href="#" onClick={handleSignUp} className="font-medium text-primary-600 hover:underline dark:text-primary-500">
						Sign Up
					</a>
				</p>
				<input type="email" value={email} onChange={handleEmailChange} placeholder="Email" />
				<input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
				<div className={`py-2 text-center shadow-lg border border-main-light rounded-md bg-main-dark text-text-dark hover:border-text-dark hover:text-text-light hover:bg-main-light`}>
					<button onClick={handleLogin}>
						Sign In
					</button>
				</div>
				{error && <p className="text-center text-sm text-red-500">{error}</p>}
			</div>
		</div>
	);
};

export default LoginForm;