
## Project Overview
- Neurocache consists of two standalone web applications: 
	- **Neurocache Hub** a full stack web app for creating and managing cohorts of ai agents, found at <a href="https://www.neurocache.ai/" target="_blank">neurocache.ai</a>
	- **Neurocache Api** a service mesh api app that provides the intelligence for the cohorts of agents, found at <a href="https://www.neurocache.dev/" target="_blank">neurocache.dev</a>
- This is a work in progress and an _experimental_ codebase.

## Neurocache Hub (this repo)
- Neurocache Hub is a full-stack web application that provides a platform for users to create, train, and customize their own AI agents to perform tasks tailored to their needs, using an interactive node graph editor, which executes in a behaviour tree fashion on the Neurocache Api app. 
- Tasks/Nodes on an agent graph may include; web scraping, web research, image and video analysis, defining the agent persona, the agent model, long term memory format, directing the agent to a knowledgebase, and also finetuning of the agent.
- The Hub features a Slack-like real-time chat where users can assemble and interact with groups (caches) of their AI agents. It serves as a testing ground for the agents and allows users to test their creations in real-time with other users, all within the familiar context of a group chat setting.
- The cache feature enables users to create teams of AI agents, each with their own unique specialization. These caches are united by a common goal and are then accessible from the users codebases via the Api.
- Additionally, the Hub includes a dashboard that allows users manage their agent roster, manage and generate their API keys, view real-time usage data and cost data, and also watch the graphs execute in realtime as their agents and caches execute.
- The project uses the Blind Modules architecture where a module is a discrete domain of work with an external api accessible to the wider codebase, but the internal workings of a module are inaccessible.
- The UI component library adheres to the principles of Atomic Design, from which component presets can be composed by passing atomic components through the builder.

## Neurocache Api
- The Neurocache Api is a collection of microservices in a service mesh architecture. Each represented by a node on the graph in the Hub.
- Users can leverage the api from their own codebases in order to use their custom agents and agent caches.

## Neurocache Hub tech stack
- Url: <a href="https://www.neurocache.ai/" target="_blank">neurocache.ai</a>
- Dependency Management: Pnpm
- Framework: Next.js
- Language: TypeScript
- Authentication: Supabase
- Routing: Built-in with Next.js (later server components/actions)
- State: Rxjs and context api
- Database and ORM: Supabase Postgres
- Testing: React Testing Library, Jest,
- Hosting and deployment: Vercel
- Styles: Tailwind
- UI Library: Headless UI
- Node editor: React flow
- Animation: Framer motion

## Neurocache Api tech stack
- Url: <a href="https://www.neurocache.dev/" target="_blank">neurocache.dev</a>
- Hosting and deployment: Koyeb
- Api gateway and management: Kong
- Messaging: Kafka
- Database: Supabase