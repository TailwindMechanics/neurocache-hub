//path: src\components\generic\loggedInRedirect.tsx

import { SignedIn, SignedOut } from '@clerk/nextjs';
import RedirectToLanding from './redirectToLanding';


interface LoggedInRedirectProps {
  children: React.ReactNode;
}

export default function LoggedInRedirect ({ children }: LoggedInRedirectProps) {
    return <>
      <SignedIn>
        {children}
      </SignedIn>
      <SignedOut>
        <RedirectToLanding/>
      </SignedOut>
    </>
}