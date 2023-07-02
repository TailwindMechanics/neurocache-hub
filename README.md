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

# Neurocache Hub setup steps:
### DaisyUI setup:
    1. Install DaisyUI using npm or pnpm.
    2. Enable DaisyUI in your Tailwind CSS config.
    3. Customize the DaisyUI theme as needed.

### Public Home Page
    1. Set up a landing page which includes information about the application, user testimonials, and pricing info if applicable.
    2. Include a login/signup form using Clerk's `SignIn` component.

### Authenticated Pages
    1. Set up pages that are only visible to logged-in users.
    2. Use Clerk's `useUser` hook to check if a user is logged in. This can be used to protect the authenticated routes. For example:

```javascript
import { useRouter } from "next/router";
import { useUser } from "@clerk/clerk-react";

export default function AuthenticatedPage() {
  const { user } = useUser();
  const router = useRouter();

  // If no user, redirect to home page
  if (!user) {
    router.push('/');
  }

  // Rest of your authenticated page component
}
```
   3. Set up a navigation bar that includes links to the authenticated pages, which should only appear once a user is logged in.
   4. Include a logout button using Clerk's SignOutButton component.

### Remember:
   - Ensure that any links to authenticated pages are only visible to logged-in users.
   - Refer to the Clerk documentation for more detailed instructions and examples.