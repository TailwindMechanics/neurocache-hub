//path: src\modules\Auth\client\hooks\useLoggedIn.tsx

"use client";

import { useEffect, useState } from "react";
import {
    createClientComponentClient,
    Session,
    User,
} from "@supabase/auth-helpers-nextjs";

const useLoggedIn = (onLoggedIn: (user: User) => void) => {
    const [session, setSession] = useState<Session>();
    const supabase = createClientComponentClient();

    useEffect(() => {
        const fetchSession = async () => {
            const response = await supabase.auth.getSession();
            if (response.error) {
                console.log(
                    `Error fetching session: ${response.error.message}`,
                );
                return;
            }
            if (!response.data.session) {
                console.log("No session found");
                return;
            }

            setSession(response.data.session);
        };

        fetchSession();
    }, [supabase.auth]);

    useEffect(() => {
        const { data: authListener } = supabase.auth.onAuthStateChange(
            (event, newSession) => {
                if (event === "SIGNED_IN" && !session && newSession) {
                    onLoggedIn(newSession.user);
                }
            },
        );

        return () => {
            authListener.subscription.unsubscribe();
        };
    }, [onLoggedIn, session, supabase.auth]);
};

export default useLoggedIn;
