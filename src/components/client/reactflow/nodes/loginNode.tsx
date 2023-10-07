//path: src\components\client\reactflow\nodes\loginNode.tsx

import NodeSelectionState from "../utils/nodeSelectionState";
import ComponentBuilder from "../../ui/ComponentBuilder";
import React, { useEffect, useState } from "react";
import ContentPreset from "../../ui/contentPreset";
import ButtonPreset from "../../ui/buttonPreset";
import InputPreset from "../../ui/inputPreset";
import CardPreset from "../../ui/cardPreset";
import { NodeProps } from "reactflow";
import {
	createClientComponentClient,
	User,
} from "@supabase/auth-helpers-nextjs";

const Content = new ComponentBuilder(ContentPreset)
	.withStyle("text-night-title")
	.withStyle("text-sm")
	.withStyle("px-1")
	.withRoundedElement()
	.build();
const Button = new ComponentBuilder(ButtonPreset)
	.withStyle("text-sm")
	.withRoundedButton()
	.build();
const Input = new ComponentBuilder(InputPreset)
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

	const onClick = async () => {
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
			<CardPreset className={NodeSelectionState(props.id)}>
				{user ? (
					<Content>{user.email}</Content>
				) : (
					<>
						<Input
							value={emailText}
							onChange={(e) => setEmailText(e.target.value)}
						/>

						<Input
							value={passwordText}
							type="password"
							onChange={(e) => setPasswordText(e.target.value)}
						/>
					</>
				)}
				<Button onClick={onClick}>{user ? "Logout" : "Login"}</Button>
			</CardPreset>
		</>
	);
};

export default React.memo(LoginNode);
