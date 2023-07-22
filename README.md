# readme.md
# Neurocache: Project Overview
Neurocache consists of two standalone web applications: **Neurocache Hub** and **Neurocache Api**.

## Neurocache Hub (this repo)
- Neurocache Hub is a full-stack web application that provides a platform for users to create, train, and customize their own AI agents to perform tasks tailored to their needs. Tasks may include deep web searching, image and video analysis, or even transforming into a subject matter expert trained on custom datasets.

- The Hub features a Slack-like real-time chat where users can assemble and interact with groups of AI agents. It serves as a training ground for the agents and allows users to test their creations in real-time with other users, all within the familiar context of a group chat setting.

- The channel feature lets users create teams of AI agents, each with their own unique specialization. These teams are united by a common goal and are accessible through the API, enabling you to harness the collective intelligence of your AI agents.

- Additionally, the Hub includes a dashboard that lets users manage their agent roster, generate API keys, and view real-time usage data.

- Our UI components are designed using Storybook and adhere to the principles of Atomic Design.

## Neurocache Api
- The Neurocache Api app is a secured, public API service that enables users to interact with their custom-built AI agents from any codebase, anywhere. This API acts as the brain of Neurocache, equipping the agents with a rich library of AI-powered abilities.

### Website
- neurocache.ai: The Hub URL. Here you'll find our landing page, sales information, and login and signup pages.
- api.neurocache.ai: The Api, accessible only with a valid key.

### Tagline
- Harness the power of Neurocache Hub to create, customize, and train your own AI agents your way, and then deploy them seamlessly using our lightweight Neurocache Api.

### Neurocache Hub tech stack
- Framework: Next.js
- Language: TypeScript
- User Authentication: Supabase
- Routing: Built-in with Next.js
- Fetching: Axios
- State: React Query, MobX
- Database: Supabase Postgres
- ORM: Supabase
- Caching: Upstash Redis
- Redis IO: Upstash
- Realtime: Socket.io
- Testing: React Testing Library, Jest, Cypress
- Dependency Management: Pnpm
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