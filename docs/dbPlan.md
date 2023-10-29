--==--
# Agent Crud:
1. Agent Creation:
   - When a user creates a new agent we add a row to the agents table in Supabase. 
   - Which the user can then edit, later we can auto take the user into edit mode upon creation.
2. Real-Time Subscription for Agent Editing:
   - During agent editing, the user subscribes to the agent row for live editing.
   - The database remains the source of truth; no mirrored data structure on the client side.
   - User pushes a change to a record, ui does not update until the database confirms the change. 
   - Optimistic UI updates come later.
   - There is no concept of saving the agent at the end, the agent is always saved by nature of writing directly to the db.
3. Agent Deletion:
   - Implement the deletion of an agent row from the agents table in Supabase.
   - This happens outside of the subscription.

# Running agents via api: neurocache.ai/api/agents/run
1. Setup Kong on Koyeb for api keys and endpoints: 
   - Create Koyeb account, research a bit
   - Follow tutorial for Kong setup on Koyeb
   - https://www.koyeb.com/tutorials/use-kong-api-gateway-with-koyeb-serverless-plartform
2. Create initial module on koyeb for running agents:
   - Create a simple serverless function that accepts a NodePayload and returns a NodePayload
   - NodePayload contains array of input handle IDs and payload string
   - The node will parse its output handle IDs and execute those nodes
   - The node adds its output to the Output column in the Agent row
   - Kong can subscribe to the Output record and send a notification to the user
   - The potential use of RabbitMQ for a controlled client-to-API stream also sounds like a reasonable consideration for future development
   - There is no concept of final output, just a series of nodes that execute and update the output record
   - The next time the agent is run the output record will be reset
3. Create a Kong endpoint for running agents:
   - Create a Kong endpoint that accepts an agent ID and a payload string
  
# UI and UX improvements:
1. Create reactflow node execution visualization:
   - Using the output data from our api via Kong, not via direct subscription to supabase. 
   - Such that the flow is exactly the same as if you were executing the agent in the users codebase via the api. We just happen to use it in the nextjs app for visualization purposes.
2. Implement optimistic UI Updates:
   - When a user edits an agent, the agent is updated in the database and the UI is updated immediately.

# Update NextJs to v14:
1. Research the potential benefits of updating to nextjs v14
2. Update to nextjs v14 if it makes sense

# Future Considerations:
1. A module could be a model running on runpod, eg memgpt