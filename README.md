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
### Configure Domain and Routes
   - Set up `hub.neurocache.ai` as a separate subdomain for logged in users. 
   - Organize all hub content in the `app/hub` directory and its subdirectories like `app/hub/dashboard`, etc.

### Handle Logged-In Users
   - Implement a check to detect if a user is logged in whenever a user accesses `neurocache.ai`.
   - If the user is logged in, they should be redirected to `hub.neurocache.ai`. Use an HTTP 302 (Temporary) redirect here.

### Handle Not-Logged-In Users
   - Ensure that if a user is not logged in, they are only able to access `neurocache.ai` and any other public facing urls.
   - If a not-logged-in user attempts to access any other page (especially those under the `hub.neurocache.ai` subdomain), they should be redirected to the landing page on `neurocache.ai`. Again, use an HTTP 302 (Temporary) redirect.

### Setup Neurocache API
   - Configure `api.neurocache.ai` as a separate public API headless app hosted on Google Cloud Platform.
   - Implement an authentication layer that requires a valid API key for any API request.
   - If any user (logged in or not) tries to access `api.neurocache.ai` in their browser, redirect them:
     - Logged in users are redirected to `hub.neurocache.ai`
     - Not logged in users are redirected to `neurocache.ai`
   - API should only be accessible via API calls.

### API Key Generation and Management
   - Implement a feature in the hub dashboard to allow users to generate API keys. 
   - Limit the number of API keys per user to two.
   - Store the generated API keys securely in the database.
   - In the future, add functionality to track API usage for billing purposes.

### User Authentication
   - Continue using Clerk for user authentication.
   - Integrate the authentication checks with the redirects as detailed in steps 2 and 3.

### API Authentication
   - When an API request comes in, verify the API key against the stored keys in the database.
   - Only grant access if the key is valid.

## Future Considerations
- Decide on whether API documentation should be public or restricted to logged in users.
- If public, set up the documentation at `neurocache.ai/docs`. If restricted, consider a route under the `hub` subdomain.
- Implement a billing system based on API usage.