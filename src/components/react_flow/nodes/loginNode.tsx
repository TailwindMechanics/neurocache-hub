//path: src\components\react_flow\nodes\loginNode.tsx

import ComponentBuilder from "@src/components/components/ComponentBuilder";
import NodeSelectionState from "../utils/nodeSelectionState";
import ButtonAtom from "@src/components/atoms/buttonAtom";
import AtomicDiv from "@src/components/atoms/atomicDiv";
import InputAtom from "@src/components/atoms/inputAtom";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import React, { useState } from "react";
import { NodeProps } from "reactflow";

const Root = new ComponentBuilder(AtomicDiv)
	.withStyle("space-y-0.5")
	.withStyle("font-mono")
	.withStyle("flex-col")
	.withStyle("text-xs")
	.withStyle("p-1.5")
	.withStyle("flex")
	.withRoundedFrame()
	.withShadow()
	.withBg()
	.build();

const Content = new ComponentBuilder(AtomicDiv)
	.withStyle("border-night-light")
	.withStyle("text-night-title")
	.withStyle("bg-night-black")
	.withStyle("text-center")
	.withStyle("border")
	.withStyle("px-1")
	.withRoundedElement()
	.build();

const Button = new ComponentBuilder(ButtonAtom)
	.withStyle("border-night-light")
	.withStyle("text-night-title")
	.withStyle("bg-night")
	.withStyle("text-aqua")
	.withStyle("font-bold")
	.withStyle("border")
	.withStyle("w-full")
	.withRoundedButton()
	.build();

const Input = new ComponentBuilder(InputAtom)
	.withStyle("focus:border-aqua-light")
	.withStyle("border-night-light")
	.withStyle("text-aqua-light")
	.withStyle("bg-night-black")
	.withStyle("text-center")
	.withStyle("outline-none")
	.withStyle("ring-none")
	.withStyle("border")
	.withStyle("py-0.5")
	.withStyle("w-full")
	.withStyle("h-full")
	.withStyle("px-1")
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
			<Root className={NodeSelectionState(props.id)}>
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
			</Root>
		</>
	);
};

export default React.memo(LoginNode);
