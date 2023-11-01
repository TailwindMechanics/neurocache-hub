//path: src\modules\Graph\Internal\components\saveGraph.tsx

import { useState, useEffect, useTransition } from "react";
import { Viewport, useReactFlow } from "reactflow";

import { useAuth } from "../hooks/useAuth";
import { UseCtrlS } from "@modules/Utils";
import React from "react";

import { updateAgentGraph } from "@modules/Agents/External/Server/actions";
import { saveGraph as saveGraphLocal } from "../core/nodeSerializer";
import { useActiveAgent } from "@modules/Agents";

interface SaveGraphProps {
    flowKey: string;
    viewportRef: React.MutableRefObject<Viewport>;
}

const GuestMessage = "guest";

const SaveGraph = React.memo((props: SaveGraphProps) => {
    const [statusText, setStatusText] = useState<string>(GuestMessage);
    let [isPending, startTransition] = useTransition();
    const reactFlowInstance = useReactFlow();
    const { activeAgent } = useActiveAgent();
    const user = useAuth().user;

    useEffect(() => {
        setStatusText(user?.email ?? GuestMessage);
    }, [user]);

    UseCtrlS(async () => {
        if (!activeAgent) return;

        setStatusText("saving...");
        const graphData = {
            nodes: reactFlowInstance.getNodes(),
            edges: reactFlowInstance.getEdges(),
            viewport: props.viewportRef.current,
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
                    setStatus("saved");
                }
            }
        });

        saveGraphLocal(
            reactFlowInstance.getNodes(),
            reactFlowInstance.getEdges(),
            "graph",
            props.viewportRef.current,
        );
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

SaveGraph.displayName = "SaveGraph";
export { SaveGraph };
