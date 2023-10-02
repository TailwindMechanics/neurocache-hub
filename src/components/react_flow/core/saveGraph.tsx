//path: src\components\react_flow\core\saveGraph.tsx

import { Edge, Node, Viewport, useReactFlow } from "reactflow";
import { useSession } from "@supabase/auth-helpers-react";
import { saveFlow } from "./flowSaveLoad";
import { FC, useEffect } from "react";
import useKeyPress from "@src/hooks/useKeyPress";

interface SaveGraphProps {
	flowKey: string;
	setNodes: React.Dispatch<React.SetStateAction<Node[]>>;
	setEdges: React.Dispatch<React.SetStateAction<Edge[]>>;
	setIsSaved: React.Dispatch<React.SetStateAction<boolean>>;
	viewportRef: React.MutableRefObject<Viewport>;
}

const SaveGraph: FC<SaveGraphProps> = (props) => {
	const reactFlowInstance = useReactFlow();
	const session = useSession();

	useKeyPress("KeyS", () => {
		if (!session) return;

		saveFlow(
			reactFlowInstance,
			props.setNodes,
			props.setEdges,
			props.setIsSaved,
			props.flowKey,
			props.viewportRef.current,
		);
	});

	return null;
};

export default SaveGraph;
