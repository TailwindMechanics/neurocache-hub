//path: src\modules\Auth\server\unauthenticated.tsx

"use server";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies as getCookieHeader } from "next/headers";

interface ChildProps {
    children: React.ReactNode;
}

const Unauthenticated = async (props: ChildProps) => {
    const cookieHeader = getCookieHeader();
    const supabase = createServerComponentClient({
        cookies: () => cookieHeader,
    });
    const response = await supabase.auth.getUser();

    if (!response.data.user) {
        return <>{props.children}</>;
    }

    return null;
};

export default Unauthenticated;
