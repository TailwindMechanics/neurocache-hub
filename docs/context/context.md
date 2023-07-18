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
