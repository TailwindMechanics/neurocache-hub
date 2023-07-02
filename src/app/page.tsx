// src\app\page.tsx
import { Divider } from "./components/divider";
import { Block } from "./components/block";
import { Hero } from "./components/hero";
import Content from "./content.json";


export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      <div className="flex-col w-main-column mx-auto border border-white justify-center items-start">
        <main className="container mx-auto">
          <Block left="5%" right="30%">
            <Divider color={"primary"} />
            <Hero title={Content.Neurocache} body={Content.Tagline} btn={Content.Enter} />
          </Block>
        </main>
      </div>
    </div>
  );
}
