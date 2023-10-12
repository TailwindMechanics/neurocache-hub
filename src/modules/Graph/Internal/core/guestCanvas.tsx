//path: src\modules\Graph\Internal\core\guestCanvas.tsx

import ReactFlow, { BackgroundVariant, Background, Node } from "reactflow";
import "reactflow/dist/style.css";
import React from "react";

import { reactFlowSettingsProps } from "./reactflowConfig";
import { StyleReactFlowLogo } from "./styleReactFlowLogo";
import { createNode } from "../utils/nodeUtils";
import IColors from "@modules/Colors";
import IAuth from "@modules/Auth/client";

const GuestCanvas: React.FC = () => {
    StyleReactFlowLogo();

    const loginNodeData = createNode({
        type: "login",
        name: "Login",
        body: "Login to your account",
        handles: [],
        pos: { x: 0, y: 0 },
    });

    const newLoginNode: Node = {
        id: loginNodeData.nodeId,
        type: "login",
        position: loginNodeData.nodePosition,
        data: { ...loginNodeData },
    };

    return (
        <div className="h-screen w-screen bg-gradient-to-tr from-rose-dark from-0% via-rose via-20% to-rose-light to-90%">
            <ReactFlow
                nodes={[newLoginNode]}
                nodeTypes={{ login: IAuth.LoginNode }}
                fitView={true}
                {...reactFlowSettingsProps}>
                <Background
                    variant={BackgroundVariant.Dots}
                    color={IColors.Colors["rose-dark"]}
                />
            </ReactFlow>
        </div>
    );
};

export default GuestCanvas;
