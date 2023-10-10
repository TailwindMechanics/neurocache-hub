//path: src\modules\NeuroGraph\nodes\loginNode.tsx

import React, { useEffect, useState } from "react";
import { NodeProps } from "reactflow";
import {
	createClientComponentClient,
	User,
} from "@supabase/auth-helpers-nextjs";

import Components from "@client/components";
import { NodeSelectionState } from "..";

const Content = new Components.Builder(Components.Content)
	.withStyle("text-night-title")
	.withStyle("text-sm")
	.withStyle("px-1")
	.withRoundedElement()
	.build();
const Button = new Components.Builder(Components.Button)
	.withStyle("text-sm")
	.withRoundedButton()
	.build();
const Input = new Components.Builder(Components.Input.Default)
	.withStyle("text-center")
	.withRoundedElement()
	.build();

const LoginNode: React.FC<NodeProps> = (props: NodeProps) => {
	const [passwordText, setPasswordText] = useState("");
	const [emailText, setEmailText] = useState("");
	const supabase = createClientComponentClient();
	const [user, setUser] = useState<User>();

	useEffect(() => {
		const fetchUser = async () => {
			const sessionResponse = await supabase.auth.getSession();
			if (!sessionResponse.data.session) return;

			const response = await supabase.auth.getUser();
			if (response.error) return;

			setUser(response.data.user);
		};

		fetchUser();
	}, [supabase.auth]);

	const onSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		if (!user) {
			await supabase.auth.signInWithPassword({
				email: emailText,
				password: passwordText,
			});
		} else {
			supabase.auth.signOut();
		}
	};

	return (
		<>
			<Components.Card className={NodeSelectionState(props.id)}>
				<Components.Form id="login_form" onSubmit={onSubmit}>
					{user ? (
						<Content>{user.email}</Content>
					) : (
						<>
							<Input
								id="login_email"
								className="font-mono text-xs"
								value={emailText}
								onChange={(e) => setEmailText(e.target.value)}
							/>
							<Input
								id="login_password"
								className="font-mono text-xs"
								value={passwordText}
								type="password"
								onChange={(e) =>
									setPasswordText(e.target.value)
								}
							/>
						</>
					)}
					<Button id="login_button" type="submit">
						{user ? "Logout" : "Login"}
					</Button>
				</Components.Form>
			</Components.Card>
		</>
	);
};

export default React.memo(LoginNode);
