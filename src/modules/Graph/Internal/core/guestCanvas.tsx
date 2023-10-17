//path: src\modules\Graph\Internal\core\guestCanvas.tsx

"use client";

import ReactFlow, { BackgroundVariant, Background } from "reactflow";
import "reactflow/dist/style.css";
import React from "react";

import { LoginNode } from "@modules/Auth/Internal/client/nodes/loginNode";
import { reactFlowSettingsProps } from "./reactflowConfig";
import { StyleReactFlowLogo } from "./styleReactFlowLogo";
import { useNodeSpawner } from "../hooks/useNodeSpawner";
import { Colors } from "@modules/Colors/colors";

const GuestCanvas = React.memo(() => {
    const nodeSpawner = useNodeSpawner();
    StyleReactFlowLogo();

    const newLoginNode = nodeSpawner.spawn("login");
    if (!newLoginNode) return null;

    return (
        <div className="h-screen w-screen bg-gradient-to-tr from-rose-dark from-0% via-rose via-20% to-rose-light to-90%">
            <ReactFlow
                nodes={[newLoginNode]}
                nodeTypes={{ login: LoginNode }}
                fitView={true}
                {...reactFlowSettingsProps}>
                <Background
                    variant={BackgroundVariant.Dots}
                    color={Colors["rose-dark"]}
                />
            </ReactFlow>
        </div>
    );
});

GuestCanvas.displayName = "GuestCanvas";
export { GuestCanvas };
