//path: src\modules\Graph\Internal\components\nodeInspector.tsx

import { ApiIdBox } from "@modules/Composer";
import { CustomNode } from "@modules/Graph/types";
import { FC } from "react";

interface NodeInspectorProps {
    nodeData: CustomNode;
}

const NodeInspector: FC<NodeInspectorProps> = (props) => {
    return (
        <div className="rounded-lg p-2 text-aqua-dark">
            <ApiIdBox className="mb-0.5" id={props.nodeData.nodeId} />
            <div className="px-1.5">
                Name:
                <p className="text-night-body">{props.nodeData.nodeName}</p>
                Description:
                <p className="text-night-body">{props.nodeData.body}</p>
            </div>
        </div>
    );
};

export default NodeInspector;
