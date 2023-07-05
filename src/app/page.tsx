//path: src\app\page.tsx

"use client"

import CityBackground from "./components/virtualBackground/cityBackground";
import ThreeCanvas from "./components/generic/three/threeCanvas";
import LandingPage from "./components/landingPage/landingPage";
import { Loading } from "./components/generic/react/loading";
import UICanvas from "./components/generic/react/uiCanvas";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Suspense } from "react";


export default function Home() {
  return <>
    <ThreeCanvas>
      <CityBackground />
    </ThreeCanvas>
    <SignedIn>
      <Suspense fallback={<Loading />}>
        <UICanvas tailwind="w-1/6 flex-col">
          <LandingPage.LoggedInUI />
        </UICanvas>
      </Suspense>
    </SignedIn>
    <SignedOut>
      <UICanvas tailwind="w-1/4 flex-col">
        <LandingPage.LoggedOutUI />
      </UICanvas>
    </SignedOut>
  </>
}