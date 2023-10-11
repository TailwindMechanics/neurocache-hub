//path: src\modules\NeuroGraph\nodes\nodePresets.tsx

import { NodeTypes } from "reactflow";

import { NodeData } from "@shared/types";
import Graph from "..";

export const nodeTypes: NodeTypes = {
    splitter: Graph.Nodes.Splitter,
    input_box: Graph.Nodes.Text,
    send_output: Graph.Nodes.Button,
    open_ai: Graph.Nodes.OpenAi.Node,
    spawner: Graph.Nodes.Spawner,
    login: Graph.Nodes.Login,
    markdown_box: Graph.Nodes.Markdown,
    test_box: Graph.Nodes.Test,
    openai_models: Graph.Nodes.OpenAi.Models,
    comment_payload: Graph.Nodes.CommentPayload,
};

export const getUnhiddenNodes = () => {
    return nodePresets.filter((node) => node.category !== "Hidden");
};

export const nodePresets = [
    {
        nodeType: "splitter",
        nodeName: "Splitter",
        category: "Utils",
        nodeId: "splitter_60e9b8e9a7f1d8c7c7f9",
        body: "This node is used to split the flow.",
        handles: [
            {
                id: "in_splitter_1_60e9b8e9a7f1d8c7c7f9",
                type: "target",
                offset: { x: 50, y: -8 },
                angle: 0,
            },
            {
                id: "out_splitter_1_60e9b8e9a7f1d8c7c7f9",
                type: "source",
                offset: { x: 8, y: 85 },
                angle: 240,
            },
            {
                id: "out_splitter_2_60e9b8e9a7f1d8c7c7f9",
                type: "source",
                offset: { x: 92, y: 85 },
                angle: 120,
            },
        ],
        nodePosition: { x: 150, y: 0 },
    } as NodeData,
    {
        nodeType: "send_output",
        nodeName: "Send Button",
        category: "Utils",
        nodeId: "node_button_output_60e9b8e9a7f1d8c7c7f6",
        body: "This node outputs the InputField text when the Button is clicked.",
        handles: [
            {
                id: "in_button_output_60e9b8e9a7f1d8c7c7f6",
                type: "target",
                offset: { x: -0.33, y: 40 },
                angle: -90,
            },
            {
                id: "out_button_output_60e9b8e9a7f1d8c7c7f6",
                type: "source",
                offset: { x: 100.33, y: 40 },
                angle: 90,
            },
        ],
        nodePosition: { x: 0, y: 0 },
    } as NodeData,
    {
        nodeType: "input_box",
        nodeName: "Text",
        category: "Utils",
        nodeId: "node_input_box_60e9b8e9a7f1d8c7c7f7",
        body: "This node displays input payload it receives.",
        nodePosition: { x: 50, y: 0 },
        handles: [
            {
                id: "in_input_box_60e9b8e9a7f1d8c7c7f7",
                type: "target",
                offset: { x: -0.33, y: 40 },
                angle: -90,
            },
            {
                id: "out_input_box_60e9b8e9a7f1d8c7c7f7",
                type: "source",
                offset: { x: 100.33, y: 40 },
                angle: 90,
            },
        ],
    } as NodeData,
    {
        nodeType: "login",
        nodeName: "Login",
        category: "Utils",
        nodeId: "node_login_1",
        body: "This node logs a user in.",
        handles: [],
        nodePosition: { x: 0, y: 0 },
    } as NodeData,
    {
        nodeType: "open_ai",
        nodeName: "Gpt-4",
        category: "OpenAi",
        nodeId: "node_open_ai_60e9b8e9a7f1d8c7c7f8",
        body: "This node makes an API request to OpenAI.",
        handles: [
            {
                id: "in_open_ai_60e9b8e9a7f1d8c7c7f8",
                type: "target",
                offset: { x: -0.33, y: 40 },
                angle: -90,
            },
            {
                id: "out_open_ai_60e9b8e9a7f1d8c7c7f8",
                type: "source",
                offset: { x: 100.33, y: 40 },
                angle: 90,
            },
        ],
        nodePosition: { x: 100, y: 0 },
    } as NodeData,
    {
        nodeType: "spawner",
        nodeName: "Spawner",
        category: "Hidden",
        nodeId: "node_spawner_1",
        body: "This node spawns other nodes.",
        handles: [],
        nodePosition: { x: 200, y: 0 },
    } as NodeData,
    {
        nodeType: "markdown_box",
        nodeName: "Markdown",
        category: "UI",
        nodeId: "node_markdown_box_50e9b8e9a7f1d8c7c7f7",
        body: "This node displays input markdown.",
        nodePosition: { x: 50, y: 0 },
        handles: [
            {
                id: "in_markdown_box_50e9b8e9a7f1d8c7c7f7",
                type: "target",
                offset: { x: -0.33, y: 40 },
                angle: -90,
            },
            {
                id: "out_markdown_box_50e9b8e9a7f1d8c7c7f7",
                type: "source",
                offset: { x: 100.33, y: 40 },
                angle: 90,
            },
        ],
    } as NodeData,
    {
        nodeType: "test_box",
        nodeName: "Test",
        category: "Unhidden",
        nodeId: "test_box_1",
        body: "This is for testing.",
        handles: [
            {
                id: "out_test_box_60e9b8e9a7f1d8c774h2",
                type: "source",
                offset: { x: 100.33, y: 40 },
                angle: 90,
            },
        ],
        nodePosition: { x: 100, y: 0 },
    } as NodeData,
    {
        nodeType: "openai_models",
        nodeName: "Models",
        category: "OpenAi",
        nodeId: "openai_models_60e9b8e9a7f1d8c7gdw3",
        body: "This node returns the models.",
        handles: [
            {
                id: "out_openai_models_60e9b8e9a7f1d8c7gdw3",
                type: "source",
                offset: { x: 100.33, y: 40 },
                angle: 90,
            },
        ],
        nodePosition: { x: 100, y: 0 },
    } as NodeData,
    {
        nodeType: "comment_payload",
        nodeName: "Comment Payload",
        category: "Utils",
        nodeId: "comment_payload_60e9b8e9a7f1d8c7dsa2",
        body: "This node returns the models.",
        handles: [
            {
                id: "in_comment_payload_60e9b8e9a7f1d8c7dsa2",
                type: "target",
                offset: { x: -0.33, y: 40 },
                angle: -90,
            },
            {
                id: "out_comment_payload_60e9b8e9a7f1d8c7dsa2",
                type: "source",
                offset: { x: 100.33, y: 40 },
                angle: 90,
            },
        ],
        nodePosition: { x: 100, y: 0 },
    } as NodeData,
];
