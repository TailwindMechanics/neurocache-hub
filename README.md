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

# Next Steps
   1. Study about Next.js server components: Understand how they work, how they differ from regular components, and what advantages they offer.
   2. Study about Next.js routing: Understand how to structure your application's pages and API routes, how to navigate between pages, and how to pass data between pages using query parameters, URL parameters, and the router's state.
   3. Plan your application's state management: Determine what data you need to store on the client side, how you'll fetch it from the server, and how you'll update it. Consider using React Query and MobX as outlined in the example.
   4. Plan your application's server-side logic: Determine how you'll fetch data from your database, how you'll cache it with Redis, and how you'll send it to the client.
   5. Implement error handling and loading states: Make sure your application can handle potential errors and can indicate to the user when data is being loaded.
   6. Experiment with server component middleware: Try using middleware to customize the behavior of your server components and learn about its potential uses.
   7. Iterate on your implementation: As you build out your application, you'll likely encounter unforeseen challenges or discover new requirements. Be prepared to iterate on your initial plan and adapt it as needed.
   8. Finally, remember that while building out the Neurocache Hub, make sure to test regularly. Writing tests for your application will help ensure that your code is working as expected and can prevent potential bugs from making it into production.

## Test case
- Let's consider a simplified example of a chat message retrieval scenario in the context of your project, the Neurocache Hub. 
- In this scenario, we have a `list of chat messages` that are fetched from the server and displayed in the UI. We'll use:
   - `React Query` to fetch the messages from the server.
   - `MobX` to store the messages on the client side.
   - `Redis` as a cache on the server side to improve the performance of message retrieval.
- Remove redux and then install dependencies:
```shell
      pnpm add mobx mobx-react-lite react-query
      pnpm add @types/redis redis
```
- Here's a basic outline of how it might work:

1. ### React Component
- First, we have a React component that displays the messages. This component uses a custom hook, `useMessages`, to get the messages from the `MobX store`.
```tsx
// pages/api/messages.server.tsx
import { NextFetchEvent, htm as html } from 'next/server'

type Message = {
  id: string;
  content: string;
  // any other fields your messages have
}

async function fetchMessagesFromDB(): Promise<Message[]> {
  // Replace with your actual database fetching logic
  // The return value should be a Promise that resolves to an array of messages
}

// This component will be rendered on the server
export async function getServerComponent(props: { [key: string]: any }) {
  const messages = await fetchMessagesFromDB()
  return html`<div>${messages.map(message => html`<p>${message.content}</p>`)}</div>`
}

// Export handler for Server Component Middleware
export default function Middleware(req: NextApiRequest, ev: NextFetchEvent) {
  return ev.respondWith(getServerComponent(req.query))
}
```
3. ### MobX Store
- `The MobX store` is where the messages are stored on the client side. It provides an `observable messages array` and an action to update it.
```tsx
import { makeAutoObservable } from 'mobx';

type Message = {
  id: string;
  content: string;
  // any other fields your messages have
};

class MessageStore {
  messages: Message[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setMessages(messages: Message[]) {
    this.messages = messages;
  }
}
```
4. ### Server-Side Code
- On the server side, you would use `Redis` to cache the messages. This would typically be done in your API route that handles GET requests to `/api/messages`.
- TypeScript support with redis can be a bit tricky as the redis package does not provide its own types. Instead, we use the @types/redis package to supply those types.
- We also need to explicitly type the req and res parameters. In Next.js, you typically use the NextApiRequest and NextApiResponse types for these.
```ts
import redis from 'redis';
import { NextApiRequest, NextApiResponse } from 'next';

const client = redis.createClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    client.get('messages', async (err, result) => {
      if (err) {
        // Handle error here
        return res.status(500).json({ error: 'Redis error' });
      }

      if (result) {
        // If the messages are in the Redis cache, return them.
        return res.status(200).json(JSON.parse(result));
      } else {
        // Otherwise, fetch the messages from the database, store them in Redis,
        // and then return them.
        const messages = await getMessagesFromDatabase();
        client.set('messages', JSON.stringify(messages));
        return res.status(200).json(messages);
      }
    });
  } else {
    // Handle other request methods...
  }
}
```
- In this example, `getMessagesFromDatabase` is a placeholder for whatever function you would use to fetch the messages from your database. Also, in a real application, you would likely want to set an expiration time for the cache, handle errors, etc.
- This example shows how `React Query`, `MobX`, and `Redis` can all work together in a `Next.js` application. `React Query` fetches the data, `MobX` stores and tracks it on the client side, and `Redis` caches it on the server side to improve performance.

## Next steps and considerations
1. ### Error Handling: 
   - Anywhere you have network requests or other operations that could potentially fail (like fetching from your database or getting data from Redis), you should have some kind of error handling logic. This could be as simple as a try-catch block that catches any errors and handles them in some way, such as by logging the error or showing a message to the user.

2. ### Loading States: 
   - When you're fetching data from the server, there will typically be a delay before the data is returned. During this time, it's common to display some kind of loading indicator to the user. React Query has built-in support for loading states which you can use to determine when your fetch requests are still in progress and display a loading indicator accordingly.

3. ### Database Querying Logic: 
   - The function fetchMessagesFromDB in the provided example is a placeholder that you'll need to replace with your actual logic for fetching messages from your database. Depending on your database and the library you're using to interact with it, this could involve writing SQL queries, using an ORM (Object-Relational Mapping), or calling functions provided by a database SDK.

4. ### Server Component Middleware: 
   - This is a feature that was introduced with the server components in Next.js. Middleware allows you to modify the request or response objects before they are handled by your server component.
   - By default, Next.js will try to respond with a server component if the file extension of the requested resource is .server.js or .server.ts. However, sometimes you might need to customize this behavior, which is where middleware comes in.
   - An example of where you might use middleware is if you wanted to add some custom headers to all responses from your server components. You could do this with a middleware function that adds the headers to the response object.
   - Here's an example of what a middleware function might look like:
   ```ts
      Copy code
      import { NextFetchEvent, NextRequest } from 'next/server'

      export function middleware(req: NextRequest, ev: NextFetchEvent) {
      // This is an example, in this case we are modifying the request headers
      req.headers.set('X-Custom-Header', 'Custom Value');
      return ev.continue();
      }
   ```