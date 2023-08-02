

# Create Base Node
2. Create src/nodes/BaseNode.tsx
3. Implement required anatomy (ports, activate, deactivate)
4. Export BaseNode component

# Create APIRequest Node
5. Create src/nodes/APIRequestNode.tsx
6. Extend BaseNode
7. Implement button to activate API call
8. Call OpenAI API endpoint
9. Output response to output port

# Create DisplayText Node
10. Create src/nodes/DisplayTextNode.tsx 
11. Extend BaseNode 
12. Display input string on node

# Create React Flow Component
13. Create src/App.tsx
14. Import APIRequestNode, DisplayTextNode
15. Compose flow with nodes
16. Pass nodes to <ReactFlow>

# Add React Flow Styles
17. Import 'reactflow/dist/style.css'

# Run Dev Server
18. pnpm run dev
19. Test end-to-end flow!