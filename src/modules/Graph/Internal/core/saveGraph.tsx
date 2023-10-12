//path: src\modules\Graph\Internal\core\saveGraph.tsx

import { Edge, Node, Viewport, useReactFlow } from "reactflow";
import { useSession } from "@supabase/auth-helpers-react";
import { FC, useState, useEffect } from "react";

import { saveFlow } from "./flowSaveLoad";
import IUtils from "@modules/Utils";

interface SaveGraphProps {
    flowKey: string;
    setNodes: React.Dispatch<React.SetStateAction<Node[]>>;
    setEdges: React.Dispatch<React.SetStateAction<Edge[]>>;
    viewportRef: React.MutableRefObject<Viewport>;
}

const SaveGraph: FC<SaveGraphProps> = (props) => {
    const [statusText, setStatusText] = useState<string>("");
    const reactFlowInstance = useReactFlow();
    const session = useSession();

    useEffect(() => {
        setStatusText(session?.user?.email ?? "");
    }, [session]);

    IUtils.useCtrlS(async () => {
        if (!session) return;

        setStatusText("saving...");
        saveFlow(
            reactFlowInstance,
            props.setNodes,
            props.setEdges,
            "graph",
            props.viewportRef.current,
        );

        setTimeout(() => {
            setStatusText(session?.user?.email ?? "");
        }, 1500);
    });

    return (
        <div className="absolute bottom-1 left-3 z-10 select-none font-mono text-sm font-semibold text-rose-light">
            {statusText}
        </div>
    );
};

export { SaveGraph };
