//path: src\modules\Auth\authenticated.tsx

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

interface AuthenticatedProps {
    children: React.ReactNode;
}

export const Authenticated = async (props: AuthenticatedProps) => {
    const supabase = createServerComponentClient({ cookies });
    const response = await supabase.auth.getUser();

    if (response.data.user) {
        return <>{props.children}</>;
    }

    return null;
};
