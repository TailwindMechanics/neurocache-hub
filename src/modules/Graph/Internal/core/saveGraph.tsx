//path: src\modules\Graph\Internal\core\saveGraph.tsx

import { Viewport, useReactFlow } from "reactflow";
import { FC, useState, useEffect } from "react";

import { saveGraph } from "./nodeSerializer";
import { useAuth } from "../hooks/useAuth";
import { UseCtrlS } from "@modules/Utils";

interface SaveGraphProps {
    flowKey: string;
    viewportRef: React.MutableRefObject<Viewport>;
}

const SaveGraph: FC<SaveGraphProps> = (props) => {
    const [statusText, setStatusText] = useState<string>("not logged in");
    const reactFlowInstance = useReactFlow();
    const user = useAuth().user;

    useEffect(() => {
        setStatusText(user?.email ?? "not logged in");
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
            setStatusText(user?.email ?? "not logged in");
        }, 1500);
    });

    return (
        <div className="absolute bottom-1 left-3 z-10 select-none font-mono text-sm font-semibold text-rose-light">
            {statusText}
        </div>
    );
};

export { SaveGraph };
