//path: src\modules\Graph\Internal\core\CustomNodesRepo.tsx

import { CustomNode } from "../../types";
import { NodeTypes } from "reactflow";
import { allNodeData } from "../reflection/allNodeData";

class CustomNodesRepo {
    private static _instance: CustomNodesRepo;
    private customNodes = new Map<string, CustomNode>();

    private constructor() {
        allNodeData.forEach((item) => {
            this.customNodes.set(item.nodeType, item);
        });
    }

    public static get instance() {
        if (!CustomNodesRepo._instance) {
            CustomNodesRepo._instance = new CustomNodesRepo();
        }
        return CustomNodesRepo._instance;
    }

    public getNode(nodeType: string) {
        return this.customNodes.get(nodeType);
    }

    public getNodes = () => {
        return Array.from(this.customNodes.values());
    };

    public getUnhiddenNodes = () => {
        return Array.from(this.customNodes.values()).filter(
            (node) => node.category !== "Hidden",
        );
    };

    public getNodeTypes = () => {
        const result: NodeTypes = {};
        this.customNodes.forEach((node) => {
            result[node.nodeType] = node.nodeComponent;
        });
        return result;
    };
}

export default CustomNodesRepo;
