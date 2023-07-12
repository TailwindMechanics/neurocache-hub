//path: src\app\page.tsx

"use client"

import SignedInBadge from '@/components/generic/signedInBadge';
import Dashboard from '@/components/dashboard/dashboard';
import LeftSideBar from '@/components/hub/leftSideBar';
import MainContent from '@/components/hub/mainContent';
import UICanvas from '@/components/generic/uiCanvas';
import { SignedIn, SignedOut } from '@clerk/nextjs';
import Header from '@/components/hub/header';
import { FC } from 'react'
import LoginForm from '@/components/generic/loginForm';


const page: FC = () => {
  return <>
    <UICanvas tailwind="w-full flex-col">
      <div className="flex text-text-light h-screen bg-bg">
        <LeftSideBar />
        <div className={`flex flex-col my-10 mx-10 w-full rounded-xl`}>
          <Header text="Sign in to your account" />
          <MainContent>
            <SignedIn>
              <Dashboard />
            </SignedIn>
            <SignedOut>
                <LoginForm />
            </SignedOut>
          </MainContent>
        </div>
        {/* <Drawer isOpen={isOpen} onClose={() => dispatch(closeDrawer())}></Drawer> */}
      </div>
      <SignedInBadge />
    </UICanvas>
  </>
}

export default page