//path: src\components\react_flow\nodes\loginNode.tsx

import ComponentBuilder from "@src/components/components/ComponentBuilder";
import NodeSelectionState from "../utils/nodeSelectionState";
import ButtonAtom from "@src/components/atoms/buttonAtom";
import AtomicDiv from "@src/components/atoms/atomicDiv";
import InputAtom from "@src/components/atoms/inputAtom";
import { useSupabase } from "@src/hooks/useSupabase";
import { useSession } from "@src/hooks/useSession";
import { NodeData } from "@src/types/nodeData";
import DrawHandle from "../utils/drawHandle";
import React, { useState } from "react";
import { NodeProps } from "reactflow";

const Root = new ComponentBuilder(AtomicDiv)
	.withStyle("font-mono")
	.withStyle("space-y-1")
	.withStyle("flex-col")
	.withStyle("text-xs")
	.withStyle("p-1.5")
	.withStyle("flex")
	.withStyle("w-40")
	.withRounded()
	.withShadow()
	.withBg()
	.build();

const Content = new ComponentBuilder(AtomicDiv)
	.withStyle("border-night-light")
	.withStyle("bg-night-dark")
	.withStyle("text-aqua")
	.withStyle("text-center")
	.withStyle("rounded")
	.withStyle("border")
	.withStyle("px-2")
	.build();

const LoginNode: React.FC<NodeProps> = (props: NodeProps) => {
	const [passwordText, setPasswordText] = useState("");
	const [emailText, setEmailText] = useState("");
	const nodeData = props.data as NodeData;
	const supabase = useSupabase();
	const session = useSession();

	const onClick = async () => {
		if (!supabase) return;

		if (!session) {
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
			{nodeData.handles?.map((handle, index) =>
				DrawHandle({ handle, nodeData, index }),
			)}
			<Root className={NodeSelectionState(props.id)}>
				{session ? (
					<Content>{session.user?.email}</Content>
				) : (
					<>
						<InputAtom
							value={emailText}
							onChange={(e) => setEmailText(e.target.value)}
							className="h-full w-full rounded-sm bg-night-black px-1 py-0.5 text-center text-aqua-light ring-1 ring-night-light focus:outline-none focus:ring-aqua-light"
						/>
						<InputAtom
							value={passwordText}
							type="password"
							onChange={(e) => setPasswordText(e.target.value)}
							className="h-full w-full rounded-sm bg-night-black px-1 py-0.5 text-center text-aqua-light ring-1 ring-night-light focus:outline-none focus:ring-aqua-light"
						/>
					</>
				)}
				<ButtonAtom
					className="h-full w-full rounded-b-lg rounded-t-sm border border-night-light bg-night pb-0.5 text-night-title "
					onClick={onClick}
				>
					{session ? "Logout" : "Login"}
				</ButtonAtom>
			</Root>
		</>
	);
};

export default React.memo(LoginNode);
