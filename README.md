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
- Framework: Next.js
- Language: TypeScript
- User Authentication: Clerk
- Routing: Built-in with Next.js
- Fetching: Axios
- State: React Query, MobX
- Database: Supabase Postgres
- ORM: Supabase
- Caching: Upstash Redis
- Redis IO: Upstash
- Realtime: Socket.io (maybe Supabase)
- Testing: Jest
- Dependency Management: Pnpm
- CI/CD: Vercel
- Hosting: Vercel
- Styles: Tailwind.css
- UI Library: Flowbite
- 3d Package: React Three Fiber
- Animation: Framer motion



# Next Steps
1. ## Set up Redis
   - Install Redis on your machine or use a Redis cloud service. You'll use Redis to cache the channel history. Make sure to install the redis npm package in your project.

2. ## Set up MobX
   - Install MobX in your project using pnpm add mobx mobx-react. Create a MobX store that will hold the state of your application. This might include the current user, the current channel, and the list of messages in the current channel.

3. ## Set up React Query and Axios
   - Install React Query in your project using pnpm add react-query. You'll use React Query to fetch data from your backend and keep it in sync with your server state. Set up a query client and provide it at the top level of your application using the QueryClientProvider component.
   - Axios is a promise-based HTTP client that works both in the browser and in a node.js environment. It provides a single API for dealing with XMLHttpRequests and node's http interface. Install it using pnpm add axios.

4. ## Test the data flow
   - Now that everything is set up, you can test the data flow in your application. Here's a basic example of how you might do this:
   - Use Axios to make a request to your backend to fetch the list of channels. Use React Query's useQuery hook to cache this data.
   - Display the list of channels in your UI. When a channel is clicked, update the currentChannel in your MobX store.
   - Use Axios and React Query to fetch the history of the current channel from your backend. The first time you fetch the history, it will come from Postgres. Store the history in the Redis cache.
   - The next time you fetch the history for the same channel, it should come from the Redis cache instead of Postgres. You can verify this by checking the speed of the request or by temporarily disconnecting your Postgres database.
   - Display the channel history in your UI. When a new message is sent, add it to the messages array in your MobX store and send it to your backend to be stored in Postgres.





## Cache Implementation
   - Based on the latest information from various sources, here are the detailed steps for managing data flow within chat channels, with an emphasis on cache implementation, long-term storage management, and real-time updates.
### Using Redis for Caching Channel History
 #### Set up Redis: 
   - If not already done, set up a Redis instance. This will be used to cache the chat history for each channel.

 #### Cache messages on send: 
   - Whenever a message is sent in a channel, in addition to storing it in the Postgres database, also store it in the Redis cache. Use the channel ID as the key, and store the messages as a list or array associated with that key.
```typescript
const storeMessage = async (channelId: string, message: Message) => {
  // Store in Postgres
  await db.message.create({ data: message });

  // Store in Redis
  const redisKey = `channel:${channelId}:messages`;
  await redis.lpush(redisKey, JSON.stringify(message));
};
```
#### Retrieve messages from cache: 
   - When a user opens a channel, first try to retrieve the messages from the Redis cache. If the messages are not in the cache (for example, if the Redis instance was restarted), then fall back to retrieving the messages from the Postgres database.
```typescript
const getMessages = async (channelId: string) => {
  const redisKey = `channel:${channelId}:messages`;
  const messages = await redis.lrange(redisKey, 0, -1);
  
  if (messages.length > 0) {
    return messages.map(message => JSON.parse(message));
  } else {
    // Fallback to Postgres
    return await db.message.findMany({ where: { channelId } });
  }
};
```
#### Evict old messages from cache: 
   - To prevent the Redis cache from growing indefinitely, regularly evict old messages from the cache. This could be done, for example, using a scheduled job that runs every hour and removes messages that are older than a certain threshold (e.g., 1 month).
```typescript
const evictOldMessages = async () => {
  const oneMonthAgo = new Date(Date.now() - 1000 * 60 * 60 * 24 * 30);
  
  const channels = await db.channel.findMany();
  for (const channel of channels) {
    const redisKey = `channel:${channel.id}:messages`;
    let messages = await redis.lrange(redisKey, 0, -1);
    messages = messages.map(message => JSON.parse(message));
    
    const newMessages = messages.filter(message => new Date(message.timestamp) > oneMonthAgo);
    await redis.del(redisKey);
    for (const message of newMessages) {
      await redis.lpush(redisKey, JSON.stringify(message));
    }
  }
};

// Schedule the job to run every hour
setInterval(evictOldMessages, 1000 * 60 * 60);
```
## Long-term Storage Management
### Using Postgres for Storing Chat History
 #### Store messages: 
   - As mentioned above, whenever a message is sent in a channel, store it in the Postgres database.
#### Retrieve messages: 
   - When a user opens a channel and the messages are not in the Redis cache, retrieve the messages from the Postgres database.
#### Delete old messages: 
   - Regularly delete old messages from the database that are older than your retention period (e.g., 1 month). This could be done in the same scheduled job that evicts old messages from the Redis cache.
```typescript
const deleteOldMessages = async () => {
  const oneMonthAgo = new Date(Date.now() - 1000 * 60 * 60 * 24 * 30);
  
  await db.message.deleteMany({ where: { timestamp: { lt: oneMonthAgo } } });
};

// Schedule the job to run every hour
setInterval(deleteOldMessages, 1000 * 60 * 60);
```
## Real-time Updates
### Using Socket.io for Real-time Updates
#### Set up Socket.io: 
   - If not already done, set up a Socket.io server. This will be used to push real-time updates to the clients.

#### Emit events on message send: 
   - Whenever a message is sent in a channel, emit a Socket.io event to all clients that are subscribed to that channel.
```typescript
const storeMessage = async (channelId: string, message: Message) => {
  // Store in Postgres and Redis as before
  
  // Emit Socket.io event
  io.to(channelId).emit('message', message);
};
```
#### Subscribe clients to channels: 
   - When a client opens a channel, subscribe them to the corresponding Socket.io room. When a message event is received, update the client's state with the new message.
```typescript
// On the client
const socket = io();

const openChannel = (channelId: string) => {
  socket.join(channelId);
  
  socket.on('message', (message: Message) => {
    // Update state with new message
  });
};
```
#### Unsubscribe clients from channels: 
    - When a client closes a channel, unsubscribe them from the corresponding Socket.io room.
```typescript
const closeChannel = (channelId: string) => {
  socket.leave(channelId);
};
```

#### Conclusion: 
- These steps should give you a good starting point for managing data flow in your chat system. Remember to adjust them as necessary to fit your specific requirements and constraints.

### Sources:
   - Mastering data fetching with React Query and Next.js - Prateek Surana
   - How to develop a RealTime Chat App using RedisJSON and Next ...
   - Effortlessly Manage Data in Next.js with React Query - Upmostly
   - Realtime data streaming using server-sent events(SSE) with react.js ...
   - WhatsApp Clone with React, Express, SocketIO, PostgreSQL, and ...

-------------
#### Prompt:
   - In a Slack-like chat system, we accommodate both human and AI participants across multiple channels. The UI communicates with the OpenAI GPT model via a backend service that processes user messages and AI responses.
   - Our Next.js 13 TypeScript-based project utilizes tools such as pnpm, React Query, Axios, MobX, Socket.io, Redis, and Postgres db, and has already established Authentication, Database, CI/CD, Testing, and UI setup. The immediate objective is managing data flow in chat channels, focusing on cache implementation, long-term storage management, and real-time updates. Considerations around concurrency handling, scalability, fault tolerance, security, testing, dev environment, performance, and devices are currently non-pertinent.
   - The system employs MobX and React Query for state management, Socket.io for real-time updates, and Redis for caching channel history. React Query caches recent messages in active channels to enable swift channel-switching. The Postgres database retains a month-long text-only chat history per channel.
   - The 'channel' entity in the database schema includes 'id', 'name', and 'description'; the 'user' entity incorporates 'id', 'name', 'email', and 'password'; the 'message' entity, related to both 'user' and 'channel' via foreign keys, encapsulates 'id', 'content', 'timestamp', 'userId', and 'channelId'.
   - Please provide detailed low-level steps in markdown format for achieving the objective of managing data flow within chat channels, with an emphasis on cache implementation, long-term storage management, and real-time updates.