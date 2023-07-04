// src\app\page.tsx
"use client"

import ThreeCanvas from "./components/virtualBackground/threeCanvas";
import LandingPage from "./components/landingPage/landingPage";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import UICanvas from "./components/layout/uiCanvas";


export default function Home() {
  return <>
    <ThreeCanvas />
    <SignedIn>
      <UICanvas tailwind="w-1/6 flex-col">
        <LandingPage.LoggedInUI />
      </UICanvas>
    </SignedIn>
    <SignedOut>
      <UICanvas tailwind="w-1/4 flex-col">
        <LandingPage.LoggedOutUI />
      </UICanvas>
    </SignedOut>
  </>
}