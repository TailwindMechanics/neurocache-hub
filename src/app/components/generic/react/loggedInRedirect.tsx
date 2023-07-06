//path: src\app\components\generic\react\loggedInRedirect.tsx

import { SignedIn, SignedOut } from '@clerk/nextjs';
import RedirectHome from './redirectHome';


interface LoggedInRedirectProps {
  children: React.ReactNode;
}

export default function LoggedInRedirect ({ children }: LoggedInRedirectProps) {
    return <>
      <SignedIn>
        {children}
      </SignedIn>
      <SignedOut>
        <RedirectHome/>
      </SignedOut>
    </>
}