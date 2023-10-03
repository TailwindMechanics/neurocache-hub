//path: src\components\react_flow\nodes\loginNode.tsx

import ComponentBuilder from "@src/components/components/ComponentBuilder";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import ContentPreset from "@src/components/components/contentPreset";
import ButtonPreset from "@src/components/components/buttonPreset";
import InputPreset from "@src/components/components/inputPreset";
import CardPreset from "@src/components/components/cardPreset";
import NodeSelectionState from "../utils/nodeSelectionState";
import React, { useState } from "react";
import { NodeProps } from "reactflow";

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
	const supabase = useSupabaseClient();
	const user = useUser();

	const onClick = async () => {
		if (!supabase) return;

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
