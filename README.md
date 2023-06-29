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
- State Management: Redux
- Styles: Tailwind.css
- Routing: Built-in with Next.js
- User Authentication: Clerk
- Testing: Jest
- Dependency Management: Pnpm
- Hosting: Vercel
- CI/CD: Vercel
- Database: Vercel Postgres
- Caching: Vercel K/V Redis

# Neurocache Hub setup steps:
1. **Install Dependencies**
   - Install Jest for testing: `pnpm add --save-dev jest`.
   - Install Clerk for user authentication: `pnpm add @clerk/clerk-nextjs @clerk/clerk-react`.

2. **Configure Clerk**
   - Set up your Clerk application using the Clerk dashboard.
   - Configure your `.env.local` file with the required environment variables, including your Clerk Frontend API (`CLERK_FRONTEND_API`), and Next.js secret (`NEXT_PUBLIC_CLERK_FRONTEND_API`).

3. **Database Setup**
   - Set up a Postgres database with Vercel following the [official guide](https://vercel.com/integrations/postgres).
   - In your `.env.local` file, provide your database url in the `DATABASE_URL` variable.

4. **Running the App Locally**
   - Run the development server: `pnpm dev`. The application will be available at `http://localhost:3000`.

## Deploy to Production
1. **Vercel Setup**
   - Sign up or log in to Vercel.
   - Link your GitHub repository with your Vercel project.
   - Add the necessary environment variables in the Vercel dashboard.

2. **Deploy**
   - Every time you push to your specified production branch (commonly `main` or `master`), Vercel will create a new deployment.
   - You can then view your application live from the provided url.