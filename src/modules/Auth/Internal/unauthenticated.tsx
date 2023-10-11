//path: src\modules\Auth\Internal\unauthenticated.tsx

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const Unauthenticated = async (props: ChildProps) => {
    const supabase = createServerComponentClient({ cookies });
    const response = await supabase.auth.getUser();

    if (!response.data.user) {
        return <>{props.children}</>;
    }

    return null;
};
