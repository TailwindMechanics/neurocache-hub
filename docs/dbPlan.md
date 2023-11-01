--===--
# Agent Crud:
1. Agent Creation: *done*
   - Create the agents table
   - Setup the rls policy for the agents table
   - Setup realtime subscription for the agents table
   - Supabase functions
     - Create
     - Delete 
   - When a user creates a new agent we add a row to the agents table in Supabase. 
2. Agent Editing: *in progress*
   - Add a new supabase server function(s) for editing an agent
   - Ensure ui updates accordingly
3. Agent graph recall:
   - When a user clicks on an agent, we recall the graph from supabase and display it in the ui 

# Running agents via api: api.neurocache.ai/agent/run?agentId=1&payload=hello
1. Setup Kong on Koyeb for api keys and endpoints: 
   - Create Koyeb account, research a bit
   - Follow tutorial for Kong setup on Koyeb
   - https://www.koyeb.com/tutorials/use-kong-api-gateway-with-koyeb-serverless-plartform
2. Create a Kong endpoint for running agents:
   - Create a Kong endpoint that accepts an agent ID and a payload string
   - Maybe use Konga for ui stuff
3. Create initial module on koyeb for running agents:
   - Create a simple server function on Koyeb that can wait arbitrarily and emit a response ala hello world
4. Kafka:
   - Setup kafka on Upstash
   - Use it to emit a node output as they output
   - Debug with the simple debug nodes
5. NodePayload: 
   - Create a Golang based router node that can route to other nodes based on the graph structure read from supabase. No need to write back to supabase.
   - Can also handle parsing/sanitizing the payload
   - Router emits via kafka
   - Create a final output when graph is complete
  
# UI and UX improvements:
1. Create reactflow node execution visualization:
   - Using the output data from our api via Kong/kafka
2. Implement optimistic UI Updates:
   - When a user edits an agent, the agent is updated in the database and the UI is updated immediately.

# Update NextJs to v14:
1. Research the potential benefits of updating to nextjs v14
2. Update to nextjs v14 if it makes sense

# Future Considerations:
1. A module could be a model running on runpod, eg memgpt
2. Consider Ably for multiplayer editing and realtime chat
3. New relic for monitoring

--===--