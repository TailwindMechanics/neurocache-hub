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

# Development Steps
## Login
1. Install Clerk SDK:
  - Open your terminal and navigate to your project's root directory (neurocache-hub)
  - Run the following command to add Clerk to your project:
    `pnpm add @clerk/clerk-react`

2. Configure Clerk in your project:
  - In the `.env.local` file, add your Clerk Frontend API variable, which can be found on your Clerk dashboard:
      `NEXT_PUBLIC_CLERK_FRONTEND_API=<your-clerk-frontend-api>`

3. Create a new SignIn page:
    - In the `src/app/components` directory, create a new file `SignIn.tsx`
    - In this file, import the `SignIn` component from Clerk and use it as shown in the example below:
```typescript
      import { SignIn } from "@clerk/clerk-react";

      const SignInPage = () => {
        return (
          <div className="min-h-screen bg-white flex">
            <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
              <div className="mx-auto w-full max-w-sm lg:w-96">
                <SignIn path="/user" routing="path" />
              </div>
            </div>
          </div>
        );
      };

      export default SignInPage;
```
  - In the example above, the `SignIn` component is rendered within a div element. You can customize the appearance by modifying the CSS classes.

4. Update your routing configuration:
    - In your routing configuration file (depending on your setup, this might be `next.config.js`), add a route for the `SignIn` page.

5. Run your application:
    - Use the following command to run your application:
      ```bash
      pnpm run dev
      ```
    - You should now be able to navigate to your `SignIn` page and use the form to log in, register, or log out.

Remember to check the [Clerk documentation](https://docs.clerk.dev/) for more detailed information and customization options.

