import { useReactFlow } from "reactflow";
import { NodeData } from "@src/types/nodeData";

const useNodeHandle = (handleId: string | undefined) => {
	const reactFlowInstance = useReactFlow();
	const allNodeDatas = reactFlowInstance
		.getNodes()
		.map((node) => node.data as NodeData);

	const nodeData = allNodeDatas.find(
		(node) => node.handles?.some((handle) => handle.id === handleId),
	);

	const handleData = nodeData?.handles?.find(
		(handle) => handle.id === handleId,
	);

	return { nodeData, handleData };
};

export default useNodeHandle;
