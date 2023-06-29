
# Neurocache: Project Overview
Neurocache consists of two standalone web applications: **Neurocache Hub** and **Neurocache Api**.

## Neurocache Hub
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
- User Authentication: Auth0/Clerk/NextAuth.js
- Testing: Jest
- Dependency Management: Pnpm
- Hosting: Vercel
- CI/CD: Vercel
- Database: Vercel Postgres
- Caching: Vercel K/V Redis

### Neurocache Api tech stack
- Language: Python
- Framework: FastAPI
- Hosting: Google Cloud Platform
- API Key Authentication: FastAPI-Security
- Testing: Pytest
- Dependency Management: Poetry
- CI/CD: GitHub Actions
- Rate Limiting: SlowApi
- Reverse Proxy: Nginx
- AI Technologies: 
    - OpenAI 
    - Google AutoML 
    - Langchain 
    - PyTorch
    - Hugging Face
    - Tensorflow

## Neurocache Api ecosystem
- Neurocache's Python-based Api offers immense potential for future expansion and enhancement of AI capabilities. Thanks to Python's rich ecosystem of AI and machine learning libraries, including PyTorch and Hugging Face Transformers, we have a versatile platform for developing and training complex AI models.
- The Neurocache Api will continue to evolve, leveraging Python's capabilities to integrate additional AI services and technologies. We aim to explore new frontiers in the AI landscape while continually refining and optimizing our platform.
- User feedback and insights gained during the development process will play a vital role in shaping the future of Neurocache. It will guide us toward improvements that maximize the utility and performance of our AI agents, allowing us to emerge as a formidable thought-leader on the bleeding-edge of artificial intelligence.

# Neurocache Hub setup steps:
1. **Environment Setup**
   - Make sure you have Node.js (v14 or above), `pnpm` and `pnpx` installed on your computer. If not, you can install Node.js from the [official site](https://nodejs.org) and then install `pnpm` and `pnpx` using the command: `npm install -g pnpm pnpx`.

2. **Create Next.js Application**
   - Run the following command in your terminal to create a new Next.js application with TypeScript: `pnpx create-next-app@latest my-app --typescript`. Replace "my-app" with your desired application name.
   - Navigate into your new project directory with `cd my-app`.

3. **Install Dependencies**
   - Install Redux for state management: `pnpm add @reduxjs/toolkit react-redux`.
   - Install Tailwind CSS for styling: `pnpm add tailwindcss@latest postcss@latest autoprefixer@latest` and then run `npx tailwindcss init -p` to generate a `tailwind.config.js` and `postcss.config.js` in your project root.
   - Install NextAuth.js for user authentication: `pnpm add next-auth`.
   - Install Jest for testing: `pnpm add --save-dev jest`.

4. **Configure NextAuth.js**
   - Set up your [authentication provider](https://next-auth.js.org/configuration/providers) in the `[...nextauth].js` file in the `pages/api/auth` directory.
   - Configure your `.env` file with the required environment variables, including your secret and the details of your authentication provider(s).

5. **Database Setup**
   - Set up a Postgres database with Vercel following the [official guide](https://vercel.com/integrations/postgres).
   - In your `.env` file, provide your database url in the `DATABASE_URL` variable.

6. **Running the App Locally**
   - Run the development server: `pnpm dev`. The application will be available at `http://localhost:3000`.

## Deploy to Production
1. **Vercel Setup**
   - Sign up or log in to Vercel.
   - Link your GitHub repository with your Vercel project.
   - Add the necessary environment variables in the Vercel dashboard.

2. **Deploy**
   - Every time you push to your specified production branch (commonly `main` or `master`), Vercel will create a new deployment.
   - You can then view your application live from the provided url.
