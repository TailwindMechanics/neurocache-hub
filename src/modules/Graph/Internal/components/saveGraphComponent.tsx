//path: src\modules\Graph\Internal\components\saveGraphComponent.tsx

import { useState, useEffect, useTransition } from "react";
import { Viewport, useReactFlow, useViewport } from "reactflow";

import { useAuth } from "../hooks/useAuth";
import { UseCtrlS } from "@modules/Utils";
import React from "react";

import { updateAgentGraph } from "@modules/Agents/External/Server/actions";
import { useAgentStore } from "@modules/Agents/External/agentStore";
import { CustomNode } from "@modules/Graph/types";

const GuestMessage = "guest";

const SaveGraphComponent = React.memo(() => {
    const [statusText, setStatusText] = useState<string>(GuestMessage);
    let [_, startTransition] = useTransition();
    const reactFlowInstance = useReactFlow();
    const viewport = useViewport();

    const user = useAuth().user;
    const { activeAgent, refreshRecentAgents } = useAgentStore((state) => ({
        activeAgent: state.activeAgent,
        refreshRecentAgents: state.refreshRecentAgents,
    }));

    useEffect(() => {
        setStatusText(user?.email ?? GuestMessage);
    }, [user]);

    UseCtrlS(async () => {
        if (!activeAgent) return;

        setStatusText("saving...");

        const nodes = reactFlowInstance.getNodes().filter((node) => {
            const nodeData = node.data as CustomNode;
            return nodeData.serializable;
        });

        const graphData = {
            nodes: nodes,
            edges: reactFlowInstance.getEdges(),
            viewport: viewport,
        };

        startTransition(async () => {
            const response = await updateAgentGraph(
                activeAgent.agent_id,
                graphData,
            );

            if (response) {
                if (response.error) {
                    setStatus(response.error.message, 20000);
                    console.log(response.error);
                } else {
                    refreshRecentAgents();
                    setStatus("saved");
                }
            }
        });
    });

    const setStatus = (text: string, cooldown: number = 1500) => {
        setStatusText(text);
        setTimeout(() => {
            setStatusText(user?.email ?? GuestMessage);
        }, cooldown);
    };
    return (
        <div
            onClick={() => {
                navigator.clipboard.writeText(statusText);
                setStatus(`✓ copied: ${statusText}`);
            }}
            className="absolute bottom-1 left-3 z-10 select-none font-mono text-sm font-semibold text-rose-light">
            {statusText}
        </div>
    );
});

SaveGraphComponent.displayName = "SaveGraphComponent";
export { SaveGraphComponent };
