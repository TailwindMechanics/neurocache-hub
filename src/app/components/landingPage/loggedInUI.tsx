//path: src\app\components\landingPage\loggedInUI.tsx

import SignedInBadge from "../generic/react/signedInBadge";
import { LivePanel } from "../generic/react/livePanel";
import { Divider } from "../generic/react/divider";


export default function LoggedInUI() {
  return <>
    <SignedInBadge />
    <LivePanel bgAlpha={{ min: 0.01, max: 1 }} tailwind="bg-background shadow-lg border border-secondary border-opacity-0 hover:border-opacity-30">
      <Divider />
      <div className="flex items-center hero-content">
        <LivePanel bgAlpha={{ min: 0, max: 1 }} tailwind="bg-background">
          <img className="ml-0 mt-0 w-24 h-24" src={"/images/neurocache.png"} alt={"Neurocache"} />
        </LivePanel>
      </div>
    </LivePanel>
  </>
}
