//path: src\components\generic\loggedOutRedirect.tsx

import RedirectToLanding from './redirectToLanding';
import SignedOut from './signedOut';
import SignedIn from './signedIn';


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