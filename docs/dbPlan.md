--===--
# Agent Crud: *done*
1. Agent Creation: *done*
   - Create the agents table
   - Setup the rls policy for the agents table
   - Setup realtime subscription for the agents table
   - Supabase functions
     - Create
     - Delete 
   - When a user creates a new agent we add a row to the agents table in Supabase. 
2. Agent Editing: *done*
   - Add a new supabase server function(s) for editing an agent
   - Ensure ui updates accordingly
3. Agent graph recall: *done*
   - When a user clicks on an agent, we recall the graph from supabase and display it in the ui 
4. Create a concept of some persistent ui *done*
   - Still nodes but maybe can't be moved or something
   - Also there's no need to reload the agent cache each time we switch agent

# Running agents via api: *in progress*
1. Setup Kong Konnect *done*
   - Create and test local kong gateway image
2.  Setup koyeb *in progress*
   - Create a new app on koyeb using image: kong/kong-gateway:3.4
   - Create koyeb secrets for sensitive env variables
   - Assign env variables to new koyeb kong app
   - Ensure network settings eg port are correct found here: https://www.koyeb.com/tutorials/use-kong-api-gateway-with-koyeb-serverless-plartform
   - Test to ensure it's working
3. Domain and DNS Configuration:
   - Configure your domain registrar (Namecheap) DNS settings to point to the IP address or hostname of your Kong Gateway on Koyeb.
   - Setup a CNAME or A record for subdomain neurocache.dev pointing to your Koyeb service.
   - Configure Kong to handle traffic for your custom domain (neurocache.dev).
4. Create a Kong endpoint for running agents:
   - eg neurocache.dev/agent/run
   - Create a Kong endpoint that accepts an agent ID and a payload string
   - Maybe use Konga for ui stuff
5. Create initial module on koyeb for running agents:
   - Create a simple server function on Koyeb that can wait arbitrarily and emit a response ala hello world
6. Kafka:
   - Setup kafka on Upstash
   - Use it to emit a node output as they output
   - Debug with the simple debug nodes
7. NodePayload: 
   - Will need a concept of an input node and output node(s) on ai app, such that dev app receives the output
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
4. Utilize Kong's ability to execute custom Lua code to identify and redirect browser traffic from neurocache.dev to neurocache.ai
--===--





