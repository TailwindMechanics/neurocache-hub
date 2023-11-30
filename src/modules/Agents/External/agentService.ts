//path: src\modules\Agents\External\agentService.ts

import { BehaviorSubject } from "rxjs";
import { Agent } from "../types";

class AgentService {
    private activeAgent = new BehaviorSubject<Agent | null>(null);
    public activeAgent$ = this.activeAgent.asObservable();

    private recentAgents = new BehaviorSubject<Agent[]>([]);
    public recentAgents$ = this.recentAgents.asObservable();

    fetchAgents() {
        // Call API to retrieve latest agent data
    }

    getAgent(agentId: string): Agent {
        // Find and return agent by id

        return {
            agent_id: "",
            creator_id: "",
            agent_name: "",
            status: "",
            persona: "",
            avatar_url: "",
            graph: {
                nodes: [],
                edges: [],
                viewport: { zoom: 1, x: 0, y: 0 },
            },
            date_modified: new Date(),
            date_created: new Date(),
        };
    }

    addAgent(agent: Agent) {
        // Persist new agent
    }

    setActiveAgent(agent: Agent) {
        this.activeAgent.next(agent);
    }

    removeAgent(agentId: string) {
        // Delete agent
    }
}

const service = new AgentService();
export default service;
