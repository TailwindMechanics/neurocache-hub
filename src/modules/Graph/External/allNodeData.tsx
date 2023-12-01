//path: src\modules\Graph\External\allNodeData.tsx

"use client";

import { CommentPayload } from "../Internal/nodes/commentPayload";
import { SendOutputNode } from "../Internal/nodes/sendOutputNode";
import { SplitterNode } from "../Internal/nodes/splitterNode";
import { SpawnerNode } from "../Internal/nodes/spawnerNode";
import { TestBox } from "../Internal/nodes/testBox";
import { TextBox } from "../Internal/nodes/textBox";
import { CustomNode } from "../types";

import { AvatarGen, Persona, GptChat } from "@modules/Nodes";
import { OpenAiModels, OpenAiNode } from "@modules/OpenAi";
import { ActiveAgent, AgentCache } from "@modules/Agents";
import { EntryNode } from "../Internal/nodes/entryNode";
import { LoginNode } from "@modules/Auth";

export const allNodeData = [
    {
        serializable: false,
        nodeType: "active_agent",
        nodeName: "Active Agent",
        category: "Persistent",
        nodeId: "active_agent",
        body: "This displays the active agent.",
        handles: [],
        nodePosition: { x: -120, y: 0 },
        nodeComponent: ActiveAgent,
    } as CustomNode,
    {
        serializable: false,
        nodeType: "login",
        nodeName: "Login",
        category: "Persistent",
        nodeId: "login",
        body: "This node allows a user to login, signup, and logout.",
        handles: [],
        nodePosition: { x: -120, y: 60 },
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
        nodePosition: { x: 0, y: 0 },
        nodeComponent: AgentCache,
    } as CustomNode,
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
        nodeType: "text",
        nodeName: "Text",
        category: "UI",
        nodeId: "unset",
        body: "This node displays text formatted with markdown.",
        nodePosition: { x: 50, y: 0 },
        handles: [
            {
                id: "unset",
                type: "target",
                offset: { x: 50, y: 0 },
                angle: 0,
            },
        ],
        nodeComponent: TextBox,
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
        serializable: true,
        nodeType: "entry",
        nodeName: "Entry",
        category: "Utils",
        nodeId: "unset",
        body: "This node is a convenience, a node you can call from your code to kick things off.",
        nodePosition: { x: 50, y: 0 },
        handles: [
            {
                id: "unset",
                type: "source",
                offset: { x: 90, y: 90 },
                angle: 135,
            },
        ],
        nodeComponent: EntryNode,
    } as CustomNode,
    {
        serializable: true,
        nodeType: "avatar_gen",
        nodeName: "Avatar Gen",
        category: "Images",
        nodeId: "unset",
        body: "This node generates an avatar.",
        nodePosition: { x: 50, y: 0 },
        handles: [
            {
                id: "unset",
                type: "target",
                offset: { x: 5, y: 5 },
                angle: -45,
            },
            {
                id: "unset",
                type: "source",
                offset: { x: 90, y: 90 },
                angle: 135,
            },
        ],
        nodeComponent: AvatarGen,
    } as CustomNode,
    {
        serializable: true,
        nodeType: "persona",
        nodeName: "Persona",
        category: "Persona",
        nodeId: "unset",
        body: "This node generates the Name and Personality for the agent.",
        nodePosition: { x: 50, y: 0 },
        handles: [
            {
                id: "unset",
                type: "target",
                offset: { x: 5, y: 5 },
                angle: -45,
            },
            {
                id: "unset",
                type: "source",
                offset: { x: 90, y: 90 },
                angle: 135,
            },
        ],
        nodeComponent: Persona,
    } as CustomNode,
    {
        serializable: true,
        nodeType: "gpt_chat",
        nodeName: "Gpt Chat",
        category: "Chat",
        nodeId: "unset",
        body: "This node is used to get OpenAi Gpt chat replies.",
        nodePosition: { x: 50, y: 0 },
        handles: [
            {
                id: "unset",
                type: "target",
                offset: { x: 5, y: 5 },
                angle: -45,
            },
            {
                id: "unset",
                type: "source",
                offset: { x: 90, y: 90 },
                angle: 135,
            },
        ],
        nodeComponent: GptChat,
    } as CustomNode,
];
