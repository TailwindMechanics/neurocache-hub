//path: src\app\page.tsx

"use client"

import CityBackground from "@/threeComponents/virtualBackground/cityBackground";
import LandingPage from "@/components/landingPage/landingPage";
import ThreeCanvas from "@/threeComponents/threeCanvas";
import { Loading } from "@/components/generic/loading";
import UICanvas from "@/components/generic/uiCanvas";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Suspense } from "react";


export default function Home() {
  return <>
    <Suspense fallback={<Loading />}>
      <ThreeCanvas>
        <CityBackground />
      </ThreeCanvas>
    </Suspense>
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