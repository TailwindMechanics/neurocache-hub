// src\app\page.tsx
import { Divider } from "./components/divider";
import { TextBox } from "./components/textBox";
import { Block } from "./components/block";
import { Hero } from "./components/hero";
import Content from "./content.json";


export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="flex-col w-main-column mx-auto justify-center items-start">
        <main className="container mx-auto">
          <Block left="0%" right="20%" top="2%">
            <TextBox text={Content.Tagline} />
          </Block>
          <Block left="5%" right="30%">
            <Divider color={"primary"} />
            <Hero title={Content.Neurocache} body={Content.Tagline} btn={Content.Enter} />
          </Block>
          <Block left="5%" right="30%">
            <Divider color={"primary"} />
            <Hero title={Content.Neurocache} body={Content.Tagline} btn={Content.Enter} />
          </Block>
        </main>
      </div>
    </div>
  );
}
