//path: src\app\components\landingPage\loggedOutUI.tsx

import { CustomSignInButton } from "../generic/react/customSignInButton";
import { LivePanel } from "../generic/react/livePanel";
import { Divider } from "../generic/react/divider";
import Content from "src/app/data/content.json";


export default function LoggedOutUI() {
    return <>
        <LivePanel bgAlpha={{ min: 0.7, max: 1 }} tailwind="bg-opacity-100 bg-background shadow-2xl border border-secondary border-opacity-0 hover:border-opacity-30">
            <h1 className='flex justify-center -mb-2 text-5xl font-bold text-primary'>{Content.Neurocache}</h1>
        </LivePanel>
        <LivePanel bgAlpha={{ min: 0.5, max: 1 }} tailwind='bg-background shadow-2xl flex flex-col border border-secondary border-opacity-0 hover:border-opacity-30'>
            <Divider />
            <p className={`mx-10 mb-3 mt-4 text-xl font-bold text-primary`}>{Content.Tagline}</p>
            <Divider />
        </LivePanel>
        <LivePanel bgAlpha={{ min: 0.7, max: 1 }} tailwind='bg-opacity-100 bg-background shadow-2xl flex flex-col border border-secondary border-opacity-0 hover:border-opacity-30'>
            <div className="ml-5 my-4 flex">
                <CustomSignInButton />
            </div>
        </LivePanel>
    </>
}