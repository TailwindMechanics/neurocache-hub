//path: src\modules\Drawer\types.tsx

import { Agent } from "@modules/Agents/types";
import { ReactNode } from "react";

export interface DrawerElement {
    node: ReactNode;
    panelTitle: string;
}

export interface ChatMessage {
    id: string;
    channel_id: string;
    user_author_id: string | null;
    agent_author_id: string | null;
    content: string;
    type: string;
    status: string | null;
    created_at: string;
}

export interface AgentChatHistory {
    chatHistory: ChatMessage[];
    agent: Agent;
}
