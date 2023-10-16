//path: src\modules\Graph\Internal\reflection\allNodeData.tsx

import { CustomNode } from "src/modules/Graph/types";

import CommentPayload from "../nodes/commentPayload";
import MarkdownBox from "../nodes/markdownBox";
import SendButton from "../nodes/sendOutputNode";
import Spawner from "../nodes/spawnerNode";
import TextBox from "../nodes/inputBox";
import Splitter from "../nodes/splitterNode";
import TestBox from "../nodes/testBox";

import LoginNode from "src/modules/Auth/client/nodes/loginNode";

// todo fix these imports, should not be reaching into another module
import OpenAiModels from "src/modules/OpenAi/Internal/nodes/openAiModels";
import OpenAiNode from "src/modules/OpenAi/Internal/nodes/openAiNode";

export const allNodeData = [
    {
        nodeType: "login",
        nodeName: "Login",
        category: "Utils",
        nodeId: "node_login_1",
        body: "This node logs a user in.",
        handles: [],
        nodePosition: { x: 0, y: 0 },
        nodeComponent: LoginNode,
    } as CustomNode,
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
        nodeComponent: CommentPayload,
    } as CustomNode,
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
        nodeComponent: TextBox,
    } as CustomNode,
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
        nodeComponent: MarkdownBox,
    } as CustomNode,
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
        nodeComponent: SendButton,
    } as CustomNode,
    {
        nodeType: "spawner",
        nodeName: "Spawner",
        category: "Hidden",
        nodeId: "node_spawner_1",
        body: "This node spawns other nodes.",
        handles: [],
        nodePosition: { x: 200, y: 0 },
        nodeComponent: Spawner,
    } as CustomNode,
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
        nodeComponent: Splitter,
    } as CustomNode,
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
        nodeComponent: TestBox,
    } as CustomNode,
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
        nodeComponent: OpenAiModels,
    } as CustomNode,
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
        nodeComponent: OpenAiNode,
    } as CustomNode,
];
