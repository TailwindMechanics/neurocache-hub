//path: src\modules\Graph\Internal\core\saveGraph.tsx

import { Viewport, useReactFlow } from "reactflow";
import { useState, useEffect } from "react";

import { saveGraph } from "./nodeSerializer";
import { useAuth } from "../hooks/useAuth";
import { UseCtrlS } from "@modules/Utils";
import React from "react";

interface SaveGraphProps {
    flowKey: string;
    viewportRef: React.MutableRefObject<Viewport>;
}

const GuestMessage = "guest";

const SaveGraph = React.memo((props: SaveGraphProps) => {
    const [statusText, setStatusText] = useState<string>(GuestMessage);
    const reactFlowInstance = useReactFlow();
    const user = useAuth().user;

    useEffect(() => {
        setStatusText(user?.email ?? GuestMessage);
    }, [user]);

    UseCtrlS(async () => {
        setStatusText("saving...");
        saveGraph(
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
