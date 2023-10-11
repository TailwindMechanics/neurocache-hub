//path: src\modules\NeuroGraph\utils\nodeFlowUtils.ts

import { NodeData, NodeFlowValue } from "@shared/types";
import { IsNullOrEmpty } from "@shared/utils";
import { MapOutputIds } from "../../External";

const extractInput = (
    nodeData: NodeData,
    flowValue: NodeFlowValue,
    fallback: string = "Text",
) => {
    const anyInputIncluded = nodeData.handles.some((input) => {
        return input.type === "target" && flowValue.ids.includes(input.id);
    });

    if (anyInputIncluded) {
        let displayText = !IsNullOrEmpty(flowValue.payload)
            ? (flowValue.payload as string)
            : fallback;

        return displayText;
    }

    return null;
};

const sendOutput = (
    nodeData: NodeData,
    flowValue: NodeFlowValue,
    setNodeFlowValue: (newValue: NodeFlowValue) => void,
) => {
    const outputs = MapOutputIds(flowValue.ids, nodeData.handles);
    if (outputs && outputs.length > 0) {
        setNodeFlowValue({
            ids: outputs,
            payload: flowValue.payload,
        });
    }
};

export { extractInput, sendOutput };
