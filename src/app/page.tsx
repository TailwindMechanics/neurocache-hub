//path: src\app\page.tsx

"use client"

import Dashboard from '@/components/dashboard/dashboard';
import SideDrawer from '@/components/drawer/sideDrawer';
import LeftSideBar from '@/components/hub/leftSideBar';
import MainContent from '@/components/hub/mainContent';
import LoginForm from '@/components/generic/loginForm';
import SignedOut from '@/components/generic/signedOut';
import UICanvas from '@/components/generic/uiCanvas';
import SignedIn from '@/components/generic/signedIn';
import Header from '@/components/hub/header';
import { FC } from 'react'


const page: FC = () => {
  return <>
    <UICanvas tailwind="w-full flex-col">
      <div className="flex text-text-light h-screen bg-bg">
        <LeftSideBar />
        <div className={`flex flex-col my-10 mx-10 w-full rounded-xl`}>
          <SignedIn>
            <Header text="Dashboard" />
          </SignedIn>
          <SignedOut>
            <Header text="Sign in to your account" />
          </SignedOut>
          <MainContent>
            <SignedIn>
              <Dashboard />
            </SignedIn>
            <SignedOut>
              <LoginForm />
            </SignedOut>
          </MainContent>
        </div>
        <SideDrawer />
      </div>
    </UICanvas>
  </>
}

export default page