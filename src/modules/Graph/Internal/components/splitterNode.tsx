//path: src\modules\Graph\Internal\components\splitterNode.tsx

import React, { useEffect } from "react";
import { NodeProps } from "reactflow";

import { NodeSelectionState } from "../utils/nodeSelectionState";
import { MapOutputIds } from "../utils/mapOutputIds";
import { useNodeFlow } from "../hooks/useNodeFlow";
import { DrawHandle } from "../utils/drawHandle";
import IComposer from "@modules/Composer";
import { NodeData } from "../../types";
import IIcons from "@modules/Icons";

const Card = new IComposer.Builder(IComposer.Components.Shell)
    .withStyle("px-1")
    .build();

const SplitterNode: React.FC<NodeProps> = (props: NodeProps) => {
    const { nodeFlowValue, setNodeFlowValue } = useNodeFlow();
    const nodeData = props.data as NodeData;

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

export default React.memo(SplitterNode);
