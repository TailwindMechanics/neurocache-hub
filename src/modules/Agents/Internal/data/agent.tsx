//path: src\modules\Agents\Internal\data\agent.tsx

// path: src\modules\Agents\types.tsx

import { GraphData } from "@modules/Graph/types";
import { Persona } from "@modules/Personagen/types";

class Agent {
    private creator_user_id: string;
    private graph_data?: GraphData;
    private dateModified?: Date;
    private dateCreated: Date = new Date();
    private persona?: Persona;
    private status?: boolean;
    private imgUrl?: string;
    private role?: string;
    private name?: string;

    constructor(builder: AgentBuilder) {
        this.creator_user_id = builder.creator_user_id;
        this.graph_data = builder.graph_data;
        this.dateModified = builder.dateModified;
        this.dateCreated = builder.dateCreated;
        this.persona = builder.persona;
        this.status = builder.status;
        this.imgUrl = builder.imgUrl;
        this.role = builder.role;
        this.name = builder.name;
    }

    // ... Other methods to control data modification and access
}

class AgentBuilder {
    creator_user_id: string;
    graph_data?: GraphData;
    dateModified?: Date = new Date();
    dateCreated: Date = new Date();
    persona?: Persona;
    status?: boolean;
    imgUrl?: string;
    role?: string;
    name?: string;

    constructor(creator_user_id: string) {
        this.creator_user_id = creator_user_id;
    }

    setGraphData(graph_data: GraphData): this {
        this.graph_data = graph_data;
        return this;
    }

    setDateModified(dateModified: Date): this {
        this.dateModified = dateModified;
        return this;
    }

    setPersona(persona: Persona): this {
        this.persona = persona;
        return this;
    }

    setStatus(status: boolean): this {
        this.status = status;
        return this;
    }

    setImgUrl(imgUrl: string): this {
        this.imgUrl = imgUrl;
        return this;
    }

    setRole(role: string): this {
        this.role = role;
        return this;
    }

    setName(name: string): this {
        this.name = name;
        return this;
    }

    build(): Agent {
        return new Agent(this);
    }
}

class AgentFactory {
    static createAgent(creator_user_id: string): Agent {
        return new AgentBuilder(creator_user_id).build();
    }
}

// Usage:
const agent = AgentFactory.createAgent("user1234");
