//path: src\modules\Graph\Internal\components\splitterNode.tsx

import React, { useEffect } from "react";
import { NodeProps } from "reactflow";

import { NodeSelectionState } from "../utils/nodeSelectionState";
import CustomNodesRepo from "../core/CustomNodesRepo";
import { MapOutputIds } from "../utils/mapOutputIds";
import { useNodeFlow } from "../hooks/useNodeFlow";
import { DrawHandle } from "../utils/drawHandle";
import IComposer from "@modules/Composer";
import { CustomNode } from "../../types";
import IIcons from "@modules/Icons";

const Card = new IComposer.Builder(IComposer.Components.Shell)
    .withStyle("px-1")
    .build();

const SplitterNode: React.FC<NodeProps> = (props: NodeProps) => {
    const { nodeFlowValue, setNodeFlowValue } = useNodeFlow();
    const nodeData = props.data as CustomNode;

    useEffect(() => {
        const updateNodeFlowOutputs = () => {
            const outputs = MapOutputIds(nodeFlowValue.ids, nodeData.handles);
            if (outputs && outputs.length > 0) {
                setNodeFlowValue({
                    ids: outputs,
                    payload: nodeFlowValue.payload,
                });
            }
        };

        updateNodeFlowOutputs();
    }, [nodeData.handles, nodeFlowValue, setNodeFlowValue]);

    return (
        <>
            {nodeData.handles?.map((handle, index) =>
                DrawHandle({ handle, nodeData, index }),
            )}
            <Card className={NodeSelectionState(props.id)}>
                <IIcons.Splitter className="stroke-fill-none h-5 w-4 stroke-aqua-dark text-aqua" />
            </Card>
        </>
    );
};

const nodeData = {
    nodeType: "splitter",
    nodeName: "Splitter",
    category: "Utils",
    nodeId: "splitter_60e9b8e9a7f1d8c7c7f9",
    body: "This node is used to split the flow.",
    handles: [
        {
            id: "in_splitter_1_60e9b8e9a7f1d8c7c7f9",
            type: "target",
            offset: { x: 50, y: -8 },
            angle: 0,
        },
        {
            id: "out_splitter_1_60e9b8e9a7f1d8c7c7f9",
            type: "source",
            offset: { x: 8, y: 85 },
            angle: 240,
        },
        {
            id: "out_splitter_2_60e9b8e9a7f1d8c7c7f9",
            type: "source",
            offset: { x: 92, y: 85 },
            angle: 120,
        },
    ],
    nodePosition: { x: 150, y: 0 },
} as CustomNode;

CustomNodesRepo.instance.addNode(nodeData);

export default React.memo(SplitterNode);
