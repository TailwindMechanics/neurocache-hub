//path: src\modules\Auth\server\authenticated.tsx

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

interface ChildProps {
    children: React.ReactNode;
}

const Authenticated = async (props: ChildProps) => {
    const supabase = createServerComponentClient({ cookies });
    const response = await supabase.auth.getUser();

    console.log(response.data);

    if (response.data.user) {
        return <>{props.children}</>;
    }

    return null;
};

export default Authenticated;
