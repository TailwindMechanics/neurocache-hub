
Use this after the demo https://youtu.be/AAMJZTEH_h4
https://youtu.be/aD-u0gl93wM

# Todo
- Sign in
  - Create login flow
  - Restore graph from db
- Undo support
- Persist node content data
- Display active state of graph
- In node flow provider kill signal flow: 
  - if N of the same payload arrive in X time

# Objective
- Demonstrate how you can compose an agent to accomplish the task of finding your dream job.

# Required Nodes
# 0. Login: 
  - For authentication and access control.
  - Later will be many types, initially email/password.
# 1. Persona: 
  - Choose which model to use for the agent's persona.
  - UI configs temperature, max tokens, top p, and frequency of persona prompts.
  - To define the agent's persona and generate an avatar via an image generation API.
  - UI configs the prompt direction template.
# 2. Chat:
  - For direct communication with the user.
  - Has inbuilt retrospective analysis to decide if/when to synthesize and store relevant information, and when to discard.
  - QA can be done here
# 3 Expertise: 
  - For long-term memory and subject matter expertise.
  - To extract text from PDFs.
  - To scrap content from websites.
  - To monitor URL content for changes.
  - Monitor web searches.
  - Monitor social media/rss/forums/etc.
# 4. Notify: 
  - Sends an email.
  - Later extend to SMS, Slack, etc.
# 5. Planner: 
  - For task planning and objective mapping. 
  - Later will be many types, initially langchain/goap.
# 6. Metagraph: 
  - Enables the agent to adjust the overall node configuration
  - Capable of generating new node graphs or suggesting modifications to existing graphs, based on set objectives, user prompts, or ongoing analyses.
  - Provides the agent with access to a vector database (vdb) that holds critical data about existing nodes, their functions, and relationships.






Objective
To create an AI agent that can help you find your dream job.
How Nodes Work Towards the Objective
1. Persona
Role: Provides the 'character' of your agent, sets the tone for interactions.
How It Helps: A tailored persona can help the agent to understand you better, making the job-search process more aligned with your preferences and personality.
2. Chat
Role: Main interface for communication between you and the agent.
How It Helps: Allows real-time interaction for clarifying your requirements, setting your job preferences, and receiving updates. QA can be done here to clarify any ambiguities or to ask further insightful questions.
3. Expertise
Role: Acts as the brain storing long-term memory and subject matter expertise.
How It Helps: Scours job boards, company websites, and social media for job openings. It could monitor for changes in job listings and capture relevant data. Also, it can provide you with insights into career paths and job roles that you might not have considered.
4. Notify
Role: Notification center.
How It Helps: Sends timely alerts when a suitable job opening is found or if there are any significant changes on the job front that require your attention.
5. Planner
Role: Task and objective planning.
How It Helps: Structures the job search into actionable steps. Could prioritize tasks based on deadlines, or the importance of different roles. This could be especially useful in crafting and sending job applications on your behalf.
6. Metagraph
Role: Dynamic configuration.
How It Helps: If the agent identifies a more efficient way to find job openings or realizes that a new node is needed to optimize the process, it could reconfigure itself. This adaptability is crucial for navigating the volatile job market.
Inter-node Communication
The Chat and Persona nodes establish initial goals, which are fed to the Planner node.
The Planner works with Expertise to structure these goals into actionable queries or tasks.
Expertise conducts the actual job search, feeds data to Planner for sequencing, and sends appropriate notifications via Notify.
Metagraph continually optimizes the node configuration based on the evolving requirements and effectiveness of the existing setup.
By working in harmony, these nodes aim to provide a comprehensive solution to finding your dream job, each adding a layer of complexity and utility to the overall objective.




Objective
To create an AI agent that becomes an expert in cryptocurrency and aims to generate €1000 from an initial €100 investment.
How Nodes Work Towards the Objective
1. Persona
Role: Sets the tone and approachability of the agent.
How It Helps: Since the domain is now financial, the persona can adapt to be more analytical and data-driven.
2. Chat
Role: Main communication channel.
How It Helps: Interacts with you to confirm risk tolerance, trading strategies, and to report on market trends and investment updates. Will likely require more frequent interactions due to the volatile nature of crypto markets.
3. Expertise
Role: Knowledge base and skill set.
How It Helps: Constantly updates its database with real-time crypto market trends, insights from experts, news, etc. Monitors the performance of specific cryptocurrencies and suggests which ones are promising for investment.
4. Notify
Role: Notification center.
How It Helps: Sends alerts about significant market changes, trade executions, or when target milestones (like a certain profit percentage) are reached.
5. Planner
Role: Strategic planning.
How It Helps: Creates a financial strategy based on your risk tolerance and desired outcomes, potentially leveraging predictive models. It might also set timelines for when to buy or sell.
6. Metagraph
Role: Dynamic adaptability.
How It Helps: As the agent learns more about crypto and market behavior, it can suggest changes in the node configuration to better meet the new objective. For instance, it might propose adding a "Real-time Trading" node for quicker reaction to market trends.
Inter-node Communication
Chat and Persona nodes establish your risk tolerance and financial goals.
Planner uses this to devise a strategy, consulting Expertise for market knowledge.
Expertise monitors markets and potentially executes trades, aligned with the strategy from Planner.
Notify keeps you informed of significant milestones, market changes, and trade executions.
Metagraph evaluates the performance and can suggest changes, like adding a new node for statistical analysis of market trends.
So, in this scenario, the agent, driven by its nodes, could serve as a comprehensive financial advisor and trader in the crypto market, with the aim to turn your €100 into €1000.





Objective:
Automate the process of performing competitor analysis and generating market reports for SaaS companies. The generated reports will be sold as a subscription service to clients.
How the Nodes would Work Together:
Persona

Role: Sales and Customer Relationship.
How It Helps: Defines the target market, subscription pricing, and promotional activities.
Expertise

Role: Market Research and Analysis.
How It Helps: Gathers data on competitors, user reviews, market trends, and more.
Planner

Role: Report and Update Scheduler.
How It Helps: Sets deadlines for data collection and report generation.
Chat

Role: Customer Support and Feedback Collection.
How It Helps: Engages with current and potential clients, addresses their queries, and gathers their requirements.
Notify

Role: Distribution.
How It Helps: Sends out the generated market reports to subscribed clients via email.
Metagraph

Role: Continuous Improvement.
How It Helps: Monitors client engagement and report usefulness, making iterative improvements to the analysis and report format.
Workflow:
Persona defines the target market and pricing strategy.
Expertise begins data collection.
Planner sets a schedule for when reports need to be sent out.
Chat engages with clients to identify their specific needs and to offer customization.
Notify distributes the generated reports.
Metagraph reviews performance metrics and client feedback for continuous improvement.
Profitability:
By selling these automated, yet highly personalized, competitor analysis reports on a subscription basis, the system provides an immediate solution to companies looking to stay ahead in a competitive market. This generates ongoing revenue while minimizing the labor costs usually associated with market research and report generation.











```tsx
import React, { useState, useCallback } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  addEdge,
  useReactFlow,
  Panel,
} from 'reactflow';
import 'reactflow/dist/style.css';

const flowKey = 'example-flow';

const getNodeId = () => `randomnode_${+new Date()}`;

const initialNodes = [
  { id: '1', data: { label: 'Node 1' }, position: { x: 100, y: 100 } },
  { id: '2', data: { label: 'Node 2' }, position: { x: 100, y: 200 } },
];

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

const SaveRestore = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [rfInstance, setRfInstance] = useState(null);
  const { setViewport } = useReactFlow();

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);
  const onSave = useCallback(() => {
    if (rfInstance) {
      const flow = rfInstance.toObject();
      localStorage.setItem(flowKey, JSON.stringify(flow));
    }
  }, [rfInstance]);

  const onRestore = useCallback(() => {
    const restoreFlow = async () => {
      const flow = JSON.parse(localStorage.getItem(flowKey));

      if (flow) {
        const { x = 0, y = 0, zoom = 1 } = flow.viewport;
        setNodes(flow.nodes || []);
        setEdges(flow.edges || []);
        setViewport({ x, y, zoom });
      }
    };

    restoreFlow();
  }, [setNodes, setViewport]);

  const onAdd = useCallback(() => {
    const newNode = {
      id: getNodeId(),
      data: { label: 'Added node' },
      position: {
        x: Math.random() * window.innerWidth - 100,
        y: Math.random() * window.innerHeight,
      },
    };
    setNodes((nds) => nds.concat(newNode));
  }, [setNodes]);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onInit={setRfInstance}
    >
      <Panel position="top-right">
        <button onClick={onSave}>save</button>
        <button onClick={onRestore}>restore</button>
        <button onClick={onAdd}>add node</button>
      </Panel>
    </ReactFlow>
  );
};

export default () => (
  <ReactFlowProvider>
    <SaveRestore />
  </ReactFlowProvider>
);

```