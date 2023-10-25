//path: src\modules\Agents\Internal\data\sampleAgents.tsx

import { Agent } from "@modules/Agents/types";

function getRandomDate(): Date {
    const end = new Date();
    const start = new Date(end.getTime() - 1000 * 60 * 60 * 24 * 365 * 3);
    return new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime()),
    );
}

export const sampleAgents: Agent[] = [
    {
        creator_user_id: "0",
        graph_data: {
            nodes: [],
            edges: [],
            viewport: { x: 0, y: 0, zoom: 1 },
        },
        imgUrl: "/avatars/Brainwave.png",
        name: "Brainwave",
        role: "Concierge",
        status: true,
    },
    {
        creator_user_id: "0",
        graph_data: {
            nodes: [],
            edges: [],
            viewport: { x: 0, y: 0, zoom: 1 },
        },
        imgUrl: "/avatars/aine.png",
        name: "Aine",
        role: "Coordinator",
        status: false,
    },
    {
        creator_user_id: "0",
        graph_data: {
            nodes: [],
            edges: [],
            viewport: { x: 0, y: 0, zoom: 1 },
        },
        imgUrl: "/avatars/searchbot.png",
        name: "Searchbot",
        role: "Webmaster",
        status: true,
    },
    {
        creator_user_id: "0",
        graph_data: {
            nodes: [],
            edges: [],
            viewport: { x: 0, y: 0, zoom: 1 },
        },
        imgUrl: "/avatars/pointerbot.png",
        name: "Pointer bot",
        role: "Webmaster",
        status: true,
    },
    {
        creator_user_id: "0",
        graph_data: {
            nodes: [],
            edges: [],
            viewport: { x: 0, y: 0, zoom: 1 },
        },
        imgUrl: "/avatars/claude.png",
        name: "Claude",
        role: "Administrator",
        status: true,
    },
    {
        creator_user_id: "0",
        graph_data: {
            nodes: [],
            edges: [],
            viewport: { x: 0, y: 0, zoom: 1 },
        },
        imgUrl: "/avatars/pi.png",
        name: "Pi",
        role: "Librarian",
        status: false,
    },
    {
        creator_user_id: "0",
        graph_data: {
            nodes: [],
            edges: [],
            viewport: { x: 0, y: 0, zoom: 1 },
        },
        imgUrl: "/avatars/robotnik.png",
        name: "Robotnik",
        role: "Concierge",
        status: true,
    },
    {
        creator_user_id: "0",
        graph_data: {
            nodes: [],
            edges: [],
            viewport: { x: 0, y: 0, zoom: 1 },
        },
        imgUrl: "/avatars/Louise.png",
        name: "Louise",
        role: "Researcher",
        status: true,
    },
    {
        creator_user_id: "0",
        graph_data: {
            nodes: [],
            edges: [],
            viewport: { x: 0, y: 0, zoom: 1 },
        },
        imgUrl: "/avatars/helptron.png",
        name: "Helptron",
        role: "Coordinator",
        status: false,
    },
    {
        creator_user_id: "0",
        graph_data: {
            nodes: [],
            edges: [],
            viewport: { x: 0, y: 0, zoom: 1 },
        },
        imgUrl: "/avatars/bender.png",
        name: "Bender",
        role: "Webmaster",
        status: false,
    },
].map((agent) => ({
    ...agent,
    dateModified: getRandomDate(),
    dateCreated: getRandomDate(),
}));

export const agentRoles: string[] = [
    "Coordinator",
    "Researcher",
    "Webmaster",
    "Librarian",
    "Concierge",
];
