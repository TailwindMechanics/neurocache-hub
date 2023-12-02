//path: src\modules\Graph\Internal\components\nodeInspector.tsx

import { ApiIdBox } from "@modules/Composer";
import { CustomNode } from "@modules/Graph/types";
import { FC } from "react";

interface NodeInspectorProps {
    nodeData: CustomNode;
}

const TitleAndBody = (title: string, body: string) => {
    return (
        <>
            {title}:
            <p className="text-justify font-semibold leading-tight text-night-body">
                {body}
            </p>
        </>
    );
};

const NodeInspector: FC<NodeInspectorProps> = (props) => {
    return (
        <div className="rounded-lg p-2 text-aqua-dark">
            <ApiIdBox className="mb-0.5" id={props.nodeData.nodeId} />
            <div className="px-1.5 font-extrabold">
                {TitleAndBody("Title", props.nodeData.nodeName)}
                {TitleAndBody("Type", props.nodeData.nodeType)}
                {TitleAndBody("Category", props.nodeData.category)}
                {TitleAndBody("Description", props.nodeData.body)}
            </div>
        </div>
    );
};

export default NodeInspector;
