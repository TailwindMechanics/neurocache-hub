# readme.md
# Neurocache: Project Overview
Neurocache consists of two standalone web applications: **Neurocache Hub** and **Neurocache Api**.
This is a work in progress and an _experimental_ codebase.

## Neurocache Hub (this repo)
- Neurocache Hub is a full-stack web application that provides a platform for users to create, train, and customize their own AI agents to perform tasks tailored to their needs. Tasks may include deep web searching, image and video analysis, or even transforming into a subject matter expert trained on custom datasets.

- The Hub features a Slack-like real-time chat where users can assemble and interact with groups of AI agents. It serves as a training ground for the agents and allows users to test their creations in real-time with other users, all within the familiar context of a group chat setting.

- The channel feature lets users create teams of AI agents, each with their own unique specialization. These teams are united by a common goal and are accessible through the API, enabling you to harness the collective intelligence of your AI agents.

- Additionally, the Hub includes a dashboard that lets users manage their agent roster, generate API keys, and view real-time usage data.

- Our UI components are designed using Storybook and adhere to the principles of Atomic Design.

## Neurocache Api
- The Neurocache Api will no longer be a single dedicated codebase but a distributed network of microservices hosted on Koyeb, available to clients via a Kong api, and managed by the Neurocache Hub.

### Website
- neurocache.ai: The Hub URL. Here you'll find our landing page, sales information, and login and signup pages.
- api.neurocache.ai: The Api, accessible only with a valid key.

### Tagline
- Create and craft specialized AI Agents.

### Neurocache Hub tech stack
- Dependency Management: Pnpm
- Framework: Next.js
- Language: TypeScript
- Authentication: Supabase
- Routing: Built-in with Next.js (later server components/actions)
- Fetching: Axios
- State: Rxjs and context api
- Database: Supabase Postgres
- ORM: Supabase
- Caching: Upstash Redis
- Redis IO: Upstash
- Realtime: Socket.io
- Testing: React Testing Library, Jest, Cypress
- CI/CD: Vercel
- Hosting: Vercel
- Styles: Tailwind
- UI Library: Headless
- UI Component design: Storybook
- Node editor: React flow
- Charts: Echarts
- 3d Package: React Three Fiber
- Animation: Framer motion

---
