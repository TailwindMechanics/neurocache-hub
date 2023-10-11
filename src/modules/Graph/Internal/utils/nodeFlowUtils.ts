//path: src\modules\Graph\Internal\utils\nodeFlowUtils.ts

import { NodeData, NodeFlowValue } from "../../types";
import { MapOutputIds } from "./mapOutputIds";
import IUtils from "@modules/Utils";

const extractInput = (
    nodeData: NodeData,
    flowValue: NodeFlowValue,
    fallback: string = "Text",
) => {
    const anyInputIncluded = nodeData.handles.some((input) => {
        return input.type === "target" && flowValue.ids.includes(input.id);
    });

    if (anyInputIncluded && flowValue.payload) {
        let displayText = !IUtils.IsNullOrEmpty(flowValue.payload)
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
