//path: src\modules\Graph\Internal\utils\nodeFlowUtils.ts

import { CustomNode, NodeFlowValue } from "../../types";
import { IsNullOrEmpty } from "@modules/Utils";
import { MapOutputIds } from "./mapOutputIds";

const extractInput = (
    nodeData: CustomNode,
    flowValue: NodeFlowValue,
    fallback: string = "Text",
) => {
    const anyInputIncluded = nodeData.handles.some((input) => {
        return input.type === "target" && flowValue.ids.includes(input.id);
    });

    if (anyInputIncluded && flowValue.payload) {
        let displayText = !IsNullOrEmpty(flowValue.payload)
            ? (flowValue.payload as string)
            : fallback;

        return displayText;
    }

    return null;
};

const sendOutput = (
    nodeData: CustomNode,
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
