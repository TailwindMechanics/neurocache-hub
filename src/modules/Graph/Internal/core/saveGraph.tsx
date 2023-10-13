//path: src\modules\Graph\Internal\core\saveGraph.tsx

import { useSession } from "@supabase/auth-helpers-react";
import { Viewport, useReactFlow } from "reactflow";
import { FC, useState, useEffect } from "react";

import { saveGraph } from "./nodeSerializer";
import IUtils from "@modules/Utils";

interface SaveGraphProps {
    flowKey: string;
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
        saveGraph(
            reactFlowInstance.getNodes(),
            reactFlowInstance.getEdges(),
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
