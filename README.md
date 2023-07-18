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
- User Authentication: Supabase
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
- Node editor: React flow
- Charts: Echarts
- 3d Package: React Three Fiber
- Animation: Framer motion

# Next Steps

##### Watch this again: https://youtu.be/df8afeb1FY8

- Investigate Pika labs for moving image generation
- Investigate epidemic sounds soundmatch tool for matching music with video
- " Bard image analysis

1. ## Basic Chat Functionality:

      - Start by setting up the basic chat functionality without any caching or real-time updates. At this stage, every time a user sends a message or switches channels, you would fetch the entire chat history for that channel from the database.

      ### 1.1 Set up MobX

      - Install MobX in your project using pnpm add mobx mobx-react. Create a MobX store that will hold the state of your application. This might include the current user, the current channel, and the list of messages in the current channel.

      ### 1.2 Load Chat History:

      - When a user navigates to the chat page, your application should fetch the most recent X messages from the chat history for channel_test_01 from the database. This could be done, for example, by making a GET request to an API endpoint like /api/channels/channel_test_01/messages, which would return an array of message objects.

      ### 1.3 Display Chat History:

      - Once the chat history has been fetched, your application should loop through the array of message objects and display each message in the chat UI. Each message object might include properties like id, content, timestamp, and userId.

      ### 1.4 Send New Messages:

      - When a user types a message into the chat input and hits send, your application should make a POST request to an API endpoint like /api/channels/channel_test_01/messages, sending the new message as the request body. The server would then store the new message in the database and return the saved message object, including any properties that were automatically set by the database like id and timestamp.

      ### 1.5 Display New Messages:

      - Once the new message has been saved and returned by the server, your application should add the new message to the chat UI. This could be done by appending the new message object to the array of messages and re-rendering the chat UI.

      ### 1.6 Error Handling:

      - Throughout this process, your application should handle any errors that might occur, such as network errors or database errors. This could involve displaying an error message to the user, retrying the request, or some other appropriate response.
      - This basic chat functionality should provide a solid foundation for your chat application. Once this is working, you can start adding more advanced features like AI participants, real-time updates, and caching.

2. ## OpenAI Integration:
      - Once the basic chat functionality is working, you can integrate the OpenAI API to enable AI participants in the chat. At this stage, every time a user sends a message, you would also send it to the OpenAI API and then store the AI's response in the database and display it in the chat.
3. ## Real-Time Updates:
      - Next, you can add real-time updates using Socket.io. This would allow you to push new messages to all connected clients as soon as they are sent, without requiring the clients to refresh or fetch the entire chat history.
4. ## Caching with Redis:
      - Once real-time updates are working, you can add caching using Redis. This would allow you to store the chat history for each channel in memory for quick access, reducing the load on your database.
5. ## State Management with MobX and React Query:
      - Finally, you can add state management on the client side using MobX and React Query. This would allow you to cache recent messages in active channels on the client side, reducing the number of requests to your server.

### context

So up next after that will be creating the Channels Store, and the Messages Store, for managing state of the chatroom channels and messages therein. Once they're in place I suppose it's time to start sending messages to the db and retrieving them again on load

ChatGPT
That sounds like a good plan! The Channels Store and Messages Store will be crucial for managing the state of your chatroom application. Here's a rough idea of how you might structure these stores:

Channels Store: This store could keep track of all the chat channels that a user is part of. It might have methods to add a new channel, remove a channel, or switch the currently active channel.

Messages Store: This store could manage all the messages within a particular channel. It might have methods to add a new message, delete a message, or update a message. It could also handle fetching messages from the database when a user opens a channel.

Once these stores are set up, you can start integrating your database. Here's a rough sequence of steps you might follow:

Sending Messages: When a user sends a message, you could call a method on the Messages Store to add the message to the local state, and then send a request to your API to store the message in the database.

Loading Messages: When a user opens a channel, you could send a request to your API to fetch all the messages for that channel, and then call a method on the Messages Store to load these messages into the local state.

Real-time Updates: To keep the chatroom updated in real time, you could use websockets or a similar technology. Whenever a new message is added to a channel in the database, you could push an update to all clients who are part of that channel, prompting them to fetch the new message and update their local state.

Remember, these are just suggestions. The exact structure of your stores and the sequence of operations will depend on the specific needs of your application. Good luck with your project!

### context

## UserStore:

      - This store could manage the state related to the current user. This might include the user's ID, name, email, and any other relevant information. This store could also handle actions related to user authentication, such as logging in and logging out.

## AgentStore:

- This store could manage the state related to the AI agents. This might include a list of all agents, the current agent, and any other relevant information. This store could also handle actions related to agents, such as creating a new agent, training an agent, or deleting an agent.

## ChannelStore:

- This store could manage the state related to the chat channels. This might include a list of all channels, the current channel, and the chat history for each channel. This store could also handle actions related to channels, such as creating a new channel, switching channels, or deleting a channel.

## MessageStore:

- This store could manage the state related to the chat messages. This might include a list of all messages in the current channel, the current message, and any other relevant information. This store could also handle actions related to messages, such as sending a new message or deleting a message.

## DashboardStore:

- This store could manage the state related to the dashboard. This might include usage data, API keys, and any other relevant information. This store could also handle actions related to the dashboard, such as creating a new API key or updating the usage data.

- Each of these stores would be responsible for a specific part of your application's state, and they could reference each other if necessary. For example, the MessageStore might need to reference the UserStore to get the current user when sending a message, and the ChannelStore might need to reference the AgentStore to get the list of agents in a channel.

- Remember, the goal of structuring your state in this way is to make your code more modular and easier to manage. Each store should have a clear responsibility, and the state in each store should be closely related. If you find that a store is becoming too large or complex, it might be a sign that you need to split it into smaller stores.

---

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
		return messages.map((message) => JSON.parse(message));
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
		messages = messages.map((message) => JSON.parse(message));

		const newMessages = messages.filter(
			(message) =>
				new Date(message.timestamp) >
				oneMonthAgo,
		);
		await redis.del(redisKey);
		for (const message of newMessages) {
			await redis.lpush(
				redisKey,
				JSON.stringify(message),
			);
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

	await db.message.deleteMany({
		where: { timestamp: { lt: oneMonthAgo } },
	});
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
	io.to(channelId).emit("message", message);
};
```

#### Subscribe clients to channels:

- When a client opens a channel, subscribe them to the corresponding Socket.io room. When a message event is received, update the client's state with the new message.

```typescript
// On the client
const socket = io();

const openChannel = (channelId: string) => {
	socket.join(channelId);

	socket.on("message", (message: Message) => {
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

---

#### Prompt:

- In a Slack-like chat system, we accommodate both human and AI participants across multiple channels. The UI communicates with the OpenAI GPT model via a backend service that processes user messages and AI responses.
- Our Next.js 13 TypeScript-based project utilizes tools such as pnpm, React Query, Axios, MobX, Socket.io, Redis, and Postgres db, and has already established Authentication, Database, CI/CD, Testing, and UI setup. The immediate objective is managing data flow in chat channels, focusing on cache implementation, long-term storage management, and real-time updates. Considerations around concurrency handling, scalability, fault tolerance, security, testing, dev environment, performance, and devices are currently non-pertinent.
- The system employs MobX and React Query for state management, Socket.io for real-time updates, and Redis for caching channel history. React Query caches recent messages in active channels to enable swift channel-switching. The Postgres database retains a month-long text-only chat history per channel.
- The 'channel' entity in the database schema includes 'id', 'name', and 'description'; the 'user' entity incorporates 'id', 'name', 'email', and 'password'; the 'message' entity, related to both 'user' and 'channel' via foreign keys, encapsulates 'id', 'content', 'timestamp', 'userId', and 'channelId'.
- Please provide detailed low-level steps in markdown format for achieving the objective of managing data flow within chat channels, with an emphasis on cache implementation, long-term storage management, and real-time updates.

# -------------Story:

Sure, let's imagine a bustling ancient city, a hub of commerce and knowledge, where information is the most valuable commodity. This city is your application.

In the heart of the city, there's a grand library, the Library of Supabase, where all the long-term knowledge (data) is stored. The librarians (Supabase APIs) are the keepers of this knowledge, and they are the only ones who can retrieve or modify the scrolls (data) stored within.

However, the city is vast, and not everyone can or should travel to the library every time they need information. That's where the Guild of React Query comes in. The guild members are couriers, skilled in the art of fetching scrolls from the library and bringing them to the citizens who need them. They also have a magical ability to create temporary copies (caches) of the scrolls they fetch. These copies disappear after a while, but while they exist, they can be used to answer queries quickly without needing to go back to the library.

The Guild of React Query is very efficient, but they only deal with information from the library. For other types of information, the citizens of the city rely on the Order of MobX. The Order is a group of scribes and messengers who keep track of all the local news and events (client-side state) happening in the city. They're constantly writing and updating their own set of scrolls (state objects), which can be about anything from the latest market prices to the schedule of the city's grand arena.

The Order of MobX and the Guild of React Query often work together. For example, a citizen might hire a guild member to fetch a scroll from the library, and then hire a member of the Order to spread the news about the information in the scroll.

In this city, communication is key. That's where the Whisperers of Socket.IO come in. They're a network of messengers who can deliver real-time updates across the city. When something important happens, the Whisperers can spread the news instantly, keeping everyone informed.

Finally, there's Axios, the city's master of logistics. Axios is responsible for organizing and managing all the requests going in and out of the city. Whether it's a guild member fetching a scroll from the library or a whisperer sending a message, Axios makes sure the request gets to where it needs to go.

In this city, every group has its role, and they all work together to keep the city running smoothly. Understanding how they interact and complement each other is the key to managing the city effectively.

User
That was fantastic thenk you, could you bullet point the key points for me to memorize in the context of the story please? I didn't realise Axios would be involved in the socket comms, which is great
ChatGPT
I'm glad you enjoyed the story! Here are the key points to remember:

Supabase is like the grand library, storing all the long-term data. The Supabase APIs are the librarians who can retrieve or modify this data.

React Query is like the guild of couriers, fetching data from the library (Supabase) and creating temporary copies (caches) of it for quick access.

MobX is like the order of scribes and messengers, keeping track of all the local news and events (client-side state) happening in the city.

Socket.IO is like the network of whisperers, delivering real-time updates across the city.

Axios is like the city's master of logistics, managing all the requests going in and out of the city, including those made by React Query, MobX, and Socket.IO.

Remember, each of these technologies has its own role and they all work together to keep your application running smoothly. Understanding how they interact and complement each other is the key to managing your application effectively.

As for Axios and Socket.IO, while Axios is typically used for HTTP requests and Socket.IO for real-time WebSocket communication, they can indeed be used together in certain scenarios. For example, you might use Axios to make an initial HTTP request to establish a WebSocket connection via Socket.IO. However, once the WebSocket connection is established, the real-time communication would be handled by Socket.IO, not Axios.

### ---

In the bustling city of Neurocache, the Neurocache Api is like the grand council of wizards, each specializing in a different form of magic (AI technologies). These wizards are masters of various arts, from the ancient knowledge of PyTorch and Hugging Face to the cutting-edge techniques of OpenAI and Google AutoML. They are the ones who empower the city's AI agents with their abilities.

The council resides in a grand tower (Google Cloud Platform), which is protected by a vigilant guard (FastAPI-Security) who ensures that only those with the correct keys (API keys) can enter. The tower is a marvel of architecture, built with the sturdy stones of Python and FastAPI, and maintained by the diligent work of the city's engineers using tools like Pytest and Poetry.

The council's work is guided by the city's scribes (GitHub Actions), who keep track of all changes and ensure that everything runs smoothly. They also enforce the city's laws (Rate Limiting), ensuring that no one overuses the council's magic.

The council communicates with the outside world through a series of magical portals (Nginx), which allow the city's AI agents to reach any corner of the world. These portals are powered by a variety of AI technologies, including Clipdrop, Stability.ai, Langchain, Tensorflow, elevenlabs.io, and leonardo.ai.

The council is always looking to expand its knowledge and capabilities. They continually study new forms of magic (AI technologies), guided by the wisdom of the city's citizens (user feedback). Their goal is to make Neurocache a beacon of light in the world of AI, a city where any dream can become reality.

The Neurocache Api is the Oracle: It's the source of wisdom and knowledge, providing answers to the queries it receives. It's powered by a variety of AI technologies, each contributing their unique abilities to the Oracle's knowledge.

FastAPI is the Oracle's Voice: It's the medium through which the Oracle communicates, providing a structured and efficient way for the Oracle to express its wisdom.

Google Cloud Platform is the Oracle's Temple: It's the physical location where the Oracle resides, providing the resources and infrastructure the Oracle needs to function.

API Key Authentication is the Oracle's Gatekeeper: It ensures that only those who are worthy (i.e., those with a valid key) can access the Oracle's wisdom.

Rate Limiting is the Oracle's Timekeeper: It ensures that the Oracle's wisdom is distributed fairly and that no single seeker can monopolize the Oracle's time.

Nginx is the Oracle's Herald: It manages the flow of seekers coming to consult the Oracle, directing them to the right place and ensuring that the Oracle's temple can handle the influx of visitors.

The AI Technologies are the Oracle's Librarians: They manage the vast library of knowledge that the Oracle draws upon to answer queries. Each Librarian specializes in a different type of knowledge, contributing to the Oracle's wide range of wisdom.

The Neurocache Hub is the Oracle's Disciple: It's the primary seeker of the Oracle's wisdom, using the knowledge it gains to train and guide the AI agents. It also serves as a bridge between the Oracle and the outside world, allowing others to benefit from the Oracle's wisdom.

Axios is the Messenger: It carries the queries from the Disciple to the Oracle and brings the Oracle's responses back to the Disciple. It's a crucial link in the chain of communication.

Socket.IO is the Oracle's Whisper: It allows the Oracle to communicate in real-time, whispering updates and notifications to the Disciple as soon as they occur.
