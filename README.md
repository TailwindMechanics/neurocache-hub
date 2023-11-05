
## Project Overview
- Neurocache consists of two standalone web applications: 
	- **Neurocache Hub** a full stack web app for creating and managing cohorts of ai agents found at [neurocache.ai]() 
	- **Neurocache Api** a service mesh api app that provides the intelligence for the cohorts of agents found at [neurocache.dev](). 
- This is a work in progress and an _experimental_ codebase.

## Neurocache Hub (this repo)
- Neurocache Hub is a full-stack web application that provides a platform for users to create, train, and customize their own AI agents to perform tasks tailored to their needs. Tasks may include deep web searching, image and video analysis, or even transforming into a subject matter expert trained on custom datasets.
- The Hub features a Slack-like real-time chat where users can assemble and interact with groups (caches) of AI agents. It serves as a training ground for the agents and allows users to test their creations in real-time with other users, all within the familiar context of a group chat setting.
- The cache feature enables users to create teams of AI agents, each with their own unique specialization. These caches are united by a common goal and are accessible through the API, enabling you to harness the collective intelligence of your AI agents.
- Additionally, the Hub includes a dashboard that lets users manage their agent roster, manage and generate API keys, and view real-time usage data.
- The UI component library adheres to the principles of Atomic Design, from which component presets can be composed.

## Neurocache Api
- The Neurocache Api is a collection of microservices in a service mesh architecture. Each representing a node on the graph in the Hub.
- Users can leverage the api from their own codebases in order to use their custom agents and agent caches.

## Neurocache Hub tech stack
- Url: [neurocache.ai]()
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
- Url: [neurocache.dev]()
- Hosting and deployment: Koyeb
- Api gateway and management: Kong
- Messaging: Kafka
- Database: Supabase