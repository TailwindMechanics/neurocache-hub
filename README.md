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
- State Management: Redux
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

# Development steps:
### React Three Fiber
  1. Install react-three-fiber and three.js:  
    `pnpm add react-three-fiber three`
  2. Create a new component in your project for your Three.js content. For instance, you could create a new file at `src/components/ThreeScene.tsx` and add the following example code:
```jsx
  import { Canvas } from '@react-three/fiber'
  import { Sphere, Plane, Box } from '@react-three/drei';

  export default function ThreeScene() {
      return (
          <Canvas>
              <ambientLight />
              <pointLight position={[10, 10, 10]} />
              <Box position={[-1.2, 0, 0]}>
                  <meshStandardMaterial color={'orange'} />
              </Box>
              <Sphere position={[1.2, 0, 0]}>
                  <meshStandardMaterial color={'white'} />
              </Sphere>
              <Plane position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                  <meshStandardMaterial color={'#282c34'} />
              </Plane>
          </Canvas>
      );
  }
```
  3. Then, you can import this component into your page and use it like any other component. For example, you can add it into your landing page like this:
```jsx
  import { Divider } from "./components/divider";
  import { Hero } from "./components/hero";
  import Content from "./content.json";
  import { Block } from "./components/block";
  import ThreeScene from './components/ThreeScene';

  export default function Home() {
    return (
      <div className="min-h-screen overflow-hidden">
        <div className="flex-col w-main-column mx-auto border border-white">
          <main className="container mx-auto">
            <Block left="5%" right="30%">
              <Divider color={"primary"} />
              <Hero title={Content.NeuroCache} body={Content.Tagline} btn={Content.Enter} />
              <ThreeScene />
            </Block>
          </main>
        </div>
      </div>
    );
  }
```
  4. Please note, this example is quite simple and it just shows basic static 3D objects. If you want to create complex 3D scenes or animations, you will need to dive deeper into Three.js and react-three-fiber. React-three-fiber offers a React renderer for Three.js on the web and react-native.
  5. I would recommend reading through the [react-three-fiber documentation](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction) to get a better understanding of how you can use it to create the 3D content you need.
  6. As for `react-spring`, it is a spring-physics based animation library that should cover most of your UI related animation needs. The steps to integrate `react-spring` would be similar, you would start by installing it, creating animations, and then integrating those animations into your components.
  7. For both libraries, keep in mind that they might require server-side rendering or static-site generation adjustments in Next.js, especially if you are planning to do complex 3D or animations.













  3. Experiment with React Spring
  4. Setup functional aspects of landing page which includes
    - Multiple sections of copy and imagery explaining the product
    - Login, Register, Logout using Clerk's `SignIn` component.

### Authenticated Pages
  1. Set up pages that are only visible to logged-in users.
  2. Use Clerk's `useUser` hook to check if a user is logged in. This can be used to protect the authenticated routes. For example:

```javascript
import { useRouter } from "next/router";
import { useUser } from "@clerk/clerk-react";

export default function AuthenticatedPage() {
  const { user } = useUser();
  const router = useRouter();

  // If no user, redirect to home page
  if (!user) {
    router.push('/');
  }

  // Rest of your authenticated page component
}
```
   3. Set up a navigation bar that includes links to the authenticated pages, which should only appear once a user is logged in.
   4. Include a logout button using Clerk's SignOutButton component.

### Remember:
   - Ensure that any links to authenticated pages are only visible to logged-in users.
   - Refer to the Clerk documentation for more detailed instructions and examples.