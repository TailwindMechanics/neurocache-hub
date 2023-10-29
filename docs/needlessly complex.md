1. Supabase (implemented):
   - Description: An open-source Firebase alternative that provides capabilities for real-time subscriptions, authentication, and a PostgreSQL database for structured data management.
   - Integration: As the primary data store, Supabase will hold the essential data while interacting with Neo4j for graph-related operations, and with PartyKit for real-time updates and chat functionality.
2. Neo4j (todo):
   - Description: A highly performant graph database management system known for efficiently storing, managing, and querying data in graph structures.
   - Integration: Serving as a slave to the agents table in Supabase, Neo4j will manage the execution of graphs created in React Flow, enabling efficient querying and analysis of graph-structured data.
3. Koyeb (todo):
   - Description: A serverless platform that facilitates the execution of code via microservices, edge functions, or containers, and provides an API layer for applications.
   - Integration: Handling the execution of nodes and serving as the API layer, Koyeb will manage the microservices architecture, ensuring smooth operation and communication between the different parts of the system.
4. PartyKit (todo):
   - Description: An open-source platform designed for real-time collaboration, enabling features like chat and shared editing on applications.
   - Integration: Initially facilitating the chat functionality and later the collaborative editing of graphs in React Flow, PartyKit will enhance the real-time interactive aspect of the application, making collaborative work seamless.
