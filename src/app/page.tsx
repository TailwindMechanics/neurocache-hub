// src\app\page.tsx
"use client"
import { CustomSignInButton } from "./components/layout/customSignInButton";
import { Divider } from "./components/virtualBackground/divider";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { LivePanel } from "./components/layout/livePanel";
import { Block } from "./components/layout/block";
import Content from "./content.json";





export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden"
      style={{ paddingLeft: "1.5%", paddingRight: "70%", paddingTop: "1.5%", paddingBottom: "1.5%" }}>
      <div style={{ position: 'fixed', right: '1rem', top: '1rem' }}> {/* CSS added here */}
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
      <div className="flex flex-col">
        <main className="container mx-auto flex-grow pr-3">
          <Block>
            <SignedIn>
              <LivePanel bgAlpha={{ min: 0.01, max: 1 }} tailwind="bg-background shadow-lg border border-secondary border-opacity-0 hover:border-opacity-30">
                <Divider/>
                <div className="flex items-center hero-content">
                  <LivePanel bgAlpha={{ min: 0, max: 1 }} tailwind="bg-background">
                    <img className="ml-0 mt-0 w-24 h-24" src={"/images/neurocache.png"} alt={"Neurocache"} />
                  </LivePanel>
                </div>
              </LivePanel>
            </SignedIn>
            <SignedOut>
              <LivePanel bgAlpha={{ min: 0.9, max: 1 }} tailwind="bg-background shadow-2xl flex items-center">
                <LivePanel>
                  <div>
                    <h1 className={`ml-5 mb-0 mt-0 text-5xl font-bold text-primary`}>{Content.Neurocache}</h1>
                    <Divider />
                  </div>
                </LivePanel>
              </LivePanel>
              <LivePanel bgAlpha={{ min: 0.9, max: 1 }} tailwind='bg-background shadow-2xl flex flex-col border border-secondary border-opacity-0 hover:border-opacity-30'>
                <LivePanel>
                  <p className={`mx-10 mb-3 mt-4 text-xl text-justify text-primary`}>{Content.Tagline}</p>
                  <Divider />
                </LivePanel>
                <LivePanel>
                  <div className="ml-5 my-4 flex">
                    <CustomSignInButton />
                  </div>
                </LivePanel>
              </LivePanel>
            </SignedOut>
          </Block>
        </main>
      </div>
    </div>
  );
}