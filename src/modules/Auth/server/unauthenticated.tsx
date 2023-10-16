//path: src\modules\Auth\server\unauthenticated.tsx

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

interface ChildProps {
    children: React.ReactNode;
}

const Unauthenticated = async (props: ChildProps) => {
    const supabase = createServerComponentClient({ cookies });
    const response = await supabase.auth.getUser();

    if (!response.data.user) {
        return <>{props.children}</>;
    }

    return null;
};

export default Unauthenticated;
