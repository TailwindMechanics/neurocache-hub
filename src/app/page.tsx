// src\app\page.tsx
import { Block } from "./components/layout/block";
import { Hero } from "./components/layout/hero";
import Content from "./content.json";


export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden"
      style={{ paddingLeft: "1.5%", paddingRight: "60%", paddingTop: "1.5%", paddingBottom: "1.5%" }}>
      <div className="border border-primary border-opacity-10 hover:border-opacity-40 hover:border-primary flex flex-col bg-background">
        <main className="container mx-auto flex-grow pr-3">
          <Block left="2%" right="0%" top="2%">
            <Hero title={Content.Neurocache} imgUrl="/images/neurocache.png" />
          </Block>
          <Block left="2%" right="0%">
            <Hero body={Content.Tagline} btn={Content.Enter} />
          </Block>
        </main>
      </div>
    </div>
  );
}
