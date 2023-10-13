//path: src\modules\Graph\Internal\core\guestCanvas.tsx

import ReactFlow, { BackgroundVariant, Background } from "reactflow";
import "reactflow/dist/style.css";
import React from "react";

import { reactFlowSettingsProps } from "./reactflowConfig";
import { StyleReactFlowLogo } from "./styleReactFlowLogo";
import useNodeSpawner from "../hooks/useNodeSpawner";
import IColors from "@modules/Colors";

import AuthClient from "@modules/Auth/client";
const IAuthClient = AuthClient.resolve("IAuthClient");

const customNodeTypes = { login: IAuthClient.LoginNode };

const GuestCanvas: React.FC = () => {
    const nodeSpawner = useNodeSpawner();
    StyleReactFlowLogo();

    console.log("GuestCanvas");

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
                    color={IColors.Colors["rose-dark"]}
                />
            </ReactFlow>
        </div>
    );
};

export default GuestCanvas;
