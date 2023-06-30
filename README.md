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

# Neurocache Hub setup steps:
## Vercel Database Setup
1. **Set up a Postgres Database**
   - Set up a Postgres database with Vercel following the [official guide](https://vercel.com/integrations/postgres).

2. **Configure your `.env.local` File**
   - In your `.env.local` file, provide your database URL in the `DATABASE_URL` variable. This should look something like this:
```shell
     DATABASE_URL=your_postgres_database_url
```
   - Replace `your_postgres_database_url` with the Postgres database URL you got from the Vercel database setup.

## Vercel Redis K/V Setup
1. **Set up a Redis K/V Store**
   - Set up a Redis K/V store with Vercel following the [official guide](https://vercel.com/docs/solutions/databases#redis).

2. **Configure your `.env.local` File**
   - In your `.env.local` file, add your Redis URL in the `REDIS_URL` variable. This should look something like this:
     ```
     REDIS_URL=your_redis_url
     ```
   - Replace `your_redis_url` with the Redis URL you got from the Vercel Redis setup.

## Running the App Locally
1. **Run the Development Server**
   - In your terminal, navigate to the project directory and run the development server using `pnpm dev`. The application will be available at `http://localhost:3000`.

## Deploy
1. **Push to Production Branch**
   - Every time you push to your specified production branch (commonly `main` or `master`), Vercel will create a new deployment.

2. **View Live Application**
   - You can then view your application live from the provided URL in the Vercel dashboard.

3. **Add Environment Variables**
   - In the Vercel dashboard, find your project and select `Settings > Environment Variables`.
   - Add the necessary environment variables such as `CLERK_FRONTEND_API`, `NEXT_PUBLIC_CLERK_FRONTEND_API`, `DATABASE_URL`, and `REDIS_URL`.





Public Home Page
This is the landing page that all users see when they first visit your site. It typically includes information about the application, user testimonials, pricing info (if applicable), and a login/signup form. Since you're using Clerk for authentication, you can use their SignIn component to handle the login functionality.

Authenticated Pages
These pages are only visible to users who have logged in. Clerk provides a useUser hook that allows you to check if a user is logged in, which can be used to protect these routes.

Here's an example of how you can use it:

javascript
Copy code
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
For navigation between these pages, you'll probably want to set up a navigation bar that includes links to the authenticated pages (which only appear once a user is logged in), as well as a logout button (you can use Clerk's SignOutButton component for this).

Don't forget to make sure that any links to authenticated pages are only visible to logged-in users!

Also, make sure you check out the Clerk documentation for more detailed instructions and examples.