//path: src\modules\Graph\Internal\components\nodeInspector.tsx

import { CustomNode } from "@modules/Graph/types";
import { FC } from "react";

interface NodeInspectorProps {
    nodeData: CustomNode;
}

const NodeInspector: FC<NodeInspectorProps> = (props) => {
    return (
        <div className="rounded-lg bg-night-black p-2 font-mono font-semibold text-aqua-dark">
            <div className="mb-2 rounded-lg border-2 border-night-light p-1 text-center text-xl">
                <p>
                    <u>Id</u>:
                </p>
                <p className="text-night-body">{props.nodeData.nodeId}</p>
            </div>
            <p>
                <u>Name</u>: {props.nodeData.nodeName}
            </p>
            <p>
                <u>Description</u>: {props.nodeData.body}
            </p>
        </div>
    );
};

export default NodeInspector;
