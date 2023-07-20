//path: src\components\z_deprecated\drawer\signupDrawer.tsx

import Image from "next/image";
import { FC } from "react";

interface SignupDrawerProps {}

const SignupDrawer: FC<SignupDrawerProps> = ({}) => {
	const style =
		"bg-bg focus:bg-main-dark text-md rounded-lg border-main-light focus:outline-none focus:border-text-dark focus:ring-0 w-full block";
	return (
		<>
			<div className="flex-col">
				<form className="" action="#">
					<div>
						<input
							className={
								style
							}
							type="text"
							name="full-name"
							id="email"
							placeholder="First Name..."
							required={
								true
							}
						/>
					</div>
					<div>
						<input
							className={
								style
							}
							type="text"
							name="full-name"
							id="email"
							placeholder="e.g. Man"
							required={
								true
							}
						/>
					</div>
					<div>
						<input
							className={
								style
							}
							type="email"
							name="email"
							id="email"
							placeholder="name@company.com"
							required={
								true
							}
						/>
					</div>
					<div>
						<input
							className={
								style
							}
							type="password"
							name="password"
							id="password"
							placeholder="Password..."
							required={
								true
							}
						/>
					</div>
					<div>
						<input
							className={
								style
							}
							type="password"
							name="password"
							id="password"
							placeholder="Confirm Password..."
							required={
								true
							}
						/>
					</div>
					<button
						type="submit"
						className="w-full rounded-l border border-main-light bg-main-dark px-4 py-2 text-text-dark hover:border-text-dark hover:bg-main-light hover:text-text-light"
					>
						Create Account
					</button>
				</form>
			</div>
		</>
	);
};

export default SignupDrawer;
