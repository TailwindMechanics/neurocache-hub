//path: src\components\z_deprecated\generic\loggedInRedirect.tsx

import RedirectToDashboard from "./redirectToDashboard";
import SignedOut from "./signedOut";
import SignedIn from "./signedIn";

interface LoggedInRedirectProps {
	children: React.ReactNode;
}

export default function LoggedInRedirect({ children }: LoggedInRedirectProps) {
	return (
		<>
			<SignedIn>
				<RedirectToDashboard />
			</SignedIn>
			<SignedOut>{children}</SignedOut>
		</>
	);
}
