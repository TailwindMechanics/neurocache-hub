//path: src\modules\Graph\Internal\components\nodeInspector.tsx

import { CustomNode } from "@modules/Graph/types";
import { FC } from "react";

interface NodeInspectorProps {
    nodeData: CustomNode;
}

const NodeInspector: FC<NodeInspectorProps> = (props) => {
    return (
        <div className="rounded-lg bg-night-black p-2 font-mono font-extrabold leading-snug text-aqua-dark">
            <div className="mx-1 mb-2 mt-1 rounded-lg border-2 border-night-light pb-2 pt-1 text-center text-xl">
                <p>Api Id</p>
                <p className="font-medium leading-none text-night-body">
                    {props.nodeData.nodeId}
                </p>
            </div>
            <div className="px-1.5">
                Name:
                <p className="font-medium text-night-body">
                    {props.nodeData.nodeName}
                </p>
                Description:
                <p className="font-medium text-night-body">
                    {props.nodeData.body}
                </p>
            </div>
        </div>
    );
};

export default NodeInspector;
