## Project Overview
- Neurocache enables users to easily create customizable AI Agents to automate tasks and access them via an Api.
- Neurocache consists of two standalone web applications: 
	- **Neurocache Hub** a full-stack web app for creating and managing cohorts of AI Agents, found at <a href="https://www.neurocache.ai/" target="_blank">neurocache.ai</a>
	- **Neurocache Api** a service mesh api app that provides the intelligence for the cohorts of agents, found at <a href="https://www.neurocache.dev/" target="_blank">neurocache.dev</a>
- This is a work in progress and an _experimental_ codebase.
## Neurocache Hub (this repo)
- Neurocache Hub is a full-stack web application that provides a platform for users to create, train, and customize their own AI Agents to perform tasks tailored to their needs, using an interactive node graph editor, which executes as per a behavior tree on the Neurocache Api app. 
- Tasks/Nodes on an agent graph may include: web scraping, web research, image and video analysis, defining the agent persona, the agent model, long term memory format, directing the agent to a knowledgebase, and also fine-tuning of the agent.
- The Hub features a Slack-like real-time chat where users can assemble and interact with groups (caches) of their AI Agents. It serves as a testing ground for the agents and allows users to test their creations in real-time with other users, all within the familiar context of a group chat setting.
- The cache feature enables users to create teams of AI Agents, each with their own unique specialization. These caches are united by a common goal and are then accessible from the user's codebases via the Api.
- Additionally, the Hub includes a dashboard that allows users manage their agent roster, manage and generate their Api keys, view real-time usage and cost data, and also watch the graphs execute in real-time as their agents and caches execute.
- The project uses the Blind Modules architecture where a module is a discrete domain of work with an external api accessible to the wider hub codebase, but the internal workings of a module are inaccessible.
- The UI component library adheres to the principles of Atomic Design, from which component presets can be composed by passing atomic components through the builder.
## Neurocache Api
- The Neurocache Api provides the backend intelligence and capabilities that power the AI agents created in Neurocache Hub. It is a modular microservice architecture, where each node type in the graph editor corresponds to a discrete microservice.
- This enables extreme flexibility and customization of AI agents. Users can combine and configure nodes in extensive ways to build agent logic that suits their specific needs. The Api handles interfacing between nodes, queueing and routing of tasks, translating user-defined graphs into executable logic, and leveraging AI models like DALL-E.
- Key capabilities provided by the Api include:
	- Stateful execution of agent graphs and trees, supporting branching logic.
	- Standardized interfaces between graph nodes for seamless interoperability.
	- Queueing systems for long-running background processes like AI model queries.
	- Caching and storage of execution state, agent memory, media, and data.
	- Access to large AI models like DALL-E 2 for generating images from text prompts.
	- Secure access and rate limiting for user-created agents.
	- Api endpoints for external systems to leverage user agents.
- By providing these capabilities as composable microservices, the Neurocache Api allows for customized agent logic while handling the complexity behind the scenes. Users can focus on defining agent behaviors at a high-level using the graph editor, while the Api brings it to life.
## Neurocache Hub tech stack
- Url: <a href="https://www.neurocache.ai/" target="_blank">neurocache.ai</a>
- Dependency Management: **Pnpm**
- Framework: **Next.js**
- Language: **TypeScript**
- Routing: Built-in with **Next.js** (later server components/actions)
- State: **Rxjs**, **Context Api**
- Database and Auth: **Supabase**
- Testing: **React Testing Library**, **Jest**
- Hosting and deployment: **Vercel**
- Styles: **Tailwind**
- UI Library: **Headless UI**
- Node editor: **React flow**
- Animation: **Framer motion**
## Neurocache Api tech stack
- Url: <a href="https://www.neurocache.dev/" target="_blank">neurocache.dev</a>
- Hosting and deployment: **Koyeb**
- Api gateway and management: **Kong**
- Messaging: **Kafka**
- Database: **Supabase**

---