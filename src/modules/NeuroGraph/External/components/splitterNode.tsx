//path: src\modules\NeuroGraph\nodes\splitterNode.tsx

import React, { useEffect } from "react";
import { NodeProps } from "reactflow";

import { NodeSelectionState, MapOutputIds, DrawHandle } from "..";
import Components from "@client/components";
import { NodeData } from "@shared/types";
import Data from "@shared/data";
import Use from "@client/hooks";

const Card = new Components.Builder(Components.Shell).withStyle("px-1").build();

const SplitterNode: React.FC<NodeProps> = (props: NodeProps) => {
    const { nodeFlowValue, setNodeFlowValue } = Use.NodeFlow();
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
                <Data.Icons.Splitter className="stroke-fill-none h-5 w-4 stroke-aqua-dark text-aqua" />
            </Card>
        </>
    );
};

export default React.memo(SplitterNode);
