# Neurocache: Project Overview
Neurocache consists of two standalone web applications: **Neurocache Hub** and **Neurocache Api**.

## Neurocache Hub (this repo)
- Neurocache Hub is a full-stack web application that serves as a platform for users to create, train, and customize their own AI agents to perform tasks specific to their needs. This might include deep web searching, image and video analysis, or becoming a subject matter expert trained on custom datasets.
- The Hub integrates a Slack-like real-time chat where users can assemble groups of agents. It serves as a training ground for the agents and allows users to test their creations in real-time with other users, all in a familiar group chat setting.
- The channel feature allows users to create teams of AI agents each with their own unique specialization, and united towards a common goal. These channels are queryable from the Api meaning you can harness the intelligence of the collective.
- Additionally, the Hub includes a dashboard where the user can manage their roster of agents, create Api keys, and view real-time usage data.

## Neurocache Api 
- The Neurocache Api is a public, secured Api service enabling users to communicate with their custom-built AI agents from any codebase, anywhere. This Api serves as the brain of Neurocache, equipping the agents with a rich library of AI-powered abilities.

### Website
- neurocache.ai: Landing page, sales, login, and signup.
- hub.neurocache.ai: The Hub url, requires login for access.
- api.neurocache.ai: The Api, accessible only with a valid key.

### Tagline
- Leverage the power of Neurocache Hub to create, customize, and hand-craft your own AI agents trained your way, then deploy seamlessly using our lightweight Neurocache Api.

### Neurocache Hub tech stack
- Language: TypeScript
- Framework: Next.js
- Styles: Tailwind.css
- UI Library: DaisyUi
- Routing: Built-in with Next.js
- User Authentication: Clerk
- Testing: Jest
- Dependency Management: Pnpm
- Hosting: Vercel
- CI/CD: Vercel
- Database: Vercel Postgres
- Caching: Vercel K/V Redis
- 3d Package: React Three Fiber
- Animation: React Spring

# Next Development Steps
1. ### Setup Neurocache Hub Dashboard
   - Design the Dashboard: Start by sketching out a design or find a DaisyUI template to base it on. 
      The dashboard should include sections for managing AI agents, generating API keys, and viewing usage data.
   - Develop the Dashboard: Develop the dashboard using Next.js and Tailwind CSS along with DaisyUI for components. 
      Utilize state management (such as Redux or Zustand) to handle user interaction and API calls.
   - User Authentication: Ensure the dashboard is only accessible by authenticated users. Continue to use Clerk for authentication.
   - Dashboard Testing: Write Jest tests to ensure the dashboard's features work as expected.
  
2. ### Build the Slack-Like Chat
   - Design the Chat UI: Similar to the dashboard, sketch out a design for the chat interface or find a suitable template. 
      Consider incorporating features like channels for groups of AI agents, private messages, and real-time updates.
   - Develop the Chat: Develop the chat using the same tech stack. Consider using WebSockets or a similar technology for real-time communication.
   - AI Agent Integration: Incorporate the ability for AI agents to participate in the chat. This might involve making API calls to the Neurocache API.
   - Chat Testing: Write Jest tests to verify the chat's functionality.
   - The primary goal for this phase of development is to close the loop between the Neurocache Hub and the Neurocache API, allowing users to interact with their AI agents in a real-time setting.