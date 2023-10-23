//path: src\modules\Agents\Internal\data\sampleAgents.tsx

import { Agent } from "@modules/Agents/types";

export const sampleAgents: Agent[] = [
    {
        imgUrl: "/images/bird80px.png",
        name: "Brainwave",
        role: "Concierge",
        status: true,
        dateModified: "20/10/23",
        dateCreated: "01/01/23",
    },
    {
        imgUrl: "/images/bird80px.png",
        name: "Aine",
        role: "Coordinator",
        status: false,
        dateModified: "15/10/23",
        dateCreated: "02/01/23",
    },
    {
        imgUrl: "/images/bird80px.png",
        name: "Searchbot",
        role: "Webmaster",
        status: true,
        dateModified: "10/10/23",
        dateCreated: "03/01/23",
    },
    {
        imgUrl: "/images/bird80px.png",
        name: "Pointer bot",
        role: "Webmaster",
        status: true,
        dateModified: "09/10/23",
        dateCreated: "04/01/23",
    },
    {
        imgUrl: "/images/bird80px.png",
        name: "Claude",
        role: "Administrator",
        status: true,
        dateModified: "08/10/23",
        dateCreated: "05/01/23",
    },
    {
        imgUrl: "/images/bird80px.png",
        name: "Pi",
        role: "Librarian",
        status: false,
        dateModified: "07/10/23",
        dateCreated: "06/01/23",
    },
    {
        imgUrl: "/images/bird80px.png",
        name: "Robotnik",
        role: "Concierge",
        status: true,
        dateModified: "06/10/23",
        dateCreated: "07/01/23",
    },
    {
        imgUrl: "/images/bird80px.png",
        name: "Louise",
        role: "Researcher",
        status: true,
        dateModified: "05/10/23",
        dateCreated: "08/01/23",
    },
    {
        imgUrl: "/images/bird80px.png",
        name: "Helptron",
        role: "Coordinator",
        status: false,
        dateModified: "04/10/23",
        dateCreated: "09/01/23",
    },
    {
        imgUrl: "/images/bird80px.png",
        name: "Bender",
        role: "Webmaster",
        status: false,
        dateModified: "03/10/23",
        dateCreated: "10/01/23",
    },
];

export const agentRoles: string[] = [
    "Coordinator",
    "Researcher",
    "Webmaster",
    "Librarian",
    "Concierge",
];
