//path: src\modules\Graph\Internal\components\nodeInspector.tsx

import { ApiIdBox } from "@modules/Composer";
import { CustomNode } from "@modules/Graph/types";
import { FC } from "react";

interface NodeInspectorProps {
    nodeData: CustomNode;
}

const NodeInspector: FC<NodeInspectorProps> = (props) => {
    return (
        <div className="rounded-lg p-2 font-mono font-extrabold leading-snug text-aqua-dark">
            <ApiIdBox id={props.nodeData.nodeId} />
            <div className="px-1.5">
                Name:
                <p className="font-semi-bold text-night-body">
                    {props.nodeData.nodeName}
                </p>
                Description:
                <p className="font-semi-bold text-night-body">
                    {props.nodeData.body}
                </p>
            </div>
        </div>
    );
};

export default NodeInspector;
