//path: src\modules\Graph\External\allNodeData.tsx

"use client";

import { CommentPayload } from "../Internal/nodes/commentPayload";
import { SendOutputNode } from "../Internal/nodes/sendOutputNode";
import { SplitterNode } from "../Internal/nodes/splitterNode";
import { MarkdownBox } from "../Internal/nodes/markdownBox";
import { SpawnerNode } from "../Internal/nodes/spawnerNode";
import { InputBox } from "../Internal/nodes/inputBox";
import { TestBox } from "../Internal/nodes/testBox";
import { CustomNode } from "../types";

import { OpenAiModels, OpenAiNode } from "@modules/OpenAi";
import { ActiveAgent, AgentEditor } from "@modules/Agents";
import { LoginNode } from "@modules/Auth";

export const allNodeData = [
    {
        serializable: true,
        nodeType: "comment_payload",
        nodeName: "Prefix Payload",
        category: "Hidden",
        nodeId: "unset",
        body: "This node prefixes the input payload.",
        handles: [
            {
                id: "unset",
                type: "target",
                offset: { x: -0.33, y: 40 },
                angle: -90,
            },
            {
                id: "unset",
                type: "source",
                offset: { x: 100.33, y: 40 },
                angle: 90,
            },
        ],
        nodePosition: { x: 100, y: 0 },
        nodeComponent: CommentPayload,
    } as CustomNode,
    {
        serializable: true,
        nodeType: "input_box",
        nodeName: "Text",
        category: "Hidden",
        nodeId: "unset",
        body: "This node displays input payload it receives.",
        nodePosition: { x: 50, y: 0 },
        handles: [
            {
                id: "unset",
                type: "target",
                offset: { x: -0.33, y: 40 },
                angle: -90,
            },
            {
                id: "unset",
                type: "source",
                offset: { x: 100.33, y: 40 },
                angle: 90,
            },
        ],
        nodeComponent: InputBox,
    } as CustomNode,
    {
        serializable: true,
        nodeType: "markdown_box",
        nodeName: "Markdown",
        category: "UI",
        nodeId: "unset",
        body: "This node displays input markdown.",
        nodePosition: { x: 50, y: 0 },
        handles: [
            {
                id: "unset",
                type: "target",
                offset: { x: -0.33, y: 40 },
                angle: -90,
            },
            {
                id: "unset",
                type: "source",
                offset: { x: 100.33, y: 40 },
                angle: 90,
            },
        ],
        nodeComponent: MarkdownBox,
    } as CustomNode,
    {
        serializable: true,
        nodeType: "send_output",
        nodeName: "Send Button",
        category: "Utils",
        nodeId: "unset",
        body: "This node outputs the InputField text when the Button is clicked.",
        handles: [
            {
                id: "unset",
                type: "target",
                offset: { x: -0.33, y: 40 },
                angle: -90,
            },
            {
                id: "unset",
                type: "source",
                offset: { x: 100.33, y: 40 },
                angle: 90,
            },
        ],
        nodePosition: { x: 0, y: 0 },
        nodeComponent: SendOutputNode,
    } as CustomNode,
    {
        serializable: false,
        nodeType: "spawner",
        nodeName: "Spawner",
        category: "Hidden",
        nodeId: "spawner",
        body: "This node spawns other nodes.",
        handles: [],
        nodePosition: { x: 200, y: 0 },
        nodeComponent: SpawnerNode,
    } as CustomNode,
    {
        serializable: true,
        nodeType: "splitter",
        nodeName: "Splitter",
        category: "Utils",
        nodeId: "unset",
        body: "This node is used to split the flow.",
        handles: [
            {
                id: "unset",
                type: "target",
                offset: { x: 50, y: -8 },
                angle: 0,
            },
            {
                id: "unset",
                type: "source",
                offset: { x: 8, y: 85 },
                angle: 240,
            },
            {
                id: "unset",
                type: "source",
                offset: { x: 92, y: 85 },
                angle: 120,
            },
        ],
        nodePosition: { x: 150, y: 0 },
        nodeComponent: SplitterNode,
    } as CustomNode,
    {
        serializable: true,
        nodeType: "test_box",
        nodeName: "Test",
        category: "Hidden",
        nodeId: "unset",
        body: "This is for testing.",
        handles: [
            {
                id: "unset",
                type: "source",
                offset: { x: 100.33, y: 40 },
                angle: 90,
            },
        ],
        nodePosition: { x: 100, y: 0 },
        nodeComponent: TestBox,
    } as CustomNode,
    {
        serializable: true,
        nodeType: "openai_models",
        nodeName: "Models",
        category: "Hidden",
        nodeId: "unset",
        body: "This node returns the models.",
        handles: [
            {
                id: "unset",
                type: "source",
                offset: { x: 100.33, y: 40 },
                angle: 90,
            },
        ],
        nodePosition: { x: 100, y: 0 },
        nodeComponent: OpenAiModels,
    } as CustomNode,
    {
        serializable: true,
        nodeType: "open_ai",
        nodeName: "Gpt-4",
        category: "Hidden",
        nodeId: "unset",
        body: "This node makes an API request to OpenAI.",
        handles: [
            {
                id: "unset",
                type: "target",
                offset: { x: -0.33, y: 40 },
                angle: -90,
            },
            {
                id: "unset",
                type: "source",
                offset: { x: 100.33, y: 40 },
                angle: 90,
            },
        ],
        nodePosition: { x: 100, y: 0 },
        nodeComponent: OpenAiNode,
    } as CustomNode,
    {
        serializable: false,
        nodeType: "active_agent",
        nodeName: "Active Agent",
        category: "Persistent",
        nodeId: "active_agent",
        body: "This displays the active agent.",
        handles: [],
        nodePosition: { x: -240, y: 0 },
        nodeComponent: ActiveAgent,
    } as CustomNode,
    {
        serializable: false,
        nodeType: "login",
        nodeName: "Login",
        category: "Persistent",
        nodeId: "login",
        body: "This node logs a user in.",
        handles: [],
        nodePosition: { x: -240, y: -40 },
        nodeComponent: LoginNode,
    } as CustomNode,
    {
        serializable: false,
        nodeType: "agent_cache",
        nodeName: "Agent Cache",
        category: "Persistent",
        nodeId: "agent_cache",
        body: "Edit or Create Agents.",
        handles: [],
        nodePosition: { x: -140, y: 0 },
        nodeComponent: AgentEditor,
    } as CustomNode,
];
