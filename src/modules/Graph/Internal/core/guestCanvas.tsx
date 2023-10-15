//path: src\modules\Graph\Internal\core\guestCanvas.tsx

import ReactFlow, { BackgroundVariant, Background } from "reactflow";
import "reactflow/dist/style.css";
import React from "react";

import { reactFlowSettingsProps } from "./reactflowConfig";
import { StyleReactFlowLogo } from "./styleReactFlowLogo";
import useNodeSpawner from "../hooks/useNodeSpawner";
import LoginNode from "src/modules/Auth/client/nodes/loginNode";
import Colors from "@modules/Colors/colors";

const customNodeTypes = { login: LoginNode };

const GuestCanvas: React.FC = () => {
    const nodeSpawner = useNodeSpawner();
    StyleReactFlowLogo();

    const newLoginNode = nodeSpawner.spawn("login");
    if (!newLoginNode) return null;

    return (
        <div className="h-screen w-screen bg-gradient-to-tr from-rose-dark from-0% via-rose via-20% to-rose-light to-90%">
            <ReactFlow
                nodes={[newLoginNode]}
                nodeTypes={customNodeTypes}
                fitView={true}
                {...reactFlowSettingsProps}>
                <Background
                    variant={BackgroundVariant.Dots}
                    color={Colors["rose-dark"]}
                />
            </ReactFlow>
        </div>
    );
};

export default GuestCanvas;
