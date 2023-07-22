//path: src\components\z_deprecated\generic\loginForm.tsx

import { ChangeEvent, useContext, useState } from "react";
import SignupDrawer from "../drawer/signupDrawer";
import { storesContext } from "@src/stores";
import validator from "validator";
import type { FC } from "react";

const LoginForm: FC = function () {
	const { userStore, drawerStore } = useContext(storesContext);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState<string | null>(null);

	const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	};

	const handlePasswordChange = (
		event: ChangeEvent<HTMLInputElement>,
	) => {
		setPassword(event.target.value);
	};

	const handleLogin = async () => {
		if (validator.isEmail(email)) {
			const errorMessage = await userStore.login(
				email,
				password,
			);
			setError(errorMessage);
		} else {
			setError("Invalid email");
		}
	};

	const handleSignUp = () => {
		drawerStore.open(<SignupDrawer />); // Open the SignUpDrawer when SignUp is clicked
	};

	return (
		<div className="flex h-full w-full items-center justify-center ">
			<div className="border-main-light flex-col space-y-5 rounded-xl border px-24 py-14 shadow-2xl drop-shadow-2xl">
				<h1 className="mb-2 text-center text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
					Welcome back
				</h1>
				<p className="text-center text-sm font-light text-gray-500 dark:text-gray-300">
					Dont have an account?{" "}
					<a
						href="#"
						onClick={
							handleSignUp
						}
						className="text-primary-600 dark:text-primary-500 font-medium hover:underline"
					>
						Sign Up
					</a>
				</p>
				<input
					type="email"
					value={email}
					onChange={handleEmailChange}
					placeholder="Email"
				/>
				<input
					type="password"
					value={password}
					onChange={
						handlePasswordChange
					}
					placeholder="Password"
				/>
				<div
					className={`border-main-light bg-main-dark text-text-dark hover:border-text-dark hover:bg-main-light hover:text-text-light rounded-md border py-2 text-center shadow-lg`}
				>
					<button onClick={handleLogin}>
						Sign In
					</button>
				</div>
				{error && (
					<p className="text-center text-sm text-red-500">
						{error}
					</p>
				)}
			</div>
		</div>
	);
};

export default LoginForm;
