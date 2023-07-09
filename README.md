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
- Let's consider a simplified example of a chat message retrieval scenario in the context of your project, the Neurocache Hub. 
- In this scenario, we have a `list of chat messages` that are fetched from the server and displayed in the UI. We'll use:
   - `React Query` to fetch the messages from the server.
   - `MobX` to store the messages on the client side.
   - `Redis` as a cache on the server side to improve the performance of message retrieval.
- Here's a basic outline of how it might work:

1. ### React Component
- First, we have a React component that displays the messages. This component uses a custom hook, `useMessages`, to get the messages from the `MobX store`.
```jsx
import { useMessages } from '../hooks/useMessages';

function MessageList() {
  const { messages, isLoading } = useMessages();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {messages.map((message) => (
        <li key={message.id}>{message.content}</li>
      ))}
    </ul>
  );
}
```
2. ### Custom Hook
- The `useMessages` hook uses `React Query` to fetch the messages from the `API`, and then stores them in the `MobX store`.
```jsx
import { useQuery } from 'react-query';
import { useStore } from '../stores/store';

export function useMessages() {
  const { messageStore } = useStore();

  const { data: messages, isLoading } = useQuery('messages', fetchMessages, {
    onSuccess: (messages) => {
      messageStore.setMessages(messages);
    },
  });

  return {
    messages: messageStore.messages,
    isLoading,
  };
}

async function fetchMessages() {
  const response = await fetch('/api/messages');
  const data = await response.json();
  return data;
}
```
3. ### MobX Store
- `The MobX store` is where the messages are stored on the client side. It provides an `observable messages array` and an action to update it.
```jsx
import { makeAutoObservable } from 'mobx';

class MessageStore {
  messages = [];

  constructor() {
    makeAutoObservable(this);
  }

  setMessages(messages) {
    this.messages = messages;
  }
}
```
4. ### Server-Side Code
- On the server side, you would use `Redis` to cache the messages. This would typically be done in your API route that handles GET requests to `/api/messages`.
```js
import redis from 'redis';

const client = redis.createClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    client.get('messages', async (err, result) => {
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