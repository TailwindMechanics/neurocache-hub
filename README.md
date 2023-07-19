# readme.md
# Neurocache: Project Overview
Neurocache consists of two standalone web applications: **Neurocache Hub** and **Neurocache Api**.

## Neurocache Hub (this repo)
- Neurocache Hub is a full-stack web application that serves as a platform for users to create, train, and customize their own AI agents to perform tasks specific to their needs. This might include deep web searching, image and video analysis, or becoming a subject matter expert trained on custom datasets.
- The Hub integrates a Slack-like real-time chat where users can assemble groups of agents. It serves as a training ground for the agents and allows users to test their creations in real-time with other users, all in a familiar group chat setting.
- The channel feature allows users to create teams of AI agents each with their own unique specialization, and united towards a common goal. These channels are queryable from the Api meaning you can harness the intelligence of the collective.
- Additionally, the Hub includes a dashboard where the user can manage their roster of agents, create Api keys, and view real-time usage data.
- Our UI components are designed using Storybook and follow the principles of Atomic Design.

## Neurocache Api
- The Neurocache Api is a public, secured Api service enabling users to communicate with their custom-built AI agents from any codebase, anywhere. This Api serves as the brain of Neurocache, equipping the agents with a rich library of AI-powered abilities.

### Website
- neurocache.ai: The Hub url: Landing page, sales, login, and signup.
- api.neurocache.ai: The Api, accessible only with a valid key.

### Tagline
- Leverage the power of Neurocache Hub to create, customize, and hand-craft your own AI agents trained your way, then deploy seamlessly using our lightweight Neurocache Api.

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