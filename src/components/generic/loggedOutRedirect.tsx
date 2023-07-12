//path: src\components\generic\loggedOutRedirect.tsx

import { SignedIn, SignedOut } from '@clerk/nextjs';
import RedirectToLanding from './redirectToLanding';


interface LoggedOutRedirectProps {
  children: React.ReactNode;
}

export default function LoggedOutRedirect ({ children }: LoggedOutRedirectProps) {
    return <>
      <SignedIn>
        {children}
      </SignedIn>
      <SignedOut>
        <RedirectToLanding/>
      </SignedOut>
    </>
}