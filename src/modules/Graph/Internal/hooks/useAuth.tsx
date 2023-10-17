//path: src\modules\Graph\Internal\hooks\useAuth.tsx

import { useState, useEffect, useCallback } from "react";
import {
    createClientComponentClient,
    User,
} from "@supabase/auth-helpers-nextjs";

type AuthError = Error | null;

export const useAuth = () => {
    const supabase = createClientComponentClient();
    const [user, setUser] = useState<User | null>(null);
    const [error, setError] = useState<AuthError>(null);

    useEffect(() => {
        const fetchUser = async () => {
            const sessionResponse = await supabase.auth.getSession();
            if (!sessionResponse.data.session) return;

            const response = await supabase.auth.getUser();
            if (response.error) {
                setError(response.error);
                return;
            }

            setUser(response.data.user);
        };

        fetchUser();
    }, [supabase.auth]);

    const signUp = useCallback(
        async (email: string, password: string) => {
            if (password !== password) {
                setError(new Error("Passwords do not match!"));
                return;
            }

            const response = await supabase.auth.signUp({
                email,
                password,
            });

            if (response.error) {
                setError(response.error);
                return;
            }

            setUser(response.data.user);
        },
        [supabase.auth],
    );

    const signIn = useCallback(
        async (email: string, password: string) => {
            const response = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (response.error) {
                setError(response.error);
                return;
            }

            setUser(response.data.user);
        },
        [supabase.auth],
    );

    const signOut = useCallback(async () => {
        await supabase.auth.signOut();
        setUser(null);
    }, [supabase.auth]);

    return {
        user,
        error,
        signUp,
        signIn,
        signOut,
    };
};
