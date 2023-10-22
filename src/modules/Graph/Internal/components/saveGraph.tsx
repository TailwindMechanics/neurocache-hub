//path: src\modules\Graph\Internal\components\saveGraph.tsx

import { Viewport, useReactFlow } from "reactflow";
import { useState, useEffect, useTransition } from "react";

import { saveGraph as saveGraphLocal } from "../core/nodeSerializer";
import { useAuth } from "../hooks/useAuth";
import { UseCtrlS } from "@modules/Utils";
import React from "react";
import { upsertAgentGraph } from "@modules/Database/External/Server/actions";

interface SaveGraphProps {
    flowKey: string;
    viewportRef: React.MutableRefObject<Viewport>;
}

const GuestMessage = "guest";

const SaveGraph = React.memo((props: SaveGraphProps) => {
    const [statusText, setStatusText] = useState<string>(GuestMessage);
    let [isPending, startTransition] = useTransition();
    const reactFlowInstance = useReactFlow();
    const user = useAuth().user;

    useEffect(() => {
        setStatusText(user?.email ?? GuestMessage);
    }, [user]);

    UseCtrlS(async () => {
        setStatusText("saving...");
        const graphData = {
            nodes: reactFlowInstance.getNodes(),
            edges: reactFlowInstance.getEdges(),
            viewport: props.viewportRef.current,
        };

        startTransition(async () => {
            const response = await upsertAgentGraph(graphData);
            if (response) {
                if (response.error) {
                    setStatusText(response.error.message);
                } else {
                    setStatusText("saved");
                }
            }
        });

        saveGraphLocal(
            reactFlowInstance.getNodes(),
            reactFlowInstance.getEdges(),
            "graph",
            props.viewportRef.current,
        );

        setTimeout(() => {
            setStatusText(user?.email ?? GuestMessage);
        }, 1500);
    });

    return (
        <div className="absolute bottom-1 left-3 z-10 select-none font-mono text-sm font-semibold text-rose-light">
            {statusText}
        </div>
    );
});

SaveGraph.displayName = "SaveGraph";
export { SaveGraph };
