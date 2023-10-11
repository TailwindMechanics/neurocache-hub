//path: src\modules\Auth\Internal\authenticated.tsx

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const Authenticated = async (props: ChildProps) => {
    const supabase = createServerComponentClient({ cookies });
    const response = await supabase.auth.getUser();

    if (response.data.user) {
        return <>{props.children}</>;
    }

    return null;
};
