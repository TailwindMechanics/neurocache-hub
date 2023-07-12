//path: src\components\generic\loggedInRedirect.tsx

import RedirectToDashboard from './redirectToDashboard';
import { SignedIn, SignedOut } from '@clerk/nextjs';


interface LoggedInRedirectProps {
  children: React.ReactNode;
}

export default function LoggedInRedirect ({ children }: LoggedInRedirectProps) {
    return <>
      <SignedIn>
        <RedirectToDashboard/>
      </SignedIn>
      <SignedOut>
        {children}
      </SignedOut>
    </>
}